import { useEffect, useRef, useState } from 'react';

interface ARModelProps {
  pais: string;
  onInfoClick?: () => void;
}

function ARModel({ pais, onInfoClick }: ARModelProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const sceneElementRef = useRef<HTMLElement | null>(null);
  const modelEntityHiroRef = useRef<HTMLElement | null>(null);
  const modelEntityCustomRef = useRef<HTMLElement | null>(null);
  const particlesEntityHiroRef = useRef<HTMLElement | null>(null);
  const particlesEntityCustomRef = useRef<HTMLElement | null>(null);
  const [modeloCargado, setModeloCargado] = useState(false);
  const [infoModeActive, setInfoModeActive] = useState(false);
  const [marcadorDetectado, setMarcadorDetectado] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('');

  useEffect(() => {
    if (!sceneRef.current) return;

    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || !window.AFRAME) {
        console.error('A-Frame no está cargado');
        setDebugInfo('Error: A-Frame no cargado');
        return;
      }

      // Mapeo de nombres de países a nombres de archivo
      const mapaModelos: Record<string, string> = {
        'MÉXICO': 'mexico',
        'SUDÁFRICA': 'sudafrica',
        'COREA DEL SUR': 'corea',
        'COLOMBIA': 'colombia',
        'UZBEKISTÁN': 'uzbekistan',
        'TÚNEZ': 'tunez',
        'JAPÓN': 'japon',
        'ESPAÑA': 'espana',
        'URUGUAY': 'uruguay'
      };

      // Colores por país (para el cubo de respaldo)
      const coloresPorPais: Record<string, string> = {
        'MÉXICO': '#ce1126',
        'SUDÁFRICA': '#007a4d',
        'COREA DEL SUR': '#cd2e3a',
        'COLOMBIA': '#fcd116',
        'UZBEKISTÁN': '#0099b5',
        'TÚNEZ': '#e70013',
        'JAPÓN': '#bc002d',
        'ESPAÑA': '#aa1519',
        'URUGUAY': '#0038a8'
      };

      const color = coloresPorPais[pais] || '#ffffff';
      const nombreModelo = mapaModelos[pais];
      const rutaModelo = `/modelos/${nombreModelo}.glb`;

      // Limpiar el contenedor
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }

      // Crear la escena AR.js con configuración mejorada para patrones personalizados
      const scene = document.createElement('a-scene');
      scene.setAttribute('embedded', '');
      scene.setAttribute('vr-mode-ui', 'enabled: false');
      scene.setAttribute('renderer', 'logarithmicDepthBuffer: true; alpha: true; antialias: true; colorManagement: true; exposure: 2.0');
      // Importante: patternRatio 0.5 es el estándar para marcadores personalizados
      scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: true; detectionMode: mono; patternRatio: 0.5; labelingMode: black_region;');
      scene.style.position = 'fixed';
      scene.style.top = '0';
      scene.style.left = '0';
      scene.style.width = '100vw';
      scene.style.height = '100vh';
      scene.style.zIndex = '2';
      scene.style.background = 'transparent';
      scene.style.pointerEvents = 'none';

      // ========== FUNCIONES PARA CREAR CONTENIDO ==========
      
      const createLoadingGroup = () => {
        const loadingGroup = document.createElement('a-entity');
        loadingGroup.setAttribute('id', 'loading-group');
        loadingGroup.setAttribute('position', '0 0 0');
        
        // 1. Cubo principal (gigante y brillante)
        const mainCube = document.createElement('a-box');
        mainCube.setAttribute('position', '0 0.5 0');
        mainCube.setAttribute('rotation', '0 45 0');
        mainCube.setAttribute('width', '1.2');
        mainCube.setAttribute('height', '1.2');
        mainCube.setAttribute('depth', '1.2');
        mainCube.setAttribute('color', color);
        mainCube.setAttribute('material', `color: ${color}; roughness: 0.2; metalness: 0.1; emissive: ${color}; emissiveIntensity: 0.8`);
        mainCube.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 8000; easing: linear');
        loadingGroup.appendChild(mainCube);

        // 2. ESFERAS GIGANTES ALREDEDOR (partículas visibles)
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
        
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 2.0;
          
          const sphere = document.createElement('a-sphere');
          sphere.setAttribute('radius', '0.4');
          sphere.setAttribute('color', colors[i % colors.length]);
          sphere.setAttribute('material', 'emissive: #FFFFFF; emissiveIntensity: 2.0');
          sphere.setAttribute('position', `${Math.cos(angle) * radius} ${Math.sin(angle) * 0.5 + 0.5} ${Math.sin(angle) * radius}`);
          
          // Animación de movimiento
          sphere.setAttribute('animation', `property: position; to: ${Math.cos(angle + 0.2) * radius} ${Math.sin(angle + 0.2) * 0.5 + 0.5} ${Math.sin(angle + 0.2) * radius}; loop: true; dur: 2000; easing: easeInOutSine`);
          
          loadingGroup.appendChild(sphere);
        }

        // 3. TORRES DE LUCES (cilindros brillantes)
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.5;
          
          const pillar = document.createElement('a-cylinder');
          pillar.setAttribute('radius', '0.15');
          pillar.setAttribute('height', '1.0');
          pillar.setAttribute('color', '#FFFFFF');
          pillar.setAttribute('material', 'emissive: #FFFFFF; emissiveIntensity: 3.0');
          pillar.setAttribute('position', `${Math.cos(angle) * radius} 0.8 ${Math.sin(angle) * radius}`);
          
          loadingGroup.appendChild(pillar);
        }

        // 4. TEXTO DE CARGA (para confirmar que algo está pasando)
        const loadingText = document.createElement('a-text');
        loadingText.setAttribute('value', 'Cargando...');
        loadingText.setAttribute('color', '#FFFFFF');
        loadingText.setAttribute('position', '0 2 -1');
        loadingText.setAttribute('scale', '1 1 1');
        loadingText.setAttribute('align', 'center');
        loadingText.setAttribute('material', 'emissive: #FFFFFF; emissiveIntensity: 1.0');
        loadingGroup.appendChild(loadingText);

        return loadingGroup;
      };

      const createModelEntity = (markerType: string) => {
        const modelEntity = document.createElement('a-entity');
        modelEntity.setAttribute('id', `modelo-3d-${markerType}`);
        modelEntity.setAttribute('position', '0 0 0');
        modelEntity.setAttribute('scale', '0.1 0.1 0.1');
        modelEntity.setAttribute('visible', 'false');

        // Intentar cargar el modelo GLB
        fetch(rutaModelo)
          .then(response => {
            if (response.ok) {
              modelEntity.setAttribute('gltf-model', rutaModelo);
              modelEntity.setAttribute('scale', '0.15 0.15 0.15');
              
              modelEntity.addEventListener('model-loaded', () => {
                console.log(`Modelo cargado correctamente en ${markerType}`);
                setModeloCargado(true);
                setDebugInfo(prev => prev + ` | Modelo cargado en ${markerType}`);
              });

              modelEntity.addEventListener('model-error', (e: any) => {
                console.log(`Error al cargar modelo en ${markerType}:`, e);
                setDebugInfo(prev => prev + ` | Error modelo ${markerType}`);
              });
            } else {
              setDebugInfo(prev => prev + ` | Modelo no encontrado para ${markerType}`);
            }
          })
          .catch((err) => {
            console.log('Error al verificar modelo:', err);
            setDebugInfo(prev => prev + ` | Error fetch ${markerType}`);
          });

        return modelEntity;
      };

      const createParticlesGroup = () => {
        const particlesGroup = document.createElement('a-entity');
        particlesGroup.setAttribute('id', 'particles-group');
        particlesGroup.setAttribute('position', '0 0 0');
        particlesGroup.setAttribute('visible', 'false');

        // Crear partículas orbitando alrededor del modelo
        const particleColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
        
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 1.2 + Math.random() * 0.5;
          const height = 0.3 + Math.random() * 1.0;
          const orbitDuration = 3000 + Math.random() * 2000;
          
          const particle = document.createElement('a-sphere');
          particle.setAttribute('radius', '0.08');
          particle.setAttribute('color', particleColors[i % particleColors.length]);
          particle.setAttribute('material', `emissive: ${particleColors[i % particleColors.length]}; emissiveIntensity: 1.5; transparent: true; opacity: 0.9`);
          
          // Posición inicial
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          particle.setAttribute('position', `${x} ${height} ${z}`);
          
          // Animación de órbita
          particle.setAttribute('animation', `
            property: position;
            to: ${Math.cos(angle + Math.PI * 2) * radius} ${height + 0.2} ${Math.sin(angle + Math.PI * 2) * radius};
            loop: true;
            dur: ${orbitDuration};
            easing: linear
          `);
          
          // Animación de escala pulsante
          particle.setAttribute('animation__scale', `
            property: scale;
            to: 1.5 1.5 1.5;
            dir: alternate;
            loop: true;
            dur: ${1000 + Math.random() * 1000};
            easing: easeInOutSine
          `);
          
          particlesGroup.appendChild(particle);
        }

        // Añadir líneas de conexión entre partículas (efecto de red)
        for (let i = 0; i < 8; i++) {
          const line = document.createElement('a-entity');
          line.setAttribute('geometry', 'primitive: cylinder; radius: 0.02; height: 2');
          line.setAttribute('material', `color: ${color}; transparent: true; opacity: 0.4; emissive: ${color}; emissiveIntensity: 0.5`);
          line.setAttribute('position', '0 0.5 0');
          line.setAttribute('rotation', `${Math.random() * 360} ${Math.random() * 360} ${Math.random() * 360}`);
          
          // Animación de rotación de líneas
          line.setAttribute('animation', `
            property: rotation;
            to: ${Math.random() * 360 + 360} ${Math.random() * 360 + 360} ${Math.random() * 360 + 360};
            loop: true;
            dur: ${5000 + Math.random() * 5000};
            easing: linear
          `);
          
          particlesGroup.appendChild(line);
        }

        return particlesGroup;
      };

      // ========== MARCADOR HIRO ==========
      const markerHiro = document.createElement('a-marker');
      markerHiro.setAttribute('preset', 'hiro');
      markerHiro.setAttribute('id', 'marker-hiro');
      markerHiro.setAttribute('smooth', 'true');
      markerHiro.setAttribute('smoothCount', '5');
      markerHiro.setAttribute('emitevents', 'true');

      const loadingGroupHiro = createLoadingGroup();
      const modelEntityHiro = createModelEntity('hiro');
      const particlesGroupHiro = createParticlesGroup();

      markerHiro.appendChild(loadingGroupHiro);
      markerHiro.appendChild(modelEntityHiro);
      markerHiro.appendChild(particlesGroupHiro);

      // Eventos del marcador Hiro
      markerHiro.addEventListener('markerFound', () => {
        console.log('Marcador Hiro detectado');
        setMarcadorDetectado('Hiro');
        setDebugInfo('Hiro detectado');
        loadingGroupHiro.setAttribute('visible', 'false');
        modelEntityHiro.setAttribute('visible', 'true');
      });

      markerHiro.addEventListener('markerLost', () => {
        console.log('Marcador Hiro perdido');
        setMarcadorDetectado(null);
        setDebugInfo('Hiro perdido');
        loadingGroupHiro.setAttribute('visible', 'true');
        modelEntityHiro.setAttribute('visible', 'false');
      });

      // ========== MARCADOR PERSONALIZADO ==========
      // IMPORTANTE: Verificar que el archivo .patt existe en la ruta correcta
      const markerCustom = document.createElement('a-marker');
      markerCustom.setAttribute('type', 'pattern');
      // Usar URL absoluta para evitar problemas de ruta
      const patternUrl = `${window.location.origin}/markers/marcador_Logo.patt`;
      markerCustom.setAttribute('url', patternUrl);
      markerCustom.setAttribute('id', 'marker-kickoff');
      markerCustom.setAttribute('smooth', 'true');
      markerCustom.setAttribute('smoothCount', '5');
      markerCustom.setAttribute('emitevents', 'true');
      // Tamaño del marcador en metros (importante para la detección)
      markerCustom.setAttribute('size', '1');

      console.log('URL del patrón personalizado:', patternUrl);
      setDebugInfo(`Cargando patrón: ${patternUrl}`);

      const loadingGroupCustom = createLoadingGroup();
      const modelEntityCustom = createModelEntity('custom');
      const particlesGroupCustom = createParticlesGroup();

      markerCustom.appendChild(loadingGroupCustom);
      markerCustom.appendChild(modelEntityCustom);
      markerCustom.appendChild(particlesGroupCustom);

      // Eventos del marcador personalizado
      markerCustom.addEventListener('markerFound', () => {
        console.log('Marcador Kickoff detectado');
        setMarcadorDetectado('Kickoff');
        setDebugInfo('Kickoff detectado');
        loadingGroupCustom.setAttribute('visible', 'false');
        modelEntityCustom.setAttribute('visible', 'true');
      });

      markerCustom.addEventListener('markerLost', () => {
        console.log('Marcador Kickoff perdido');
        setMarcadorDetectado(null);
        setDebugInfo('Kickoff perdido');
        loadingGroupCustom.setAttribute('visible', 'true');
        modelEntityCustom.setAttribute('visible', 'false');
      });

      // Evento de error para el marcador personalizado
      markerCustom.addEventListener('markerError', (e: any) => {
        console.error('Error en marcador personalizado:', e);
        setDebugInfo(`Error marcador: ${e.detail || 'desconocido'}`);
      });

      // Guardar referencias
      modelEntityHiroRef.current = modelEntityHiro;
      modelEntityCustomRef.current = modelEntityCustom;
      particlesEntityHiroRef.current = particlesGroupHiro;
      particlesEntityCustomRef.current = particlesGroupCustom;

      // ========== ILUMINACIÓN ==========
      
      // Luz ambiental
      const ambientLight = document.createElement('a-light');
      ambientLight.setAttribute('type', 'ambient');
      ambientLight.setAttribute('color', '#ffffff');
      ambientLight.setAttribute('intensity', '2.5');
      
      // Luces direccionales
      const lightPositions = [
        [2, 3, 2], [-2, 3, -2], [2, 1, -2],
        [-2, 1, 2], [0, 4, 0], [0, 0, 3]
      ];

      lightPositions.forEach((pos) => {
        const light = document.createElement('a-light');
        light.setAttribute('type', 'directional');
        light.setAttribute('color', '#ffffff');
        light.setAttribute('intensity', '1.2');
        light.setAttribute('position', `${pos[0]} ${pos[1]} ${pos[2]}`);
        scene.appendChild(light);
      });

      // Cámara
      const camera = document.createElement('a-entity');
      camera.setAttribute('camera', '');

      // Ensamblar escena
      scene.appendChild(markerHiro);
      scene.appendChild(markerCustom);
      scene.appendChild(camera);
      scene.appendChild(ambientLight);

      if (sceneRef.current) {
        sceneRef.current.appendChild(scene);
        sceneElementRef.current = scene;
      }

    }, 1000);

    return () => {
      clearTimeout(timer);
      
      if (sceneElementRef.current) {
        const arjsSystem = (sceneElementRef.current as any).systems?.arjs;
        if (arjsSystem && arjsSystem._arSession) {
          try {
            arjsSystem._arSession.stop();
          } catch (e) {
            console.log('Error al detener sesión AR:', e);
          }
        }
        
        const videoElement = document.querySelector('video');
        if (videoElement && videoElement.srcObject) {
          const stream = videoElement.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
          videoElement.srcObject = null;
        }
      }

      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }
      
      sceneElementRef.current = null;
      modelEntityHiroRef.current = null;
      modelEntityCustomRef.current = null;
      particlesEntityHiroRef.current = null;
      particlesEntityCustomRef.current = null;
      setModeloCargado(false);
      setMarcadorDetectado(null);
    };
  }, [pais]);

  // Función para manejar el click en información
  const handleInfoButtonClick = () => {
    const activeModel = marcadorDetectado === 'Kickoff' ? modelEntityCustomRef.current : modelEntityHiroRef.current;
    const activeParticles = marcadorDetectado === 'Kickoff' ? particlesEntityCustomRef.current : particlesEntityHiroRef.current;
    
    if (!activeModel) return;
    
    const newInfoMode = !infoModeActive;
    setInfoModeActive(newInfoMode);
    
    if (newInfoMode) {
      // Activar modo info: rotación y partículas
      activeModel.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear');
      
      // Mostrar partículas
      if (activeParticles) {
        activeParticles.setAttribute('visible', 'true');
      }
      
      // Llamar al callback externo si existe
      if (onInfoClick) {
        onInfoClick();
      }
    } else {
      // Desactivar modo info: detener rotación y ocultar partículas
      activeModel.removeAttribute('animation');
      activeModel.setAttribute('rotation', '0 0 0');
      
      // Ocultar partículas
      if (activeParticles) {
        activeParticles.setAttribute('visible', 'false');
      }
    }
  };

  return (
    <>
      {/* Frame delimitador */}
      <div style={{
        position: 'fixed',
        top: '15%',
        left: '15%',
        width: '70%',
        height: '60%',
        border: '3px solid rgba(255, 255, 255, 0.7)',
        borderRadius: '20px',
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        {/* Esquinas decorativas */}
        <div style={{ position: 'absolute', top: -2, left: -2, width: '30px', height: '30px', borderTop: '4px solid white', borderLeft: '4px solid white', borderRadius: '10px 0 0 0' }}></div>
        <div style={{ position: 'absolute', top: -2, right: -2, width: '30px', height: '30px', borderTop: '4px solid white', borderRight: '4px solid white', borderRadius: '0 10px 0 0' }}></div>
        <div style={{ position: 'absolute', bottom: -2, left: -2, width: '30px', height: '30px', borderBottom: '4px solid white', borderLeft: '4px solid white', borderRadius: '0 0 0 10px' }}></div>
        <div style={{ position: 'absolute', bottom: -2, right: -2, width: '30px', height: '30px', borderBottom: '4px solid white', borderRight: '4px solid white', borderRadius: '0 0 10px 0' }}></div>
      </div>

      <div
        ref={sceneRef}
        data-ar-model="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2,
          overflow: 'hidden',
          background: 'transparent',
          pointerEvents: 'none',
          margin: 0,
          padding: 0
        }}
      />
      
      {/* Debug Info */}
      {/* <div style={{
        position: 'fixed',
        top: '80px',
        left: '10px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: '#00ff00',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 1001,
        maxWidth: '300px',
        wordWrap: 'break-word'
      }}>
        <strong>Debug:</strong> {debugInfo}
      </div> */}

      {/* Indicador de marcador detectado */}
      {marcadorDetectado && (
        <div style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(40, 167, 69, 0.9)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          zIndex: 1000,
          pointerEvents: 'none'
        }}>
          Marcador {marcadorDetectado} detectado
        </div>
      )}
      
      {/* Botón de información */}
      {modeloCargado && (
        <button
          onClick={handleInfoButtonClick}
          style={{
            position: 'fixed',
            bottom: '18%',
            right: '18%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: infoModeActive ? '#28a745' : '#6c757d',
            color: 'white',
            border: '3px solid white',
            boxShadow: infoModeActive 
              ? '0 0 20px rgba(40, 167, 69, 0.8), 0 4px 12px rgba(0,0,0,0.3)' 
              : '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            transform: infoModeActive ? 'scale(1.1)' : 'scale(1)'
          }}
          onMouseEnter={(e) => {
            if (!infoModeActive) {
              e.currentTarget.style.backgroundColor = '#5a6268';
              e.currentTarget.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (!infoModeActive) {
              e.currentTarget.style.backgroundColor = '#6c757d';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          i
        </button>
      )}

      {/* Indicador de modo info activo */}
      {infoModeActive && (
        <div style={{
          position: 'fixed',
          bottom: '25%',
          right: '18%',
          backgroundColor: 'rgba(40, 167, 69, 0.9)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          zIndex: 999,
          animation: 'pulse 2s infinite',
          pointerEvents: 'none'
        }}>
          Modo Info Activo
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </>
  );
}

export default ARModel;
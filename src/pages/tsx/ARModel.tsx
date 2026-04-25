import { useEffect, useRef, useState } from 'react';

interface ARModelProps {
  pais: string;
  onInfoClick?: () => void;
}

// Descripciones cortas por país para la burbuja AR
const descripcionesPais: Record<string, { flagCode: string; desc: string }> = {
  'MÉXICO':       { flagCode: 'mx', desc: 'Sede del Mundial 2026. Albergará el partido inaugural en el Estadio Azteca.' },
  'SUDÁFRICA':    { flagCode: 'za', desc: 'Fue sede del Mundial 2010, el primero celebrado en África.' },
  'COREA DEL SUR':{ flagCode: 'kr', desc: 'Primer país asiático en llegar a semifinales de un Mundial (2002).' },
  'COLOMBIA':     { flagCode: 'co', desc: 'Radamel Falcao es su máximo goleador histórico con 36 goles.' },
  'UZBEKISTÁN':   { flagCode: 'uz', desc: 'Selección emergente de Asia Central con figuras como Eldor Shomurodov.' },
  'TÚNEZ':        { flagCode: 'tn', desc: 'Primer país africano en ganar un partido de Copa del Mundo (1978).' },
  'JAPÓN':        { flagCode: 'jp', desc: 'Ha clasificado consecutivamente a los Mundiales desde Francia 1998.' },
  'ESPAÑA':       { flagCode: 'es', desc: 'Única selección en ganar Eurocopa–Mundial–Eurocopa de forma consecutiva.' },
  'URUGUAY':      { flagCode: 'uy', desc: 'Bicampeón mundial (1930 y 1950) y anfitrión del primer Mundial.' },
};

// Mapa de nombres de país → archivo .patt
// Los que tenían .patt originales correctos vuelven a ellos.
// Corea, España, Uruguay, Túnez usan los regenerados.
const mapaMarcadoresPais: Record<string, string> = {
  'SUDÁFRICA':    'sudafrica',
  'COREA DEL SUR':'corea_del_sur',//*
  'COLOMBIA':     'colombia',
  'UZBEKISTÁN':   'uzbekistan',
  'TÚNEZ':        'tunez',//*
  'JAPÓN':        'japon',
  'ESPAÑA':       'espana',//*
  'URUGUAY':      'uruguay',//*
};

function ARModel({ pais, onInfoClick }: ARModelProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const sceneElementRef = useRef<HTMLElement | null>(null);
  const modelEntityHiroRef = useRef<HTMLElement | null>(null);
  const modelEntityCustomRef = useRef<HTMLElement | null>(null);
  const modelEntityPaisRef = useRef<HTMLElement | null>(null);
  const particlesEntityHiroRef = useRef<HTMLElement | null>(null);
  const particlesEntityCustomRef = useRef<HTMLElement | null>(null);
  const particlesEntityPaisRef = useRef<HTMLElement | null>(null);
  const [modeloCargado, setModeloCargado] = useState(false);
  const [infoModeActive, setInfoModeActive] = useState(false);
  const [marcadorDetectado, setMarcadorDetectado] = useState<string | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || !window.AFRAME) {
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
      //scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: true; detectionMode: mono; patternRatio: 0.5; labelingMode: black_region;');
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
        return loadingGroup;
      };

      const createModelEntity = (markerType: string) => {
        const modelEntity = document.createElement('a-entity');
        modelEntity.setAttribute('id', `modelo-3d-${markerType}`);
        modelEntity.setAttribute('position', '0 0 0');
        modelEntity.setAttribute('scale', '0.1 0.1 0.1');
        modelEntity.setAttribute('visible', 'false');

        fetch(rutaModelo)
          .then(response => {
            if (response.ok) {
              modelEntity.setAttribute('gltf-model', rutaModelo);
              modelEntity.setAttribute('scale', '0.15 0.15 0.15');
              
              modelEntity.addEventListener('model-loaded', () => {
                setModeloCargado(true);
              });
            }
          })
          .catch(() => {
            // Modelo no disponible, se usará el cubo de respaldo
          });

        return modelEntity;
      };

      const createParticlesGroup = () => {
        const particlesGroup = document.createElement('a-entity');
        particlesGroup.setAttribute('id', 'particles-group');
        particlesGroup.setAttribute('position', '0 0 0');
        particlesGroup.setAttribute('visible', 'false');

        // Destellos amarillo claro orbitando el modelo
        const sparkleColor = '#FFFACD';
        const sparkleEmissive = '#FFD700';

        for (let i = 0; i < 24; i++) {
          const angle = (i / 24) * Math.PI * 2;
          const radius = 1.0 + Math.random() * 0.6;
          const height = 0.2 + Math.random() * 1.2;
          const orbitDuration = 2500 + Math.random() * 2000;
          const size = 0.04 + Math.random() * 0.05;

          const spark = document.createElement('a-sphere');
          spark.setAttribute('radius', `${size}`);
          spark.setAttribute('color', sparkleColor);
          spark.setAttribute('material', `emissive: ${sparkleEmissive}; emissiveIntensity: 2.5; transparent: true; opacity: ${0.7 + Math.random() * 0.3}`);

          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          spark.setAttribute('position', `${x} ${height} ${z}`);

          // Órbita suave
          const nextAngle = angle + Math.PI * 2;
          spark.setAttribute('animation', `
            property: position;
            to: ${Math.cos(nextAngle) * radius} ${height + 0.15} ${Math.sin(nextAngle) * radius};
            loop: true;
            dur: ${orbitDuration};
            easing: linear
          `);

          // Pulso de escala (efecto destello)
          spark.setAttribute('animation__scale', `
            property: scale;
            to: 2 2 2;
            dir: alternate;
            loop: true;
            dur: ${400 + Math.random() * 600};
            easing: easeInOutSine
          `);

          // Pulso de opacidad (parpadeo)
          spark.setAttribute('animation__opacity', `
            property: material.opacity;
            from: 0.3;
            to: 1.0;
            dir: alternate;
            loop: true;
            dur: ${300 + Math.random() * 500};
            easing: easeInOutSine
          `);

          particlesGroup.appendChild(spark);
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
        setMarcadorDetectado('Hiro');
        loadingGroupHiro.setAttribute('visible', 'false');
        modelEntityHiro.setAttribute('visible', 'true');
      });

      markerHiro.addEventListener('markerLost', () => {
        setMarcadorDetectado(null);
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
      markerCustom.setAttribute('size', '1');

      const loadingGroupCustom = createLoadingGroup();
      const modelEntityCustom = createModelEntity('custom');
      const particlesGroupCustom = createParticlesGroup();

      markerCustom.appendChild(loadingGroupCustom);
      markerCustom.appendChild(modelEntityCustom);
      markerCustom.appendChild(particlesGroupCustom);

      markerCustom.addEventListener('markerFound', () => {
        setMarcadorDetectado('Kickoff');
        loadingGroupCustom.setAttribute('visible', 'false');
        modelEntityCustom.setAttribute('visible', 'true');
      });

      markerCustom.addEventListener('markerLost', () => {
        setMarcadorDetectado(null);
        loadingGroupCustom.setAttribute('visible', 'true');
        modelEntityCustom.setAttribute('visible', 'false');
      });

      markerCustom.addEventListener('markerError', (_e: any) => {
        // Error silencioso al cargar el patrón
      });

      // ========== MARCADOR ESPECÍFICO DEL PAÍS ==========
      const nombrePatt = mapaMarcadoresPais[pais];
      let markerPais: HTMLElement | null = null;
      let loadingGroupPais: HTMLElement | null = null;
      let modelEntityPais: HTMLElement | null = null;
      let particlesGroupPais: HTMLElement | null = null;

      if (nombrePatt) {
        const patternPaisUrl = `${window.location.origin}/markers/${nombrePatt}.patt`;
        markerPais = document.createElement('a-marker');
        markerPais.setAttribute('type', 'pattern');
        markerPais.setAttribute('url', patternPaisUrl);
        markerPais.setAttribute('id', `marker-pais-${nombrePatt}`);
        markerPais.setAttribute('smooth', 'true');
        markerPais.setAttribute('smoothCount', '5');
        markerPais.setAttribute('emitevents', 'true');
        markerPais.setAttribute('size', '1');

        loadingGroupPais = createLoadingGroup();
        modelEntityPais = createModelEntity('pais');
        particlesGroupPais = createParticlesGroup();

        markerPais.appendChild(loadingGroupPais);
        markerPais.appendChild(modelEntityPais);
        markerPais.appendChild(particlesGroupPais);

        markerPais.addEventListener('markerFound', () => {
          setMarcadorDetectado(pais);
          loadingGroupPais!.setAttribute('visible', 'false');
          modelEntityPais!.setAttribute('visible', 'true');
        });

        markerPais.addEventListener('markerLost', () => {
          setMarcadorDetectado(null);
          loadingGroupPais!.setAttribute('visible', 'true');
          modelEntityPais!.setAttribute('visible', 'false');
        });

        markerPais.addEventListener('markerError', (_e: any) => { /* silencioso */ });
      }

      // Guardar referencias
      modelEntityHiroRef.current = modelEntityHiro;
      modelEntityCustomRef.current = modelEntityCustom;
      modelEntityPaisRef.current = modelEntityPais;
      particlesEntityHiroRef.current = particlesGroupHiro;
      particlesEntityCustomRef.current = particlesGroupCustom;
      particlesEntityPaisRef.current = particlesGroupPais;

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
      if (markerPais) scene.appendChild(markerPais); // marcador del país activo
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
            // Error silencioso al detener sesión AR
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
      modelEntityPaisRef.current = null;
      particlesEntityHiroRef.current = null;
      particlesEntityCustomRef.current = null;
      particlesEntityPaisRef.current = null;
      setModeloCargado(false);
      setMarcadorDetectado(null);
    };
  }, [pais]);

  // Función para manejar el click en información
  const handleInfoButtonClick = () => {
    // Detectar qué modelo y partículas usar según el marcador activo
    let activeModel: HTMLElement | null;
    let activeParticles: HTMLElement | null;
    if (marcadorDetectado === 'Kickoff') {
      activeModel   = modelEntityCustomRef.current;
      activeParticles = particlesEntityCustomRef.current;
    } else if (marcadorDetectado === pais) {
      activeModel   = modelEntityPaisRef.current;
      activeParticles = particlesEntityPaisRef.current;
    } else {
      activeModel   = modelEntityHiroRef.current;
      activeParticles = particlesEntityHiroRef.current;
    }
    
    if (!activeModel) return;
    
    const newInfoMode = !infoModeActive;
    setInfoModeActive(newInfoMode);
    
    if (newInfoMode) {
      activeModel.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear');
      if (activeParticles) activeParticles.setAttribute('visible', 'true');
      if (onInfoClick) onInfoClick();
    } else {
      activeModel.removeAttribute('animation');
      activeModel.setAttribute('rotation', '0 0 0');
      if (activeParticles) activeParticles.setAttribute('visible', 'false');
    }
  };

  return (
    <>
      {/* Burbuja de descripción del país — visible entre el frame y los botones */}
      {marcadorDetectado && descripcionesPais[pais] && (
        <div style={{
          position: 'fixed',
          bottom: '13%',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '82vw',
          width: 'max-content',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          color: 'white',
          borderRadius: '20px',
          padding: '10px 18px',
          zIndex: 10000,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '0.88rem',
          animation: 'bubbleIn 0.35s ease',
        }}>
          <img
            src={`https://flagcdn.com/w40/${descripcionesPais[pais].flagCode}.png`}
            alt={pais}
            style={{
              width: '28px',
              height: 'auto',
              borderRadius: '3px',
              flexShrink: 0,
              display: 'block',
            }}
          />
          <p style={{ margin: 0, lineHeight: 1.4, opacity: 0.95, maxWidth: '68vw' }}>
            {descripcionesPais[pais].desc}
          </p>
        </div>
      )}

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
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}

export default ARModel;
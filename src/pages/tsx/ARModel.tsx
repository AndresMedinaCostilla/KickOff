import { useEffect, useRef, useState } from 'react';

interface ARModelProps {
  pais: string;
  onInfoClick?: () => void;
}

function ARModel({ pais, onInfoClick }: ARModelProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const sceneElementRef = useRef<HTMLElement | null>(null);
  const [modeloCargado, setModeloCargado] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || !window.AFRAME) {
        console.error('A-Frame no está cargado');
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

      // Crear la escena AR.js
      const scene = document.createElement('a-scene');
      scene.setAttribute('embedded', '');
      scene.setAttribute('vr-mode-ui', 'enabled: false');
      scene.setAttribute('renderer', 'logarithmicDepthBuffer: true; alpha: true; antialias: true; colorManagement: true; exposure: 2.0');
      scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;');
      scene.style.position = 'fixed';
      scene.style.top = '0';
      scene.style.left = '0';
      scene.style.width = '100vw';
      scene.style.height = '100vh';
      scene.style.zIndex = '2';
      scene.style.background = 'transparent';
      scene.style.pointerEvents = 'none';

      // Crear el marcador Hiro
      const marker = document.createElement('a-marker');
      marker.setAttribute('preset', 'hiro');
      marker.setAttribute('id', 'marker-hiro');
      marker.setAttribute('smooth', 'true');
      marker.setAttribute('smoothCount', '5');

      // Entidad para el modelo 3D
      const modelEntity = document.createElement('a-entity');
      modelEntity.setAttribute('id', 'modelo-3d');
      modelEntity.setAttribute('position', '0 0 0');
      modelEntity.setAttribute('scale', '0.1 0.1 0.1');
      modelEntity.setAttribute('visible', 'false');

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

      // ========== GRUPO DE CARGA CON ELEMENTOS VISIBLES ==========
      
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

      marker.appendChild(loadingGroup);

      // Intentar cargar el modelo GLB
      fetch(rutaModelo)
        .then(response => {
          if (response.ok) {
            modelEntity.setAttribute('gltf-model', rutaModelo);
            modelEntity.setAttribute('scale', '0.15 0.15 0.15');
            
            modelEntity.addEventListener('model-loaded', () => {
              console.log('Modelo cargado correctamente');
              setModeloCargado(true);
              loadingGroup.setAttribute('visible', 'false');
              modelEntity.setAttribute('visible', 'true');
              modelEntity.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear');
            });

            modelEntity.addEventListener('model-error', () => {
              console.log('Error al cargar modelo');
            });
          }
        })
        .catch(() => {
          console.log('Error al verificar modelo');
        });

      marker.appendChild(modelEntity);

      // Cámara
      const camera = document.createElement('a-entity');
      camera.setAttribute('camera', '');

      // Ensamblar escena
      scene.appendChild(marker);
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
      setModeloCargado(false);
    };
  }, [pais]);

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
      
      {/* Botón de información */}
      {modeloCargado && (
        <button
          onClick={onInfoClick}
          style={{
            position: 'fixed',
            bottom: '18%',
            right: '18%',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#6c757d',
            color: 'white',
            border: '2px solid white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5a6268';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#6c757d';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          i
        </button>
      )}
    </>
  );
}

export default ARModel;
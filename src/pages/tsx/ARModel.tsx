import { useEffect, useRef } from 'react';

interface ARModelProps {
  pais: string;
}

function ARModel({ pais }: ARModelProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const sceneElementRef = useRef<HTMLElement | null>(null);

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
      scene.setAttribute('renderer', 'logarithmicDepthBuffer: true; alpha: true; antialias: true; colorManagement: true;');
      scene.setAttribute('arjs', 'sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;');
      scene.style.position = 'fixed';
      scene.style.top = '0';
      scene.style.left = '0';
      scene.style.width = '100vw';
      scene.style.height = '100vh';
      scene.style.zIndex = '2';
      scene.style.background = 'transparent';
      scene.style.margin = '0';
      scene.style.padding = '0';
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

      // Cubo de respaldo (visible por defecto hasta que se cargue el modelo)
      const fallbackCube = document.createElement('a-box');
      fallbackCube.setAttribute('id', 'cubo-respaldo');
      fallbackCube.setAttribute('position', '0 0.5 0');
      fallbackCube.setAttribute('rotation', '0 45 0');
      fallbackCube.setAttribute('width', '1');
      fallbackCube.setAttribute('height', '1');
      fallbackCube.setAttribute('depth', '1');
      fallbackCube.setAttribute('color', color);
      fallbackCube.setAttribute('material', `color: ${color}; roughness: 0.3; metalness: 0.1;`);
      fallbackCube.setAttribute('visible', 'true');

      // Animación de rotación para el cubo
      fallbackCube.setAttribute('animation', 'property: rotation; to: 0 405 0; loop: true; dur: 10000; easing: linear');

      // Intentar cargar el modelo GLB
      fetch(rutaModelo)
        .then(response => {
          if (response.ok) {
            modelEntity.setAttribute('gltf-model', rutaModelo);
            modelEntity.setAttribute('scale', '0.1 0.1 0.1');
            
            modelEntity.addEventListener('model-loaded', () => {
              console.log('Modelo cargado correctamente');
              fallbackCube.setAttribute('visible', 'false');
              modelEntity.setAttribute('visible', 'true');
            });

            modelEntity.addEventListener('model-error', () => {
              console.log('Error al cargar modelo, manteniendo cubo de respaldo');
              modelEntity.setAttribute('visible', 'false');
              fallbackCube.setAttribute('visible', 'true');
            });

            console.log(`Cargando modelo: ${rutaModelo}`);
          } else {
            console.log(`Modelo no encontrado: ${rutaModelo}, usando cubo de respaldo`);
          }
        })
        .catch(() => {
          console.log(`Error al verificar modelo, usando cubo de respaldo`);
        });

      // Agregar elementos al marcador
      marker.appendChild(modelEntity);
      marker.appendChild(fallbackCube);

      // Eventos del marcador
      marker.addEventListener('markerFound', () => {
        console.log('Marcador Hiro detectado');
      });

      marker.addEventListener('markerLost', () => {
        console.log('Marcador Hiro perdido');
      });

      // Cámara
      const camera = document.createElement('a-entity');
      camera.setAttribute('camera', '');

      // Luces
      const ambientLight = document.createElement('a-light');
      ambientLight.setAttribute('type', 'ambient');
      ambientLight.setAttribute('color', '#fff');
      ambientLight.setAttribute('intensity', '0.5');

      const directionalLight = document.createElement('a-light');
      directionalLight.setAttribute('type', 'directional');
      directionalLight.setAttribute('color', '#fff');
      directionalLight.setAttribute('intensity', '1');
      directionalLight.setAttribute('position', '1 1 1');

      // Ensamblar la escena
      scene.appendChild(marker);
      scene.appendChild(camera);
      scene.appendChild(ambientLight);
      scene.appendChild(directionalLight);

      if (sceneRef.current) {
        sceneRef.current.appendChild(scene);
        sceneElementRef.current = scene;
      }

    }, 1000);

    // Función de limpieza para detener la cámara de AR.js
    return () => {
      clearTimeout(timer);
      
      // Detener el stream de video de AR.js
      if (sceneElementRef.current) {
        // Obtener el sistema ARjs de la escena
        const arjsSystem = (sceneElementRef.current as any).systems?.arjs;
        if (arjsSystem && arjsSystem._arSession) {
          try {
            // Detener la sesión AR
            arjsSystem._arSession.stop();
          } catch (e) {
            console.log('Error al detener sesión AR:', e);
          }
        }
        
        // Alternativa: buscar y detener el video creado por AR.js
        const videoElement = document.querySelector('video');
        if (videoElement && videoElement.srcObject) {
          const stream = videoElement.srcObject as MediaStream;
          if (stream) {
            stream.getTracks().forEach(track => {
              track.stop();
              console.log('Track de video detenido');
            });
          }
          videoElement.srcObject = null;
        }
      }

      // Limpiar el DOM
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }
      
      sceneElementRef.current = null;
    };
  }, [pais]);

  return (
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
  );
}

export default ARModel;
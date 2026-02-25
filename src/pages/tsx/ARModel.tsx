import { useEffect, useRef } from 'react';

interface ARModelProps {
  pais: string;
}

function ARModel({ pais }: ARModelProps) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Esperar un poco para asegurar que A-Frame está cargado
    const timer = setTimeout(() => {
      // Verificar que A-Frame está disponible
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

      // Colores por país (fallback si no hay modelo)
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
      
      // Ruta del modelo (ajusta según donde tengas tus archivos)
      // Si están en public/modelos/
      const rutaModelo = `/modelos/${nombreModelo}.glb`;

      // Limpiar el contenedor
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }

      // Crear escena A-Frame
      const scene = document.createElement('a-scene');
      scene.setAttribute('embedded', '');
      scene.setAttribute('vr-mode-ui', 'enabled: false');
      scene.style.position = 'absolute';
      scene.style.top = '0';
      scene.style.left = '0';
      scene.style.width = '100%';
      scene.style.height = '100%';
      scene.style.zIndex = '5';
      scene.style.pointerEvents = 'none';

      // Cámara
      const camera = document.createElement('a-camera');
      camera.setAttribute('position', '0 1.6 2');
      camera.setAttribute('look-controls', 'enabled: false');
      scene.appendChild(camera);

      // Crear grupo para el modelo
      const group = document.createElement('a-entity');
      group.setAttribute('position', '0 1 -1.5');
      
      // Intentar cargar modelo GLB
      const modelEntity = document.createElement('a-entity');
      
      // Verificar si existe el modelo (intentamos cargarlo)
      fetch(rutaModelo)
        .then(response => {
          if (response.ok) {
            // Modelo existe, lo cargamos
            modelEntity.setAttribute('gltf-model', rutaModelo);
            modelEntity.setAttribute('scale', '0.1 0.1 0.1');
            console.log(`Cargando modelo: ${rutaModelo}`);
          } else {
            // Modelo no existe, usar esfera de respaldo
            console.log(`Modelo no encontrado: ${rutaModelo}, usando esfera de respaldo`);
            useFallbackSphere(modelEntity, color);
          }
        })
        .catch(() => {
          // Error al cargar, usar respaldo
          console.log(`Error al cargar modelo, usando esfera de respaldo`);
          useFallbackSphere(modelEntity, color);
        });

      // Función para crear esfera de respaldo
      const useFallbackSphere = (entity: HTMLElement, color: string) => {
        entity.setAttribute('geometry', 'primitive: sphere; radius: 0.5');
        entity.setAttribute('material', `color: ${color}; roughness: 0.3; metalness: 0.1; emissive: ${color}; emissive-intensity: 0.2`);
        
        // Agregar hexágonos blancos
        for (let i = 0; i < 12; i++) {
          const hexagon = document.createElement('a-cylinder');
          hexagon.setAttribute('radius', '0.15');
          hexagon.setAttribute('height', '0.05');
          hexagon.setAttribute('segments-radial', '6');
          hexagon.setAttribute('color', '#ffffff');
          hexagon.setAttribute('metalness', '0.3');
          hexagon.setAttribute('roughness', '0.4');
          
          const theta = (i / 12) * Math.PI * 2;
          const phi = Math.acos(2 * (i / 12) - 1);
          
          const x = 0.55 * Math.sin(phi) * Math.cos(theta);
          const y = 0.55 * Math.sin(phi) * Math.sin(theta);
          const z = 0.55 * Math.cos(phi);
          
          hexagon.setAttribute('position', `${x} ${y} ${z}`);
          
          const rotX = (phi * 180 / Math.PI) - 90;
          const rotY = theta * 180 / Math.PI;
          hexagon.setAttribute('rotation', `${rotX} ${rotY} 0`);
          
          entity.appendChild(hexagon);
        }
      };

      // Rotación automática
      group.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear');
      
      group.appendChild(modelEntity);
      scene.appendChild(group);

      // Luces
      const ambientLight = document.createElement('a-light');
      ambientLight.setAttribute('type', 'ambient');
      ambientLight.setAttribute('color', '#fff');
      ambientLight.setAttribute('intensity', '0.5');
      scene.appendChild(ambientLight);

      const directionalLight = document.createElement('a-light');
      directionalLight.setAttribute('type', 'directional');
      directionalLight.setAttribute('color', '#fff');
      directionalLight.setAttribute('intensity', '1');
      directionalLight.setAttribute('position', '1 1 1');
      scene.appendChild(directionalLight);

      // Agregar la escena al contenedor
      if (sceneRef.current) {
        sceneRef.current.appendChild(scene);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }
    };
  }, [pais]);

  return (
    <div
      ref={sceneRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        pointerEvents: 'none'
      }}
    />
  );
}

export default ARModel;
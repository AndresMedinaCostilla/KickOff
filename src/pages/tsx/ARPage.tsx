import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ARPage.css';
import { obtenerPaisActual, eliminarPaisActual } from '../ts/paisStorage';
import ARModel from './ARModel';

// Definir el tipo para las opciones de trivia
interface TriviaOption {
  id: number;
  text: string;
  correct: boolean;
}

// Definir el tipo para la trivia de cada país
interface TriviaData {
  pregunta: string;
  opciones: TriviaOption[];
}

// Base de datos de trivia por país
const triviaPorPais: Record<string, TriviaData> = {
  "MÉXICO": {
    pregunta: "¿En qué año México ganó su primera Copa Mundial de Fútbol?",
    opciones: [
      { id: 1, text: "1970", correct: false },
      { id: 2, text: "1986", correct: false },
      { id: 3, text: "Nunca ha ganado", correct: true },
      { id: 4, text: "1958", correct: false }
    ]
  },
  "SUDÁFRICA": {
    pregunta: "¿Cómo se llama el estadio donde Sudáfrica fue anfitrión de la final del Mundial 2010?",
    opciones: [
      { id: 1, text: "Estadio Ellis Park", correct: false },
      { id: 2, text: "Soccer City (FNB Stadium)", correct: true },
      { id: 3, text: "Estadio Loftus Versfeld", correct: false },
      { id: 4, text: "Estadio Moses Mabhida", correct: false }
    ]
  },
  "COREA DEL SUR": {
    pregunta: "¿Qué jugador coreano fue máximo goleador de la Premier League en la temporada 2021-22?",
    opciones: [
      { id: 1, text: "Lee Kang-in", correct: false },
      { id: 2, text: "Hwang Hee-chan", correct: false },
      { id: 3, text: "Son Heung-min", correct: true },
      { id: 4, text: "Kim Min-jae", correct: false }
    ]
  },
  "COLOMBIA": {
    pregunta: "¿Quién es el máximo goleador histórico de la selección colombiana?",
    opciones: [
      { id: 1, text: "Radamel Falcao", correct: true },
      { id: 2, text: "James Rodríguez", correct: false },
      { id: 3, text: "Carlos Bacca", correct: false },
      { id: 4, text: "Luis Díaz", correct: false }
    ]
  },
  "UZBEKISTÁN": {
    pregunta: "¿Cuál es el jugador uzbeko más famoso que ha jugado en Europa?",
    opciones: [
      { id: 1, text: "Maksim Shatskikh", correct: false },
      { id: 2, text: "Odil Ahmedov", correct: false },
      { id: 3, text: "Eldor Shomurodov", correct: true },
      { id: 4, text: "Server Djeparov", correct: false }
    ]
  },
  "TÚNEZ": {
    pregunta: "¿Cómo se llama el máximo goleador histórico de Túnez?",
    opciones: [
      { id: 1, text: "Wahbi Khazri", correct: false },
      { id: 2, text: "Youssef Msakni", correct: false },
      { id: 3, text: "Issam Jemâa", correct: true },
      { id: 4, text: "Francileudo Santos", correct: false }
    ]
  },
  "JAPÓN": {
    pregunta: "¿Qué jugador japonés ha ganado la Champions League?",
    opciones: [
      { id: 1, text: "Hidetoshi Nakata", correct: false },
      { id: 2, text: "Keisuke Honda", correct: false },
      { id: 3, text: "Takumi Minamino", correct: true },
      { id: 4, text: "Shinji Kagawa", correct: false }
    ]
  },
  "ESPAÑA": {
    pregunta: "¿En qué año ganó España la Copa del Mundo?",
    opciones: [
      { id: 1, text: "2010", correct: true },
      { id: 2, text: "2014", correct: false },
      { id: 3, text: "2018", correct: false },
      { id: 4, text: "2022", correct: false }
    ]
  },
  "URUGUAY": {
    pregunta: "¿Cuántas Copas del Mundo ha ganado Uruguay?",
    opciones: [
      { id: 1, text: "1", correct: false },
      { id: 2, text: "2", correct: true },
      { id: 3, text: "3", correct: false },
      { id: 4, text: "4", correct: false }
    ]
  }
};

function ARPage() {
  const navigate = useNavigate();
  const [showTriviaModal, setShowTriviaModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedTriviaOption, setSelectedTriviaOption] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [paisActual, setPaisActual] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [triviaData, setTriviaData] = useState<TriviaData | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [arError, setArError] = useState<string | null>(null);
  const [showInfoMessage, setShowInfoMessage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isNavigatingRef = useRef(false);

  // RESTAURACIÓN COMPLETA - Función mejorada
  const restoreBodyStyles = () => {
    // Remover clases específicas
    document.body.classList.remove('ar-active', 'menu-open', 'a-body');
    document.documentElement.classList.remove('a-html');
    
    // Limpiar TODOS los estilos inline
    document.body.removeAttribute('style');
    document.documentElement.removeAttribute('style');
    
    // Forzar reflow
    void document.body.offsetHeight;
    
    // Restaurar valores por defecto explícitamente
    document.body.style.cssText = `
      margin: 0;
      padding: 0;
      overflow: visible;
      height: auto;
      position: static;
      width: auto;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
    `;
    
    document.documentElement.style.cssText = `
      overflow: visible;
      height: auto;
    `;
    
    // Scroll al top
    window.scrollTo(0, 0);
  };

  // LIMPIEZA AGRESIVA DE AR.JS
  const cleanupAR = () => {
    console.log('Limpiando recursos AR...');

    // 1. Detener TODOS los tracks de medios
    document.querySelectorAll('video').forEach(video => {
      if (video.srcObject) {
        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach(track => {
          track.stop();
          track.enabled = false;
        });
        video.srcObject = null;
      }
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.remove();
    });

    // 2. Limpiar canvases de WebGL
    document.querySelectorAll('canvas').forEach(canvas => {
      const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
      if (gl) {
        const loseContext = gl.getExtension('WEBGL_lose_context');
        if (loseContext) loseContext.loseContext();
      }
      canvas.remove();
    });

    // 3. Eliminar elementos de A-Frame/AR.js
    ['a-scene', 'a-marker', 'a-entity', 'a-box', 'a-light', 'a-camera', 'a-assets'].forEach(tag => {
      document.querySelectorAll(tag).forEach(el => el.remove());
    });

    // 4. Eliminar elementos inyectados por AR.js
    document.querySelectorAll('.arjs-loader, .a-enter-vr-button, .a-orientation-modal, .a-modal, .a-canvas').forEach(el => el.remove());
    
    // 5. Eliminar scripts dinámicos de AR.js si existen
    document.querySelectorAll('script[src*="ar.js"], script[src*="aframe"]').forEach(el => {
      // No eliminamos los del index.html, solo los dinámicos
      if (!el.getAttribute('data-permanent')) {
        el.remove();
      }
    });

    // 6. Limpiar contenedor específico
    const arModelContainer = document.querySelector('[data-ar-model="true"]');
    if (arModelContainer) {
      arModelContainer.innerHTML = '';
    }

    // 7. Restaurar estilos
    restoreBodyStyles();
  };

  // VERIFICACIÓN INICIAL
  useEffect(() => {
    const pais = obtenerPaisActual();
    console.log('País obtenido en ARPage:', pais);
    
    if (pais) {
      setPaisActual(pais);
      if (triviaPorPais[pais]) {
        setTriviaData(triviaPorPais[pais]);
      } else {
        setTriviaData({
          pregunta: "¿Cuántos equipos participan en la Copa Mundial de Fútbol?",
          opciones: [
            { id: 1, text: "12", correct: false },
            { id: 2, text: "32", correct: true },
            { id: 3, text: "24", correct: false },
            { id: 4, text: "16", correct: false }
          ]
        });
      }
      setIsLoading(false);
      
      // Aplicar estilos de AR
      document.body.classList.add('ar-active');
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      navigate('/paises');
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setArError('Tu navegador no soporta acceso a la cámara necesario para AR');
    }

    // Limpieza al desmontar
    return () => {
      if (!isNavigatingRef.current) {
        cleanupAR();
      }
    };
  }, [navigate]);

  const handleInfoClick = () => {
  console.log('Botón de información clickeado para:', paisActual);
  setShowInfoMessage(true);
  
  // Aquí irá la reproducción de audio cuando la tengas
  // Por ahora solo muestra un mensaje y lo oculta después de 2 segundos
  
  setTimeout(() => {
    setShowInfoMessage(false);
  }, 2000);
};

  const getVideoSrc = (pais: string | null): string => {
    if (!pais) return '';
    
    const mapaNombres: Record<string, string> = {
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
    
    const nombreVideo = mapaNombres[pais];
    return `/videos/${nombreVideo}.mp4`;
  };

  const filterOptions = [
    { id: 1, text: "Normal", value: "normal" },
    { id: 2, text: "Sepia", value: "sepia" },
    { id: 3, text: "Blanco & Negro", value: "bw" },
    { id: 4, text: "Vintage", value: "vintage" }
  ];

  // Función para obtener el nombre de la clase del filtro
  const getFilterClassName = () => {
    switch (selectedFilter) {
      case 1: return 'normal';
      case 2: return 'sepia';
      case 3: return 'bw';
      case 4: return 'vintage';
      default: return 'normal';
    }
  };

  const closeModal = () => {
    setShowTriviaModal(false);
    setShowVideoModal(false);
    setSelectedTriviaOption(null);
    setSelectedFilter(null);
    setShowResult(false);
    setIsCorrect(false);
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleOptionSelect = (optionId: number) => {
    setSelectedTriviaOption(optionId);
    
    if (triviaData) {
      const selectedOption = triviaData.opciones.find(opt => opt.id === optionId);
      if (selectedOption) {
        setIsCorrect(selectedOption.correct);
        setShowResult(true);
        
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    }
  };

  const handleBackClick = () => {
    console.log('Volviendo a países, eliminando país');
    
    // Marcar navegación
    isNavigatingRef.current = true;
    
    // Limpieza inmediata y completa
    cleanupAR();
    
    // Eliminar país
    eliminarPaisActual();
    
    // Navegar después de limpiar todo
    setTimeout(() => {
      // Doble verificación de limpieza
      document.querySelectorAll('video, canvas, a-scene, .arjs-loader').forEach(el => el.remove());
      restoreBodyStyles();
      
      // navigate('/paises', { replace: true });
    window.location.href = '/paises'; // Fuerza recarga completa
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="ar-container">
        <div className="ar-camera-error">
          Cargando...
        </div>
      </div>
    );
  }

  if (!paisActual || !triviaData) {
    return null;
  }

  return (
    <div className="ar-container">
      <ARModel pais={paisActual} onInfoClick={handleInfoClick} />

      {showInfoMessage && (
  <div style={{
    position: 'fixed',
    bottom: '180px',
    right: '20px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    zIndex: 1001,
    fontSize: '0.9rem'
  }}>
    Audio disponible próximamente
  </div>
)}

      {arError && (
        <div className="ar-camera-error">
          {arError}
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              background: '#2a5a9d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Reintentar
          </button>
        </div>
      )}

      <div className="ar-help-message">
        Apunta la cámara al marcador Hiro para ver el modelo 3D
      </div>

      <button 
        className="ar-back-button"
        onClick={handleBackClick}
        aria-label="Volver a países"
      >
        ←
      </button>

      <div className="ar-pais-indicator">
        {paisActual}
      </div>

      <div className="ar-buttons-container">
        <button 
          className="ar-action-button"
          onClick={() => {
            setShowTriviaModal(true);
            setSelectedTriviaOption(null);
            setShowResult(false);
          }}
        >
          Trivia
        </button>
        <button 
          className="ar-action-button"
          onClick={() => setShowVideoModal(true)}
        >
          Video
        </button>
      </div>

      {showTriviaModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>
            
            <div className="modal-card">
              <div className="modal-body">
                <p className="modal-question">
                  {triviaData.pregunta}
                </p>
                
                {!showResult ? (
                  <div className="options-container">
                    {triviaData.opciones.map((option) => (
                      <div
                        key={option.id}
                        className={`option-item ${selectedTriviaOption === option.id ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(option.id)}
                      >
                        <div className="option-circle">
                          {selectedTriviaOption === option.id && (
                            <span className="option-check">✓</span>
                          )}
                        </div>
                        <span className="option-text">{option.text}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    textAlign: 'center',
                    padding: '20px',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: isCorrect ? '#28a745' : '#dc3545'
                  }}>
                    {isCorrect ? '¡Correcto! ✓' : 'Incorrecto ✗'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showVideoModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>
            
            <div className="modal-card">
              <div className="modal-body">
                <div className="video-container">
                  <video
                    ref={videoRef}
                    src={getVideoSrc(paisActual)}
                    className={`video-player filter-${getFilterClassName()}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      borderRadius: '12px'
                    }}
                    controls
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src={getVideoSrc(paisActual)} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
                
                <h3 className="filters-title">Filtros</h3>
                
                <div className="filters-container">
                  {filterOptions.map((filter) => (
                    <div
                      key={filter.id}
                      className={`filter-chip ${selectedFilter === filter.id ? 'selected' : ''}`}
                      onClick={() => setSelectedFilter(filter.id)}
                    >
                      {filter.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ARPage;
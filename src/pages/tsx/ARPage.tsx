import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ARPage.css';
import { obtenerPaisActual, eliminarPaisActual } from '../ts/paisStorage';

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
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cameraRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Prevenir scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Verificar si hay un país activo al cargar la página
  useEffect(() => {
    const pais = obtenerPaisActual();
    console.log('País obtenido en ARPage:', pais);
    console.log('LocalStorage en ARPage:', localStorage.getItem('pais_actual_ar'));
    
    if (pais) {
      setPaisActual(pais);
      // Cargar la trivia correspondiente al país
      if (triviaPorPais[pais]) {
        setTriviaData(triviaPorPais[pais]);
      } else {
        // Trivia por defecto si no hay datos para el país
        setTriviaData({
          pregunta: "¿Cuántos equipos participan en la Copa Mundial de Fútbol?",
          opciones: [
            { id: 1, text: "12", correct: false },
            { id: 2, text: "16", correct: true },
            { id: 3, text: "24", correct: false },
            { id: 4, text: "32", correct: false }
          ]
        });
      }
      setIsLoading(false);
    } else {
      // Si no hay país, redirigir
      navigate('/paises');
    }
  }, [navigate]);

  // Inicializar la cámara con manejo de errores mejorado
  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const startCamera = async () => {
      try {
        // Verificar si el navegador soporta getUserMedia
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setCameraError('Tu navegador no soporta acceso a la cámara');
          return;
        }

        // Primero intentar con la cámara trasera
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { exact: 'environment' } },
            audio: false
          });
          
          if (!mounted) {
            stream.getTracks().forEach(track => track.stop());
            return;
          }

          handleStreamSuccess(stream);
        } catch (backCameraError) {
          console.log('Cámara trasera no disponible, intentando con cualquier cámara');
          
          // Si falla la trasera, intentar con cualquier cámara disponible
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: true,
              audio: false
            });
            
            if (!mounted) {
              stream.getTracks().forEach(track => track.stop());
              return;
            }

            handleStreamSuccess(stream);
          } catch (anyCameraError) {
            throw anyCameraError; // Propagar el error para manejarlo
          }
        }
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
        
        if (!mounted) return;

        if (error instanceof Error) {
          if (error.name === 'NotAllowedError') {
            setCameraError('Permiso de cámara denegado. Por favor, permite el acceso a la cámara.');
          } else if (error.name === 'NotFoundError') {
            setCameraError('No se encontró ninguna cámara en tu dispositivo.');
          } else if (error.name === 'NotReadableError') {
            setCameraError('No se puede acceder a la cámara. Está siendo usada por otra aplicación?');
          } else if (error.name === 'OverconstrainedError') {
            setCameraError('No se pudo acceder a la cámara con las especificaciones solicitadas.');
          } else {
            setCameraError(`Error al acceder a la cámara: ${error.message || 'Intenta de nuevo'}`);
          }
        } else {
          setCameraError('Error desconocido al acceder a la cámara');
        }
      }
    };

    const handleStreamSuccess = (stream: MediaStream) => {
      streamRef.current = stream;
      
      if (cameraRef.current) {
        cameraRef.current.srcObject = stream;
        cameraRef.current.play().catch(e => {
          console.log('Error al reproducir la cámara:', e);
        });
      }
    };

    startCamera();

    // Limpiar al desmontar
    return () => {
      mounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => {
          track.stop();
        });
        streamRef.current = null;
      }
    };
  }, []);

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

  const closeModal = () => {
    setShowTriviaModal(false);
    setShowVideoModal(false);
    setSelectedTriviaOption(null);
    setSelectedFilter(null);
    setShowResult(false);
    setIsCorrect(false);
    
    // Pausar el video al cerrar el modal
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
    eliminarPaisActual();
    navigate('/paises');
  };

  const getVideoFilter = () => {
    switch (selectedFilter) {
      case 1: return 'none';
      case 2: return 'sepia(1)';
      case 3: return 'grayscale(1)';
      case 4: return 'sepia(0.5) contrast(1.2) brightness(0.9)';
      default: return 'none';
    }
  };

  // Mostrar loading mientras verificamos
  if (isLoading) {
    return (
      <div className="ar-container">
        <div className="ar-camera-error">
          Cargando...
        </div>
      </div>
    );
  }

  // Si no hay país activo, no renderizar nada
  if (!paisActual || !triviaData) {
    return null;
  }

  return (
    <div className="ar-container">
      {/* Video de la cámara en el fondo */}
      <video
        ref={cameraRef}
        className="ar-camera-feed"
        autoPlay
        playsInline
        muted
      />
      
      {/* Overlay oscuro semitransparente sobre la cámara para mejor contraste */}
      <div className="ar-camera-overlay"></div>

      {/* Mensaje de error de cámara si existe */}
      {cameraError && (
        <div className="ar-camera-error">
          {cameraError}
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

      {/* Botón de regreso */}
      <button 
        className="ar-back-button"
        onClick={handleBackClick}
      >
        ←
      </button>

      {/* Mostrar país actual */}
      <div className="ar-pais-indicator">
        {paisActual}
      </div>

      {/* Botones flotantes horizontal */}
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

      {/* Modal de Trivia personalizado por país */}
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

      {/* Modal de Video con reproductor nativo */}
      {showVideoModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>
            
            <div className="modal-card">
              <div className="modal-body">
                {/* Video del país con controles nativos */}
                <div className="video-container">
                  <video
                    ref={videoRef}
                    src={getVideoSrc(paisActual)}
                    className="video-player"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      borderRadius: '12px',
                      filter: getVideoFilter()
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ARPage.css';

function ARPage() {
  const navigate = useNavigate();
  const [showTriviaModal, setShowTriviaModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedTriviaOption, setSelectedTriviaOption] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const triviaOptions = [
    { id: 1, text: "12", correct: false },
    { id: 2, text: "16", correct: true },
    { id: 3, text: "24", correct: false },
    { id: 4, text: "32", correct: false }
  ];

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
  };

  return (
    <div className="ar-container">
      {/* Botón de regreso */}
      <button 
        className="ar-back-button"
        onClick={() => navigate('/seleccion')}
      >
        ←
      </button>

      {/* Fondo simulando cámara */}
      <div className="ar-background"></div>

      {/* Botones flotantes horizontal */}
      <div className="ar-buttons-container">
        <button 
          className="ar-action-button"
          onClick={() => setShowTriviaModal(true)}
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

      {/* Modal de Trivia */}
      {showTriviaModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Botón cerrar */}
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>
            
            {/* Tarjeta blanca */}
            <div className="modal-card">
              <div className="modal-body">
                {/* TÍTULO ELIMINADO */}
                
                <p className="modal-question">
                  ¿Cuántos equipos participan en la Copa Mundial de Fútbol?
                </p>
                
                <div className="options-container">
                  {triviaOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`option-item ${selectedTriviaOption === option.id ? 'selected' : ''}`}
                      onClick={() => setSelectedTriviaOption(option.id)}
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
                
                {/* FOOTER ELIMINADO */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Video */}
      {showVideoModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Botón cerrar */}
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>
            
            {/* Tarjeta blanca */}
            <div className="modal-card">
              <div className="modal-body">
                {/* TÍTULO ELIMINADO */}
                
                {/* Contenedor del video placeholder */}
                <div className="video-placeholder">
                  <div className="video-play-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="video-placeholder-text">Vista previa</span>
                </div>
                
                {/* Filtros */}
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
                
                {/* FOOTER ELIMINADO */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ARPage;
// Ayuda.tsx
import '../css/Ayuda.css';

function Ayuda() {
  return (
    <div className="container mt-4 mt-md-5 ayuda-container">
      {/* Encabezado */}
      <div className="ayuda-header">
        <h1 className="fw-bold">
          Guía de Funcionalidades - Mundial 2026
        </h1>
        <p className="lead">
          Descubre cómo utilizar todas las características de nuestra aplicación para el Mundial 2026 en México
        </p>
      </div>

      {/* Mapa de navegación visual */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="ayuda-card">
            <div className="ayuda-card-body">
              <h3 className="h5 fw-bold mb-4 text-center">
                <i className="bi bi-map me-2"></i>Mapa de Navegación
              </h3>
              <div className="text-center">
                <div className="ayuda-nav-map">
                  <div className="ayuda-nav-item">
                    <div className="ayuda-circle-icon bg-primary text-white">
                      <i className="bi bi-house-door fs-4"></i>
                    </div>
                    <span className="fw-medium">Página Principal</span>
                  </div>
                  <div className="ayuda-nav-arrow">
                    <i className="bi bi-arrow-right fs-3 text-muted"></i>
                  </div>
                  <div className="ayuda-nav-item">
                    <div className="ayuda-circle-icon bg-success text-white">
                      <i className="bi bi-flag fs-4"></i>
                    </div>
                    <span className="fw-medium">Países</span>
                  </div>
                  <div className="ayuda-nav-arrow">
                    <i className="bi bi-arrow-right fs-3 text-muted"></i>
                  </div>
                  <div className="ayuda-nav-item">
                    <div className="ayuda-circle-icon bg-warning text-white">
                      <i className="bi bi-info-circle fs-4"></i>
                    </div>
                    <span className="fw-medium">Detalles del País</span>
                  </div>
                </div>
                <div className="ayuda-nav-final">
                  <div className="d-inline-block position-relative">
                    <div className="ayuda-circle-icon bg-danger text-white">
                      <i className="bi bi-camera fs-4"></i>
                    </div>
                    <span className="fw-medium">Modo AR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones de explicación */}
      <div className="row g-4 mb-5">
        {/* Sección 1: Página Principal */}
        <div className="col-12 col-lg-6">
          <div className="ayuda-card">
            <div className="ayuda-card-header-primary">
              <div className="d-flex align-items-center">
                <div className="ayuda-circle-icon-sm bg-white text-primary me-3">
                  <i className="bi bi-house-door fs-5"></i>
                </div>
                <h4 className="h5 fw-bold mb-0">Página Principal</h4>
              </div>
            </div>
            <div className="ayuda-card-body">
              <p className="card-text">
                La pantalla inicial muestra información general del Mundial 2026 con las siguientes secciones:
              </p>
              <ul className="ayuda-list">
                <li className="ayuda-list-item">
                  <i className="bi bi-image text-primary me-2"></i>
                  <strong>Carrusel interactivo:</strong> Presenta las principales funcionalidades
                </li>
                <li className="ayuda-list-item">
                  <i className="bi bi-card-text text-primary me-2"></i>
                  <strong>Cards informativas:</strong> Acceso rápido a las secciones principales
                </li>
                <li className="ayuda-list-item">
                  <i className="bi bi-flag text-primary me-2"></i>
                  <strong>Botón "Ver Países":</strong> Te lleva al listado completo de participantes
                </li>
              </ul>
              <div className="ayuda-tip">
                <small className="ayuda-tip-small">
                  <i className="bi bi-lightbulb me-1"></i>
                  <strong>Consejo:</strong> Explora el carrusel para conocer todas las funciones disponibles
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 2: Países Participantes */}
        <div className="col-12 col-lg-6">
          <div className="ayuda-card">
            <div className="ayuda-card-header-success">
              <div className="d-flex align-items-center">
                <div className="ayuda-circle-icon-sm bg-white text-success me-3">
                  <i className="bi bi-flag fs-5"></i>
                </div>
                <h4 className="h5 fw-bold mb-0">Países Participantes</h4>
              </div>
            </div>
            <div className="ayuda-card-body">
              <p className="card-text">
                En esta sección encontrarás los 11 países que competirán en México durante el Mundial 2026:
              </p>
              <ul className="ayuda-list">
                <li className="ayuda-list-item">
                  <i className="bi bi-grid-3x3 text-success me-2"></i>
                  <strong>Vista de grid:</strong> Países organizados en tarjetas con sus banderas
                </li>
                <li className="ayuda-list-item">
                  <i className="bi bi-cursor text-success me-2"></i>
                  <strong>Selección:</strong> Haz clic en cualquier país para ver su información detallada
                </li>
                <li className="ayuda-list-item">
                  <i className="bi bi-eye text-success me-2"></i>
                  <strong>Vista previa:</strong> Cada tarjeta muestra la bandera y nombre del país
                </li>
              </ul>
              <div className="ayuda-tip">
                <small className="ayuda-tip-small">
                  <i className="bi bi-lightbulb me-1"></i>
                  <strong>Consejo:</strong> Haz clic en "México" para ver un ejemplo completo de funcionalidades
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 3: Página del País Seleccionado */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="ayuda-card">
            <div className="ayuda-card-header-warning">
              <div className="d-flex align-items-center">
                <div className="ayuda-circle-icon-sm bg-white text-warning me-3">
                  <i className="bi bi-info-circle fs-5"></i>
                </div>
                <h4 className="h5 fw-bold mb-0">Información del País</h4>
              </div>
            </div>
            <div className="ayuda-card-body">
              <p className="card-text">
                Al seleccionar un país, accedes a una página con información detallada organizada en 4 secciones:
              </p>
              
              <div className="row mt-4">
                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-building fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Estadio</h6>
                    <p className="small text-muted">Nombre e imagen del próximo estadio donde jugará</p>
                  </div>
                </div>
                
                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-calendar-event fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Partidos</h6>
                    <p className="small text-muted">Próximos encuentros con fechas y rivales</p>
                  </div>
                </div>
                
                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-people fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Jugadores</h6>
                    <p className="small text-muted">Plantilla completa con nombre y posición</p>
                  </div>
                </div>
                
                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-arrow-left fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Navegación</h6>
                    <p className="small text-muted">Botón circular para volver a la lista de países</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 4: Funcionalidad AR */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="ayuda-card">
            <div className="ayuda-card-header-danger">
              <div className="d-flex align-items-center">
                <div className="ayuda-circle-icon-sm bg-white text-danger me-3">
                  <i className="bi bi-camera fs-5"></i>
                </div>
                <h4 className="h5 fw-bold mb-0">Realidad Aumentada (AR)</h4>
              </div>
            </div>
            <div className="ayuda-card-body">
              <p className="card-text">
                La funcionalidad más innovadora: un botón flotante con icono de cámara que activa el modo AR.
              </p>
              
              <div className="ayuda-alert">
                <h6 className="alert-heading fw-bold">
                  <i className="bi bi-info-circle me-2"></i>
                  ¿Cómo funciona?
                </h6>
                <ol className="mb-0 mt-2">
                  <li className="mb-2">En la página de un país, busca el botón de cámara en la esquina inferior derecha</li>
                  <li className="mb-2">Haz clic para activar el modo cámara</li>
                  <li>Escanea un código QR oficial del Mundial 2026</li>
                </ol>
              </div>
              
              <h6 className="fw-bold mt-4">Contenido que puedes desbloquear:</h6>
              <div className="ayuda-feature-grid">
                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-play-btn"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Videos exclusivos</h6>
                    <p className="ayuda-ar-feature-text">Goles históricos, entrevistas y momentos destacados</p>
                  </div>
                </div>
                
                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-cube"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Modelos 3D</h6>
                    <p className="ayuda-ar-feature-text">Estadios, trofeos y elementos del mundial en 3D</p>
                  </div>
                </div>
                
                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-magic"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Animaciones</h6>
                    <p className="ayuda-ar-feature-text">Jugadas destacadas y efectos especiales</p>
                  </div>
                </div>
                
                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-question-circle"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Trivias interactivas</h6>
                    <p className="ayuda-ar-feature-text">Pon a prueba tus conocimientos sobre el mundial</p>
                  </div>
                </div>
              </div>
              
              <div className="ayuda-tip">
                <h6 className="fw-bold">
                  <i className="bi bi-exclamation-triangle text-danger me-2"></i>
                  Requisitos y recomendaciones
                </h6>
                <ul className="mb-0 mt-2">
                  <li className="mb-1">Permite el acceso a la cámara cuando el navegador lo solicite</li>
                  <li className="mb-1">Usa códigos QR oficiales del Mundial 2026</li>
                  <li className="mb-1">Funciona mejor en dispositivos con giroscopio</li>
                  <li>Asegúrate de tener buena iluminación al escanear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="row">
        <div className="col-12">
          <div className="ayuda-card">
            <div className="ayuda-card-header-secondary">
              <div className="d-flex align-items-center">
                <div className="ayuda-circle-icon-sm bg-white text-secondary me-3">
                  <i className="bi bi-question-circle fs-5"></i>
                </div>
                <h4 className="h5 fw-bold mb-0">Preguntas Frecuentes</h4>
              </div>
            </div>
            <div className="ayuda-card-body">
              <div className="accordion" id="faqAccordion">
                {/* Pregunta 1 */}
                <div className="ayuda-accordion-item">
                  <h3 className="accordion-header">
                    <button className="ayuda-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      ¿Dónde puedo encontrar códigos QR válidos?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="ayuda-accordion-body">
                      Los códigos QR oficiales estarán disponibles en la página web oficial del Mundial 2026, en las redes sociales oficiales y en materiales promocionales del evento.
                    </div>
                  </div>
                </div>
                
                {/* Pregunta 2 */}
                <div className="ayuda-accordion-item">
                  <h3 className="accordion-header">
                    <button className="ayuda-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      ¿Qué hago si la cámara AR no funciona?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="ayuda-accordion-body">
                      <ol className="mb-0">
                        <li className="mb-1">Verifica que has dado permiso para usar la cámara</li>
                        <li className="mb-1">Asegúrate de que tu dispositivo tenga giroscopio</li>
                        <li className="mb-1">Prueba en un lugar con mejor iluminación</li>
                        <li>Actualiza tu navegador a la última versión</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                {/* Pregunta 3 */}
                <div className="ayuda-accordion-item">
                  <h3 className="accordion-header">
                    <button className="ayuda-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      ¿Cómo vuelvo a la página principal desde cualquier sección?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="ayuda-accordion-body">
                      Puedes usar el botón de navegación "Inicio" en el menú principal o hacer clic en el logo del sitio que aparece en la esquina superior izquierda.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <a href="/" className="ayuda-btn-primary">
                  <i className="bi bi-house-door me-2"></i>Volver al Inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;
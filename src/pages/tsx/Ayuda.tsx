// Ayuda.tsx
import { useNavigate } from 'react-router-dom';
import '../css/Ayuda.css';

function Ayuda() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4 mt-md-5 ayuda-container">
      {/* Encabezado */}
      <div className="ayuda-header">
        <h1 className="fw-bold">
          Guía de Funcionalidades - Mundial 2026
        </h1>
        <p className="lead">
          Descubre cómo utilizar todas las características de nuestra aplicación para el Mundial 2026
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
                  <strong>Consejo:</strong> El botón flotante de cámara (📷) está disponible en todas las páginas para acceder al modo AR en cualquier momento
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
                En esta sección encontrarás los 9 países incluidos en la aplicación para el Mundial 2026:
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
                  <strong>Disponibles:</strong> México, España, Colombia, Japón, Corea del Sur, Uruguay, Túnez, Sudáfrica y Uzbekistán
                </li>
              </ul>
              <div className="ayuda-tip">
                <small className="ayuda-tip-small">
                  <i className="bi bi-lightbulb me-1"></i>
                  <strong>Consejo:</strong> Haz clic en "México" para ver un ejemplo completo con estadios, partidos, jugadores y estadísticas
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
                    <h6 className="fw-bold mb-1">Estadios</h6>
                    <p className="small text-muted">Nombre e imagen de los estadios donde jugará el equipo</p>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-calendar-event fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Partidos</h6>
                    <p className="small text-muted">Partidos confirmados con fechas, rivales y tipo de fase</p>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-people fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Jugadores</h6>
                    <p className="small text-muted">Jugadores destacados con nombre, posición e imagen</p>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="text-center">
                    <div className="ayuda-circle-icon-md bg-warning text-white">
                      <i className="bi bi-bar-chart fs-5"></i>
                    </div>
                    <h6 className="fw-bold mb-1">Estadísticas</h6>
                    <p className="small text-muted">Ranking FIFA, mundiales jugados, títulos y mejor resultado</p>
                  </div>
                </div>
              </div>

              <div className="ayuda-tip">
                <small className="ayuda-tip-small">
                  <i className="bi bi-lightbulb me-1"></i>
                  <strong>Navegación:</strong> Usa el botón circular "←" en la parte superior para volver al listado de países
                </small>
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
                La funcionalidad más innovadora: un <strong>botón flotante de cámara</strong> visible en todas las páginas que activa el modo AR. Existen dos formas de usarlo:
              </p>

              {/* Dos modos */}
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <div className="ayuda-alert">
                    <h6 className="alert-heading fw-bold">
                      <i className="bi bi-person-badge me-2"></i>
                      Modo País (desde la página de un país)
                    </h6>
                    <ol className="mb-0 mt-2">
                      <li className="mb-2">Entra a la página de un país (ej. España)</li>
                      <li className="mb-2">Toca el botón flotante de cámara 📷</li>
                      <li className="mb-2">Se activa el AR ya asociado a ese país</li>
                      <li>Apunta al marcador del logo de ese país para ver el modelo 3D</li>
                    </ol>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ayuda-alert">
                    <h6 className="alert-heading fw-bold">
                      <i className="bi bi-camera-reels me-2"></i>
                      Modo Libre (desde cualquier otra página)
                    </h6>
                    <ol className="mb-0 mt-2">
                      <li className="mb-2">Toca el botón flotante de cámara 📷 desde Inicio, Países u otras páginas</li>
                      <li className="mb-2">Se activa el modo libre con la cámara abierta</li>
                      <li className="mb-2">Apunta al logo de cualquier país participante</li>
                      <li>El sistema detecta automáticamente el país y muestra su modelo 3D</li>
                    </ol>
                  </div>
                </div>
              </div>

              <h6 className="fw-bold mt-4">Marcadores de imagen compatibles:</h6>
              <p className="text-muted small mb-3">
                El AR reconoce los <strong>logos oficiales</strong> de los 9 países participantes impresos o mostrados en pantalla. No se usan códigos QR.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['México','España','Colombia','Japón','Corea del Sur','Uruguay','Túnez','Sudáfrica','Uzbekistán'].map(pais => (
                  <span key={pais} className="badge" style={{ backgroundColor: '#2a5a9d', fontSize: '0.8rem', padding: '0.4em 0.75em' }}>{pais}</span>
                ))}
              </div>

              <h6 className="fw-bold mt-2">Funciones disponibles dentro del modo AR:</h6>
              <div className="ayuda-feature-grid">
                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-cube"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Modelo 3D</h6>
                    <p className="ayuda-ar-feature-text">El modelo 3D del país se superpone sobre el marcador al detectarlo. Incluye animaciones controlables</p>
                  </div>
                </div>

                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-question-circle"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Trivia interactiva</h6>
                    <p className="ayuda-ar-feature-text">Botón "Trivia" → quiz de 5 preguntas aleatorias de un banco de 40. Con sonidos, barra de progreso y confetti al acertar</p>
                  </div>
                </div>

                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-play-btn"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Video con filtros</h6>
                    <p className="ayuda-ar-feature-text">Botón "Video" → reproduce un video del país. Aplica filtros: Normal, Desenfoque, Pixelado o Alta Saturación</p>
                  </div>
                </div>

                <div className="ayuda-ar-feature">
                  <div className="ayuda-ar-feature-icon">
                    <i className="bi bi-arrow-left-circle"></i>
                  </div>
                  <div className="ayuda-ar-feature-content">
                    <h6 className="ayuda-ar-feature-title">Volver</h6>
                    <p className="ayuda-ar-feature-text">Botón "←" en la esquina superior izquierda para salir del modo AR y regresar al listado de países</p>
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
                  <li className="mb-1">Usa los marcadores de logo de cada país (impresos o en pantalla)</li>
                  <li className="mb-1">Funciona mejor en dispositivos con giroscopio</li>
                  <li className="mb-1">Asegúrate de tener buena iluminación al escanear el marcador</li>
                  <li>Recomendado en navegadores modernos (Chrome, Firefox, Safari actualizados)</li>
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
                      ¿Cómo accedo al modo de Realidad Aumentada?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="ayuda-accordion-body">
                      Toca el <strong>botón flotante de cámara 📷</strong> que aparece en la esquina inferior derecha en cualquier página de la aplicación.
                      Si lo haces desde la página de un país, el AR ya viene asociado a ese país. Si lo haces desde otra página (Inicio, Países, etc.), 
                      se activa el <strong>modo libre</strong> y puedes apuntar al logo de cualquier país para que el sistema lo detecte automáticamente.
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
                        <li className="mb-1">Verifica que has dado permiso para usar la cámara en el navegador</li>
                        <li className="mb-1">Asegúrate de que tu dispositivo tenga giroscopio</li>
                        <li className="mb-1">Prueba en un lugar con mejor iluminación</li>
                        <li>Actualiza tu navegador a la última versión y vuelve a intentarlo</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Pregunta 3 */}
                <div className="ayuda-accordion-item">
                  <h3 className="accordion-header">
                    <button className="ayuda-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      ¿Qué marcadores debo usar para el AR?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="ayuda-accordion-body">
                      La aplicación utiliza los <strong>logos oficiales de cada país participante</strong> como marcadores de imagen.
                      Puedes imprimirlos o mostrarlos en la pantalla de otro dispositivo. El sistema reconoce los logos de:
                      México, España, Colombia, Japón, Corea del Sur, Uruguay, Túnez, Sudáfrica y Uzbekistán.
                      No se usan códigos QR.
                    </div>
                  </div>
                </div>

                {/* Pregunta 4 */}
                <div className="ayuda-accordion-item">
                  <h3 className="accordion-header">
                    <button className="ayuda-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      ¿Cómo vuelvo a la página principal desde cualquier sección?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="ayuda-accordion-body">
                      Puedes usar la barra de navegación superior (Navbar) con el enlace "Inicio", o bien hacer clic en el logo del sitio en la esquina superior izquierda.
                      Desde la página de un país, usa el botón circular "←" para volver al listado de países.
                    </div>
                  </div>
                </div>

              </div>

              <div className="text-center mt-4">
                <button
                  className="ayuda-btn-primary"
                  onClick={() => navigate('/')}
                >
                  <i className="bi bi-house-door me-2"></i>Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;
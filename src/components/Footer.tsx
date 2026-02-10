function Footer() {
  return (
    <footer className="py-4 mt-5 text-white" style={{ backgroundColor: "#112a4c" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              {/* Logo en footer */}
              <div className="me-3 bg-white rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: "40px", height: "40px" }}>
                <span className="text-dark fw-bold">KO</span>
              </div>
              <h5 className="fw-bold mb-0">KickOff</h5>
            </div>
            <p className="mb-2">Tu fuente confiable para todo sobre el Mundial de Fútbol 2026</p>
            <p className="mb-0 opacity-75">© 2024 KickOff. Todos los derechos reservados.</p>
          </div>
          
          <div className="col-md-3 mb-3 mb-md-0">
            <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none hover-opacity">
                  <i className="bi bi-house-door me-2"></i>Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/paises" className="text-white text-decoration-none hover-opacity">
                  <i className="bi bi-flag me-2"></i>Países
                </a>
              </li>
              <li>
                <a href="/ayuda" className="text-white text-decoration-none hover-opacity">
                  <i className="bi bi-question-circle me-2"></i>Ayuda
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contacto</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>info@kickoff.com
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2"></i>+1 (555) 123-4567
              </li>
              <li>
                <h6 className="fw-bold mb-2">Síguenos</h6>
                <div className="d-flex">
                  <a href="#" className="text-white me-3 fs-5">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-white me-3 fs-5">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="text-white me-3 fs-5">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-white fs-5">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-4 pt-3 border-top border-white border-opacity-25">
          <div className="col-12 text-center opacity-75">
            <small>Diseñado con pasión por el fútbol ⚽</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
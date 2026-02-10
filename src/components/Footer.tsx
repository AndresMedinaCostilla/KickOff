import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-main py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              {/* Logo en footer */}
              <div className="me-3 footer-logo">
                <span className="fw-bold">KO</span>
              </div>
              <h5 className="fw-bold mb-0">KickOff</h5>
            </div>
            <p className="mb-0">
              Tu fuente confiable para todo sobre el Mundial de Fútbol 2026
            </p>
          </div>
          
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <a href="/" className="d-flex align-items-center">
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/paises" className="d-flex align-items-center">
                  <i className="bi bi-flag me-2"></i>
                  Países
                </a>
              </li>
              <li>
                <a href="/ayuda" className="d-flex align-items-center">
                  <i className="bi bi-question-circle me-2"></i>
                  Ayuda
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contacto</h6>
            <ul className="list-unstyled">
              <li className="mb-2 footer-contact-item">
                <i className="bi bi-envelope me-2"></i>
                andres.medinac@uanl.edu.mx
              </li>
              <li className="mb-2 footer-contact-item">
                <i className="bi bi-envelope me-2"></i>
                raul.cortezr@uanl.edu.mx
              </li>
              <li className="footer-contact-item">
                <i className="bi bi-telephone me-2"></i>
                +52 (81) 21949242
              </li>
              <li className="footer-contact-item">
                <i className="bi bi-telephone me-2"></i>
                +52 (81) 28948726
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-4 pt-3 footer-divider">
          <div className="col-12 text-center">
            <small>KickOff</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
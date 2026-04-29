import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import kickoffLogo from "./Kickoff logo blanco.png"; // Importa el logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Controlar el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Limpiar al desmontar
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar principal - #1a3a6d */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: "#1a3a6d" }}>
        <div className="container">
          {/* Logo + Nombre */}
          <div className="d-flex align-items-center">
            <div 
              className="me-3 d-flex align-items-center justify-content-center" 
              style={{ width: "50px", height: "50px" }}
            >
              <img 
                src={kickoffLogo} 
                alt="KickOff Logo" 
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            
            <Link className="navbar-brand fs-3 fw-bold text-white" to="/" onClick={closeMenu}>
              KickOff
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú para desktop */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/paises" onClick={closeMenu}>
                  Países
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white nav-scan-btn" to="/ar?modo=libre" onClick={closeMenu}>
                  Escanear
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/ayuda" onClick={closeMenu}>
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay del menú móvil */}
      {isMenuOpen && (
        <div className="d-lg-none mobile-menu-overlay">
          {/* Fondo semitransparente */}
          <div 
            className="mobile-menu-backdrop"
            onClick={closeMenu}
          />
          
          {/* Menú lateral - #1a3a6d */}
          <div className="mobile-menu-sidebar">
            {/* Encabezado del menú móvil */}
            <div className="d-flex justify-content-between align-items-center p-4 mobile-menu-header">
              <div className="d-flex align-items-center">
                <div className="me-3 mobile-menu-logo">
                  <img 
                    src={kickoffLogo} 
                    alt="KickOff Logo" 
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <span className="fw-bold fs-5 text-white">KickOff</span>
              </div>
              <button 
                className="btn btn-close btn-close-white" 
                onClick={closeMenu}
                aria-label="Close menu"
              />
            </div>

            {/* Enlaces del menú - Botones con #06111e */}
            <ul className="nav flex-column p-4">
              <li className="nav-item mb-3">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded mobile-menu-item"
                  to="/"
                  onClick={closeMenu}
                >
                  <i className="bi bi-house-door me-3"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded mobile-menu-item"
                  to="/paises"
                  onClick={closeMenu}
                >
                  <i className="bi bi-flag me-3"></i>
                  Países
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded mobile-menu-item mobile-menu-item--scan"
                  to="/ar?modo=libre"
                  onClick={closeMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{width:'22px',height:'22px',marginRight:'12px',flexShrink:0}}>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                  </svg>
                  Escanear
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded mobile-menu-item"
                  to="/ayuda"
                  onClick={closeMenu}
                >
                  <i className="bi bi-question-circle me-3"></i>
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
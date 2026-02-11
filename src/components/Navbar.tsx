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
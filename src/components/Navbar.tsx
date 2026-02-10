import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar principal */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: "#112a4c" }}>
        <div className="container">
          {/* Logo + Nombre */}
          <div className="d-flex align-items-center">
            <div className="me-3 bg-white rounded-circle d-flex align-items-center justify-content-center" 
                 style={{ width: "50px", height: "50px" }}>
              <span className="text-dark fw-bold fs-5">KO</span>
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
                <Link className="nav-link text-white" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/paises" onClick={closeMenu}>Países</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/ayuda" onClick={closeMenu}>Ayuda</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay del menú móvil */}
      {isMenuOpen && (
        <div 
          className="d-lg-none"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1040,
          }}
        >
          {/* Fondo semitransparente */}
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(2px)",
            }}
            onClick={closeMenu}
          />
          
          {/* Menú lateral - FONDO AZUL (#112a4c) */}
          <div 
            className="h-100"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              minWidth: "250px",
              zIndex: 1050,
              boxShadow: "-5px 0 15px rgba(0,0,0,0.3)",
              backgroundColor: "#112a4c", // Fondo azul
            }}
          >
            {/* Encabezado del menú móvil */}
            <div className="d-flex justify-content-between align-items-center p-4 border-bottom" 
                 style={{ borderColor: "#1a3a6d !important" }}>
              <div className="d-flex align-items-center">
                <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ 
                       width: "40px", 
                       height: "40px", 
                       backgroundColor: "#000000",
                       border: "2px solid #ffffff"
                     }}>
                  <span className="text-white fw-bold">KO</span>
                </div>
                <span className="fw-bold fs-5 text-white">KickOff</span>
              </div>
              <button 
                className="btn btn-close btn-close-white" 
                onClick={closeMenu}
                aria-label="Close menu"
              />
            </div>

            {/* Enlaces del menú - BOTONES NEGROS */}
            <ul className="nav flex-column p-4">
              <li className="nav-item mb-3">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded"
                  to="/"
                  onClick={closeMenu}
                  style={{ 
                    backgroundColor: "#202020", // Fondo negro para botones
                    border: "none",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <i className="bi bi-house-door me-3"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded"
                  to="/paises"
                  onClick={closeMenu}
                  style={{ 
                    backgroundColor: "#202020", // Fondo negro para botones
                    border: "none",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <i className="bi bi-flag me-3"></i>
                  Países
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link text-white d-flex align-items-center fs-5 p-3 rounded"
                  to="/ayuda"
                  onClick={closeMenu}
                  style={{ 
                    backgroundColor: "#202020", // Fondo negro para botones
                    border: "none",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <i className="bi bi-question-circle me-3"></i>
                  Ayuda
                </Link>
              </li>
            </ul>

            {/* Pie del menú móvil */}
            <div className="position-absolute bottom-0 start-0 end-0 p-4 border-top" 
                 style={{ borderColor: "#1a3a6d !important" }}>
              <small className="d-block text-center text-white-50">
                © 2024 KickOff
              </small>
            </div>
          </div>
        </div>
      )}

      {/* Estilos inline */}
      <style>
        {`
          ${isMenuOpen ? `
            body {
              overflow: hidden;
            }
          ` : ''}
          
          .nav-link.rounded {
            transition: all 0.3s ease;
          }
          
          .nav-link.rounded:hover {
            transform: translateX(5px);
            background-color: #333333 !important; /* Negro más claro al hover */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4) !important;
          }
          
          /* Efecto de botón presionado */
          .nav-link.rounded:active {
            transform: translateX(5px) scale(0.98);
            background-color: #444444 !important;
          }
          
          /* Animación de entrada del menú */
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          /* Aplicar animación al menú lateral */
          [class*="h-100"][style*="width: 50%"] {
            animation: slideInRight 0.3s ease-out;
          }
          
          /* Animación del fondo */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          /* Fondo semitransparente */
          [style*="backdrop-filter"] {
            animation: fadeIn 0.2s ease-out;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
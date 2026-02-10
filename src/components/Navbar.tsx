import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: "#112a4c" }}>
      <div className="container">
        {/* Logo + Nombre */}
        <div className="d-flex align-items-center">
          {/* Espacio para logo futuro */}
          <div className="me-3 bg-white rounded-circle d-flex align-items-center justify-content-center" 
               style={{ width: "50px", height: "50px" }}>
            <span className="text-dark fw-bold fs-5">KO</span>
          </div>
          
          <Link className="navbar-brand fs-3 fw-bold text-white" to="/">
            KickOff
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/paises">Países</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ayuda">Ayuda</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
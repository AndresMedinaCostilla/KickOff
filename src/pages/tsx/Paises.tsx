import { useNavigate } from 'react-router-dom';
import '../css/Paises.css';

function Paises() {
  const navigate = useNavigate();
  
  interface Pais {
    nombre: string;
    bandera: string;
    ruta: string;
  }

  const paisesMundial2026: Pais[] = [
    // { nombre: "México", bandera: "https://flagcdn.com/w320/mx.png", ruta: "/mexico" },
    { nombre: "Sudáfrica", bandera: "https://flagcdn.com/w320/za.png", ruta: "/sudafrica" },
    { nombre: "Corea del Sur", bandera: "https://flagcdn.com/w320/kr.png", ruta: "/corea" },
    { nombre: "Colombia", bandera: "https://flagcdn.com/w320/co.png", ruta: "/colombia" },
    { nombre: "Uzbekistán", bandera: "https://flagcdn.com/w320/uz.png", ruta: "/uzbekistan" },
    { nombre: "Túnez", bandera: "https://flagcdn.com/w320/tn.png", ruta: "/tunez" },
    { nombre: "Japón", bandera: "https://flagcdn.com/w320/jp.png", ruta: "/japon" },
    { nombre: "España", bandera: "https://flagcdn.com/w320/es.png", ruta: "/espana" },
    { nombre: "Uruguay", bandera: "https://flagcdn.com/w320/uy.png", ruta: "/uruguay" },
  ];

  const handleCardClick = (ruta: string) => {
    navigate(ruta);
  };

  return (
    <div className="container mt-4 px-3">
      <div className="text-center mb-4">
        <h1 className="h4 fw-bold text-dark mb-1">Mundial 2026</h1>
        <p className="text-muted small">Haz clic en cualquier país para ver información</p>
      </div>

      <div className="row row-cols-2 g-3">
        {paisesMundial2026.map((pais: Pais, index: number) => (
          <div key={index} className="col">
            <div 
              className="card pais-card h-100" 
              onClick={() => handleCardClick(pais.ruta)}
            >
              <div className="card-img-top bandera-container">
                <img
                  src={pais.bandera}
                  alt={`Bandera de ${pais.nombre}`}
                  className="img-fluid bandera-imagen"
                  loading="lazy"
                />
              </div>
              
              <div className="card-body p-2 text-center">
                <p className="card-text fw-medium mb-0 pais-nombre">
                  {pais.nombre}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-muted small">
          <strong>{paisesMundial2026.length}</strong> países
        </p>
      </div>
    </div>
  );
}

export default Paises;
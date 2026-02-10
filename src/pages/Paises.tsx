import { useNavigate } from 'react-router-dom';

function Paises() {
  const navigate = useNavigate();
  
  // Países según tu lista
  const paisesMundial2026 = [
    { nombre: "México", bandera: "https://flagcdn.com/w320/mx.png" },
    { nombre: "Sudáfrica", bandera: "https://flagcdn.com/w320/za.png" },
    { nombre: "Corea del Sur", bandera: "https://flagcdn.com/w320/kr.png" },
    { nombre: "Colombia", bandera: "https://flagcdn.com/w320/co.png" },
    { nombre: "Uzbekistán", bandera: "https://flagcdn.com/w320/uz.png" },
    { nombre: "Túnez", bandera: "https://flagcdn.com/w320/tn.png" },
    { nombre: "Japón", bandera: "https://flagcdn.com/w320/jp.png" },
    { nombre: "España", bandera: "https://flagcdn.com/w320/es.png" },
    { nombre: "Uruguay", bandera: "https://flagcdn.com/w320/uy.png" },
    { nombre: "Arabia Saudita", bandera: "https://flagcdn.com/w320/sa.png" },
    { nombre: "Cabo Verde", bandera: "https://flagcdn.com/w320/cv.png" },
  ];

  const handleCardClick = () => {
    navigate('/seleccion');
  };

  return (
    <div className="container mt-4 px-3">
      <div className="text-center mb-4">
        <h1 className="h4 fw-bold text-dark mb-1">Mundial 2026</h1>
        <p className="text-muted small">Haz clic en cualquier país para ver información de ejemplo (México)</p>
      </div>

      <div className="row row-cols-2 g-3">
        {paisesMundial2026.map((pais, index) => (
          <div key={index} className="col">
            <div 
              className="card h-100" 
              style={{
                border: "1.5px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
              onClick={handleCardClick}
            >
              <div 
                className="card-img-top d-flex align-items-center justify-content-center"
                style={{
                  height: "110px",
                  backgroundColor: "#f8f9fa",
                  padding: "12px",
                  borderTopLeftRadius: "9px",
                  borderTopRightRadius: "9px",
                  borderBottom: "1px solid #f0f0f0"
                }}
              >
                <img
                  src={pais.bandera}
                  alt={`Bandera de ${pais.nombre}`}
                  className="img-fluid"
                  style={{
                    maxHeight: "90px",
                    width: "auto",
                    objectFit: "contain"
                  }}
                  loading="lazy"
                />
              </div>
              
              <div className="card-body p-2 text-center">
                <p className="card-text fw-medium mb-0" style={{ 
                  fontSize: "0.9rem",
                  color: "#333333"
                }}>
                  {pais.nombre}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-muted small">
          Haz clic en cualquier país para ver ejemplo • <strong>{paisesMundial2026.length}</strong> países
        </p>
      </div>

      <style>{`
        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08) !important;
          border-color: #d0d0d0 !important;
        }
        .card:active {
          transform: scale(0.98) !important;
        }
        
        @media (max-width: 576px) {
          .card {
            border: 1.8px solid #e0e0e0 !important;
          }
          .card-img-top {
            height: 100px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Paises;
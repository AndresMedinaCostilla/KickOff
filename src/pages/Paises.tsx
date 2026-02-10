function Paises() {
  // Países según tu lista - solo bandera y nombre
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

  return (
    <div className="container mt-4 px-3">
      {/* Título minimalista */}
      <div className="text-center mb-4">
        <h1 className="h4 fw-bold text-dark mb-1">Mundial 2026</h1>
        <p className="text-muted small">Países participantes</p>
      </div>

      {/* Grid de cards con borde sutil */}
      <div className="row row-cols-2 g-3">
        {paisesMundial2026.map((pais, index) => (
          <div key={index} className="col">
            <div className="card h-100" style={{
              border: "1.5px solid #e0e0e0",
              borderRadius: "10px",
              boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
              backgroundColor: "#ffffff"
            }}>
              {/* Contenedor de bandera con tamaño fijo */}
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
              
              {/* Nombre del país */}
              <div className="card-body p-2 text-center" style={{
                backgroundColor: "#ffffff",
                borderBottomLeftRadius: "9px",
                borderBottomRightRadius: "9px"
              }}>
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

      {/* Contador simple */}
      <div className="mt-4 text-center">
        <p className="text-muted small">
          <strong>{paisesMundial2026.length}</strong> países
        </p>
      </div>

      {/* Estilos optimizados con borde visible */}
      <style>{`
        .card {
          transition: all 0.25s ease;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(-3px);
          border-color: #d0d0d0 !important;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08) !important;
        }
        
        /* Asegurar que todas las banderas tengan mismo aspecto */
        .card-img-top img {
          display: block;
          margin: 0 auto;
        }
        
        /* Optimización para móviles - borde más visible */
        @media (max-width: 576px) {
          .container {
            padding-left: 10px;
            padding-right: 10px;
          }
          .card {
            border: 1.8px solid #e0e0e0 !important;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05) !important;
          }
          .card:hover {
            border-color: #c0c0c0 !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07) !important;
          }
          .card-img-top {
            height: 100px !important;
            padding: 10px !important;
          }
          .card-img-top img {
            max-height: 85px !important;
          }
          .card-body {
            padding: 0.6rem 0.5rem !important;
          }
          .g-3 {
            --bs-gutter-y: 0.8rem;
            --bs-gutter-x: 0.8rem;
          }
          .card-text {
            font-size: 0.85rem !important;
          }
        }
        
        /* Para pantallas más grandes - borde más sutil */
        @media (min-width: 768px) {
          .row-cols-2 {
            row-cols: 3 !important;
          }
          .card {
            border: 1.2px solid #e8e8e8 !important;
          }
          .card-img-top {
            height: 120px !important;
          }
          .card-img-top img {
            max-height: 100px !important;
          }
        }
        
        @media (min-width: 992px) {
          .row-cols-2 {
            row-cols: 4 !important;
          }
        }
        
        @media (min-width: 1200px) {
          .row-cols-2 {
            row-cols: 5 !important;
          }
        }
        
        /* Para asegurar contraste en todos los dispositivos */
        @media (prefers-color-scheme: light) {
          .card {
            border-color: #e0e0e0 !important;
            background-color: #ffffff !important;
          }
        }
        
        /* Efecto de presión al hacer tap en móviles */
        @media (hover: none) and (pointer: coarse) {
          .card:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }
      `}</style>
    </div>
  );
}

export default Paises;
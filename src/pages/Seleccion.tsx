import { useNavigate } from 'react-router-dom';

function Seleccion() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "MÉXICO",
    bandera: "https://flagcdn.com/w320/mx.png",
    estadio: {
      nombre: "ESTADIO AZTECA",
      ciudad: "CIUDAD DE MÉXICO",
      imagen: "https://images.adsttc.com/media/images/62bb/c742/3e4b/3151/d100/0005/slideshow/ConjuntoEstadioAzteca6.jpg?1656473405"
    },
    partidos: [
      {
        fecha: "11 JUNIO 2026",
        rival: { nombre: "SUDÁFRICA", bandera: "https://flagcdn.com/w320/za.png" },
        tipo: "INAUGURAL"
      },
      {
        fecha: "18 JUNIO 2026",
        rival: { nombre: "COREA DEL SUR", bandera: "https://flagcdn.com/w320/kr.png" },
        tipo: "FASE DE GRUPOS"
      },
      {
        fecha: "24 JUNIO 2026",
        rival: { nombre: "GANADOR UEFA", bandera: "https://flagcdn.com/w320/eu.png" },
        tipo: "FASE DE GRUPOS"
      }
    ],
    jugadores: [
      { 
        nombre: "GUILLERMO OCHOA", 
        posicion: "PORTERO", 
        imagen: "https://imgs.search.brave.com/Sx8ezy4WExrIIZ53pFSnfGimM-S4WPTjTekWRg1fFqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/MzQ2NzU2My9waG90/by9zYW50YS1jbGFy/YS1jYWxpZm9ybmlh/LWd1aWxsZXJtby1v/Y2hvYS1vZi1tZXhp/Y28td2FybXMtdXAt/ZHVyaW5nLWEtZ2Ft/ZS1iZXR3ZWVuLWhv/bmR1cmFzLWFuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c2JIZ0ltNjBCcnNf/NERBMEtyUXJtQi1h/VjBjVmg5ZWFWRzk4/dVl0VXRIQT0" 
      },
      { 
        nombre: "EDSON ÁLVAREZ", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/Zcins_qfyGCJYFAZnbV6sMg5vub_IIOy4i0k_EcRC9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/MDkzMDE3MC9waG90/by9hcmxpbmd0b24t/dGV4YXMtZWRzb24t/YWx2YXJlei1vZi1t/ZXhpY28tbGluZS11/cC1kdXJpbmctZHVy/aW5nLXRoZS1ncm91/cC1zdGFnZS1ncm91/cC1hLW1hdGNoLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/SUN5TTRMUGFyMy1h/ZlVuVmh2Xy1jNVls/UGVVb1V5b19MWHlH/amNvRDVjPQ" 
      },
      { 
        nombre: "RAÚL JIMÉNEZ", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/AraxbPL8nanNialRJeWwDsyqy6L2k0SQwamwY8Inut0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/MDkzMDE1MC9waG90/by9hcmxpbmd0b24t/dGV4YXMtcmF1bC1q/aW1lbmV6LW9mLW1l/eGljby1saW5lLXVw/LWR1cmluZy1kdXJp/bmctdGhlLWdyb3Vw/LXN0YWdlLWdyb3Vw/LWEtbWF0Y2guanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWs4/QVN0ZGlzWjA0UFF0/VTBia0F2eGs0UXBh/ZnlPakhaME0ybk5O/dmVCU2c9" 
      },
      { 
        nombre: "HIRVING LOZANO", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/vi_fyjV4PuRYK6zI1XFs95Cqx_gDvMZTBAmxTMahFPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/MzE3MTU4OC9lcy9m/b3RvL3Nhbi1kaWVn/by1jYWxpZm9ybmlh/LWhpcnZpbmctbG96/YW5vLW9mLXNhbi1k/aWVnby1mYy1sb29r/cy1vbi1kdXJpbmct/YS1nYW1lLWFnYWlu/c3QtdGhlLXN0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/cHliemFmUjJkTktX/ODVYQS1PTHFyVjc1/a3dHSDdxd3RyVXZm/ZlNoRm5ZPQ" 
      },
      { 
        nombre: "ANDRÉS GUARDADO", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/xxHHIAS67oyI2JNYEZdA_9rR9cjvlRadcwC_3tqDm-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29hbC5jb20v/aW1hZ2VzL3YzL2Js/dDZmNjJmMmRlMDY2/ZDY2NDMvR2V0dHlJ/bWFnZXMtMTg3Mjcx/MzQyNF8oMSkuanBn/P2F1dG89d2VicCZm/b3JtYXQ9cGpwZyZ3/aWR0aD0zODQwJnF1/YWxpdHk9NjA" 
      },
      { 
        nombre: "JESÚS CORONA", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/8o0UNnOn5iYcGpb4mbBa_ZfNIZKMzAoXfdrV_YKSOvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWlsZW5pby5jb20v/dXBsb2Fkcy9tZWRp/YS8yMDIzLzA2LzE3/L2plc3VzLWNvcm9u/YS1zZS12YS1kZS5q/cGc" 
      }
    ]
  };

  return (
    <div className="container-fluid px-0">
      {/* Header con bandera de fondo */}
      <div className="position-relative">
        <div 
          className="w-100"
          style={{
            height: "220px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Fondo con bandera y overlay oscuro */}
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${paisSeleccionado.bandera})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6) contrast(1.1)"
            }}
          />
          
          {/* Overlay gradiente para texto */}
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)"
            }}
          />
          
          {/* Botón de regreso */}
          <button 
            className="btn btn-light position-absolute"
            style={{
              top: "20px",
              left: "20px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              zIndex: 100,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none"
            }}
            onClick={() => navigate('/paises')}
          >
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>←</span>
          </button>

          {/* Solo el nombre del país sobre la bandera */}
          <div className="position-absolute bottom-0 start-0 w-100 p-4">
            <div className="text-white">
              <h1 
                className="fw-bold mb-0" 
                style={{ 
                  fontSize: "2.5rem",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                  letterSpacing: "1.5px"
                }}
              >
                {paisSeleccionado.nombre}
              </h1>
            </div>
          </div>
        </div>
        
      {/* Botón AR flotante con icono de cámara fotográfica */}
<button 
  className="btn position-fixed border-0"
  style={{
    bottom: "25px",
    right: "25px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    zIndex: 1000,
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a5a9d",
    padding: "0"
  }}
  onClick={() => alert("Función AR activada")}
>
  {/* Icono de cámara fotográfica SVG */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="white"
    style={{
      width: "40px",
      height: "40px"
    }}
  >
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
  </svg>
</button>
      </div>

      {/* Contenido principal */}
      <div className="container mt-4 px-3">
        {/* Sección de estadio */}
        <div className="mb-5">
          <h2 className="h5 fw-bold mb-3 text-uppercase text-muted" style={{ letterSpacing: "1px" }}>
            Estadio
          </h2>
          <div className="position-relative rounded-3 overflow-hidden shadow-lg">
            {/* Imagen del estadio con overlay */}
            <div className="position-relative" style={{ height: "220px" }}>
              <img 
                src={paisSeleccionado.estadio.imagen} 
                alt={paisSeleccionado.estadio.nombre}
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{
                  filter: "brightness(0.9) saturate(1.1)"
                }}
              />
              
              {/* Overlay para texto */}
              <div 
                className="position-absolute bottom-0 start-0 w-100 p-4"
                style={{
                  background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                }}
              >
                <h3 
                  className="h4 fw-bold text-white mb-1"
                  style={{ 
                    textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                    letterSpacing: "0.5px"
                  }}
                >
                  {paisSeleccionado.estadio.nombre}
                </h3>
                <p className="text-white-80 mb-0" style={{ opacity: 0.9 }}>
                  {paisSeleccionado.estadio.ciudad}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de partidos */}
        <div className="mb-5">
          <h2 className="h5 fw-bold mb-3 text-uppercase text-muted" style={{ letterSpacing: "1px" }}>
            Partidos Confirmados
          </h2>
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              {paisSeleccionado.partidos.map((partido, index) => (
                <div 
                  key={index} 
                  className={`d-flex align-items-center p-3 ${index < paisSeleccionado.partidos.length - 1 ? 'border-bottom' : ''}`}
                  style={{ 
                    background: index % 2 === 0 ? "#f8f9fa" : "#ffffff" 
                  }}
                >
                  <div className="d-flex align-items-center flex-grow-1">
                    <div 
                      className="rounded-2 overflow-hidden me-3"
                      style={{ 
                        width: "50px", 
                        height: "50px",
                        boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
                      }}
                    >
                      <img 
                        src={partido.rival.bandera} 
                        alt={`Bandera de ${partido.rival.nombre}`}
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="h6 fw-bold mb-1" style={{ color: "#333" }}>
                        vs {partido.rival.nombre}
                      </h4>
                      <p className="small text-muted mb-0">{partido.fecha}</p>
                    </div>
                  </div>
                  <span 
                    className="badge px-3 py-2 ms-2"
                    style={{ 
                      background: "rgba(108, 117, 125, 0.1)",
                      color: "#6c757d",
                      fontWeight: "500",
                      fontSize: "0.8rem"
                    }}
                  >
                    {partido.tipo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de jugadores */}
        <div className="mb-5">
          <h2 className="h5 fw-bold mb-3 text-uppercase text-muted" style={{ letterSpacing: "1px" }}>
            Jugadores Destacados
          </h2>
          <div className="row g-3">
            {paisSeleccionado.jugadores.map((jugador, index) => (
              <div key={index} className="col-6">
                <div 
                  className="card h-100 border-0 shadow-sm overflow-hidden"
                  style={{ borderRadius: "12px" }}
                >
                  <div 
                    className="card-img-top position-relative"
                    style={{
                      height: "140px",
                      overflow: "hidden"
                    }}
                  >
                    <img 
                      src={jugador.imagen} 
                      alt={jugador.nombre}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    {/* Overlay sutil para imagen */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: "linear-gradient(transparent, rgba(0,0,0,0.1))"
                      }}
                    />
                  </div>
                  
                  <div className="card-body p-3 text-center">
                    <h5 
                      className="h6 fw-bold mb-1" 
                      style={{ 
                        fontSize: "0.85rem",
                        color: "#333",
                        lineHeight: "1.2"
                      }}
                    >
                      {jugador.nombre}
                    </h5>
                    <p 
                      className="small mb-0"
                      style={{ 
                        color: "#666",
                        fontWeight: "500"
                      }}
                    >
                      {jugador.posicion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos para móviles */}
      <style>{`
        @media (max-width: 576px) {
          .container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          
          .position-relative > div:first-child {
            height: 200px !important;
          }
          
          h1.fw-bold {
            font-size: 2rem !important;
          }
          
          .position-relative[style*="height: 220px"] {
            height: 200px !important;
          }
          
          .col-6 {
            padding-left: 6px !important;
            padding-right: 6px !important;
          }
          
          .card-img-top[style*="height: 140px"] {
            height: 120px !important;
          }
          
          button.position-fixed {
            width: 65px !important;
            height: 65px !important;
            bottom: 20px !important;
            right: 20px !important;
          }
          
          button.position-fixed svg {
            width: 30px !important;
            height: 30px !important;
          }
          
          .d-flex.p-3 {
            padding: 1rem !important;
          }
        }
        
        /* Mejores transiciones */
        .card {
          transition: all 0.25s ease;
        }
        
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
        
        /* Efecto de presión en móviles */
        @media (hover: none) and (pointer: coarse) {
          .card:active {
            transform: scale(0.98) !important;
          }
          
          button.position-fixed:active {
            transform: scale(0.95) !important;
          }
        }
        
        /* Efecto hover en botón AR */
        button.position-fixed:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(42, 90, 157, 0.4) !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default Seleccion;
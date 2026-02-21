import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Sudafrica() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "SUDÁFRICA",
    bandera: "https://flagcdn.com/w320/za.png",
    estadios: [
      {
        nombre: "ESTADIO AZTECA",
        ciudad: "CIUDAD DE MÉXICO",
        imagen: "https://images.adsttc.com/media/images/62bb/c742/3e4b/3151/d100/0005/slideshow/ConjuntoEstadioAzteca6.jpg?1656473405",
      },
      {
        nombre: "ESTADIO BBVA",
        ciudad: "GUADALUPE, NUEVO LEÓN",
        imagen: "https://imgs.search.brave.com/VRuGTJyBjvTwlN8C6zbhrfFwC_z2MkDSBlciJQ9erEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U1L0VzdGFkaW9f/QkJWQV9CYW5jb21l/cl8oMSkuanBn",
      }
    ],
    partidos: [
      {
        fecha: "11 JUNIO 2026",
        rival: { nombre: "MÉXICO", bandera: "https://flagcdn.com/w320/mx.png" },
        tipo: "INAUGURAL"
      },
      {
        fecha: "24 JUNIO 2026",
        rival: { nombre: "COREA DEL SUR", bandera: "https://flagcdn.com/w320/kr.png" },
        tipo: "FASE DE GRUPOS"
      },
      {
        fecha: "18 JUNIO 2026",
        rival: { nombre: "GANADOR UEFA", bandera: "https://flagcdn.com/w320/eu.png" },
        tipo: "FASE DE GRUPOS"
      }
    ],
    jugadores: [
        { 
        nombre: "RONWEN WILLIAMS", 
        posicion: "PORTERO", 
        imagen: "https://imgs.search.brave.com/hF7va-HKbTKUrkZIGdEzVmZJKTiBde0Rj3e9YRd13VY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/NDYxMzI0Ni9mci9w/aG90by9zdW5kb3du/cy1zb3V0aC1hZnJp/Y2FuLWdvYWxrZWVw/ZXItcm9ud2VuLXdp/bGxpYW1zLXNwZWFr/cy10by1oaXMtdGVh/bW1hdGVzLWR1cmlu/Zy10aGUtY2FmLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1J/dEYxTm0teWlZamlV/Z2gzYmQ0Y3RvMXZi/YThlWE5oa1BuOXFn/RXY3SmpjPQ",
        },
        { 
        nombre: "LYLE FOSTER", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/vAfzFJCBnGjBTIMj2FSEG4Te6le7RHh_j5lGb3slofk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lMC4z/NjVkbS5jb20vMjMv/MTEvNzY4eDQzMi9z/a3lzcG9ydHMtbHls/ZS1mb3N0ZXItYnVy/bmxleV82MzU0MTIz/LmpwZz8yMDIzMTEw/OTE1MzA0OQ" 
      },
      { 
        nombre: "TEBOHO MOKOENA", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/kU2ucPVuiDzUxcAf8HuNmlJJLjUxtCUTK4N-Q5dd7Ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/MDY2MjgyNi9waG90/by9vcmxhbmRvLWZs/b3JpZGEtdGVib2hv/LW1va29lbmEtb2Yt/bWFtZWxvZGktc3Vu/ZG93bnMtZmMtbG9v/a3MtdG93YXJkcy10/aGUtc2lkZWxpbmUt/ZHVyaW5nLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UVZuVkx1akU4RjVi/amdqYlpYMk0tOXRo/WXdvMi1HX2FoNTFD/LV9jS1NzMD0" 
      },
      { 
        nombre: "TYLON SMITH", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/a0SPlW-jL0RVoImEJEiseFIZF7IVG9L1m0SnPiLu6Qg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS9zdGFuZGFy/ZC84MTgvY3BzcHJv/ZHBiL2MxZDQvbGl2/ZS83NGY0N2I5MC1j/Zjc4LTExZjAtODM5/MC1jZjhjMThmMzU1/ZTAuanBn" 
      },
      { 
        nombre: "THALENTE MBATHA", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/rIxf9Z2WX23tU-pJkIw439Ja_yO9MSqORIP-IYTtyKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXJw/b3N0LmNvLnphL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L1RoYWxlbnRlLU1i/YXRoYS1pbi10aGUt/U293ZXRvLWRlcmJ5/LTEuanBn" 
      },
      { 
        nombre: "EVIDENCE MAKGOPA", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/BiAOn3YYVZrXK_JglAZZWd9Otw4gnh0QPc1yeNEi64c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MDUxMzQ5Ny9waG90/by9zYWl0YW1hLWph/cGFuLWV2aWRlbmNl/LW1ha2dvcGEtb2Yt/dGVhbS1zb3V0aC1h/ZnJpY2EtY2VsZWJy/YXRlcy1hZnRlci1z/Y29yaW5nLXRoZWly/LXNpZGVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz10aWgt/M1F6bGVOek82N1JX/aFg3a2FLS1NpeUVV/eGlQOFdWVHNCbDI4/VjY0PQ" 
      }
    ]
  };

  return (
    <div className="container-fluid px-0 mexico-container">
      {/* Header con bandera de fondo */}
      <div className="position-relative">
        <div className="bandera-header">
          {/* Fondo con bandera y overlay oscuro */}
          <div 
            className="bandera-fondo"
            style={{
              backgroundImage: `url(${paisSeleccionado.bandera})`
            }}
          />
          
          {/* Overlay gradiente para texto */}
          <div className="header-overlay" />
          
          {/* Botón de regreso */}
          <button 
            className="btn-regresar"
            onClick={() => navigate('/paises')}
          >
            <span className="regresar-icono">←</span>
          </button>

          {/* Solo el nombre del país sobre la bandera */}
          <div className="pais-titulo-container">
            <div className="text-white">
              <h1 className="pais-titulo">
                {paisSeleccionado.nombre}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Botón AR flotante con icono de cámara fotográfica */}
        <button 
          className="btn-ar-flotante"
          onClick={() => navigate('/ar')}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="white"
            className="camara-icono"
          >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
          </svg>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="container mt-4 px-3">
        {/* Sección de estadios - AHORA CON 2 TARJETAS */}
        <div className="mb-5">
          <h2 className="seccion-titulo">
            Estadios
          </h2>
          <div className="row g-3">
            {paisSeleccionado.estadios.map((estadio, index) => (
              <div key={index} className="col-12">
                <div className="estadio-container">
                  <div className="estadio-imagen-container">
                    <img 
                      src={estadio.imagen} 
                      alt={estadio.nombre}
                      className="estadio-imagen"
                    />
                    
                    <div className="estadio-overlay">
                      <h3 className="estadio-nombre">
                        {estadio.nombre}
                      </h3>
                      <p className="estadio-ciudad mb-1">
                        {estadio.ciudad}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de partidos */}
        <div className="mb-5">
          <h2 className="seccion-titulo">
            Partidos Confirmados
          </h2>
          <div className="partidos-card">
            <div className="card-body p-0">
              {paisSeleccionado.partidos.map((partido, index) => (
                <div 
                  key={index} 
                  className={`partido-item ${index < paisSeleccionado.partidos.length - 1 ? 'partido-border' : ''}`}
                >
                  <div className="partido-info">
                    <div className="rival-bandera-container">
                      <img 
                        src={partido.rival.bandera} 
                        alt={`Bandera de ${partido.rival.nombre}`}
                        className="rival-bandera"
                      />
                    </div>
                    <div className="partido-detalle">
                      <h4 className="rival-nombre">
                        vs {partido.rival.nombre}
                      </h4>
                      <p className="partido-fecha">{partido.fecha}</p>
                    </div>
                  </div>
                  <span className="partido-tipo-badge">
                    {partido.tipo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de jugadores */}
        <div className="mb-5">
          <h2 className="seccion-titulo">
            Jugadores Destacados
          </h2>
          <div className="row g-3">
            {paisSeleccionado.jugadores.map((jugador, index) => (
              <div key={index} className="col-6">
                <div className="jugador-card">
                  <div className="jugador-imagen-container">
                    <img 
                      src={jugador.imagen} 
                      alt={jugador.nombre}
                      className="jugador-imagen"
                    />
                    <div className="jugador-overlay" />
                  </div>
                  
                  <div className="jugador-info">
                    <h5 className="jugador-nombre">
                      {jugador.nombre}
                    </h5>
                    <p className="jugador-posicion">
                      {jugador.posicion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sudafrica;
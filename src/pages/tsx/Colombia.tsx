import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Colombia() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "COLOMBIA",
    bandera: "https://flagcdn.com/w320/co.png",
    estadios: [
      {
        nombre: "ESTADIO AZTECA",
        ciudad: "CIUDAD DE MÉXICO",
        imagen: "https://images.adsttc.com/media/images/62bb/c742/3e4b/3151/d100/0005/slideshow/ConjuntoEstadioAzteca6.jpg?1656473405",
      },
      {
        nombre: "ESTADIO  AKRON",
        ciudad: "GUADALAJARA, JALISCO",
        imagen: "https://imgs.search.brave.com/Q2pyYRtuJbGLO9bkN-HmUUkBLS32Nea0eo6SSHRoT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjg5/NDg5NzA2L3Bob3Rv/L3phcG9wYW4tbWV4/aWNvLWFlcmlhbC12/aWV3LW9mLXRoZS1j/aGl2YXMtc3RhZGl1/bS1wcmlvci10aGUt/ZmluYWwtc2Vjb25k/LWxlZy1tYXRjaC1i/ZXR3ZWVuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IOWlN/LURUWG1FUlo5YmJz/aXJIVXU2UnRGUmhU/Nm9qTFItRnNwS3du/WlJvPQ",
      }
    ],
    partidos: [
      {
        fecha: "17 JUNIO 2026",
        rival: { nombre: "UZBEKISTAN", bandera: "https://flagcdn.com/w320/uz.png" },
        tipo: "FASE DE GRUPOS"
      },
      {
        fecha: "23 JUNIO 2026",
        rival: { nombre: "REPECHAJE INTERCONTINENTAL", bandera: "https://flagcdn.com/w320/eu.png" },
        tipo: "FASE DE GRUPOS"
      },
    ],
    jugadores: [
      { 
        nombre: "LUIS DÍAZ", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/ufR0hbFH4C1nuCjmtRTQrL4-j7APJ5ijPhmOqR534_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/MjY1NTQ3MS9waG90/by9tdW5pY2gtZ2Vy/bWFueS1sdWlzLWRp/YXotb2YtYmF5ZXJu/LW11bmljaC1jZWxl/YnJhdGVzLWFmdGVy/LXRlYW1tYXRlLW5p/Y29sYXMtamFja3Nv/bi1zY29yZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXNw/dThfaWR2RXNGdktQ/UmpURm82S1JwZnRX/Qkw3cS1FMDVjM1lj/eXF1Yzg9" 
      },
      { 
        nombre: "JAMES RODRÍGUEZ", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/jsXbG3LoT4oqJZuWe6WiESu6HXFTv-aIuqU5gLUeqzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MTIyNjU0Ni9lcy9m/b3RvL2JhcnJhbnF1/aWxsYS1jb2xvbWJp/YS1qYW1lcy1yb2Ry/aWd1ZXotb2YtY29s/b21iaWEtc2luZ3Mt/dGhlLW5hdGlvbmFs/LWFudGhlbS1wcmlv/ci10by10aGUtc291/dGguanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPURHR1NmVU9O/Nk5zZ2pGQTQ5NkhQ/aDc3b1poNUc4SHRO/Rlp3cjFqMUY5blE9" 
      },
      { 
        nombre: "RICHARD RÍOS", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/f7AxB5DOmI0mv8xq-dwsFytbk8tLi1AMQWAoNQEFtlU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/MTY4NTEzNy9lcy9m/b3RvL2xpc2Jvbi1w/b3J0dWdhbC1yaWNo/YXJkLXJpb3Mtb2Yt/YmVuZmljYS1sb29r/cy1vbi1wcmlvci10/by1hLXVlZmEtY2hh/bXBpb25zLWxlYWd1/ZS1wbGF5LW9mZi0y/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTJvOFptY0Ry/blVyWC1WVEV2ZWlJ/LWJlSW9qRlFIR09R/OE11enpHZk0xcHc9" 
      },
      { 
        nombre: "DÁVINSON SÁNCHEZ", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/o3KCXpqNKwfl1loXQxscUq4ALbtcv6GLSSOrrzDntYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE4/MzU1NzE2My9mci9w/aG90by9pc3RhbmJ1/bC10dXJrZXktZGF2/aW5zb24tc2FuY2hl/ei1vZi1nYWxhdGFz/YXJheS1jZWxlYnJh/dGVzLWFmdGVyLXRo/ZS10ZWFtcy12aWN0/b3J5LWluLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WEZLR0ZCVzJwdGRN/UmFDOTU2ZWR2eVcx/SndvcVk3YlZkellV/Vk0yeWRqOD0" 
      },
      { 
        nombre: "JOHN LUCUMÍ", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/y6LQmg9OEa0wg1ED6bY_Ynctir8_f7CGIEaXCLCXUMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/NTg0NTY5Ni9waG90/by9taWxhbi1pdGFs/eS1qaG9uLWx1Y3Vt/aS1vZi1ib2xvZ25h/LWZjLWxvb2tzLW9u/LWR1cmluZy10aGUt/c2VyaWUtYS1tYXRj/aC1iZXR3ZWVuLWFj/LW1pbGFuLWFuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/YV9PaTRzYWJDdUZk/TVBmeVJVLUVaeGpR/cUE1eG84NFVvVnpN/dXlsSVJKOD0" 
      },
      { 
        nombre: "JOHN CÓRDOBA", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/l_FcgnQ-IoUBxI3VBmz5c_h_dHh2_kOAeJ9DWBV7RKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ5/ODY5NTQwL2VzL2Zv/dG8vbG9uZG9uLWVu/Z2xhbmQtam9obi1j/b3Jkb2JhLW9mLWtv/ZWxuLWxvb2tzLW9u/LWR1cmluZy10aGUt/dWVmYS1ldXJvcGEt/bGVhZ3VlLWdyb3Vw/LWgtbWF0Y2guanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUQ2/VU4teFZGYU5mOEFB/MHU5LWtmX1NlaDBG/RzU5ODFKNXpFckxh/dnNQYXM9" 
      }
    ]
  };

   const handleARClick = () => {
  console.log('Guardando país:', paisSeleccionado.nombre);
  localStorage.setItem('pais_actual_ar', paisSeleccionado.nombre);
  console.log('LocalStorage después de guardar:', localStorage.getItem('pais_actual_ar'));
  navigate('/ar');
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
          onClick={handleARClick}
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
        {/* Sección de estadios en México */}
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

export default Colombia;
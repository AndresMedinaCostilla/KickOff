import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Espana() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "ESPAÑA",
    bandera: "https://flagcdn.com/w320/es.png",
    estadios: [
      {
        nombre: "ESTADIO AKRON",
        ciudad: "GUADALAJARA, JALISCO",
        imagen: "https://imgs.search.brave.com/Q2pyYRtuJbGLO9bkN-HmUUkBLS32Nea0eo6SSHRoT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjg5/NDg5NzA2L3Bob3Rv/L3phcG9wYW4tbWV4/aWNvLWFlcmlhbC12/aWV3LW9mLXRoZS1j/aGl2YXMtc3RhZGl1/bS1wcmlvci10aGUt/ZmluYWwtc2Vjb25k/LWxlZy1tYXRjaC1i/ZXR3ZWVuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IOWlN/LURUWG1FUlo5YmJz/aXJIVXU2UnRGUmhU/Nm9qTFItRnNwS3du/WlJvPQ",
      }
    ],
    partidos: [
      {
        fecha: "26 JUNIO 2026",
        rival: { nombre: "URUGUAY", bandera: "https://flagcdn.com/w320/uy.png" },
        tipo: "FASE DE GRUPOS"
      }
    ],
    jugadores: [
      { 
        nombre: "BORJA IGLESIAS", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/OWVFZ62lS3sgiZbdOcyx74_Ple_UaaNf6llr6TV0wRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ka2xh/c3NnaC5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDEv/Qm9yamEtSWdsZXNp/YXMtc2NhbGVkLndl/YnA",
      },
      { 
        nombre: "MARCOS LLORENTE", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/h3Pfg29AfE35NMZL36wfm3wemEkQ_GDKpb9vvaHa0rw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMt/aW1hZ2VzLmFjYy5p/bmRhem4uY29tL2Rp/L2xpYnJhcnkvREFa/Tl9OZXdzLzgzLzM3/L21hcmNvcy1sbG9y/ZW50ZS1hdGxldGlj/by1kZS1tYWRyaWQt/bGFsaWdhX2F2dzVq/emkxOG80cjE2cmt0/eGRlMmdvZ28uanBn/P3Q9LTcwOTIyODA1/MSZxdWFsaXR5PTgw/Jnc9NzUwJmg9NDIy" 
      },
      { 
        nombre: "MIKEL OYARZABAL", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/fz4GkBZKUL5dCii9vX3wedGrucjJQb5H-fnXaYigf_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vYmpl/dG9zLXhsay5lc3Rh/dGljb3MtbWFyY2Eu/Y29tL3VwbG9hZHMv/MjAyNS8xMS8yNi82/OTI3MWFjODA1N2Jm/LmpwZWc" 
      },
      { 
        nombre: "DANI OLMO", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/BJwn4jrUvthgCyDVSzGPvnRLQ3F8YEanqY9T1MSKOEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/MTM0MDkzMS9waG90/by9sYXMtcGFsbWFz/LXNwYWluLWRhbmkt/b2xtby1vZi1mYy1i/YXJjZWxvbmEtY2Vs/ZWJyYXRlcy1zY29y/aW5nLWhpcy10ZWFt/cy1maXJzdC1nb2Fs/LWR1cmluZy10aGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTRCZmVUVVY3RUMx/cE5DRzVmcGpOVDdW/cmM2eHdwMHZkV1pF/cmd0Yzk0MVU9" 
      },
      { 
        nombre: "FABIÁN RUIZ", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/0Sm0NQVA3bXshTMs8H3lRBKIEvWw6B5-Rvc_y5G_5-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy50cmlidW5h/LmNvbS9pbWFnZS9m/YjdkNzg4Yi03NTE0/LTQ4Y2QtOGMwNy1i/ZjUzZjI0OWM0ZDE_/d2lkdGg9MTkyMCZx/dWFsaXR5PTcw" 
      },
      { 
        nombre: "AYMERIC LAPORTE", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/0snPSqktNuMEI6xTAhCFC1T1iAkWFheAvdMTBbW_7qE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NjI3MTUyNC9waG90/by9yaXlhZGgtc2F1/ZGktYXJhYmlhLWF5/bWVyaWMtbGFwb3J0/ZS1vZi1hbC1uYXNz/ci1sb29rcy1vbi1i/ZWZvcmUtdGhlLXNh/dWRpLXByby1sZWFn/dWUtbWF0Y2guanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXVk/Q0d1Rm1pQ2NWOU5w/XzlVaFFFSUdpdmxC/N1VORHZUbGk3VG5o/WTVlRWs9" 
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

        {/* Sección de partidos en México */}
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

export default Espana;
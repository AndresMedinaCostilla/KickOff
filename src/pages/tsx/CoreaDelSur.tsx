import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function CoreaDelSur() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "COREA DEL SUR",
    bandera: "https://flagcdn.com/w320/kr.png",
    estadios: [
      {
        nombre: "ESTADIO  AKRON",
        ciudad: "GUADALAJARA, JALISCO",
        imagen: "https://imgs.search.brave.com/Q2pyYRtuJbGLO9bkN-HmUUkBLS32Nea0eo6SSHRoT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjg5/NDg5NzA2L3Bob3Rv/L3phcG9wYW4tbWV4/aWNvLWFlcmlhbC12/aWV3LW9mLXRoZS1j/aGl2YXMtc3RhZGl1/bS1wcmlvci10aGUt/ZmluYWwtc2Vjb25k/LWxlZy1tYXRjaC1i/ZXR3ZWVuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IOWlN/LURUWG1FUlo5YmJz/aXJIVXU2UnRGUmhU/Nm9qTFItRnNwS3du/WlJvPQ",
      },
      {
        nombre: "ESTADIO BBVA",
        ciudad: "GUADALUPE, NUEVO LEÓN",
        imagen: "https://imgs.search.brave.com/VRuGTJyBjvTwlN8C6zbhrfFwC_z2MkDSBlciJQ9erEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U1L0VzdGFkaW9f/QkJWQV9CYW5jb21l/cl8oMSkuanBn",
      }
    ],
    partidos: [
      {
        fecha: "18 JUNIO 2026",
        rival: { nombre: "MÉXICO", bandera: "https://flagcdn.com/w320/mx.png" },
        tipo: "FASE DE GRUPOS"
      },
      {
        fecha: "24 JUNIO 2026",
        rival: { nombre: "COREA DEL SUR", bandera: "https://flagcdn.com/w320/za.png" },
        tipo: "FASE DE GRUPOS"
      },
      {
        fecha: "11 JUNIO 2026",
        rival: { nombre: "GANADOR UEFA", bandera: "https://flagcdn.com/w320/eu.png" },
        tipo: "FASE DE GRUPOS"
      }
    ],
    jugadores: [
      { 
        nombre: "Kim Seung-Gyu", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/c7U3wBLwRDgp3ArlBuGWqsD7MLWOvFQmMlfsbAzsvGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NDMyODI1NC9kZS9m/b3RvL21pbHRvbi1r/ZXluZXMtZW5nbGFu/ZC1oZXVuZy1taW4t/c29uLW9mLXRvdHRl/bmhhbS1ob3RzcHVy/LWR1cmluZy10aGUt/cHJlLXNlYXNvbi1m/cmllbmRseS1tYXRj/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NkU1UUN0eEtr/SjhOVS1KV052cHND/eUNBNVhQWXljLWV6/V1FSUHBOenNoWT0" 
      },
      { 
        nombre: "KIM MIN-JAE", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/GwjJ-rS5sQ0w9m1H1WOQokvOLZ--ItMXAfRaEb_NN6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MDQ1MDg4OS9waG90/by9taW4tamFlLWtp/bS1jZW50cmUtYmFj/ay1vZi1iYXllcm4t/bXVuaWNoLWFuZC1r/b3JlYS1zb3V0aC1w/cmlvci10aGUtdWVm/YS1jaGFtcGlvbnMt/bGVhZ3VlLXNlbWku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhla25MN0p3Znhp/WDZtYmFFTDRoYmlX/a01VcUZ0eGVHNkYz/Y01LcEZ3dkk9" 
      },
      { 
        nombre: "LEE KANG-IN", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/Um6AUDMS4RW7-qp8Vmb5BdUrwfKt0_Q6sD_UtJKzQzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjA2/MjQ2NTQ1NC9waG90/by9zYW4tc2ViYXN0/aWFuLXNwYWluLWth/bmctaW4tbGVlLW9m/LXBhcmlzLXNhaW50/LWdlcm1haW4tbG9v/a3Mtb24tZHVyaW5n/LXRoZS11ZWZhLWNo/YW1waW9ucy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9d2ph/aVdmWmoyTVhWT3F3/TzdrUFVOaGQtRDdt/QXdxOWpmR3VLWGJG/Z3Y4OD0" 
      },
      { 
        nombre: "HWANG HEE-CHAN", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/REBf1bjlFADtDSGeZTFq2yrvdxBBI2_EKdiw1yQY6r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/MzQ1MDM2Ny9waG90/by93b2x2ZXJoYW1w/dG9uLWVuZ2xhbmQt/aHdhbmctaGVlLWNo/YW4tb2Ytd29sdmVy/aGFtcHRvbi13YW5k/ZXJlcnMtYzFnLWR1/cmluZy10aGUtcHJl/bWllci1sZWFndWUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUVfMUZxRXhYd09Z/WDhtWGRnN3NITG1t/UVJSeUVSN04xTllM/aU1QZlZtaXc9" 
      },
      { 
        nombre: "JIN-GYU KIM", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/191208_%EB%B6%80%EC%82%B0%EC%95%84%EC%9D%B4%ED%8C%8C%ED%81%AC_%EC%8A%B9%EA%B0%95PO%2C_%EA%B9%80%EC%A7%84%EA%B7%9C_3.jpg/250px-191208_%EB%B6%80%EC%82%B0%EC%95%84%EC%9D%B4%ED%8C%8C%ED%81%AC_%EC%8A%B9%EA%B0%95PO%2C_%EA%B9%80%EC%A7%84%EA%B7%9C_3.jpg" 
      },
      { 
        nombre: "CHO GUE-SUNG", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/7Zt3-4SwKCAwdc4H05dgrqMUPDjPnFIKxWeNaiQCWgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/Mi8xMS9rb3JlYW4t/Zm9vdGJhbGwtcGxh/eWVyLTktLmpwZz93/PTE2MDA" 
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

export default CoreaDelSur;
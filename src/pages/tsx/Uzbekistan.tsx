import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Uzbekistan() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "UZBEKISTÁN",
    bandera: "https://flagcdn.com/w320/uz.png",
    estadios: [
      {
        nombre: "ESTADIO AZTECA",
        ciudad: "CIUDAD DE MÉXICO",
        imagen: "https://images.adsttc.com/media/images/62bb/c742/3e4b/3151/d100/0005/slideshow/ConjuntoEstadioAzteca6.jpg?1656473405",
      }
    ],
    partidos: [
      {
        fecha: "17 JUNIO 2026",
        rival: { nombre: "COLOMBIA", bandera: "https://flagcdn.com/w320/co.png" },
        tipo: "FASE DE GRUPOS"
      },
    ],
    jugadores: [
      { 
        nombre: "ELDOR SHOMURODOV", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/FuoY2pk_UPrFXRioNddTssoO85qrIjUP4jkuvBd0CDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc4/OTIzMjE5Mi9waG90/by90dXJpbi1pdGFs/eS1lbGRvci1zaG9t/dXJvZG92LW9mLWNh/Z2xpYXJpLWNhbGNp/by1sb29rcy1vbi1w/cmlvci10by10aGUt/c2VyaWUtYS10aW0t/bWF0Y2guanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWh5WmFY/clpGUmtLU0RVVEVq/XzZpSGFIVU5PRGVr/ME1wRmV2V2c3TDlM/QVE9",
      },
      { 
        nombre: "IGOR SERGEEV",
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/-2CUTJ8_skWl0iTR-7K0H3Az6Y2TpsJRjvPRTEomQKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hd3Np/bWFnZXMuZGV0aWsu/bmV0LmlkL2NvbW11/bml0eS9tZWRpYS92/aXN1YWwvMjAyNi8w/MS8wMi9zdHJpa2Vy/LXRpbW5hcy11emJl/a2lzdGFuLWlnb3It/c2VyZ2Vldi0xNzY3/MzQxOTk3Njc1XzE2/OS5qcGVnP3c9NzAw/JnE9OTA" 
      },
      { 
        nombre: "ODILJON HAMROBEKOV", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/diZaZ-96URolgKPuZ8APGFZV0eFGq2CVOdGuyUXHBa8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MzQ1MDE0L3Bob3Rv/L2Z1amFpcmFoLXVu/aXRlZC1hcmFiLWVt/aXJhdGVzLW9kaWxq/b24taGFtcm9iZWtv/di1vZi11emJla2lz/dGFuLWR1cmluZy10/aGUtZ3JvdXAtYy1m/aWZhLXUtMTcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUpT/bklkWXAyQlN0cFp1/QlNSTXB2MWs3b3pJ/cFhGYTFUc3RmTFd0/OUxoTk09" 
      },
      { 
        nombre: "RUSTAMJON ASHURMATOV", 
        posicion: "DEFENSA", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Rustamjon_Ashurmatov_%28cropped%29.jpg" 
      },
      { 
        nombre: "AZIZBEK TURGUNBOEV", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/sP3xn7VGKE6ILQ4hCoDB-94AVSyJyb4Vdn4i3UVV9hs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk2/NDY4MTQxNC9waG90/by9hbC13YWtyYWgt/cWF0YXItYXppemJl/ay10dXJndW5ib2V2/LW9mLXV6YmVraXN0/YW4tY2VsZWJyYXRl/cy1hZnRlci1zY29y/aW5nLWhpcy1zaWRl/cy1maXJzdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bUxv/eUc2cjlzZkkxeWxR/LU52R1BuWEVMbUZK/VzNLcUJXRkxHRUlV/R3pHRT0" 
      },
      { 
        nombre: "FARRUKH SAYFIEV",
        posicion: "DEFENSA", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/03/Iran_v_Uzbekistan_2-2%2C_25_March_2025%2C_Azadi_Stadium%2C_World_Cup_2026_qualifier_32_%28cropped%29.jpg" 
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

export default Uzbekistan;
import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Tunez() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "TÚNEZ",
    bandera: "https://flagcdn.com/w320/tn.png",
    estadios: [
      {
       nombre: "ESTADIO BBVA",
        ciudad: "GUADALUPE, NUEVO LEÓN",
        imagen: "https://imgs.search.brave.com/VRuGTJyBjvTwlN8C6zbhrfFwC_z2MkDSBlciJQ9erEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U1L0VzdGFkaW9f/QkJWQV9CYW5jb21l/cl8oMSkuanBn",
        }
    ],
    partidos: [
      {
        fecha: "14 JUNIO 2026",
        rival: { nombre: "GANADOR UEFA", bandera: "https://flagcdn.com/w320/eu.png" },
        tipo: "FASE DE GRUPOS"
      },
      {
        fecha: "20 JUNIO 2026",
        rival: { nombre: "JAPON", bandera: "https://flagcdn.com/w320/jp.png" },
        tipo: "FASE DE GRUPOS"
      },
    ],
    jugadores: [
      { 
        nombre: "ELIAS SAAD", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/nsutbFWNxQzfxyQ_HvIVVHm2XnX5t6bh6ZIX5HRcYbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZWJjZG4uZGUv/Y2x1Yi0xNDUxL1Bs/YXllclBob3RvXzI5/MTUwLmpwZz92PTMm/d2lkdGg9MTIwMCZm/b3JtYXQ9d2VicCZo/ZWlnaHQ9MTIwMCZt/b2RlPWNyb3A",
      },
      { 
        nombre: "ELYES SKHIRI", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/Cv9FKL47weLmz9BckIrOuSJAnYs7JIYFLXrsW_fjAA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90dW5p/c2llLWZvb3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzExL0VsbHllc1Nr/aGlyaTktMzkweDIy/MC5wbmc" 
      },
      { 
        nombre: "NOUREDDINE FARHATI", 
        posicion: "PORTERO", 
        imagen: "https://imgs.search.brave.com/-OqhAzGk-cuo-LJmlNhtR1PbZKxYleAAB1AN3Xlqeh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YS50cmFuc2Zlcm1h/cmt0LnRlY2hub2xv/Z3kvcG9ydHJhaXQv/YmlnLzY3OTQ2My0x/NzIzNDg2NDI0Lmpw/ZWc_bG09MQ" 
      },
      { 
        nombre: "MOHAMED ALI BEN ROMDHANE", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/lny25LSvHijSdohjscbEika_3KuIrNVkh3Z7ZSKhCNI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/MTk0OTEyOS9waG90/by9lYXN0LXJ1dGhl/cmZvcmQtbmV3LWpl/cnNleS1tb2hhbWVk/LWFsaS1iZW4tcm9t/ZGhhbmUtb2YtYWwt/YWhseS1mYy1sb29r/cy1vbi1wcmlvci10/by1raWNrLW9mZi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OVpfYVlNY2I2MVd2/RWJmZUM0ZkczdnFJ/d0lrYzliaXRzWndQ/eUtsWFRMST0" 
      },
      { 
        nombre: "NAÏM SLITI", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/YvG23okiI_-F0CyN4WfM1Nc73rbqDJpUe2vTlJHjla4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MjcxNjcwNy9waG90/by9kb2hhLXFhdGFy/LW5haW0tc2xpdGkt/b2YtdHVuaXNpYS1w/b3Nlcy1kdXJpbmct/dGhlLW9mZmljaWFs/LWZpZmEtd29ybGQt/Y3VwLXFhdGFyLTIw/MjItcG9ydHJhaXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVBoUWpVVWxidHZJ/ZDlQbmM3dklqaTQ0/TG5KOGpGcGtCVWtn/R3FXamJiMG89" 
      },
      { 
        nombre: "SEIFEDDINE JAZIRI", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/WT8fBuOpqrk6LV32wygofHyR2tAX5WSQc08QfdQcUXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MjcxNDYyMi9waG90/by9kb2hhLXFhdGFy/LXNlaWZlZGRpbmUt/amF6aXJpLW9mLXR1/bmlzaWEtcG9zZXMt/ZHVyaW5nLXRoZS1v/ZmZpY2lhbC1maWZh/LXdvcmxkLWN1cC1x/YXRhci0yMDIyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Z/SXFjSG9GcnY1TkFf/Zk9QZ3BWQ09NUGdy/ejc0Mzd1WmxKMzF5/NXBQWmJ3PQ" 
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

export default Tunez;
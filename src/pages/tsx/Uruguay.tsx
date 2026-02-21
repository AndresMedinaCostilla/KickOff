import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Uruguay() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "URUGUAY",
    bandera: "https://flagcdn.com/w320/uy.png",
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
        rival: { nombre: "ESPAÑA", bandera: "https://flagcdn.com/w320/es.png" },
        tipo: "FASE DE GRUPOS"
      }
    ],
    jugadores: [
      { 
        nombre: "EMILIANO MARTINEZ", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/wW1HjHIDZvkOEbjxoXY1LXoEcshLBJU6aMUZO12WU2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTY5/MzYxMDQucG5n",
      },
      { 
        nombre: "JOSE LUIS RODRIGUEZ", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/0I6qNzLIQ_WOApwPT2XoiBC5bEKl_cEZJv1hSjbOA2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnV0Ym9sdG90YWwu/Y29tLm14L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA5L3F1/ZS10YW4tYnVlbm8t/ZXMtam9zZS1sdWlz/LXB1bWl0YS1yb2Ry/aWd1ZXoteS1wb3It/cXVlLWxvLXF1aWVy/ZW4tZW4tbGEtbGln/YS1teC5qcGc" 
      },
      { 
        nombre: "FACUNDO TORRES", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/XRrncdii4o0uaJPx6Hx8e9yebySPVibK5rfIxqVJIH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcy1p/bWFnZXMuYm9sYXZp/cC5jb20vbmV3cy9p/bWFnZT9zcmM9aHR0/cHM6Ly9pbWFnZXMu/Ym9sYXZpcC5jb20v/d2VicC92Y2EvZnVs/bC9WQ0FfMjAyNDEy/MDJfVkNBXzE0OTE5/M19mYWN1bmRvLXRv/cnJlcy1pbWFnbzct/c2NhbGVkLWUxNzMz/MTcyNTkyODQ4Lndl/YnAmd2lkdGg9NDcw/JmhlaWdodD0zNTI" 
      },
      { 
        nombre: "MANUEL UGARTE", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/q9cF15AV98TTv8ANpf7dacfkKMqJU_DqIj4Rjok4y88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MTU1ODUwNy9waG90/by9jaGFybG90dGUt/bm9ydGgtY2Fyb2xp/bmEtbWFudWVsLXVn/YXJ0ZS1vZi11cnVn/dWF5LWxpbmVzLXVw/LXByaW9yLXRvLXRo/ZS1jb25tZWJvbC1j/b3BhLWFtZXJpY2Eu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUlhZ1JXNXBBUGho/UTdGWkRmamNvQ2lF/THVmWmdxbF91U1lH/aVc3YW9ZTUk9" 
      },
      { 
        nombre: "LUCIANO RODRIGUEZ", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/5rH8ynbRhKuKT97xsaqeG31KU0q7VhJ56vICAfiMhvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcy1p/bWFnZXMuYm9sYXZp/cC5jb20vbmV3cy9p/bWFnZT9zcmM9aHR0/cHM6Ly9pbWFnZXMu/bGFwYWdpbmFtaWxs/b25hcmlhLmNvbS93/ZWJwL2Z1bGwvTFBN/XzIwMjQwNzE3X0xQ/TV84Mjc5MF9HU25X/Q0QwWDBBQUMtOC0t/ZTE3MjEyMjE0Mzg4/MDIud2VicCZ3aWR0/aD00NzAmaGVpZ2h0/PTM1Mg" 
      },
      { 
        nombre: "JOSÉ MARÍA GIMÉNEZ", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/_7sDRgvWsNxypcfmS12uJXUz1F555fmK8cm4xunrqUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE0/ODI2MjIzMC9lcy9m/b3RvL21hZHJpZC1z/cGFpbi1qb3NlLW1h/cmlhLWdpbWVuZXot/b2YtYXRsZXRpY28t/ZGUtbWFkcmlkLWxv/b2tzLW9uLWR1cmlu/Zy10aGUtdWVmYS1j/aGFtcGlvbnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTZk/Qlg5SnNidXhvR3Uz/ajJzd2ZpRDdwTGZ0/RXp0b1ZjZ3gzWEdZ/Rk40Q2M9" 
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

export default Uruguay;
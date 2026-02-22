import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Japon() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "JAPÓN",
    bandera: "https://flagcdn.com/w320/jp.png",
    estadios: [
      {
        nombre: "ESTADIO BBVA",
        ciudad: "GUADALUPE, NUEVO LEÓN",
        imagen: "https://imgs.search.brave.com/VRuGTJyBjvTwlN8C6zbhrfFwC_z2MkDSBlciJQ9erEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2U1L0VzdGFkaW9f/QkJWQV9CYW5jb21l/cl8oMSkuanBn",
      },
    ],
    partidos: [
      {
        fecha: "20 JUNIO 2026",
        rival: { nombre: "TÚNEZ", bandera: "https://flagcdn.com/w320/tn.png" },
        tipo: "FASE DE GRUPOS"
      },
    ],
    jugadores: [
      { 
        nombre: "TAKEFUSA KUBO", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/ReXEcY9WVaFIJv1KA8n08xsjVK6V2eyuMlDTJygqluU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MjY3MTc2MC9waG90/by9tYWxsb3JjYS1z/cGFpbi10YWtlZnVz/YS1rdWJvLW9mLXJl/YWwtc29jaWVkYWQt/bG9va3Mtb24tZHVy/aW5nLXRoZS1sYWxp/Z2EtbWF0Y2gtYmV0/d2Vlbi1yY2QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUlx/Y3Zaa2dDeHRTY2I3/dDJyYlNXNDktMUZM/QkpIMFJ1RWZDeUF4/TDlsWGM9",
      },
      { 
        nombre: "TAKUMI MINAMINO", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/DAWLxG4ku4hdC2pJeOg-3akibW0S5nPIGaUdhFrqzCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYz/NzczOTUzOC9lcy9m/b3RvL21vbmFjby1t/b25hY28tdGFrdW1p/LW1pbmFtaW5vLW9m/LWFzLW1vbmFjby1z/bWlsZXMtZm9sbG93/aW5nLXRoZS1maW5h/bC13aGlzdGxlLW9m/LXRoZS1saWd1ZS0x/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1way05amctbWpZ/a05xbktrQmhDY2Vm/LS01dVJwbU1ZdTFM/dFY0azU4bnU0PQ" 
      },
      { 
        nombre: "AO TANAKA", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/8V9Ve27La_cPAtWW4KtoWhX6s_5ZNWsi05qieagsWDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MzYwODI3Mi9waG90/by9jYXJkaWZmLXdh/bGVzLWFvLXRhbmFr/YS1vZi1sZWVkcy11/bml0ZWQtY2VsZWJy/YXRlcy12aWN0b3J5/LWFmdGVyLWRlZmVh/dGluZy1jYXJkaWZm/LWNpdHkuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUREUXBz/XzhVb09kSmxJUmhT/dlFwSEM3M0dMTUly/cVVIOGJGU1Z3X21x/SE09" 
      },
      { 
        nombre: "WATARU ENDO", 
        posicion: "MEDIOCAMPISTA", 
        imagen: "https://imgs.search.brave.com/z1X_1MafLkQJXaykk-6Epf9rzBR4w3TlKpfJ__fmotE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYWNr/ZW5kLmxpdmVycG9v/bGZjLmNvbS9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy9s/Zy9wdWJsaWMvMjAy/NS0wNy93YXRhcnUt/ZW5kby1saXZlcnBv/b2wtZmMtMS0zMDA3/MjVfNDU1YTdmNTFj/NjNlM2QxZDc0MzA3/YjdiY2MyOWQ4Y2Iu/d2VicD9pdG9rPTNG/OHhYR09yJndpZHRo/PTE2ODA" 
      },
      { 
        nombre: "DAIZEN MAEDA", 
        posicion: "DELANTERO", 
        imagen: "https://imgs.search.brave.com/IJW9lvZJSILK8gFkr-YJzQMWMdyf7WB6mSkA5Kyf3jQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlaG90c3B1cndh/eS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTIvRGFp/emVuLU1hZWRhLTIw/MjUuanBn" 
      },
      { 
        nombre: "SHOGO TANIGUCHI", 
        posicion: "DEFENSA", 
        imagen: "https://imgs.search.brave.com/jhXUhBJBJPQRmYMIEu07LHZukhj1DQRGDfy_-JeBA4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MDUxODA0My9lcy9m/b3RvL3NhaXRhbWEt/amFwYW4tc2hvZ28t/dGFuaWd1Y2hpLW9m/LWphcGFuLWFwcGxh/dWRzLWZhbnMtYWZ0/ZXItdGhlLWZpZmEt/d29ybGQtY3VwLWFz/aWFuLTNyZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Rm5a/RWhfa2ZHWXc2eHEw/TXNyV0xzeVdFSFp1/bGE3dFZvTlUyZWdf/YnA5RT0" 
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

export default Japon;
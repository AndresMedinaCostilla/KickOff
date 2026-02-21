import { useNavigate } from 'react-router-dom';
import '../css/Seleccion.css';

function Mexico() {
  const navigate = useNavigate();
  
  const paisSeleccionado = {
    nombre: "MÉXICO",
    bandera: "https://flagcdn.com/w320/mx.png",
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

export default Mexico;
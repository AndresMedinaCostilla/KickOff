import "../css/Home.css";

function Home() {
  return (
    <div className="container mt-4 mt-md-5 home-container">
      {/* Carrusel - CON CLASE home-carousel */}
      <div className="mb-5">
        <div id="carouselFootball" className="carousel slide home-carousel" data-bs-ride="carousel">
          <div className="carousel-indicators home-carousel-indicators">
            <button type="button" data-bs-target="#carouselFootball" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselFootball" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselFootball" data-bs-slide-to="2"></button>
          </div>
          
          <div className="carousel-inner rounded-3 overflow-hidden home-carousel-inner">
            {/* Primer slide */}
            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=85"
                className="d-block w-100"
                alt="Estadio de fútbol"
                style={{
                  height: "50vh",
                  minHeight: "300px",
                  maxHeight: "450px",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
              <div className="carousel-caption p-3 p-md-4 rounded-2 home-carousel-caption" 
                   style={{ 
                     backgroundColor: "rgba(6, 17, 30, 0.85)",
                     bottom: "25%",
                   }}>
                <h4 className="fw-bold mb-2">Paises parrticipantes</h4>
                <p className="d-none d-sm-block mb-0">Descubre los paises participantes en el Mundial 2026</p>
              </div>
            </div>
            
            {/* Segundo slide */}
            <div className="carousel-item">
              <img 
                src="https://i.pinimg.com/736x/1b/f6/8b/1bf68b6ec9226bc9fee8e3a98a37186a.jpg"
                className="d-block w-100"
                alt="Jugadores de fútbol"
                style={{
                  height: "50vh",
                  minHeight: "300px",
                  maxHeight: "450px",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
              <div className="carousel-caption p-3 p-md-4 rounded-2 home-carousel-caption"
                   style={{ 
                     backgroundColor: "rgba(6, 17, 30, 0.85)",
                     bottom: "25%",
                   }}>
                <h4 className="fw-bold mb-2">Funcionalidad AR</h4>
                <p className="d-none d-sm-block mb-0">Prueva la revolucionaria funcion AR para cada pais</p>
              </div>
            </div>
            
            {/* Tercer slide */}
            <div className="carousel-item">
              <img 
                src="https://i.pinimg.com/736x/81/38/bd/8138bddb9571fd73de5bb0fddca92807.jpg"
                className="d-block w-100"
                alt="Partido de fútbol"
                style={{
                  height: "50vh",
                  minHeight: "300px",
                  maxHeight: "450px",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
              <div className="carousel-caption p-3 p-md-4 rounded-2 home-carousel-caption"
                   style={{ 
                     backgroundColor: "rgba(6, 17, 30, 0.85)",
                     bottom: "25%",
                   }}>
                <h4 className="fw-bold mb-2">Datos importantes</h4>
                <p className="d-none d-sm-block mb-0">Navega y descubre informacion detallada de cada pais</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev home-carousel-control-prev" type="button" data-bs-target="#carouselFootball" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next home-carousel-control-next" type="button" data-bs-target="#carouselFootball" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Cards - contenido igual que antes */}
      <div className="row g-5 mb-5 px-2 px-sm-3 home-cards-row">
        {/* Primera Card - Con botón para países */}
        <div className="col-12 col-lg-6">
          <div className="card h-100 shadow-sm border-0 overflow-hidden home-card">
            <div className="row g-0 h-100">
              {/* Desktop: imagen izquierda */}
              <div className="col-lg-6 d-none d-lg-block h-100">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  className="h-100 w-100 home-card-desktop-img"
                  alt="Equipos participantes"
                />
              </div>
              
              {/* Móvil: imagen arriba */}
              <div className="col-12 d-block d-lg-none">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
                  className="w-100 home-card-mobile-img"
                  alt="Equipos participantes"
                />
              </div>
              
              {/* Texto con botón */}
              <div className="col-lg-6 col-12">
                <div className="card-body p-4 p-md-4 d-flex flex-column h-100">
                  <h5 className="card-title fw-bold mb-3">Paises participantes</h5>
                  <p className="card-text mb-4 flex-grow-1">
                    11 paises competiran en mexico durante el mundial 2026. Sigue el camino de cada selección.
                  </p>
                  <div>
                    <a href="/paises" className="btn btn-sm px-4 py-2 fw-medium home-card-btn">
                      Ver Países
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Segunda Card - Sin botón */}
        <div className="col-12 col-lg-6">
          <div className="card h-100 shadow-sm border-0 overflow-hidden home-card">
            <div className="row g-0 h-100">
              {/* Desktop: imagen izquierda */}
              <div className="col-lg-6 d-none d-lg-block h-100">
                <img 
                  src="https://i.pinimg.com/1200x/01/a0/35/01a035796f580d4a15d2a629fb2787f0.jpg"
                  className="h-100 w-100 home-card-desktop-img"
                  alt="Calendario de partidos"
                />
              </div>
              
              {/* Móvil: imagen arriba */}
              <div className="col-12 d-block d-lg-none">
                <img 
                  src="https://i.pinimg.com/1200x/01/a0/35/01a035796f580d4a15d2a629fb2787f0.jpg"
                  className="w-100 home-card-mobile-img"
                  alt="Calendario de partidos"
                />
              </div>
              
              {/* Texto sin botón */}
              <div className="col-lg-6 col-12">
                <div className="card-body p-4 p-md-4 d-flex flex-column h-100">
                  <h5 className="card-title fw-bold mb-3">Realidad aumentada</h5>
                  <p className="card-text flex-grow-1">
                    Prueba la realidad aumentada especial para cada pais y descubre informacion detallada de cada nacion.
                  </p>
                  {/* Sin botón aquí */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
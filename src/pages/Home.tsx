function Home() {
  return (
    <div className="container mt-4 mt-md-5">
      {/* Carrusel */}
      <div id="carouselFootball" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselFootball" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselFootball" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselFootball" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner rounded-3">
          <div className="carousel-item active">
            <img 
              src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              className="d-block w-100" 
              alt="Estadio de fútbol" 
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5>Estadios de Clase Mundial</h5>
              <p>Descubre los estadios más modernos para el Mundial 2026</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              className="d-block w-100" 
              alt="Jugadores de fútbol" 
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5>Los Mejores Talentos</h5>
              <p>Sigue a las estrellas del fútbol mundial en acción</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              className="d-block w-100" 
              alt="Partido de fútbol" 
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5>Emoción en Cada Partido</h5>
              <p>Vive la pasión del fútbol en cada encuentro</p>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselFootball" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselFootball" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Cards */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="row g-0 h-100">
              <div className="col-md-6">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  className="img-fluid rounded-start h-100 w-100" 
                  alt="Equipos participantes" 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column">
                <div className="card-body">
                  <h5 className="card-title">Equipos Participantes</h5>
                  <p className="card-text">48 equipos de todo el mundo competirán por el título más prestigioso del fútbol en Norteamérica.</p>
                  <a href="/paises" className="btn btn-sm text-white mt-auto" style={{ backgroundColor: "#112a4c" }}>
                    Ver Países
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="row g-0 h-100">
              <div className="col-md-6">
                <img 
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  className="img-fluid rounded-start h-100 w-100" 
                  alt="Calendario de partidos" 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column">
                <div className="card-body">
                  <h5 className="card-title">Calendario Completo</h5>
                  <p className="card-text">Sigue todos los partidos del Mundial 2026 con nuestro calendario interactivo y notificaciones.</p>
                  <a href="#" className="btn btn-sm text-white mt-auto" style={{ backgroundColor: "#112a4c" }}>
                    Ver Calendario
                  </a>
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
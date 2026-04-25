import { useState, useEffect, useRef, useCallback } from 'react';
import "../css/Home.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=85",
    alt: "Estadio de fútbol",
    title: "Paises participantes",
    desc: "Descubre los paises participantes en el Mundial 2026",
  },
  {
    src: "https://i.pinimg.com/736x/1b/f6/8b/1bf68b6ec9226bc9fee8e3a98a37186a.jpg",
    alt: "Jugadores de fútbol",
    title: "Funcionalidad AR",
    desc: "Prueba la revolucionaria funcion AR para cada pais",
  },
  {
    src: "https://i.pinimg.com/736x/81/38/bd/8138bddb9571fd73de5bb0fddca92807.jpg",
    alt: "Partido de fútbol",
    title: "Datos importantes",
    desc: "Navega y descubre informacion detallada de cada pais",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50;

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Touch handlers para swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  return (
    <div className="container mt-4 mt-md-5 home-container">
      {/* Carúsel React puro con autoplay + swipe */}
      <div className="mb-5">
        <div
          className="home-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div className="home-carousel-inner rounded-3 overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`home-slide${i === current ? ' home-slide--active' : ''}`}
              >
                <img
                  src={slide.src}
                  className="d-block w-100"
                  alt={slide.alt}
                  style={{
                    height: "50vh",
                    minHeight: "300px",
                    maxHeight: "450px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  className="home-carousel-caption"
                  style={{ backgroundColor: "rgba(6, 17, 30, 0.85)" }}
                >
                  <h4 className="fw-bold mb-2">{slide.title}</h4>
                  <p className="d-none d-sm-block mb-0">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha anterior */}
          <button
            className="home-carousel-control home-carousel-control--prev"
            onClick={prev}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15,4 7,12 15,20" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Flecha siguiente */}
          <button
            className="home-carousel-control home-carousel-control--next"
            onClick={next}
            aria-label="Siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9,4 17,12 9,20" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Indicadores */}
          <div className="home-carousel-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === current ? 'active' : ''}
                onClick={() => setCurrent(i)}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
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
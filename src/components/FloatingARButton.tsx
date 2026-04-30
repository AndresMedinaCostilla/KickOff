import { useLocation, useNavigate } from 'react-router-dom';
import '../pages/css/Seleccion.css';

const PAIS_POR_RUTA: Record<string, string> = {
  '/mexico':     'MÉXICO',
  '/sudafrica':  'SUDÁFRICA',
  '/corea':      'COREA DEL SUR',
  '/colombia':   'COLOMBIA',
  '/uzbekistan': 'UZBEKISTÁN',
  '/tunez':      'TÚNEZ',
  '/japon':      'JAPÓN',
  '/espana':     'ESPAÑA',
  '/uruguay':    'URUGUAY',
};

function FloatingARButton() {
  const location = useLocation();
  const navigate = useNavigate();

  // No mostrar en la página de AR
  if (location.pathname === '/ar') return null;

  const handleClick = () => {
    const pais = PAIS_POR_RUTA[location.pathname];
    if (pais) {
      localStorage.setItem('pais_actual_ar', pais);
      navigate('/ar');
    } else {
      navigate('/ar?modo=libre');
    }
  };

  return (
    <button className="btn-ar-flotante" onClick={handleClick} aria-label="Abrir Realidad Aumentada">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="camara-icono">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
      </svg>
    </button>
  );
}

export default FloatingARButton;

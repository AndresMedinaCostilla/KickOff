import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ARPage.css';
import { obtenerPaisActual, eliminarPaisActual } from '../ts/paisStorage';
import ARModel from './ARModel';

// Definir el tipo para las opciones de trivia
interface TriviaOption {
  id: number;
  text: string;
  correct: boolean;
}

// Definir el tipo para la trivia de cada país
interface TriviaData {
  pregunta: string;
  opciones: TriviaOption[];
}

// Pool global de 40 preguntas de trivia 
const triviaPool: TriviaData[] = [
  // --- originales (9) ---
  { pregunta: '¿En qué año México ganó su primera Copa Mundial?', opciones: [{ id:1,text:'1970',correct:false},{id:2,text:'1986',correct:false},{id:3,text:'Nunca ha ganado',correct:true},{id:4,text:'1958',correct:false}] },
  { pregunta: '¿Estadio donde fue la final del Mundial Sudáfrica 2010?', opciones: [{id:1,text:'Ellis Park',correct:false},{id:2,text:'Soccer City (FNB Stadium)',correct:true},{id:3,text:'Loftus Versfeld',correct:false},{id:4,text:'Moses Mabhida',correct:false}] },
  { pregunta: '¿Qué jugador coreano compartió el Botín de Oro de la Premier League 2021-22?', opciones: [{id:1,text:'Lee Kang-in',correct:false},{id:2,text:'Hwang Hee-chan',correct:false},{id:3,text:'Son Heung-min',correct:true},{id:4,text:'Kim Min-jae',correct:false}] },
  { pregunta: '¿Quién es el máximo goleador histórico de Colombia?', opciones: [{id:1,text:'Radamel Falcao',correct:true},{id:2,text:'James Rodríguez',correct:false},{id:3,text:'Carlos Bacca',correct:false},{id:4,text:'Luis Díaz',correct:false}] },
  { pregunta: '¿Cuál es el jugador uzbeko más reconocido en Europa?', opciones: [{id:1,text:'Maksim Shatskikh',correct:false},{id:2,text:'Odil Ahmedov',correct:false},{id:3,text:'Eldor Shomurodov',correct:true},{id:4,text:'Server Djeparov',correct:false}] },
  { pregunta: '¿Quién es el máximo goleador histórico de Túnez?', opciones: [{id:1,text:'Wahbi Khazri',correct:false},{id:2,text:'Youssef Msakni',correct:false},{id:3,text:'Issam Jemâa',correct:true},{id:4,text:'Francileudo Santos',correct:false}] },
  { pregunta: '¿Qué jugador japonés ganó la Champions League con Liverpool?', opciones: [{id:1,text:'Hidetoshi Nakata',correct:false},{id:2,text:'Keisuke Honda',correct:false},{id:3,text:'Takumi Minamino',correct:true},{id:4,text:'Shinji Kagawa',correct:false}] },
  { pregunta: '¿En qué año ganó España su único Mundial de Fútbol?', opciones: [{id:1,text:'2010',correct:true},{id:2,text:'2014',correct:false},{id:3,text:'2018',correct:false},{id:4,text:'2022',correct:false}] },
  { pregunta: '¿Cuántas Copas del Mundo ha ganado Uruguay?', opciones: [{id:1,text:'1',correct:false},{id:2,text:'2',correct:true},{id:3,text:'3',correct:false},{id:4,text:'4',correct:false}] },
  // --- nuevas (31) ---
  { pregunta: '¿Cuántos Mundiales ha ganado Brasil?', opciones: [{id:1,text:'3',correct:false},{id:2,text:'4',correct:false},{id:3,text:'5',correct:true},{id:4,text:'6',correct:false}] },
  { pregunta: '¿En qué año se celebró el primer Mundial de Fútbol?', opciones: [{id:1,text:'1926',correct:false},{id:2,text:'1930',correct:true},{id:3,text:'1934',correct:false},{id:4,text:'1938',correct:false}] },
  { pregunta: '¿Qué país fue campeón del primer Mundial de Fútbol?', opciones: [{id:1,text:'Brasil',correct:false},{id:2,text:'Argentina',correct:false},{id:3,text:'Uruguay',correct:true},{id:4,text:'Italia',correct:false}] },
  { pregunta: '¿Cuántos equipos participarán en el Mundial 2026?', opciones: [{id:1,text:'32',correct:false},{id:2,text:'40',correct:false},{id:3,text:'48',correct:true},{id:4,text:'64',correct:false}] },
  { pregunta: '¿Qué país ganó la Copa del Mundo 2018?', opciones: [{id:1,text:'Croacia',correct:false},{id:2,text:'Francia',correct:true},{id:3,text:'Bélgica',correct:false},{id:4,text:'Brasil',correct:false}] },
  { pregunta: '¿Qué país ganó la Copa del Mundo 2022?', opciones: [{id:1,text:'Francia',correct:false},{id:2,text:'Marruecos',correct:false},{id:3,text:'Argentina',correct:true},{id:4,text:'Croacia',correct:false}] },
  { pregunta: '¿Quién fue el máximo goleador histórico en Mundiales (hasta 2022)?', opciones: [{id:1,text:'Ronaldo Nazário',correct:false},{id:2,text:'Pelé',correct:false},{id:3,text:'Miroslav Klose',correct:true},{id:4,text:'Gerd Müller',correct:false}] },
  { pregunta: '¿Cuántos goles marcó Mbappé en la final del Mundial 2022?', opciones: [{id:1,text:'1',correct:false},{id:2,text:'2',correct:false},{id:3,text:'3',correct:true},{id:4,text:'4',correct:false}] },
  { pregunta: '¿Quién ganó el Balón de Oro del Mundial 2022?', opciones: [{id:1,text:'Kylian Mbappé',correct:false},{id:2,text:'Luka Modrić',correct:false},{id:3,text:'Lionel Messi',correct:true},{id:4,text:'Emiliano Martínez',correct:false}] },
  { pregunta: '¿Qué país organizó el Mundial 2022?', opciones: [{id:1,text:'Emiratos Árabes',correct:false},{id:2,text:'Arabia Saudita',correct:false},{id:3,text:'Qatar',correct:true},{id:4,text:'Bahréin',correct:false}] },
  { pregunta: '¿Cuántos países serán sedes del Mundial 2026?', opciones: [{id:1,text:'1',correct:false},{id:2,text:'2',correct:false},{id:3,text:'3',correct:true},{id:4,text:'4',correct:false}] },
  { pregunta: '¿Cuántas Copas del Mundo ha ganado Alemania?', opciones: [{id:1,text:'3',correct:false},{id:2,text:'4',correct:true},{id:3,text:'5',correct:false},{id:4,text:'6',correct:false}] },
  { pregunta: '¿Qué país fue el primero de África en llegar a semifinales de un Mundial?', opciones: [{id:1,text:'Nigeria',correct:false},{id:2,text:'Ghana',correct:false},{id:3,text:'Senegal',correct:false},{id:4,text:'Marruecos',correct:true}] },
  { pregunta: '¿Quién fue el máximo goleador del Mundial 2018?', opciones: [{id:1,text:'Antoine Griezmann',correct:false},{id:2,text:'Romelu Lukaku',correct:false},{id:3,text:'Harry Kane',correct:true},{id:4,text:'Cristiano Ronaldo',correct:false}] },
  { pregunta: '¿Cuántas Copas del Mundo ha ganado Italia?', opciones: [{id:1,text:'2',correct:false},{id:2,text:'3',correct:false},{id:3,text:'4',correct:true},{id:4,text:'5',correct:false}] },
  { pregunta: '¿Quién ganó el Balón de Oro del Mundial 2018?', opciones: [{id:1,text:'Griezmann',correct:false},{id:2,text:'Mbappé',correct:false},{id:3,text:'Luka Modrić',correct:true},{id:4,text:'Messi',correct:false}] },
  { pregunta: '¿Cuántas Copas del Mundo ha ganado Francia?', opciones: [{id:1,text:'1',correct:false},{id:2,text:'2',correct:true},{id:3,text:'3',correct:false},{id:4,text:'4',correct:false}] },
  { pregunta: '¿En qué país se celebró el Mundial 2014?', opciones: [{id:1,text:'Argentina',correct:false},{id:2,text:'Colombia',correct:false},{id:3,text:'Brasil',correct:true},{id:4,text:'Chile',correct:false}] },
  { pregunta: '¿Qué equipo ganó el Mundial 2006?', opciones: [{id:1,text:'Francia',correct:false},{id:2,text:'Alemania',correct:false},{id:3,text:'Portugal',correct:false},{id:4,text:'Italia',correct:true}] },
  { pregunta: '¿Cuántos equipos participaron en el primer Mundial de 1930?', opciones: [{id:1,text:'13',correct:true},{id:2,text:'16',correct:false},{id:3,text:'24',correct:false},{id:4,text:'32',correct:false}] },
  { pregunta: '¿Quién fue el portero titular de España en el Mundial 2010?', opciones: [{id:1,text:'Víctor Valdés',correct:false},{id:2,text:'Pepe Reina',correct:false},{id:3,text:'Iker Casillas',correct:true},{id:4,text:'David de Gea',correct:false}] },
  { pregunta: '¿Cuántas Copas del Mundo ha ganado Argentina?', opciones: [{id:1,text:'1',correct:false},{id:2,text:'2',correct:false},{id:3,text:'3',correct:true},{id:4,text:'4',correct:false}] },
  { pregunta: '¿Cuál fue el primer país asiático en llegar a semifinales de un Mundial?', opciones: [{id:1,text:'Japón',correct:false},{id:2,text:'Corea del Sur',correct:true},{id:3,text:'Arabia Saudita',correct:false},{id:4,text:'Australia',correct:false}] },
  { pregunta: '¿Cuántos goles anotó Ronaldo Nazário en los Mundiales?', opciones: [{id:1,text:'12',correct:false},{id:2,text:'13',correct:false},{id:3,text:'15',correct:true},{id:4,text:'17',correct:false}] },
  { pregunta: '¿Quién ganó el Botín de Oro (máximo goleador) del Mundial Brasil 2014?', opciones: [{id:1,text:'Neymar',correct:false},{id:2,text:'Thomas Müller',correct:false},{id:3,text:'James Rodríguez',correct:true},{id:4,text:'Lionel Messi',correct:false}] },
  { pregunta: '¿Qué selección ganó el Mundial Femenino 2023?', opciones: [{id:1,text:'EE.UU.',correct:false},{id:2,text:'Australia',correct:false},{id:3,text:'España',correct:true},{id:4,text:'Suecia',correct:false}] },
  { pregunta: '¿Cuántos Balones de Oro ha ganado Lionel Messi?', opciones: [{id:1,text:'6',correct:false},{id:2,text:'7',correct:false},{id:3,text:'8',correct:true},{id:4,text:'9',correct:false}] },
  { pregunta: '¿Cuántas veces ha ganado Países Bajos la Copa del Mundo?', opciones: [{id:1,text:'0',correct:true},{id:2,text:'1',correct:false},{id:3,text:'2',correct:false},{id:4,text:'3',correct:false}] },
  { pregunta: '¿Quién marcó el gol del título en la final del Mundial 2010?', opciones: [{id:1,text:'David Villa',correct:false},{id:2,text:'Andrés Iniesta',correct:true},{id:3,text:'Fernando Torres',correct:false},{id:4,text:'Xavi',correct:false}] },
  { pregunta: '¿En qué año debutó Japón en una Copa del Mundo?', opciones: [{id:1,text:'1994',correct:false},{id:2,text:'1998',correct:true},{id:3,text:'2002',correct:false},{id:4,text:'2006',correct:false}] },
  { pregunta: '¿Qué ciudad albergará el partido inaugural del Mundial 2026?', opciones: [{id:1,text:'Los Ángeles',correct:false},{id:2,text:'Nueva York',correct:false},{id:3,text:'Ciudad de México',correct:true},{id:4,text:'Toronto',correct:false}] },
  { pregunta: '¿Cuántos jugadores forman cada equipo en el campo de fútbol?', opciones: [{id:1,text:'10',correct:false},{id:2,text:'11',correct:true},{id:3,text:'12',correct:false},{id:4,text:'9',correct:false}] },
];

// Selecciona N preguntas aleatorias sin repetición del pool
function seleccionarPreguntas(n: number): TriviaData[] {
  const shuffled = [...triviaPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

const TOTAL_PREGUNTAS = 5;

function ARPage() {
  const navigate = useNavigate();
  const [showTriviaModal, setShowTriviaModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedTriviaOption, setSelectedTriviaOption] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [paisActual, setPaisActual] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [triviaQuestions, setTriviaQuestions] = useState<TriviaData[]>([]);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [arError, setArError] = useState<string | null>(null);
  const [/*showInfoMessage*/, setShowInfoMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shakeModal, setShakeModal] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Array<{id: number; x: number; color: string; delay: number; size: number; rotation: number}>>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelAnimRef = useRef<number | null>(null);
  const isNavigatingRef = useRef(false);

  // RESTAURACIÓN COMPLETA - Función mejorada
  const restoreBodyStyles = () => {
    // Remover clases específicas
    document.body.classList.remove('ar-active', 'menu-open', 'a-body');
    document.documentElement.classList.remove('a-html');
    
    // Limpiar TODOS los estilos inline
    document.body.removeAttribute('style');
    document.documentElement.removeAttribute('style');
    
    // Forzar reflow
    void document.body.offsetHeight;
    
    // Restaurar valores por defecto explícitamente
    document.body.style.cssText = `
      margin: 0;
      padding: 0;
      overflow: visible;
      height: auto;
      position: static;
      width: auto;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
    `;
    
    document.documentElement.style.cssText = `
      overflow: visible;
      height: auto;
    `;
    
    // Scroll al top
    window.scrollTo(0, 0);
  };

  // LIMPIEZA AGRESIVA DE AR.JS
  const cleanupAR = () => {

    // 1. Detener TODOS los tracks de medios
    document.querySelectorAll('video').forEach(video => {
      if (video.srcObject) {
        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach(track => {
          track.stop();
          track.enabled = false;
        });
        video.srcObject = null;
      }
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.remove();
    });

    // 2. Limpiar canvases de WebGL
    document.querySelectorAll('canvas').forEach(canvas => {
      const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
      if (gl) {
        const loseContext = gl.getExtension('WEBGL_lose_context');
        if (loseContext) loseContext.loseContext();
      }
      canvas.remove();
    });

    // 3. Eliminar elementos de A-Frame/AR.js
    ['a-scene', 'a-marker', 'a-entity', 'a-box', 'a-light', 'a-camera', 'a-assets'].forEach(tag => {
      document.querySelectorAll(tag).forEach(el => el.remove());
    });

    // 4. Eliminar elementos inyectados por AR.js
    document.querySelectorAll('.arjs-loader, .a-enter-vr-button, .a-orientation-modal, .a-modal, .a-canvas').forEach(el => el.remove());
    
    // 5. Eliminar scripts dinámicos de AR.js si existen
    document.querySelectorAll('script[src*="ar.js"], script[src*="aframe"]').forEach(el => {
      // No eliminamos los del index.html, solo los dinámicos
      if (!el.getAttribute('data-permanent')) {
        el.remove();
      }
    });

    // 6. Limpiar contenedor específico
    const arModelContainer = document.querySelector('[data-ar-model="true"]');
    if (arModelContainer) {
      arModelContainer.innerHTML = '';
    }

    // 7. Restaurar estilos
    restoreBodyStyles();
  };

  // VERIFICACIÓN INICIAL
  useEffect(() => {
    const pais = obtenerPaisActual();
    
    if (pais) {
      setPaisActual(pais);
      setTriviaQuestions(seleccionarPreguntas(TOTAL_PREGUNTAS));
      setIsLoading(false);
      
      // Aplicar estilos de AR
      document.body.classList.add('ar-active');
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      navigate('/paises');
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setArError('Tu navegador no soporta acceso a la cámara necesario para AR');
    }

    // Limpieza al desmontar
    return () => {
      if (!isNavigatingRef.current) {
        cleanupAR();
      }
    };
  }, [navigate]);

  const handleInfoClick = () => {
  setShowInfoMessage(true);
  
  // Aquí irá la reproducción de audio cuando la tengas
  // Por ahora solo muestra un mensaje y lo oculta después de 2 segundos
  
  setTimeout(() => {
    setShowInfoMessage(false);
  }, 2000);
};

  const getVideoSrc = (pais: string | null): string => {
    if (!pais) return '';
    
    const mapaNombres: Record<string, string> = {
      'MÉXICO': 'mexico',
      'SUDÁFRICA': 'sudafrica',
      'COREA DEL SUR': 'corea',
      'COLOMBIA': 'colombia',
      'UZBEKISTÁN': 'uzbekistan',
      'TÚNEZ': 'tunez',
      'JAPÓN': 'japon',
      'ESPAÑA': 'espana',
      'URUGUAY': 'uruguay'
    };
    
    const nombreVideo = mapaNombres[pais];
    return `/videos/${nombreVideo}.mp4`;
  };

  const filterOptions = [
    { id: 1, text: "Normal",           value: "normal" },
    { id: 2, text: "Desenfoque",       value: "blur" },
    { id: 3, text: "Pixelado",         value: "pixelated" },
    { id: 4, text: "Alta Saturación",  value: "saturate" }
  ];

  // Retorna la clase CSS del filtro seleccionado
  const getFilterClass = (): string => {
    switch (selectedFilter) {
      case 2: return 'filter-blur';
      case 4: return 'filter-saturate';
      default: return '';
    }
  };

  // Efecto canvas para pixelado real
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Limpiar loop anterior
    if (pixelAnimRef.current) {
      cancelAnimationFrame(pixelAnimRef.current);
      pixelAnimRef.current = null;
    }

    if (selectedFilter !== 3 || !video || !canvas) return;

    const PIXEL_SIZE = 12; // tamaño de bloque en px — más grande = más pixelado
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawPixelated = () => {
      if (!video || !canvas || video.paused || video.ended) {
        pixelAnimRef.current = requestAnimationFrame(drawPixelated);
        return;
      }
      const w = canvas.width;
      const h = canvas.height;
      const pw = Math.max(1, Math.floor(w / PIXEL_SIZE));
      const ph = Math.max(1, Math.floor(h / PIXEL_SIZE));

      ctx.imageSmoothingEnabled = false;
      // Dibujar a baja resolución
      ctx.drawImage(video, 0, 0, pw, ph);
      // Escalar a tamaño completo sin suavizado → bloques visibles
      ctx.drawImage(canvas, 0, 0, pw, ph, 0, 0, w, h);

      pixelAnimRef.current = requestAnimationFrame(drawPixelated);
    };

    const syncSize = () => {
      canvas.width = video.videoWidth || video.clientWidth || 320;
      canvas.height = video.videoHeight || video.clientHeight || 180;
    };

    if (video.readyState >= 2) {
      syncSize();
      drawPixelated();
    } else {
      video.addEventListener('loadeddata', () => { syncSize(); drawPixelated(); }, { once: true });
    }

    return () => {
      if (pixelAnimRef.current) {
        cancelAnimationFrame(pixelAnimRef.current);
        pixelAnimRef.current = null;
      }
    };
  }, [selectedFilter, showVideoModal]);

  const closeModal = () => {
    setShowTriviaModal(false);
    setShowVideoModal(false);
    setSelectedTriviaOption(null);
    setSelectedFilter(null);
    setShowResult(false);
    setIsCorrect(false);
    setShakeModal(false);
    setCurrentQIdx(0);
    setScore(0);
    setQuizFinished(false);
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Sonido de fanfarria ascendente para respuesta correcta
  const playCorrectSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = ctx.currentTime + i * 0.13;
        gain.gain.setValueAtTime(0.35, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.start(t);
        osc.stop(t + 0.4);
      });
    } catch (_) { /* silencioso */ }
  };

  // Sonido de tono descendente para respuesta incorrecta
  const playIncorrectSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [350, 280, 210];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        const t = ctx.currentTime + i * 0.22;
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.72, t + 0.38);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);
        osc.start(t);
        osc.stop(t + 0.45);
      });
    } catch (_) { /* silencioso */ }
  };

  // Lanzar confetti
  const launchConfetti = () => {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98FB98', '#FF9F43', '#A29BFE'];
    const pieces = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.6,
      size: 7 + Math.random() * 9,
      rotation: Math.random() * 360,
    }));
    setConfettiPieces(pieces);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setConfettiPieces([]);
    }, 3500);
  };

  const handleOptionSelect = (optionId: number) => {
    if (showResult || quizFinished) return; // bloquear doble click
    setSelectedTriviaOption(optionId);

    const currentQ = triviaQuestions[currentQIdx];
    if (!currentQ) return;
    const selectedOption = currentQ.opciones.find(opt => opt.id === optionId);
    if (!selectedOption) return;

    const correct = selectedOption.correct;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      playCorrectSound();
      launchConfetti();
      setScore(s => s + 1);
    } else {
      playIncorrectSound();
      setShakeModal(true);
      setTimeout(() => setShakeModal(false), 650);
    }

    const nextIdx = currentQIdx + 1;
    if (nextIdx >= TOTAL_PREGUNTAS) {
      // Última pregunta → mostrar resultado final
      setTimeout(() => {
        setQuizFinished(true);
        setShowResult(false);
      }, 1500);
      setTimeout(() => closeModal(), 5000);
    } else {
      // Siguiente pregunta
      setTimeout(() => {
        setCurrentQIdx(nextIdx);
        setSelectedTriviaOption(null);
        setShowResult(false);
      }, 1500);
    }
  };

  const handleBackClick = () => {
    
    // Marcar navegación
    isNavigatingRef.current = true;
    
    // Limpieza inmediata y completa
    cleanupAR();
    
    // Eliminar país
    eliminarPaisActual();
    
    // Navegar después de limpiar todo
    setTimeout(() => {
      // Doble verificación de limpieza
      document.querySelectorAll('video, canvas, a-scene, .arjs-loader').forEach(el => el.remove());
      restoreBodyStyles();
      
      // navigate('/paises', { replace: true });
    window.location.href = '/paises'; // Fuerza recarga completa
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="ar-container">
        <div className="ar-camera-error">
          Cargando...
        </div>
      </div>
    );
  }

  if (!paisActual) {
    return null;
  }

  return (
    <div className="ar-container">
      <ARModel pais={paisActual} onInfoClick={handleInfoClick} />

      

      {arError && (
        <div className="ar-camera-error">
          {arError}
          <button 
            onClick={() => window.location.reload()} 
            className="ar-retry-button"
          >
            Reintentar
          </button>
        </div>
      )}

      <div className="ar-help-message">
        Apunta la cámara al marcador para ver el modelo 3D
      </div>

      <button 
        className="ar-back-button"
        onClick={handleBackClick}
        aria-label="Volver a países"
      >
        ←
      </button>

      <div className="ar-pais-indicator">
        {paisActual}
      </div>

      <div className="ar-buttons-container">
        <button
          className="ar-action-button"
          onClick={() => {
            setTriviaQuestions(seleccionarPreguntas(TOTAL_PREGUNTAS));
            setCurrentQIdx(0);
            setScore(0);
            setQuizFinished(false);
            setShowTriviaModal(true);
            setSelectedTriviaOption(null);
            setShowResult(false);
          }}
        >
          Trivia
        </button>
        <button 
          className="ar-action-button"
          onClick={() => { setShowVideoModal(true); setSelectedFilter(1); }}
        >
          Video
        </button>
      </div>

      {showTriviaModal && triviaQuestions.length > 0 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className={`modal-content${shakeModal ? ' modal-shake' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-card">
              <div className="modal-body">

                {/* Barra de progreso */}
                {!quizFinished && (
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 16px 4px', fontSize:'0.8rem', color:'#666' }}>
                    <span>Pregunta {currentQIdx + 1} de {TOTAL_PREGUNTAS}</span>
                    <span>🏆 {score} correctas</span>
                  </div>
                )}
                {!quizFinished && (
                  <div style={{ height:'4px', background:'#e9ecef', borderRadius:'4px', margin:'0 16px 12px', overflow:'hidden' }}>
                    <div style={{ height:'100%', width:`${((currentQIdx) / TOTAL_PREGUNTAS) * 100}%`, background:'#2a5a9d', transition:'width 0.4s ease', borderRadius:'4px' }} />
                  </div>
                )}

                {quizFinished ? (
                  <div style={{ textAlign:'center', padding:'24px 20px' }}>
                    <div style={{ fontSize:'3rem', marginBottom:'12px' }}>
                      {score === TOTAL_PREGUNTAS ? '🏆' : score >= 3 ? '🌟' : '💪'}
                    </div>
                    <h3 style={{ fontWeight:800, color:'#1a3a6d', marginBottom:'8px' }}>Quiz terminado</h3>
                    <p style={{ fontSize:'1.4rem', fontWeight:700, color: score >= 3 ? '#1a7a3c' : '#c0392b' }}>
                      {score} / {TOTAL_PREGUNTAS} correctas
                    </p>
                    <p style={{ color:'#666', fontSize:'0.9rem' }}>
                      {score === TOTAL_PREGUNTAS ? '¡Perfecto! Eres un experto del fútbol.' : score >= 3 ? '¡Buen resultado! Sigue aprendiendo.' : 'Sigue practicando, ¡lo lograrás!'}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="modal-question">
                      {triviaQuestions[currentQIdx]?.pregunta}
                    </p>

                    {!showResult ? (
                      <div className="options-container">
                        {triviaQuestions[currentQIdx]?.opciones.map((option) => (
                          <div
                            key={option.id}
                            className={`option-item ${selectedTriviaOption === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option.id)}
                          >
                            <div className="option-circle">
                              {selectedTriviaOption === option.id && (
                                <span className="option-check">✓</span>
                              )}
                            </div>
                            <span className="option-text">{option.text}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`trivia-result ${isCorrect ? 'trivia-result--correct' : 'trivia-result--incorrect'}`}>
                        {isCorrect ? '🎉 ¡Correcto!' : '😢 ¡Incorrecto!'}
                        <p style={{ fontSize:'0.8rem', marginTop:'6px', opacity:0.7, fontWeight:400 }}>
                          {currentQIdx + 1 < TOTAL_PREGUNTAS ? 'Siguiente pregunta...' : 'Última pregunta'}
                        </p>
                      </div>
                    )}
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {showVideoModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>
            
            <div className="modal-card">
              <div className="modal-body">
                <div className={`video-container ${selectedFilter === 3 ? 'video-container--pixelated' : ''}`}>
                  {/* Canvas overlay — solo visible con filtro pixelado */}
                  <canvas
                    ref={canvasRef}
                    className={`video-pixel-canvas ${selectedFilter === 3 ? 'visible' : ''}`}
                  />
                  <video
                    ref={videoRef}
                    src={getVideoSrc(paisActual)}
                    className={`video-player ${getFilterClass()}`}
                    controls
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src={getVideoSrc(paisActual)} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
                
                <h3 className="filters-title">Filtros</h3>
                
                <div className="filters-container">
                  {filterOptions.map((filter) => (
                    <div
                      key={filter.id}
                      className={`filter-chip ${selectedFilter === filter.id ? 'selected' : ''}`}
                      onClick={() => setSelectedFilter(filter.id)}
                    >
                      {filter.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lluvia de confetti para respuesta correcta */}
      {showConfetti && (
        <div className="confetti-overlay" aria-hidden="true">
          {confettiPieces.map(piece => (
            <div
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.x}%`,
                width: `${piece.size}px`,
                height: `${piece.size * 1.4}px`,
                backgroundColor: piece.color,
                animationDelay: `${piece.delay}s`,
                transform: `rotate(${piece.rotation}deg)`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ARPage;
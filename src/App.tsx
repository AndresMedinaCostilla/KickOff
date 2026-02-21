import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/tsx/Home.tsx";
import Paises from "./pages/tsx/Paises.tsx";
import Ayuda from "./pages/tsx/Ayuda.tsx";
import Mexico from "./pages/tsx/Mexico.tsx";
import Sudafrica from "./pages/tsx/Sudafrica.tsx";
import CoreaDelSur from './pages/tsx/CoreaDelSur.tsx';
import Colombia from './pages/tsx/Colombia.tsx';
import Uzbekistan from './pages/tsx/Uzbekistan.tsx';
import Tunez from './pages/tsx/Tunez.tsx';
import Japon from './pages/tsx/Japon.tsx';
import Espana from './pages/tsx/Espana.tsx';
import Uruguay from './pages/tsx/Uruguay.tsx';
import ARPage from "./pages/tsx/ARPage.tsx"; // Importa la nueva página AR
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/mexico" element={<Mexico />} />
        <Route path="/sudafrica" element={<Sudafrica />} />
        <Route path="/corea" element={<CoreaDelSur />} />
        <Route path="/colombia" element={<Colombia />} />
        <Route path="/uzbekistan" element={<Uzbekistan />} />
        <Route path="/tunez" element={<Tunez />} />
        <Route path="/japon" element={<Japon />} />
        <Route path="/espana" element={<Espana />} />
        <Route path="/uruguay" element={<Uruguay />} />
        <Route path="/ar" element={<ARPage />} /> {/* Nueva ruta para AR */}
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
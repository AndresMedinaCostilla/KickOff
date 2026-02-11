import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Paises from "./pages/Paises.tsx";
import Ayuda from "./pages/Ayuda.tsx";
import Seleccion from "./pages/Seleccion.tsx";
import ARPage from "./pages/ARPage.tsx"; // Importa la nueva página AR
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/seleccion/:codigoPais?" element={<Seleccion />} />
        <Route path="/ar" element={<ARPage />} /> {/* Nueva ruta para AR */}
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
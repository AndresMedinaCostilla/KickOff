import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Paises from "./pages/Paises.tsx";
import Ayuda from "./pages/Ayuda.tsx";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>
      <Footer  />
    </BrowserRouter>
  );
}

export default App;

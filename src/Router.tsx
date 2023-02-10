import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConstructionProgress } from "./pages/ConstructionProgress";
import { Home } from "./pages/Home";
import { Gallerys } from "./pages/Gallerys";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progresso" element={<ConstructionProgress />} />
        <Route path="/galeriasmensais" element={<Gallerys />} />
        <Route path="/registro" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
} 
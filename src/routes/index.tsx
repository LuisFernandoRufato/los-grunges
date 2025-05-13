import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Fotos from "../pages/Fotos";
import Agenda from "../pages/Agenda";
import Contato from "../pages/Contato";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
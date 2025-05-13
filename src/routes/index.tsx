import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Fotos from "../pages/Fotos";
import Agenda from "../pages/Agenda";
import Contatos from "../pages/Contatos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/contatos" element={<Contatos />} />
    </Routes>
  );
}
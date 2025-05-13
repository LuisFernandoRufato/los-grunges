import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold text-white-500">LOS GRUNGES</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-purple-300">Home</Link>
        <Link to="/fotos" className="hover:text-purple-300">Fotos</Link>
        <Link to="/agenda" className="hover:text-purple-300">Agenda</Link>
        <Link to="/contato" className="hover:text-purple-300">Contato</Link>
      </div>
    </nav>
  );
}
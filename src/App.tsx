import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
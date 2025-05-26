import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import { Perfil } from "./Perfiles/Perfil";
import { LecturaDePedidos } from "./Productos/pedidos/lecturaDePedidos/LecturaDePedidos";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/MisPedidos/:id" element={<LecturaDePedidos />} />
      </Routes>
    </Router>
  );
};

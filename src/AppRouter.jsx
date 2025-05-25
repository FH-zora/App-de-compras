import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import { Perfil } from "./Perfiles/Perfil";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

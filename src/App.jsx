import { useEffect } from "react";
import "./App.css";
// import 'rsuite/dist/rsuite.min.css';
import { CrearPerfil } from "./CrearPerfil";
import { PerfilesActivos } from "./PerfilesActivos";
import { Text } from 'rsuite';
import { LlamadaProductos } from "./Productos/LlamadaProductos";

function App() {


  
  return (
    <>
      <Text color="orange" weight="extrabold" size="2rem" align="center">Perfiles</Text>
      <PerfilesActivos />
      <CrearPerfil />
    </>
  );
}

export default App;

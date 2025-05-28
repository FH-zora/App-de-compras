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
      {/* texto descriptivo */}
      <div style={{margin:20}}>
        <Text size="2rem"weight="medium" color="blue"> Crea tu Perfil y gestiona tu propio pedido de compras como tu quieras.</Text>
      </div>
    </>
  );
}

export default App;

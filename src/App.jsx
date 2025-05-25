import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Productos } from "./Productos";
import { CrearPerfil } from "./CrearPerfil";
import { PerfilesActivos } from "./PerfilesActivos";

function App() {
  const [productosDeCompras, setProductosDeCompras] = useState([]);
  const llamadaDeProductos = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/perfiles/compras/productos"
      );
      console.log("Productos totales", res.data);
      setProductosDeCompras(res.data);
    } catch (error) {
      console.error(
        "no se pudo llamar los productos del backend",
        error.message
      );
    }
  };

  useEffect(() => {
    llamadaDeProductos();
  }, []);

  return (
    <>
      <h4>Perfiles </h4>
      <PerfilesActivos />
      <h1> productos</h1>
      <Productos productosDeCompras={productosDeCompras} />
      <CrearPerfil />
    </>
  );
}

export default App;

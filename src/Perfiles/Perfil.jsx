import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LlamadaProductos } from "../Productos/LlamadaProductos";
import { Button } from "rsuite";

export const Perfil = () => {
  const { id } = useParams();
  console.log("id desde params:", id);
  const [perfilID, setPerfilID] = useState(null);
  const obtenerPerfil = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/perfiles/compras/perfil/${id}`
      );
      setPerfilID(res.data);
    } catch (error) {
      console.error("Error al obtener perfil", error.message);
    }
  };
  useEffect(() => {
    obtenerPerfil();
  }, [id]);
  if (!perfilID) return <p>Cargando perfil...</p>;
  return (
    <>
      <h1>Perfil: {perfilID.Nombre}</h1>
      <div>
        <Link to={`/MisPedidos/${id}`}>
          <Button appearance="primary">Ver Mis Pedidos</Button>
        </Link>
      </div>
      <div>
        <LlamadaProductos perfilID={id} />
      </div>
    </>
  );
};

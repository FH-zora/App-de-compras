import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const LecturaDePedidos = () => {
  const [misPedidos, setMisPedidos] = useState([]);
  const { id } = useParams();
  const getPedidos = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/perfiles/compras/${id}/pedidosEchos`
      );
      setMisPedidos(res.data);
    } catch (error) {
      console.error("error al cargar los pedidos", error.message);
    }
  };
  useEffect(() => {
    getPedidos();
  }, [id]);

  return (
    <>
      <h1>Mis Pedidos</h1>
      {misPedidos.length === 0 ? (
        <p>Ahora mismo no tienes pedidos</p>
      ) : (
        misPedidos.map((p) => (
          <div key={p._id}>
            <p>Fecha: {new Date(p.Fecha).toLocaleDateString()}</p>
            <strong>Total: ${p.Total}</strong>
          </div>
        ))
      )}
    </>
  );
};

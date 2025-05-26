import { useState } from "react";
import axios from "axios";
import { Button, Panel } from "rsuite";

export const NuevoPedido = ({ productos, perfilID }) => {
  const [pedido, setPedido] = useState([]);
  console.log("id del perfil", perfilID);
  const pedidoCompleto = productos.filter((p) => pedido.includes(p._id));

  const productosSeleccionados = async () => {
    try {
      const total = pedidoCompleto.reduce(
        (acc, producto) => acc +  parseFloat(producto.Precio) * producto.Cantidad,
        0
      );
      const NuevoPedido = {
        Productos: pedido,
        Total: total,
      };
      console.log("NuevoPedido a enviar:", NuevoPedido);
      const ordenPedido = await axios.post(
        `http://localhost:3000/perfiles/compras/${perfilID}/pedido`,
        NuevoPedido
      );
      alert("pedido agregado al perfil de manera correcta");
      setPedido([]);
    } catch (error) {
      console.error("se hallo un error al ordenar el pedido", error.message);
    }
  };
  const agregarProuducto = (id) => {
    setPedido((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h3>Agregar Producto</h3>
      {productos.map((res) => (
        <Panel key={res._id}>
          {res.Nombre} - {res.Precio} - {res.Cantidad}
          <Button
            style={{ marginLeft: 12 }}
            appearance={pedido.includes(res._id) ? "primary" : "ghost"}
            color={pedido.includes(res._id) ? "red" : "green"}
            onClick={() => agregarProuducto(res._id)}
          >
            {pedido.includes(res._id) ? "x" : "+"}
          </Button>
        </Panel>
      ))}

      <div>
        {pedidoCompleto.length === 0 ? (
          <p>No hay productos ordenados</p>
        ) : (
          <>
            <p>Productos ordenados</p>
            {pedidoCompleto.map((p) => (
              <div key={p._id}>
                {p.Nombre} - Precio: ${p.Precio} - Cantidad: {p.Cantidad}
              </div>
            ))}
           <strong>
              Total:{" "}
              {pedidoCompleto.reduce(
                (acc, producto) => acc + producto.Precio * producto.Cantidad,
                0
              )}
            </strong>
            <div>
              <Button
                appearance="primary"
                color="green"
                onClick={productosSeleccionados}
              >
                Confirmar pedido
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

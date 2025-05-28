import { useState } from "react";
import axios from "axios";

import { Grid, Row, Col, Panel, Button, Text } from 'rsuite';
export const NuevoPedido = ({ productos, perfilID }) => {
  // const [cantidad, setCantidad] = useState([]);
  const [pedido, setPedido] = useState([]);
  
  const agregarProuducto = (productoId) => {
    setPedido((prev) =>{
      const existe = prev.find((p)=> p.producto === productoId);
      if(existe) {
        return prev.map((item) => item.producto === productoId ? {...item,cantidad:item.cantidad + 1} : item);
      }
      else {
        return [...prev , { producto:productoId,cantidad:1}]
      }
    } )
  };
  
  const eliminarProducto = (productoId) =>{
    setPedido((prev) => {
      const existe = prev.find((p) => p.producto === productoId)
      if (!existe) return prev;
      if(existe.cantidad === 1 )
      {
        return prev.filter((item) => item.producto !== productoId)
      } else {
        return prev.map((item) => item.producto === productoId ? {...item, cantidad:item.cantidad -1 }
      : item)
      }
    } )
  };
  const getCantidad = (id) => {
    const found = pedido.find((p) => p.producto === id);
    return found ? found.cantidad : 0;
  };
   const pedidoCompleto = pedido
   .map((item) => {
     const productoInfo = productos.find((p) => p._id === item.producto);
     if (!productoInfo) return null; // si no se encuentra el producto, no lo incluimos
     return {
       ...productoInfo,
       cantidad: item.cantidad,
      };
    })
    .filter(Boolean); // elimina los nulls   
    const productosSeleccionados = async () => {
      try {
      
         const payload = {
          Productos: pedido, // array de { producto, cantidad }
        };
        console.log("Payload a enviar:", payload);
        const ordenPedido = await axios.post(
          `http://localhost:3000/perfiles/compras/${perfilID}/pedido`,
          payload
        );
        console.log('datos del post', ordenPedido.data)
        alert("pedido agregado al perfil de manera correcta");
        setPedido([]);
      } catch (error) {
  console.error("Error completo:", error); // <-- más útil
  if (error.response) {
    console.error("Respuesta del servidor:", error.response.data);
    console.error("Código de estado:", error.response.status);
  } else if (error.request) {
    console.error("No hubo respuesta del servidor:", error.request);
  } else {
    console.error("Error al configurar la solicitud:", error.message);
  }
}
    };
    return (
      <div>
      <h3>Agregar Producto</h3>
      <Grid fluid>
        <Row gutter={16}>
          {productos.map((res) => {
            const cantidad = getCantidad(res._id); // cantidad actual seleccionada
            
            return (
              <Col key={res._id} xs={24} sm={12} md={8} lg={6}>
                <Panel bordered shaded style={{ marginBottom: 16 }}>
                  <Text color="orange">{res.Nombre}</Text>
                  <p>💵 Precio: {res.Precio}</p>
                  <p>📦 Stock: {res.Cantidad}</p>
                  <div>
                    <p>Cantidad: {cantidad}</p>
                    {/* Botón para agregar producto */}
                    <Button appearance="ghost" color="green" onClick={() => agregarProuducto(res._id)}>+</Button>
                    {/* Botón para quitar producto */}
                    <Button
                      appearance="ghost"
                      color="red"
                      onClick={() => eliminarProducto(res._id)}
                      disabled={cantidad === 0}
                    >
                      -
                    </Button>
                  </div>
                </Panel>
              </Col>
            );
          })}
        </Row>
      </Grid>

      <div style={{ marginTop: 20 }}>
        {/* Si no hay productos seleccionados */}
        {pedidoCompleto.length === 0 ? (
          <Text size="lg" color="red">
            No hay productos seleccionados
          </Text>
        ) : (
          <>
            <Text size="lg" color="blue">
              Productos seleccionados:
            </Text>

            {/* Mostrar cada producto con cantidad y precio */}
            {pedidoCompleto.map((p) => (
              <div key={p._id}>
                <Text>
                  {p.Nombre} — Precio: ${p.Precio} × {p.cantidad} = ${p.Precio * p.cantidad}
                </Text>
              </div>
            ))}

            {/* Mostrar total */}
            <strong>
              Total: $
              {pedidoCompleto.reduce(
                (acc, producto) => acc + producto.Precio * producto.cantidad,
                0
              )}
            </strong>

            {/* Botón para confirmar y enviar el pedido */}
            <div style={{ marginTop: 10 }}>
              <Button appearance="primary" color="green" onClick={productosSeleccionados}>
                Confirmar pedido
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

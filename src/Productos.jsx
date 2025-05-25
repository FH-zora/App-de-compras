export const Productos = ({ productosDeCompras }) => {
  return (
    <div>
      <ul>
        {productosDeCompras.map((res) => (
          <li key={res._id}>
            {res.Nombre} - {res.Precio} - {res.Cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

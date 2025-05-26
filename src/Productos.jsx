export const Productos = ({ productos }) => {
  
  return (
    <div>
      <ul>
        {productos.map((res) => (
          <li key={res._id}>
            {res.Nombre} - {res.Precio} - {res.Cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

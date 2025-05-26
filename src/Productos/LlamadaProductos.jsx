import axios from "axios";
import { useEffect, useState } from "react"
import { NuevoPedido } from "./pedidos/NuevoPedido";


export const LlamadaProductos = ({perfilID}) => {
    const [productos, setProductos] = useState([]);
    const ApiProductos = async() => {
        try {
         const res = await axios.get("http://localhost:3000/perfiles/compras/productos")
             setProductos(res.data)
        } catch (error) {
            console.error("Hubo un error al llamar los productos de la api",error.message)
        }
      
    };

    useEffect(() => {
     ApiProductos()
    }, [])
    console.log("productos en llamada de productos",productos)
  return (
    <div>
        <NuevoPedido  productos={productos} perfilID={perfilID}/>
    </div>
  )
}

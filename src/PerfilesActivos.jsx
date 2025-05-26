import axios from "axios";
import { useEffect, useState } from "react";
import { eliminacionDePerfil } from "./EliminacionDePerfil";
import { Link } from "react-router-dom";
import { Button, List, Panel } from "rsuite";
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
import { LlamadaProductos } from "./Productos/LlamadaProductos";
export const PerfilesActivos = () => {
  const [perfiles, setPerfiles] = useState([]);

  const perfilesGet = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/perfiles/compras/perfil"
      );
      console.log("total de perfiles actuales", res.data);
      setPerfiles((prev) => [...prev]);
      setPerfiles(res.data);
    } catch (error) {
      console.error("error al obtener los perfiles", error);
    }
  };

  useEffect(() => {
    perfilesGet();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }} >
        {perfiles.map((res) => (
          <div key={res._id}>
            <Link to={`/perfil/${res._id}`}>
              <Panel bordered shaded style={{ width: 140, marginBottom: 8 }}>
                <strong>{res.Nombre}</strong>
              </Panel>
            </Link>
            <Button
            startIcon={<CloseOutlineIcon/>}
              appearance="subtle"
                size="md"
                  color="red"
                     onClick={() => eliminacionDePerfil(res._id)}
            >
              Borrar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

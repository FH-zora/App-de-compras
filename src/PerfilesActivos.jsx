import axios from "axios";
import { useEffect, useState } from "react";
import { eliminacionDePerfil } from "./EliminacionDePerfil";
import { Link } from "react-router-dom";

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
      <ul>
        {perfiles.map((res) => (
          <div key={res._id} className="contained">
            <Link to="/perfil">
              <li className="li">{res.Nombre}</li>
              <button onClick={() => eliminacionDePerfil(res._id)}>
                Borrar
              </button>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

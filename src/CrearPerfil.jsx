import axios from "axios";
import { useState } from "react";

export const CrearPerfil = () => {
  const [perfil, setPerfil] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recargar la página
    if (!perfil.trim()) {
      alert("El Nombre es obligatorio");
      return;
    }

    try {
      const newPer = { Nombre: perfil };
      const res = await axios.post(
        "http://localhost:3000/perfiles/compras/",
        newPer
      );
      console.log("el perfil ha sido creado con exito",res.data);
      setPerfil("");
    } catch (error) {
      console.log("Error al crear el perfil del usuario", error.message);
    }
  };

  return (
    <div>
      <h3>CrearPerfil</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nombre">Nombre</label>
          <br />
          <input
            type="text"
            placeholder="Nombre del nuevo perfil"
            value={perfil}
            onChange={(e) => setPerfil(e.target.value)}
          />
          <button type="submit">
            Crear Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

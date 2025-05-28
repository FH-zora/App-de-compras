import axios from "axios";
import { useState } from "react";
import { Button, Input, Text } from "rsuite";
import AddOutlineIcon from '@rsuite/icons/AddOutline';
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
      <Text  weight="extrabold" size="2rem" align="center">Crear Perfil</Text>

      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="Nombre">Nombre</label> */}
          <br />
          <Input
          size="lg"
            type="text"
            placeholder="Nombre del nuevo perfil"
            value={perfil}
            onChange={(e) => setPerfil(e.target.value)}
            style={{display:"flex", justifySelf:"center", width:300,margin:10}}
          />
        </div>
          <Button size="lg" startIcon={ <AddOutlineIcon/>} appearance="primary" color="green" type="submit">
            Crear Perfil
          </Button>
      </form>
    </div>
  );
};

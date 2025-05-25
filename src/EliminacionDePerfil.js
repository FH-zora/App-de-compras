import axios from "axios";

export const eliminacionDePerfil = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/perfiles/compras/${id}`);
  } catch (error) {
    console.error("no se pudo eliminar el perfil", error.message);
  }
};

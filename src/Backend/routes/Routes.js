const express = require("express");
const router = express.Router();
const {
  agregarPedidoAPerfil,
  nuevoPerfil,
  leerProductos,
  leerPerfiles,eliminacionPerfil
} = require("../controllers/RoutesControllers");

//rutas

router.get("/perfil", leerPerfiles);
router.delete("/:id", eliminacionPerfil);
router.get("/productos", leerProductos);
router.post("/", nuevoPerfil);
router.post("/:id/pedidos", agregarPedidoAPerfil);

module.exports = router;

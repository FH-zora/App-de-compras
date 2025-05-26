const express = require("express");
const router = express.Router();
const {
  agregarPedidoAPerfil,
  nuevoPerfil,
  leerProductos,
  leerPerfiles,
  eliminacionPerfil,
  obtenerIdDelPerfil,
  leerPedidos,
} = require("../controllers/RoutesControllers");

//rutas
//!lectura
router.get("/perfil", leerPerfiles);
router.get("/perfil/:id", obtenerIdDelPerfil);
router.get("/:id/pedidosEchos", leerPedidos);
router.get("/productos", leerProductos);
//!eliminacion
router.delete("/:id", eliminacionPerfil);
//!agregar
router.post("/", nuevoPerfil);
router.post("/:id/pedido", agregarPedidoAPerfil);

module.exports = router;

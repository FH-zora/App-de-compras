const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  Nombre: String,
  Precio: String,
  Cantidad: Number,
});
module.exports = mongoose.model("ProductosDeCompra",ProductoSchema);

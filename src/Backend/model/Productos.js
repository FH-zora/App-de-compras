const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  Nombre: String,
  Precio: Number,
  Cantidad: Number,
});
module.exports = mongoose.model("ProductosDeCompra",ProductoSchema);

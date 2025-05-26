const mongoose = require("mongoose");
const PedidoSchema = new mongoose.Schema({
  Fecha: { type: Date, default: Date.now },
  Productos: [
    {
      type: mongoose.Schema.Types.ObjectId, //hace referencia al id
      ref: "ProductosDeCompra",
      required: true
    },
  ],
  Total: Number,
  Perfil: [
    {
     type: mongoose.Schema.Types.ObjectId, 
      ref: "perfil",
      required: true,
    },
  ],
});
module.exports = mongoose.model("pedidoDeCompras", PedidoSchema);

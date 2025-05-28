const mongoose = require("mongoose");
const PedidoSchema = new mongoose.Schema({
  Fecha: { type: Date, default: Date.now },
  Productos: [
  {
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductosDeCompra",
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    }
  }
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

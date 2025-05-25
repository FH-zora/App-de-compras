const mongoose = require("mongoose");

const PerfilSchema = new mongoose.Schema({
  Nombre: String,
  pedidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pedidoDeCompras",
    },
  ],
});
module.exports = mongoose.model("perfil", PerfilSchema);

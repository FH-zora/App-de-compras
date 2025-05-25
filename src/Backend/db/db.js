const mongoose = require("mongoose");
const mongooseConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/compras");
    console.log("🟢 Servidor conectado ");
  } catch (error) {
    console.error("🔴 Error en la conexion con la DB", error.message);
    process.exit(1);
  }
};
module.exports = mongooseConnect;

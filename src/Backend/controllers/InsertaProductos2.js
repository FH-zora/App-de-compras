const mongoose = require("mongoose");
const DataProductos2 = require("../data/DataProductos2");
const ProductosDeCompra = require("../model/Productos");
const mongooseConnect = require("../db/db");

const insertarDatos2 = async () => {
  await mongooseConnect();
  try {
    await ProductosDeCompra.insertMany(DataProductos2);
    console.log("total de datos", DataProductos2.length);
  } catch (error) {
    console.error(
      "hubo un erro en el archivo de insertar datos de productos en: src/Backend/controllers/InsertarProductos",
      error.message
    );
  } finally {
    mongoose.connection.close();
  }
};
insertarDatos2();

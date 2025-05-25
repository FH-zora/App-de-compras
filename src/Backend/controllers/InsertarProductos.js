const mongoose = require("mongoose");
const DataProductos = require("../data/DataProductos");
const ProductosDeCompra = require("../model/Productos");
const mongooseConnect = require("../db/db");

const insertarDatos = async () => {
  await mongooseConnect();
  try {
    await ProductosDeCompra.insertMany(DataProductos);
    console.log("total de datos", DataProductos.length);
  } catch (error) {
    console.error(
      "hubo un erro en el archivo de insertar datos de productos en: src/Backend/controllers/InsertarProductos",
      error.message
    );
  } finally {
    mongoose.connection.close();
  }
};
insertarDatos();

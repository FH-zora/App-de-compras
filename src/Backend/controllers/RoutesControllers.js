const perfil = require("../model/PerfilSchema");
const ProductosDeCompra = require("../model/Productos");

//! Lee los productos
const leerProductos = async (req, res) => {
  try {
    const productos = await ProductosDeCompra.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};
//! Lectura de los perfiles
const leerPerfiles = async (req, res) => {
  try {
    const perfiles = await perfil.find();
    res.status(200).json(perfiles);
  } catch (error) {
    res.status(500).json({ error: "error al obtener los perfiles" });
  }
};

//! eliminacion de perfil
const eliminacionPerfil = async (req, res) => {
  await perfil.findByIdAndDelete(req.params.id);
  res.json({ message: "User delete" });
};

//! crear nuevo perfil
const nuevoPerfil = async (req, res) => {
  try {
    const newProfile = new perfil(req.body);
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//! agregar pedido a un perfil especifico
const agregarPedidoAPerfil = async (req, res) => {
  try {
    const perfilExistente = await perfil.findById(req.params.id);
    if (!perfilExistente) {
      return res.status(404).json({ error: "Perfil no encontrado" });
    }
    perfilExistente.pedidos.push(req.body);
    await perfilExistente.save();
    res.status(200).json(perfilExistente);
    s;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  agregarPedidoAPerfil,
  nuevoPerfil,
  leerProductos,
  leerPerfiles,eliminacionPerfil
};

const perfil = require("../model/PerfilSchema");
const ProductosDeCompra = require("../model/Productos");
const pedidoDeCompras = require("../model/Pedido");
//! Lectura de productos
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
    const perfiles = await perfil.find(); // Lee todos los perfiles
    res.status(200).json(perfiles);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los perfiles" });
  }
};
//! Lectura de pedidos
const leerPedidos = async (req, res) => {
 try {
    const { id } = req.params;

    const perfilConPedidos = await perfil.findById(id).populate({
      path: "pedidos", // campo del perfil
      populate: { path: "Productos" } // campo del pedido
    });

    if (!perfilConPedidos) {
      return res.status(404).json({ error: "Perfil no encontrado" });
    }

    res.status(200).json(perfilConPedidos.pedidos); // devuelve solo los pedidos
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los pedidos del perfil" });
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
//!obtener el id del perfil
const obtenerIdDelPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const perfilEncontrado = await perfil.findById(id);
    if (!perfilEncontrado) {
      return res.status(404).json({ error: "El perfil no ha sido encontrado" });
    }
    res.status(200).json(perfilEncontrado);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al buscar el perfil: " + error.message });
  }
};

//! agregar pedido a un perfil especifico
const agregarPedidoAPerfil = async (req, res) => {
  try {
    const perfilExistente = await perfil.findById(req.params.id);
    if (!perfilExistente) {
      return res.status(404).json({ error: "Perfil no existe" });
    }
    const { Productos, Total } = req.body;

    if (!Productos || Productos.length === 0) {
      return res.status(400).json({ error: "No se han enviado productos" });
    }
    //* crear el nuevo pedido
    const nuevoPedido = new pedidoDeCompras({
      Productos,
      Total,
      Perfil: [req.params.id],
    });
    await nuevoPedido.save();
    perfilExistente.pedidos.push(nuevoPedido._id);
    await perfilExistente.save();
    res.status(200).json(perfilExistente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  agregarPedidoAPerfil,
  nuevoPerfil,
  leerProductos,
  leerPerfiles,
  eliminacionPerfil,
  obtenerIdDelPerfil,
  leerPedidos,
};

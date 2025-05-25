const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());

//rutas aca
app.use("/perfiles/compras", require("./routes/Routes"));
module.exports = app;

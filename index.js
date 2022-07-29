const express = require("express");
const debug = require("debug")("app:main");

// Modulos
const { Config } = require("./src/config/index");
const { ProductsAPI } = require("./src/products/index");
const { UserAPI } = require("./src/users/index");
const { IndexAPI, NotFoundAPI } = require("./src/index/index");

const app = express();

app.use(express.json());

IndexAPI(app);
ProductsAPI(app);
UserAPI(app);
NotFoundAPI(app);

app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`);
});

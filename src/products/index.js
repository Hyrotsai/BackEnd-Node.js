const express = require("express");

const { ProductsController } = require("./controler");

const router = express.Router();

module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts)
    .get("/report", ProductsController.generateReport)
    .get("/:id", ProductsController.getProduct)
    .post("/", ProductsController.createProducts)
    .post("/:id", ProductsController.updateProduct)
    .delete("/:id", ProductsController.deleteProduct);

  app.use("/api/products", router);
};

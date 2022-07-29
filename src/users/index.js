const express = require("express");

const { UsersController } = require("./controler");

const router = express.Router();

module.exports.UserAPI = (app) => {
  router
    .get("/", UsersController.getUsers)
    .get("/:id", UsersController.getUser)
    .post("/", UsersController.createUsers)
    .post("/:id", UsersController.updateUser)
    .delete("/:id", UsersController.deleteUser);

  app.use("/api/users", router);
};

const route = require("express").Router();
const UserController = require("../controllers/UserController");

route.get("/", UserController.getAllUsers);
route.get("/account/:id", UserController.getUserById);
route.post("/register", UserController.register);
route.post("/login", UserController.login);
route.delete("/delete/:id", UserController.delete);
route.put("/update/:id", UserController.update);
module.exports = route;
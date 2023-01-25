const route = require("express").Router();
const ItemController = require("../controllers/ItemController");

route.get("/", ItemController.getAllItems);
route.get("/info/:id", ItemController.getItemById);
route.post("/create", ItemController.create);
route.delete("/delete/:id", ItemController.delete);
route.put("/update/:id", ItemController.update);
module.exports = route;

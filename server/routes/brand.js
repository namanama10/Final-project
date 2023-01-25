const route = require("express").Router();
const BrandController = require("../controllers/BrandController");

route.get("/", BrandController.getAllBrands);
route.get("/info/:id", BrandController.getBrandById);
route.post("/create", BrandController.create);
route.delete("/delete/:id", BrandController.delete);
route.put("/update/:id", BrandController.update);
module.exports = route;
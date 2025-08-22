let express= require("express");
let route=express.Router();
let ProductCtrl=require("../controller/ProductCtrl");


//product API's
route.post("/addProd",ProductCtrl.addProduct);

//add product by category
route.get("/products/:category_id", ProductCtrl.getProductsByCategory);

//cart
route.get("/:id", ProductCtrl.getProductById);



route.get("/ViewAllProud",ProductCtrl.ViewAllProud);
route.post("/UpdateProd",ProductCtrl.UpdateProd);
route.post("/DeleteProd",ProductCtrl.DeleteProduct)

module.exports = route;

let express= require("express");
let route=express.Router();
let ProductCtrl=require("../controller/ProductCtrl");


//product API's
route.post("/addProd",ProductCtrl.addProduct);

//view all products
route.get("/productsview", ProductCtrl.getAllProducts);

//add product by category
route.get("/products/:category_id", ProductCtrl.getProductsByCategory);

//cart
route.get("/:id", ProductCtrl.getProductById);


route.put("/productsview/:id", ProductCtrl.UpdateProd);   // update
route.delete("/productsview/:id", ProductCtrl.DeleteProduct);



module.exports = route;

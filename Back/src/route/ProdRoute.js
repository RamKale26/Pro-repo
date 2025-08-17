let express= require("express");
let route=express.Router();
let ProductCtrl=require("../controller/ProductCtrl");


//product API's
route.post("/addProd",ProductCtrl.addProduct);
route.get("/ViewAllProud",ProductCtrl.ViewAllProud);
route.post("/UpdateProd",ProductCtrl.UpdateProd);
route.post("/DeleteProd",ProductCtrl.DeleteProduct)

module.exports = route;

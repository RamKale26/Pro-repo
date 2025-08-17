let express= require("express");
let CategoryController=require("../controller/CategoryCtrl");
let route=express.Router();

route.post("/Addcategory",CategoryController.Addcategory);
route.get("/getAllCategory",CategoryController.viewAllCategory);
route.post("/UpdateCategory",CategoryController.UpdateCategory);
route.post("/DeleteCategory",CategoryController.DeleteCategory)


module.exports = route;
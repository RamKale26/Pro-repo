let productModel = require("../models/ProductModel");

exports.addProduct = (req, res) => {
    let { Name, description, price, image_url ,category_id } = req.body;
    productModel.addProduct(Name, description, price, image_url ,category_id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
}


exports.ViewAllProud = (req, res) => {
    productModel.viewAllProduct()
       .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
};


exports.UpdateProd=(req,res)=>{
    let {product_id, name, description, price, image_url ,category_id } = req.body;
    productModel.UpdateProd(name,description,price,image_url,category_id,product_id)
    .then((result)=>{
        console.log(result);
        
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    });
}



exports.DeleteProduct=(req,res)=>{
    let {product_id}=req.body;
    productModel.DeleteProd(product_id)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    });
}
























































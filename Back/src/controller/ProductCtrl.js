let productModel = require("../models/ProductModel");


exports.addProduct = (req, res) => {
    let { Name, description, price, image_url, category_id } = req.body;
    // console.log(" Incoming Data:", req.body);
    // check mandatory fields
    if (!Name || !price) {
        return res.status(400).send({ error: "Name and Price are required" });
    }
    productModel.addProduct(Name, description, parseInt(price), image_url, category_id)
        .then((result) => {
            res.status(200).send({ message: result });
        })
        .catch((err) => {
            console.error("❌ Add Product SQL Error:", err);
            res.status(500).send({ error: err });
        });
};

//add product by category
exports.getProductsByCategory = (req, res) => {
  const category_id = parseInt(req.params.category_id);
//   console.log("Incoming category_id:", category_id);
  productModel.getProductsByCategory(category_id)
    .then((products) => {
    //   console.log(" Products from DB:", products);
      res.json(products);
    })
    .catch((err) => {
     console.log("❌ Error fetching products:", err);
      res.status(500).json({ error: "Server Error" });
    });
};

//cart products
exports.getProductById = (req, res) => {
  const { id } = req.params;
  productModel
    .findProductById(id)
    .then((product) => {
      if (!product) return res.status(404).json({ message: "Product not found" });
      res.json(product);
    })
    .catch((err) => res.status(500).json({ error: err }));
};




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

























































const { name } = require("ejs");
let db=require("../../db.js");


exports.addProduct = (Name, description, price, image_url, category_id) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO products (Name, description, price, image_url, category_id) VALUES (?, ?, ?, ?, ?)",
            [Name, description, price, image_url, category_id],
            (err, result) => {
                if (err) {
                    console.log("❌ SQL Error:", err.sqlMessage);
                    reject(err.sqlMessage);
                } else {
                    resolve("✅ Product added successfully");
                }
            }
        );
    });
};

    exports.getProductsByCategory = (category_id) => {
    return new Promise((resolve, reject) => {
        db.query(
        "SELECT * FROM products WHERE category_id = ?",
        [category_id],
        (err, results) => {
            if (err) {
            console.log("❌ SQL Error:", err.sqlMessage);
            reject(err.sqlMessage);
            } else {
            resolve(results);
            }
        }
        );
    });
    };  


//cart products
exports.findProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products WHERE product_id = ?", [id], (err, results) => {
      if (err) reject(err.sqlMessage);
      else resolve(results[0]); // return single product
    });
  });
};




exports.viewAllProduct = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM products",(err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);  
            }
        });
    });
};

// exports.UpdateProd=(name,description,price,image_url,category_id,product_id)=>{
//     return new Promise((resolve, reject)=>{
//         db.query("UPDATE products set name = ?, description = ?, price = ?, image_url = ?, category_id = ? where product_id = ?",[name,description,price,image_url,category_id,product_id],(err,result)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(result);
//             }
//         });
//     });
// }
exports.UpdateProd = (name, description, price, image_url, category_id, product_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE products SET name = ?, description = ?, price = ?, image_url = ?, category_id = ? WHERE product_id = ?",
      [name, description, price, image_url, category_id, product_id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

exports.DeleteProd=(product_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from products where product_id = ?",[ product_id],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("Product delete Sccessfully..."+result);
            }
        });
    });
}

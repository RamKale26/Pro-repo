
const { name } = require("ejs");
let db=require("../../db.js");


exports.addProduct = (name, description, price, image_url, category_id) =>{
    return new Promise((resolve, reject)=>{
        db.query("insert into products (name, description, price, image_url, category_id) values (?, ?, ?, ?, ?)",[name, description, price, image_url, category_id],(err, result) => {
            if(err){
                reject(err);
            }
            else{
                resolve("Product added successfully");
            }
        })
    });
}

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

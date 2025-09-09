
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
                    resolve("Product added successfully");
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
            console.log("SQL Error:", err.sqlMessage);
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
  return new Promise((resolve, reject) => {  //product-id  
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
      if (err) reject(err.sqlMessage);
      else resolve(results[0]); // return single product
    });
  });
};



// view all products
// exports.viewAllProducts = () => {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM products", (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// };




// models/ProductModel.js

// exports.viewAllProducts = () => {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM products", (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// };

//const db = require("../config/db");

exports.viewAllProducts = () => {
  return new Promise((resolve, reject) => {
   db.query("select *from products",(err, result)=>{
    if(err){
      return reject(err);
    }
    else{
      return resolve(result);
    }
   })
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
// exports.UpdateProd = (name, description, price, image_url, category_id, id) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "UPDATE products SET name = ?, description = ?, price = ?, image_url = ?, category_id = ? WHERE id = ?",
//       [name, description, price, image_url, category_id, id],
//       (err, result) => {
//         if (err) reject(err);
//         else resolve(result);
//       }
//     );
//   });
// };


exports.UpdateProd = (Name, description, price, image_url, category_id, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE products SET Name = ?, description = ?, price = ?, image_url = ?, category_id = ? WHERE id = ?",
      [Name, description, price, image_url, category_id, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};


exports.DeleteProd = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};




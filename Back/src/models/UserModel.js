// let db=require("../../db.js");
// let bcrypt = require("bcrypt");

// exports.AddUser = (Name, Email, password, Date, role) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "INSERT INTO users (Name, Email, password, Date, role) VALUES (?, ?, ?, ?, ?)",
//       [Name, Email, password, Date, role],
//       (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve({ message: "Registered Successfully" });
//         }
//       }
//     );
//   });
// };







// //login admin
// // exports.loginadmin = (Email, password) => {
// //   return new Promise((resolve, reject) => {
// //     db.query(
// //       "SELECT id, Email, password, role FROM users WHERE Email = ? AND password = ? AND role = 'admin'",
// //       [Email, password],
// //       (err, results) => {
// //         if (err) reject(err);
// //         else resolve(results);
// //       }
// //     );
// //   });
// // };

// // login admin (fetch only by Email + role)
// // exports.loginadmin = (Email) => {
// //   return new Promise((resolve, reject) => {
// //     db.query(
// //       "SELECT id, Email, password, role FROM users WHERE Email = ? AND role = 'admin'",
// //       [Email],
// //       (err, results) => {
// //         if (err) reject(err);
// //         else resolve(results);
// //       }
// //     );
// //   });
// // };


// // models/UserModel.js
// exports.loginadmin = (Email) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT id, Email, password, role FROM users WHERE Email = ? AND role = 'admin'",
//       [Email],
//       (err, results) => (err ? reject(err) : resolve(results))
//     );
//   });
// };




// //login user by email and password

// // exports.loginUserprofile = (Email, password) => {
// //     return new Promise((resolve, reject) => {
// //         db.query(
// //             "SELECT Email, password, role FROM users WHERE Email = ? AND password = ? AND role = 'user'",
// //             [Email, password],
// //             (err, results) => {
// //                 if (err) {
// //                     reject(err);
// //                 } else {
// //                     resolve(results);
// //                 }
// //             }
// //         );
// //     });
// // };

// //login user
// // models/UserModel.js
// exports.loginUserprofile = (Email) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT id, Name, Email, password, role FROM users WHERE Email = ? AND role = 'user'",
//       [Email],
//       (err, results) => (err ? reject(err) : resolve(results))
//     );
//   });
// };
















// //view users
// exports.getAllUsers = () => {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM users", (err, results) => {
//       if (err) reject(err);
//       else resolve(results);
//     });
//   });
// };


// //delete users
// exports.DeleteUser = (user_id) => {
//   return new Promise((resolve, reject) => {
//     db.query("DELETE FROM users WHERE id = ?", [user_id], (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({ message: "User Deleted Successfully", affectedRows: result.affectedRows });
//       }
//     });
//   });
// };  


// // ========== Order Manage======
// // ✅ Create Order
// exports.createOrder = (orderData, callback) => {
//   const { user_id, product_id, address, payment_method } = orderData;

//   const sql = `
//     INSERT INTO orders (user_id, product_id, address, payment_method, status)
//     VALUES (?, ?, ?, ?, 'Pending')
//   `;

//   db.query(sql, [user_id, product_id, address, payment_method], callback);
// };

// // ✅ Get Orders by User ID
// exports. getOrdersByUser = (userId, callback) => {
//   const sql = "SELECT * FROM orders WHERE user_id = ?";
//   db.query(sql, [userId], callback);
// };



let db=require("../../db.js");
let bcrypt = require("bcrypt");

exports.AddUser = (Name, Email, password, Date, role) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (Name, Email, password, Date, role) VALUES (?, ?, ?, ?, ?)",
      [Name, Email, password, Date, role],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: "Registered Successfully" });
        }
      }
    );
  });
};







//login admin
// exports.loginadmin = (Email, password) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT id, Email, password, role FROM users WHERE Email = ? AND password = ? AND role = 'admin'",
//       [Email, password],
//       (err, results) => {
//         if (err) reject(err);
//         else resolve(results);
//       }
//     );
//   });
// };

// login admin (fetch only by Email + role)
// exports.loginadmin = (Email) => {
//   return new Promise((resolve, reject) => {
//     db.query(
//       "SELECT id, Email, password, role FROM users WHERE Email = ? AND role = 'admin'",
//       [Email],
//       (err, results) => {
//         if (err) reject(err);
//         else resolve(results);
//       }
//     );
//   });
// };


// models/UserModel.js
exports.loginadmin = (Email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT id, Email, password, role FROM users WHERE Email = ? AND role = 'admin'",
      [Email],
      (err, results) => (err ? reject(err) : resolve(results))
    );
  });
};




//login user by email and password

// exports.loginUserprofile = (Email, password) => {
//     return new Promise((resolve, reject) => {
//         db.query(
//             "SELECT Email, password, role FROM users WHERE Email = ? AND password = ? AND role = 'user'",
//             [Email, password],
//             (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             }
//         );
//     });
// };

//login user
// models/UserModel.js
exports.loginUserprofile = (Email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT id, Name, Email, password, role FROM users WHERE Email = ? AND role = 'user'",
      [Email],
      (err, results) => (err ? reject(err) : resolve(results))
    );
  });
};
















//view users
exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};


//delete users
exports.DeleteUser = (user_id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE id = ?", [user_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "User Deleted Successfully", affectedRows: result.affectedRows });
      }
    });
  });
};  



// ✅ Update user profile (without password)
exports.updateUserProfile = (id, Name, Email, Date, role) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET Name=?, Email=?, Date=?, role=? WHERE id=?";
    db.query(sql, [Name, Email, Date, role, id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

// ✅ Update password (hashed)
exports.updateUserPassword = async (id, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET password=? WHERE id=?";
    db.query(sql, [hashedPassword, id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};



// ========== Order Manage======
// ✅ Create Order
exports.createOrder = (orderData, callback) => {
  const { user_id, product_id, address, payment_method } = orderData;
  const ensureTableSql = `
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      product_id INT NOT NULL,
      address VARCHAR(512) NOT NULL,
      payment_method VARCHAR(32) NOT NULL,
      status VARCHAR(32) NOT NULL DEFAULT 'Pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.query(ensureTableSql, (createErr) => {
    if (createErr) return callback(createErr);
    const insertSql = `
      INSERT INTO orders (user_id, product_id, address, payment_method, status)
      VALUES (?, ?, ?, ?, 'Pending')
    `;
    db.query(insertSql, [user_id, product_id, address, payment_method], callback);
  });
};

// ✅ Get Orders by User ID
exports. getOrdersByUser = (userId, callback) => {
  const sql = "SELECT * FROM orders WHERE user_id = ?";
  db.query(sql, [userId], callback);
};

// ================== Update user photo =====================
exports.updateUserPhoto = (userId, fileName, callback) => {
  const sql = "UPDATE users SET photo = ? WHERE id = ?";
  db.query(sql, [fileName, userId], callback);
};



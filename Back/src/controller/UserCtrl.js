// let UserModel = require("../models/UserModel.js");
// let express = require("express");
// let router = express.Router();
// const bcrypt = require("bcrypt");
// require('dotenv').config();
// const jwt = require("jsonwebtoken");
// const { signToken } = require('../Utils/jwthelper.js');

// const SECRET_KEY = process.env.JWT_SECRET;   
// const EXPIRES_IN = process.env.JWT_EXPIRES; 




// //add jwt token by users
// exports.loginuser = (req, res) => {
//   const { Email, password } = req.body;
//   UserModel.loginUserprofile(Email, password)
//     .then((users) => {
//       if (users.length > 0) {
//         const jwt = require("jsonwebtoken");
//         const token = jwt.sign(
//           { id: users[0].id, role: users[0].role },
//           process.env.JWT_SECRET,
//           { expiresIn: process.env.JWT_EXPIRES || "1h"}
//         );

//         res.status(200).json({
//           message: "login success",
//           user: users[0],
//           token: token, // 👈 send token also
//         });
//       } else {
//         res.status(401).json({ message: "Invalid user email or password" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// };



// //add user
// exports.AddUser = async (req, res) => {
//   try {
//     const { Name, Email, password, Date, role } = req.body;
//     // check all fields
//     if (!Name || !Email || !password || !Date || !role) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await UserModel.AddUser(Name, Email, hashedPassword, Date, role);
//     res.status(200).json({ message: "User added successfully", user: result });
//   } catch (err) {
//     console.error("AddUser error:", err);
//     res.status(500).json({ message: "Error adding user", error: err });
//   }
// };


// //login Admin by email and password with jwt token
// // exports.login = (req, res) => {
// //   const { Email, password } = req.body;

// //   UserModel.loginadmin(Email, password)
// //     .then((users) => {
// //       if (users.length > 0) {
// //         //  Token generate
// //         const token = jwt.sign(
// //           { id: users[0].id, role: users[0].role }, 
// //           process.env.JWT_SECRET || "mysecretkey",  
// //           { expiresIn: "1h" } 
// //         );

// //         res.status(200).json({
// //           message: "Admin login successful",
// //           token,               
// //           user: users[0]
// //         });
// //       } else {
// //         res.status(401).json({ message: "Invalid admin email or password" });
// //       }
// //     })
// //     .catch((err) => {
// //       res.status(500).json({ error: err.message });
// //     });
// // };

// // // login Admin by email and password with jwt token
// // exports.login = async (req, res) => {
// //   const { Email, password } = req.body;

// //   try {
// //     const users = await UserModel.loginadmin(Email);

// //     if (users.length === 0) {
// //       return res.status(401).json({ message: "Invalid admin email or password" });
// //     }

// //     const admin = users[0];

// //     // ✅ compare password with bcrypt
// //     const isMatch = await bcrypt.compare(password, admin.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Invalid admin email or password" });
// //     }

// //     // ✅ generate JWT token
// //     const token = jwt.sign(
// //       { id: admin.id, role: admin.role },
// //       process.env.JWT_SECRET || "mysecretkey",
// //       { expiresIn: "1h" }
// //     );

// //     res.status(200).json({
// //       message: "Admin login successful",
// //       token,
// //       user: { id: admin.id, Email: admin.Email, role: admin.role }
// //     });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // controller/UserCtrl.js
// exports.login = async (req, res) => {
//   const { Email, password } = req.body;

//   try {
//     const users = await UserModel.loginadmin(Email);

//     if (users.length === 0) {
//       return res.status(401).json({ message: "Admin not found" });
//     }

//     const admin = users[0];

//     // Compare plain password with hashed one
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid admin email or password" });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: admin.id, role: admin.role },
//       process.env.JWT_SECRET || "mysecretkey",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Admin login successful",
//       token,
//       user: admin
//     });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



// //login by user email and pass
// // this code commit on the reasons of jwt token add on top

// // exports.loginuser = (req, res) => {
// //   const { Email, password } = req.body; 
// //   UserModel.loginUserprofile(Email, password)
// //     .then((users) => {
// //       if (users.length > 0) {
// //         res.status(200).json({
// //          message: "login success",
// //           user: users[0],
// //         });
// //       } else {
// //         res.status(401).json({ message: "Invalid user email or password" });
// //       }
// //     })
// //     .catch((err) => {
// //       res.status(500).json({ error: err.message });
// //     });
// // };













// //View users table in admin dash
// exports.getUsers = (req, res) => {
//   UserModel.getAllUsers()
//     .then(users => res.json(users))
//     .catch(err => res.status(500).send(err));
// };



// //delete user
// exports.deleteUser = (req, res) => {
//   let user_id = req.params.id; // Get from URL params

//   if (!user_id) {
//     return res.status(400).send("user_id is required");
//   }

//   UserModel.DeleteUser(user_id)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// };



// // ============ Manage Orders =======================



// exports.placeOrder = (req, res) => {
//   const { user_id, product_id, address, payment_method } = req.body;

//   if (!user_id || !product_id || !address || !payment_method) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   UserModel.createOrder(req.body, (err, result) => {
//     if (err) return res.status(500).json({ error: err });

//     res.status(201).json({
//       message: "Order placed successfully",
//       orderId: result.insertId,
//     });
//   });
// };

// // ✅ Get User Orders
// exports. getUserOrders = (req, res) => {
//   const { userId } = req.params;

// UserModel.getOrdersByUser(userId, (err, results) => {
//     if (err) return res.status(500).json({ error: err });

//     res.status(200).json(results);
//   });
// };


let UserModel = require("../models/UserModel.js");
let express = require("express");
let router = express.Router();
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { signToken } = require('../Utils/jwthelper.js');

const SECRET_KEY = process.env.JWT_SECRET;   
const EXPIRES_IN = process.env.JWT_EXPIRES; 




//add jwt token by users (with bcrypt password verification)
exports.loginuser = async (req, res) => {
  const { Email, password } = req.body;
  try {
    const users = await UserModel.loginUserprofile(Email);
    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid user email or password" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid user email or password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "1h" }
    );

    const safeUser = { id: user.id, Name: user.Name, Email: user.Email, role: user.role };
    return res.status(200).json({ message: "login success", user: safeUser, token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



//add user
exports.AddUser = async (req, res) => {
  try {
    const { Name, Email, password, Date, role } = req.body;
    // check all fields
    if (!Name || !Email || !password || !Date || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await UserModel.AddUser(Name, Email, hashedPassword, Date, role);
    res.status(200).json({ message: "User added successfully", user: result });
  } catch (err) {
    console.error("AddUser error:", err);
    res.status(500).json({ message: "Error adding user", error: err });
  }
};


//login Admin by email and password with jwt token
// exports.login = (req, res) => {
//   const { Email, password } = req.body;

//   UserModel.loginadmin(Email, password)
//     .then((users) => {
//       if (users.length > 0) {
//         //  Token generate
//         const token = jwt.sign(
//           { id: users[0].id, role: users[0].role }, 
//           process.env.JWT_SECRET || "mysecretkey",  
//           { expiresIn: "1h" } 
//         );

//         res.status(200).json({
//           message: "Admin login successful",
//           token,               
//           user: users[0]
//         });
//       } else {
//         res.status(401).json({ message: "Invalid admin email or password" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// };

// // login Admin by email and password with jwt token
// exports.login = async (req, res) => {
//   const { Email, password } = req.body;

//   try {
//     const users = await UserModel.loginadmin(Email);

//     if (users.length === 0) {
//       return res.status(401).json({ message: "Invalid admin email or password" });
//     }

//     const admin = users[0];

//     // ✅ compare password with bcrypt
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid admin email or password" });
//     }

//     // ✅ generate JWT token
//     const token = jwt.sign(
//       { id: admin.id, role: admin.role },
//       process.env.JWT_SECRET || "mysecretkey",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Admin login successful",
//       token,
//       user: { id: admin.id, Email: admin.Email, role: admin.role }
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// controller/UserCtrl.js
exports.login = async (req, res) => {
  const { Email, password } = req.body;

  try {
    const users = await UserModel.loginadmin(Email);

    if (users.length === 0) {
      return res.status(401).json({ message: "Admin not found" });
    }

    const admin = users[0];

    // Compare plain password with hashed one
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid admin email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, role: admin.role },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Admin login successful",
      token,
      user: admin
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



//login by user email and pass
// this code commit on the reasons of jwt token add on top

// exports.loginuser = (req, res) => {
//   const { Email, password } = req.body; 
//   UserModel.loginUserprofile(Email, password)
//     .then((users) => {
//       if (users.length > 0) {
//         res.status(200).json({
//          message: "login success",
//           user: users[0],
//         });
//       } else {
//         res.status(401).json({ message: "Invalid user email or password" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// };













//View users table in admin dash
exports.getUsers = (req, res) => {
  UserModel.getAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).send(err));
};



//delete user
exports.deleteUser = (req, res) => {
  let user_id = req.params.id; // Get from URL params

  if (!user_id) {
    return res.status(400).send("user_id is required");
  }

  UserModel.DeleteUser(user_id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


// ✅ Update profile
exports.updateProfile = (req, res) => {
  const { id, Name, Email, Date, role } = req.body;
  if (!id || !Name || !Email || !Date || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }
  UserModel.updateUserProfile(id, Name, Email, Date, role)
    .then(() => res.status(200).json({ message: "Profile updated" }))
    .catch(err => res.status(500).json({ error: err.message }));
};

// ✅ Update password
exports.updatePassword = async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({ message: "User ID and password required" });
  }
  try {
    await UserModel.updateUserPassword(id, password);
    res.status(200).json({ message: "Password updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// ============ Manage Orders =======================



// Email sending removed

exports.placeOrder = (req, res) => {
  const { user_id, product_id, address, payment_method, email } = req.body;

  if (!user_id || !product_id || !address || !payment_method) {
    return res.status(400).json({ error: "All fields are required" });
  }

  UserModel.createOrder({ user_id, product_id, address, payment_method }, (err, result) => {
    if (err) return res.status(500).json({ error: err });

    return res.status(201).json({
      message: "Order placed successfully",
      orderId: result.insertId,
    });
  });
};

// ================== Profile Photo Upload =====================
exports.updateUserPhoto = (req, res) => {
  const userId = req.params.id;
  if (!req.file) {
    return res.status(400).json({ message: "No photo uploaded" });
  }
  const fileName = req.file.filename;
  UserModel.updateUserPhoto(userId, fileName, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(200).json({ message: "Photo updated", file: fileName });
  });
};

// ✅ Get User Orders
exports. getUserOrders = (req, res) => {
  const { userId } = req.params;

UserModel.getOrdersByUser(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    res.status(200).json(results);
  });
};
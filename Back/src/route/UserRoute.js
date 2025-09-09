// let express= require("express");
// let controlUser = require("../controller/UserCtrl.js");

// let router=express.Router();
// const authenticateToken = require("../middleware/auth");

// const authenticate = require("../middleware/auth");
// // router.get("/products", authenticate, controlUser.getProducts);


// router.post("/AddUser", controlUser.AddUser);



// //login by admin
// router.post("/loginadmin", controlUser.login);

// //view users
// router.get("/users",controlUser.getUsers);

// // router.post("/DeleteUser",controlUser.deleteUser);
// router.delete("/users/:id", controlUser.deleteUser);




// //    28=Aug update


// router.get('/users', authenticateToken, (req, res) => {
//   // req.user is available here
//   res.json({ message: 'This is a protected route', user: req.user });
// });

// //user loginn by email and pass
//     router.post("/userlogin",controlUser.loginuser);



// //============ Orders Manage===========




// // ✅ Place new order
// router.post("/place-order", controlUser.placeOrder);

// // ✅ Get user orders
// router.get("/user-orders/:userId", controlUser.getUserOrders);













// module.exports = router;






// let express= require("express");
// let controlUser = require("../controller/UserCtrl.js");
// let upload = require("../middleware/upload.js");

// let router=express.Router();
// const authenticateToken = require("../middleware/auth");

// const authenticate = require("../middleware/auth");
// // router.get("/products", authenticate, controlUser.getProducts);


// router.post("/AddUser", controlUser.AddUser);

// // Update user photo only
// router.post("/users/:id/photo", upload.single("photo"), controlUser.updateUserPhoto);



// //login by admin
// router.post("/loginadmin", controlUser.login);

// //view users
// router.get("/users",controlUser.getUsers);

// // router.post("/DeleteUser",controlUser.deleteUser);
// router.delete("/users/:id", controlUser.deleteUser);




// //    28=Aug update


// router.get('/users', authenticateToken, (req, res) => {
//   // req.user is available here
//   res.json({ message: 'This is a protected route', user: req.user });
// });

// //user loginn by email and pass
//     router.post("/userlogin",controlUser.loginuser);



//     //today update update profile and password
// router.post("/users/update-profile", UserCtrl.updateProfile);
// router.post("/users/change-password", UserCtrl.updatePassword);
// router.post("/users/:id/photo", upload.single("photo"), UserCtrl.updateUserPhoto);



// //============ Orders Manage===========




// // ✅ Place new order
// router.post("/place-order", controlUser.placeOrder);

// // ✅ Get user orders
// router.get("/user-orders/:userId", controlUser.getUserOrders);













// module.exports = router;




let express = require("express");
let controlUser = require("../controller/UserCtrl.js"); // ✅ keep naming consistent
let upload = require("../middleware/upload.js");

let router = express.Router();
const authenticateToken = require("../middleware/auth");

// router.get("/products", authenticate, controlUser.getProducts);

router.post("/AddUser", controlUser.AddUser);

// Update user photo only
router.post("/users/:id/photo", upload.single("photo"), controlUser.updateUserPhoto);

// login by admin
router.post("/loginadmin", controlUser.login);

// view users
router.get("/users", controlUser.getUsers);

// delete user
router.delete("/users/:id", controlUser.deleteUser);

// 28-Aug update
router.get("/users", authenticateToken, (req, res) => {
  // req.user is available here
  res.json({ message: "This is a protected route", user: req.user });
});

// user login by email and pass
router.post("/userlogin", controlUser.loginuser);

// ✅ today update: update profile and password
router.post("/users/update-profile", controlUser.updateProfile);
router.post("/users/change-password", controlUser.updatePassword);

// photo update
router.post("/users/:id/photo", upload.single("photo"), controlUser.updateUserPhoto);

// ============ Orders Manage ===========

// ✅ Place new order
router.post("/place-order", controlUser.placeOrder);

// ✅ Get user orders
router.get("/user-orders/:userId", controlUser.getUserOrders);

module.exports = router;

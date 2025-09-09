// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const router = express.Router();

// // Storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "..", "uploads")); // ../uploads
//   },
//   filename: function (req, file, cb) {
//     const safeName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
//     cb(null, safeName);
//   },
// });

// // Optional: file filter + size limit
// const fileFilter = (req, file, cb) => {
//   const allowed = ["image/jpeg", "image/png", "image/webp"];
//   allowed.includes(file.mimetype) ? cb(null, true) : cb(new Error("Invalid file type"), false);
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
// });

// // Controller import
// const productController = require("../controllers/productController");

// // Route: multipart/form-data with single file field "image"
// router.post("/addProduct", upload.single("image"), productController.addProduct);

// module.exports = router;

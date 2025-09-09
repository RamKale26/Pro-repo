let express = require("express");
let bodyParser = require("body-parser");
let db = require("../db");
let router = require("./route/UserRoute.js");
let prodrouter = require("../src/route/ProdRoute.js");
let CategoryController = require("../src/route/CategoryRoute.js");

let cors = require("cors");
let path = require("path");

require("dotenv").config();

let app = express();
//app.use("/api", ProdRoute);

// Middlewares
app.use(cors()); // allow frontend requests
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static("public")); 
    app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

    // View engine
    app.set("view engine", "ejs");

// Routes
app.use("/", router);
app.use("/",prodrouter);
app.use("/", CategoryController);

// app.use("/api/orders", OrderRoutes);
// app.use("/", this.route);

module.exports = app;

let UserModel = require("../models/UserModel.js");
let express = require("express");
let router = express.Router();

//add user

exports.AddUser = (req, res) => {
  const { Name, Email, password, Date, role } = req.body;
  UserModel.AddUser(Name, Email, password, Date, role)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding user", error: err });
    });
};

//login Admin by email and password
exports.login = (req, res) => {
  const { Email, password } = req.body; 
  UserModel.loginUser(Email, password)
    .then((users) => {
      if (users.length > 0) {
        res.status(200).json({
          message: "Admin login successful",
          user: users[0],
        });
      } else {
        res.status(401).json({ message: "Invalid admin email or password" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};


//View users table in admin dash
exports.getUsers = (req, res) => {
  UserModel.getAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).send(err));
};



//delete user
exports.deleteUser = (req, res) => {
  let user_id = req.params.id; // ✅ Get from URL params

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





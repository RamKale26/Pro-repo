import React, { useState } from "react";
import "../style/AdminLogin.css";
import Prodservice from "../Services/Prodservice";
import { useNavigate } from "react-router-dom";

let AdminLogin = () => {
  let [Email, setEmail] = useState("");

  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();

    Prodservice.adminLogin(Email, password)
      .then((res) => {
        alert(res.data.message);
        if (res.data.user.role === "admin") //admin role
        {
          navigate("/adminpage");  
        }
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Email" placeholder="Enter Email" value={Email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required />

        <input type="password" name="password"  placeholder="Enter Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

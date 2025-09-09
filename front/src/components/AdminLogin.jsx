
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
        if (res.data.token) { 
          localStorage.setItem("admintoken", res.data.token);
          localStorage.setItem("admin", JSON.stringify(res.data.user));

          alert(res.data.message);

          if (res.data.user.role === "admin") {
            navigate("/adminpage");  
          }
        } else {
          alert("Token not received!");
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
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row align-items-center min-vh-100">
        {/* Photo / Illustration Section */}
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div
            className="h-100 w-100"
            style={{
              backgroundImage: "url(/vite.svg)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "50vh"
            }}
            aria-label="Admin login illustration"
          />
        </div>

        {/* Form Section */}
        <div className="col-lg-6 d-flex justify-content-center py-4 py-lg-0">
          <div className="card shadow border-0" style={{ maxWidth: 420, width: "100%" }}>
            <div className="card-body p-4">
              <div className="text-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                  <i className="bi bi-shield-lock text-primary" style={{ fontSize: 28 }}></i>
                </div>
              </div>
              <h3 className="text-center mb-3">Admin Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control" type="email" placeholder="admin@example.com" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <input className="form-control" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberAdmin" />
                    <label className="form-check-label" htmlFor="rememberAdmin">Remember me</label>
                  </div>
                  <a href="#" className="small text-decoration-none">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;


import React, { useState } from "react";
import Sidebar from "../ADDMIN/Sidebar";
import ManageUsers from "../ADDMIN/ManageUsers";
import ManageProducts from "../ADDMIN/ManageProducts";
import AddUserForm from "../ADDMIN/AddUserFrom";
import AddProduct from "../ADDMIN/AddProduct";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [section, setSection] = useState("dashboard");

  return (
    <div>
      {/* ---- Navbar (NOT fixed) ---- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-0">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            🛠 Admin Panel
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setSection("dashboard")}
                >
                  Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setSection("users")}
                >
                  Manage Users
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setSection("products")}
                >
                  Manage Products
                </button>
              </li> */}
              {/* <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-danger"
                  onClick={() => alert("Logout clicked")}
                >
                  Logout
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* ---- Main Content with Sidebar ---- */}
      <div className="d-flex">
        <Sidebar onSelect={setSection} />
        <div className="flex-grow-1 p-4">
          {section === "dashboard" && <h1>Welcome to Admin Dashboard</h1>}
          {section === "users" && <ManageUsers />}
          {section === "addUser" && <AddUserForm />}
          {section === "products" && <ManageProducts />}
          {section === "addProduct" && <AddProduct />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

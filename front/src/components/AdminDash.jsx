import React, { useEffect, useState } from "react";
import Sidebar from "../ADDMIN/Sidebar";
import ManageUsers from "../ADDMIN/ManageUsers";
import ManageProducts from "../ADDMIN/ManageProducts";
import AddUserForm from "../ADDMIN/AddUserFrom";
import AddProduct from "../ADDMIN/AddProduct";
import ManageCategory from "../ADDMIN/ManageCategory";
import productUpdate from "../ADDMIN/ProductUpdate";
import Admin from "../ADDMIN/Admin";


import { Link, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const [section, setSection] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    // Support deep-link via hash, e.g. /adminpage#addUser or #addProduct
    const hash = (location.hash || "").replace("#", "");
    if (hash === "users" || hash === "addUser" || hash === "products" || hash === "addProduct" || hash === "categories" || hash === "dashboard") {
      setSection(hash);
    }
  }, [location.hash]);

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
             
            </ul>
          </div>
        </div>
      </nav>

      {/* ---- Main Content with Sidebar ---- */}
      <div className="d-flex">
        <Sidebar onSelect={setSection} />
        <div className="flex-grow-1 p-4">
          {section === "dashboard" && <Admin />}
          {section === "users" && <ManageUsers />}
          {section === "addUser" && <AddUserForm />}
          {section === "products" && <ManageProducts />}
          {section === "addProduct" && <AddProduct />}
          {section === "categories" && <ManageCategory/>}
          {section === "productUpdate" && (
               <productUpdate productId={selectedId} onBack={() => setSection("productsview")} />
)}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

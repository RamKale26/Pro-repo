import React from "react";
import { FaUser, FaBox, FaPlus, FaHome } from "react-icons/fa";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar bg-dark text-white p-3" style={{ minHeight: "100vh", width: "250px" }}>
      <h3 className="text-center mb-4">Admin Panel</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2" onClick={() => onSelect("dashboard")}>
          <span className="nav-link text-white"><FaHome /> Dashboard</span>
        </li>
        <li className="nav-item mb-2" onClick={() => onSelect("users")}>
          <span className="nav-link text-white"><FaUser /> Manage Users</span>
        </li>
        <li className="nav-item mb-2" onClick={() => onSelect("addUser")}>
          <span className="nav-link text-white"><FaPlus /> Add User</span>
        </li>
        <li className="nav-item mb-2" onClick={() => onSelect("products")}>
          <span className="nav-link text-white"><FaBox /> Manage Products</span>
        </li>
        <li className="nav-item mb-2" onClick={() => onSelect("addProduct")}>
          <span className="nav-link text-white"><FaPlus /> Add Product</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

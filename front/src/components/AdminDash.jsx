import React, { useState } from "react";
import Sidebar from "../ADDMIN/Sidebar";
import ManageUsers from "../ADDMIN/ManageUsers";
import ManageProducts from "../ADDMIN/ManageProducts";
import AddUserForm from "../ADDMIN/AddUserFrom";
import AddProduct from "../ADDMIN/AddProduct";


const AdminDashboard = () => {
  const [section, setSection] = useState("dashboard");

  return (
    <div className="d-flex">
      <Sidebar onSelect={setSection} />
      <div className="flex-grow-1 p-4">
        {section === "dashboard" && <h1>Welcome to Admin Dashboard</h1>}
        {section === "users" && <ManageUsers/>}
        {section === "addUser" && <AddUserForm/>}
        {section === "products" && <ManageProducts/>}
        {section ==="products" && <AddProduct/>}
      </div>
    </div>
  );
};

export default AdminDashboard;

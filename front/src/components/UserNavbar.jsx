import React from "react";
import { Link } from "react-router-dom";

function UserNavBar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">User Dashboard</h1>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/userdash">Home</Link></li>
          <li><Link to="/cart">My Cart</Link></li>
          <li><Link to="/offer">Offers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default UserNavBar;

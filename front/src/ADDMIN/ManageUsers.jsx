
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Prodservice from "../Services/Prodservice";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Prodservice.getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  };

  // Delete user
  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      Prodservice.deleteUserById(id)
        .then(() => {
          setUsers(users.filter((u) => u.id !== id));
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
        });
    }
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Date</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td> {/* Sr. No. instead of ID */}
                <td>{u.Name}</td>
                <td>{u.Email}</td>
                <td>{u.password}</td>
                <td>{u.Date}</td>
                <td>{u.role}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm">Update</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;

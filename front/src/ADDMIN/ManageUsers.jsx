



import { useEffect, useState } from "react";
import Prodservice from "../Services/Prodservice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(""); // search state
  const [page, setPage] = useState(1);
  const rowsPerPage = 5; // 5 users per page

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Prodservice.getUsersbytable()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      Prodservice.deleteUserById(id)
        .then(() => setUsers(users.filter((u) => u.id !== id)))
        .catch((err) => console.error("Error deleting user:", err));
    }
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (u) =>
      u.Name.toLowerCase().includes(search.toLowerCase()) ||
      u.Email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Manage Users</h2>

      {/* Search Input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, or role"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to first page on search
          }}
        />
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark text-center">
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((u, index) => (
              <tr key={u.id}>
                <td className="text-center">
                  {(page - 1) * rowsPerPage + index + 1}
                </td>
                <td>{u.Name}</td>
                <td>{u.Email}</td>
                <td>{u.password}</td>
                <td>{u.role}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <Stack spacing={2} direction="row" justifyContent="center" className="mt-3">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          color="primary"
        />
      </Stack>
    </div>
  );
}

export default ManageUsers;


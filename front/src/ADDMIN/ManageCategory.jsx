import React, { useEffect, useState } from "react";
import Prodservice from "../Services/Prodservice";

function ManageCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Fetch all categories
  const fetchCategories = () => {
    Prodservice.getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add Category
  const handleAddCategory = () => {
    if (!newCategory.trim()) return alert("Enter category name");

    Prodservice.addCategory({ Name: newCategory })
      .then((res) => {
        console.log("Category added:", res.data);
        setNewCategory("");
        fetchCategories();
      })
      .catch((err) => console.error(err));
  };

  // Update Category
  const handleUpdateCategory = (id) => {
    if (!editName.trim()) return alert("Enter category name");

    Prodservice.updateCategory({ id, Name: editName })
      .then((res) => {
        console.log("Category updated:", res.data);
        setEditId(null);
        setEditName("");
        fetchCategories();
      })
      .catch((err) => console.error(err));
  };

  // Delete Category
  const handleDeleteCategory = (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;

    Prodservice.deleteCategory({ id })
      .then((res) => {
        console.log("Category deleted:", res.data);
        fetchCategories();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Categories</h2>

      {/* Add Category */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>

      {/* Category List */}
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>
                  {editId === cat.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    cat.Name
                  )}
                </td>
                <td>
                  {editId === cat.id ? (
                    <>
                      <button onClick={() => handleUpdateCategory(cat.id)}>
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditId(null);
                          setEditName("");
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditId(cat.id);
                          setEditName(cat.Name);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDeleteCategory(cat.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No categories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCategory;

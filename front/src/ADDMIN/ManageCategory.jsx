import React, { useEffect, useState } from "react";
import Prodservice from "../Services/Prodservice";

function ManageCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [showList, setShowList] = useState(false);

  // Fetch all categories
  const fetchCategories = () => {
    Prodservice.getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  };

  useEffect(() => {
    if (showList) {
      fetchCategories();
    }
  }, [showList]);

  // Add Category
  const handleAddCategory = () => {
    if (!newCategory.trim()) return alert("Enter category name");

    Prodservice.addCategory({ Name: newCategory })
      .then((res) => {
        console.log("Category added:", res.data);
        alert("Category added successfully");
        setNewCategory("");
        if (showList) {
          fetchCategories();
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add category");
      });
  };

  // Update Category
  const handleUpdateCategory = (id) => {
    if (!editName.trim()) return alert("Enter category name");

    // Backend expects: { category_name, category_id }
    Prodservice.updateCategory({ category_name: editName, category_id: id })
      .then((res) => {
        console.log("Category updated:", res.data);
        alert("Category updated successfully");
        setEditId(null);
        setEditName("");
        if (showList) {
          fetchCategories();
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update category");
      });
  };

  // Delete Category
  const handleDeleteCategory = (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;

    // Backend expects: { category_id }
    Prodservice.deleteCategory({ category_id: id })
      .then((res) => {
        console.log("Category deleted:", res.data);
        alert("Category deleted successfully");
        if (showList) {
          fetchCategories();
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to delete category");
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: 800, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 16 }}>Manage Categories</h2>

      {/* Add Category */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Enter Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleAddCategory} style={{ padding: "8px 12px" }}>Add</button>
      </div>

      {/* Show Categories Toggle */}
      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setShowList((prev) => !prev)}
          style={{ padding: "8px 12px" }}
        >
          {showList ? "Hide Categories" : "Show Categories"}
        </button>
        {showList && (
          <button
            onClick={fetchCategories}
            style={{ padding: "8px 12px", marginLeft: 8 }}
          >
            Refresh
          </button>
        )}
      </div>

      {/* Category List */}
      {showList && (
        <div style={{ overflowX: "auto" }}>
          <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%" }}>
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
                            style={{ marginLeft: 8 }}
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
                          <button onClick={() => handleDeleteCategory(cat.id)} style={{ marginLeft: 8 }}>
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
      )}
    </div>
  );
}

export default ManageCategory;

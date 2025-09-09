import React, { useEffect, useState } from "react";
import Prodservice from "../Services/Prodservice";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Alert, Stack } from "@mui/material";

function ManageCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  // List is always visible now. Use button to refresh.
  const [snack, setSnack] = useState({ open: false, message: "", severity: "success" });

  // Fetch all categories
  const fetchCategories = () => {
    Prodservice.getAllCategories()
      .then((res) => {
        const rows = Array.isArray(res.data) ? res.data : (res.data?.data || []);
        setCategories(rows);
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
        setSnack({ open: true, message: "Category added successfully", severity: "success" });
        setNewCategory("");
        fetchCategories();
      })
      .catch((err) => {
        console.error(err);
        setSnack({ open: true, message: "Failed to add category", severity: "error" });
      });
  };

  // Update Category
  const handleUpdateCategory = (id) => {
    if (!editName.trim()) return alert("Enter category name");

    // Backend expects: { category_name, category_id }
    Prodservice.updateCategory({ category_name: editName, category_id: id })
      .then((res) => {
        console.log("Category updated:", res.data);
        setSnack({ open: true, message: "Category updated successfully", severity: "success" });
        setEditId(null);
        setEditName("");
        fetchCategories();
      })
      .catch((err) => {
        console.error(err);
        setSnack({ open: true, message: "Failed to update category", severity: "error" });
      });
  };

  // Delete Category
  const handleDeleteCategory = (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;

    // Backend expects: { category_id }
    Prodservice.deleteCategory({ category_id: id })
      .then((res) => {
        console.log("Category deleted:", res.data);
        setSnack({ open: true, message: "Category deleted successfully", severity: "success" });
        fetchCategories();
      })
      .catch((err) => {
        console.error(err);
        setSnack({ open: true, message: "Failed to delete category", severity: "error" });
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 16 }}>Manage Categories</h2>

      <Stack direction="row" spacing={1} style={{ marginBottom: 16 }}>
        <TextField
          label="New Category"
          placeholder="Enter Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          fullWidth
          size="small"
        />
        <Button variant="contained" color="primary" onClick={handleAddCategory}>
          Add
        </Button>
        <Button variant="outlined" onClick={fetchCategories}>View All Categories</Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.length > 0 ? (
              categories.map((cat) => {
                const catId = cat.id ?? cat.category_id;
                const catName = cat.Name ?? cat.name ?? cat.category_name;
                const isEditing = editId === catId;
                return (
                  <TableRow key={catId}>
                    <TableCell>{catId}</TableCell>
                    <TableCell>
                      {isEditing ? (
                        <TextField
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          size="small"
                        />
                      ) : (
                        catName
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {isEditing ? (
                        <>
                          <Button size="small" variant="contained" onClick={() => handleUpdateCategory(catId)}>
                            Save
                          </Button>
                          <Button
                            size="small"
                            variant="text"
                            onClick={() => {
                              setEditId(null);
                              setEditName("");
                            }}
                            style={{ marginLeft: 8 }}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              setEditId(catId);
                              setEditName(catName || "");
                            }}
                          >
                            Edit
                          </Button>
                          <Button size="small" color="error" variant="outlined" onClick={() => handleDeleteCategory(catId)} style={{ marginLeft: 8 }}>
                            Delete
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={3}>No categories found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={snack.open}
        autoHideDuration={2500}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snack.severity} variant="filled" onClose={() => setSnack((s) => ({ ...s, open: false }))}>
          {snack.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ManageCategory;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Prodservice from "../Services/Prodservice";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const categories = {
    1: "MEN",
    2: "WOMEN",
    3: "ELECTRONICS",
    4: "BEAUTY",
    5: "GROCERY",
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    Prodservice.getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      Prodservice.deleteProduct(id)
        .then(() => setProducts(products.filter((p) => p.id !== id)))
        .catch((err) => console.error("Error deleting product:", err));
    }
  };

  const updateProduct = (product) => {
    navigate(`/admin/products/${product.id}/edit`);
  };

  // Filter products by search term (by name only)
  const filteredProducts = products.filter((p) => {
    const term = (searchTerm || "").trim().toLowerCase();
    if (!term) return true;
    const name = (p && p.Name ? String(p.Name) : "").toLowerCase();
    return name.includes(term);
  });

  // Pagination
  const lastIndex = currentPage * entriesPerPage;
  const firstIndex = lastIndex - entriesPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredProducts.length / entriesPerPage);

  return (
    <div className="container mt-4 admin-products">
      <h2 className="text-center mb-4">Manage Products</h2>

      {/* Search and entries per page */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div>
          Show{" "}
          <select
            className="form-select d-inline-block w-auto"
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>{" "}
          entries
        </div>

        <input
          type="text"
          placeholder="Search by name"
          className="form-control " 
          // className="form-control"
          style={{ width: "300px" }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Responsive Table */}
      <div className="table-responsive shadow-sm product-table-wrapper">
        <table className="table table-bordered text-center align-middle table-hover product-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((p, index) => (
                <tr key={p.id}>
                  <td>{firstIndex + index + 1}</td>
                  <td>{p.Name}</td>
                  <td>₹{p.price.toLocaleString()}</td>
                  <td>{p.description}</td>
                  <td>
                    <a href={p.image_url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={p.image_url}
                        alt={p.Name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    </a>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(p.id)}>Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => updateProduct(p)}>Update</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;

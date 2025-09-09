import React, { useEffect, useState } from "react";
import Prodservice from "../Services/Prodservice";

function UpdateProduct({ productId, onBack }) {
  const [product, setProduct] = useState({
    Name: "",
    description: "",
    price: "",
    image_url: "",
    category_id: "",
  });

  // Load existing product details
  useEffect(() => {
    Prodservice.getProductById(productId)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error loading product:", err));
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Prodservice.updateProduct(productId, product)
      .then(() => {
        alert("✅ Product updated successfully!");
        onBack(); // go back to product list
      })
      .catch((err) => console.error("Error updating:", err));
  };

  return (
    <div className="container mt-4">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={product.Name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input
            type="text"
            name="image_url"
            value={product.image_url}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Category ID</label>
          <input
            type="number"
            name="category_id"
            value={product.category_id}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={onBack}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;

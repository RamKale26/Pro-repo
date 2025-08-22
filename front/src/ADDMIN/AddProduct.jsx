import React, { Component } from "react";
import ProdService from "../Services/Prodservice";
import "../style/AddProd.css";

class AddProductForm extends Component {
  state = { Name: "", description: "", price: "", category_id: "", image_url: "" };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, description, price, category_id, image_url } = this.state;

    const payload = {
      Name,
      description,
      price: Number(price),
      category_id: Number(category_id),
      image_url
    };

    try {
      const res = await ProdService.addProduct(payload);
      console.log(" Added:", res.data);
      alert("Product added successfully!");
      this.setState({ Name: "", description: "", price: "", category_id: "", image_url: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  render() {
    const { Name, description, price, category_id, image_url } = this.state;

    return (
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h3 className="mb-4 text-center">Add New Product</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input className="form-control" name="Name" value={Name} onChange={this.handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" name="category_id" value={category_id} onChange={this.handleChange} required>
                <option value="">-- Select Category --</option>
                <option value="1">Men</option>
                <option value="2">Women</option>
                <option value="3">Kids</option>
                <option value="4">Beauty</option>
                <option value="5">Grocery</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Price (₹)</label>
              <input type="number" className="form-control" name="price" value={price} min="0" onChange={this.handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" name="description" value={description} onChange={this.handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input type="url" className="form-control" name="image_url" value={image_url} onChange={this.handleChange} placeholder="https://..." required />
            </div>

            {image_url && (
              <div className="mb-3 text-center img">
                <img src={image_url} alt="Preview" style={{ width: 120, borderRadius: 10, }} />
              </div>
            )}

            <button className="btn btn-primary w-100">Add Product</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProductForm;

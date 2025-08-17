import React, { Component } from "react";
import "../style/AddProd.css";

class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      description: "",
      price: "",
      category: "",
      image: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("📦 Product Added:", this.state);

    // You can connect to backend API here
    // Example: axios.post("http://localhost:3000/products", this.state)

    alert("✅ Product added successfully!");
    this.setState({
      Name: "",
      description: "",
      price: "",
      category:"",
      image: "",
    });
  };

  render() {
    const { Name, description, price, category, image } = this.state;

    return (
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h3 className="mb-4 text-center">Add New Product</h3>
          <form onSubmit={this.handleSubmit}>
            
            {/* Product Name */}
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="Name"
                value={Name}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                value={description}
                onChange={this.handleChange}
                required
              >
                <option value="">-- Select Category --</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                <option value="Beauty">Beauty</option>
                <option value="Grocery">Grocery</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-3">
              <label className="form-label">Price (₹)</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={price}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                name=""
                value={category}
                onChange={this.handleChange}
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="file"
                className="form-control"
                name="image"
                value={image}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Preview */}
            {image && (
              <div className="mb-3 text-center">
                <img
                  src={image}
                  alt="Preview"
                  style={{ width: "120px", borderRadius: "10px" }}
                />
              </div>
            )};
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProductForm;

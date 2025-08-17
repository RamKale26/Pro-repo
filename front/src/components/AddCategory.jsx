import React, { Component } from "react";
import ReactDom from "react-dom";
import "../style/Register.css";


class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      images: "",
      Description: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category submitted:", this.state);
    alert("Add Category successfully!");
    this.setState({
      name: "",
      price: "",
      images: "",
      Description: ""
    });
  };

  render() {
    return (
      <div className="register-container">
        <form onSubmit={this.handleSubmit} className="register-form mb-5">
          <h2 className="register-title">Add Category</h2>

          <input
            type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}
            required  className="register-input"  autoComplete="off"
          />

          <input
            type="text" name="price" placeholder="Price..." value={this.state.price} onChange={this.handleChange}
            required className="register-input" autoComplete="off"
          />

          <input
            type="file" name="images" value={this.state.images} onChange={this.handleChange}
            required className="register-input" autoComplete="off"
          />

          <input
            type="text"  name="Description" placeholder="Description" value={this.state.Description} onChange={this.handleChange}
            required className="register-input" autoComplete="off"
          />

          <button type="submit" className="register-button">
            Add Category
          </button>
        </form>
      </div>
    );
  }
}

export default AddCategory;

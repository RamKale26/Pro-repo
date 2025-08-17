import React, { Component } from "react";
import "../style/Register.css";
import Prodservice from "../Services/Prodservice";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      password: "",
      Date:"",
      role: "",
      msg: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      Name: this.state.Name,
      Email: this.state.Email,
      password: this.state.password,
      Date:this.state.Date,
      role: this.state.role
    };

    Prodservice.addUsers(payload)
      .then((result) => {
        this.setState({
          msg: result.data.message,
          Name: "",
          Email: "",
          password: "",
          role: ""
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ msg: "Something went wrong" });
      });
  };

  render() {
    return (
      <div className="register-container">
        <form onSubmit={this.handleSubmit} className="register-form">
          <h2 className="register-title">Register</h2>

          <input
            type="text" name="Name" placeholder="Full Name" value={this.state.Name} onChange={this.handleChange} required className="register-input"
            autoComplete="off"
          />

          <input
            type="email" name="Email" placeholder="Email Address"value={this.state.Email} onChange={this.handleChange} required className="register-input"
            autoComplete="off"
          />

          <input
            type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required className="register-input"
            autoComplete="off"
        />
           <input
            type="date" name="Date" placeholder="" value={this.state.Date}onChange={this.handleChange} required className="register-input"
            autoComplete="off"
        />
            
          <select
            name="role" value={this.state.role} onChange={this.handleChange} required className="register-input"
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="register-button">
            Register
          </button>
          <br />
          <div className="last">
            <label>{this.state.msg}</label>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;

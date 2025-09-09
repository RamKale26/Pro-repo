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
    Date: "",
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
    Date: this.state.Date,
    role: this.state.role
  };

  Prodservice.addUsers(payload)
    .then((result) => {
      this.setState({
        msg: result.data.message || "User added successfully",
        Name: "",
        Email: "",
        password: "",
        Date: "",
        role: ""
      });

      // hide msg after 3s
      setTimeout(() => this.setState({ msg: "" }), 3000);
    })
    .catch((err) => {
      console.error(err);
      this.setState({ msg: "Something went wrong" });

      // hide error msg after 3s
      setTimeout(() => this.setState({ msg: "" }), 3000);
    });
};


  render() {
    return (
      <div className="container-fluid min-vh-100 bg-light">
        <div className="row align-items-center min-vh-100">
          {/* Photo / Illustration Section */}
          <div className="col-lg-6 d-none d-lg-block p-0">
            <div
              className="h-100 w-100"
              style={{
                backgroundImage: "url(/Sales IMG.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "50vh"
              }}
              aria-label="Register illustration"
            />
          </div>

          {/* Form Section */}
          <div className="col-lg-6 d-flex justify-content-center py-4 py-lg-0">
            <div className="card shadow border-0" style={{ maxWidth: 520, width: "100%" }}>
              <div className="card-body p-4">
                <div className="text-center mb-3">
                  <div className="rounded-circle bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                    <i className="bi bi-person-plus text-success" style={{ fontSize: 28 }}></i>
                  </div>
                </div>
                <h3 className="mb-3 text-center">Create your account</h3>
                {this.state.msg && (
                  <div className="alert alert-info text-center py-2">{this.state.msg}</div>
                )}

                <form onSubmit={this.handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input type="text" name="Name" className="form-control" placeholder="Enter your name" value={this.state.Name} onChange={this.handleChange} required autoComplete="off" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" name="Date" className="form-control" value={this.state.Date} onChange={this.handleChange} required autoComplete="off" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="Email" className="form-control" placeholder="you@example.com" value={this.state.Email} onChange={this.handleChange} required autoComplete="off" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" placeholder="Create a password" value={this.state.password} onChange={this.handleChange} required autoComplete="off" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Role</label>
                      <select name="role" className="form-select" value={this.state.role} onChange={this.handleChange} required>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" htmlFor="terms">I agree to the terms</label>
                    </div>
                    <a href="#" className="small text-decoration-none">Need help?</a>
                  </div>

                  <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RegisterForm;

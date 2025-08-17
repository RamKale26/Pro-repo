import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", this.state);
    alert("Login attempt made!");
    this.setState({ name: "", password: "" });
  };

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light mt-3">
        {/* <div className="row w-100" style={{ maxWidth: "900px" }}>
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://t4.ftcdn.net/jpg/07/41/71/93/240_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg"
              alt="Login Illustration"
              className="img-fluid rounded-start"
            />
          </div> */}

          <div className="col-md-6 bg-white p-5 rounded-end shadow-sm border  main" style={{border:"2px solid black",width:"450px"}}>
            <h3 className="mb-4 text-center">Login to Your Account</h3>
            <form onSubmit={this.handleSubmit}>

              <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email </label>
                <input
                  type="text"  className="form-control" id="name" placeholder="Enter your Email"name="name"value={this.state.name}
                  onChange={this.handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label"> Password </label>
                <input
                  type="password" className="form-control" id="password" placeholder="Enter your password" name="password" value={this.state.password}
                  onChange={this.handleChange} />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="#" className="text-decoration-none small">
                  Forgot password?
                </a>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>

              <p className="text-center mb-0">
                Don't have an account?{" "}
                <Link to="/reg" className="text-decoration-none">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      // </div>
    );
  }
}

export default LoginPage;

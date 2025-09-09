  // import React, { Component } from "react";
  // import { Link, Navigate } from "react-router-dom";
  // import ProdService from "../Services/Prodservice";
  // import "../style/login.css";

  // class LoginPage extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       Email: "",
  //       password: "",
  //       loggedIn: false,
  //       error: "",
  //       success: ""   
  //     };
  //   }

  //   handleChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   ProdService.userLogin(this.state.Email, this.state.password)
  //     .then((res) => {
  //       if (res.data.token) {
  //         // ✅ Save token and user in localStorage
  //         localStorage.setItem("token", res.data.token);
  //         localStorage.setItem("user", JSON.stringify(res.data.user));
  //       }

  //       this.setState({
  //         loggedIn: true,
  //         success: res.data.message,
  //         error: ""
  //       });
  //     })
  //     .catch(() => {
  //       this.setState({
  //         error: "Invalid Email or Password. Please Register First!",
  //         success: ""
  //       });
  //     });
  // };


  //   render() {
  //     if (this.state.loggedIn) {
  //       return <Navigate to="/"/>; 
  //     }

  //     return (
  //       <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light mt-3">
  //         <div
  //           className="col-md-6 bg-white p-5 rounded shadow-sm border main"
  //           style={{ border: "2px solid black", width: "450px" }}
  //         >
  //           <h3 className="mb-4 text-center">Login to Your Account</h3>
  //           {this.state.success && (
  //             <div className="alert alert-success">{this.state.success}</div>
  //           )}  
  //           {this.state.error && (
  //             <div className="alert alert-danger">{this.state.error}</div>
  //           )}

  //           <form onSubmit={this.handleSubmit}>
  //             <div className="mb-3">
  //               <label className="form-label">Email</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 placeholder="Enter your Email"
  //                 name="Email"
  //                 value={this.state.Email}
  //                 onChange={this.handleChange}
  //               />
  //             </div>

  //             <div className="mb-3">
  //               <label className="form-label">Password</label>
  //               <input
  //                 type="password"
  //                 className="form-control"
  //                 placeholder="Enter your password"
  //                 name="password"
  //                 value={this.state.password}
  //                 onChange={this.handleChange}
  //               />
  //             </div>

  //             <div className="d-grid mb-3">
  //               <button type="submit" className="btn btn-primary">
  //                 Log In
  //               </button>
  //             </div>

  //             <p className="text-center mb-0">
  //               Don't have an account?{" "}
  //               <Link to="/reg" className="text-decoration-none">
  //                 Register
  //               </Link>
  //             </p>
  //           </form>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  // export default LoginPage;

import React, { Component } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import ProdService from "../Services/Prodservice";
import "../style/login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      password: "",
      loggedIn: false,
      error: "",
      success: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    ProdService.userLogin(this.state.Email, this.state.password)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          // 🔥 Dispatch custom event to refresh Navbar
          window.dispatchEvent(new Event("userChanged"));
        }

        this.setState({
          loggedIn: true,
          success: res.data.message,
          error: ""
        });
      })
      .catch(() => {
        this.setState({
          error: "Invalid Email or Password. Please Register First!",
          success: ""
        });
      });
  };

  render() {
    if (this.state.loggedIn) {
      const redirectPath = this.props.from || "/";
      return <Navigate to={redirectPath} />;
    }

    return (
      <div className="container-fluid min-vh-100 bg-light">
        <div className="row align-items-center min-vh-100">
          {/* Photo / Illustration Section */}
          <div className="col-lg-6 d-none d-lg-block p-0">
            <div
              className="h-100 w-100"
              style={{
                backgroundImage: "url(/shubhisha-fashion-women-s.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "50vh"
              }}
              aria-label="Login illustration"
            />
          </div>

          {/* Form Section */}
          <div className="col-lg-6 d-flex justify-content-center py-4 py-lg-0">
            <div className="card shadow border-0" style={{ maxWidth: 420, width: "100%" }}>
              <div className="card-body p-4">
                <div className="text-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{ width: 64, height: 64 }}>
                    <i className="bi bi-person-circle text-primary" style={{ fontSize: 28 }}></i>
                  </div>
                </div>
                <h3 className="mb-3 text-center">Welcome Back</h3>
                {this.state.success && (
                  <div className="alert alert-success">{this.state.success}</div>
                )}
                {this.state.error && (
                  <div className="alert alert-danger">{this.state.error}</div>
                )}

                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="you@example.com" name="Email" value={this.state.Email} onChange={this.handleChange} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberUser" />
                      <label className="form-check-label" htmlFor="rememberUser">Remember me</label>
                    </div>
                    <a href="#" className="small text-decoration-none">Forgot password?</a>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Log In</button>

                  <p className="text-center mb-0">
                    Don't have an account?{" "}
                    <Link to="/reg" className="text-decoration-none">
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Wrapper to pass location state
export default function LoginPageWithLocation(props) {
  const location = useLocation();
  return <LoginPage {...props} from={location.state?.from} />;
}


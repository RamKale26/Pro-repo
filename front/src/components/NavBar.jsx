import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUser, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import "../style/Navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "user",
      showDropdown: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  render() {
    const { role, showDropdown } = this.state;

    return (
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
        {/* Brand Logo */}
        <Link className="navbar-brand me-4 d-flex align-items-center" to="/">
          <img
            src="https://t3.ftcdn.net/jpg/12/57/05/84/240_F_1257058412_n1kFO0OTGTwXe1vP4Fh7w7wKNSOL6CKF.jpg"
            alt="QuikCart Logo"
            style={{ height: "60px", marginRight: "5px", width: "100px" }}
          />
          <h2 style={{ color: "red", margin: 0 }}>
            Quik<span style={{ color: "black" }}>Cart</span>
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 bt">
              <NavLink className="nav-link fw-bold text-dark" to="/men"> MEN </NavLink>
            </li>
            <li className="nav-item mx-2 bt">
              <NavLink className="nav-link fw-bold text-dark" to="/women"> WOMEN </NavLink>
            </li>
            <li className="nav-item mx-2 bt">
              <NavLink className="nav-link fw-bold text-dark" to="/kids"> KIDS </NavLink>
            </li>
            <li className="nav-item mx-2 bt">
              <NavLink className="nav-link fw-bold text-dark" to="/beauty"> BEAUTY </NavLink>
            </li>
            <li className="nav-item mx-2 bt">
              <NavLink className="nav-link fw-bold text-dark"  to="/groery" data-toggle="tooltip" data-placement="top" title="Grocery Page"> GROCERY </NavLink>
            </li>
          </ul>
          <form
            className="d-flex align-items-center mx-lg-3 my-2 my-lg-0 flex-grow-1"
            style={{ maxWidth: "600px" }}>
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder="Search for products, brands and more"
              />
            </div>
          </form>
          <div className="d-flex gap-4 position-relative mt-3 mt-lg-0">
            {/* Profile */}
            <div
              className="text-center" onClick={this.toggleDropdown} style={{ cursor: "pointer" }}
            >
              <FaUser className="icon-size mb-1" />
              <div className="icon-label">Profile</div>

              {showDropdown && (
                <div
                  className="dropdown-menu show position-absolute"
                  style={{
                    top: "100%",
                    right: 0,
                    zIndex: 999,
                    minWidth: "150px",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  }}
                >
                  {role === "admin" ? (
                    <>
                      <Link className="dropdown-item" to="/admin">
                        Admin Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/users">
                        Manage Users
                      </Link>
                      <Link className="dropdown-item" to="/logout">
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className="dropdown-item" to="/adminlogin"> Admin </Link>
                      <Link className="dropdown-item" to="/login"> User </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <div className="text-center">
              <FaHeart className="icon-size mb-1" />
              <div className="icon-label">Wishlist</div>
            </div>

            {/* Cart */}
            <div className="text-center">
              <FaShoppingCart className="icon-size" />
              <div className="icon-label">
                <Link className="dropdown-item" to="/cart">
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;







import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import prodservices from "../Services/Prodservice"; 
import "../style/custom.css";

function BeautyPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    prodservices
      .getProductsByCategory(4)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching Beauty products:", err);
      });
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image_url || "/placeholder.png"}
                  className="card-img-top"
                  alt={product.Name}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text text-success fw-bold">
                    ₹{product.price}
                  </p>

                  {/* ✅ ProductDetail ke liye Link */}
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }} // 👈 pura product pass ho raha hai
                    className="btn btn-primary mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">
            ⚠️ No products found in Beauty category
          </p>
        )}
      </div>

      {/* ---- Footer ---- */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Your one-stop shop for all your product needs. Quality products
              at affordable prices.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/men">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Shipping Policy</Link></li>
              <li><Link to="/">Return Policy</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: babartushar560@gmail.com</p>
            <p>Phone: +91 9529647719</p>
            <div className="social-icons">
              <Link to="https://github.com/tusharbabar"><i className="fab fa-github"></i></Link>
              <Link to="https://www.linkedin.com/in/tushar-babar-69643a292/"><i className="fab fa-linkedin"></i></Link>
              <Link to="#"><i className="fab fa-twitter"></i></Link>
              <Link to="#"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Product Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default BeautyPage;

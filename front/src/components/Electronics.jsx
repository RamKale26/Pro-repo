import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";

function Electronics() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  ProdService.getProductsByCategory(3)
    .then((res) => {
      console.log("Electronics Products API Response:", res.data);

      // 🔽 Sort: Newest First (based on id or created_at)
      const sortedProducts = [...res.data].sort((a, b) => b.id - a.id);

      setProducts(sortedProducts);
    })
    .catch((err) => {
      console.error("❌ Error fetching electronics products:", err);
    });
}, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
  (product.Name || product.name)
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase())
);

  return (
    <div className="container py-4 mb-4">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "black" }}>
        Electronics Products
      </h2>

      {/* 🔍 Search Box */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                {/* Image clickable */}
                <Link
                  to={`/product/${product.id}`}
                  state={{ product }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={product.image_url || product.image}
                    className="card-img-top"
                    alt={product.Name || product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>

                <div className="card-body d-flex flex-column">
                  {/* Name clickable */}
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h5 className="card-title">
                      {product.Name || product.name}
                    </h5>
                  </Link>

                  <p className="card-text fw-bold text-success">
                    ₹{product.price}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="btn btn-primary mt-auto"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">
            ⚠️ No products found matching "{searchTerm}"
          </p>
        )}
      </div>
       <footer className="footer">
                  <div className="footer-container">
                    <div className="footer-section">
                      <h3>About Us</h3>
                      <p>Your one-stop shop for all your product needs. Quality products at affordable prices.</p>
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
                      <p>Email:productinfo560@gmail.com</p>
                      <p>Phone: +91 9529647719</p>
                      <div className="social-icons">
                        <Link to="https://github.com/tusharbabar"><i className="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/tushar-babar-69643a292/"><i className="fab fa-linkedin"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
      
      
                      </div>
                    </div>
                    {/* <div className="footer-section ">
                      <h3 style={{ textAlign: "center", alignItems: "center" }}>Find Us</h3>
                    </div> */}
      
                  </div>
      
                  <br />
                  <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Product Management System. All rights reserved.</p>
                  </div>
                </footer>
    </div>
  );
}

export default Electronics;


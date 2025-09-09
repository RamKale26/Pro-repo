  // import React, { useState, useEffect } from "react";
  // import { Link } from "react-router-dom";
  // import ProdService from "../Services/Prodservice";
  // import "../style/GroceryPage.css";

  // function GroceryPage() {
  //   const [groceries, setGroceries] = useState([]);
  //   const [search, setSearch] = useState(""); 

  //   useEffect(() => {
  //     ProdService.getProductsByCategory(5) 
  //       .then((res) => {
  //         setGroceries(res.data);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching groceries:", err);
  //       });
  //   }, []);

  //   const filteredGroceries = groceries.filter((product) =>
  //   product.Name
  //     .toLowerCase()
  //     .includes(search.trim().toLowerCase())
  // );

  //   return (
  //     <div className="container py-3">
  //       <h2 className="text-center mb-4">Grocery Products</h2>

  //       {/* 🔍 Search Box */}
  //       <div className="d-flex justify-content-center mb-4">
  //         <input
  //           type="text"
  //           placeholder="Search grocery..."
  //           value={search}
  //           onChange={(e) => setSearch(e.target.value)}
  //           className="form-control w-50 shadow-sm"
  //         />
  //       </div>

  //       <div className="row">
  //         {filteredGroceries.length === 0 ? 
  //         (
  //           <h4 className="text-center text-muted">No groceries found</h4>
  //         ) : (
  //           filteredGroceries.map((product) => (
  //             <div key={product.id} className="col-md-3 mb-4">
  //               <div className="card h-100 shadow-sm">
  //                 <img
  //                   src={product.image_url || "/placeholder.png"}
  //                   alt={product.Name}
  //                   className="card-img-top"
  //                   style={{ height: 200, objectFit: "cover" }}
  //                 />
  //                 <div className="card-body d-flex flex-column">
  //                   <h5 className="card-title">{product.Name}</h5>
  //                   <p className="card-text text-success">₹{product.price}</p>

  //                   <Link
  //                     to={`/product/${product.id}`}
  //                     state={{ product }}
  //                     className="btn btn-primary mt-auto"
  //                   >
  //                     View Details
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           ))
  //         )}
  //       </div>
  //         <footer className="footer">
  //               <div className="footer-container">
  //                 <div className="footer-section">
  //                   <h3>About Us</h3>
  //                   <p>
  //                     Your one-stop shop for all your product needs. Quality products
  //                     at affordable prices.
  //                   </p>
  //                 </div>
  //                 <div className="footer-section">
  //                   <h3>Quick Links</h3>
  //                   <ul>
  //                     <li><Link to="/about">About Us</Link></li>
  //                     <li><Link to="/">Home</Link></li>
  //                     <li><Link to="/men">Products</Link></li>
  //                     <li><Link to="/contact">Contact</Link></li>
  //                   </ul>
  //                 </div>
  //                 <div className="footer-section">
  //                   <h3>Customer Service</h3>
  //                   <ul>
  //                     <li><Link to="/">FAQ</Link></li>
  //                     <li><Link to="/">Shipping Policy</Link></li>
  //                     <li><Link to="/">Return Policy</Link></li>
  //                     <li><Link to="/">Privacy Policy</Link></li>
  //                   </ul>
  //                 </div>
  //                 <div className="footer-section">
  //                   <h3>Contact Us</h3>
  //                   <p>Email: babartushar560@gmail.com</p>
  //                   <p>Phone: +91 9529647719</p>
  //                   <div className="social-icons">
  //                     <Link to="https://github.com/tusharbabar"><i className="fab fa-github"></i></Link>
  //                     <Link to="https://www.linkedin.com/in/tushar-babar-69643a292/"><i className="fab fa-linkedin"></i></Link>
  //                     <Link to="#"><i className="fab fa-twitter"></i></Link>
  //                     <Link to="#"><i className="fab fa-instagram"></i></Link>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="footer-bottom">
  //                 <p>&copy; {new Date().getFullYear()} Product Management System. All rights reserved.</p>
  //               </div>
  //             </footer>
  //     </div>
  //   );
  // } 

  // export default GroceryPage;


  import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";
import "../style/GroceryPage.css";

function GroceryPage() {
  const [groceries, setGroceries] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [search, setSearch] = useState(""); 

  // ✅ Fetch groceries (category 5)
  useEffect(() => {
    ProdService.getProductsByCategory(5)
      .then((res) => setGroceries(res.data))
      .catch((err) => console.error("Error fetching groceries:", err));

    // ✅ Fetch vegetables (category 6)
    ProdService.getProductsByCategory(6)
      .then((res) => setVegetables(res.data))
      .catch((err) => console.error("Error fetching vegetables:", err));
  }, []);

  // ✅ Search filter applies only on groceries
  const filteredGroceries = groceries.filter((product) =>
    product.Name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="container py-3">
      <h2 className="text-center mb-4">Grocery Products</h2>

      {/* 🔍 Search Box */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search grocery..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50 shadow-sm"
        />
      </div>

      {/* 🛒 Grocery Section */}
      <div className="row">
        {filteredGroceries.length === 0 ? (
          <h4 className="text-center text-muted">No groceries found</h4>
        ) : (
          filteredGroceries.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image_url || "/placeholder.png"}
                  alt={product.Name}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text text-success">₹{product.price}</p>

                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="btn btn-primary mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🥦 Vegetables Section */}
      <h2 className="text-center my-4">Vegetables</h2>
      <div className="row">
        {vegetables.length === 0 ? (
          <h4 className="text-center text-muted">No vegetables found</h4>
        ) : (
          vegetables.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image_url || "/placeholder.png"}
                  alt={product.Name}
                  className="card-img-top"
                  style={{ height: 250, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text text-success">₹{product.price}</p>

                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="btn btn-success mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Footer (same as before) */}
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

export default GroceryPage;




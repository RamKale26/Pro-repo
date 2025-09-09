import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
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
                  <p>Email:babartushar560@gmail.com</p>
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
  );
}

export default Footer;

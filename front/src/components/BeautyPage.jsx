import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../style/custom.css";

class BeautyPage extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: "Pond's Bright Miracle Detox Facewash With 10X Power Of Charcoal",
        price: "₹199",
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/f95d2712-ed8c-4e18-aef1-ba0939ac8137/Pond-s-Bright-Miracle-Detox-Facewash-With-10X-Power-Of-Charcoal.jpeg",
        link: "/men",
      },
      {
        id: 2,
        title: "Garnier Men Turbo Bright 100kg",
        price: "₹259",
        image: "https://cdn.zeptonow.com/production/tr:w-1280,ar-522-522,pr-true,f-auto,q-80/cms/product_variant/87edf275-a80f-4f22-a0f8-5c685670135e.jpg",
        link: "women",
      },
      {
        id: 3,
        title: "Lacto Calamine Makeup ",
        price: "₹699",
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/31e0c3a2-d3f8-42f6-bdc6-b9fdc8500e74/Lacto-Calamine-Makeup-Remover-Wipes-With-Aloe-Vera-Cucumber-And-Vitamin-E.jpeg",
        link: "#",
      },
      {
        id: 4,
        title: "Santoor Fresh Skin",
        price: "₹165",
        image: "https://cdn.zeptonow.com/production/tr:w-1280,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/a3455cef-3b5e-4729-a09c-ae0cf1cab632.jpeg",
        link: "#",
      },
      {
        id: 5,
        title: "Dove",
        price: "₹72",
        image: "https://cdn.zeptonow.com/production/tr:w-1280,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/8eb9c6e0-02e7-4ccb-abf8-b5e2e5b60262.jpeg",
        link: "#",
      },
      {
        id: 6,
        title: "Cinthol Lime Bath Soap",
        price: "₹131",
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/1697217e-7fa9-41aa-bcf6-d53e0cd64a41/Cinthol-Lime-Bath-Soap.jpeg",
        link: "#",
      },
      {
        id: 7,
        title: "Colouressence Nail Paint Kit | Free Nail Paint Remover | Forever - MultiColour",
        price: "₹299",
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1100,ar-1100-1100,pr-true,f-auto,q-80/cms/product_variant/fac75124-983c-43d7-ad20-f34c111e5fa8/Colouressence-Nail-Paint-Kit-Free-Nail-Paint-Remover-Forever-MultiColour.jpeg",
        link: "#",
      },
     
      {
        id: 8,
        title: "Clinique Moisture Surge 100h Auto-replenishing Hydrator (Moisturizer)(30ml)",
        price: "₹699",
        image:"https://images-static.nykaa.com/media/catalog/product/1/8/185023fCLINI00000002_1.jpg?tr=w-344,h-344,cm-pad_resize",
        link: "/kids",
      },
      
        
    ];

    return (
      <div className="container my-4">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-success fw-bold">
                    {product.price}
                  </p>
                  <Link
                    to={product.link}
                    className="btn btn-primary mt-auto"
                  >
                    Shop Now
                  </Link>

                </div>
              </div>
            </div>
          ))}


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
        
        
      </div>
      
    );
  }
}

export default BeautyPage;

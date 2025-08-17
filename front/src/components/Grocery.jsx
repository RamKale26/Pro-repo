import React, { Component } from "react";
import "../style/GroceryPage.css";
import { Link } from "react-router-dom";
import { FaBorderStyle } from "react-icons/fa";

class GroceryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          id: 1,
          name: "Fresh Apples",
          price: 120,
          image:
            "https://t3.ftcdn.net/jpg/00/50/50/70/240_F_50507014_BiL29pNtSj2GNQIsRLXJMu3UBwJyNpiP.jpg",
          link: ""
        },
        {
          id: 2,
          name: "Oranges citrus",
          price: 50,
          image:
            "https://as2.ftcdn.net/v2/jpg/07/37/87/33/1000_F_737873335_ZhxfROs1WqTnoagqw06hNXxylkpyPKTn.jpg",
          link: ""
        },
        {
          id: 3,
          name: "pomegranate",
          price: 40,
          image:
            "https://as2.ftcdn.net/v2/jpg/12/08/67/33/1000_F_1208673362_PzZPLt4QMR3lq8UWwjLmm1r7KMK7Ske8.jpg",
          link: ""
        },
        {
          id: 4,
          name: "Mango",
          price: 50,
          image:
            "https://as1.ftcdn.net/v2/jpg/14/36/42/42/1000_F_1436424242_u9qyPsi0XAc6cKttyVydriOY9QMRiXF4.jpg",
          link: ""
        }
      ],
      vegetables: [
        {
          id: 101,
          name: "Potatoes",
          price: 30,
          image:
            "https://t3.ftcdn.net/jpg/00/53/07/06/240_F_53070616_oMO3s9Qbw345NP7Yr4A1UeiNbjmkF78t.jpg",
          link: ""
        },
        {
          id: 102,
          name: "Onions",
          price: 35,
          image:
            "https://t4.ftcdn.net/jpg/06/73/23/91/240_F_673239159_jbEJ7jiFdmdWmznUdIBuOSQW6CvZtlVt.jpg",
          link: ""
        },
        {
          id: 3,
          name: "Tomatoes",
          price: 40,
          image:
            "https://t3.ftcdn.net/jpg/00/34/61/76/240_F_34617669_p9r4GrR83TBEXCZrRny6AaigqPUEPFp5.jpg",
          link: ""
        },
        {
          id: 103,
          name: "Bitter Melon",
          price: 45,
          image:
            "https://t4.ftcdn.net/jpg/04/62/98/45/240_F_462984598_tM9eypjAttJT6Zp83mUwrdrTlsByFfoB.jpg",
          link: ""
        },
        {
          id: 103,
          name: "Green Mater",
          price: 47,
          image:
            "https://as1.ftcdn.net/v2/jpg/11/53/45/58/1000_F_1153455815_5jvFUMzzrEKCB8Xtf1YYffOaSPc3iCMN.jpg",
          link: ""
        },
        {
          id: 2,
          name: "Green pigeon",
          price: 50,
          image:
            "https://as2.ftcdn.net/v2/jpg/05/04/91/01/1000_F_504910101_lngQcnECllZmau3hVh46Rn35IIYDcuH2.jpg",
          link: ""
        },
      ]
    };
  }

  render() {
    return (
      <div className="grocery-page">
        <div className="hero-banner-img">
          <div className="hero-content">
            <h1>Fresh Groceries Delivered to Your Home</h1>
            <p>Get the best quality products at affordable prices</p>
            <div className="search-bar">
              <input type="text" placeholder="Search for Grocery..." />
              <button>Search</button>
            </div>
            <div className="delivery-info">
              <span>🚚 Free delivery on orders above ₹500</span>
              <span>⭐ 4.8/5 from 5000+ customers</span>
            </div>
          </div>
        </div>

        <h2 className="grocery-title mb-3" style={{ textAlign: "center" }}>
          Grocery Items
        </h2>
        <div className="grocery-container">
          {this.state.groceries.map((item) => (
            <div key={item.id} className="grocery-card">
              <img src={item.image} alt={item.name} className="grocery-image" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <Link to={item.link} className="buy-btn">
                Add to Cart
              </Link>
            </div>
          ))}
        </div>

        {/* Vegetables Section */}
        <div className="border-bottom">
          <u><h2 style={{ textAlign: "center", marginTop: "40px" }}>Vegetables :</h2></u>
        </div>
        <div className="grocery-container">
          {this.state.vegetables.map((veg) => (
            <div key={veg.id} className="grocery-card">
              <img src={veg.image} alt={veg.name} className="grocery-image" />
              <h3>{veg.name}</h3>
              <p>₹{veg.price}</p>
              <Link to={veg.link} className="buy-btn">
                Add to Cart
              </Link>
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
            <div className="footer-section" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
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

export default GroceryPage;

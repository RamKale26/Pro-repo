import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../style/custom.css";

class Product extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: "Men's T-Shirt",
        price: "₹499",
        image: "https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=768",
        //link: "/login",
        link: "/",
      },
      {
        id: 2,
        title: "Women's Kurta",
        price: "₹899",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz-RSdLBBFnNDMG-MxzpEDGD3FKOnwm84L2cTRroHLbjz48fzihCJzLfmuF2F9L3KQYrj5jH8jmFE8fE7RBooTt1645PCHPcTVTFEG3yY",
        link: "women",
      },
      {
        id: 3,
        title: "Kids Shoes",
        price: "₹699",
        image: "https://www.crazytoes.in/cdn/shop/files/WhatsApp_Image_2025-01-01_at_12.34.27_PM.jpg?v=1737046383",
        link: "#",
      },
      {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
      {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
      {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
      {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
      {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
      {
        id: 2,
        title: "Women's Kurta",
        price: "₹899",
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz-RSdLBBFnNDMG-MxzpEDGD3FKOnwm84L2cTRroHLbjz48fzihCJzLfmuF2F9L3KQYrj5jH8jmFE8fE7RBooTt1645PCHPcTVTFEG3yY",
        link: "/women",
      },
      {
        id: 3,
        title: "Kids Shoes",
        price: "₹699",
        image:
          "https://www.crazytoes.in/cdn/shop/files/WhatsApp_Image_2025-01-01_at_12.34.27_PM.jpg?v=1737046383",
        link: "/kids",
      },
      {
        id: 4,
        title: "Women ' Kurta",
        price: "₹1,299",
        image:
          "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/k/u/2/xxl-tie-dye-001-fabunna-cotton-original-imagzwfb5v6mjupy.jpeg?q=70&crop=false",
        link: "/decor",
      },

    ];

    return (
      <div className="container my-3 ">
        <div className="hero-banner">
          <div className="hero-content">
            <h1>Discover Amazing Products</h1>
            <p>Shop the latest trends at unbeatable prices</p>
            <div className="cta-buttons">
              <Link to="/men" className="btn btn-primary">Shop Now</Link>
              <Link to="sale" className="btn btn-outline-light">View Sale</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span>10,000+</span>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <span>500+</span>
                <p>Brands</p>
              </div>
              <div className="stat-item">
                <span>24/7</span>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
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
                  <Link to={product.link} className="btn btn-primary mt-auto">
                    Shop Now
                  </Link>
                </div>
              </div>

            </div>

          ))}
          <div className="sale-banner mb-4">
            <div className="sale-content">
              <h2>End of Season Sale</h2>
              <p>Up to 50% off on selected items</p>
              <Link to="/groery" className="btn btn-light">Shop Sale</Link>
            </div>
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
              <div className="footer-section ">
                <h3 style={{textAlign:"center",alignItems:"center"}}>Find Us</h3>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.007878189541!2d73.80244604041911!3d18.48100450321662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfeb853d4691%3A0x56f1a2e46627167!2sGiri&#39;s%20TECH%20HUB%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1755171892370!5m2!1sen!2sin"
                  width="500px"
                  height="80%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            <br />
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Product Management System. All rights reserved.</p>
            </div>
          </footer>


        </div>
      </div>

    );
  }
}

export default Product;

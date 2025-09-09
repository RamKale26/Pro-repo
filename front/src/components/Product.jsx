import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/custom.css";
class Product extends Component {
  render() {
    const products = [
      { id: 1, title: "Men's T-Shirt", price: "₹499", 
        image: "https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=1080",  link: "/men", }, { id: 2, title: "Women's Kurti", price: "₹899", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz-RSdLBBFnNDMG-MxzpEDGD3FKOnwm84L2cTRroHLbjz48fzihCJzLfmuF2F9L3KQYrj5jH8jmFE8fE7RBooTt1645PCHPcTVTFEG3yY", link: "/women", }, { id: 3, title: "Kids Shoes", price: "₹699", image: "https://www.crazytoes.in/cdn/shop/files/WhatsApp_Image_2025-01-01_at_12.34.27_PM.jpg?v=1737046383", link: "/kids", }, { id: 4, title: "Home Decor", price: "₹1,299", image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683", link: "/decor", },
    ];
    const productsnew = [

      {
        id: 1,
        title: "Wireless Earbuds",
        price: "₹1,499",
        image:
          "https://i.pinimg.com/736x/0f/e9/2d/0fe92da5cd71f99d06f5c5831a39832f.jpg",
        link: "/electronic  ",
      },
      {
        id: 2,
        title: "Women's Handbag",
        price: "₹1,199",
        image:
          "https://t4.ftcdn.net/jpg/01/10/04/51/240_F_110045173_QgmA3gg5OwTlLNQBqmPdFnkh6sPvsvt8.jpg",
        link: "/women",
      },
      {
        id: 3,
        title: "Men's Sneakers",
        price: "₹2,299",
        image:
          "https://i.pinimg.com/736x/0b/bf/cd/0bbfcdf036a7787b551ae85f31a35606.jpg",
        link: "/men",
      },
      {
        id: 4,
        title: "Smart Watch",
        price: "₹1,999",
        image:
          "https://i.pinimg.com/736x/3b/7a/25/3b7a25b829711e5e20a697f55eb76f48.jpg",
        link: "/electronic",
      },
      {
        id: 5,
        title: "Kids Toy Car",
        price: "₹799",
        image:
          "https://i.pinimg.com/736x/43/5e/d1/435ed17a6971e98065c85d69f02549bd.jpg",
        link: "/electronic",
      },
      {
        id: 6,
        title: "Home Sofa Cushion Set",
        price: "₹1,499",
        image:
          "https://i.pinimg.com/736x/df/a9/b2/dfa9b2579c15b91f82c60b95630d1486.jpg",
        link: "/",
      }
    ];


    return (
      <div className="container my-5">
        <div className="hero-banner-two d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="hero-text animate__animated animate__fadeInLeft">
            <span className="hero-subtitle">Smart Shopping Starts Here</span>
            <h1>
              Find Products You Love <br /> With Smart Recommendations
            </h1>
            <p>
              Explore trending items, personalized suggestions, and the latest
              deals curated just for you. Discover fashion, electronics, beauty,
              and more – all in one place.
            </p>
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHero"
              aria-expanded="false"
              aria-controls="collapseHero"
            >
              View More
            </button>
            <div className="collapse" id="collapseHero">
              <div className="card card-body text-dark mt-3">
                Our Product Recommender System helps you discover the right
                items effortlessly. From fashion and electronics to groceries
                and beauty, we bring you personalized suggestions based on
                trends, popular choices, and your preferences. Save time, explore
                smarter, and find exactly what you’re looking for – all in one
                place.
              </div>
            </div>
          </div>
          <div className="hero-image animate__animated animate__fadeInRight">
            <img
              src="https://media.istockphoto.com/id/1304746031/photo/taking-better-control-with-technology.jpg?s=612x612&w=0&k=20&c=ds9pkcoioo5RXc28dB81IzIQfsRnFKYKTvfUiapYBqY="
              alt="Shopping"
              style={{ width: "500px", maxWidth: "100%" }}
            />
          </div>
        </div>
        <h2 className="section-title mt-5"> Products</h2>
        <div className="row mt-4">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm animate__animated animate__zoomIn">
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
        </div>
        {/* 🔥 Advertising Banner Section */}
        <div className="advertising-banner my-5">
          <div className="row align-items-center bg-light p-4 rounded shadow-lg animate__animated animate__fadeInUp ">
            <div className="col-md-6 text-center">
              <img
                src="https://t3.ftcdn.net/jpg/04/87/16/16/240_F_487161671_VrCEimVcrhtWjq7btJwhslxFVIPt7pyx.jpg"
                alt="Big Discount"
                className="img-fluid rounded"
              //to="/offer"

              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold text-primary">Big Billion Days Are Here! </h2>
              <p className="text-dark fs-5">
                Grab exclusive offers on fashion, electronics, home essentials & more.
                Hurry up, deals end soon!
              </p>
              <Link to="/offer" className="btn btn-danger btn-lg mt-3 animate__animated animate__pulse animate__infinite">
                Shop Deals Now
              </Link>
            </div>
          </div>
        </div>
        <h2 className="section-title mt-5">Featured Offers</h2>
        <div className="row mt-3">
          {productsnew.slice(0, 4).map((product) => (
            <div className="col-md-3 mb-4" key={`ad-${product.id}`}>
              <div className="card h-100 shadow-sm border animate__animated animate__fadeInUp">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-danger fw-bold">
                    Special Price: {product.price}
                  </p>
                  <p className="card-text text-muted">
                    Limited time offer! Grab it before it's gone.
                  </p>
                  <Link to={product.link} className="btn btn-warning mt-auto">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 🔥 Sale Banner */}
        <div className="sale-banner my-5 animate__animated animate__fadeInUp">
          <div className="sale-content">
            <h2> End of Season Sale</h2>
            <p>Up to 50% off on selected items</p>
            <button
              className="btn btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSale"
              aria-expanded="false"
              aria-controls="collapseSale"
            >
              Learn More
            </button>
            <div className="collapse" id="collapseSale">
              <div className="card card-body text-dark mt-3">
                Our End of Season Sale is here! Enjoy exclusive discounts of up
                to 50% on a wide range of selected items. Don’t miss out—these
                deals are available for a limited time only.
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 About Section */}
        <div className="about-section pb-5 border-bottom">
          <div className="about-image">
            <img src=" https://media.istockphoto.com/id/1171032733/photo/asian-women-tourists-she-is-excited-to-travel-in-the-studio.jpg?s=612x612&w=0&k=20&c=v1EtvJFFwhaOF89Mt44nwr0eMCKBqU5zIslAgy4a6qM=" alt="About Us" />
          </div>
          <div className="about-text">
            <span className="section-subtitle">About Our System</span>
            <h2>We Recommend the Best Products for You!</h2>
            <p> Our Product Recommender System is designed to simplify your shopping experience. Whether you're searching for fashion, electronics, groceries, or daily essentials, we bring you personalized product suggestions tailored to your needs. </p>
            <p> By analyzing preferences and trending items, we ensure that you always find the right products at the right time, saving both your effort and time while shopping. </p>
            <Link to="/about" className="btn btn-outline-primary"> About Us </Link>
          </div>
        </div>


        {/* 🔥 Footer */}
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
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/men">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
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
              <p>Email: productinfo560@gmail.com</p>
              <p>Phone: +91 9529647719</p>
              <div className="social-icons">
                <Link to="https://github.com/tusharbabar">
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/tushar-babar-69643a292/">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Product Management System. All
              rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Product;




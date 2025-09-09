import React from "react";
import { Link } from "react-router-dom";
import "../style/custom.css";

function OffersPage() {
  const offers = [
    {
      id: 1,
      title: "Wireless Earbuds 40% Off",
      price: "₹1,499",
      oldPrice: "₹2,499",
      image:
        "https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg",
      link: "/electronic",
    },
    {
      id: 2,
      title: "Men's Denim Jacket",
      price: "₹1,199",
      oldPrice: "₹2,499",
      image:
        "https://i.pinimg.com/1200x/cf/ea/c7/cfeac7f1fc5247f1f3a80d0b2f23022b.jpg",
      link: "/men",
    },
    {
      id: 3,
      title: "Women's Designer Saree",
      price: "₹1,799",
      oldPrice: "₹3,599",
      image:
        "https://i.pinimg.com/1200x/8b/69/1a/8b691aeb62447e3f95cfc5343db225f1.jpg",
      link: "/women",
    },
    {
      id: 4,
      title: "Smart LED TV 32 inch",
      price: "₹9,999",
      oldPrice: "₹14,999",
      image:
        "https://i.pinimg.com/736x/d6/80/86/d6808602b2b87a6e75dad19c5a064c4d.jpg    ",
      link: "/electronic",
    },
    {
      id: 5,
      title: "Kids Toy Car Electric",
      price: "₹799",
      oldPrice: "₹1,299",
      image:
        " https://i.pinimg.com/736x/cb/93/01/cb93010ce2b92a6ec728463f643775eb.jpg",
      link: "/kids",
    },
    {
      id: 6,
      title: "Luxury Sofa Set",
      price: "₹18,999",
      oldPrice: "₹25,999",
      image:
        "https://i.pinimg.com/736x/ee/4c/8b/ee4c8b9b9a910c65e4855393d49d06e5.jpg",
      link: "/decor",
    },
    {
      id: 7,
      title: "Kitchen Mixer Grinder",
      price: "₹2,499",
      oldPrice: "₹3,999",
      image:
        "https://i.pinimg.com/736x/e5/cc/0e/e5cc0eea30e0c144defe65de4beeff78.jpg",
      link: "/home",
    },
    {
      id: 8,
      title: "Beauty Makeup Kit",
      price: "₹999",
      oldPrice: "₹1,999",
      image:
        "https://i.pinimg.com/736x/6b/9e/33/6b9e3373272e56d1db330eb9d84f7983.jpg",
      link: "/beauty",
    },
  ];

  return (
    <div className="container my-5 ">
      <h1 className="text-center mb-4"> Exclusive Offers </h1>
      <p className="text-center text-muted">
        Limited-time deals just for you. Hurry before they're gone!
      </p>

      <div className="row mt-4 ">
        {offers.map((offer) => (
          <div className="col-md-3 mb-4" key={offer.id}>
            <div className="card h-100 shadow-sm animate__animated animate__zoomIn">
              <img
                src={offer.image}
                className="card-img-top"
                alt={offer.title}
                style={{ height: 220, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text text-success fw-bold">
                  Now: {offer.price}{" "}
                  <span className="text-muted text-decoration-line-through">
                    {offer.oldPrice}
                  </span>
                </p>
                <Link to={offer.link} className="btn btn-warning mt-auto">
                  Grab Offer 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-primary">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default OffersPage;

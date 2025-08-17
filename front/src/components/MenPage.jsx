import React, { Component } from "react";
import ReactDom from "react-dom";

const mensProducts = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: "₹499",
    image:"https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=768",
    link: "/men",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: "₹499",
    image:"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22776238/2023/4/14/cca91e07-c7b3-4e2a-b474-f0d85587082d1681491945397Tshirts1.jpg",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: "₹999",
    image:"https://www.tenuejeans.com/cdn/shop/files/JACKSONRENO_0051.jpg?v=1746526707&width=1024",
    link: "/",
  },
  {
    id: 4,
    name: "Formal Shirt",
    price: "₹799",
    image:"https://theformalclub.in/cdn/shop/files/PRE_1.jpg?v=1729252020&width=2000",
  },
  {
    id: 5,
    name: "Cotton Pants",
    price: "₹899",
    image:"https://www.waterlifestyle.co.in/cdn/shop/files/GoldenSelfDesign_2.png?v=1713964057",
  },
  {
    id: 6,
    name: "Leather Jacket",
    price: "₹1,499",
    image:"https://www.voganow.com/cdn/shop/files/BBGJ-1108-014_2_copy.jpg?v=1752318542",
  },
  {
    id: 7,
    name: "Hoodie",
    price: "₹799",
    image:"https://glossier-prod.imgix.net/files/glossier-creamhoodie-carousel-01.png?auto=compress,format&cs=srgb&w=1374",
  },
];

class MenPage extends Component {
  render() {
    return (
      <div className="container py-4">
        <h2 className="mb-4 text-center fw-bold" style={{ color: "black"}}>
          Men's Fashion
        </h2>

        <div className="row">
          {
            mensProducts.map((product) => (
             <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
               <div className="card h-100 shadow-sm ">
                 <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold text-success">
                    {product.price}
                  </p>
                  <button className="btn btn-primary mt-auto">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MenPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";

const WomenPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProdService.getProductsByCategory(2) 
      .then((res) => {
        console.log("Women Products API Response:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching women products:", err);
      });
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "black" }}>
        Women's Fashion
      </h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image_url || product.image}
                  className="card-img-top"
                  alt={product.Name || product.name}
                  style={{ height: "200px", objectFit: "cover", }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.Name || product.name}</h5>
                  <p className="card-text fw-bold text-success">
                    ₹{product.price}
                  </p>
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
        ) : (
          <p className="text-center text-muted">⚠️ No products found for Women</p>
        )}
      </div>
    </div>
  );
};

export default WomenPage;

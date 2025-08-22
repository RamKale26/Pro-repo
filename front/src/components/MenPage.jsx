import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";
import "../style/Menpage.css";

function MenPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProdService.getProductsByCategory(1) 
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching men products:", err);
      });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Men's Products</h2>

      <div className="row">
        {products.length === 0 ? (
          <h4 className="text-center text-muted">No products available</h4>
        ) : (
          products.map((product) => (
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
    </div>
  );
}

export default MenPage;

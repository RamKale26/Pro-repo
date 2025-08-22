import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";

function KidsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Kids category_id = 3
    ProdService.getProductsByCategory(3)
      .then((res) => {
        console.log("Kids Products API Response:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching kids products:", err);
      });
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold" style={{ color: "black" }}>
        Kids Fashion
      </h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                {/* Image clickable */}
                <Link
                  to={`/product/${product.id}`}
                  state={{ product }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={product.image_url || product.image}
                    className="card-img-top"
                    alt={product.Name || product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>

                <div className="card-body d-flex flex-column">
                  {/* Name clickable */}
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h5 className="card-title">
                      {product.Name || product.name}
                    </h5>
                  </Link>

                  <p className="card-text fw-bold text-success">
                    ₹{product.price}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="btn btn-primary mt-auto"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">⚠️ No products found for Kids</p>
        )}
      </div>
    </div>
  );
}

export default KidsPage;

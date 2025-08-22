import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";
import "../style/GroceryPage.css";

function GroceryPage() {
  const [groceries, setGroceries] = useState([]);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    ProdService.getProductsByCategory(5) 
      .then((res) => {
        setGroceries(res.data);
      })
      .catch((err) => {
        console.error("Error fetching groceries:", err);
      });
  }, []);

  
  const filteredGroceries = groceries.filter((product) =>
    product.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-3">
      <h2 className="text-center mb-4">Grocery Products</h2>

      {/* 🔍 Search Box */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search grocery..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50 shadow-sm"
        />
      </div>

      <div className="row">
        {filteredGroceries.length === 0 ? (
          <h4 className="text-center text-muted">No groceries found</h4>
        ) : (
          filteredGroceries.map((product) => (
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

export default GroceryPage;

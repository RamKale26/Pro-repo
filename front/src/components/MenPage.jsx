
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ProdService from "../Services/Prodservice";
// import "../style/Menpage.css";

// function MenPage() {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     ProdService.getProductsByCategory(1)
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching men products:", err);
//       });
//   }, []);

// const filteredProducts = products.filter((product) =>
//   product.Name
//     .toLowerCase()
//     .includes(searchTerm.trim().toLowerCase())
// );


//   return (
//     <div className="container py-3">
//       <h2 className="text-center mb-4">Men's Products</h2>

//       {/* 🔎 Search Box */}
//       <div className="row mb-5">
//         <div className="col-md-6 offset-md-3">
//           <input type="text" className="form-control" placeholder="Search products by name..." value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Products */}
//       <div className="row">
//         {filteredProducts.length === 0 ? (
//           <h4 className="text-center text-muted">No products found</h4>
//         ) : (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="col-md-3 mb-4">
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={product.image_url || "/placeholder.png"}
//                   alt={product.Name}
//                   className="card-img-top"
//                   style={{ height: 200, objectFit: "cover" }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{product.Name}</h5>
//                   <p className="card-text text-success">₹{product.price}</p>

//                   <Link
//                     to={`/product/${product.id}`}
//                     state={{ product }}
//                     className="btn btn-primary mt-auto"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default MenPage;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdService from "../Services/Prodservice";
import "../style/Menpage.css";

function MenPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    ProdService.getProductsByCategory(1)
      .then((res) => {
        // 🔽 Sort newest products first
        const sortedProducts = [...res.data].sort((a, b) => b.id - a.id);
        setProducts(sortedProducts);
      })
      .catch((err) => {
        console.error("Error fetching men products:", err);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.Name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="container py-3">
      <h2 className="text-center mb-4">Men's Products</h2>

      {/* 🔎 Search Box */}
      <div className="row mb-5">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <h4 className="text-center text-muted">No products found</h4>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image_url || "/placeholder.png"}
                  alt={product.Name}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {product.Name}
                    {/* 🔖 Highlight NEW tag for latest product */}
                    {index === 0 && (
                      <span className="badge bg-danger ms-2">New</span>
                    )}
                  </h5>
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


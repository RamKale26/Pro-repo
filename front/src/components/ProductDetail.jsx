// import React, { useEffect, useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import ProdService from "../Services/Prodservice";

// function ProductDetail() {
//   const { id } = useParams();
//   const { state } = useLocation();
//   const preloaded = state?.product || null;

//   const [product, setProduct] = useState(preloaded);
//   const [loading, setLoading] = useState(!preloaded);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Agar MenPage se data mila hai to fetch ki zarurat nahi
//     if (preloaded) return;

//     setLoading(true);
//     setError("");

//     ProdService.getProductById(id)
//       .then((res) => {
//         // Backend kabhi array deta hai to first row le lo, warna object
//         const data = Array.isArray(res.data) ? res.data[0] : res.data;
//         if (!data) throw new Error("Product not found");
//         setProduct(data);
//       })
//       .catch((e) => setError(e.message || "Failed to load product"))
//       .finally(() => setLoading(false));
//   }, [id, preloaded]);

//   if (loading) return <h2 className="text-center mt-5">Loading…</h2>;
//   if (error || !product)
//     return <h2 className="text-center mt-5 text-danger">{error || "Product not found"}</h2>;

//   return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Left: Image */}
//         <div className="col-md-6">
//           <img
//             src={product.image_url || "/placeholder.png"}
//             alt={product.Name}
//             className="img-fluid rounded shadow"
//             style={{ maxHeight: 400, objectFit: "contain" }}
//           />
//         </div>

//         {/* Right: Info */}
//         <div className="col-md-6">
//           <h2>{product.Name}</h2>
//           <h4 className="text-success">₹{product.price}</h4>
//           <p className="mt-2">
//             <strong>Description:</strong> {product.description || "No description available"}
//           </p>

//           <div className="d-flex gap-3 mt-4">
//             <button className="btn btn-warning btn-lg">Buy Now</button>
//             <button className="btn btn-success btn-lg">Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProdService from "../Services/Prodservice";

function ProductDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const preloaded = state?.product || null;

  const [product, setProduct] = useState(preloaded);
  const [loading, setLoading] = useState(!preloaded);
  const [error, setError] = useState("");

  useEffect(() => {
    if (preloaded) return;

    setLoading(true);
    setError("");

    ProdService.getProductById(id)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        if (!data) throw new Error("Product not found");
        setProduct(data);
      })
      .catch((e) => setError(e.message || "Failed to load product"))
      .finally(() => setLoading(false));
  }, [id, preloaded]);

  if (loading) return <h2 className="text-center mt-5">Loading…</h2>;
  if (error || !product)
    return <h2 className="text-center mt-5 text-danger">{error || "Product not found"}</h2>;

  // Dummy values (static)
  const dummyRating = 4.3;
  const dummyReviews = 125;
  const dummyStock = "In Stock";
  

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left: Image */}
        <div className="col-md-6">
          <img
            src={product.image_url || "/placeholder.png"}
            alt={product.Name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: 400, objectFit: "contain" }}
          />
        </div>

        {/* Right: Info */}
        <div className="col-md-6">
          <h2>
            {product.Name}{" "}
            <span className="badge bg-info text-dark fs-6">New Arrival</span>
          </h2>

          {/* Price */}
          <h4 className="text-success">₹{product.price}</h4>

          {/* Dummy Rating */}
          <div className="mb-2">
            ⭐ {dummyRating} / 5 ({dummyReviews} reviews)
          </div>
          <p>
            <strong>Stock:</strong> {dummyStock}
          </p>
          {/* Description */}
          <p className="mt-2">
            <strong>Description:</strong>{" "}
            {product.description || "No description available"}
          </p>

          {/* Action Buttons */}
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-warning btn-lg">Buy Now</button>
            <button className="btn btn-success btn-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

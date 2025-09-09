// import React, { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import ProdService from "../Services/Prodservice";
// import CartService from "../Services/CartServices";

// function ProductDetail() {
//   const { id } = useParams();
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const preloaded = state?.product || null;

//   const [product, setProduct] = useState(preloaded);
//   const [loading, setLoading] = useState(!preloaded);
//   const [error, setError] = useState("");

//   // ✅ check login
//   const isLoggedIn = !!localStorage.getItem("user");

//   useEffect(() => {
//     if (preloaded) return;
//     setLoading(true);
//     setError("");

//     ProdService.getProductById(id)
//       .then((res) => {
//         const data = Array.isArray(res.data) ? res.data[0] : res.data;
//         if (!data) throw new Error("Product not found");
//         setProduct(data);
//       })
//       .catch((e) => setError(e.message || "Failed to load product"))
//       .finally(() => setLoading(false));
//   }, [id, preloaded]);

//   if (loading) return <h2 className="text-center mt-5">Loading…</h2>;
//   if (error || !product)
//     return (
//       <h2 className="text-center mt-5 text-danger">
//         {error || "Product not found"}
//       </h2>
//     );

//   const dummyRating = 4.3;
//   const dummyReviews = 125;
//   const dummyStock = "In Stock";

//   const offers = [
//     "Get flat 20% discount with Karur Vysya Bank VISA cards",
//     "Flat ₹100 Off with IDFC FIRST Bank Cards",
//     "Flat ₹100 Off with RBL Bank Credit Cards",
//     "Flat ₹100 Off with HDFC Bank Cards",
//     "Flat 10% discount with IDBI Credit/Debit cards",
//   ];

//   // ✅ Add to Cart
//   const handleAddToCart = () => {
//     if (!isLoggedIn) {
//       navigate("/login"); // redirect to login only if not logged in
//       return;
//     }
//     CartService.addToCart(product);
//     navigate("/cart"); // go to cart page after adding
//   };

//   // ✅ Buy Now
//   const handleBuyNow = () => {
//     if (!isLoggedIn) {
//       navigate("/login"); // redirect to login only if not logged in
//       return;
//     }
//     localStorage.setItem("checkoutProduct", JSON.stringify(product));
//     navigate("/checkout"); // go to checkout page
//   };

//   return (
//     <div className="container py-5 mt-4">
//       <div className="row">
//         {/* Left: Image + Buttons */}
//         <div className="col-md-6 text-center">
//           <img
//             src={product.image_url || "/placeholder.png"}
//             alt={product.Name}
//             className="img-fluid rounded shadow"
//             style={{ maxHeight: 400, objectFit: "contain", width: 400 }}
//           />

//           {/* Buttons below image */}
//           <div className="d-flex justify-content-center gap-3 mt-4">
//             {isLoggedIn ? (
//               <>
//                 <button
//                   className="btn btn-warning btn-lg px-4"
//                   onClick={handleBuyNow}
//                 >
//                   🛒 Buy Now
//                 </button>
//                 <button
//                   className="btn btn-success btn-lg px-4"
//                   onClick={handleAddToCart}
//                 >
//                   Add to Cart
//                 </button>
//               </>
//             ) : (
//               <p className="text-danger fw-bold">
//                 ⚠ Please login first to purchase this product.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Right: Info */}
//         <div className="col-md-6 text-start">
//           <h2>
//             {product.Name}{" "}
//             <span className="badge bg-info text-dark fs-6">New Arrival</span>
//           </h2>

//           <h4 className="text-success">₹{product.price}</h4>
//           <div className="mb-2">
//             ⭐ {dummyRating} / 5 ({dummyReviews} reviews)
//           </div>
//           <p>
//             <strong>Stock:</strong> {dummyStock}
//           </p>
//           <p className="mt-2">
//             <strong>Description:</strong>{" "}
//             {product.description || "No description available"}
//           </p>

//           {/* Offers */}
//           <div className="mt-1 bg-light p-3 rounded">
//             <h5 className="mb-3"> Bank Offers & Discounts</h5>
//             <ul className="list-unstyled">
//               {offers.map((offer, i) => (
//                 <li key={i} className="mb-2">
//                   {offer}
//                 </li>
//               ))}
//             </ul>
//             <button className="btn btn-link p-0">View all offers</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;


import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProdService from "../Services/Prodservice";
import CartService from "../Services/CartServices";

function ProductDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const preloaded = state?.product || null;

  const [product, setProduct] = useState(preloaded);
  const [loading, setLoading] = useState(!preloaded);
  const [error, setError] = useState("");

  // ✅ check login
  const isLoggedIn = !!localStorage.getItem("user");

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
    return (
      <h2 className="text-center mt-5 text-danger">
        {error || "Product not found"}
      </h2>
    );

  const dummyRating = 4.3;
  const dummyReviews = 125;
  const dummyStock = "In Stock";

  const offers = [
    "Get flat 20% discount with Karur Vysya Bank VISA cards",
    "Flat ₹100 Off with IDFC FIRST Bank Cards",
    "Flat ₹100 Off with RBL Bank Credit Cards",
    "Flat ₹100 Off with HDFC Bank Cards",
    "Flat 10% discount with IDBI Credit/Debit cards",
  ];

  // ✅ Add to Cart
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("⚠ Please login first to add products to cart.");
      navigate("/login", { state: { from: `/`, action: "addToCart" } });
      return;
    }
    CartService.addToCart(product);
    navigate("/cart");
  };

  // ✅ Buy Now
  const handleBuyNow = () => {
    if (!isLoggedIn) {
      alert("⚠ Please login first to buy this product.");
      navigate("/login", { state: { from: `/`, action: "buyNow" } });
      return;
    }
    localStorage.setItem("checkoutProduct", JSON.stringify(product));
    navigate("/checkout");
  };

  return (
    <div className="container py-5 mt-4">
      <div className="row">
        {/* Left: Image + Buttons */}
        <div className="col-md-6 text-center">
          <img
            src={product.image_url || "/placeholder.png"}
            alt={product.Name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: 400, objectFit: "contain", width: 400 }}
          />

          {/* Buttons below image */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-warning btn-lg px-4"
              onClick={handleBuyNow}
            >
              🛒 Buy Now
            </button>
            <button
              className="btn btn-success btn-lg px-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right: Info */}
        <div className="col-md-6 text-start">
          <h2>
            {product.Name}{" "}
            <span className="badge bg-info text-dark fs-6">New Arrival</span>
          </h2>

          <h4 className="text-success">₹{product.price}</h4>
          <div className="mb-2">
            ⭐ {dummyRating} / 5 ({dummyReviews} reviews)
          </div>
          <p>
            <strong>Stock:</strong> {dummyStock}
          </p>
          <p className="mt-2">
            <strong>Description:</strong>{" "}
            {product.description || "No description available"}
          </p>

          {/* Offers */}
          <div className="mt-1 bg-light p-3 rounded">
            <h5 className="mb-3"> Bank Offers & Discounts</h5>
            <ul className="list-unstyled">
              {offers.map((offer, i) => (
                <li key={i} className="mb-2">
                  {offer}
                </li>
              ))}
            </ul>
            <button className="btn btn-link p-0">View all offers</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;


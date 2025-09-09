import React from "react";
import { Link } from "react-router-dom";
// import { useWishlist } from "../context/WishlistContext";

function WishList() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0)
    return <h2 className="text-center mt-5">No items in your wishlist ❤️</h2>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">My Wishlist</h2>
      <div className="row">
        {wishlist.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow-sm">
              <img
                src={item.image_url || "/placeholder.png"}
                alt={item.Name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.Name}</h5>
                <p className="card-text text-success">₹{item.price}</p>
                <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;

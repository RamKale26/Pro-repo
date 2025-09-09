import React, { useEffect, useState } from "react";
import UserService from "../Services/Prodservice";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const id = user.id || user.user_id;
      if (id) loadOrders(id);
    }
  }, []);

  const loadOrders = async (userId) => {
    try {
      const res = await UserService.getUserOrders(userId);
      const data = res.data || res;
      setOrders(Array.isArray(data) ? data : data.orders || []);
    } catch (err) {
      console.error("Fetch Orders Error:", err);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found!</p>
      ) : (
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Address</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => {
              const name = o.product_name || o.Name || `#${o.product_id}`;
              const image = o.product_image_url || o.image_url;
              const price = o.product_price || o.price || "-";
              return (
                <tr key={o.id}>
                  <td className="text-center">{o.id}</td>
                  <td>
                    <div className="d-flex align-items-center" style={{ gap: 12 }}>
                      {image ? (
                        <img src={image} alt={name} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 6, border: "1px solid #ddd" }} />
                      ) : (
                        <div style={{ width: 56, height: 56, background: "#f0f0f0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>
                          <span className="text-muted">No Image</span>
                        </div>
                      )}
                      <div>
                        <div className="fw-semibold">{name}</div>
                        <div className="text-muted small">Product ID: {o.product_id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-nowrap">{price !== "-" ? `₹ ${price}` : "-"}</td>
                  <td>{o.address}</td>
                  <td>{o.payment_method}</td>
                  <td>{o.status}</td>
                  <td>{new Date(o.created_at).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;

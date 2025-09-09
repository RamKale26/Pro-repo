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
        <table className="table table-bordered text-center">
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
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.product_id}</td>
                <td>-</td>
                <td>{o.address}</td>
                <td>{o.payment_method}</td>
                <td>{o.status}</td>
                <td>{new Date(o.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;

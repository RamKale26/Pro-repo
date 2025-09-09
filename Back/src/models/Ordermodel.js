import db from "../config/db.js";

const OrderModel = {
  create: (orderData, callback) => {
    const { userId, productId, address, payment } = orderData;
    const sql =
      "INSERT INTO orders (user_id, product_id, address, payment_method) VALUES (?, ?, ?, ?)";
    db.query(sql, [userId, productId, address, payment], callback);
  },

  getUserOrders: (userId, callback) => {
    const sql = `
      SELECT o.id, o.address, o.payment_method, o.status, o.created_at,
             p.Name AS product_name, p.price
      FROM orders o
      JOIN products p ON o.product_id = p.product_id
      WHERE o.user_id = ?
      ORDER BY o.created_at DESC
    `;
    db.query(sql, [userId], callback);
  },
};

export default OrderModel;

import OrderModel from "../models/Ordermodel.js";
import nodemailer from "nodemailer";

const OrderControler = {
  placeOrder: (req, res) => {
    const { userId, productId, address, payment } = req.body;

    if (!userId || !productId || !address || !payment) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    OrderModel.create({ userId, productId, address, payment }, (err, result) => {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ success: false, message: "Database error" });
      }

      // ✅ Nodemailer Setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "babartushar560@gmail.com", // 🔴 replace with your email
          pass: "Pass@1234",       // 🔴 replace with app password
        },
      });

      const mailOptions = {
        from: "yourmail@gmail.com",
        to: req.body.email, // frontend se bhejna hoga user ka email
        subject: "Order Confirmation",
        text: `✅ Your order has been placed successfully!\n\nProduct ID: ${productId}\nPayment: ${payment}\nAddress: ${address}`,
      };

      transporter.sendMail(mailOptions, (mailErr, info) => {
        if (mailErr) {
          console.error("Mail Error:", mailErr);
        }
      });

      return res.json({ success: true, message: "Order placed & email sent" });
    });
  },

  getUserOrders: (req, res) => {
    const { userId } = req.params;
    OrderModel.getUserOrders(userId, (err, results) => {
      if (err) {
        console.error("DB Error:", err);
        return res.status(500).json({ success: false, message: "DB error" });
      }
      return res.json({ success: true, orders: results });
    });
  },
};

export default OrderControler;

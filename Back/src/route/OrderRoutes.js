import express from "express";
import OrderController from "../controller/OrderControler";

const router = express.Router();

router.post("/place-order", OrderController.placeOrder);
router.get("/user-orders/:userId", OrderController.getUserOrders);

export default router;

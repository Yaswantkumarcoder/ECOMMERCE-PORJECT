import express from "express";
import adminAuth from "../Middleware/adminAuth.js";
import {
  placedOrder,
  placedOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import authUser from "../Middleware/auth.js";

//Admin Features
const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);

orderRouter.post("/status", adminAuth, updateStatus);

//payment Features
orderRouter.post("/place", authUser, placedOrder);
orderRouter.post("/stripe", authUser, placedOrderStripe);

//user Features

orderRouter.post("/userOrders", authUser, userOrders);
// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;

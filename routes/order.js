import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminOrders, getMyOrders, getOrderDetails, paymentVerification, placeOrder, placeOrderOnline, processOrder } from "../controllers/order.js";

const router = express.Router();


router.post("/createorder", isAuthenticated, placeOrder); 

router.post("/createorderonline", isAuthenticated, placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get("/myorders",isAuthenticated,getMyOrders);

router.get("/order/:id",isAuthenticated,getOrderDetails);

// Add Admin Middleware
// Authorise admin krke taaki sirf admin hi access kr payee
router.get("/admin/orders",isAuthenticated, authorizeAdmin ,getAdminOrders);
router.get("/admin/order/:id",isAuthenticated, authorizeAdmin ,processOrder);

export default router;
import express from "express";
import {
  checkController,
  loginController,
  logoutController,
  signupController,
  updateProfileContrller,
} from "../controllers/auth.controller.js";
import { ProtectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.put("/update-profile", ProtectRoute, updateProfileContrller);
router.get("/check", ProtectRoute, checkController);
export default router;

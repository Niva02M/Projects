import express from "express";
import {
  getMessages,
  getUsersForSidebar,
  sendMessages,
} from "../controllers/message.controller.js";
import { ProtectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", ProtectRoute, getUsersForSidebar);
router.get("", ProtectRoute, getMessages);
router.post("/send", ProtectRoute, sendMessages);
export default router;

import express from "express";
import { 
  login, 
  register, 
  getProfile, 
  updateProfile, 
  logout 
} from "../../controllers/auth.controller";
import { authenticate } from "../../utils/auth.utils";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes (require authentication)
router.get("/profile", authenticate, getProfile);
router.put("/profile", authenticate, updateProfile);
router.post("/logout", authenticate, logout);

export default router;

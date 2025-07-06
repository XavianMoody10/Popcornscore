import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  userStatus,
} from "../controllers/authentication.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/status", userStatus);

export default router;

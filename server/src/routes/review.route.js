import { Router } from "express";
import {
  deleteReview,
  getReviews,
  postReview,
} from "../controllers/review.controller.js";
import { Review } from "../models/review.model.js";
import { Media } from "../models/media.model.js";

const router = Router();

router.post("/", postReview);
router.get("/", getReviews);
router.delete("/", deleteReview);

export default router;

import { Router } from "express";
import {
  getMovieDetails,
  getMoviesByList,
} from "../controllers/movie.controller.js";
const router = Router();

router.get("/list/:list", getMoviesByList);
router.get("/details", getMovieDetails);

export default router;

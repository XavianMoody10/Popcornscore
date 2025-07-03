import { Router } from "express";
import { getMoviesByList } from "../controllers/movie.controller.js";

const router = Router();

router.get("/list/:list", getMoviesByList);

export default router;

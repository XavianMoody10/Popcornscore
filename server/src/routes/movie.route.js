import { Router } from "express";
import {
  getMovieDetails,
  getMovieGenresList,
  getMoviesByList,
  getMoviesListByGenre,
} from "../controllers/movie.controller.js";

const router = Router();

router.get("/list/:list", getMoviesByList);
router.get("/details", getMovieDetails);
router.get("/genres", getMovieGenresList);
router.get("/discover", getMoviesListByGenre);

export default router;

import { Router } from "express";
import {
  getTVShowDetails,
  getTVShowGenresList,
  getTVShowsByList,
  getTVShowsListByGenre,
} from "../controllers/tvShow.controller.js";

const router = Router();

router.get("/list/:list", getTVShowsByList);
router.get("/details", getTVShowDetails);
router.get("/genres", getTVShowGenresList);
router.get("/discover", getTVShowsListByGenre);

export default router;

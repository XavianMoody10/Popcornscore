import { Router } from "express";
import {
  getMovieDetails,
  getMovieGenresList,
  getMoviesByList,
} from "../controllers/movie.controller.js";

import axios from "axios";

const router = Router();

router.get("/list/:list", getMoviesByList);
router.get("/details", getMovieDetails);
router.get("/genres", getMovieGenresList);
router.get("/discover", async (req, res) => {
  const { genreId, page } = req.query;

  const url = "https://api.themoviedb.org/3/discover/movie";

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      with_genres: genreId,
      language: "en-US",
      page,
    },
  };

  try {
    const response = await axios.get(url, options);
    return res.send(response.data);
  } catch (error) {
    console.error("Error fetching movie genre collection:", error);
    return res.status(404).send("Failed to fetch movie genre collection");
  }
});

export default router;

import { Router } from "express";
import {
  getTVShowDetails,
  getTVShowGenresList,
  getTVShowsByList,
} from "../controllers/tvShow.controller.js";

import axios from "axios";

const router = Router();

router.get("/list/:list", getTVShowsByList);
router.get("/details", getTVShowDetails);
router.get("/genres", getTVShowGenresList);
router.get("/discover", async (req, res) => {
  const { genreId, page } = req.query;

  const url = "https://api.themoviedb.org/3/discover/tv";

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
    console.error("Error fetching tv shows genre collection:", error);
    return res.status(404).send("Failed to fetch tv shows genre collection");
  }
});

export default router;

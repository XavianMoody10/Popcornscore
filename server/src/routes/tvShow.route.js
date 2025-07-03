import { Router } from "express";
import {
  getTVShowDetails,
  getTVShowsByList,
} from "../controllers/tvShow.controller.js";
import axios from "axios";

const router = Router();

router.get("/list/:list", getTVShowsByList);
router.get("/details", getTVShowDetails);

export default router;

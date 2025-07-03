import { Router } from "express";
import { getTVShowsByList } from "../controllers/tvShow.controller.js";

const router = Router();

router.get("/list/:list", getTVShowsByList);

export default router;

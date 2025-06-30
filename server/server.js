import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/config/database/database.config.js";
import { initiateMockServiceWorker } from "./src/config/msw/msw.config.js";

const app = express();
const ORIGIN = process.env.ORIGIN;
const PORT = process.env.PORT;

// Middleware
app.use(cors({ origin: ORIGIN }));
app.use(express.json());

// Routes
initiateMockServiceWorker(); // start mock service worker (DEVELOPMENT ONLY)

// Server
app.listen(PORT, () => {
  console.log("Server has started");
  connectToDatabase();
});

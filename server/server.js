import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { connectToDatabase } from "./src/config/database/database.config.js";
import { initiateMockServiceWorker } from "./src/config/msw/msw.config.js";
import { passport } from "./src/config/passport/passport.config.js";
import authenticationRouter from "./src/routes/authentication.route.js";
import trendingRouter from "./src/routes/trending.route.js";
import movieRouter from "./src/routes/movie.route.js";
import tvRouter from "./src/routes/tvShow.route.js";
import reviewRouter from "./src/routes/review.route.js";

const app = express();
const ORIGIN = process.env.ORIGIN;
const PORT = process.env.PORT;
const secret = process.env.SECRET;

// Enable trust proxy
app.set("trust proxy", true);

// Middleware
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: secret,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_CONNECTION,
      dbName: "test",
    }),
    saveUninitialized: false,
    resave: process.env.NODE_ENV === "production",
    rolling: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/authentication", authenticationRouter);
app.use("/trending", trendingRouter);
app.use("/movie", movieRouter);
app.use("/tv", tvRouter);
app.use("/review", reviewRouter);

initiateMockServiceWorker(); // start mock service worker (DEVELOPMENT ONLY)

// Server
app.listen(PORT, () => {
  console.log("Server has started");
  connectToDatabase();
});

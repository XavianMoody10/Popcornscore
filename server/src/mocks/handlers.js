import { delay, http, HttpResponse } from "msw";
import allTrendingMockdata from "./mockdata/allTrending.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/all/day", async () => {
    await delay(3000);

    return HttpResponse.json(allTrendingMockdata);

    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/trending/movies/day", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
  }),

  http.get("https://api.themoviedb.org/3/trending/tv/day", async () => {
    await delay(3000);
    // return HttpResponse.json();
  }),
];

import { delay, http, HttpResponse } from "msw";
import allTrendingMockdata from "./mockdata/allTrending.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata.js";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata.js";
import airingTodayShowsMockdata from "./mockdata/airingTodayShows.mockdata.js";
import tvShowDetailsMockdata from "./mockdata/tvShowDetails.mockdata.js";
import movieDetailsMockdata from "./mockdata/movieDetails.mockdata.js";

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

  http.get("https://api.themoviedb.org/3/trending/movie/day", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
  }),

  http.get("https://api.themoviedb.org/3/trending/tv/day", async () => {
    await delay(3000);
    // return HttpResponse.json();
  }),

  http.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page");

      await delay(3000);

      return HttpResponse.json(
        nowPlayingMoviesMockdata.find((d) => d.page == page)
      );

      return HttpResponse.json(
        {
          status_code: 7,
          status_message: "This is an error",
          success: false,
        },
        { status: 404 }
      );
    }
  ),

  http.get("https://api.themoviedb.org/3/movie/popular", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/top_rated", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/movie/upcoming", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get(
    "https://api.themoviedb.org/3/tv/airing_today",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page");

      await delay(3000);

      return HttpResponse.json(
        airingTodayShowsMockdata.find((d) => d.page == page)
      );

      return HttpResponse.json(
        {
          status_code: 7,
          status_message: "This is an error",
          success: false,
        },
        { status: 404 }
      );
    }
  ),

  http.get("https://api.themoviedb.org/3/tv/on_the_air", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/popular", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/top_rated", async () => {
    return HttpResponse.json(
      {
        status_code: 7,
        status_message: "This is an error",
        success: false,
      },
      { status: 404 }
    );
  }),

  http.get("https://api.themoviedb.org/3/tv/65701", async () => {
    return HttpResponse.json(tvShowDetailsMockdata);
  }),

  http.get("https://api.themoviedb.org/3/movie/552524", async () => {
    return HttpResponse.json(movieDetailsMockdata);
  }),
];

import axios from "axios";

export async function getMoviesByList(req, res) {
  const { list } = req.params;
  const { page } = req.query;

  const url = `https://api.themoviedb.org/3/movie/${list}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      language: "en-US",
      page,
    },
  };

  try {
    const response = await axios.get(url, options);
    return res.send(response.data);
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return res.status(404).send("Failed to fetch movie list");
  }
}

export async function getMovieDetails(req, res) {
  const { mediaId } = req.query;

  const url = `https://api.themoviedb.org/3/movie/${mediaId}`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    return res.send(response.data);
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return res.status(404).send("Failed to fetch movie details");
  }
}

export async function getMovieGenresList(req, res) {
  const url = "https://api.themoviedb.org/3/genre/movie/list";

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching movie genres:", error);
    return res.status(404).send("Failed to fetch movie genres");
  }
}

export async function getMoviesListByGenre(req, res) {
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
}

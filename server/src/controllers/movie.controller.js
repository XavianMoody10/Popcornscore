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

import axios from "axios";

export async function getTVShowsByList(req, res) {
  const { list } = req.params;
  const { page } = req.query;

  const url = `https://api.themoviedb.org/3/tv/${list}`;

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
    console.error("Error fetching tv shows list:", error);
    return res.status(404).send("Failed to fetch tv shows list");
  }
}

export async function getTVShowDetails(req, res) {
  const { mediaId } = req.query;

  const url = `https://api.themoviedb.org/3/tv/${mediaId}`;

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
    console.error("Error fetching tv show details:", error);
    return res.status(404).send("Failed to fetch tv show details");
  }
}

export async function getTVShowGenresList(req, res) {
  const url = "https://api.themoviedb.org/3/genre/tv/list";

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
    console.error("Error fetching tv show genres:", error);
    return res.status(404).send("Failed to fetch tv show genres");
  }
}

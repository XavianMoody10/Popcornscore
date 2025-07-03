import axios from "axios";

export async function getTrendingMedia(req, res) {
  const { mediaType } = req.params;

  const url = `https://api.themoviedb.org/3/trending/${mediaType}/day`;

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
    if (error?.response?.data) {
      console.log("Trending all error: " + error);

      res.status(400).send("Error getting data");
    }

    res.status(400).send(error.message);
  }
}

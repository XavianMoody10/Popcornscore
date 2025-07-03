import axios from "axios";

export async function getMoviesByList(list, page) {
  const url = `http://localhost:3001/movie/list/${list}`;

  try {
    const response = await axios.get(url, {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

export async function getMovieDetails(movie_id) {
  const url = "http://localhost:3001/movie/details";
  try {
    const response = await axios.get(url, {
      params: {
        movie_id,
      },
    });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

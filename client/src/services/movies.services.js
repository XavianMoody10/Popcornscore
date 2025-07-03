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

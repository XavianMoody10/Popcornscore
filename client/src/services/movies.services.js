import axios from "axios";

export async function getMoviesByList(list, page) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/movie/list/${list}`;

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

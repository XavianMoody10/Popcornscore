import axios from "axios";

export async function getGenreList(mediaType) {
  const url = `http://localhost:3001/${mediaType}/genres`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

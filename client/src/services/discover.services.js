import axios from "axios";

export async function getGenreCollection(mediaType, genreId, page) {
  const url = `http://localhost:3001/${mediaType}/discover`;

  try {
    const response = await axios.get(url, {
      params: {
        genreId,
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

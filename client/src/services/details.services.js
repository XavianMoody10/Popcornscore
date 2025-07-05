import axios from "axios";

export async function getMediaDetails(mediaType, mediaId) {
  const url = `http://localhost:3001/${mediaType}/details`;
  try {
    const response = await axios.get(url, {
      params: {
        mediaId,
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

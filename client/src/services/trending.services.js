import axios from "axios";

export async function getTrendingMedia(mediaType) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/trending/${mediaType}`;

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

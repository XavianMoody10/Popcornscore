import axios from "axios";

export async function getTVShowsByList(list, page) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tv/list/${list}`;

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

export async function getTVShowDetails(series_id) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tv/details`;
  try {
    const response = await axios.get(url, {
      params: {
        series_id,
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

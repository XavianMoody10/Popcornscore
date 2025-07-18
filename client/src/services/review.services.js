import axios from "axios";

export async function postReviewRequest(data) {
  const { userId, mediaId, mediaType, title, review, rating } = data;

  const url = `${import.meta.env.VITE_BACKEND_URL}/review`;

  try {
    if (!userId) {
      throw Error("Must be logged in");
    }

    if (!mediaId) {
      throw Error("mediaId is required");
    }

    if (!mediaType) {
      throw Error("mediaType is required");
    }

    if (!title) {
      throw Error("Please enter a title");
    }

    if (!review) {
      throw Error("Please enter a review");
    }

    if (!rating) {
      throw Error("Please enter a rating");
    }

    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

export async function getMediaReviewsRequest(mediaType, mediaId) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/review`;

  try {
    if (!mediaType) {
      throw Error("mediaType is required");
    }

    if (!mediaId) {
      throw Error("mediaId is required");
    }

    const response = await axios.get(url, {
      params: {
        mediaType,
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

export async function deleteReview(data) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/review`;

  try {
    const response = await axios.delete(url, { data });
    return response;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

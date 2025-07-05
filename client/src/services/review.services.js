import axios from "axios";

export async function postReviewRequest(data) {
  const { userId, mediaId, title, review, rating } = data;

  const url = `http://localhost:3001/review`;

  try {
    if (!userId) {
      throw Error("Must be logged in");
    }

    if (!mediaId) {
      throw Error("mediaId is required");
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

export async function getMediaReviewsRequest(mediaId) {
  const url = `http://localhost:3001/review`;

  try {
    if (!mediaId) {
      throw Error("mediaId is required");
    }

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

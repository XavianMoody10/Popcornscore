import { Media } from "../models/media.model.js";
import { Review } from "../models/review.model.js";
import { User } from "../models/user.model.js";

export async function postReview(req, res) {
  const { userId, mediaId, mediaType, title, review, rating } = req.body;

  try {
    const userDoc = await User.findById(userId).select("-__v -password -email");
    const doesMediaDocExist = await Media.exists({ mediaId, mediaType });

    if (!userDoc) {
      return res.status(404).send("Not authorized");
    }

    if (!doesMediaDocExist) {
      await Media.create({ mediaId, mediaType });
    }

    const reviewDoc = await Review.create({
      title,
      review,
      rating,
      user: userDoc,
    });

    const result = await Media.findOneAndUpdate(
      { mediaId, mediaType },
      { $push: { reviews: reviewDoc } },
      { new: true }
    ).select("-__v");

    res.send(result);
  } catch (error) {
    console.log("Error posting review: " + error);
    res.status(404).send("Error posting review");
  }
}

export async function getReviews(req, res) {
  const { mediaId, mediaType } = req.query;

  try {
    const mediaDoc = await Media.findOne({ mediaId, mediaType });

    if (!mediaDoc) {
      return res.send({ reviews: [] });
    }

    res.send(mediaDoc);
  } catch (error) {
    console.log("Error getting reviews: " + error);
    res.status(404).send("Error getting reviews");
  }
}

export async function deleteReview(req, res) {
  const { mediaId, reviewId } = req.body;

  try {
    await Review.findByIdAndDelete(reviewId);
    const response = await Media.findOneAndUpdate(
      { mediaId },
      {
        $pull: { reviews: { _id: reviewId } },
      }
    );
    res.send(response);
  } catch (error) {
    console.log("Error deleting review: " + error);
    res.status(404).send("Error deleting reviews");
  }
}

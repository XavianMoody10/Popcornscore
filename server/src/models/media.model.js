import mongoose from "mongoose";
import { reviewSchema } from "./review.model.js";

const { Schema } = mongoose;

const mediaSchema = new Schema({
  mediaId: String,
  reviews: [reviewSchema],
});

export const Media = mongoose.model("Media", mediaSchema);

import mongoose from "mongoose";
import { userSchema } from "./user.model.js";

const { Schema } = mongoose;

export const reviewSchema = new Schema({
  title: String,
  review: String,
  rating: Number,
  user: userSchema,
});

export const Review = mongoose.model("Review", reviewSchema);

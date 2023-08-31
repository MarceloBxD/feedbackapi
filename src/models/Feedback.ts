import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);

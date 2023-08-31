import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Feedback } from "../models/Feedback";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello world",
  });
});

routes.post("/send-feedback", async (req: Request, res: Response) => {
  const { rating, description } = req.body;

  if (!rating || !description) {
    return res.status(400).json({
      message: "Missing parameters",
    });
  }

  if (description.length < 3) {
    return res.status(400).json({
      message: "Description must be at least 3 characters long",
    });
  }

  try {
    const feedback = await Feedback.create({
      rating,
      description,
    });

    console.log("Feedback created successfully", feedback);

    return res.status(201).json({
      message: "Feedback sent successfully",
      feedback,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

routes.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions
);

export const db = mongoose.connection;

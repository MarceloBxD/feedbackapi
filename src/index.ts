import bodyParser = require("body-parser");
import { routes } from "./routes";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./mongoconnect";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

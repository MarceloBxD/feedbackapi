"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoconnect_1 = require("./mongoconnect");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes_1.routes);
mongoconnect_1.db.on("error", console.error.bind(console, "connection error:"));
mongoconnect_1.db.once("open", () => {
    console.log("Connected to MongoDB");
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

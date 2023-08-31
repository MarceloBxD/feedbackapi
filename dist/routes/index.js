"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const Feedback_1 = require("../models/Feedback");
exports.routes = (0, express_1.Router)();
exports.routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello world",
    });
});
exports.routes.post("/send-feedback", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const feedback = yield Feedback_1.Feedback.create({
            rating,
            description,
        });
        console.log("Feedback created successfully", feedback);
        return res.status(201).json({
            message: "Feedback sent successfully",
            feedback,
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
}));
exports.routes.use((req, res, next) => {
    const error = new Error("Not found");
    res.status(404).json({
        message: error.message,
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSchema = void 0;
const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    link: { type: String },
    active: { type: Boolean },
});
exports.newSchema = newSchema;

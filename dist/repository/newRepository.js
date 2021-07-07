"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const newSchema_1 = require("../models/newSchema");
exports.default = mongoose.model("news", newSchema_1.newSchema);

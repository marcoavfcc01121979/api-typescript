"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.DB_URL = `mongodb://localhost:27017`;
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Database;

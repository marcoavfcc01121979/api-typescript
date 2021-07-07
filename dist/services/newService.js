"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newRepository_1 = require("../repository/newRepository");
class NewService {
    get() {
        return newRepository_1.default.find({});
    }
    getById(_id) {
        return newRepository_1.default.findById(_id);
    }
    create(news) {
        return newRepository_1.default.create(news);
    }
    update(_id, news) {
        return newRepository_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return newRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewService();

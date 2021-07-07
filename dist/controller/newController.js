"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
const newService_1 = require("../services/newService");
class NewController {
    get(req, res) {
        newService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.ok, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.ok, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newService_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.ok, 'Noticia cadastrada com sucesso!'))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newService_1.default.update(_id, news)
            .then((news) => helper_1.default.sendResponse(res, HttpStatus.ok, `${news.title} foi atualizada com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewController();

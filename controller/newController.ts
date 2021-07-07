import * as HttpStatus from 'http-status';
import Helper from '../infra/helper';
import newService from '../services/newService';

class NewController {
    
    get(req, res) {
        newService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.ok, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    getById(req, res) {
        const _id = req.params.id;

        newService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.ok, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    create(req, res) {
        let vm = req.body;

        newService.create(vm)
            .then(news => Helper.sendResponse(res, HttpStatus.ok, 'Noticia cadastrada com sucesso!'))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    update(req, res) {
        const _id = req.params.id;
        let news = req.body;

        newService.update(_id, news)
            .then((news : any) => Helper.sendResponse(res, HttpStatus.ok, `${news.title} foi atualizada com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    delete(req, res) {
        const _id = req.params.id;

        newService.delete(_id)  
            .then(() => 
                Helper.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new NewController();
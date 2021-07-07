import * as express from 'express'
import * as bodyParser from 'body-parser'

import Database from './infra/db'
import NewController from './controller/newController'

class StartUp {
    public app: express.Application;
    private _db: Database;
    private bodyParser;

    constructor() {
        this.app = express();

        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' })
        })

        // new 
        this.app.route("/api/v1/news").get(NewController.get);
        this.app.route("/api/v1/news/:id").get(NewController.getById);
        this.app.route("/api/v1/news").post(NewController.create);
        this.app.route("/api/v1/news/:id").put(NewController.update);
        this.app.route("/api/v1/news/:id").delete(NewController.delete);
    }
}

export default new StartUp();
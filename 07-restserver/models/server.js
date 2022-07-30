import express from 'express';
import cors from 'cors';
import { router } from '../routes/user.route.js';

export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares();

        // App routes
        this.routes();
    }

    middlewares() {
        // cors
        /* this.app.use(cors); */

        // Read and Parse Body petition
        this.app.use(express.json());

        // public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, router);
    }

    listen() {
        this.app.listen(this.port, () => console.log('Server running in port ' + this.port));
    }
}
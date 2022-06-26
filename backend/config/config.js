import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv'
import { Routes } from '../routes/routes.js'

dotenv.config();

class App{
    app= express.application;
    http = null;
    routes = new Routes();
    

    constructor(){
        this.initializeApp();
    }

    async initializeApp(){
        this.app = express();
        this.config();
        this.http = http.createServer(this.app);
        this.routes.routes(this.app);

    }
    
    config(){
        this.app.use(
            express.urlencoded({
                extended: true
            }));
        this.app.use(express.json());
        this.app.use(cors({origin:'*'}))
    }
}


export default new App();
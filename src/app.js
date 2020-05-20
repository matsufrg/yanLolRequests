import dotenv from 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.disable('x-powered-by');
  }

  routes() {
    this.server.use(routes);
  };
}

export default new App().server;
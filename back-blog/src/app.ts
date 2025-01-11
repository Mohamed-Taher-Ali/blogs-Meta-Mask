import express from 'express';
import cors from 'cors';

import {useRoutes} from './routes';

export class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

 private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

 private routes() {
    useRoutes(this.server, '/api');
  }
}

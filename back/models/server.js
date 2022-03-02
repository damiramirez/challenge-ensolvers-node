require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');
const taskRouter = require('../routes/task');
const folderRouter = require('../routes/folder');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.path = {
      task: '/api/task',
      folder: '/api/folder',
    };

    this.connectDB();

    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.path.folder, folderRouter);
    this.app.use(this.path.task, taskRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

module.exports = Server;

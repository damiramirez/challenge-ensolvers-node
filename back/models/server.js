require('dotenv').config();
const express = require('express');

const { dbConnection } = require('../database/config');
const taskRouter = require('../routes/task');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      task: '/api/task',
    };

    this.connectDB();

    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.path.task, taskRouter);
  }

  middlewares() {
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;

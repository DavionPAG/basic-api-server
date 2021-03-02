'use strict';

const express = require('express');
const app = express();

const errors = require('./error-handlers/500.js');
const badRequest = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
// require routes;

app.use(express.json());
app.use(logger);




app.use('*', badRequest); //404
app.use(errors); //500

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Port ==> ${port}`);
    })
  }
}

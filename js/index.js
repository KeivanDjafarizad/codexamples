const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/log')();
require('./startup/config')();
require('./startup/prod')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validate')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;

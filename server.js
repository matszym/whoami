'use strict';

let express = require('express'),
app = express(),
config = require('./config/config'),
headersController = require('./controllers/headers.server.controller.js'),
server;

app.get('/', headersController.sendHeaders);

server = app.listen(config.port);
console.log('Server listening on:', config.port);
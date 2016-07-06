let express = require('express'),
app = express(),
config = require('./config'),
server;

server = app.listen(config.port);
console.log('Server listening on:', config.port);
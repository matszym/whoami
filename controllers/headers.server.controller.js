'use strict';
let ip = require('ip');

exports.sendHeaders = function(req, res) {
  console.log(req.connection);
  let userAgent = req.headers["user-agent"];

  res.send({
    ipaddress: ip.address(),
    language: req.headers["accept-language"].split(',')[0],
    software: userAgent.slice(userAgent.indexOf('(') + 10, userAgent.indexOf(')'))
  });
}

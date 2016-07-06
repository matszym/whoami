'use strict';
let ip = require('request-ip');

exports.sendHeaders = function(req, res) {
  let userAgent = req.headers["user-agent"];

  res.send({
    ipaddress: ip.getClientIp(req),
    language: req.headers["accept-language"].split(',')[0],
    software: userAgent.slice(userAgent.indexOf('(') + 10, userAgent.indexOf(')'))
  });
}

'use strict';
let ip = require('request-ip');

exports.sendHeaders = function(req, res) {
  let userAgent = req.headers["user-agent"];
  console.log(userAgent);
  res.send({
    ipaddress: ip.getClientIp(req),
    language: req.headers["accept-language"].split(',')[0],
    software: userAgent.match(/\(([^)]+)\)/)[1]
  });
}

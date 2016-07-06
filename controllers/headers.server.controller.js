exports.sendHeaders = function(req, res) {
  'use strict';
  console.log(req.headers);
  let userAgent = req.headers["user-agent"]
  res.send({
    ipaddress: req.ip,
    language: req.headers["accept-language"].split(',')[0],
    software: userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'))
  });
}


const API = function (regexPath, method) {
  this.regexPath = new RegExp(regexPath);
  this.method = method;
}

API.prototype.isSkipRequest = function (req) {
  return this.regexPath.test(req.url) && this.method === req.method;
}

module.exports = API;
const { jwtService } = require("../services")
const ApiError = require("../utils/ApiError")
const API = require("../utils/API");

const skipAuthAPIs = [
  new API("^/accounts$", "POST"),
]

const authHandler = (req, res, next) => {
  if (isSkipAuthAPI(req)) {
    next()
  } else {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.split(" ")[1];
      const decoded = jwtService.verifyToken(token);
      if (decoded) {
        req.currentUser = decoded;
        next()
      }
    } else {
      next(new ApiError(401, "missing access token"))
    }
  }
}

const isSkipAuthAPI = req => {
  for (let api of skipAuthAPIs) {
    if (api.isSkipRequest(req)) {
      return true
    }
  }
  return false;
}

module.exports = authHandler;
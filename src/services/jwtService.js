const moment = require('moment');
var jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');

/**
 * generate token
 * @param {user} user 
 * @returns token
 */
const generateToken = user => {
  const payload = { 
    iat: moment().unix(),
    id: user.id,
    username: user.username,
    role: user.role
  }

  return jwt.sign(payload, process.env.JWT_SECRET_KEY)
}

/**
 * verify access token 
 * @param {token} token 
 * @returns decoded
 */
const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
  } catch (error) {
    throw new ApiError(403, "invalid or expired access token")
  }
}
module.exports = {
  generateToken,
  verifyToken
}


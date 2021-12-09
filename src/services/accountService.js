const User = require("../models/User")
const ApiError = require("../utils/ApiError")
const StringResponse = require("../utils/StringResponse")
const jwtService = require("./jwtService")

const create = async ({ username, password }) => {
  // validate request
  return await User.create({ username, password })
}

const login = async ({ username, password }) => {

  let user = await User.findOne({ where: { username } })
  if (!user)
    throw new ApiError(400, StringResponse.INVALID_ACCOUNT)

  const isValidPass = user.comparePassword(password)

  if (!isValidPass)
    throw new ApiError(400, StringResponse.INVALID_PASSWORD)

  return jwtService.generateToken(user);
}

module.exports = {
  create,
  login
}
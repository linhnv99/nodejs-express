const { accountService } = require("../services")
const ApiResponse = require("../utils/ApiResponse")
const StringResponse = require("../utils/StringResponse")

const createAccount = async (req, res, next) => {
  await accountService.create(req.body)
  res.status(200).json(ApiResponse());
}

const login = async (req, res, next) => {
  const token = await accountService.login(req.body);
  res.status(200).json(ApiResponse({ token }));
}

module.exports = {
  createAccount,
  login
}
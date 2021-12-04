const express = require("express")
const router = express.Router()
const { catchAsync } = require("../middlewares/errorHandler")
const defaultController = require("../controllers/defaultController")

router.route("/")
  .get(catchAsync(defaultController.defaultGetAll))

module.exports = router;
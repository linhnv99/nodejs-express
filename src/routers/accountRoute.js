const express = require("express")
const router = express.Router()
const { catchAsync } = require("../middlewares/errorHandler")
const accountController = require("../controllers/accountController")

router.post("/", catchAsync(accountController.createAccount));
router.post("/login", catchAsync(accountController.login))

module.exports = router
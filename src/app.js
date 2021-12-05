const express = require("express")
const app = express();
const initRoutes = require("./routers")
const { errorHandler } = require("./middlewares/errorHandler")

const CONTEXT_PATH = process.env.CONTEXT_PATH || ''

//init route
app.use(CONTEXT_PATH, initRoutes)

//error handler
app.use(errorHandler)

module.exports = app;





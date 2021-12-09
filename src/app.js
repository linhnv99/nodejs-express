const express = require("express")
const app = express();
const initRoutes = require("./routers")
const { errorHandler } = require("./middlewares/errorHandler")
const authRequester = require("./middlewares/authRequester")

const CONTEXT_PATH = process.env.CONTEXT_PATH || ''

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// auth every request
app.use(authRequester);

app.get("/home", (req, res, next) => {
  res.status(200).json("Welcome to my home")
})

//init route
app.use(CONTEXT_PATH, initRoutes)

//error handler
app.use(errorHandler)

module.exports = app;





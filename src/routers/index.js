const express = require("express")
const router = express.Router()
const defaultRoute = require("./defaultRoute")

const defaultRoutes = [
  {
    path: "/defaults",
    route: defaultRoute
  }
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
});

module.exports = router;
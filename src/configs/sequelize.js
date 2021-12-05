const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  timezone: "+07:00",
  logging: console.log,
  // logging: (...msg) => console.log(msg)
})

module.exports = sequelize;
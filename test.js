const path = require('path')
require('dotenv').config()
const User = require("./src/models/User")
const sequelize = require("./src/configs/sequelize")
const { Op } = require("sequelize");


// CRUD method:  (create, update, destroy)
// Utils method: count, min, max, sum, increment, decrement

const createUser = async (values) => {
  try {
    const rs = await sequelize.transaction(async t => {
      const user = User.create(values, { transaction: t })
      // update xxx, delete yyy
      return user;
    })
    return rs;
  } catch (err) {
    throw err;
  }
}
createUser({ name: "Linh", username: "linhnv", password: "123" })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

// const users = User.findAll({
//   where: {
//     password: {
//       [Op.ne]: null
//     }
//   }
// });
// users.then(res => {
//   console.log(res)
// })

// const update = User.update({ username: "linhnguyenviet" }, {
//   where: {
//     id: "a5e8bf66-e0c9-4fbe-a575-6e39cefdc606"
//   }
// })
// update.then(res => {
//   console.log("Updated: ", res)
// })
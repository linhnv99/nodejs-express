const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = require("./app")
const sequelize = require("./configs/sequelize")
const { redisClient } = require("./configs/webConfig")

const PORT = process.env.PORT || 9000;

const main = async () => {
  try {
    await redisClient.connect();
    await sequelize.authenticate();
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
  } catch (error) {
    throw error;
  }
}

main();
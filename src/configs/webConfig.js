const { createClient } = require("redis")

const client = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  password: process.env.REDIS_PASSWORD
})

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = {
  redisClient: client
};
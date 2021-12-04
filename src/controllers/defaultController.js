const defaultGetAll = (req, res, next) => {
  res.status(200).json("Default site")
}

module.exports = { defaultGetAll }
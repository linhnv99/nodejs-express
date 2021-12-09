const catchAsync = fn => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(err => {
    console.log("CATCH ASYNC ==================> ", err)
    next(err)
  })
}

const errorHandler = (err, req, res, next) => {
  const { httpStatusCode, message } = err;
  console.log("error handler: ", err)
  // xử lý common cho error: 1xx -> 5xx
  res.status(httpStatusCode).json({
    code: httpStatusCode,
    message
  })
}

module.exports = {
  catchAsync,
  errorHandler
}
const ApiResponse = (data, code = 200, message = 'success') => {
  return {
    code,
    message,
    data
  }
}
module.exports = ApiResponse
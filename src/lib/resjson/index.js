export default (code, message, res, total) => {
  const response = {}

  if (code) {
    response.code = code
  }

  if (message) {
    response.message = message
  }

  if (res) {
    response.result = res
  }

  if (total) {
    response.total = total
  }

  return response
}

module.exports = (req, res, next) => {
  if (req.method !== 'GET' && !req.headers.cookies.token) {
    res.statusCode = 401
    res.end()
  } else {
    next()
  }
}
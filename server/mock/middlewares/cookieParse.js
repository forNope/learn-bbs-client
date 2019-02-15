module.exports = (req, res, next) => {
  const result = {}
  const cookie = req.headers.cookie
  if (cookie) {
    cookie
      .split(';')
      .forEach(c => {
        c = c.trim().split('=')
        result[c[0]] = c[1]
      })
  }
  req.headers.cookies = result
  next()
}
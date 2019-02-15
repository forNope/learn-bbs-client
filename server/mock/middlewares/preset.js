module.exports = (req, res, next) => {
  if (!res.finished) res.setHeader('Content-Type', 'application/json;charset=utf-8')
  next()
}
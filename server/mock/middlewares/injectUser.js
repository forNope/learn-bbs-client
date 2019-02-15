module.exports = (req, res, next) => {
  req.user = tokenMap[req.headers.cookies.token]
  
  if (req.user) {
    req.user.isFrozen = req.user.freezeTime > Date.now()
  }
  
  next()
}
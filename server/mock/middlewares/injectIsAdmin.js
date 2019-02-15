module.exports = (req, res, next) => {
  const user = tokenMap[req.headers.cookies.token]
  req.isAdmin = user ? user.hasOwnProperty('password') : false
  next()
}
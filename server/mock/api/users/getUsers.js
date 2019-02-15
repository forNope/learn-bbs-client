module.exports = function (router) {
  router.get('/users', (req, res, next) => {
    const { offset = 0, limit = 10 } = req.query
    res.end(JSON.stringify({
      users: db.users.slice(offset, limit),
      total: db.users.length
    }))
    next()
  })
}
module.exports = function (router) {
  router.delete(`/users/:id`, (req, res, next) => {
    const { id } = req.params
    const { freezeTime = Date.now() + 1000 * 60 * 60 * 24 * 7 } = req.query
    const user = dbUtils.findUser(id)

    if (user) {
      res.statusCode = 200
      user.freezeTime = freezeTime
    } else {
      res.statusCode = 404
    }

    res.end()
    next()
  })
}
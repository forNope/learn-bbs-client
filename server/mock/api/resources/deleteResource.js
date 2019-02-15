module.exports = function (router) {
  router.delete([
    '/posts/:id',
    '/comments/:id',
    '/replies/:id',
    '/teasings/:id',
    '/reports/:id'
  ], (req, res, next) => {
    const resources = req.path.slice(1, req.path.indexOf('/', 1))
    const id = +req.params.id

    const table = db[resources]
    const resourceIndex = table.findIndex(v => v.id === id)

    if (resourceIndex !== -1) {
      res.statusCode = 204
      table.splice(resourceIndex, 1)
    } else {
      res.statusCode = 404
    }

    res.end()

    next()
  })
}
module.exports = function (router) {
  router.get(['/posts/:id', '/comments/:id', '/replies/:id'], (req, res, next) => {
    const resources = req.path.slice(1, req.path.indexOf('/', 1))
    const id = +req.params.id

    const data = db[resources].find(v => v.id === id)

    res.statusCode = Number.isNaN(id)
      ? 400
      : data
        ? 200
        : 404

    if (res.statusCode === 200) {
      dbUtils.attachResourcesInfo(data, req.user)
      res.json(data)
    } else {
      res.end()
    }

    next()
  })

  router.get('/teasings/:id', (req, res, next) => {
    const id = +req.params.id
    const data = dbUtils.findTeasing(id)

    res.statusCode = Number.isNaN(id)
      ? 400
      : data
        ? 200
        : 404

    if(res.statusCode = 200) {
      res.json(data)
    } else {
      res.end()
    }

    next()
  })
}
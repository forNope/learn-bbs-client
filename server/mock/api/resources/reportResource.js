module.exports = function (router) {
  router.post('/:resources/:id/reports', (req, res, next) => {
    const { resources } = req.params
    const id = +req.params.id
    const { reason } = req.body
    const Resource = resourceList.firstUppercase(resourceList.conversionResourceWord(resources))

    const target = db[resources].find(v => v.id === id)
    res.statusCode = target
      ? reason
        ? 204
        : 400
      : 404

    if (res.statusCode === 204) {
      const insertData = {
        id: db.reports.length,
        reporter: req.user,
        target: dbUtils['find' + Resource](id),
        reason,
        createDate: Date.now()
      }

      db.reports.push(insertData)
      db[resourceList.conversionResourceWord(resources) + 'Reports'].push(insertData)
    }

    res.end()

    next()
  })
}
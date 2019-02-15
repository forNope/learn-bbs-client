module.exports = function (router) {
  router.all(['/:resources/:id/agreement', '/:resources/:id/disagreement'], (req, res, next) => {
    const {
      path,
      method,
      params,
      user
    } = req
    const { resources } = params
    const id = +params.id

    if (method !== 'PUT' && method !== 'DELETE') {
      res.statusCode = 405
      next()
      return
    }

    const records = db.perRecord[resources][path.endsWith('/agreement') ? 'agree' : 'disagree']
    const userId = user.id
    if (!records[userId]) records[userId] = []
    const resource = db[resources].find(v => v.id === id)
    const record = records[userId]
    const key = path.endsWith('/agreement') ? 'agreeNum' : 'disagreeNum'

    if (!resource) {
      res.statusCode = 404
    } else {
      res.statusCode = 204

      if (method === 'PUT' && !record.includes(id)) {
        resource[key]++
        record.push(id)
      } else if (method === 'DELETE' && record.includes(id)) {
        resource[key]--
        record.splice(record.indexOf(id), 1)
      }
    }
    res.end()

    next()
  })
}
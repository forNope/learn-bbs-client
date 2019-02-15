const faker = require('faker')

module.exports = function (router) {
  function getToken (user) {
    return Object.keys(tokenMap).find(t => tokenMap[t] === user)
  }

  router.post('/wx/sessions/:code', (req, res, next) => {
    const user = db.users[2]
    res.cookie('token', getToken(user), {
      domain: 'localhost',
      maxAge: 1000 * 60 * 60 * 24 * 1000,
      path: '/',
    })
    res.json(user)
    next()
  })

  router.put('/wx/sessions/:id', (req, res, next) => {
    const user = dbUtils.findUser(req.params.id)
    if (!user) {
      res.statusCode = 404
    } else {
      res.statusCode = 204
      res.cookie('token', getToken(dbUtils.findUser(req.params.id)), {
        domain: 'localhost',
        maxAge: 1000 * 60 * 60 * 24 * 1000,
        path: '/'
      })
    }
    res.end()
    next()
  })
}
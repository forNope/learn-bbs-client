function validate(req, res) {
  const offset = +req.query.offset || 0
  const limit = +req.query.limit || 5

  if (Number.isNaN(+offset) || Number.isNaN(+limit)) {
    res.statusCode = 400
    res.end()

    return false
  }

  return true
}

function exec(data, req, res, next) {
  const { sort = 'hot' } = req.query
  const offset = +req.query.offset || 0
  const limit = +req.query.limit || 5

  if (validate(req, res)) {
    dbUtils.sortResources(data, sort)
    dbUtils.attachResourcesInfo(data, req.user)

    res.statusCode = 200
    res.end(JSON.stringify({
      data: data.slice(offset, offset + limit),
      total: data.length
    }))
  }
  next()
}

module.exports = function (router) {
  router.get(['/posts', '/comments', '/replies'], (req, res, next) => {
    exec(db[req.path.slice(1)], req, res, next)
  })

  router.get(['/users/:userId/posts', '/users/:userId/comments', '/users/:userId/replies'], (req, res, next) => {
    const type = req.path.slice(req.path.lastIndexOf('/') + 1)
    const userId = req.params.userId
    exec(db[type].filter(item => item.author.id === userId), req, res, next)
  })

  router.get('/:category/posts', (req, res, next) => {
    exec(db.posts.filter(post => post.category === req.params.category), req, res, next)
  })

  router.get('/posts/:postId/comments', (req, res, next) => {
    const postId = +req.params.postId
    exec(db.comments.filter(comment => comment.postId === postId), req, res, next)
  })

  router.get('/comments/:commentId/replies', (req, res, next) => {
    const commentId = +req.params.commentId
    exec(db.replies.filter(reply => reply.commentId === commentId), req, res, next)
  })

  router.get('/teasings', (req, res, next) => {
    if (validate(req, res)) {
      const offset = +req.query.offset || 0
      const limit = +req.query.limit || 5
      const {sort} = req.query
      const data = db.teasings

      if(sort === 'hot') data.sort((a, b) => b.agreeNum - a.agreeNum)
      else data.sort((a, b) => b.createDate - a.createDate)

      res.statusCode = 200
      res.end(JSON.stringify({
        data: data.slice(offset, offset + limit),
        total: data.length
      }))
    }

    next()
  })
}
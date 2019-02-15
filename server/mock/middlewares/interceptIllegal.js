module.exports = (req, res, next) => {
  if (req.method !== 'GET') {
    const { isAgreeProtocol, isFrozen } = req.user
    let err
    // token过期
    if (!tokenMap[req.headers.cookies.token]) {
      res.statusCode = 403
      res.end(JSON.stringify({
        code: 2,
        msg: 'invalide token'
      }))
    }
    // 如果不是管理员
    else if (!req.isAdmin) {
      // 未同意协议且路径不含有/protocol
      // 路径含有/protocol意味着要进行协议操作
      if (!isAgreeProtocol && req.path.indexOf('/protocol') !== -1) {
        err = {
          code: 0,
          msg: 'no agree protocol'
        }
      }
      // 被冻结
      else if (isFrozen) {
        err = {
          code: 1,
          msg: 'user is frozen'
        }
      }
    }

    if (err) {
      res.statusCode = 403
      res.end(JSON.stringify(err))
      // 拦截,不进行路由匹配
      return
    }
  }

  next()
}
module.exports = [
  require('./preset'),
  // 解析cookie为对象
  require('./cookieParse'),
  // 如果请求方法不为GET且未登录,拦截下来
  // require('./interceptLogin'),
  // 注入用户信息到req
  require('./injectUser'),
  // 验证是否为管理员,并注入到req.isAdmin中
  require('./injectIsAdmin'),
  // 拦截非法操作
  // require('./interceptIllegal')
]
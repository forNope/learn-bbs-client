require('./database')
const pathUtil = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const faker = require('faker')
const helpsMiddlewares = require('./middlewares')
const config = require('./config')
const express = require('express')
const app = jsonServer.create()
const middlewares = jsonServer.defaults({
  bodyParser: true
})
const wotaRouter = express.Router()
const wxRouter = express.Router()

faker.locale = 'zh_CN'

function requireAll(path, ...args) {
  const stat = fs.statSync(path)
  if (stat.isDirectory()) {
    fs
      .readdirSync(path)
      .forEach(targetPath => {
        requireAll(pathUtil.join(path, targetPath), ...args)
      })
  } else if (pathUtil.extname(path) === '.js') {
    const target = require(path)
    if (Object.prototype.toString.call(target) === '[object Function]') target.apply(null, args)
  }
}

requireAll(pathUtil.join(__dirname, 'api/wx'), wxRouter)
requireAll(pathUtil.join(__dirname, 'api/resources'), wotaRouter)
requireAll(pathUtil.join(__dirname, 'api/users'), wotaRouter)
requireAll(pathUtil.join(__dirname, 'api/stat'), wotaRouter)
requireAll(pathUtil.join(__dirname, 'api/admins'), wotaRouter)

app
  .use(jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/api/*': '/$1'
  }))
  .use(middlewares)
  .use(wxRouter)
  .use(helpsMiddlewares)
  .use(wotaRouter)
  .use(() => {
    dbUtils.save()
  })
  .listen(config.port, config.host)

module.exports = function (port, host) {
  app.listen(port || config.port, host || config.host)
}

console.log(`mock server is listen in ${config.host}: ${config.port}`)
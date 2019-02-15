const path = require('path')
const express = require('express')
const compression = require('compression')
const router = express()

function listen (gzip, port = 3000, host = '0.0.0.0') {
  router
    .use(compression({level: 9}))
    .use(express.static(path.join(process.cwd(), 'dist')))
    .listen(port, host)

  console.log(`server is listen in http://${host || 'localhost'}:${port}`)
}

listen(true)

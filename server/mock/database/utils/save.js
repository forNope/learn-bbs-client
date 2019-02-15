const fs = require('fs')
const path = require('path')

let timer

module.exports = function () {
  clearTimeout(timer)
  timer = setTimeout(() => {
    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(db))
  })
}
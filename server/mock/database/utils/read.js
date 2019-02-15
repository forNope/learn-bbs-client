const fs = require('fs')
const path = require('path')

module.exports = function () {
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../db.json')))
  } catch (err) {
  }
}
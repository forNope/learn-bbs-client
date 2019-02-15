const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
const dbUtils = require('./dbUtils')
const config = require('../config')
const faker = require('faker')
const resourceList = require('./resourceList')

const dbPath = path.join(__dirname, 'db.json')

global.resourceList = resourceList
global.dbUtils = dbUtils

// property automatic completion
global.db = {
  parts: ['married', 'work', 'money', 'study', 'family', 'healthy', 'other'],
  users: [],
  admins: [],
  posts: [],
  comments: [],
  replies: [],
  teasings: [],
  reports: [],
  postReports: [],
  commentReports: [],
  replyReports: [],
  perRecord: {
    posts: {
      agree: [],
      disagree: []
    },
    comments: {
      agree: [],
      disagree: []
    },
    replies: {
      agree: [],
      disagree: []
    },
    teasings: {
      agree: [],
      disagree: []
    }
  }
}

if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify(db))

db = dbUtils.read() || db

Array(resourceList.allResource.length)
  .fill(null)
  .forEach((_, i) => {
    const Resource = resourceList.AllResource[i]
    const resources = resourceList.allResources[i]

    if (!db[resources].length) {
      Array(config.initDataLength)
        .fill(null)
        .forEach(() => dbUtils['insert' + Resource]({
          createDate: new Date(faker.date.past()).getTime()
        }))
    }
  })

dbUtils.save()

global.tokenMap = {}

// 生成用户Token
function genToken(user) {
  const hash = crypto.createHash('sha256')
  tokenMap[hash.update(user.id).digest('hex')] = user
}

db.users.forEach(genToken)

db.admins.forEach(genToken)
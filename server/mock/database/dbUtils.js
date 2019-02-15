const faker = require('faker')
const crypto = require('crypto')
const resourceList = require('./resourceList')
const utils = require('./utils')

function bubble(arr, sortFn = (a, b) => a > b) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let k = i + 1, len = arr.length; k < len; k++) {
      const a = arr[i]
      const b = arr[k]

      if (sortFn(a, b)) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
      }
    }
  }

  return arr
}

const dbUtils = {
  findUser(id) { },
  findAdmin(id) { },
  findPost(id) { },
  findComment(id) { },
  findReply(id) { },
  findTeasing(id) { },
  removeUser(id) { },
  removeAdmin(id) { },
  removePost(id) { },
  removeComment(id) { },
  removeReply(id) { },
  removeTeasing(id) { },
  findUsers({ sort, offset, limit }) { },
  findAdmins({ sort, offset, limit }) { },
  findPosts({ sort, offset, limit }) { },
  findComments({ sort, offset, limit }) { },
  findReplies({ sort, offset, limit }) { },
  findTeasings({ sort, offset, limit }) { },
  findUserByToken(token) {
    return db.users.find(user => {
      const hash = crypto.createHash('sha256')
      return hash.update(user.id).digest('hex') === token
    }) || db.admins.find(user => {
      const hash = crypto.createHash('sha256')
      return hash.update(user.id).digest('hex') === token
    })
  },
  ...utils
}

Array(resourceList.allResource.length)
  .fill(null)
  .forEach((_, i) => {
    const resource = resourceList.allResource[i]
    const resources = resourceList.allResources[i]
    const Resource = resourceList.AllResource[i]
    const Resources = resourceList.AllResources[i]

    dbUtils['find' + Resource] = function (id) {
      return db[resources].find(v => v.id === (Number.isNaN(+id) ? id : +id))
    }

    dbUtils['find' + Resources] = function ({
      sort = 'hot',
      offset = 0,
      limit = 5
    }) {
      let list = db[resources].slice()

      if (resource !== 'user' && resource !== 'admin') {
        sort === 'hot'
          ? bubble(list, (a, b) => b.agreeNum > a.agreeNum)
          : bubble(list, (a, b) => b.createDate > a.createDate)
      }

      return limit === 0 ? list.slice(offset) : list.slice(offset, limit)
    }

    dbUtils['remove' + Resource] = function (id) {
      const index = db[resources].findIndex(v => v.id === id)
      if (index !== -1) {
        db[resources].splice(index, 1)
      }
    }
  })

module.exports = dbUtils
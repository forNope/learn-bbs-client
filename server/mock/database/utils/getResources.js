const attachInfo = require('./attachResourcesInfo')

module.exports = function ({
                             user,
                             sort = 'hot',
                             offset = 0,
                             limit = 5,
                             type
                           }) {
  const data = dbUtils['find' + type[0].toUpperCase() + type.slice(1)]({sort, offset: 0, limit: 0})
  attachInfo(data, user)
  return {
    data: data.slice(offset, offset + limit),
    total: data.length
  }
}
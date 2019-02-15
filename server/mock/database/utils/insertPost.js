const faker = require('faker')
const anonymousAvatar = require('../assets/anonymousAvatar')

module.exports = function (data) {
  const {
    anonymous,
    userId = db.users[faker.random.number(db.users.length - 1)].id,
    category = db.parts[faker.random.number(6)],
    content = faker.random.words(),
    createDate = Date.now(),
    agreeNum = 0,
    disagreeNum = 0,
    commentNum = 0
  } = data
  const user = dbUtils.findUser(userId)
  db.posts.unshift({
    id: db.posts.length + 1,
    author: {
      id: userId,
      nickname: anonymous ? '匿名用户' : user.nickname,
      avatar: anonymous ? anonymousAvatar : user.avatar
    },
    category,
    content,
    createDate,
    agreeNum,
    disagreeNum,
    commentNum
  })
}
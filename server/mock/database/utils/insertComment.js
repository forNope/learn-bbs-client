const faker = require('faker')
const anonymousAvatar = require('../assets/anonymousAvatar')

module.exports = function (data) {
  const {
    userId = db.users[faker.random.number(db.users.length - 1)].id,
    postId = db.posts[faker.random.number(db.posts.length - 1)].id,
    content = faker.random.words(),
    anonymous,
    createDate = Date.now(),
    agreeNum = 0,
    disagreeNum = 0,
    commentNum = 0
  } = data
  const user = dbUtils.findUser(userId)
  if (user) {
    db.comments.unshift({
      id: db.comments.length + 1,
      author: {
        id: userId,
        nickname: anonymous ? '匿名用户' : user.nickname,
        avatar: anonymous ? anonymousAvatar : user.avatar
      },
      postId,
      content,
      createDate,
      agreeNum,
      disagreeNum,
      commentNum
    })
    dbUtils.findPost(postId).commentNum++
  }
}
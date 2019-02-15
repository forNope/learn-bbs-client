const faker = require('faker')
const anonymousAvatar = require('../assets/anonymousAvatar')

module.exports = function (data) {
  const {
    anonymous,
    commentId = db.comments[faker.random.number(db.comments.length - 1)].id,
    senderId = db.users[faker.random.number(db.users.length - 1)].id,
    receiverReplyId,
    content = faker.random.words(),
    createDate = Date.now(),
    agreeNum = 0,
    disagreeNum = 0
  } = data
  const sender = dbUtils.findUser(senderId)
  const receiver = receiverReplyId ? dbUtils.findReply(receiverReplyId) : undefined
  dbUtils.findComment(commentId).commentNum++

  db.replies.unshift({
    id: db.replies.length + 1,
    author: {
      id: senderId,
      nickname: anonymous ? '匿名用户' : sender.nickname,
      avatar: anonymous ? anonymousAvatar : sender.avatar
    },
    replyToAuthor: receiver && receiver.author,
    commentId,
    content,
    createDate,
    agreeNum,
    disagreeNum
  })
}
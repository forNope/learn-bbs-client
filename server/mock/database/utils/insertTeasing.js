const faker = require('faker')
const anonymousAvatar = require('../assets/anonymousAvatar')

module.exports = function (data) {
    const {
        userId = db.users[faker.random.number(db.users.length - 1)].id,
        content = faker.random.words(),
        createDate = Date.now(),
        anonymous = false,
        agreeName,
        agreeNum = 0
    } = data
    const user = dbUtils.findUser(userId)

    db.teasings.unshift({
        id: db.teasings.length + 1,
        author: {
            id: user.id,
            nickname: anonymous ? '匿名用户' : user.nickname,
            avatar: anonymous ? anonymousAvatar : user.avatar
        },
        content,
        createDate,
        agreeNum,
        agreeName,
    })
}
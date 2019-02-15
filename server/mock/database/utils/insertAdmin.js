const faker = require('faker')

module.exports = function (data) {
  const {
    nickname = faker.name.findName(),
    avatar = faker.image.dataUri(),
    username = faker.internet.userName(),
    password = faker.internet.password()
  } = data
  db.admins.unshift({
    id: faker.random.uuid(),
    createDate: Date.now(),
    nickname,
    avatar,
    username,
    password
  })
}
const faker = require('faker')

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

module.exports = function (router) {
    router.get('/stat/:type', (req, res, next) => {
        let { type } = req.params
        if (type === 'provinces') type = 'province'

        if (type === 'users') {
            res.json({
                userNum: db.users.length,
                teasingNum: db.teasings.length,
                postNum: db.posts.length
            })
        } else if (type === 'actives') {
            // 随机返回活跃值
            res.json(new Array(random(2, 7)).fill(null).map(() => faker.random.number(200000)))
        } else {
            const users = db.users
            const stat = {}

            users.forEach(user => {
                if (stat[user[type]] === undefined) stat[user[type]] = 0
                stat[user[type]]++
            })

            res.json(Object.keys(stat).map(key => ({ [type]: key, num: stat[key] })))
        }

        next()
    })
}
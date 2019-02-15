const faker = require('faker')

const provinces = '北京，天津，上海，重庆，河北，山西，辽宁，吉林，黑龙江'.split('，')

const citys = '沈阳市 葫芦岛市 大连市 盘锦市 鞍山市 铁岭市 本溪市 丹东市 南昌市 赣州市 上饶市 宜春市 景德镇市 新余市 九江市 萍乡市'.split(' ')


module.exports = function(data) {
    const {
        nickname = faker.name.findName(),
        avatar = faker.image.dataUri(),
        isAgreeProtocol = faker.random.boolean(),
        freezeTime = 0,
        country = 'CN',
        ages = faker.random.number(50),
        province = provinces[faker.random.number(provinces.length - 1)],
        city = citys[faker.random.number(citys.length - 1)],
        sex = faker.random.number(2),
    } = data
    db.users.unshift({
        id: faker.random.uuid(),
        nickname,
        avatar,
        isAgreeProtocol,
        createDate: Date.now(),
        freezeTime,
        country,
        province,
        city,
        sex,
        ages
    })
}
module.exports = function(router) {
    router.put('/users/:id/info', (req, res, next) => {
        const {id} = req.params
        const {birthday, ages, phone} = req.body    

        req.user.birthday = birthday
        req.user.ages = ages
        req.user.phone = phone

        res.statusCode = 204
        res.end()

        next()
    })
}
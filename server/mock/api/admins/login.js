module.exports = function (router) {
    router.post('/admins', (req, res, next) => {
        res.statusCode = 204
        res.cookie('token', 'admin-token')
        res.end()
        next()
    })
}
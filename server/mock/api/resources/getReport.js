module.exports = function (router) {
    router.get(':resources/reports/:id', (req, res, next) => {
        const { id } = req.params
        const resources = resourceList.conversionResourceWord(req.params.resources)
        const report = db[resources + 'Reports'].find(item => item.id === id)

        if (report) {
            res.statusCode = 200
            res.end(JSON.stringify(report))
        } else {
            res.statusCode = 404
            res.end()
        }


        next()
    })

    router.get('/reports/:id', (req, res, next) => {
        const id = +req.params.id
        const report = db.reports.find(item => item.id === id)

        if (report) {
            res.statusCode = 200
            res.end(JSON.stringify(report))
        } else {
            res.statusCode = 404
            res.end()
        }

        next()
    })
}
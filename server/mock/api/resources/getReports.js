module.exports = function (router) {
    router.get(['/:resources/reports', '/:resources/:id/reports'], (req, res, next) => {
        const { offset = 0, limit = 10 } = req.query
        const { id } = req.params
        const resources = resourceList.conversionResourceWord(req.params.resources)
        let reports = db[resources + 'Reports']

        if (id) { reports = reports.filter(item => item.resourceId === id) }

        res.statusCode = 200
        res.end(JSON.stringify({
            data: reports.slice(offset, offset + limit),
            total: reports.length
        }))

        next()
    })

    router.get('/reports', (req, res, next) => {
        const { offset = 0, limit = 10 } = req.query
        const reports = db.reports

        res.statusCode = 200
        res.end(JSON.stringify({
            data: reports.slice(offset, offset + limit),
            total: reports.length
        }))

        next()
    })
}
const uuidv4 = require('uuid/v4')

module.exports = {
    response : (res, status, error, message, data) => {
        let resultPrint = {}
        resultPrint.id = uuidv4()
        resultPrint.status = status || 200
        resultPrint.error = error || false,
        resultPrint.message = message || 'Success'
        resultPrint.data = data || {}
        
        return res.status(resultPrint.status).json(resultPrint)
    },
    responsePagination : (res, status, error, message, pageDetail, data) => {
        let resultPrint = {}
        resultPrint.id = uuidv4()
        resultPrint.status = status || 200
        resultPrint.error = error || false,
        resultPrint.message = message || 'Success'
        resultPrint.pageDetail = pageDetail || {}
        resultPrint.data = data || {}
        
        return res.status(resultPrint.status).json(resultPrint)
    }
}

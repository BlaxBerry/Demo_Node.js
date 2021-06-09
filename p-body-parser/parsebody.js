const qs = require('querystring')

module.exports = function bodyParser(req, res, next) {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })

    req.on('end', () => {
        // console.log(qs.parse(str));
        req.body = qs.parse(str)
        next()
    })

}

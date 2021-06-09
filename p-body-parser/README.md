### Middleware
parse request body from **urlencoded** to **JSON**
```js
const bd = require('./parsebody.js')

app.use(bd)

app.post('/', (req, res)=>{
    res.send(req.body)
})
```
```js
const qs = require('querystring')

module.exports = function bodyParser(req, res, next) {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })

    req.on('end', () => {
        req.body = qs.parse(str)
        next()
    })

}
```
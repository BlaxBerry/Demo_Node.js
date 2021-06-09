const express = require('express')
const app = express()


// urlencoded
app.use(express.urlencoded({
    extended: false
}))


// JSONP
app.get('/api/jsonp', (req, res) => {
    const fun = req.query.callback
    const data = {
        name: 'JSONP',
        desc: 'by callback function'
    }
    const str = `${fun}(${JSON.stringify(data)})`

    res.send(str)

})


// CORS
const cors = require('cors')
app.use(cors())


// router
const router = require('./router')
app.use('/api', router)





const port = 3000
app.listen(port, () => {
    console.log('Server running at loaclhost:3000');
})
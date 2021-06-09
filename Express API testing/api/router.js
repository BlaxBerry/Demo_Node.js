const express = require('express')

const router = express.Router()


router.use((req,res,next)=>{
    console.log('请求了');
    next()
})


// GET
router.get('/get', (req, res) => {
    const query = req.query;
    res.send({
        // 0: succeed  1:failed
        status: 0,
        msg: 'GET Request Succeed!!!',
        data: query
    })
})


// POST
router.post('/post', (req,res)=>{
    const body = req.body
    res.send({
        // 0: succeed  1:failed
        status: 0,
        msg: 'POST Request Succeed!!!',
        data: body
    })
})



module.exports = router
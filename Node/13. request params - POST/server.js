const http = require('http');
//处理post请求参数的模块
const querystring = require('querystring');

const app = http.createServer();
app.on('request', (req, res) => {

    let postParams = ''
    req.on('data', (params) => {
        postParams += params;
    });

    req.on('end', () => {
        // console.log(postParams);
        console.log(querystring.parse(postParams));
        let obj = querystring.parse(postParams);
        console.log(obj['usrname'], obj['password']);
    });


    res.end('Here is "localhost:3000"');
});
app.listen(3000);
console.log('http Server running at 127.0.0.1:3000');
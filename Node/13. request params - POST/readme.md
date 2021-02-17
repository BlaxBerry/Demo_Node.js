``` js
const http = require('http');
//处理post请求参数的模块
const querystring = require('querystring');

const app = http.createServer();
app.on('request', (req, res) => {

    //每当有post请求参数传入时，执行data事件
    //当post参数传递完成，时执行end事件
    //用一个空字符串变量接收传递进来的post参数
    //用querystring模块的parse()把字符串的参数转换为对象格式

    let postParams = ''
    req.on('data', (params) => {
        postParams += params;

    });

    req.on('end', () => {
        console.log(postParams);

        console.log(querystring.parse(postParams));
        let obj = querystring.parse(postParams);
        console.log(obj['usrname'], obj['password']);
    });

    res.end('Here is "localhost:3000"');
});
app.listen(3000);
console.log('http Server running at 127.0.0.1:3000');
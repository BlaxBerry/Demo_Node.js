//获取通过url地址传入的get请求的参数
// 用url模块

const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    //url.parse('URL地址'，true)解析地址
    //通过解析后的对象中的query属性，获取传入的get参数和值
    let params = url.parse(req.url, true).query;
    console.log(params);

    res.writeHead(200, {
        'content-type': 'text/html;charset="utf-8"'
    });

    res.write(`get params
    name is: ${params.name}
    age is: ${params.age}`)


    res.end();

}).listen(3000);


console.log('server running at 127.0.0.1:3000');
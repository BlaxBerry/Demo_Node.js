const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/css;charset="utf-8' });

    //设置html页面的编码
    //响应头的编码要和页面的编码一致
    res.write('<head><meta charset="UTF-8></head>');

    res.end();
}).listen(3000);
console.log('server running at 127.0.0.1:3000');
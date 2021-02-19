const http = require('http');


// req 客户端传来的信息
// res 响应给浏览器的信息
http.createServer((req, res) => {

    //获取url
    console.log(req.url);

    //设置响应头
    //状态码和内容类型
    res.writeHead(200, {
        'content-type': 'text/html;charset="utf-8"'
    });

    //页面输出内容
    res.write('你好 web server created by Node.js');

    //结束响应
    //不写的页面会一致加载
    //也可以传入内容输出在页面上
    res.end();

}).listen(3000);
//监听端口

console.log('server running at 127.0.0.1:3000');
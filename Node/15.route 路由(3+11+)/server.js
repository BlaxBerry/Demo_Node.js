const http = require('http');
const url = require('url');

//1. 创建http server
//2. 给server添加请求事件
//3. 实现路由
//4. 获取用户的请求方式 req.method
//5. 获取客户端的请求地址 req.url(pathname)

const app = http.createServer();
app.on('request', (req, res) => {

    //处理响应报文的状态码和内容类型
    res.writeHead(200, {
        'conternt-type': 'text/html;charset=utf8'
    })


    //获取请求方式
    //转换成小写字母
    const method = req.method.toLowerCase();

    //获取请求地址
    //let pathname = url.parse(req.url).pathname;
    let { pathname } = url.parse(req.url);

    //判断
    // 先判断请求方式，在根据请求方式查找请求地址
    if (method == 'get') {
        if (pathname == '/' | pathname == '/index') {
            res.end('homepage')
        } else if (pathname == '/login') {
            res.end('login')
        } else {
            res.end('not found')
        }
    } else if (method == 'post') {
        if (pathname == '/' | pathname == '/index') {
            res.end('homepage')
        } else if (pathname == '/login') {
            res.end('login')
        } else {
            res.end('not found')
        }
    }

});
app.listen(3000);
console.log('http server running at 127.0.0.1:3000 ');
```  js
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
//自动判断响应内容的类型的模块
// 第三方模块 mime
const mime = require('mime');


const app = http.createServer();
app.on('request', (req, res) => {

    let { pathname } = url.parse(req.url);
    //请求地址什么都不输入时，默认请求主页
    pathname = pathname == '/' ? '/index.html' : pathname;

    let realPath = path.join(__dirname, 'public', pathname);

    // 利用mime模块判断地址响应的内容的类型
    let type = mime.getType(realPath);
    console.log(type);

    fs.readFile(realPath, (err, doc) => {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('<h1>404 NOT FOUND</h1>')
        } else {

            //找到文件时响应的内容类型
            //利用mime模块
            res.writeHead(200, {
                'content-type': type
            })
            res.end(doc)
        }

    });


});
app.listen(3000);
console.log('http server running at 127.0.0.1:3000');
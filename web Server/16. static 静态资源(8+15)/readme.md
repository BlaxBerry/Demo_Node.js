``` js
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const app = http.createServer();
app.on('request', (req, res) => {

    //1. 获取请求路径
    // url.parse(req.url).pathname
    let { pathname } = url.parse(req.url);


    //2. 转换请求路径为服务器中的真实路径
    //  path.join()拼接路径
    // 服务器当前路径 + 请求路径 ==> 请求文件的真是路径
    // 因为所有网页都在public目录下，所以：
    // __dirname + public + pathname ==> 请求文件的真是路径
    let realPath = path.join(__dirname, 'public', pathname);

    //3. 读取路径文件
    // 读取文件的真是路径
    fs.readFile(realPath, (err, doc) => {

        // 找不到时
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('<h1>404 NOT FOUND</h1>')
        } else {
            // 找到了响应页面
            res.end(doc)
        }

    });


});
app.listen(3000);
console.log('http server running at 127.0.0.1:3000');
const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {

    // 状态码默认是200
    // 200  request succeed
    // 404  not found
    // 505  server error 服务器出问题
    // 400  request error 客户端请求错误
    // res.writeHead(200);
    // res.writeHead(404);
    // res.writeHead(505);
    // res.writeHead(400)

    // 响应内容类型
    //content-type
    // text/palin 纯文本
    // text/html
    // text/css
    // image/jpeg
    // application/json

    // 如下: 400的状态码,纯文本内容类型
    // res.writeHead(400, {
    //     'content-type': 'text/plain'
    // });

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    res.end(`<h4>i am respond content</h4>
            <h4>i am html tag</h4>
    `)

});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
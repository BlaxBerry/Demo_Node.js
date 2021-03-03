const http = require('http');
const url = require('url');

var app = http.createServer();
app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });

    // 获得get请求发来的url地址
    // console.log(url.parse(req.url));
    // console.log(url.parse(req.url).pathname);
    let pathname = url.parse(req.url).pathname;

    // 判断请求地址
    if (pathname == '/' | pathname == '/index') {
        res.end('<h2>welcom to homepage</h2>');
    } else if (pathname == '/list') {
        res.end('<h2>there is list page</h2>');
    } else {
        res.writeHead(404, {
            'content-type': 'text/html;charset=utf-8'
        })
        res.end('<h2>NOT FOUND</h2>');
    }

});

app.listen(3000);
console.log('http server running at localhost:3000');
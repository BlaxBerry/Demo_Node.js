const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {

    // res.end(`user request url：${req.url}`);
    // console.log(req.url); //不包含前面的127.0.0.1：3000的地址，以/开头

    //根据客户端请求的地址不同做出不同的响应
    if (req.url == '/index' | req.url == '/') {
        res.end('this s Hompage')
    } else if (req.url == '/list') {
        res.end('this s list page')
    } else {
        res.end('not Found this page')
    }

});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
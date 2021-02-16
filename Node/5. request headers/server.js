const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {

    //请求报文是键值对的对象
    console.log(req.headers);
    console.log(req.headers['accept']);

    res.end(`${req.headers['accept']}`);
});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
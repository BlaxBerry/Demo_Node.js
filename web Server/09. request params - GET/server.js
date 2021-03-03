// http: //localhost:3000/?name=Andy&age=28
// request parmas is in the url(req.url) required from url
// GET请求的参数

const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {
    // if there is any request parmas requested in url, 
    // get request params from url
    res.end(`${req.url}`);
    console.log(req.url);

});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
const http = require('http');
const url = require('url');

const app = http.createServer();
app.on('request', (req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    })

    // url.parse(req.url,true)
    let { query, pathname } = url.parse(req.url, true);
    // console.log(query.name, query.age);
    // console.log(pathname);

    //判断url请求 (pathname)
    if (pathname == '/' | pathname == '/index') {
        res.end(`<h1>Welcom to Homepage</h1>`);
    } else if (pathname == '/mypage') {
        //获得get参数 (query)
        res.end(`welcome to your page:<h1>${query.name}</h1>`);
    } else {
        req.writeHead(404, {
            'content-type': 'text/html;charset=utf-8'
        });
        res.end(`<h1>not found</h1>`);
    }




});
app.listen(3000);
console.log('http server running at localhost:3000');
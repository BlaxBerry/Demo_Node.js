const http = require('http');
const url = require('url');

const app = http.createServer();
app.on('request', (req, res) => {

    res.writeHead(200, {
        'conternt-type': 'text/html;charset=utf8'
    })


    const method = req.method.toLowerCase();

    let { pathname } = url.parse(req.url);


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
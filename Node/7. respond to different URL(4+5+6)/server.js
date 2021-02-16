const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });

    if (req.url == '/index' | req.url == '/') {
        res.end(`<h2>Welcome to <h1>Homepage</h1></h2>`)
    } else if (req.url == '/about') {
        res.end(`<h2>Welcome to <h1>About me</h1></h2>`)
    } else {
        res.writeHead(404, {
            'content-type': 'text/html;charset=utf8'
        });
        res.end(`<h1>404</h1><h2>Not Found</h2>`)
    }
});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
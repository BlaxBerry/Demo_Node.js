const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html'
    });

    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get')
    }


});

app.listen(3000);
console.log('http server running at 127.0.0.1:3000');
const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {

    if (req.method == 'POST') {
        res.end('It`s <h4>POST</h4>');
    } else if (req.method == 'GET') {
        res.end('It`s <h4>GET</h4>');
    }
});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
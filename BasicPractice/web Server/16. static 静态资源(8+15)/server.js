const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const app = http.createServer();
app.on('request', (req, res) => {

    let { pathname } = url.parse(req.url);

    let realPath = path.join(__dirname, 'public', pathname);

    fs.readFile(realPath, (err, doc) => {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('<h1>404 NOT FOUND</h1>')
        } else {
            res.end(doc)
        }

    });


});
app.listen(3000);
console.log('http server running at 127.0.0.1:3000');
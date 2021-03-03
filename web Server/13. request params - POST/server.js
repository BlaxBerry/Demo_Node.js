const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {

    let postParams = ''
    req.on('data', (params) => {
        postParams += params;
    });

    req.on('end', () => {
        console.log(postParams);
    });


    res.end('Here is "localhost:3000"');
});
app.listen(3000);
console.log('http Server running at 127.0.0.1:3000');
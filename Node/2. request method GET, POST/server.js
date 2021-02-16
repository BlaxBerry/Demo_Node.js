const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {

    console.log(req.method);


    res.end(`request method is : ${req.method}`)
});

app.listen(3000);
console.log('http server running at 127.0.0.1:3000');
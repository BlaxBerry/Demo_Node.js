const http = require("http");

const app = http.createServer();
app.on('request', (req, res) => {


    res.end('<h1>Hello ~ </h1>');
});

app.listen(3000);

console.log('HTTP Server running at 127.0.0.1：300');
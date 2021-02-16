const http = require('http');
const url = require('url');

//获得get请求传递的参数

const app = http.createServer();
app.on('request', (req, res) => {

    // console.log(url.parse(req.url));
    // console.log(url.parse(req.url).query);
    // name=andy&age=28

    let params = url.parse(req.url, true).query;
    console.log(params);
    console.log(params['name'], params['age']);

    res.end(`name is ${params['name']}  age is ${params['age']}`);
});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
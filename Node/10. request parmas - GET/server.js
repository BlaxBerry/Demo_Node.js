const http = require('http');
// URL module
const url = require('url');


const app = http.createServer();
app.on('request', (req, res) => {

    // url.parse() 把req.url获得的 字符串的url地址 换为 对象形式
    // url.parse(req.url);
    res.end(`${url.parse(req.url)}`)

    console.log(req.url);
    console.log(typeof req.url);
    console.log(url.parse(req.url));
    // 转换结果如下:

    // /?name=andy&age=28
    // string
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?name=andy&age=28',
    //     query: 'name=andy&age=28',
    //     pathname: '/',
    //     path: '/?name=andy&age=28',
    //     href: '/?name=andy&age=28'
    //   }

    //其中search 是查询参数
    // 还有类似search的query,但是去除了?
    // pathname 是用户输入的请求地址url(要访问的页面)

});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
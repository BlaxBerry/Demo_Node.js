```js
const http = require('http');
// URL module
const url = require('url');


const app = http.createServer();
app.on('request', (req, res) => {

    console.log(req.url);
    console.log(typeof req.url);

    // url.parse() 把req.url获得的 字符串的url地址 换为 对象形式
    // url.parse(req.url);
    // res.end(`${url.parse(req.url)}`)

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

    // 其中search 是查询参数
    // 还有类似search的query,但是去除了?
    // pathname 是用户输入的请求地址url(要访问的页面)

    // url.parse(url地址,true/false);
    // true: 解析的 url地址中的get请求传进来的参数 以对象形式表现
    // url.parse(req.url,true);

    //如下
    console.log(url.parse(req.url, true));
    //不加第二个参数时,query和search的值还是字符串形式
    // 加了第二个参数true,query的值变为对象形式
    // get请求传递来的参数
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?name=andy&age=28',
    //     query: [Object: null prototype] { name: 'andy', age: '28' },
    //     pathname: '/',
    //     path: '/?name=andy&age=28',
    //     href: '/?name=andy&age=28'
    // }
    let params = url.parse(req.url, true).query;
    console.log(params['name'], params['age']);
    res.end(`name is: ${params['name']}    age is: ${params['age']}`)
});

app.listen(3000);

console.log('http server running at 127.0.0.1:3000');
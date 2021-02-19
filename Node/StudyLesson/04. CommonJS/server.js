const http = require('http');



//引入自定义模块(exports)
const fns = require('./function');
console.log(fns);
//打印的是个对象，需要的时对象的属性
//{ fn: [Function: fn] }

// const xxx = require('./request');
// console.log(xxx);
// xxx.get()

// //引入自定义模块(module.exports)
const xxxx = require('./request');
console.log(xxxx);
//打印的是数据原本
// { get: [Function: get], post: [Function: post] }
xxxx.get()




http.createServer((req, res) => {

    //调用自定义模块的方法
    let finalPath = fns.fn('public/pics');
    console.log(finalPath);

    res.write(finalPath)


    res.end();
}).listen(3000)
# Node.js的模块分类

## 核心模块/系统模块
直接require导入使用
---
## 文件模块/自定义模块
- **公共部分**抽取出为一个单独的js文件，作为一个模块
  该模块内的方法和属性时私有的，外部无法直接访问
- 需要在该模块中通过 **exports** 或 **module.exports** 导出属性或方法
- 需要使用该公共部分的js文件中通过 **require** 方法导入该模块，
  就可使用该模块导出的属性和方法


比如：
外部封装一个拼接路径的函数
然后在server.js文件中使用这个方法
若都写在同一个文件中：
``` js
const http = require('http');


function fn(url) {
    return 'http://www.hello.com/' + url
};


http.createServer((req, res) => {

    let finalPath = fn('public/pics');

    res.write(finalPath);

    res.end();
}).listen(3000)
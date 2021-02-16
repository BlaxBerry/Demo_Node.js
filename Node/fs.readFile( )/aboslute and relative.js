const fs = require('fs');
const path = require('path');

//目标为 读取say_hello.txt
fs.readFile(path.join(__dirname, './say_hello.txt'), 'utf-8', (err, data) => {

    if (err) {
        console.log("读取失败");
    } else {
        console.log(data);
    }
})
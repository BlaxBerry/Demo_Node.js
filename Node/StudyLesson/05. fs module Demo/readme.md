## 服务器的 upload目录
1. 判断服务器是否有upload文件夹
2. 若没有就创建目录
``` js
const fs = require('fs');

fs.stat('./upload', (err, data) => {

    if (err) {
        console.log('There is no such directory or file');

        fs.mkdir('./upload', (err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('make directory succeed');
            }
        })

    } else {
        console.log('there is a upload directory ');

    }


})
```
---
```js
const fs = require('fs');


fs.stat('./upload', (err, data) => {

    if (err) {
        console.log('There is no such directory or file');

        mkdir();
        return;

    } else {
        // it`s a file? directory?
        if (data.isDirectory()) {
            console.log('directory upload is already here');

        } else {
            console.log('upload is a file');
            fs.unlink('./upload', (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('upload is removed');
            });
            mkdir();
        };

    };


    function mkdir() {
        fs.mkdir('./upload', (err) => {
            if (err) {
                console.log(err);
                console.log('make direcrtory failed');
                return;
            }
            console.log('make directory succeed');
        })
    };

})
```


## 目录 放入 数组
1. 找出public目录下的所有目录，然后存入一个数组(仅文件夹，不要文件)
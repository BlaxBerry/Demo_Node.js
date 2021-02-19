## fs.stat 
检查是否存在
检查是文件还是目录

```js
fs.stat('./package.json', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('it s file' + data.isFile());
        console.log('it s directory' + data.isDirectory());
    }
})
```

## fs.mkdir
创建目录
```js
fs.mkdir('./css', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('succeed');
    }
})
```

## fs.writeFile 
创建写入文件（替换）
```js
let content = `<h1>Hello</h1>`
fs.writeFile('./index.html', content, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('writeFile succeed');

})
```

## fs.appendFile
创建追加文件（追加内容）
```js
let content = `<h2 style="color:red">ohhhhhh</h2><br>`
fs.appendFile('./index.html', content, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('appendFile succeed');
})
```

## fs.readFile
读取文件
```js
fs.readFile('./index.html', (err, doc) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(doc);
        console.log(doc.toString());
    }
})
```

## fs.readdir
读取目录
```js
fs.readdir('../05.fs module', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data);
    }
})
```

## fs.rename
1.重命名
2.移动文件
```js
fs.rename('./index.html', './demo.html', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('rename File succeed');
})
```

## fs.rmdir 
删除目录
若目录中有文件，则无法删除
```js
fs.rmdir('./', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('remove directory succeed');
})
```

## fs.unlink
删除文件
```js
fs.unlink('./', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('remove file succeed');
})
```
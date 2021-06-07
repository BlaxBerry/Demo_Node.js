## split .html page 
split a full **.html page** file to **.html , .css , .js** files

``` js
function handleFullPage(targetFile) {
    fs.readFile(path.join(__dirname, targetFile), 'utf8', function (err, data) {
        if (err) {
            return console.log('fail to read file page file', err.message);
        } else {
            // split CSS then write to './index.css'
            getCSS(data, './index.css')
            // split JS then write to './index.js'
            getJS(data, './index.js')
            // split HTML then write to './index.html'
            getHTML(data, './index.html')
        }
    })
}
handleFullPage('./target.html')
```
```js
|
|- target.html
```
```js
|
|- target.html
|- index.html
|- index.css
|- index.js
```
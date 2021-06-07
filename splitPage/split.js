const fs = require('fs')
const path = require('path')

// 正则
// <style>标签
const regStyle = /<style>[\s\S]*<\/style>/
// <script>标签
const regScript = /<script>[\s\S]*<\/script>/



// 拆出CSS
function getCSS(fullPage, fileName) {
    // 拆出标签内容
    const fileContent = getContent(regStyle, fullPage, 'style');
    // 写入CSS文件
    let filePath = path.join(__dirname, fileName)
    writeDownFile(filePath, fileContent)
}

// 拆出JS
function getJS(fullPage, fileName) {
    // 拆出标签内容
    const fileContent = getContent(regScript, fullPage, 'script');
    // 写入JS文件
    let filePath = path.join(__dirname, fileName)
    writeDownFile(filePath, fileContent)
}

// 拆出HTML
function getHTML(fullPage, fileName) {
    // 替换style和script标签
    const fileContent = fullPage.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>');

    // 写入HTML文件
    let filePath = path.join(__dirname, fileName)
    writeDownFile(filePath, fileContent)
}




// 拆出标签内容,并替换
function getContent(regexp, fullPage, tag) {

    // 获取标签内容
    const tagContent = (regexp.exec(fullPage))[0]
    // 替换开始结束标签
    return fileContent = tagContent.replace('<' + tag + '>', '').replace('</' + tag + '>', '')

}


// 写入文件函数
function writeDownFile(filePath, content) {

    fs.writeFile(filePath, content, 'utf8', function (err) {
        if (err) {
            return console.log('写入失败', err.message);
        } else {
            console.log('写入成功', path.basename(filePath));
        }
    })
}



// 从一个完整页面中拆出HTML、CSS、JS
module.exports = function handleFullPage(targetFile) {
    fs.readFile(path.join(__dirname, targetFile), 'utf8', function (err, data) {
        if (err) {
            return console.log('读取失败', err.message);
        } else {
            // 获取完整页面
            // console.log(data);
            // 拆出CSS
            getCSS(data, './index.css')
            // 拆出JS
            getJS(data, './index.js')
            // 拆出HTML
            getHTML(data, './index.html')
        }
    })
}

// module.exports('./text.html')

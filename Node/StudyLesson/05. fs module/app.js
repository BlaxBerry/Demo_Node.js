const fs = require('fs');

// fs.stat('./package.json', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log('it s file' + data.isFile());
//         console.log('it s directory' + data.isDirectory());
//     }
// })

// fs.mkdir('./css', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log('succeed');
//     }
// })

// let content = `<h1>Hello</h1>`
// fs.writeFile('./index.html', content, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('writeFile succeed');

// })

// let content = `<h2 style="color:red">ohhhhhh</h2><br>`
// fs.appendFile('./index.html', content, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('appendFile succeed');
// })

// fs.readFile('./index.html', (err, doc) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(doc);
//         console.log(doc.toString());
//     }
// })

// fs.readdir('../05.fs module', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(data);
//     }
// })

// fs.rename('./index.html', './demo.html', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('rename File succeed');
// })


// fs.rmdir('./', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('remove directory succeed');
// })

// fs.unlink('./', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('remove file succeed');
// })
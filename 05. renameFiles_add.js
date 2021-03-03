const fs = require('fs');
const path = require('path');

let fileList = fs.readdirSync(__dirname);

changname = 'node-';

fileList.forEach(item => {
    if (item.endsWith('.js')) {
        fs.renameSync(item, changname + item);
    }
})
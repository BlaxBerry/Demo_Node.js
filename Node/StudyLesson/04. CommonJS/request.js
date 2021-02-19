let obj = {
    get: function() {
        console.log('get something');
    },
    post: function() {
        console.log('respond something');
    }
}

//使用module.exports
//直接导出数据的本身
module.exports = obj

//使用exports
//作为exports对象的一个属性导出
// exports.xxxx = obj

// 使用exports导出指定的某几个方法
// exports.get = function() {
//     console.log('get something');
// };
// exports.post = function() {
//     console.log('respond something');
// }
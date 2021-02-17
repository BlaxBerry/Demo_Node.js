# GET请求
访问指定网页的地址请求 和 传递的参数 都存放在url地址中
字符串格式

> 127.0.0.1：3000/list/**?name=andy&age=28**

## GET请求的参数
在url对象里的query中

1. 通过srever的on()的参数req的 **req.url**获取，获取来的是**字符串**形式全部url
2. 通过**url module**的 **url.parse()**把字符串的地址转换为**对象**
3. **url.parse(re.url).query**中存放的是GET请求的参数
4. **url.parse(req.url).query['name']**

---

## GET请求的地址
在url对象里的params中

1. 通过srever的on()的参数req的 **req.url**获取，获取来的是**字符串**形式全部url
2. 通过**url module**的 **url.parse()**把字符串的地址转换为**对象**
3. **url.parse(re.url).pathname**中存放的是GET请求的参数


---
---


# POST请求

## POST请求的参数
存放在请求体中
也是字符串格式

**name=andy&age=28**

1. 通过server的on()的参数req的**req.on('data'()=>{ })**监听每次的传参，进行每次传进参数时的处理
2. 传递的参数存放在**req.on('data',(参数)=>{ })**的参数中
2. 声明一个**空字符串**变量，拼接字符串，存放传入的字符串形式的POST参数
3. 通过**querystring module**的**querystring.parse()**把**字符串**的参数转换为**对象**
3. 通过server的on()的参数req的**req.on('end',()=>{ })**结束对每次传参的监听处理,并输出存有参数的变量


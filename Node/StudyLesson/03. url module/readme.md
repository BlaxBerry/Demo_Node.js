# url.parse('URL',true)
``` js
const url = require('url');


console.log(url.parse('http://www.baidu.com/'));
/*#=>
Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: null,
    query: null,
    pathname: '/',
    path: '/',
    href: 'http://www.baidu.com/'
}
*/

console.log(url.parse('http://www.baidu.com/?name=andy&age=28'));
/*#=>
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=andy&age=28',
  query: 'name=andy&age=28',
  pathname: '/',
  path: '/?name=andy&age=28',
  href: 'http://www.baidu.com/?name=andy&age=28'
}
*/


console.log(url.parse('http://www.baidu.com/?name=andy&age=28', true));
/*
Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=andy&age=28',
    query: [Object: null prototype] { name: 'andy', age: '28' },
    pathname: '/',
    path: '/?name=andy&age=28',
    href: 'http://www.baidu.com/?name=andy&age=28'
  }
*/


console.log(url.parse('http://www.baidu.com/?name=andy&age=28', true).query);
//[Object: null prototype] { name: 'andy', age: '28' }

let params = url.parse('http://www.baidu.com/?name=andy&age=28', true).query;
console.log(`name is:  ${params.name}`);
console.log(`age is:   ${params.age}`);
/*
name is:  andy
age is: 28
*/
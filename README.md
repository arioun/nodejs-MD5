# MD5

[![build status](https://secure.travis-ci.org/pvorb/node-md5.png)](http://travis-ci.org/pvorb/node-md5) [![info badge](https://img.shields.io/npm/dt/md5.svg)](http://npm-stat.com/charts.html?package=md5)

一个用MD5显示加密信息的JavaScript方法.

## 安装

你可以安装在服务器端和客户端上.

### [Node.js](http://nodejs.org/):

~~~
npm install md5
~~~


## API

~~~ javascript
md5(message)
~~~

  * `message` -- `String` 或者 `Buffer`
  * 返回 `String`


## 使用

~~~ javascript
var md5 = require('md5');

console.log(md5('message'));
~~~

它将会打印如下字段

~~~
78e731027d8fd50ed642340b7c9a63b3
~~~

它同样支持buffers

~~~ javascript
var fs = require('fs');
var md5 = require('md5');

fs.readFile('example.txt', function(err, buf) {
  console.log(md5(buf));
});
~~~

## 版本

2.1.1




## 证书
[MIT](LICENSE)

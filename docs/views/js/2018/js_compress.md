---
title: 代码压缩
categories: JavaScript
tags: js
---

## 通过node实现代码压缩

1. [安装nodejs](https://nodejs.org/en/)
2. 接下来使用`npm init -y`生成一个默认的package.json文件
3. `npm install uglify-es`下载包
4. 最后使用`npx uglifyjs -c -m -o finename.min.js -- filename.js`
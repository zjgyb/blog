---
title: 说说颜色转换
copyright: true
date: 2019-08-30 22:17:55
categories: JavaScript
tags:
  - RGBA
  - HSL
  - HEX
  - Color
  - JavaScript
keywords: RGBA HSL HEX JavaScript颜色转换
description: 本文总结使用JS进行颜色转化
images: /color_change/colors.jpg
---

## 前言

在项目中遇到了颜色转换，因此就研究了如何进行颜色转换，记录下来方便以后温故。

## 十六进制转换成 RGBA

```js
/**
 * description: 把十六进制颜色转化成rgba, 分别有三种, 例如: '#fff' '#ffff00' '#ffff00ff'——注意默认最后两位为透明度的rgba
 * param {type} str为上面描述的参数
 * return: rgba(num, num, num, num) 例如传入'#ffffff' 传出rgba(255, 255, 255, 1.00)没有透明度值默认是1
 */
function changeHexToRgba(str) {
  const REGCOLOR = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  const ISRGBA = REGCOLOR.test(str);
  if (ISRGBA === false) {
    throw Error("Not a valid value");
  }
  // 去掉#号
  const colorStr = str.slice(1);
  const len = colorStr.length;
  if (len === 3) {
    const color = colorStr
      .split("")
      .map(ele => parseInt(`0x${ele.repeat(2)}`))
      .join(",");
    return `rgba(${color},1)`;
  }
  const color = colorStr.match(/[A-z0-9]{2}/g).map(ele => parseInt(`0x${ele}`));
  if (len === 6) {
    return `rgba(${color.join(",")},1)`;
  }

  if (len === 8) {
    const opacity = (color.pop() / 255).toFixed(2);
    return `rgba(${color.slice(0, 3).join(",")}, ${opacity})`;
  }
}
```

## RGBA 转换成 16 进制

安卓显示颜色的十六进制是`ARGB`格式，因此一开始我误以为网页里面显示的十六进制也是`ARGB`，实际是`RGBA`也就是`hex`的值

```js
/**
 * description: 把rgba颜色转化成十六进制颜色
 * param {type} str为rgba值, 例如rgba(255, 255, 255, 1);
 * return: 十六进制值 例如: #ffffffff
 */
function changeRgbaToHex(str) {
  const colorArr = str.match(/(0\.)?\d+/g);
  const color = colorArr.map((ele, index, array) => {
    if (index === array.length - 1) {
      // 透明度
      let opacity = (ele * 100 * 255) / 100;
      return Math.round(opacity)
        .toString(16)
        .padEnd(2, "0");
    }
    return Number.parseFloat(ele)
      .toString(16)
      .padStart(2, "0");
  });
  return `#${color.join("")}`;
}
```

## RGBA 转换成 HSLA

### 转换公式(来自维基百科, 最下面有链接, 点击图片可以放大)

<img src="./color_change/rgb_hsl.png" alt="RGBA 转换成 HSLA" width="100%" />

### 按照转换公式实现代码

```js
/**
 * description: 把rgba颜色转化成hsla颜色
 * param {type} str为rgba值, 例如rgba(15, 244, 235, 0.5);
 * return: hsla值 例如: hsla(178， 91%, 51%, 0.5)
 */
function changeRgbaToHSLA(str) {
  const colorArr = str.match(/(0\.)?\d+/g);
  const opacity = colorArr.pop();
  const r = colorArr[0] / 255;
  const g = colorArr[1] / 255;
  const b = colorArr[2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const num = max - min;
  let h = 0;
  let s = 0;
  let l = 0.5 * (max + min);
  if (max !== min) {
    s = l <= 0.5 ? num / (2 * l) : num / (2 - 2 * l);
    switch (max) {
      case b:
        h = ((r - g) / num) * 60 + 240;
        break;
      case g:
        h = ((b - r) / num) * 60 + 120;
        break;
      case r:
        h = g >= b ? ((g - b) / num) * 60 : ((g - b) / num) * 60 + 360;
        break;
      default:
        break;
    }
  }

  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `hsl(${h}, ${s}%, ${l}%, ${opacity})`;
}
```

## HSL 转换成 RGB

> Hue, Saturation, Lightness 分别代表色相(0~360°)、饱和(0~100%)、亮度(0~100%)

### 转换公式(来自维基百科, 最下面有链接, 点击图片可以放大)

<img src="./color_change/hsl_rgb.png" alt="HSL 转换成 RGB" width="100%" />

{% note info %}
刚开始没看懂tC是什么，所以注明一下，tC就是tR，tG，tB三个变量按tC的规则分别进行运算最终得到R、G、B的值
{% endnote %}

### 按照转换公式实现代码

```js
/**
 * description: 把hsl颜色转化成rgb颜色
 * param {type} str为hsl值, 例如hsl(178, 40%, 50%);
 * return: rgb值 例如: rgb(77, 179, 175)
 */
function changeHSLToRGB(str) {
  const colorArr = str.match(/\d+/g);
  let [h, s, l] = colorArr;
  h = h / 360;
  s = s / 100;
  l = l / 100;
  if (s === 0) {
    l = Math.round(l * 255);
    return `rgb(${l}, ${l}, ${l})`;
  }

  const getRGB = num => {
    let q = l >= 0.5 ? l + s - l * s : l * (1 + s); // 注意最后是数字1加上s，不是字母l
    let p = 2 * l - q;
    if (num < 0) {
      num += 1;
    }
    if (num > 1) {
      num -= 1;
    }
    switch (true) {
      case num > 2 / 3:
        num = p;
        break;
      case num >= 1 / 2:
        num = p + (q - p) * 6 * (2 / 3 - num);
        break;
      case num >= 1 / 6:
        num = q;
        break;
      default:
        num = p + (q - p) * 6 * num;
        break;
    }
    return Math.round(num * 255);
  };
  let tR = getRGB(h + 1 / 3);
  let tG = getRGB(h);
  let tB = getRGB(h - 1 / 3);
  return `rgb(${tR}, ${tG}, ${tB})`;
}
```

## 总结一下

虽然能够进行颜色转换，但是除了第一个代码外其他的我都没有判断传入的值是否正确，这是一个待完善的地方。不过总算知道了如何转换，之后用到颜色转换就能够开心的复制粘贴了:smile:

## 参考教程

- [维基百科](https://zh.wikipedia.org/wiki/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4)
- [Syean 的博客](http://syean.cn/2017/03/17/JS%E5%AE%9E%E7%8E%B0RGB-HSL-HSB%E7%9B%B8%E4%BA%92%E8%BD%AC%E6%8D%A2/)
- [首屏图片来自YouTube](https://www.youtube.com/watch?v=tQASh8bbkUY)

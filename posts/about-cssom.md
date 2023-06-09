---
title: '「中文」CSSOM 相关'
date: '2023-05-13'
---

## CSSOM 是什么

浏览器解析 CSS 样式文件后，将解析后的样式信息以 JS 对象的形式呈现出来，形成一个 CSSOM 对象树。CSSOM 类似于 DOM，只是它描述的是「样式信息」而非「文档结构」。

CSSOM 树是基于 DOM 树构建的，它关联了 DOM 树上的每一个元素节点和样式表中的生命规则，由此构建一个样式信息树。在确定 DOM 元素的样式时，浏览器会通过匹配 CSSOM 树中的特定规则来计算元素的具体样式。

## 浏览器渲染过程

浏览器渲染页面时，需要将 HTML、CSS、JS 等文件解析后生成响应的 DOM 树、CSSOM 树、呈现树和绘图线程。在此过程中，涉及到「重绘」、「回流」、「合成」。

### 合成（Composition）

合成是指浏览器在执行绘图操作时，将多个位图片段组合在一起，形成最终的屏幕像素。可用于优化页面性能，减少重绘和回流操作。

浏览器使用合成原语进行构造：分层、裁剪和混合。浏览器将页面分层一层层，每一层独立运算，并作为一个整体进行绘制。

合成流程是在绘图线程内完成的，所以它不会被回流和重绘所影响，这样可以提高渲染效率和页面性能。

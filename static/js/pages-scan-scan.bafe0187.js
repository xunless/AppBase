(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scan-scan"],{3476:function(n,t,r){"use strict";var a;r.d(t,"b",(function(){return e})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));var e=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticStyle:{padding:"20rpx"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.scan.apply(void 0,arguments)}}},[n._v("扫码")])],1)},i=[]},"538a":function(n,t,r){"use strict";r.r(t);var a=r("3476"),e=r("62d4");for(var i in e)"default"!==i&&function(n){r.d(t,n,(function(){return e[n]}))}(i);r("544e");var o,u=r("f0c5"),c=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"7792a243",null,!1,a["a"],o);t["default"]=c.exports},"544e":function(n,t,r){"use strict";var a=r("bfa6"),e=r.n(a);e.a},"62d4":function(n,t,r){"use strict";r.r(t);var a=r("f416"),e=r.n(a);for(var i in a)"default"!==i&&function(n){r.d(t,n,(function(){return a[n]}))}(i);t["default"]=e.a},"65d2":function(n,t,r){var a=r("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-7792a243],\r\nuni-view[data-v-7792a243],\r\nuni-text[data-v-7792a243],\r\nuni-image[data-v-7792a243],\r\nuni-scroll-view[data-v-7792a243],\r\nuni-swiper[data-v-7792a243],\r\nuni-swiper-item[data-v-7792a243]{\r\nbox-sizing:border-box\n}.btn[data-v-7792a243]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-7792a243]{background-color:#fff}',""]),n.exports=t},bfa6:function(n,t,r){var a=r("65d2");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=r("4f06").default;e("3983de70",a,!0,{sourceMap:!1,shadowMode:!1})},f416:function(n,t,r){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{}},onLoad:function(){},methods:{scan:function(){uni.scanCode({success:function(t){n.log("条码类型："+t.scanType),n.log("条码内容："+t.result)}})}}};t.default=r}).call(this,r("5a52")["default"])}}]);
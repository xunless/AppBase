(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-messageCenter-set"],{"073b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-7171d0b0],\r\nuni-view[data-v-7171d0b0],\r\nuni-text[data-v-7171d0b0],\r\nuni-image[data-v-7171d0b0],\r\nuni-scroll-view[data-v-7171d0b0],\r\nuni-swiper[data-v-7171d0b0],\r\nuni-swiper-item[data-v-7171d0b0]{\r\nbox-sizing:border-box\n}.btn[data-v-7171d0b0]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7171d0b0],\r\nuni-view[data-v-7171d0b0],\r\nuni-text[data-v-7171d0b0],\r\nuni-image[data-v-7171d0b0],\r\nuni-scroll-view[data-v-7171d0b0],\r\nuni-swiper[data-v-7171d0b0],\r\nuni-swiper-item[data-v-7171d0b0]{\r\nbox-sizing:border-box\n}.btn[data-v-7171d0b0]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}.content-tree .content-tree-head .tree-head[data-v-7171d0b0]{padding-left:%?25?%;background-color:#fff;font-size:%?32?%}.content-tree .content-tree-head .tree-head .tree-head-h[data-v-7171d0b0]{padding-left:%?25?%;padding-right:%?56?%;height:%?150?%;border-bottom:%?1?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-tree .content-tree-head .tree-head uni-image[data-v-7171d0b0]{width:%?88?%;height:%?88?%;border-radius:50%}.content-tree .content-tree-head .tree-con[data-v-7171d0b0]{background:#f9f9f9;height:%?20?%}.content-tree .content-tree-head:nth-child(1) .tree-head-h[data-v-7171d0b0], .content-tree .content-tree-head:nth-child(6) .tree-head-h[data-v-7171d0b0], .content-tree .content-tree-head:nth-child(8) .tree-head-h[data-v-7171d0b0]{border:0}',""]),t.exports=e},"0b2e":function(t,e,n){"use strict";var i=n("f779"),a=n.n(i);a.a},"3ae2":function(t,e){t.exports="data:image/png;base64,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"},"3eb1":function(t,e){t.exports="data:image/png;base64,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"},4412:function(t,e,n){var i=n("4961");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("86461968",i,!0,{sourceMap:!1,shadowMode:!1})},4524:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("02f4").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-numberbox"},[n("v-uni-view",{staticClass:"u-icon-minus",class:{"u-icon-disabled":t.disabled||t.inputVal<=t.min},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("minus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"minus",size:t.size}})],1),n("v-uni-input",{staticClass:"u-number-input",class:{"u-input-disabled":t.disabled},style:{color:t.color,fontSize:t.size+"rpx",background:t.bgColor,height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),n("v-uni-view",{staticClass:"u-icon-plus",class:{"u-icon-disabled":t.disabled||t.inputVal>=t.max},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("plus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"plus",size:t.size}})],1)],1)},r=[]},4534:function(t,e,n){"use strict";n.r(e);var i=n("4524"),a=n("a5f4");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("5d0b");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"21568f1e",null,!1,i["a"],o);e["default"]=c.exports},4961:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-ca781666],\r\nuni-view[data-v-ca781666],\r\nuni-text[data-v-ca781666],\r\nuni-image[data-v-ca781666],\r\nuni-scroll-view[data-v-ca781666],\r\nuni-swiper[data-v-ca781666],\r\nuni-swiper-item[data-v-ca781666]{\r\nbox-sizing:border-box\n}.btn[data-v-ca781666]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-ca781666]{background-color:#f6f6f6;height:100%}.content .set[data-v-ca781666]{position:fixed;bottom:%?50?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),t.exports=e},4981:function(t,e,n){"use strict";n.r(e);var i=n("b013"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"4cb6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-1da884f5],\r\nuni-view[data-v-1da884f5],\r\nuni-text[data-v-1da884f5],\r\nuni-image[data-v-1da884f5],\r\nuni-scroll-view[data-v-1da884f5],\r\nuni-swiper[data-v-1da884f5],\r\nuni-swiper-item[data-v-1da884f5]{\r\nbox-sizing:border-box\n}.btn[data-v-1da884f5]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1da884f5],\r\nuni-view[data-v-1da884f5],\r\nuni-text[data-v-1da884f5],\r\nuni-image[data-v-1da884f5],\r\nuni-scroll-view[data-v-1da884f5],\r\nuni-swiper[data-v-1da884f5],\r\nuni-swiper-item[data-v-1da884f5]{\r\nbox-sizing:border-box\n}.btn[data-v-1da884f5]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}.content-tree .content-tree-head .tree-head[data-v-1da884f5]{background-color:#fff;padding:0 %?56?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-tree .content-tree-head .tree-head .tree-head-h[data-v-1da884f5]{height:%?130?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.content-tree .content-tree-head .tree-head .tree-head-h uni-image[data-v-1da884f5]{width:%?56?%;height:%?56?%;margin-right:%?32?%}.content-tree .content-tree-head .tree-head .image[data-v-1da884f5]{width:%?88?%;height:%?64?%}.content-tree .content-tree-head .tree-head .text[data-v-1da884f5]{color:#bfbfbf;font-size:%?28?%}.content-tree .content-tree-head .tree-head .new[data-v-1da884f5]{display:inline-block;width:%?80?%;height:%?36?%;background:#d12324;border-radius:%?18?%;font-size:%?24?%;color:#fff;text-align:center;line-height:%?36?%}.content-tree .content-tree-head .tree-con[data-v-1da884f5]{background:#f9f9f9;height:%?74?%;padding-left:%?48?%;line-height:%?74?%;color:#bfbfbf;font-size:%?28?%}.content-tree .content-tree-head:nth-child(1) .tree-head-h[data-v-1da884f5], .content-tree .content-tree-head:nth-child(6) .tree-head-h[data-v-1da884f5], .content-tree .content-tree-head:nth-child(8) .tree-head-h[data-v-1da884f5]{border:0}',""]),t.exports=e},"5a6d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-1f5b49d4],\r\nuni-view[data-v-1f5b49d4],\r\nuni-text[data-v-1f5b49d4],\r\nuni-image[data-v-1f5b49d4],\r\nuni-scroll-view[data-v-1f5b49d4],\r\nuni-swiper[data-v-1f5b49d4],\r\nuni-swiper-item[data-v-1f5b49d4]{\r\nbox-sizing:border-box\n}.btn[data-v-1f5b49d4]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1f5b49d4],\r\nuni-view[data-v-1f5b49d4],\r\nuni-text[data-v-1f5b49d4],\r\nuni-image[data-v-1f5b49d4],\r\nuni-scroll-view[data-v-1f5b49d4],\r\nuni-swiper[data-v-1f5b49d4],\r\nuni-swiper-item[data-v-1f5b49d4]{\r\nbox-sizing:border-box\n}.btn[data-v-1f5b49d4]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}.content-set[data-v-1f5b49d4]{background-color:#f6f6f6}.content-set .set-one .set-one-head[data-v-1f5b49d4]{text-align:center;padding-bottom:%?49?%;color:#2b2e31;font-size:%?30?%}.content-set .set-one .set-one-head uni-image[data-v-1f5b49d4]{padding-top:%?37?%;width:%?130?%;height:%?130?%}.content-set .set-one .set-one-con[data-v-1f5b49d4]{border-bottom:%?1?% solid #eee;height:%?106?%;background-color:#fff;width:100%;padding-left:%?31?%;padding-right:%?33?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-set .set-one .set-one-con .set-con-head[data-v-1f5b49d4]{width:%?136?%;font-size:%?30?%}.content-set .set-one .set-one-con .set-con-name[data-v-1f5b49d4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-set .set-one .set-one-con .set-con-name .uni-input-placeholder[data-v-1f5b49d4],\r\n.content-set .set-one .set-one-con .set-con-name .input-placeholder[data-v-1f5b49d4],\r\n.content-set .set-one .set-one-con .set-con-name .text[data-v-1f5b49d4]{font-size:%?28?%!important;color:#999!important}.content-set .set-one .set-one-con .set-con-name uni-text[data-v-1f5b49d4]{display:inline-block;width:100%}.content-set .set-one .set-one-con .set-con-name uni-image[data-v-1f5b49d4]{width:%?15?%;height:%?28?%;margin-left:%?25?%}.content-set .set-one .set-one-con .set-con-name uni-input[data-v-1f5b49d4],\r\n.content-set .set-one .set-one-con .set-con-name uni-view[data-v-1f5b49d4]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.content-set .set-one .set-one-con .set-con-name .uni-list[data-v-1f5b49d4]{width:100%}.content-set .set-one .set-one-con .set-con-name .image[data-v-1f5b49d4]{width:%?86?%;height:%?86?%;text-align:right}.content-set .set-two .set-two-con[data-v-1f5b49d4]{height:%?150?%!important}.content-set .set-two .set-one-con .set-con-name[data-v-1f5b49d4]{text-align:right!important}.content-set .popup[data-v-1f5b49d4]{height:%?200?%}.content-set .popup uni-view[data-v-1f5b49d4]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;border-bottom:%?1?% solid #eee}.content-set .popup uni-view[data-v-1f5b49d4]:last-child{border:0!important}.content-set .popup .active[data-v-1f5b49d4]{color:red}',""]),t.exports=e},"5d0b":function(t,e,n){"use strict";var i=n("a630c"),a=n.n(i);a.a},6974:function(t,e,n){"use strict";n("c975"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal:function(t,e){var n=this;if(""!=t){var i=0,a=this.$u.test.number(t);i=a&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(i=e,this.$nextTick((function(){n.inputVal=e}))),this.handleChange(i,"change")}}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}},created:function(){this.inputVal=Number(this.value)},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var e=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){e[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,e){var n,i,a;try{i=t.toString().split(".")[1].length}catch(o){i=0}try{a=e.toString().split(".")[1].length}catch(o){a=0}n=Math.pow(10,Math.max(i,a));var r=i>=a?i:a;return((t*n+e*n)/n).toFixed(r)},calcMinus:function(t,e){var n,i,a;try{i=t.toString().split(".")[1].length}catch(o){i=0}try{a=e.toString().split(".")[1].length}catch(o){a=0}n=Math.pow(10,Math.max(i,a));var r=i>=a?i:a;return((t*n-e*n)/n).toFixed(r)},computeVal:function(t){if(uni.hideKeyboard(),!this.disabled){var e=0;"minus"===t?e=this.calcMinus(this.inputVal,this.step):"plus"===t&&(e=this.calcPlus(this.inputVal,this.step)),e<this.min||e>this.max||(this.inputVal=e,this.handleChange(e,t))}},onBlur:function(t){var e=this,n=0,i=t.detail.value;/(^\d+$)/.test(i)&&0!=i[0]||(n=this.min),n=+i,n>this.max?n=this.max:n<this.min&&(n=this.min),this.$nextTick((function(){e.inputVal=n})),this.handleChange(n,"blur")},onFocus:function(){this.$emit("focus")},handleChange:function(t,e){var n=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){n.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))}}};e.default=i},"6c43":function(t,e,n){var i=n("073b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0e6401c5",i,!0,{sourceMap:!1,shadowMode:!1})},"6fad":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={wPicker:n("2124").default,uPopup:n("f344").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content-set"},[0===t.queryValue||1===t.queryValue?i("v-uni-view",{class:0===t.queryValue?"set-one":" set-one set-two"},[1!==t.queryValue?i("v-uni-view",{staticClass:"set-one-head"},[i("v-uni-image",{attrs:{src:n("84d4"),mode:""}}),i("v-uni-view",[t._v("更换头像")])],1):t._e(),1===t.queryValue?i("v-uni-view",{staticClass:"set-one-con set-two-con"},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("头像")]),i("v-uni-view",{staticClass:"set-con-name"},[i("v-uni-view",{},[i("v-uni-image",{staticClass:"image",attrs:{src:n("84d4"),mode:""}})],1),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1):t._e(),i("v-uni-view",{staticClass:"set-one-con"},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("昵称")]),i("v-uni-view",{staticClass:"set-con-name"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入昵称"},model:{value:t.query.name,callback:function(e){t.$set(t.query,"name",e)},expression:"query.name"}}),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"set-one-con",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGender.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("性别")]),i("v-uni-view",{staticClass:"set-con-name"},[t.query.gender?i("v-uni-text",[t._v(t._s(t.query.gender))]):i("v-uni-text",{staticClass:"text"},[t._v("请选择性别")]),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"set-one-con"},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("手机号")]),i("v-uni-view",{staticClass:"set-con-name"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.query.phone,callback:function(e){t.$set(t.query,"phone",e)},expression:"query.phone"}}),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"set-one-con"},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("生日")]),i("v-uni-view",{staticClass:"set-con-name"},[i("v-uni-picker",{staticClass:"uni-list",attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"set-one-con"},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("职业")]),i("v-uni-view",{staticClass:"set-con-name"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入职业"},model:{value:t.query.occupation,callback:function(e){t.$set(t.query,"occupation",e)},expression:"query.occupation"}}),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"set-one-con",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.visible=!0}}},[i("v-uni-view",{staticClass:"set-con-head"},[t._v("所在地")]),i("v-uni-view",{staticClass:"set-con-name"},[t.query.address?i("v-uni-text",[t._v(t._s(t.query.address))]):i("v-uni-text",{staticClass:"text"},[t._v("请选择地址")]),i("v-uni-image",{attrs:{src:n("3eb1"),mode:""}})],1)],1)],1):t._e(),2===t.queryValue?i("v-uni-view",[i("set-three")],1):t._e(),3===t.queryValue?i("v-uni-view",[i("set-basic")],1):t._e(),i("w-picker",{ref:"region",attrs:{visible:t.visible,mode:"region",value:t.defaultRegions,"default-type":"label","hide-area":!1},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.visible=e},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm(e,"region")},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancel.apply(void 0,arguments)}}}),i("u-popup",{attrs:{mode:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-uni-view",{staticClass:"popup"},t._l(t.genderList,(function(e,n){return i("v-uni-view",{key:n,class:t.activeId===n?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleChoice(n,e.title)}}},[t._v(t._s(e.title))])})),1)],1)],1)},r=[]},7344:function(t,e,n){"use strict";var i=n("b449"),a=n.n(i);a.a},"7d8e":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2124")),r=i(n("c4a0")),o=i(n("ea41")),s={props:["queryValue"],components:{wPicker:a.default,setThree:r.default,setBasic:o.default},data:function(){var t=this.getDate({format:!0});return{query:{gender:"男"},value:0,genderList:[{id:1,title:"男"},{id:2,title:"女"}],activeId:0,show:!1,visible:!1,defaultRegion:["北京","北京市","东城区"],defaultRegions:null,date:t,name:"",address:""}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onShow:function(){},methods:{handleChoice:function(t,e){this.activeId=t,this.show=!1,this.query.gender=e},onCancel:function(){this.visible=!1},handleGender:function(){this.show=!0},bindDateChange:function(t){this.date=t.target.value},onConfirm:function(t,e){var n=t.provinces.label+","+t.citys.label+","+t.areas.label;this.defaultRegions=[t.provinces.value,t.citys.value,t.areas.value],this.query.address=n,this.visible=!1},getDate:function(e){var n=new Date,i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i=i),a=a>9?a:"0"+a,r=r>9?r:"0"+r,t.log(),"".concat(i,"-").concat(a,"-").concat(r)}}};e.default=s}).call(this,n("5a52")["default"])},"84d4":function(t,e,n){t.exports=n.p+"static/img/user_avatar.0fa52950.png"},"88ed":function(t,e,n){"use strict";var i=n("4412"),a=n.n(i);a.a},"97f4":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content-tree"},t._l(t.information,(function(e,a){return i("v-uni-view",{key:a,staticClass:"content-tree-head"},[0===a||1===a||6===a?i("v-uni-view",{staticClass:"tree-con"}):t._e(),i("v-uni-view",{staticClass:"tree-head"},[i("v-uni-view",{staticClass:"tree-head-h"},[t._v(t._s(e.title)),0===a?i("v-uni-image",{attrs:{src:n("84d4"),mode:""}}):t._e()],1)],1)],1)})),1)},r=[]},a40e:function(t,e,n){"use strict";n.r(e);var i=n("7d8e"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a5f4:function(t,e,n){"use strict";n.r(e);var i=n("6974"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a630c:function(t,e,n){var i=n("b549");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2d31cb3c",i,!0,{sourceMap:!1,shadowMode:!1})},a6f1:function(t,e,n){"use strict";var i=n("6c43"),a=n.n(i);a.a},a6f8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{value:0,information:[{id:1,title:"账号管理",url:"",image:"../../static/img/setUp1.png"},{id:2,title:"文字大小",url:"",image:"../../static/img/setUp2.png"},{id:3,title:"夜间模式",url:"",image:"../../static/img/setUp3.png"},{id:4,title:"清除缓存",url:"",image:"../../static/img/setUp4.png"},{id:5,title:"接受推送通知",url:"",image:"../../static/img/setUp5.png"},{id:6,title:"我要反馈",url:"",image:"../../static/img/setUp6.png"},{id:7,title:"关于",url:"",image:"../../static/img/setUp7.png"}]}},onShow:function(){},methods:{}};e.default=i},b013:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{value:0,information:[{id:1,title:"编辑个人资料",url:""},{id:2,title:"我的收藏",url:""},{id:3,title:"账号安全",url:""},{id:4,title:"黑名单管理",url:""},{id:5,title:"账号绑定",url:""},{id:6,title:"消息提醒设置",url:""},{id:7,title:"我要反馈",url:""},{id:8,title:"关于",url:""}]}},onShow:function(){},methods:{}};e.default=i},b449:function(t,e,n){var i=n("4cb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("05b8c9be",i,!0,{sourceMap:!1,shadowMode:!1})},b549:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-21568f1e],\r\nuni-view[data-v-21568f1e],\r\nuni-text[data-v-21568f1e],\r\nuni-image[data-v-21568f1e],\r\nuni-scroll-view[data-v-21568f1e],\r\nuni-swiper[data-v-21568f1e],\r\nuni-swiper-item[data-v-21568f1e]{\r\nbox-sizing:border-box\n}.btn[data-v-21568f1e]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-numberbox[data-v-21568f1e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-number-input[data-v-21568f1e]{position:relative;text-align:center;padding:0;margin:0 %?6?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-icon-plus[data-v-21568f1e],\r\n.u-icon-minus[data-v-21568f1e]{width:%?60?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon-plus[data-v-21568f1e]{border-radius:0 %?8?% %?8?% 0}.u-icon-minus[data-v-21568f1e]{border-radius:%?8?% 0 0 %?8?%}.u-icon-disabled[data-v-21568f1e]{color:#c8c9cc!important;background:#f7f8fa!important}.u-input-disabled[data-v-21568f1e]{color:#c8c9cc!important;background-color:#f2f3f5!important}',""]),t.exports=e},c4a0:function(t,e,n){"use strict";n.r(e);var i=n("97f4"),a=n("4981");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a6f1");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7171d0b0",null,!1,i["a"],o);e["default"]=c.exports},c8cd:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={setUp:n("ea12").default,uNumberBox:n("4534").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("setUp",{attrs:{queryValue:t.value}}),n("u-number-box",{staticClass:"set",attrs:{max:3},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},r=[]},ccb8:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ea12")),r={comments:{setUp:a.default},data:function(){return{value:0}},onShow:function(){},methods:{}};e.default=r},dcfc:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content-tree"},t._l(t.information,(function(e,a){return i("v-uni-view",{key:a,staticClass:"content-tree-head"},[0===a||4===a||5===a?i("v-uni-view",{staticClass:"tree-con"},[0===a?i("v-uni-text",[t._v("基本设置")]):t._e(),4===a?i("v-uni-text",[t._v("通知管理")]):t._e(),5===a?i("v-uni-text",[t._v("关于")]):t._e()],1):t._e(),i("v-uni-view",{staticClass:"tree-head"},[i("v-uni-view",{staticClass:"tree-head-h"},[i("v-uni-image",{attrs:{src:e.image,mode:""}}),t._v(t._s(e.title))],1),2===a?i("v-uni-image",{staticClass:"image",attrs:{src:n("3ae2"),mode:""}}):t._e(),4===a?i("v-uni-text",{staticClass:"text"},[t._v("未开启")]):t._e(),6===a?i("v-uni-text",{staticClass:"new"},[t._v("NEW")]):t._e()],1)],1)})),1)},r=[]},dfd0:function(t,e,n){"use strict";n.r(e);var i=n("ccb8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e478:function(t,e,n){"use strict";n.r(e);var i=n("c8cd"),a=n("dfd0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("88ed");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"ca781666",null,!1,i["a"],o);e["default"]=c.exports},ea12:function(t,e,n){"use strict";n.r(e);var i=n("6fad"),a=n("a40e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0b2e");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1f5b49d4",null,!1,i["a"],o);e["default"]=c.exports},ea41:function(t,e,n){"use strict";n.r(e);var i=n("dcfc"),a=n("feb2");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("7344");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1da884f5",null,!1,i["a"],o);e["default"]=c.exports},f779:function(t,e,n){var i=n("5a6d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4743d65c",i,!0,{sourceMap:!1,shadowMode:!1})},feb2:function(t,e,n){"use strict";n.r(e);var i=n("a6f8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);
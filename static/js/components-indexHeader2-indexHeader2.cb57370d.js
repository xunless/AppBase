(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-indexHeader2-indexHeader2"],{"0ca6":function(t,e,i){"use strict";var n=i("8fc1"),r=i.n(n);r.a},"17c3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(n)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},a=[]},"1afe":function(t,e,i){"use strict";i.r(e);var n=i("bc78"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"2ab54":function(t,e,i){"use strict";i.r(e);var n=i("7624"),r=i("dcbf");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("0ca6");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"67988de8",null,!1,n["a"],o);e["default"]=l.exports},"3b19":function(t,e,i){"use strict";i.r(e);var n=i("17c3"),r=i("ba8a");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("5e30");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"71f0b7e9",null,!1,n["a"],o);e["default"]=l.exports},"5d33":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),r={},a={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:r,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=a},"5e30":function(t,e,i){"use strict";var n=i("d837"),r=i.n(n);r.a},"65a2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-67988de8],\r\nuni-view[data-v-67988de8],\r\nuni-text[data-v-67988de8],\r\nuni-image[data-v-67988de8],\r\nuni-scroll-view[data-v-67988de8],\r\nuni-swiper[data-v-67988de8],\r\nuni-swiper-item[data-v-67988de8]{\r\nbox-sizing:border-box\n}.btn[data-v-67988de8]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-67988de8]{width:100%}.u-navbar-fixed[data-v-67988de8]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-67988de8]{width:100%}.u-navbar-inner[data-v-67988de8]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-67988de8]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-67988de8]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-67988de8]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-67988de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-67988de8]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-67988de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-67988de8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},7624:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("02f4").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},a=[]},"82c9":function(t,e,i){"use strict";var n=i("e44f"),r=i.n(n);r.a},"8fc1":function(t,e,i){var n=i("65a2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1a767150",n,!0,{sourceMap:!1,shadowMode:!1})},"9c22":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=n},ba8a:function(t,e,i){"use strict";i.r(e);var n=i("9c22"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},bc78:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{data:{list:[{image:"https://cdn.uviewui.com/uview/swiper/1.jpg",title:"昨夜星辰昨夜风，画楼西畔桂堂东"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/3.jpg",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],background:{}}}},methods:{}};e.default=n},c565:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uSwiper:i("3b19").default,uNavbar:i("2ab54").default,uIcon:i("02f4").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"navBar_box"},[i("v-uni-view",{staticClass:"banner_box"},[i("u-swiper",{attrs:{list:t.data.list,height:"460"}}),i("v-uni-view",{staticClass:"navBar"},[i("u-navbar",{attrs:{"is-back":!1,title:"",background:t.data.background,"is-fixed":!0,"border-bottom":!1}},[i("v-uni-view",{staticClass:"slot_wrap"},[i("v-uni-view",{staticClass:"navBar_left"},[i("v-uni-image",{attrs:{src:"https://cdn.uviewui.com/uview/swiper/1.jpg",mode:""}})],1),i("v-uni-view",{staticClass:"navBar_right"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"搜索咨询","placeholder-style":"color:#999999;fontSize:24rpx"}}),i("u-icon",{staticClass:"search",attrs:{name:"search"}}),i("u-icon",{staticClass:"photo",attrs:{name:"photo"}})],1)],1)],1)],1)],1)],1)],1)},a=[]},c9db:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-71f0b7e9],\r\nuni-view[data-v-71f0b7e9],\r\nuni-text[data-v-71f0b7e9],\r\nuni-image[data-v-71f0b7e9],\r\nuni-scroll-view[data-v-71f0b7e9],\r\nuni-swiper[data-v-71f0b7e9],\r\nuni-swiper-item[data-v-71f0b7e9]{\r\nbox-sizing:border-box\n}.btn[data-v-71f0b7e9]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-swiper-wrap[data-v-71f0b7e9]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-71f0b7e9]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-71f0b7e9]{padding:0 %?24?%;position:absolute;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-71f0b7e9]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-71f0b7e9]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-71f0b7e9]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-71f0b7e9]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-71f0b7e9]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-71f0b7e9]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-71f0b7e9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},d51d:function(t,e,i){"use strict";i.r(e);var n=i("c565"),r=i("1afe");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("82c9");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"b1f67360",null,!1,n["a"],o);e["default"]=l.exports},d837:function(t,e,i){var n=i("c9db");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("dd9805d4",n,!0,{sourceMap:!1,shadowMode:!1})},dcbf:function(t,e,i){"use strict";i.r(e);var n=i("5d33"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e44f:function(t,e,i){var n=i("fc18");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("84b8d790",n,!0,{sourceMap:!1,shadowMode:!1})},fc18:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */uni-page-body[data-v-b1f67360],\r\nuni-view[data-v-b1f67360],\r\nuni-text[data-v-b1f67360],\r\nuni-image[data-v-b1f67360],\r\nuni-scroll-view[data-v-b1f67360],\r\nuni-swiper[data-v-b1f67360],\r\nuni-swiper-item[data-v-b1f67360]{\r\nbox-sizing:border-box\n}.btn[data-v-b1f67360]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-b1f67360],\r\nuni-view[data-v-b1f67360],\r\nuni-text[data-v-b1f67360],\r\nuni-image[data-v-b1f67360],\r\nuni-scroll-view[data-v-b1f67360],\r\nuni-swiper[data-v-b1f67360],\r\nuni-swiper-item[data-v-b1f67360]{\r\nbox-sizing:border-box\n}.btn[data-v-b1f67360]{width:100%;height:%?98?%;text-align:center;font-family:PingFang SC;font-weight:400;border-radius:%?49?%;color:#fff;line-height:%?98?%;background-color:#333;font-size:%?32?%;box-sizing:border-box}.navBar_box .banner_box[data-v-b1f67360]{width:748;height:%?460?%;overflow:hidden;position:relative}.navBar_box .banner_box[data-v-b1f67360] .u-swiper-wrap .u-swiper-indicator{position:absolute!important;bottom:%?50?%!important}.navBar_box .banner_box[data-v-b1f67360]::after{position:absolute;bottom:%?-60?%;left:%?-15?%;content:"";display:block;width:%?780?%;height:%?100?%;border-top-left-radius:50%;border-top-right-radius:50%;font-size:%?40?%;background-color:#f5f4f4}.navBar_box .navBar[data-v-b1f67360]{position:absolute;left:0;top:0}.navBar_box .navBar .slot_wrap[data-v-b1f67360]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0 %?30?%}.navBar_box .navBar .slot_wrap .navBar_left uni-image[data-v-b1f67360]{display:block;width:%?70?%;height:%?70?%;border:%?1?% solid #fff;background-color:#00f;border-radius:50%}.navBar_box .navBar .slot_wrap .navBar_right[data-v-b1f67360]{position:relative}.navBar_box .navBar .slot_wrap .navBar_right uni-input[data-v-b1f67360]{width:%?598?%;height:%?66?%;font-size:%?26?%;color:#999;border-radius:%?33?%;background-color:#fff;text-indent:3em}.navBar_box .navBar .slot_wrap .navBar_right .search[data-v-b1f67360]{position:absolute;left:%?30?%;top:calc((100% - %?30?%) / 2);color:#999;font-size:%?30?%}.navBar_box .navBar .slot_wrap .navBar_right .photo[data-v-b1f67360]{position:absolute;right:%?30?%;top:calc((100% - %?30?%) / 2);color:#999;font-size:%?30?%}',""]),t.exports=e}}]);
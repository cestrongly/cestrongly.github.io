(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-process-env-process-env"],{"360c":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{pageName:"环境变量测试",env:{}}},created:function(){t.log("process.env:",Object({NODE_ENV:"production",VUE_APP_API_BASE_URL:"",VUE_APP_BASE_OSS_PATH:"",VUE_APP_INDEX_CSS_HASH:"b0707a6a",VUE_APP_NAME:"新闻资讯",VUE_APP_PLATFORM:"h5",VUE_APP_SHOW_UNIT_TEST:"false",VUE_APP_TITLE:"App Title",BASE_URL:"./"})),this.env=Object({NODE_ENV:"production",VUE_APP_API_BASE_URL:"",VUE_APP_BASE_OSS_PATH:"",VUE_APP_INDEX_CSS_HASH:"b0707a6a",VUE_APP_NAME:"新闻资讯",VUE_APP_PLATFORM:"h5",VUE_APP_SHOW_UNIT_TEST:"false",VUE_APP_TITLE:"App Title",BASE_URL:"./"})},methods:{}};e.default=a}).call(this,n("5a52")["default"])},"6c0b":function(t,e,n){"use strict";n.r(e);var a=n("360c"),_=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=_.a},"79ea":function(t,e,n){"use strict";n.r(e);var a=n("f45d"),_=n("6c0b");for(var c in _)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return _[t]}))}(c);var s,u=n("f0c5"),i=Object(u["a"])(_["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=i.exports},f45d:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-page"},[n("cu-custom",{attrs:{"bg-color":"bg-gradual-blue","is-back":!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.pageName))])],2),n("v-uni-view",{staticClass:"u-block"},[n("v-uni-view",{staticClass:"u-block__title"},[t._v("环境变量")]),n("v-uni-view",{staticClass:"u-block__section"},t._l(Object.keys(this.env),(function(e,a){return n("v-uni-view",{key:a},[n("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(e)+":")]),n("v-uni-text",{staticClass:"text-pink"},[t._v(t._s(t.env[e]))])],1)})),1)],1)],1)},c=[]}}]);
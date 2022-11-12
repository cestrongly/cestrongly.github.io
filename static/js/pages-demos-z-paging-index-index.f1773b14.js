(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-z-paging-index-index"],{"09d6":function(e){e.exports=JSON.parse('{"id":"z-paging","name":"z-paging","displayName":"【z-paging下拉刷新、上拉加载】高性能，全平台兼容。支持虚拟列表，支持nvue、vue3","version":"2.3.2","description":"超简单、低耦合！使用wxs+renderjs实现。支持长列表优化，支持自定义下拉刷新、上拉加载更多，支持自动管理空数据图、点击返回顶部，支持聊天分页、本地分页，支持国际化等100+项配置","keywords":["下拉刷新","上拉加载","分页器","nvue","虚拟列表"],"repository":"https://github.com/SmileZXLee/uni-z-paging","engines":{"HBuilderX":"^3.0.7"},"dcloudext":{"category":["前端组件","通用组件"],"sale":{"regular":{"price":"0.00"},"sourcecode":{"price":"0.00"}},"contact":{"qq":"393727164"},"declaration":{"ads":"无","data":"无","permissions":"无"},"npmurl":"https://www.npmjs.com/package/z-paging"},"uni_modules":{"dependencies":[],"encrypt":[],"platforms":{"cloud":{"tcb":"y","aliyun":"y"},"client":{"App":{"app-vue":"y","app-nvue":"y"},"H5-mobile":{"Safari":"y","Android Browser":"y","微信浏览器(Android)":"y","QQ浏览器(Android)":"y"},"H5-pc":{"Chrome":"y","IE":"y","Edge":"y","Firefox":"y","Safari":"y"},"小程序":{"微信":"y","阿里":"y","百度":"y","字节跳动":"y","QQ":"y"},"快应用":{"华为":"y","联盟":"y"},"Vue":{"vue2":"y","vue3":"y"}}}}}')},"28f2":function(e,t,i){"use strict";i.r(t);var n=i("899a"),o=i("e005");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("54dd");var l,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"710e60a2",null,!1,n["a"],l);t["default"]=d.exports},"2d15":function(e,t,i){var n=i("8e42");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("2d36b918",n,!0,{sourceMap:!1,shadowMode:!1})},"3b3a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTHBwcHBwcKRvJJsAAAACdFJOUwCd+C0iwQAAAOdJREFUaN7t2rENwyAUhGGgoGAERsgUnocpGIEiI9DwpgyJJ/iRjKz46E96n03D0zm3/XhrNJJt0EgxO+hcRicLM9JZJM3I4BGIyYYxv0jnkcEtDHNGECYaxgTDGG8cUzgmc0wU5qaYTdfs9XBM2oJxwggjjDCPxeQtGC/MH2HKFkwURhhhhLkrpnJM5Zh2cSSuPjQb/8gVU9B/OSnGKYNTOqc0TjlEEUUUUUQRRRRRRBFFFFFEEeVRlLC6DkCUhQV6Xt2f8I0T22st1IESLx1FXm0KvEDleU3rey0bjGRcOZuTvd0l5wNArRXw4SyMnAAAAABJRU5ErkJggg=="},"4bb0":function(e,t,i){e.exports=i.p+"static/img/logo_loading.f0e8ae1f.gif"},"54dd":function(e,t,i){"use strict";var n=i("2d15"),o=i.n(n);o.a},"899a":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={zPaging:i("6911").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("z-paging",{ref:"paging",attrs:{"refresher-only":!0},on:{onRefresh:function(t){arguments[0]=t=e.$handleEvent(t),e.onRefresh.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{height:"120rpx",display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"refresher"},slot:"refresher"},[n("img",{staticStyle:{width:"300rpx",height:"60rpx"},attrs:{src:i("4bb0")}})]),n("v-uni-view",{staticClass:"demo-list"},e._l(e.list,(function(t,o){return n("v-uni-view",{key:o,staticClass:"demo-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.itemClick(t)}}},[n("v-uni-view",{staticClass:"demo-item-main"},[n("v-uni-view",{staticClass:"demo-item-title"},[e._v(e._s(t.title))]),t.subTitle.length?n("v-uni-view",{staticClass:"demo-item-subtitle"},[e._v(e._s(t.subTitle))]):e._e(),n("v-uni-view",{staticClass:"demo-item-file"},[-1===t.title.indexOf("nvue")?n("v-uni-text",[e._v(e._s(t.file+".vue"))]):n("v-uni-text",{staticStyle:{"background-color":"#01c301"}},[e._v(e._s(t.file+".nvue"))])],1)],1),n("v-uni-image",{staticClass:"demo-item-more-img",attrs:{src:i("3b3a")}})],1)})),1)],1)],1)},a=[]},"8e42":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".demo-item[data-v-710e60a2]{display:flex;align-items:center;border-bottom:#eee solid 1px;padding:%?20?% %?30?%}.demo-item-main[data-v-710e60a2]{flex:1;margin-right:%?20?%}.demo-item-main > uni-view[data-v-710e60a2]:not(:last-child){margin-bottom:%?10?%}.demo-item-more-img[data-v-710e60a2]{width:%?24?%;height:%?24?%}.demo-item-title[data-v-710e60a2]{font-size:%?32?%;font-weight:700}.demo-item-subtitle[data-v-710e60a2]{font-size:%?26?%;color:#666}.demo-item-file > uni-text[data-v-710e60a2]{background-color:#007aff;color:#fff;font-size:%?24?%;padding:%?5?% %?10?%;border-radius:%?8?%}.demo-nvue-tip[data-v-710e60a2]{width:100%;padding:%?20?%;color:#aaa;font-size:%?24?%;text-align:center}.tip-bottom[data-v-710e60a2]{background-color:#007aff;color:#fff;padding:%?20?% %?0?%;text-align:center}",""]),e.exports=t},b765:function(e,t,i){"use strict";(function(e){i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("99af");var n=i("09d6"),o={components:{},data:function(){return{list:[{title:"普通模式演示",file:"common-demo",subTitle:""},{title:"自定义下拉刷新与上拉加载演示",file:"custom-demo",subTitle:""},{title:"滑动切换选项卡演示(标准写法)",file:"swiper-demo",subTitle:""},{title:"滑动切换选项卡演示(简化写法,不推荐)",file:"swiper-simplify-demo",subTitle:""},{title:"使用页面滚动示例",file:"page-default-demo",subTitle:""},{title:"虚拟列表演示",file:"virtual-list-demo",subTitle:""},{title:"滚动吸附效果演示",file:"sticky-demo",subTitle:""},{title:"滑动切换选项卡+吸顶演示①",file:"sticky-swiper-demo",subTitle:"上一个tab数据保留，滚动过渡效果不够流畅，具体可点击体验"},{title:"滑动切换选项卡+吸顶演示②",file:"sticky-swiper-next-demo",subTitle:"上一个tab数据不保留，滚动过渡效果流畅"},{title:"显示最后更新时间演示",file:"show-update-time-demo",subTitle:""},{title:"自定义导航栏演示",file:"custom-nav-demo",subTitle:"使用了uView的自定义导航栏组件"},{title:"聊天记录模式演示",file:"chat-history-demo",subTitle:""},{title:"保证数据一致性演示",file:"consistency-demo",subTitle:"将request.js中的loadingTime修改为2000可更直观体验"},{title:"i18n国际化演示",file:"i18n-demo",subTitle:""},{title:"自定义返回顶部按钮演示",file:"custom-back-to-top-demo",subTitle:""},{title:"基于z-paging封装个性化分页组件演示",file:"my-paging-demo",subTitle:"可将重复的配置或者重复插入的slot封装在自定义的分页组件中"},{title:"极简写法演示",file:"minimalism-demo",subTitle:"此写法可省略重复的v-model和@query"},{title:"内置列表模式演示",file:"inner-list-demo",subTitle:"使用内置for循环渲染list，无需书写v-for，也无需v-model绑定list(不支持字节跳动小程序)"}]}},computed:{},methods:{onRefresh:function(){var e=this;setTimeout((function(){e.$refs.paging.complete()}),1500)},itemClick:function(e){uni.navigateTo({url:"/pages/z-paging/".concat(e.file,"/").concat(e.file)})}},watch:{},created:function(){e.log("%c z-paging %c v".concat(n.version," "),"background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background:#007AFF ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;")},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){}};t.default=o}).call(this,i("5a52")["default"])},e005:function(e,t,i){"use strict";i.r(t);var n=i("b765"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a}}]);
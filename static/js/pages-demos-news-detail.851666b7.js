(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-news-detail"],{"06f2":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b"),a("e25e"),a("99af"),a("e9c4");var i=n(a("68fe")),r="<p>获取信息失败1</p>";var s={data:function(){return{banner:{},content:[]}},onShareAppMessage:function(){return{title:this.banner.title,path:"/pages/detail/detail?query="+JSON.stringify(this.banner)}},onLoad:function(t){this.load(t.query)},methods:{load:function(t){var e=decodeURIComponent(t);try{this.banner=JSON.parse(e)}catch(a){this.banner=JSON.parse(e)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},getDetail:function(){var t=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(e){var a=r;200==e.statusCode&&(a=e.data.content);var n=(0,i.default)(a);t.content=n}})}}};e.default=s},"68fe":function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c975"),a("ac1f"),a("466d"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("14d9"),a("13d5"),a("d3b7"),a("3c65");var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),c=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),o=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(t,e){var a,f,h,p=[],v=t;p.last=function(){return this[this.length-1]};while(t){if(f=!0,p.last()&&u[p.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(t,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(a),""})),g("",p.last());else if(0==t.indexOf("\x3c!--")?(a=t.indexOf("--\x3e"),a>=0&&(e.comment&&e.comment(t.substring(4,a)),t=t.substring(a+3),f=!1)):0==t.indexOf("</")?(h=t.match(i),h&&(t=t.substring(h[0].length),h[0].replace(i,g),f=!1)):0==t.indexOf("<")&&(h=t.match(n),h&&(t=t.substring(h[0].length),h[0].replace(n,b),f=!1)),f){a=t.indexOf("<");var m=a<0?t:t.substring(0,a);t=a<0?"":t.substring(a),e.chars&&e.chars(m)}if(t==v)throw"Parse Error: "+t;v=t}function b(t,a,n,i){if(a=a.toLowerCase(),c[a])while(p.last()&&o[p.last()])g("",p.last());if(l[a]&&p.last()==a&&g("",a),i=s[a]||!!i,i||p.push(a),e.start){var u=[];n.replace(r,(function(t,e){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[e]?e:"";u.push({name:e,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(a,u,i)}}function g(t,a){if(a){for(n=p.length-1;n>=0;n--)if(p[n]==a)break}else var n=0;if(n>=0){for(var i=p.length-1;i>=n;i--)e.end&&e.end(p[i]);p.length=n}}g()}function h(t){for(var e={},a=t.split(","),n=0;n<a.length;n++)e[a[n]]=!0;return e}function p(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(t){return t.reduce((function(t,e){var a=e.value,n=e.name;return t[n]?t[n]=t[n]+" "+a:t[n]=a,t}),{})}function m(e){e=p(e);var a=[],n={node:"root",children:[]};return f(e,{start:function(t,e,i){var r={name:t};if(0!==e.length&&(r.attrs=v(e)),i){var s=a[0]||n;s.children||(s.children=[]),s.children.push(r)}else a.unshift(r)},end:function(e){var i=a.shift();if(i.name!==e&&t.error("invalid state: mismatch end tag"),0===a.length)n.children.push(i);else{var r=a[0];r.children||(r.children=[]),r.children.push(i)}},chars:function(t){var e={type:"text",text:t};if(0===a.length)n.children.push(e);else{var i=a[0];i.children||(i.children=[]),i.children.push(e)}},comment:function(t){var e={node:"comment",text:t},n=a[0];n.children||(n.children=[]),n.children.push(e)}}),n.children}var b=m;e.default=b}).call(this,a("5a52")["default"])},"6db2":function(t,e,a){"use strict";var n=a("9831"),i=a.n(n);i.a},8985:function(t,e,a){"use strict";a.r(e);var n=a("06f2"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"8a48":function(t,e,a){"use strict";a.r(e);var n=a("9fb1"),i=a("8985");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("6db2");var s,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"0c351ae4",null,!1,n["a"],s);e["default"]=o.exports},9780:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\nuni-page-body[data-v-0c351ae4]{min-height:100%}\n.banner[data-v-0c351ae4]{height:180px;position:relative;background-color:#ccc;flex-direction:row;overflow:hidden}.banner-img[data-v-0c351ae4]{flex:1}.title-area[data-v-0c351ae4]{position:absolute;left:15px;right:15px;bottom:15px;z-index:11}.title-text[data-v-0c351ae4]{font-size:16px;font-weight:400;line-height:20px;lines:2;color:#fff;overflow:hidden}.article-meta[data-v-0c351ae4]{padding:10px 15px;flex-direction:row;align-items:center;justify-content:flex-start}.article-meta-text[data-v-0c351ae4]{color:grey}.article-text[data-v-0c351ae4]{font-size:12px;line-height:25px;margin:0 10px}.article-author[data-v-0c351ae4]{font-size:15px}.article-time[data-v-0c351ae4]{font-size:15px}.article-content[data-v-0c351ae4]{font-size:15px;padding:0 15px;margin-bottom:15px;overflow:hidden}\n.article-content[data-v-0c351ae4]{line-height:1.8}.article-content img[data-v-0c351ae4]{max-width:100%}\n",""]),t.exports=e},9831:function(t,e,a){var n=a("9780");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1896e87a",n,!0,{sourceMap:!1,shadowMode:!1})},"9fb1":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"banner",attrs:{"auto-focus":!0}},[a("v-uni-image",{staticClass:"banner-img",attrs:{src:t.banner.image_url}}),a("v-uni-view",{staticClass:"title-area"},[a("v-uni-text",{staticClass:"title-text"},[t._v(t._s(t.banner.title))])],1)],1),a("v-uni-view",{staticClass:"article-meta"},[a("v-uni-text",{staticClass:"article-meta-text article-author"},[t._v(t._s(t.banner.source))]),a("v-uni-text",{staticClass:"article-meta-text article-text"},[t._v("发表于")]),a("v-uni-text",{staticClass:"article-meta-text article-time"},[t._v(t._s(t.banner.datetime))])],1),a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{staticStyle:{"font-size":"14px"},attrs:{nodes:t.content}})],1),a("v-uni-view",{staticClass:"comment-wrap"})],1)},r=[]}}]);
import{x as h,z as t,aP as ne,B as k,C as K,G as oe,H as re,d as m,I as se,K as Z,cU as ie,c as W,M as O,O as ae,bH as le,s as u,o as _,b as y,w as c,aZ as L,cL as T,f as p,b0 as j,a$ as B,u as v,a as Q,F as X,b1 as ee}from"./index.4c52ef28.js";import{u as ce}from"./use-compitable.1c009e8c.js";import{g as de,_ as ue}from"./Space.590bc452.js";import{N as pe}from"./Tag.6ecd6ced.js";function Y(e,i="default",s=[]){const{children:a}=e;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const b=a[i];if(typeof b=="function")return b()}return s}const te="DESCRIPTION_ITEM_FLAG";function be(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[te]:!1}const me=h([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),ne("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[h("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),k("left-label-placement",[t("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),k("left-label-align",[h("th",{textAlign:"left"})]),k("center-label-align",[h("th",{textAlign:"center"})]),k("right-label-align",[h("th",{textAlign:"right"})]),k("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[h("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[K("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),K("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),oe(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),re(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ge=Object.assign(Object.assign({},Z.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),M=m({name:"Descriptions",props:ge,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=se(e),a=Z("Descriptions","-descriptions",me,ie,e,i),b=W(()=>{const{size:o,bordered:l}=e,{common:{cubicBezierEaseInOut:f},self:{titleTextColor:r,thColor:A,thColorModal:x,thColorPopover:I,thTextColor:R,thFontWeight:H,tdTextColor:P,tdColor:n,tdColorModal:F,tdColorPopover:N,borderColor:g,borderColorModal:E,borderColorPopover:w,borderRadius:S,lineHeight:C,[O("fontSize",o)]:z,[O(l?"thPaddingBordered":"thPadding",o)]:V,[O(l?"tdPaddingBordered":"tdPadding",o)]:D}}=a.value;return{"--n-title-text-color":r,"--n-th-padding":V,"--n-td-padding":D,"--n-font-size":z,"--n-bezier":f,"--n-th-font-weight":H,"--n-line-height":C,"--n-th-text-color":R,"--n-td-text-color":P,"--n-th-color":A,"--n-th-color-modal":x,"--n-th-color-popover":I,"--n-td-color":n,"--n-td-color-modal":F,"--n-td-color-popover":N,"--n-border-radius":S,"--n-border-color":g,"--n-border-color-modal":E,"--n-border-color-popover":w}}),d=s?ae("descriptions",W(()=>{let o="";const{size:l,bordered:f}=e;return f&&(o+="a"),o+=l[0],o}),b,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:b,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,compitableColumn:ce(e,["columns","column"]),inlineThemeDisabled:s}},render(){const e=this.$slots.default,i=e?le(e()):[];i.length;const{compitableColumn:s,labelPlacement:a,labelAlign:b,size:d,bordered:o,title:l,cssVars:f,mergedClsPrefix:r,separator:A,onRender:x}=this;x==null||x();const I=i.filter(n=>be(n)),R={span:0,row:[],secondRow:[],rows:[]},P=I.reduce((n,F,N)=>{const g=F.props||{},E=I.length-1===N,w=["label"in g?g.label:Y(F,"label")],S=[Y(F)],C=g.span||1,z=n.span;n.span+=C;const V=g.labelStyle||g["label-style"]||this.labelStyle,D=g.contentStyle||g["content-style"]||this.contentStyle;if(a==="left")o?n.row.push(u("th",{class:`${r}-descriptions-table-header`,colspan:1,style:V},w),u("td",{class:`${r}-descriptions-table-content`,colspan:E?(s-z)*2+1:C*2-1,style:D},S)):n.row.push(u("td",{class:`${r}-descriptions-table-content`,colspan:E?(s-z)*2:C*2},u("span",{class:`${r}-descriptions-table-content__label`,style:V},[...w,A&&u("span",{class:`${r}-descriptions-separator`},A)]),u("span",{class:`${r}-descriptions-table-content__content`,style:D},S)));else{const q=E?(s-z)*2:C*2;n.row.push(u("th",{class:`${r}-descriptions-table-header`,colspan:q,style:V},w)),n.secondRow.push(u("td",{class:`${r}-descriptions-table-content`,colspan:q,style:D},S))}return(n.span>=s||E)&&(n.span=0,n.row.length&&(n.rows.push(n.row),n.row=[]),a!=="left"&&n.secondRow.length&&(n.rows.push(n.secondRow),n.secondRow=[])),n},R).rows.map(n=>u("tr",{class:`${r}-descriptions-table-row`},n));return u("div",{style:f,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${a}-label-placement`,`${r}-descriptions--${b}-label-align`,`${r}-descriptions--${d}-size`,o&&`${r}-descriptions--bordered`]},l||this.$slots.header?u("div",{class:`${r}-descriptions-header`},l||de(this,"header")):null,u("div",{class:`${r}-descriptions-table-wrapper`},u("table",{class:`${r}-descriptions-table`},u("tbody",null,P))))}}),he={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},U=m({name:"DescriptionsItem",[te]:!0,props:he,render(){return null}}),_e=L("p",{class:"leading-24px"}," Soybean Admin \u662F\u4E00\u4E2A\u57FA\u4E8E Vue3\u3001Vite\u3001Naive UI\u3001TypeScript \u7684\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u4F7F\u7528\u4E86\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u6808\uFF0C\u5E76\u63D0\u70BC\u4E86\u5178\u578B\u7684\u4E1A\u52A1\u6A21\u578B\uFF0C\u9875\u9762\uFF0C\u5305\u62EC\u4E8C\u6B21\u5C01\u88C5\u7EC4\u4EF6\u3001\u52A8\u6001\u83DC\u5355\u3001\u6743\u9650\u6821\u9A8C\u3001\u7C92\u5B50\u5316\u6743\u9650\u63A7\u5236\u7B49\u529F\u80FD\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u9879\u76EE\uFF0C\u76F8\u4FE1\u4E0D\u7BA1\u662F\u4ECE\u65B0\u6280\u672F\u4F7F\u7528\u8FD8\u662F\u5176\u4ED6\u65B9\u9762\uFF0C\u90FD\u80FD\u5E2E\u52A9\u5230\u4F60\u3002 ",-1),ve=m({name:"ProjectIntroduction"}),fe=m({...ve,setup(e){return(i,s)=>{const a=T;return _(),y(a,{title:"\u5173\u4E8E",bordered:!1,size:"large",class:"rounded-16px shadow-sm"},{default:c(()=>[_e]),_:1})}}}),ye="soybean-admin",Ee="0.9.7",Ce="A fresh and elegant admin template, based on Vue3\u3001Vite3\u3001TypeScript\u3001NaiveUI and UnoCSS. \u4E00\u4E2A\u57FA\u4E8EVue3\u3001Vite3\u3001TypeScript\u3001NaiveUI and UnoCSS\u7684\u6E05\u65B0\u4F18\u96C5\u7684\u4E2D\u540E\u53F0\u6A21\u7248\u3002",xe={name:"Soybean",email:"honghuangdc@gmail.com",url:"https://github.com/honghuangdc"},Fe="MIT",we="https://github.com/honghuangdc/soybean-admin",Se={url:"https://github.com/honghuangdc/soybean-admin.git"},ze={url:"https://github.com/honghuangdc/soybean-admin/issues"},Ve=["Vue","Vue3","admin","admin-template","vue-admin","vue-admin-template","Vite3","Vite","vite-admin","TypeScript","TS","NaiveUI","naive-ui","naive-admin","NaiveUI-Admin","naive-ui-admin","UnoCSS"],De={dev:"cross-env VITE_SERVICE_ENV=dev vite","dev:test":"cross-env VITE_SERVICE_ENV=test vite","dev:prod":"cross-env VITE_SERVICE_ENV=prod vite",build:"npm run typecheck && cross-env VITE_SERVICE_ENV=prod vite build","build:dev":"npm run typecheck && cross-env VITE_SERVICE_ENV=dev vite build","build:test":"npm run typecheck && cross-env VITE_SERVICE_ENV=test vite build","build:vercel":"cross-env VITE_HASH_ROUTE=Y VITE_VERCEL=Y vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit --skipLibCheck",lint:"eslint . --fix",commit:"czg",cz:"czg",esno:"esno",cleanup:"esno ./scripts/cleanup.ts","update-pkg":"ncu --deep -u",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",release:"standard-version",prepare:"husky install"},ke={"@antv/data-set":"^0.11.8","@antv/g2":"^4.2.8","@better-scroll/core":"^2.5.0","@soybeanjs/vue-admin-layout":"^1.1.1","@soybeanjs/vue-admin-tab":"^1.0.5","@vueuse/core":"^9.4.0",axios:"0.27.2",clipboard:"^2.0.11",colord:"^2.9.3","crypto-js":"^4.1.1",dayjs:"^1.11.6",echarts:"^5.4.0","form-data":"^4.0.0","lodash-es":"^4.17.21","naive-ui":"2.33.5",pinia:"^2.0.23","print-js":"^1.6.0",qs:"^6.11.0",swiper:"^8.4.4","ua-parser-js":"^1.0.32",vditor:"^3.8.18",vue:"3.2.41","vue-i18n":"^9.2.2","vue-router":"^4.1.6",vuedraggable:"^4.1.0",wangeditor:"^4.7.15",xgplayer:"^2.32.1"},Ae={"@amap/amap-jsapi-types":"^0.0.10","@iconify/json":"^2.1.133","@iconify/vue":"^4.0.0","@soybeanjs/router-page":"1.0.3","@types/bmapgl":"^0.0.5","@types/crypto-js":"^4.1.1","@types/node":"18.8.3","@types/qs":"^6.9.7","@types/ua-parser-js":"^0.7.36","@unocss/preset-uno":"^0.46.3","@unocss/vite":"^0.46.3","@vitejs/plugin-vue":"^3.2.0","@vitejs/plugin-vue-jsx":"^2.1.0",commitlint:"^17.2.0","conventional-changelog":"^3.1.25","cross-env":"^7.0.3","cz-git":"^1.3.12",czg:"^1.3.12",eslint:"^8.27.0","eslint-config-soybeanjs-vue":"^0.1.2",esno:"^0.16.3",husky:"^8.0.1",mockjs:"^1.1.0","npm-check-updates":"^16.3.16",rimraf:"^3.0.2","rollup-plugin-visualizer":"^5.8.3",sass:"^1.56.0","standard-version":"^9.5.0",typescript:"4.8.4","unplugin-icons":"^0.14.13","unplugin-vue-components":"0.22.8","unplugin-vue-macros":"^0.16.0","utility-types":"^3.10.0",vite:"^3.2.2","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.0","vite-plugin-mock":"^2.9.6","vite-plugin-progress":"^0.0.6","vite-plugin-pwa":"^0.13.2","vite-plugin-svg-icons":"^2.0.1","vue-tsc":"^1.0.9",zx:"^7.1.1"},Ie={patchedDependencies:{"mockjs@1.1.0":"patches/mockjs@1.1.0.patch"}},$e={name:ye,version:Ee,description:Ce,author:xe,license:Fe,homepage:we,repository:Se,bugs:ze,keywords:Ve,scripts:De,dependencies:ke,devDependencies:Ae,pnpm:Ie},$=$e;function J(e){const[i,s]=e;return{name:i,version:s}}const G={name:$.name,version:$.version,dependencies:Object.entries($.dependencies).map(e=>J(e)),devDependencies:Object.entries($.devDependencies).map(e=>J(e))},je=L("a",{class:"text-primary",href:"https://github.com/honghuangdc/soybean-admin",target:"_blank"},"Github\u5730\u5740",-1),Be=L("a",{class:"text-primary",href:"https://soybean.pro",target:"_blank"},"\u9884\u89C8\u5730\u5740",-1),Te=m({name:"ProjectInfo"}),Re=m({...Te,setup(e){const{version:i}=G,s="2022-11-12 15:07:42";return(a,b)=>{const d=pe,o=U,l=M,f=T;return _(),y(f,{title:"\u9879\u76EE\u4FE1\u606F",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[p(l,{"label-placement":"left",bordered:"",size:"small",column:2},{default:c(()=>[p(o,{label:"\u7248\u672C"},{default:c(()=>[p(d,{type:"primary"},{default:c(()=>[j(B(v(i)),1)]),_:1})]),_:1}),p(o,{label:"\u6700\u540E\u7F16\u8BD1\u65F6\u95F4"},{default:c(()=>[p(d,{type:"primary"},{default:c(()=>[j(B(v(s)),1)]),_:1})]),_:1}),p(o,{label:"Github\u5730\u5740"},{default:c(()=>[je]),_:1}),p(o,{label:"\u9884\u89C8\u5730\u5740"},{default:c(()=>[Be]),_:1})]),_:1})]),_:1})}}}),Pe=m({name:"ProDependency"}),Ne=m({...Pe,setup(e){const{dependencies:i}=G;return(s,a)=>{const b=U,d=M,o=T;return _(),y(o,{title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[p(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(_(!0),Q(X,null,ee(v(i),l=>(_(),y(b,{key:l.name,label:l.name},{default:c(()=>[j(B(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Oe=m({name:"DevDependency"}),Le=m({...Oe,setup(e){const{devDependencies:i}=G;return(s,a)=>{const b=U,d=M,o=T;return _(),y(o,{title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[p(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(_(!0),Q(X,null,ee(v(i),l=>(_(),y(b,{key:l.name,label:l.name},{default:c(()=>[j(B(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),qe=m({__name:"index",setup(e){return(i,s)=>{const a=ue;return _(),y(a,{vertical:!0,size:16},{default:c(()=>[p(v(fe)),p(v(Re)),p(v(Ne)),p(v(Le))]),_:1})}}});export{qe as default};

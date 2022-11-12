import{X,d3 as Z,z as l,B,x as F,C as g,d as f,I as J,K as G,a7 as ee,s as h,E as te,J as ne,aH as oe,c as E,M as S,O as ie,V as O,U as j,g as T,d4 as I,d5 as ae,h as se,R as re,Q as le,o as v,a as P,a$ as H,u as z,d6 as ce,d7 as M,b as N,w as c,f as a,aZ as d,b0 as de,at as ue,cL as K,r as me,n as pe,F as q,b1 as Y,ba as fe,m as _e}from"./index.4c52ef28.js";import{_ as V,a as D}from"./Grid.eb8e770f.js";import{f as ge}from"./format-length.da8c4c56.js";import{u as he}from"./use-houdini.b7639931.js";import{N as xe}from"./Tag.6ecd6ced.js";import{_ as ve}from"./DataTable.e5a88965.js";import{_ as ye}from"./Space.590bc452.js";import"./next-frame-once.e5ee25e8.js";import"./Checkbox.7f3809f8.js";import"./use-merged-state.f4208c24.js";import"./Popover.83ecbb3c.js";import"./Suffix.f0ab9e0a.js";import"./get.d26f3b42.js";import"./cssr.f6485797.js";import"./use-compitable.1c009e8c.js";import"./Dropdown.7495c592.js";import"./Select.796a8897.js";import"./Input.7a3b8143.js";const be=t=>{const{textColor3:o,infoColor:e,errorColor:i,successColor:n,warningColor:r,textColor1:u,textColor2:m,railColor:s,fontWeightStrong:_,fontSize:p}=t;return Object.assign(Object.assign({},Z),{contentFontSize:p,titleFontWeight:_,circleBorder:`2px solid ${o}`,circleBorderInfo:`2px solid ${e}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${r}`,iconColor:o,iconColorInfo:e,iconColorError:i,iconColorSuccess:n,iconColorWarning:r,titleTextColor:u,contentTextColor:m,metaTextColor:o,lineColor:s})},ze={name:"Timeline",common:X,self:be},Ce=ze,W=1.25,$e=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${W};
`,[B("horizontal",`
 flex-direction: row;
 `,[F(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[F(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[F(">",[g("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[g("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),B("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),B("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[F("&:last-child",[l("timeline-item-timeline",[g("line",`
 display: none;
 `)]),l("timeline-item-content",[g("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[g("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),g("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),g("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),B("dashed-line-type",[l("timeline-item-timeline",[g("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${W} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[g("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),g("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),g("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ke=Object.assign(Object.assign({},G.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Q=te("n-timeline"),Se=f({name:"Timeline",props:ke,setup(t,{slots:o}){const{mergedClsPrefixRef:e}=J(t),i=G("Timeline","-timeline",$e,Ce,t,e);return ee(Q,{props:t,mergedThemeRef:i,mergedClsPrefixRef:e}),()=>{const{value:n}=e;return h("div",{class:[`${n}-timeline`,t.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${t.size}-size`,!t.horizontal&&`${n}-timeline--${t.itemPlacement}-placement`]},o)}}}),we={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Be=f({name:"TimelineItem",props:we,setup(t){const o=ne(Q);o||oe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),he();const{inlineThemeDisabled:e}=J(),i=E(()=>{const{props:{size:r,iconSize:u},mergedThemeRef:m}=o,{type:s}=t,{self:{titleTextColor:_,contentTextColor:p,metaTextColor:x,lineColor:y,titleFontWeight:C,contentFontSize:L,[S("iconSize",r)]:R,[S("titleMargin",r)]:$,[S("titleFontSize",r)]:k,[S("circleBorder",s)]:b,[S("iconColor",s)]:A},common:{cubicBezierEaseInOut:w}}=m.value;return{"--n-bezier":w,"--n-circle-border":b,"--n-icon-color":A,"--n-content-font-size":L,"--n-content-text-color":p,"--n-line-color":y,"--n-meta-text-color":x,"--n-title-font-size":k,"--n-title-font-weight":C,"--n-title-margin":$,"--n-title-text-color":_,"--n-icon-size":ge(u)||R}}),n=e?ie("timeline-item",E(()=>{const{props:{size:r,iconSize:u}}=o,{type:m}=t;return`${r[0]}${u||"a"}${m[0]}`}),i,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:e?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{mergedClsPrefix:t,color:o,onRender:e,$slots:i}=this;return e==null||e(),h("div",{class:[`${t}-timeline-item`,this.themeClass,`${t}-timeline-item--${this.type}-type`,`${t}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},h("div",{class:`${t}-timeline-item-timeline`},h("div",{class:`${t}-timeline-item-timeline__line`}),O(i.icon,n=>n?h("div",{class:`${t}-timeline-item-timeline__icon`,style:{color:o}},n):h("div",{class:`${t}-timeline-item-timeline__circle`,style:{borderColor:o}}))),h("div",{class:`${t}-timeline-item-content`},O(i.header,n=>n||this.title?h("div",{class:`${t}-timeline-item-content__title`},n||this.title):null),h("div",{class:`${t}-timeline-item-content__content`},j(i.default,()=>[this.content])),h("div",{class:`${t}-timeline-item-content__meta`},j(i.footer,()=>[this.time]))))}}),Fe=f({name:"CountTo"}),U=f({...Fe,props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(t,{emit:o}){const e=t,i=T(e.startValue);let n=I(i);const r=E(()=>_(n.value)),u=T(!1);function m(){n=I(i,{disabled:u,duration:e.duration,onStarted:()=>o("on-started"),onFinished:()=>o("on-finished"),...e.useEasing?{transition:ce[e.transition]}:{}})}function s(){m(),i.value=e.endValue}function _(p){if(!p)return"";const{decimals:x,decimal:y,separator:C,suffix:L,prefix:R}=e;let $=Number(p).toFixed(x);$=String($);const k=$.split(".");let b=k[0];const A=k.length>1?y+k[1]:"",w=/(\d+)(\d{3})/;if(C&&!ae(C))for(;w.test(b);)b=b.replace(w,`$1${C}$2`);return R+b+A+L}return se([()=>e.startValue,()=>e.endValue],()=>{e.autoplay&&s()}),re(()=>{i.value=e.startValue}),le(()=>{e.autoplay&&s()}),(p,x)=>(v(),P("span",null,H(z(r)),1))}}),Ee={class:"flex w-full h-360px"},Te={class:"w-200px h-full py-12px"},Pe=d("h3",{class:"text-16px font-bold"},"Dashboard",-1),Ne=d("p",{class:"text-[#aaa]"},"Overview Of Lasted Month",-1),Le={class:"pt-36px text-24px font-bold"},Re=d("p",{class:"text-[#aaa]"},"Current Month Earnings",-1),Ae={class:"pt-36px text-24px font-bold"},Ve=d("p",{class:"text-[#aaa]"},"Current Month Sales",-1),De={class:"flex-1-hidden h-full"},Oe=f({name:"DashboardAnalysisTopCard"}),je=f({...Oe,setup(t){const o=T({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["\u4E0B\u8F7D\u91CF","\u6CE8\u518C\u6570"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"]}],yAxis:[{type:"value"}],series:[{color:"#8e9dff",name:"\u4E0B\u8F7D\u91CF",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[4623,6145,6268,6411,1890,4251,2978,3880,3606,4311]},{color:"#26deca",name:"\u6CE8\u518C\u6570",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#26deca"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[2208,2016,2916,4512,8281,2008,1963,2367,2956,678]}]}),{domRef:e}=M(o),i=T({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca"],name:"\u65F6\u95F4\u5B89\u6392",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12"}},labelLine:{show:!1},data:[{value:20,name:"\u5B66\u4E60"},{value:10,name:"\u5A31\u4E50"},{value:30,name:"\u5DE5\u4F5C"},{value:40,name:"\u4F11\u606F"}]}]}),{domRef:n}=M(i);return(r,u)=>{const m=U,s=ue,_=K,p=V,x=D;return v(),N(x,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:c(()=>[a(p,{span:"0:24 640:24 1024:16"},{default:c(()=>[a(_,{bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[d("div",Ee,[d("div",Te,[Pe,Ne,d("h3",Le,[a(m,{prefix:"$","start-value":0,"end-value":7754})]),Re,d("h3",Ae,[a(m,{"start-value":0,"end-value":1234})]),Ve,a(s,{class:"mt-24px",type:"primary"},{default:c(()=>[de("Last Month Summary")]),_:1})]),d("div",De,[d("div",{ref_key:"lineRef",ref:e,class:"wh-full"},null,512)])])]),_:1})]),_:1}),a(p,{span:"0:24 640:24 1024:8"},{default:c(()=>[a(_,{bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[d("div",{ref_key:"pieRef",ref:n,class:"w-full h-360px"},null,512)]),_:1})]),_:1})]),_:1})}}}),Ie=f({__name:"GradientBg",props:{startColor:{type:String,required:!1,default:"#56cdf3"},endColor:{type:String,required:!1,default:"#719de3"}},setup(t){const o=t,e=E(()=>`linear-gradient(to bottom right, ${o.startColor}, ${o.endColor})`);return(i,n)=>(v(),P("div",{class:"p-16px rounded-16px text-white",style:pe({backgroundImage:z(e)})},[me(i.$slots,"default")],4))}}),Me={class:"text-16px"},We={class:"flex justify-between pt-12px"},Je=f({name:"DashboardAnalysisDataCard"}),Ge=f({...Je,setup(t){const o=[{id:"visit",title:"\u8BBF\u95EE\u91CF",value:1e6,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"\u6210\u4EA4\u989D",value:234567.89,unit:"$",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"\u4E0B\u8F7D\u6570",value:666666,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"\u6210\u4EA4\u6570",value:999999,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}];return(e,i)=>{const n=fe,r=U,u=V,m=D;return v(),N(m,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:c(()=>[(v(),P(q,null,Y(o,s=>a(u,{key:s.id},{default:c(()=>[a(z(Ie),{class:"h-100px","start-color":s.colors[0],"end-color":s.colors[1]},{default:c(()=>[d("h3",Me,H(s.title),1),d("div",We,[a(n,{icon:s.icon,class:"text-32px"},null,8,["icon"]),a(r,{prefix:s.unit,"start-value":1,"end-value":s.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})}}}),He={class:"h-360px"},Ke={class:"h-360px"},qe=f({name:"DashboardAnalysisBottomPart"}),Ye=f({...qe,setup(t){const o=[{type:"default",title:"\u554A",content:"",time:"2021-10-10 20:46"},{type:"success",title:"\u6210\u529F",content:"\u54EA\u91CC\u6210\u529F",time:"2021-10-10 20:46"},{type:"error",title:"\u9519\u8BEF",content:"\u54EA\u91CC\u9519\u8BEF",time:"2021-10-10 20:46"},{type:"warning",title:"\u8B66\u544A",content:"\u54EA\u91CC\u8B66\u544A",time:"2021-10-10 20:46"},{type:"info",title:"\u4FE1\u606F",content:"\u662F\u7684",time:"2021-10-10 20:46"}],e=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(n){return n.tags.map(u=>h(xe,{style:{marginRight:"6px"},type:"info"},{default:()=>u}))}}],i=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:3,name:"Soybean",age:25,address:"China Shenzhen",tags:["handsome","programmer"]},{key:4,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:5,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:6,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];return(n,r)=>{const u=Be,m=Se,s=K,_=V,p=ve,x=D;return v(),N(x,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:c(()=>[a(_,{span:"0:24 640:24 1024:8"},{default:c(()=>[a(s,{title:"\u65F6\u95F4\u7EBF",bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[d("div",He,[a(m,null,{default:c(()=>[(v(),P(q,null,Y(o,y=>a(u,_e({key:y.type},y),null,16)),64))]),_:1})])]),_:1})]),_:1}),a(_,{span:"0:24 640:24 1024:16"},{default:c(()=>[a(s,{title:"\u8868\u683C",bordered:!1,class:"rounded-16px shadow-sm"},{default:c(()=>[d("div",Ke,[a(p,{size:"small",columns:e,data:i})])]),_:1})]),_:1})]),_:1})}}}),ft=f({__name:"index",setup(t){return(o,e)=>{const i=ye;return v(),N(i,{vertical:!0,size:16},{default:c(()=>[a(z(je)),a(z(Ge)),a(z(Ye))]),_:1})}}});export{ft as default};

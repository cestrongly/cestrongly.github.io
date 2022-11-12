import{x as c,z as r,B as p,C as n,G as k,H as P,d as y,I as _,a4 as Z,K as g,cD as A,a7 as j,v as B,c as M,O as C,s as l,E as D,J as I,aH as O,cE as T,F as L,o as F,a as K,bj as q}from"./index.4c52ef28.js";const G=c([r("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[p("show-divider",[r("list-item",[c("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),p("clickable",[r("list-item",`
 cursor: pointer;
 `)]),p("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),p("hoverable",[r("list-item",`
 border-radius: var(--n-border-radius);
 `,[c("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),p("bordered, hoverable",[r("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),r("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),k(r("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),P(r("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),J=Object.assign(Object.assign({},g.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),w=D("n-list"),t1=y({name:"List",props:J,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:a,mergedRtlRef:h}=_(t),m=Z("List",h,e),u=g("List","-list",G,A,t,e);j(w,{showDividerRef:B(t,"showDivider"),mergedClsPrefixRef:e});const v=M(()=>{const{common:{cubicBezierEaseInOut:d},self:{fontSize:s,textColor:i,color:f,colorModal:b,colorPopover:x,borderColor:H,borderColorModal:$,borderColorPopover:z,borderRadius:R,colorHover:E,colorHoverModal:S,colorHoverPopover:V}}=u.value;return{"--n-font-size":s,"--n-bezier":d,"--n-text-color":i,"--n-color":f,"--n-border-radius":R,"--n-border-color":H,"--n-border-color-modal":$,"--n-border-color-popover":z,"--n-color-modal":b,"--n-color-popover":x,"--n-color-hover":E,"--n-color-hover-modal":S,"--n-color-hover-popover":V}}),o=a?C("list",void 0,v,t):void 0;return{mergedClsPrefix:e,rtlEnabled:m,cssVars:a?void 0:v,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var t;const{$slots:e,mergedClsPrefix:a,onRender:h}=this;return h==null||h(),l("ul",{class:[`${a}-list`,this.rtlEnabled&&`${a}-list--rtl`,this.bordered&&`${a}-list--bordered`,this.showDivider&&`${a}-list--show-divider`,this.hoverable&&`${a}-list--hoverable`,this.clickable&&`${a}-list--clickable`,this.themeClass],style:this.cssVars},e.header?l("div",{class:`${a}-list__header`},e.header()):null,(t=e.default)===null||t===void 0?void 0:t.call(e),e.footer?l("div",{class:`${a}-list__footer`},e.footer()):null)}}),l1=y({name:"ListItem",setup(){const t=I(w,null);return t||O("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:t.showDividerRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return l("li",{class:`${e}-list-item`},t.prefix?l("div",{class:`${e}-list-item__prefix`},t.prefix()):null,t.default?l("div",{class:`${e}-list-item__main`},t):null,t.suffix?l("div",{class:`${e}-list-item__suffix`},t.suffix()):null,this.showDivider&&l("div",{class:`${e}-list-item__divider`}))}}),N=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[n("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),n("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),n("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),n("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),n("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),W=Object.assign(Object.assign({},g.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),i1=y({name:"Thing",props:W,setup(t,{slots:e}){const{mergedClsPrefixRef:a,inlineThemeDisabled:h,mergedRtlRef:m}=_(t),u=g("Thing","-thing",N,T,t,a),v=Z("Thing",m,a),o=M(()=>{const{self:{titleTextColor:s,textColor:i,titleFontWeight:f,fontSize:b},common:{cubicBezierEaseInOut:x}}=u.value;return{"--n-bezier":x,"--n-font-size":b,"--n-text-color":i,"--n-title-font-weight":f,"--n-title-text-color":s}}),d=h?C("thing",void 0,o,t):void 0;return()=>{var s;const{value:i}=a,f=v?v.value:!1;return(s=d==null?void 0:d.onRender)===null||s===void 0||s.call(d),l("div",{class:[`${i}-thing`,d==null?void 0:d.themeClass,f&&`${i}-thing--rtl`],style:h?void 0:o.value},e.avatar&&t.contentIndented?l("div",{class:`${i}-thing-avatar`},e.avatar()):null,l("div",{class:`${i}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?l("div",{class:`${i}-thing-avatar-header-wrapper`},e.avatar?l("div",{class:`${i}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${i}-thing-header-wrapper`},l("div",{class:`${i}-thing-header`},e.header||t.title?l("div",{class:`${i}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?l("div",{class:`${i}-thing-main__description`,style:t.descriptionStyle},e.description?e.description():t.description):null):null):l(L,null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${i}-thing-header`},e.header||t.title?l("div",{class:`${i}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?l("div",{class:`${i}-thing-main__description`,style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?l("div",{class:`${i}-thing-main__content`,style:t.contentStyle},e.default?e.default():t.content):null,e.footer?l("div",{class:`${i}-thing-main__footer`},e.footer()):null,e.action?l("div",{class:`${i}-thing-main__action`},e.action()):null))}}}),Q={class:"inline-block",width:"1em",height:"1em",id:"eb3b8723-41b0-4d9f-a59f-ffd4b630357a","data-name":"\u56FE\u5C42 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 134.49 134.49"},U=q('<path d="M134.49,67.25A67.25,67.25,0,1,1,67.25,0a67.23,67.23,0,0,1,67.24,67.25" style="fill:#f3f3f2;"></path><polygon points="64.47 103.16 64.47 103.16 64.47 103.16 64.47 103.16" style="fill:#f1caae;"></polygon><path d="M66.87,90.15c8.11-6.21,11-10.25,12.24-11a17.94,17.94,0,0,1-.69-4.23c-4,3.34-5.73,4.49-11,4.31-5.69.19-7.28-1.15-12-5.14L55.35,74a19,19,0,0,1-.72,5.14C55.86,79.89,58.76,83.93,66.87,90.15Z" style="fill:#f1caae;"></path><path d="M61.56,121.66c.31-2,.61-4,.9-5.91h0l0-.11c.93-6,1.7-10.86,2-12.48h0a1.17,1.17,0,0,1-.36-.34h0a.6.6,0,0,1-.09-.13h0c-.16-.36-.32-.69-.48-1,0-.06-.07-.13-.1-.2a16.73,16.73,0,0,1-2-4.43c0-.15,0-.3-.07-.46v0a4,4,0,0,0-1,2.65c.33,3.56-10.83-9.56-10.65-14.6a38.55,38.55,0,0,1-4,1.9h0A219.52,219.52,0,0,0,61.56,121.66Z" style="fill:#9d9d9d;"></path><path d="M23.63,94.06h0l-.09,0h.05S23.62,94.07,23.63,94.06Z" style="fill:#9d9d9d;"></path><path d="M73.3,99.2a4,4,0,0,0-1-2.64.06.06,0,0,1,0,0c0,.16,0,.31-.06.46A7.17,7.17,0,0,1,72,98h0a27.91,27.91,0,0,1-1.71,3.52l-.11.21c-.16.31-.32.65-.48,1a1,1,0,0,1-.09.13h0a1.1,1.1,0,0,1-.37.34c.29,1.6,1.06,6.35,2,12.32a2.34,2.34,0,0,0,0,.26h0c.23,1.54.48,3.15.73,4.81A208.85,208.85,0,0,0,87.47,86.38h0A37.69,37.69,0,0,1,84,84.7C84,89.82,73,102.73,73.3,99.2Z" style="fill:#9d9d9d;"></path><path d="M109.7,94.11a5.22,5.22,0,0,1,.63.11l-.73-.28h0S109.68,94,109.7,94.11Z" style="fill:#9d9d9d;"></path><path d="M23.6,94.09h-.05a4.67,4.67,0,0,0-.84.15c-3,.81-5.08,8.11-6.94,16.26a67.51,67.51,0,0,0,16.1,13.93,33.36,33.36,0,0,0-.42-4.63C30.32,113.55,22.66,94.93,23.6,94.09Z" style="fill:#959494;"></path><path d="M117.63,111.76c-2-8.62-4-16.67-7.21-17.52l-.09,0a5.22,5.22,0,0,0-.63-.11c.39,1.91-6.82,19.65-7.91,25.69a34.76,34.76,0,0,0-.44,5.4" style="fill:#959494;"></path><path d="M71.29,119.06H69.64v-3.73h1.58l0,.15c-.92-6-1.69-10.72-2-12.32l-.1.07a1.29,1.29,0,0,1-.28.08v.09H68l-.89.06v0h-.56v0l-.88-.06h-.86v-.09a1.2,1.2,0,0,1-.27-.08l-.11-.07h0c-.29,1.62-1.06,6.44-2,12.48l0-.31h1.59v3.73H62.46v-3.31c-.29,1.87-.59,3.86-.9,5.91h0c0-.34.1-.69.15-1v1.28l.75,1.25v-2.62h1.65v3.73h-1c.57.91,1.14,1.78,1.7,2.58v-1.09H66.5v2.82c.25-.29.5-.6.75-.91v-1.91h1.42c.34-.48.68-1,1-1.49h0v-3.73h1.65v1.22l.73-1.22c-.25-1.66-.5-3.27-.73-4.81Zm-1.65-13.74c.15.91.33,2,.53,3.3h-.53Zm0,4.79h.77c.18,1.16.38,2.4.58,3.73H69.64Zm-3.14-5.22v3.73H64.85v-3.73Zm-2.39,9H62.75c.21-1.33.4-2.57.59-3.73h.77Zm0-5.22h-.54l.54-3.31Zm2.39,15.66H64.85v-3.73H66.5Zm0-5.22H64.85v-3.73H66.5Zm0-5.22H64.85v-3.73H66.5Zm2.39,10.44H67.25v-3.73h1.64Zm0-5.22H67.25v-3.73h1.64Zm0-5.22H67.25v-3.73h1.64Zm0-5.22H67.25v-3.73h1.64Z" style="fill:#f0f0f0;"></path><path d="M63.53,101.69c.16.32.32.65.48,1h0C63.85,102.34,63.69,102,63.53,101.69Z" style="fill:#fff;"></path><path d="M61.41,96.55v0Z" style="fill:#fff;"></path><path d="M72.27,97.06A7.17,7.17,0,0,1,72,98,7.17,7.17,0,0,0,72.27,97.06Z" style="fill:#fff;"></path><path d="M72.34,96.56h0a.09.09,0,0,1,0,0A.06.06,0,0,0,72.34,96.56Z" style="fill:#fff;"></path><path d="M70.21,101.7c-.16.32-.32.64-.48,1C69.89,102.35,70.05,102,70.21,101.7Z" style="fill:#fff;"></path><path d="M64.58,103.23a1.2,1.2,0,0,0,.27.08V99.67H66.5v3.73h-.79l.88.06v0h.56v0l.89-.06h-.79V99.67h1.64v3.64a1.29,1.29,0,0,0,.28-.08l.1-.07a1.1,1.1,0,0,0,.37-.34V99.67h1.64c-.29.57-.62,1.16-1,1.82A27.91,27.91,0,0,0,72,98V96.15c-.23-.29-.48-.57-.74-.86v2.89H69.64V94.45h.82c-.55-.52-1.11-1-1.63-1.49H67.25v-1.5a3.56,3.56,0,0,1-.38-.47,2.79,2.79,0,0,1-.37.47V93H64.91c-.52.47-1.08,1-1.62,1.49h.82v3.73H62.46V95.29c-.27.28-.52.57-.75.86V98a7.13,7.13,0,0,1-.23-.91,16.73,16.73,0,0,0,2,4.43c-.34-.65-.67-1.25-1-1.82h1.64v3.15a1.17,1.17,0,0,0,.36.34h0Zm2.67-8.78h1.64v3.73H67.25Zm-2.4,0H66.5v3.73H64.85Z" style="fill:#fff;"></path><polygon points="66.5 99.67 64.85 99.67 64.85 103.31 64.85 103.4 65.71 103.4 66.5 103.4 66.5 99.67" style="fill:#040000;"></polygon><rect x="64.85" y="104.89" width="1.65" height="3.73" style="fill:#040000;"></rect><rect x="64.85" y="94.45" width="1.65" height="3.73" style="fill:#040000;"></rect><rect x="64.85" y="110.11" width="1.65" height="3.73" style="fill:#040000;"></rect><path d="M64.85,125.77v1.09c.49.7,1,1.35,1.45,2l.2-.23v-2.82Z" style="fill:#040000;"></path><rect x="64.85" y="120.55" width="1.65" height="3.73" style="fill:#040000;"></rect><rect x="64.85" y="115.33" width="1.65" height="3.73" style="fill:#040000;"></rect><path d="M61.56,121.66l.15.26v-1.28C61.66,121,61.61,121.32,61.56,121.66Z" style="fill:#040000;"></path><path d="M62.46,98.18h1.65V94.45h-.82c-.29.28-.56.56-.83.84Z" style="fill:#040000;"></path><path d="M61.71,96.15l-.3.4v0c0,.16,0,.31.07.46a7.13,7.13,0,0,0,.23.91Z" style="fill:#040000;"></path><path d="M64.11,99.67H62.47c.29.57.62,1.17,1,1.82,0,.07.07.14.1.2.16.32.32.65.48,1h0a.6.6,0,0,0,.09.13h0Z" style="fill:#040000;"></path><path d="M64.11,120.55H62.46v2.62q.34.57.69,1.11h1Z" style="fill:#040000;"></path><path d="M64.11,119.06v-3.73H62.52l0,.31,0,.11h0v3.31Z" style="fill:#040000;"></path><path d="M64.11,108.62v-3.31l-.54,3.31Z" style="fill:#040000;"></path><path d="M62.75,113.84h1.36v-3.73h-.77C63.15,111.27,63,112.51,62.75,113.84Z" style="fill:#040000;"></path><path d="M69.64,120.55v3.73h0c.53-.8,1.06-1.63,1.6-2.51v-1.22Z" style="fill:#040000;"></path><path d="M69.64,115.33v3.73h1.65v-3.32h0a2.34,2.34,0,0,1,0-.26l0-.15Z" style="fill:#040000;"></path><path d="M66.5,91.46c-.4.43-1,.94-1.59,1.5H66.5Z" style="fill:#040000;"></path><path d="M68.83,93c-.63-.56-1.19-1.07-1.58-1.5V93Z" style="fill:#040000;"></path><rect x="67.25" y="110.11" width="1.65" height="3.73" style="fill:#040000;"></rect><rect x="67.25" y="120.55" width="1.65" height="3.73" style="fill:#040000;"></rect><rect x="67.25" y="115.33" width="1.65" height="3.73" style="fill:#040000;"></rect><polygon points="68.89 99.67 67.25 99.67 67.25 103.4 68.04 103.4 68.89 103.4 68.89 103.31 68.89 99.67" style="fill:#040000;"></polygon><rect x="67.25" y="104.89" width="1.65" height="3.73" style="fill:#040000;"></rect><path d="M67.25,127.68c.47-.6.94-1.23,1.42-1.91H67.25Z" style="fill:#040000;"></path><rect x="67.25" y="94.45" width="1.65" height="3.73" style="fill:#040000;"></rect><path d="M69.64,105.32v3.3h.53C70,107.35,69.79,106.23,69.64,105.32Z" style="fill:#040000;"></path><path d="M69.64,99.67v3.15h0a1,1,0,0,0,.09-.13c.16-.36.32-.68.48-1l.11-.21c.34-.66.67-1.25,1-1.82Z" style="fill:#040000;"></path><path d="M72,98h0a7.17,7.17,0,0,0,.24-.91c0-.15,0-.3.06-.46a.09.09,0,0,0,0,0c-.1-.13-.2-.27-.31-.4V98Z" style="fill:#040000;"></path><path d="M69.64,98.18h1.65V95.29l-.83-.84h-.82Z" style="fill:#040000;"></path><path d="M70.41,110.11h-.77v3.73H71C70.79,112.51,70.59,111.27,70.41,110.11Z" style="fill:#040000;"></path><path d="M60.45,99.2a4,4,0,0,1,1-2.65h0l.3-.4c.23-.29.48-.58.75-.86s.54-.56.83-.84c.54-.52,1.1-1,1.62-1.49s1.19-1.07,1.59-1.5a2.79,2.79,0,0,0,.37-.47,3.56,3.56,0,0,0,.38.47c.39.43,1,.94,1.58,1.5s1.08,1,1.63,1.49l.83.84c.26.29.51.57.74.86.11.13.21.27.31.4h0a4,4,0,0,1,1,2.64C73,102.73,84,89.82,84,84.7c0-.12,0-.24,0-.36-.09-.72-2.2-1.82-4.15-5.11-.15-.26-.36-.27-.68-.08-1.23.75-4.13,4.79-12.24,11-8.11-6.22-11-10.26-12.24-11-.31-.19-.53-.18-.68.08-2,3.29-4.05,4.39-4.14,5.11a2.17,2.17,0,0,0,0,.26C49.62,89.64,60.78,102.76,60.45,99.2Z" style="fill:#838384;"></path><path d="M62.49,132.11a13.73,13.73,0,0,0,3.81-3.29c-.47-.61-1-1.26-1.45-2s-1.13-1.67-1.7-2.58q-.34-.54-.69-1.11l-.75-1.25-.15-.26h0A219.52,219.52,0,0,1,45.81,86.5h0c-.49-1.25-21,7-22.17,7.56h0s0,0,0,0c-.94.84,6.72,19.46,7.85,25.71a33.36,33.36,0,0,1,.42,4.63A66.72,66.72,0,0,0,62,134.27C62.15,133,62.3,132.21,62.49,132.11Z" style="fill:#282629;"></path><path d="M101.35,125.2a34.76,34.76,0,0,1,.44-5.4c1.09-6,8.3-23.78,7.91-25.69,0-.08,0-.15-.09-.17h0c-1.17-.52-21.69-8.84-22.13-7.56h0A208.85,208.85,0,0,1,72,120.55l-.73,1.22c-.54.88-1.07,1.71-1.6,2.51-.34.51-.68,1-1,1.49-.48.68-1,1.31-1.42,1.91-.25.31-.5.62-.75.91l-.2.23a13.73,13.73,0,0,1-3.81,3.29c-.19.1-.34.89-.47,2.16,1.73.13,3.47.22,5.23.22a66.88,66.88,0,0,0,34.1-9.29" style="fill:#1a1a1b;"></path><path d="M67.41,79.23c5.28.18,7-1,11-4.31l1-.83c4.93-4.19,2.44-12.94,5.44-12.39s6.29-7.44,4.18-9.45c-1-.09-1.87.88-2.66,2.2-.89,1.49-.54,3.79-1.42,3.74-1.19-4-.93-7.62-.69-11.81C76,48.8,67.47,50.06,60.59,45c-1.41-1-2.77-2.4-4.91-2.36-2.47,0-3.46,1.5-3.11,3.87.17,1.19.25,2.8.32,3.5A10.07,10.07,0,0,1,51,56.1c-.37.38-1.27,2-1.8,2.09s-.14-2.47-1.62-4.69c-1.16-1.75-1.7-1.37-1.7-1.37C43.56,54,47,62.25,50,61.7s.55,8.1,5.37,12.31l.08.08C60.13,78.08,61.72,79.42,67.41,79.23Z" style="fill:#f9d2b5;"></path><path d="M47.61,53.5c1.48,2.22,1.18,4.8,1.62,4.69s1.43-1.71,1.8-2.09A10.07,10.07,0,0,0,52.89,50c-.07-.7-.15-2.31-.32-3.5-.35-2.37.64-3.83,3.11-3.87,2.14,0,3.5,1.32,4.91,2.36,6.88,5.05,15.4,3.79,23.66,1.37-.24,4.19-.5,7.78.69,11.81.88.05.53-2.25,1.42-3.74.79-1.32,1.63-2.29,2.66-2.2a2.87,2.87,0,0,1,.38.08c2.46-5.22,2.72-13.7.29-18.93s-6.3-7.68-10.14-12c.35,1.18-1.24,2.95-2.75,3.08-1.26.12-3.35-.56-4.61-.71-6.36-.77-10-1.06-15.18.77a19.36,19.36,0,0,0-7.22,4.22,19.88,19.88,0,0,0-5.18,10.65,26.75,26.75,0,0,0-.19,6.38c.12,1.14.81,5.36,1.49,6.38C45.91,52.13,46.45,51.75,47.61,53.5Z" style="fill:#554c44;"></path>',52),X=[U];function Y(t,e){return F(),K("svg",Q,X)}const a1={name:"local-avatar",render:Y};export{a1 as _,i1 as a,l1 as b,t1 as c};

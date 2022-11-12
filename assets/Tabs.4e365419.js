import{d as q,g as $,bL as it,s,bV as st,bW as Y,bX as lt,E as dt,J as we,aH as ct,c as K,m as ft,F as bt,a2 as ut,aL as vt,aI as pt,bY as ht,z as b,B as R,x as T,C as B,aP as gt,I as mt,K as Re,bZ as xt,bH as Z,h as Q,a7 as yt,v as j,R as wt,M as k,O as Rt,V as be,W as ue,as as U,t as ee,aq as Ct,az as St,T as Tt,bK as zt}from"./index.4c52ef28.js";import{A as Pt}from"./Add.9192fd57.js";import{u as ve}from"./use-compitable.1c009e8c.js";import{u as $t}from"./use-merged-state.f4208c24.js";import{c as _t,a as pe,o as Wt}from"./cssr.f6485797.js";const Lt=pe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[pe("&::-webkit-scrollbar",{width:0,height:0})]),At=q({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=$(null);function a(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const r=it();return Lt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:_t,ssr:r}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...i){var u;(u=e.value)===null||u===void 0||u.scrollTo(...i)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Et=/\s/;function Bt(e){for(var a=e.length;a--&&Et.test(e.charAt(a)););return a}var kt=/^\s+/;function It(e){return e&&e.slice(0,Bt(e)+1).replace(kt,"")}var he=0/0,jt=/^[-+]0x[0-9a-f]+$/i,Ot=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,Mt=parseInt;function ge(e){if(typeof e=="number")return e;if(st(e))return he;if(Y(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=Y(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=It(e);var r=Ot.test(e);return r||Ft.test(e)?Mt(e.slice(2),r?2:8):jt.test(e)?he:+e}var Dt=function(){return lt.Date.now()};const te=Dt;var Ht="Expected a function",Nt=Math.max,Vt=Math.min;function Xt(e,a,r){var d,i,u,v,c,m,x=0,w=!1,h=!1,p=!0;if(typeof e!="function")throw new TypeError(Ht);a=ge(a)||0,Y(r)&&(w=!!r.leading,h="maxWait"in r,u=h?Nt(ge(r.maxWait)||0,a):u,p="trailing"in r?!!r.trailing:p);function y(g){var W=d,L=i;return d=i=void 0,x=g,v=e.apply(L,W),v}function C(g){return x=g,c=setTimeout(z,a),w?y(g):v}function S(g){var W=g-m,L=g-x,D=a-W;return h?Vt(D,u-L):D}function f(g){var W=g-m,L=g-x;return m===void 0||W>=a||W<0||h&&L>=u}function z(){var g=te();if(f(g))return P(g);c=setTimeout(z,S(g))}function P(g){return c=void 0,p&&d?y(g):(d=i=void 0,v)}function _(){c!==void 0&&clearTimeout(c),x=0,d=m=i=c=void 0}function H(){return c===void 0?v:P(te())}function M(){var g=te(),W=f(g);if(d=arguments,i=this,m=g,W){if(c===void 0)return C(m);if(h)return clearTimeout(c),c=setTimeout(z,a),y(m)}return c===void 0&&(c=setTimeout(z,a)),v}return M.cancel=_,M.flush=H,M}var Ut="Expected a function";function ae(e,a,r){var d=!0,i=!0;if(typeof e!="function")throw new TypeError(Ut);return Y(r)&&(d="leading"in r?!!r.leading:d,i="trailing"in r?!!r.trailing:i),Xt(e,a,{leading:d,maxWait:a,trailing:i})}const oe=dt("n-tabs"),Ce={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ta=q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ce,setup(e){const a=we(oe,null);return a||ct("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Kt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ht(Ce,["displayDirective"])),re=q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Kt,setup(e){const{mergedClsPrefixRef:a,valueRef:r,typeRef:d,closableRef:i,tabStyleRef:u,tabChangeIdRef:v,onBeforeLeaveRef:c,triggerRef:m,handleAdd:x,activateTab:w,handleClose:h}=we(oe);return{trigger:m,mergedClosable:K(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?i.value:p}),style:u,clsPrefix:a,value:r,type:d,handleClose(p){p.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:p}=e,y=++v.id;if(p!==r.value){const{value:C}=c;C?Promise.resolve(C(e.name,r.value)).then(S=>{S&&v.id===y&&w(p)}):w(p)}}}},render(){const{internalAddable:e,clsPrefix:a,name:r,disabled:d,label:i,tab:u,value:v,mergedClosable:c,style:m,trigger:x,$slots:{default:w}}=this,h=i!=null?i:u;return s("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${a}-tabs-tab-pad`}):null,s("div",Object.assign({key:r,"data-name":r,"data-disabled":d?!0:void 0},ft({class:[`${a}-tabs-tab`,v===r&&`${a}-tabs-tab--active`,d&&`${a}-tabs-tab--disabled`,c&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${a}-tabs-tab__label`},e?s(bt,null,s("div",{class:`${a}-tabs-tab__height-placeholder`},"\xA0"),s(ut,{clsPrefix:a},{default:()=>s(Pt,null)})):w?w():typeof h=="object"?h:vt(h!=null?h:r)),c&&this.type==="card"?s(pt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:d}):null))}}),Yt=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[R("segment-type",[b("tabs-rail",[T("&.transition-disabled","color: red;",[b("tabs-tab",`
 transition: none;
 `)])])]),b("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),R("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[B("prefix, suffix",`
 display: flex;
 align-items: center;
 `),B("prefix","padding-right: 16px;"),B("suffix","padding-left: 16px;")]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R("shadow-before",[T("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("shadow-after",[T("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),T("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),T("&::before",`
 left: 0;
 `),T("&::after",`
 right: 0;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("disabled",{cursor:"not-allowed"}),B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("&.transition-disabled",`
 transition: none;
 `),R("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[T("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),T("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),T("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),T("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),T("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),R("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[T("&:hover",{color:"var(--n-tab-text-color-hover)"}),R("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),R("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[R("line-type",[B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),R("card-type",[B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[R("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[B("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),gt("disabled",[T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),R("closable","padding-right: 6px;"),R("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),R("disabled","color: var(--n-tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),qt=Object.assign(Object.assign({},Re.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),aa=q({name:"Tabs",props:qt,setup(e,{slots:a}){var r,d,i,u;const{mergedClsPrefixRef:v,inlineThemeDisabled:c}=mt(e),m=Re("Tabs","-tabs",Yt,xt,e,v),x=$(null),w=$(null),h=$(null),p=$(null),y=$(null),C=$(!0),S=$(!0),f=ve(e,["labelSize","size"]),z=ve(e,["activeName","value"]),P=$((d=(r=z.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&d!==void 0?d:a.default?(u=(i=Z(a.default())[0])===null||i===void 0?void 0:i.props)===null||u===void 0?void 0:u.name:null),_=$t(z,P),H={id:0},M=K(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Q(_,()=>{H.id=0,L(),D()});function g(){var t;const{value:n}=_;return n===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${n}"]`)}function W(t){if(e.type==="card")return;const{value:n}=w;if(!!n&&t){const o=`${v.value}-tabs-bar--disabled`,{barWidth:l}=e;if(t.dataset.disabled==="true"?n.classList.add(o):n.classList.remove(o),typeof l=="number"&&t.offsetWidth>=l){const A=Math.floor((t.offsetWidth-l)/2)+t.offsetLeft;n.style.left=`${A}px`,n.style.maxWidth=`${l}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}}function L(){if(e.type==="card")return;const t=g();t&&W(t)}function D(t){var n;const o=(n=y.value)===null||n===void 0?void 0:n.$el;if(!o)return;const l=g();if(!l)return;const{scrollLeft:A,offsetWidth:I}=o,{offsetLeft:F,offsetWidth:X}=l;A>F?o.scrollTo({top:0,left:F,behavior:"smooth"}):F+X>A+I&&o.scrollTo({top:0,left:F+X-I,behavior:"smooth"})}const N=$(null);let G=0,E=null;function Se(t){const n=N.value;if(n){G=t.getBoundingClientRect().height;const o=`${G}px`,l=()=>{n.style.height=o,n.style.maxHeight=o};E?(l(),E(),E=null):E=l}}function Te(t){const n=N.value;if(n){const o=t.getBoundingClientRect().height,l=()=>{document.body.offsetHeight,n.style.maxHeight=`${o}px`,n.style.height=`${Math.max(G,o)}px`};E?(E(),E=null,l()):E=l}}function ze(){const t=N.value;t&&(t.style.maxHeight="",t.style.height="")}const ie={value:[]},se=$("next");function Pe(t){const n=_.value;let o="next";for(const l of ie.value){if(l===n)break;if(l===t){o="prev";break}}se.value=o,$e(t)}function $e(t){const{onActiveNameChange:n,onUpdateValue:o,"onUpdate:value":l}=e;n&&U(n,t),o&&U(o,t),l&&U(l,t),P.value=t}function _e(t){const{onClose:n}=e;n&&U(n,t)}function le(){const{value:t}=w;if(!t)return;const n="transition-disabled";t.classList.add(n),L(),t.classList.remove(n)}let de=0;function We(t){var n;if(t.contentRect.width===0&&t.contentRect.height===0||de===t.contentRect.width)return;de=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&le(),o!=="segment"&&J((n=y.value)===null||n===void 0?void 0:n.$el)}const Le=ae(We,64);Q([()=>e.justifyContent,()=>e.size],()=>{ee(()=>{const{type:t}=e;(t==="line"||t==="bar")&&le()})});const V=$(!1);function Ae(t){var n;const{target:o,contentRect:{width:l}}=t,A=o.parentElement.offsetWidth;if(!V.value)A<l&&(V.value=!0);else{const{value:I}=p;if(!I)return;A-l>I.$el.offsetWidth&&(V.value=!1)}J((n=y.value)===null||n===void 0?void 0:n.$el)}const Ee=ae(Ae,64);function Be(){const{onAdd:t}=e;t&&t(),ee(()=>{const n=g(),{value:o}=y;!n||!o||o.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function J(t){if(!t)return;const{scrollLeft:n,scrollWidth:o,offsetWidth:l}=t;C.value=n<=0,S.value=n+l>=o}const ke=ae(t=>{J(t.target)},64);yt(oe,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:_,tabChangeIdRef:H,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:Pe,handleClose:_e,handleAdd:Be}),Wt(()=>{L(),D()}),wt(()=>{const{value:t}=h;if(!t)return;const{value:n}=v,o=`${n}-tabs-nav-scroll-wrapper--shadow-before`,l=`${n}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(o):t.classList.add(o),S.value?t.classList.remove(l):t.classList.add(l)});const ce=$(null);Q(_,()=>{if(e.type==="segment"){const t=ce.value;t&&ee(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ie={syncBarPosition:()=>{L()}},fe=K(()=>{const{value:t}=f,{type:n}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],l=`${t}${o}`,{self:{barColor:A,closeIconColor:I,closeIconColorHover:F,closeIconColorPressed:X,tabColor:je,tabBorderColor:Oe,paneTextColor:Fe,tabFontWeight:Me,tabBorderRadius:De,tabFontWeightActive:He,colorSegment:Ne,fontWeightStrong:Ve,tabColorSegment:Xe,closeSize:Ue,closeIconSize:Ke,closeColorHover:Ye,closeColorPressed:qe,closeBorderRadius:Ge,[k("panePadding",t)]:Je,[k("tabPadding",l)]:Ze,[k("tabGap",l)]:Qe,[k("tabTextColor",n)]:et,[k("tabTextColorActive",n)]:tt,[k("tabTextColorHover",n)]:at,[k("tabTextColorDisabled",n)]:nt,[k("tabFontSize",t)]:rt},common:{cubicBezierEaseInOut:ot}}=m.value;return{"--n-bezier":ot,"--n-color-segment":Ne,"--n-bar-color":A,"--n-tab-font-size":rt,"--n-tab-text-color":et,"--n-tab-text-color-active":tt,"--n-tab-text-color-disabled":nt,"--n-tab-text-color-hover":at,"--n-pane-text-color":Fe,"--n-tab-border-color":Oe,"--n-tab-border-radius":De,"--n-close-size":Ue,"--n-close-icon-size":Ke,"--n-close-color-hover":Ye,"--n-close-color-pressed":qe,"--n-close-border-radius":Ge,"--n-close-icon-color":I,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":X,"--n-tab-color":je,"--n-tab-font-weight":Me,"--n-tab-font-weight-active":He,"--n-tab-padding":Ze,"--n-tab-gap":Qe,"--n-pane-padding":Je,"--n-font-weight-strong":Ve,"--n-tab-color-segment":Xe}}),O=c?Rt("tabs",K(()=>`${f.value[0]}${e.type[0]}`),fe,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:_,renderedNames:new Set,tabsRailElRef:ce,tabsPaneWrapperRef:N,tabsElRef:x,barElRef:w,addTabInstRef:p,xScrollInstRef:y,scrollWrapperElRef:h,addTabFixed:V,tabWrapperStyle:M,handleNavResize:Le,mergedSize:f,handleScroll:ke,handleTabsResize:Ee,cssVars:c?void 0:fe,themeClass:O==null?void 0:O.themeClass,animationDirection:se,renderNameListRef:ie,onAnimationBeforeLeave:Se,onAnimationEnter:Te,onAnimationAfterEnter:ze,onRender:O==null?void 0:O.onRender},Ie)},render(){const{mergedClsPrefix:e,type:a,addTabFixed:r,addable:d,mergedSize:i,renderNameListRef:u,onRender:v,$slots:{default:c,prefix:m,suffix:x}}=this;v==null||v();const w=c?Z(c()).filter(f=>f.type.__TAB_PANE__===!0):[],h=c?Z(c()).filter(f=>f.type.__TAB__===!0):[],p=!h.length,y=a==="card",C=a==="segment",S=!y&&!C&&this.justifyContent;return u.value=[],s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${i}-size`,S&&`${e}-tabs--flex`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav`]},be(m,f=>f&&s("div",{class:`${e}-tabs-nav__prefix`},f)),C?s("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},p?w.map((f,z)=>(u.value.push(f.props.name),s(re,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0}),f.children?{default:f.children.tab}:void 0))):h.map((f,z)=>(u.value.push(f.props.name),z===0?f:ye(f)))):s(ue,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},s(At,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const f=s("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?w.map((P,_)=>(u.value.push(P.props.name),ne(s(re,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0&&(!S||S==="center"||S==="start"||S==="end")}),P.children?{default:P.children.tab}:void 0)))):h.map((P,_)=>(u.value.push(P.props.name),ne(_!==0&&!S?ye(P):P))),!r&&d&&y?xe(d,(p?w.length:h.length)!==0):null,S?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let z=f;return y&&d&&(z=s(ue,{onResize:this.handleTabsResize},{default:()=>f})),s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},z,y?s("div",{class:`${e}-tabs-pad`}):null,y?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&d&&y?xe(d,!0):null,be(x,f=>f&&s("div",{class:`${e}-tabs-nav__suffix`},f))),p&&(this.animated?s("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},me(w,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):me(w,this.mergedValue,this.renderedNames)))}});function me(e,a,r,d,i,u,v){const c=[];return e.forEach(m=>{const{name:x,displayDirective:w,"display-directive":h}=m.props,p=C=>w===C||h===C,y=a===x;if(m.key!==void 0&&(m.key=x),y||p("show")||p("show:lazy")&&r.has(x)){r.has(x)||r.add(x);const C=!p("if");c.push(C?Ct(m,[[St,y]]):m)}}),v?s(Tt,{name:`${v}-transition`,onBeforeLeave:d,onEnter:i,onAfterEnter:u},{default:()=>c}):c}function xe(e,a){return s(re,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function ye(e){const a=zt(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function ne(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ta as _,aa as a};

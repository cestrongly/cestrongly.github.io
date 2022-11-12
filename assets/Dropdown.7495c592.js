import{g as _,h as de,bt as Oe,cw as Ie,cx as Ke,S as $e,ah as Z,cy as Te,ag as J,d as K,s,K as M,cz as je,c as b,z as N,aP as le,B as P,I as ae,cA as ze,m as Y,x as L,cB as De,O as be,am as ge,E as ce,J as U,ax as we,a7 as G,aM as X,a1 as Ae,aL as Q,F as Be,ay as Le,aw as Me,cs as Fe,Z as Ee,C as B,v as z,cC as He,as as ie,M as H,aO as Ue}from"./index.4c52ef28.js";import{c as ye,p as ue,V as Ve,a as qe,b as Ge,r as We}from"./Popover.83ecbb3c.js";import{f as Ze}from"./format-length.da8c4c56.js";import{h as fe,c as Je}from"./Select.796a8897.js";import{u as Xe}from"./use-merged-state.f4208c24.js";function Qe(e){return n=>{n?e.value=n.$el:e.value=null}}function Ye(e,n,i){if(!n)return e;const t=_(e.value);let r=null;return de(e,o=>{r!==null&&window.clearTimeout(r),o===!0?i&&!i.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},n):t.value=!1}),t}function en(e={},n){const i=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,o=l=>{switch(l.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}t!==void 0&&Object.keys(t).forEach(w=>{if(w!==l.key)return;const m=t[w];if(typeof m=="function")m(l);else{const{stop:k=!1,prevent:R=!1}=m;k&&l.stopPropagation(),R&&l.preventDefault(),m.handler(l)}})},a=l=>{switch(l.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(w=>{if(w!==l.key)return;const m=r[w];if(typeof m=="function")m(l);else{const{stop:k=!1,prevent:R=!1}=m;k&&l.stopPropagation(),R&&l.preventDefault(),m.handler(l)}})},p=()=>{(n===void 0||n.value)&&(J("keydown",document,o),J("keyup",document,a)),n!==void 0&&de(n,l=>{l?(J("keydown",document,o),J("keyup",document,a)):(Z("keydown",document,o),Z("keyup",document,a))})};return Ie()?(Ke(p),$e(()=>{(n===void 0||n.value)&&(Z("keydown",document,o),Z("keyup",document,a))})):p(),Te(i)}const nn=K({name:"ChevronRight",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),on=Object.assign(Object.assign({},ue),M.props),tn=K({name:"Tooltip",props:on,__popover__:!0,setup(e){const n=M("Tooltip","-tooltip",void 0,je,e),i=_(null);return Object.assign(Object.assign({},{syncPosition(){i.value.syncPosition()},setShow(r){i.value.setShow(r)}}),{popoverRef:i,mergedTheme:n,popoverThemeOverrides:b(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return s(ye,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),rn=N("ellipsis",{overflow:"hidden"},[le("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),P("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),P("cursor-pointer",`
 cursor: pointer;
 `)]);function he(e){return`${e}-ellipsis--line-clamp`}function ve(e,n){return`${e}-ellipsis--cursor-${n}`}const ln=Object.assign(Object.assign({},M.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),Rn=K({name:"Ellipsis",inheritAttrs:!1,props:ln,setup(e,{slots:n,attrs:i}){const{mergedClsPrefixRef:t}=ae(e),r=M("Ellipsis","-ellipsis",rn,ze,e,t),o=_(null),a=_(null),p=_(null),l=_(!1),w=b(()=>{const{lineClamp:d}=e,{value:h}=l;return d!==void 0?{textOverflow:"","-webkit-line-clamp":h?"":d}:{textOverflow:h?"":"ellipsis","-webkit-line-clamp":""}});function m(){let d=!1;const{value:h}=l;if(h)return!0;const{value:y}=o;if(y){const{lineClamp:T}=e;if(O(y),T!==void 0)d=y.scrollHeight<=y.offsetHeight;else{const{value:D}=a;D&&(d=D.getBoundingClientRect().width<=y.getBoundingClientRect().width)}$(y,d)}return d}const k=b(()=>e.expandTrigger==="click"?()=>{var d;const{value:h}=l;h&&((d=p.value)===null||d===void 0||d.setShow(!1)),l.value=!h}:void 0),R=()=>s("span",Object.assign({},Y(i,{class:[`${t.value}-ellipsis`,e.lineClamp!==void 0?he(t.value):void 0,e.expandTrigger==="click"?ve(t.value,"pointer"):void 0],style:w.value}),{ref:"triggerRef",onClick:k.value,onMouseenter:e.expandTrigger==="click"?m:void 0}),e.lineClamp?n:s("span",{ref:"triggerInnerRef"},n));function O(d){if(!d)return;const h=w.value,y=he(t.value);e.lineClamp!==void 0?I(d,y,"add"):I(d,y,"remove");for(const T in h)d.style[T]!==h[T]&&(d.style[T]=h[T])}function $(d,h){const y=ve(t.value,"pointer");e.expandTrigger==="click"&&!h?I(d,y,"add"):I(d,y,"remove")}function I(d,h,y){y==="add"?d.classList.contains(h)||d.classList.add(h):d.classList.contains(h)&&d.classList.remove(h)}return{mergedTheme:r,triggerRef:o,triggerInnerRef:a,tooltipRef:p,handleClick:k,renderTrigger:R,getTooltipDisabled:m}},render(){var e;const{tooltip:n,renderTrigger:i,$slots:t}=this;if(n){const{mergedTheme:r}=this;return s(tn,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:i,default:(e=t.tooltip)!==null&&e!==void 0?e:t.default})}else return i()}}),xe=K({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),sn=N("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[P("color-transition",{transition:"color .3s var(--n-bezier)"}),P("depth",{color:"var(--n-color)"},[L("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),L("svg",{height:"1em",width:"1em"})]),dn=Object.assign(Object.assign({},M.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),an=K({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:dn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=ae(e),t=M("Icon","-icon",sn,De,e,n),r=b(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:p},self:l}=t.value;if(a!==void 0){const{color:w,[`opacity${a}Depth`]:m}=l;return{"--n-bezier":p,"--n-color":w,"--n-opacity":m}}return{"--n-bezier":p,"--n-color":"","--n-opacity":""}}),o=i?be("icon",b(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:b(()=>{const{size:a,color:p}=e;return{fontSize:Ze(a),color:p}}),cssVars:i?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:i,mergedClsPrefix:t,component:r,onRender:o,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&ge("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),s("i",Y(this.$attrs,{role:"img",class:[`${t}-icon`,a,{[`${t}-icon--depth`]:i,[`${t}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?s(r):this.$slots)}}),pe=ce("n-dropdown-menu"),ee=ce("n-dropdown"),me=ce("n-dropdown-option");function se(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function cn(e){return e.type==="group"}function Se(e){return e.type==="divider"}function un(e){return e.type==="render"}const ke=K({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=U(ee),{hoverKeyRef:i,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:a,animatedRef:p,mergedShowRef:l,renderLabelRef:w,renderIconRef:m,labelFieldRef:k,childrenFieldRef:R,renderOptionRef:O,nodePropsRef:$,menuPropsRef:I}=n,d=U(me,null),h=U(pe),y=U(we),T=b(()=>e.tmNode.rawNode),D=b(()=>{const{value:u}=R;return se(e.tmNode.rawNode,u)}),ne=b(()=>{const{disabled:u}=e.tmNode;return u}),oe=b(()=>{if(!D.value)return!1;const{key:u,disabled:S}=e.tmNode;if(S)return!1;const{value:j}=i,{value:F}=t,{value:re}=r,{value:E}=o;return j!==null?E.includes(u):F!==null?E.includes(u)&&E[E.length-1]!==u:re!==null?E.includes(u):!1}),te=b(()=>t.value===null&&!p.value),W=Ye(oe,300,te),V=b(()=>!!(d!=null&&d.enteringSubmenuRef.value)),q=_(!1);G(me,{enteringSubmenuRef:q});function A(){q.value=!0}function c(){q.value=!1}function x(){const{parentKey:u,tmNode:S}=e;S.disabled||!l.value||(r.value=u,t.value=null,i.value=S.key)}function v(){const{tmNode:u}=e;u.disabled||!l.value||i.value!==u.key&&x()}function f(u){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:S}=u;S&&!fe({target:S},"dropdownOption")&&!fe({target:S},"scrollbarRail")&&(i.value=null)}function C(){const{value:u}=D,{tmNode:S}=e;!l.value||!u&&!S.disabled&&(n.doSelect(S.key,S.rawNode),n.doUpdateShow(!1))}return{labelField:k,renderLabel:w,renderIcon:m,siblingHasIcon:h.showIconRef,siblingHasSubmenu:h.hasSubmenuRef,menuProps:I,popoverBody:y,animated:p,mergedShowSubmenu:b(()=>W.value&&!V.value),rawNode:T,hasSubmenu:D,pending:X(()=>{const{value:u}=o,{key:S}=e.tmNode;return u.includes(S)}),childActive:X(()=>{const{value:u}=a,{key:S}=e.tmNode,j=u.findIndex(F=>S===F);return j===-1?!1:j<u.length-1}),active:X(()=>{const{value:u}=a,{key:S}=e.tmNode,j=u.findIndex(F=>S===F);return j===-1?!1:j===u.length-1}),mergedDisabled:ne,renderOption:O,nodeProps:$,handleClick:C,handleMouseMove:v,handleMouseEnter:x,handleMouseLeave:f,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:c}},render(){var e,n;const{animated:i,rawNode:t,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:a,siblingHasSubmenu:p,renderLabel:l,renderIcon:w,renderOption:m,nodeProps:k,props:R,scrollable:O}=this;let $=null;if(r){const y=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);$=s(Re,Object.assign({},y,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const I={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},d=k==null?void 0:k(t),h=s("div",Object.assign({class:[`${o}-dropdown-option`,d==null?void 0:d.class],"data-dropdown-option":!0},d),s("div",Y(I,R),[s("div",{class:[`${o}-dropdown-option-body__prefix`,a&&`${o}-dropdown-option-body__prefix--show-icon`]},[w?w(t):Q(t.icon)]),s("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},l?l(t):Q((n=t[this.labelField])!==null&&n!==void 0?n:t.title)),s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,p&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(an,null,{default:()=>s(nn,null)}):null)]),this.hasSubmenu?s(Ve,null,{default:()=>[s(qe,null,{default:()=>s("div",{class:`${o}-dropdown-offset-container`},s(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:O&&this.popoverBody||void 0,teleportDisabled:!O},{default:()=>s("div",{class:`${o}-dropdown-menu-wrapper`},i?s(Ae,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>$}):$)}))})]}):null);return m?m({node:h,option:t}):h}}),pn=K({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=U(pe),{renderLabelRef:i,labelFieldRef:t,nodePropsRef:r,renderOptionRef:o}=U(ee);return{labelField:t,showIcon:e,hasSubmenu:n,renderLabel:i,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:i,showIcon:t,nodeProps:r,renderLabel:o,renderOption:a}=this,{rawNode:p}=this.tmNode,l=s("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(p)),s("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,t&&`${n}-dropdown-option-body__prefix--show-icon`]},Q(p.icon)),s("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(p):Q((e=p.title)!==null&&e!==void 0?e:p[this.labelField])),s("div",{class:[`${n}-dropdown-option-body__suffix`,i&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:p}):l}}),fn=K({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:t}=e;return s(Be,null,s(pn,{clsPrefix:i,tmNode:e,key:e.key}),t==null?void 0:t.map(r=>{const{rawNode:o}=r;return o.show===!1?null:Se(o)?s(xe,{clsPrefix:i,key:r.key}):r.isGroup?(ge("dropdown","`group` node is not allowed to be put in `group` node."),null):s(ke,{clsPrefix:i,tmNode:r,parentKey:n,key:r.key})}))}}),hn=K({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return s("div",n,[e==null?void 0:e()])}}),Re=K({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:i}=U(ee);G(pe,{showIconRef:b(()=>{const r=n.value;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:p}=o;return r?r(p):p.icon})}),hasSubmenuRef:b(()=>{const{value:r}=i;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>se(l,r));const{rawNode:p}=o;return se(p,r)})})});const t=_(null);return G(Le,null),G(Me,null),G(we,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:n,scrollable:i}=this,t=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:un(o)?s(hn,{tmNode:r,key:r.key}):Se(o)?s(xe,{clsPrefix:n,key:r.key}):cn(o)?s(fn,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):s(ke,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:i})});return s("div",{class:[`${n}-dropdown-menu`,i&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Fe,{contentClass:`${n}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?We({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),vn=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ee(),N("dropdown-option",`
 position: relative;
 `,[L("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[L("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[P("pending",`
 color: var(--n-option-text-color-hover);
 `,[B("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),P("active",`
 color: var(--n-option-text-color-active);
 `,[B("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),P("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[B("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),P("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),P("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[B("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[P("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),B("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[P("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),B("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),B("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[P("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),P("scrollable",[B("content",`
 padding: var(--n-padding);
 `)])]),mn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},bn=Object.keys(ue),gn=Object.assign(Object.assign(Object.assign({},ue),mn),M.props),Pn=K({name:"Dropdown",inheritAttrs:!1,props:gn,setup(e){const n=_(!1),i=Xe(z(e,"show"),n),t=b(()=>{const{keyField:c,childrenField:x}=e;return Je(e.options,{getKey(v){return v[c]},getDisabled(v){return v.disabled===!0},getIgnored(v){return v.type==="divider"||v.type==="render"},getChildren(v){return v[x]}})}),r=b(()=>t.value.treeNodes),o=_(null),a=_(null),p=_(null),l=b(()=>{var c,x,v;return(v=(x=(c=o.value)!==null&&c!==void 0?c:a.value)!==null&&x!==void 0?x:p.value)!==null&&v!==void 0?v:null}),w=b(()=>t.value.getPath(l.value).keyPath),m=b(()=>t.value.getPath(e.value).keyPath),k=X(()=>e.keyboard&&i.value);en({keydown:{ArrowUp:{prevent:!0,handler:ne},ArrowRight:{prevent:!0,handler:D},ArrowDown:{prevent:!0,handler:oe},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:te},Escape:y}},k);const{mergedClsPrefixRef:R,inlineThemeDisabled:O}=ae(e),$=M("Dropdown","-dropdown",vn,He,e,R);G(ee,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:a,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:w,activeKeyPathRef:m,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:I,doUpdateShow:d}),de(i,c=>{!e.animated&&!c&&h()});function I(c,x){const{onSelect:v}=e;v&&ie(v,c,x)}function d(c){const{"onUpdate:show":x,onUpdateShow:v}=e;x&&ie(x,c),v&&ie(v,c),n.value=c}function h(){o.value=null,a.value=null,p.value=null}function y(){d(!1)}function T(){V("left")}function D(){V("right")}function ne(){V("up")}function oe(){V("down")}function te(){const c=W();(c==null?void 0:c.isLeaf)&&i.value&&(I(c.key,c.rawNode),d(!1))}function W(){var c;const{value:x}=t,{value:v}=l;return!x||v===null?null:(c=x.getNode(v))!==null&&c!==void 0?c:null}function V(c){const{value:x}=l,{value:{getFirstAvailableNode:v}}=t;let f=null;if(x===null){const C=v();C!==null&&(f=C.key)}else{const C=W();if(C){let u;switch(c){case"down":u=C.getNext();break;case"up":u=C.getPrev();break;case"right":u=C.getChild();break;case"left":u=C.getParent();break}u&&(f=u.key)}}f!==null&&(o.value=null,a.value=f)}const q=b(()=>{const{size:c,inverted:x}=e,{common:{cubicBezierEaseInOut:v},self:f}=$.value,{padding:C,dividerColor:u,borderRadius:S,optionOpacityDisabled:j,[H("optionIconSuffixWidth",c)]:F,[H("optionSuffixWidth",c)]:re,[H("optionIconPrefixWidth",c)]:E,[H("optionPrefixWidth",c)]:Pe,[H("fontSize",c)]:Ce,[H("optionHeight",c)]:Ne,[H("optionIconSize",c)]:_e}=f,g={"--n-bezier":v,"--n-font-size":Ce,"--n-padding":C,"--n-border-radius":S,"--n-option-height":Ne,"--n-option-prefix-width":Pe,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":re,"--n-option-icon-suffix-width":F,"--n-option-icon-size":_e,"--n-divider-color":u,"--n-option-opacity-disabled":j};return x?(g["--n-color"]=f.colorInverted,g["--n-option-color-hover"]=f.optionColorHoverInverted,g["--n-option-color-active"]=f.optionColorActiveInverted,g["--n-option-text-color"]=f.optionTextColorInverted,g["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,g["--n-option-text-color-active"]=f.optionTextColorActiveInverted,g["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,g["--n-prefix-color"]=f.prefixColorInverted,g["--n-suffix-color"]=f.suffixColorInverted,g["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(g["--n-color"]=f.color,g["--n-option-color-hover"]=f.optionColorHover,g["--n-option-color-active"]=f.optionColorActive,g["--n-option-text-color"]=f.optionTextColor,g["--n-option-text-color-hover"]=f.optionTextColorHover,g["--n-option-text-color-active"]=f.optionTextColorActive,g["--n-option-text-color-child-active"]=f.optionTextColorChildActive,g["--n-prefix-color"]=f.prefixColor,g["--n-suffix-color"]=f.suffixColor,g["--n-group-header-text-color"]=f.groupHeaderTextColor),g}),A=O?be("dropdown",b(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:R,mergedTheme:$,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{!e.animated||h()},doUpdateShow:d,cssVars:O?void 0:q,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(t,r,o,a,p)=>{var l;const{mergedClsPrefix:w,menuProps:m}=this;(l=this.onRender)===null||l===void 0||l.call(this);const k=(m==null?void 0:m(void 0,this.tmNodes.map(O=>O.rawNode)))||{},R={ref:Qe(r),class:[t,`${w}-dropdown`,this.themeClass],clsPrefix:w,tmNodes:this.tmNodes,style:[o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:p};return s(Re,Y(this.$attrs,R,k))},{mergedTheme:n}=this,i={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(ye,Object.assign({},Ue(this.$props,bn),i),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{nn as C,Pn as _,tn as a,Rn as b,Qe as c};

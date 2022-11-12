import{z as $,aP as v,C as d,B as c,d as h,I as w,K as g,bA as C,c as x,O as k,s as _,F as M,o as l,a as u,aZ as s,b as f,u as z}from"./index.4c52ef28.js";const y=$("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[v("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[v("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),c("title-position-left",[d("line",[c("left",{width:"28px"})])]),c("title-position-right",[d("line",[c("right",{width:"28px"})])]),c("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),c("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),v("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),c("dashed",[d("line",{borderColor:"var(--n-color)"})]),c("vertical",{backgroundColor:"var(--n-color)"})]),B=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),o1=h({name:"Divider",props:B,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=w(e),o=g("Divider","-divider",y,C,e,n),r=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:m,textColor:p,fontWeight:b}}=o.value;return{"--n-bezier":t,"--n-color":m,"--n-text-color":p,"--n-font-weight":b}}),i=a?k("divider",void 0,r,e):void 0;return{mergedClsPrefix:n,cssVars:a?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:n,titlePlacement:a,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),_("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:o,[`${t}-divider--no-title`]:!n.default,[`${t}-divider--dashed`]:r,[`${t}-divider--title-position-${a}`]:n.default&&a}],style:i},o?null:_("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!o&&n.default?_(M,null,_("div",{class:`${t}-divider__title`},this.$slots),_("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),P={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},A=s("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),R=[A];function V(e,n){return l(),u("svg",P,R)}const D={name:"mdi-moon-waning-crescent",render:V},H={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},L=s("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),O=[L];function S(e,n){return l(),u("svg",H,O)}const E={name:"mdi-white-balance-sunny",render:S},T={class:"inline-block",width:"1em",height:"1em",viewBox:"0 0 158.88 158.88"},j=s("path",{d:"M0 158.86V1.1C0 .2.2 0 1.1 0h156.68c.9 0 1.1.2 1.1 1.1v156.68c0 .9-.2 1.1-1.1 1.1Q78.9 158.83 0 158.86z",fill:"#ffffff00"},null,-1),F=s("path",{d:"M81.28 55.9c-.1-11.67-2.93-22.55-9.37-32.38-1-1.5-2.14-2.86-2.5-4.71a8.1 8.1 0 014-8.61 7.89 7.89 0 019.3 1.23 36 36 0 015.9 8.83 75.18 75.18 0 018.44 28.58 83.21 83.21 0 01-5.23 36.74 103 103 0 01-3 7.28 1.2 1.2 0 000 1.41c9.58 13.3 21.76 23 37.85 27.24a54.35 54.35 0 0019.68 1.57 7.72 7.72 0 018.36 6.9 7.9 7.9 0 01-6.7 9 64.74 64.74 0 01-23-1.33 77.68 77.68 0 01-36.93-19.88 93.64 93.64 0 01-11.91-13.71 2.18 2.18 0 00-2.3-1.06 72.75 72.75 0 00-27.38 7.55c-11.6 6-20.67 14.58-26.4 26.45a10.13 10.13 0 01-3.7 4.7 8 8 0 01-9.19-.7 7.86 7.86 0 01-2.36-9.28 60.32 60.32 0 018.72-14.52c12.2-15.43 28.21-24.59 47.32-28.57A85.08 85.08 0 0173.07 87a1.22 1.22 0 001.18-.8 76.06 76.06 0 006.53-22.3 57.87 57.87 0 00.5-8z",fill:"currentColor"},null,-1),I=s("path",{d:"M136.26 108.34a44.72 44.72 0 01-11.13-2.87 46.11 46.11 0 01-19.66-13.76 8 8 0 015.72-13.22 7.93 7.93 0 016.54 2.93 33.27 33.27 0 0018.87 10.75 14.76 14.76 0 014.48 1.18 8.08 8.08 0 013.84 9.21c-.92 3.52-4.13 5.81-8.66 5.78zM55.66 33.32a7.61 7.61 0 016.64 5 49.14 49.14 0 013.64 17 46.33 46.33 0 01-2.46 17.28c-2 5.77-8.24 7.79-12.89 4.15a8.1 8.1 0 01-2.39-9 31.68 31.68 0 001.68-12.36 35.77 35.77 0 00-2.43-11c-2.1-5.45 1.75-11.07 8.21-11.07zM77.92 126.57a8 8 0 01-6.68 7.86 32.88 32.88 0 00-19.7 12.19 8.13 8.13 0 01-11.21 1.62 8 8 0 01-1.41-11.58A51.05 51.05 0 0154 123.81a45.85 45.85 0 0114-5.1c5.35-1.04 9.91 2.56 9.92 7.86z",fill:"currentColor"},null,-1),N=[j,F,I];function Q(e,n){return l(),u("svg",T,N)}const Z={name:"local-logo",render:Q},K={class:"inline-block",width:"1em",height:"1em",viewBox:"0 0 158.88 158.88"},W=s("path",{d:"M158.86.3v157.48c0 .9-.2 1.1-1.1 1.1H.24a2.61 2.61 0 01-.11-1.3V1.67C.14 0 0 .18 1.61.18h156a2.62 2.62 0 011.25.12z",fill:"currentColor"},null,-1),q=s("path",{d:"M158.86.3H2C0 .31.27 0 .27 2v156.85c-.07-.05-.25.12-.24-.12s0-.64 0-1Q0 79.46 0 1.14C0 .24.2 0 1.1 0h156.68c.35.08.81-.2 1.08.3z",fill:"#fff"},null,-1),G=s("path",{d:"M93.65 51.52a68.65 68.65 0 01-6.47 28.81 1.72 1.72 0 00.19 2c6.08 8.28 13.58 14.79 23.19 18.69a46.22 46.22 0 0017.15 3.39 28.87 28.87 0 003.34-.25 6.2 6.2 0 017 5.12 6.07 6.07 0 01-5.15 7.14 50.39 50.39 0 01-18.06-1c-15.85-3.66-28-12.75-37.44-25.7a2.15 2.15 0 00-2.23-1.09c-14 1.37-26.17 6.43-35.5 17.21a38.47 38.47 0 00-6.23 9.74 6.21 6.21 0 01-8.17 3.42 6.14 6.14 0 01-3.27-8.2 49.31 49.31 0 019.63-14.62c10.56-11.44 23.8-17.54 39.09-19.54a13.93 13.93 0 012.84-.34c1.61.14 2.18-.73 2.73-2A54.38 54.38 0 0081.12 51a44 44 0 00-8-25 6.11 6.11 0 01-.65-6.46A6 6 0 0177.75 16a6.34 6.34 0 015.66 3 53.61 53.61 0 017.17 14.28 59.33 59.33 0 013.07 18.24z",fill:"#fff"},null,-1),J=s("path",{d:"M46.92 118.63a6 6 0 011.35-3.88 37.89 37.89 0 0122.5-14 6.08 6.08 0 016.65 2.47 6.18 6.18 0 01-3.84 9.63 26.09 26.09 0 00-15.71 9.77 6.2 6.2 0 01-10.95-4zM124.3 92.8a34.66 34.66 0 01-9.82-2.48 35.46 35.46 0 01-14.65-10.45 6.19 6.19 0 012.84-9.93 5.79 5.79 0 016.44 1.73 26.79 26.79 0 0016.51 8.85 6 6 0 015 5.54 6.21 6.21 0 01-4.29 6.46 6.55 6.55 0 01-2.03.28zM69.32 53.27a33.46 33.46 0 01-2.27 12.52 6.21 6.21 0 01-10.94 1 6.09 6.09 0 01-.65-5.4 26 26 0 00-.53-18.25 6.21 6.21 0 0111.49-4.72 40.24 40.24 0 012.9 14.85z",fill:"#fff"},null,-1),U=[W,q,G,J];function X(e,n){return l(),u("svg",K,U)}const Y={name:"local-logo-fill",render:X},e1=h({name:"SystemLogo"}),i1=h({...e1,props:{fill:{type:Boolean,default:!1}},setup(e){return(n,a)=>{const o=Y,r=Z;return e.fill?(l(),f(o,{key:0})):(l(),f(r,{key:1}))}}}),n1=h({name:"DarkModeSwitch"}),l1=h({...n1,props:{dark:{type:Boolean,default:!1}},emits:["update:dark"],setup(e,{emit:n}){const a=e,o=x({get(){return a.dark},set(i){n("update:dark",i)}});function r(){o.value=!o.value}return(i,t)=>{const m=D,p=E;return l(),u("div",{class:"flex-center text-18px cursor-pointer",onClick:r},[z(o)?(l(),f(m,{key:0})):(l(),f(p,{key:1}))])}}});export{o1 as _,E as a,D as b,i1 as c,l1 as d};

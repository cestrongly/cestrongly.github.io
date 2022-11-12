import{bF as B,a8 as C,d as G,I as R,K as v,a4 as j,c as E,M as I,bG as M,aU as x,bH as _,s as b}from"./index.4c52ef28.js";function L(e,a="default",i=[]){const s=e.$slots[a];return s===void 0?i:s()}const P=()=>B,T={name:"Space",self:P},A=T;let h;const F=()=>{if(!C)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},H=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),U=G({name:"Space",props:H,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:i}=R(e),n=v("Space","-space",void 0,A,e,a),s=j("Space",i,a);return{useGap:F(),rtlEnabled:s,mergedClsPrefix:a,margin:E(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[I("gap",t)]:g}}=n.value,{row:c,col:d}=M(g);return{horizontal:x(d),vertical:x(c)}})}},render(){const{vertical:e,align:a,inline:i,justify:n,itemStyle:s,margin:t,wrap:g,mergedClsPrefix:c,rtlEnabled:d,useGap:l,wrapItem:w,internalUseGap:S}=this,u=_(L(this));if(!u.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,o=`${t.vertical/2}px`,p=u.length-1,f=n.startsWith("space-");return b("div",{role:"none",class:[`${c}-space`,d&&`${c}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!g||e?"nowrap":"wrap",marginTop:l||e?"":`-${o}`,marginBottom:l||e?"":`-${o}`,alignItems:a,gap:l?`${t.vertical}px ${t.horizontal}px`:""}},!w&&(l||S)?u:u.map((z,r)=>b("div",{role:"none",style:[s,{maxWidth:"100%"},l?"":e?{marginBottom:r!==p?$:""}:d?{marginLeft:f?n==="space-between"&&r===p?"":m:r!==p?y:"",marginRight:f?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:f?n==="space-between"&&r===p?"":m:r!==p?y:"",marginLeft:f?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}]},z)))}});export{U as _,L as g};

import{_ as L}from"./LoadingEmptyWrapper.vue_vue_type_script_setup_true_lang.5b191218.js";import{l as g,d as N,g as E,Q as b,o as w,a as A,f as e,w as o,u as a,at as u,b0 as m,cL as B}from"./index.4c52ef28.js";import{N as S}from"./Popconfirm.167c1862.js";import{_ as T}from"./DataTable.e5a88965.js";import{_ as d}from"./Space.590bc452.js";import"./use-compitable.1c009e8c.js";import"./Popover.83ecbb3c.js";import"./Suffix.f0ab9e0a.js";import"./get.d26f3b42.js";import"./format-length.da8c4c56.js";import"./cssr.f6485797.js";import"./use-merged-state.f4208c24.js";import"./next-frame-once.e5ee25e8.js";import"./Checkbox.7f3809f8.js";import"./Dropdown.7495c592.js";import"./Select.796a8897.js";import"./Tag.6ecd6ced.js";import"./Input.7a3b8143.js";function D(i,t=0){const n=i-t;return Math.floor(Math.random()*n+t)}function F(i=!1,t=!1){const{bool:n,setTrue:r,setFalse:c}=g(i),{bool:s,setBool:p}=g(t);return{loading:n,startLoading:r,endLoading:c,empty:s,setEmpty:p}}const Y=N({__name:"index",setup(i){const{loading:t,startLoading:n,endLoading:r,empty:c,setEmpty:s}=F(),p=[{title:"Name",key:"name",align:"center"},{title:"Age",key:"age",align:"center"},{title:"Address",key:"address",align:"center"},{key:"action",title:"Action",align:"center",render:()=>e(d,{justify:"center"},{default:()=>[e(u,{size:"small",onClick:()=>{}},{default:()=>[m("\u7F16\u8F91")]}),e(S,{onPositiveClick:()=>{}},{default:()=>"\u786E\u8BA4\u5220\u9664",trigger:()=>e(u,{size:"small"},{default:()=>[m("\u5220\u9664")]})})]})}],l=E([]);function y(){return Array(100).fill(1).map((k,f)=>({name:`Name${f}`,age:D(30,20),address:"\u4E2D\u56FD"}))}function _(){n(),setTimeout(()=>{l.value=y(),r(),s(!l.value.length)},1e3)}function h(){n(),setTimeout(()=>{l.value=[],r(),s(!l.value.length)},1e3)}return b(()=>{_()}),(k,f)=>{const x=T,v=L,C=B;return w(),A("div",null,[e(C,{title:"\u8868\u683C",class:"h-full shadow-sm rounded-16px"},{default:o(()=>[e(a(d),{vertical:!0},{default:o(()=>[e(a(d),null,{default:o(()=>[e(a(u),{onClick:_},{default:o(()=>[m("\u6709\u6570\u636E")]),_:1}),e(a(u),{onClick:h},{default:o(()=>[m("\u7A7A\u6570\u636E")]),_:1})]),_:1}),e(v,{class:"h-480px",loading:a(t),empty:a(c)},{default:o(()=>[e(x,{columns:p,data:l.value,"flex-height":!0,class:"h-480px"},null,8,["data"])]),_:1},8,["loading","empty"])]),_:1})]),_:1})])}}});export{Y as default};

import{V as _,a as C,cc as v,v as y,fl as F,X as a,o as B,j as g,z as n,n as s,i as h,k as l,B as b,J as k}from"./index.051b8e6d.js";import{P as w}from"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./eagerComputed.2b892fda.js";import"./useWindowSizeFn.dbf4cc23.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./transButton.64b42905.js";const x=C({name:"Copy",components:{CollapseContainer:v,PageWrapper:w},setup(){const e=y(""),{createMessage:o}=k(),{clipboardRef:r,copiedRef:u}=F();function p(){const t=l(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,l(u)&&o.warning("copy success\uFF01")}return{handleCopy:p,value:e}}}),P={class:"flex justify-center"},V=b(" Copy ");function $(e,o,r,u,p,t){const i=a("a-input"),c=a("a-button"),d=a("CollapseContainer"),m=a("PageWrapper");return B(),g(m,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(d,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",P,[s(i,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[V]),_:1},8,["onClick"])])]),_:1})]),_:1})}var J=_(x,[["render",$]]);export{J as default};

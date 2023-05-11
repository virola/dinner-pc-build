import{V as F,a as y,X as t,o as E,j as A,z as i,n as r,B as u}from"./index.919817c1.js";import{A as R}from"./index.56b6489d.js";import{u as p}from"./index.40997eb9.js";import k from"./Drawer1.78d7794b.js";import B from"./Drawer2.31d7324d.js";import $ from"./Drawer3.61fca702.js";import h from"./Drawer4.dba17002.js";import v from"./Drawer5.15c66e25.js";import{P}from"./index.e4b3259e.js";import"./index.71d734b7.js";import"./ArrowLeftOutlined.d95f742b.js";import"./BasicForm.715a36c3.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./DeleteOutlined.377bc287.js";import"./transButton.d6060a92.js";import"./index.22841bd0.js";import"./index.19afb89b.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./useRefs.f28a0bf3.js";import"./index.7d7196b9.js";import"./uuid.2b29000c.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";import"./index.3df1d9ef.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";import"./useForm.c8dadad1.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./useContentViewHeight.28236eba.js";import"./index.2ed53404.js";const V=y({components:{Alert:R,PageWrapper:P,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:h,Drawer5:v},setup(){const[e,{openDrawer:o,setDrawerProps:a}]=p(),[g,{openDrawer:f}]=p(),[d,{openDrawer:n}]=p(),[s,{openDrawer:m}]=p(),[w,{openDrawer:D}]=p();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),a({loading:!0}),setTimeout(()=>{a({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:s,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}}),W=u(" \u6253\u5F00Drawer "),b=u(" \u6253\u5F00Drawer "),L=u(" \u6253\u5F00Drawer "),N=u(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E "),T=u(" \u6253\u5F00\u8BE6\u60C5Drawer ");function j(e,o,a,g,f,d){const n=t("Alert"),s=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),C=t("PageWrapper");return E(),A(C,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:i(()=>[r(n,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(s,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:i(()=>[W]),_:1},8,["onClick"]),r(n,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(s,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=_=>e.openDrawer2(!0))},{default:i(()=>[b]),_:1}),r(n,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(s,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=_=>e.openDrawer3(!0))},{default:i(()=>[L]),_:1}),r(n,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(s,{type:"primary",class:"my-4",onClick:e.send},{default:i(()=>[N]),_:1},8,["onClick"]),r(n,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(s,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=_=>e.openDrawer5(!0))},{default:i(()=>[T]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var Rr=F(V,[["render",j]]);export{Rr as default};

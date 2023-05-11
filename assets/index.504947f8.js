var F=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))I.call(t,o)&&b(e,o,t[o]);if(D)for(var o of D(t))E.call(t,o)&&b(e,o,t[o]);return e},k=(e,t)=>A(e,C(t));import{V,a as L,I as f,w as O,fr as N,N as S,f as h,f3 as x,az as P,X as r,o as g,j as W,z as u,i as s,n as l,B as c,t as d,h as w,$,H as z}from"./index.051b8e6d.js";import{T as M}from"./index.9cd125ba.js";import{P as R}from"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./eagerComputed.2b892fda.js";import"./useWindowSizeFn.dbf4cc23.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./transButton.64b42905.js";const U=L({components:{PageWrapper:R,[f.name]:f,InputTextArea:f.TextArea,Tag:M},setup(){const e=O({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:o,send:v,close:T,open:B}=N(e.server,{autoReconnect:!1,heartbeat:!0});S(()=>{if(o.value)try{const a=JSON.parse(o.value);e.recordList.push(a)}catch(a){e.recordList.push({res:o.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=h(()=>t.value==="OPEN"),p=h(()=>n.value?"success":"red"),i=h(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?T():B()}return k(y({status:t,formatToDateTime:x},P(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),j={class:"flex"},H={class:"w-1/3 bg-white p-4"},J={class:"flex items-center"},X=s("span",{class:"text-lg font-medium mr-4"}," \u8FDE\u63A5\u72B6\u6001: ",-1),q=s("hr",{class:"my-4"},null,-1),G={class:"flex"},K=c(" \u670D\u52A1\u5730\u5740 "),Q=s("p",{class:"text-lg font-medium mt-4"},"\u8BBE\u7F6E",-1),Y=s("hr",{class:"my-4"},null,-1),Z=c(" \u53D1\u9001 "),ee={class:"w-2/3 bg-white ml-4 p-4"},te=s("span",{class:"text-lg font-medium mr-4"}," \u6D88\u606F\u8BB0\u5F55: ",-1),se=s("hr",{class:"my-4"},null,-1),oe={class:"max-h-80 overflow-auto"},ae={class:"flex items-center"},ne=s("span",{class:"mr-2 text-primary font-medium"},"\u6536\u5230\u6D88\u606F:",-1);function re(e,t,o,v,T,B){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),_=r("PageWrapper");return g(),W(_,{title:"WebSocket \u793A\u4F8B"},{default:u(()=>[s("div",j,[s("div",H,[s("div",J,[X,l(n,{color:e.getTagColor},{default:u(()=>[c(d(e.status),1)]),_:1},8,["color"])]),q,s("div",G,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=a=>e.server=a),disabled:""},{addonBefore:u(()=>[K]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[c(d(e.getIsOpen?"\u5173\u95ED\u8FDE\u63A5":"\u5F00\u542F\u8FDE\u63A5"),1)]),_:1},8,["type","onClick"])]),Q,Y,l(m,{placeholder:"\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=a=>e.sendValue=a),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[Z]),_:1},8,["disabled","onClick"])]),s("div",ee,[te,se,s("div",oe,[s("ul",null,[(g(!0),w(z,null,$(e.getList,a=>(g(),w("li",{class:"mt-2",key:a.time},[s("div",ae,[ne,s("span",null,d(e.formatToDateTime(a.time)),1)]),s("div",null,d(a.res),1)]))),128))])])])])]),_:1})}var Te=V(U,[["render",re]]);export{Te as default};

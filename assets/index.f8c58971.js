import{B as c}from"./index.1226963b.js";import{V as l,a as d,X as e,o as f,j as g,z as B,n as r,J as F}from"./index.051b8e6d.js";import{B as _}from"./BasicForm.99673a00.js";import{u as A}from"./useForm.140b2a6b.js";import{P as C}from"./index.2b14c180.js";import{A as i}from"./index.3ee0c50a.js";import{u as s}from"./upload.4012e60b.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./index.869b6f14.js";import"./DeleteOutlined.37a665c8.js";import"./index.29220c51.js";import"./useRefs.30331c8d.js";import"./index.9cd125ba.js";import"./index.66663891.js";import"./uuid.2b29000c.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";import"./index.3ec80e2e.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./transButton.64b42905.js";import"./index.f028e9a2.js";import"./index.3ddd1a12.js";import"./uniqBy.6301f91d.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:s}}],E=d({components:{BasicUpload:c,BasicForm:_,PageWrapper:C,[i.name]:i},setup(){const{createMessage:o}=F(),[t]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:a=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(a)}`)},uploadApi:s,register:t}}});function P(o,t,a,$,x,U){const p=e("a-alert"),m=e("BasicUpload"),n=e("BasicForm"),u=e("PageWrapper");return f(),g(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:B(()=>[r(p,{message:"\u57FA\u7840\u793A\u4F8B"}),r(m,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),r(p,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),r(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var so=l(E,[["render",P]]);export{so as default};

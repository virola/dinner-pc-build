var l=(o,s,r)=>new Promise((c,i)=>{var d=e=>{try{a(r.next(e))}catch(u){i(u)}},t=e=>{try{a(r.throw(e))}catch(u){i(u)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,t);a((r=r.apply(o,s)).next())});import{V as C,a as g,cc as h,D as B,s as F,a8 as A,f as b,X as n,o as I,j as S,z as m,n as p,i as _,J as w,f0 as y,f1 as k,B as R}from"./index.051b8e6d.js";import{B as V}from"./BasicForm.99673a00.js";import{u as x}from"./useForm.140b2a6b.js";import{a as E}from"./index.a0887eea.js";import{h as U}from"./avatar.92235c98.js";import{a as $}from"./account.d11e928a.js";import{b as M}from"./data.a0e55b88.js";import{u as N}from"./upload.4012e60b.js";import{R as T,C as j}from"./index.3ddd1a12.js";import"./index.3ec80e2e.js";import"./index.9cd125ba.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./DeleteOutlined.37a665c8.js";import"./transButton.64b42905.js";import"./index.1226963b.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./index.869b6f14.js";import"./index.29220c51.js";import"./useRefs.30331c8d.js";import"./index.3ee0c50a.js";import"./index.66663891.js";import"./uuid.2b29000c.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";import"./index.f028e9a2.js";import"./uniqBy.6301f91d.js";import"./index.900b54f5.js";const z=g({components:{BasicForm:V,CollapseContainer:h,Button:B,ARow:T,ACol:j,CropperAvatar:E},setup(){const{createMessage:o}=w(),s=F(),[r,{setFieldsValue:c}]=x({labelWidth:120,schemas:M,showActionButtonGroup:!1});A(()=>l(this,null,function*(){const t=yield $();c(t)}));const i=b(()=>{const{avatar:t}=s.getUserInfo;return t||U});function d(t){const a=s.getUserInfo;a.avatar=t,s.setUserInfo(a)}return{avatar:i,register:r,uploadApi:N,updateAvatar:d,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),D=o=>(y("data-v-218f3392"),o=o(),k(),o),G={class:"change-avatar"},J=D(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1)),P=R(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");function W(o,s,r,c,i,d){const t=n("BasicForm"),a=n("a-col"),e=n("CropperAvatar"),u=n("a-row"),f=n("Button"),v=n("CollapseContainer");return I(),S(v,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:m(()=>[p(u,{gutter:24},{default:m(()=>[p(a,{span:14},{default:m(()=>[p(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(a,{span:10},{default:m(()=>[_("div",G,[J,p(e,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),p(f,{type:"primary",onClick:o.handleSubmit},{default:m(()=>[P]),_:1},8,["onClick"])]),_:1})}var wo=C(z,[["render",W],["__scopeId","data-v-218f3392"]]);export{wo as default};

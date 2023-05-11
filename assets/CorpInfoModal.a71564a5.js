var v=Object.defineProperty;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(r,e,o)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,g=(r,e)=>{for(var o in e||(e={}))C.call(e,o)&&f(r,o,e[o]);if(d)for(var o of d(e))b.call(e,o)&&f(r,o,e[o]);return r};var l=(r,e,o)=>new Promise((p,n)=>{var c=s=>{try{i(o.next(s))}catch(a){n(a)}},m=s=>{try{i(o.throw(s))}catch(a){n(a)}},i=s=>s.done?p(s.value):Promise.resolve(s.value).then(c,m);i((o=o.apply(r,e)).next())});import{B as k,b as w}from"./index.19afb89b.js";import{B as $}from"./BasicForm.715a36c3.js";import{u as I}from"./useForm.c8dadad1.js";import{a as R}from"./data.bfc3402e.js";import{a as y,v as F,k as u,f as E,V as L,X as B,o as O,j as P,z as S,n as U,Y as V}from"./index.919817c1.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./DeleteOutlined.377bc287.js";import"./transButton.d6060a92.js";import"./index.22841bd0.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./useRefs.f28a0bf3.js";import"./index.56b6489d.js";import"./index.7d7196b9.js";import"./uuid.2b29000c.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";import"./index.3df1d9ef.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";import"./util.7dfa7b10.js";import"./upload.c21f97a6.js";const T=y({name:"CorpInfoModal",components:{BasicModal:k,BasicForm:$},emits:["success","register"],setup(r,{emit:e}){const o=F(!0),p=F(""),[n,{setFieldsValue:c,resetFields:m,validate:i}]=I({labelWidth:180,baseColProps:{span:12},schemas:R,showActionButtonGroup:!1,actionColOptions:{span:23}}),[s,{setModalProps:a,closeModal:h}]=w(t=>l(this,null,function*(){m(),a({confirmLoading:!1}),o.value=!!(t!=null&&t.isUpdate),u(o)&&(p.value=t.record.id,c(g({},t.record)))})),M=E(()=>u(o)?"\u7F16\u8F91\u4FE1\u606F":"\u65B0\u589E\u4FE1\u606F");function _(){return l(this,null,function*(){try{const t=yield i();if(!t)return!1;a({confirmLoading:!0}),h(),e("success",{isUpdate:u(o),values:t})}catch(t){a({confirmLoading:!1})}})}return{registerModal:s,registerForm:n,getTitle:M,handleSubmit:_}}});function j(r,e,o,p,n,c){const m=B("BasicForm"),i=B("BasicModal");return O(),P(i,V(r.$attrs,{onRegister:r.registerModal,title:r.getTitle,width:800,onOk:r.handleSubmit}),{default:S(()=>[U(m,{onRegister:r.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Bo=L(T,[["render",j]]);export{Bo as default};

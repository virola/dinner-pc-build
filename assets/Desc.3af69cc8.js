import{a as T,E as U,V as $,X as n,o as a,h as r,H as u,$ as f,n as g,Z as N,z as p,a0 as S,j as d,B as V,t as h,l as m}from"./index.051b8e6d.js";/* empty css              */import{T as w}from"./index.9cd125ba.js";import{I as F}from"./index.66663891.js";import{a as L}from"./siteSetting.d59036a0.js";import{B as j}from"./index.1226963b.js";import{u as z}from"./upload.4012e60b.js";import{D as G,a as K}from"./index.3cba765b.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./index.869b6f14.js";import"./DeleteOutlined.37a665c8.js";import"./index.29220c51.js";import"./useRefs.30331c8d.js";import"./index.3ee0c50a.js";import"./uuid.2b29000c.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";const M=T({name:"Desc",components:{Divider:U,Descriptions:G,DescriptionsItem:K,Tag:w,Image:F,BasicUpload:j},props:{schema:{type:Array,default:()=>[]},data:{type:Object},deepData:{type:Boolean,default:!0}},setup(e){function _(s,i){}function D(s,i){const l=e.data||{};return e.deepData?l[i]&&l[i][s]||"":l[s]||""}return{DEFAULT_IMAGE:L,uploadApi:z,handleUploadChange:_,getData:D}}}),x={key:0},H={key:0},O={key:1};function X(e,_,D,s,i,l){const y=n("Tag"),k=n("Image"),v=n("BasicUpload"),b=n("DescriptionsItem"),B=n("Descriptions"),I=n("Divider");return a(),r("div",null,[(a(!0),r(u,null,f(e.schema,(o,C)=>(a(),r("div",{class:"!m-4",key:C},[g(B,{title:o.title,column:o.column||3,bordered:o.bordered},N({default:p(()=>[(a(!0),r(u,null,f(o.fields,(t,A)=>(a(),d(b,{key:A,label:t.label},{default:p(()=>[e.data?(a(),r("div",x,[t.render?(a(),r("div",H,[t.render=="tags"?(a(!0),r(u,{key:0},f(e.getData(t.field,o.dataKey),(c,E)=>(a(),d(y,{color:"success",key:E},{default:p(()=>[V(h(c),1)]),_:2},1024))),128)):m("",!0),t.render=="image"?(a(),d(k,{key:1,width:120,src:e.getData(t.field,o.dataKey),fallback:e.DEFAULT_IMAGE},null,8,["src","fallback"])):m("",!0),t.render=="upload"?(a(),d(v,{key:2,maxSize:20,maxNumber:1,onChange:c=>e.handleUploadChange(c,t),api:e.uploadApi,accept:["image/*"]},null,8,["onChange","api"])):m("",!0)])):(a(),r("div",O,h(e.getData(t.field,o.dataKey)),1))])):m("",!0)]),_:2},1032,["label"]))),128))]),_:2},[o.showExtra?{name:"extra",fn:p(()=>[S(e.$slots,"extra")])}:void 0]),1032,["title","column","bordered"]),g(I)]))),128))])}var me=$(M,[["render",X]]);export{me as default};

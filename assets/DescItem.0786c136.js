import{V as k,a as h,X as t,o,j as r,z as m,i as I,h as p,H as B,$ as _,B as b,t as d,l as s}from"./index.919817c1.js";import{T as y}from"./index.1215f001.js";import{I as C}from"./index.7d7196b9.js";import{a as D}from"./siteSetting.d59036a0.js";import{u as T}from"./upload.c21f97a6.js";import{B as U}from"./index.22841bd0.js";import{a as A}from"./index.9f9ea0be.js";import"./index.19afb89b.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./index.b59e4656.js";import"./DeleteOutlined.377bc287.js";import"./index.1fb10b07.js";import"./useRefs.f28a0bf3.js";import"./index.56b6489d.js";import"./uuid.2b29000c.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";const v=h({components:{DescriptionsItem:A,Tag:y,Image:C,BasicUpload:U},props:{desc:Object,data:Object},setup(){function e(a,i){}return{DEFAULT_IMAGE:D,uploadApi:T,handleUploadChange:e}}}),E={key:0},$={key:1};function N(e,a,i,V,j,F){const l=t("Tag"),c=t("Image"),u=t("BasicUpload"),f=t("DescriptionsItem");return e.desc?(o(),r(f,{key:0,label:e.desc.label},{default:m(()=>[I("div",null,[e.desc.render?(o(),p("div",E,[e.desc.render=="tags"?(o(!0),p(B,{key:0},_(e.data,(n,g)=>(o(),r(l,{color:"success",key:g},{default:m(()=>[b(d(n),1)]),_:2},1024))),128)):s("",!0),e.desc.render=="image"?(o(),r(c,{key:1,width:120,src:e.data,fallback:e.DEFAULT_IMAGE},null,8,["src","fallback"])):s("",!0),e.desc.render=="upload"?(o(),r(u,{key:2,maxSize:20,maxNumber:1,onChange:a[0]||(a[0]=n=>e.handleUploadChange(n,e.desc)),api:e.uploadApi,accept:["image/*"]},null,8,["api"])):s("",!0)])):(o(),p("div",$,d(e.data),1))])]),_:1},8,["label"])):s("",!0)}var x=k(v,[["render",N]]);export{x as default};

import{D as f}from"./index.e41b7ce2.js";import{B as _}from"./TableImg.dc13f2c9.js";import"./index.22841bd0.js";import{u as l}from"./useTable.c8870c0b.js";import{P as T}from"./index.e4b3259e.js";import{V as g,a as h,E as c,X as r,o as b,j as D,z as B,n as t}from"./index.919817c1.js";import{refundTableData as v,refundTableSchema as S,refundTimeTableSchema as y,refundTimeTableData as C,refundSchema as E,refundData as F,personSchema as R,personData as w}from"./data.0651dd8d.js";/* empty css              */import"./index.9f9ea0be.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./BasicForm.715a36c3.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./DeleteOutlined.377bc287.js";import"./transButton.d6060a92.js";import"./index.3df1d9ef.js";import"./useRefs.f28a0bf3.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";import"./index.19afb89b.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./useForm.c8dadad1.js";import"./uuid.2b29000c.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.642ec7d0.js";import"./index.7d7196b9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4a9a866c.js";import"./index.098ff7b1.js";import"./index.b047dea7.js";import"./index.56b6489d.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";const k=h({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:v,columns:S,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:p}),[n]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:y,pagination:!1,dataSource:C,showIndexColumn:!1,scroll:{y:300}});function p(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:n,refundSchema:E,refundData:F,personSchema:R,personData:w}}});function x(e,n,p,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return b(),D(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var Se=g(k,[["render",x],["__scopeId","data-v-33e8998f"]]);export{Se as default};

import{B as T}from"./TableImg.6806e059.js";import{T as B}from"./index.1226963b.js";import{u as F}from"./useTable.563ac532.js";import{getBasicColumns as _}from"./data.c7f1f912.js";import{a as k,ad as D,w as E,v as w,V as v,X as c,o as d,h as y,n as R,z as S,j as V,l as A}from"./index.051b8e6d.js";import{d as f}from"./table.59f67c33.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./BasicForm.99673a00.js";import"./index.3ec80e2e.js";import"./index.9cd125ba.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./DeleteOutlined.37a665c8.js";import"./transButton.64b42905.js";import"./index.f028e9a2.js";import"./useRefs.30331c8d.js";import"./index.3ddd1a12.js";import"./uniqBy.6301f91d.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./useForm.140b2a6b.js";import"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./uuid.2b29000c.js";import"./index.869b6f14.js";import"./index.29220c51.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3327e8b0.js";import"./index.66663891.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c66d7144.js";import"./index.3ee59996.js";import"./index.7873e13f.js";import"./index.3ee0c50a.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";const $=k({components:{BasicTable:T,TableAction:B},setup(){const e=D(),m=E({}),r=w({}),n=_(),[s,{getForm:p,reload:t,updateTableDataRecord:a}]=F({api:f,columns:n,useSearchForm:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!0,rowKey:"id",canResize:!1,actionColumn:{width:180,title:"\u64CD\u4F5C",dataIndex:"action"}});function l(o){e("/bus-const/recipeLib/detail?id="+o.id)}function i(o){}function b(o){t()}function g(){r.value=p().getFieldsValue()}function h({isUpdate:o,values:u}){if(o){const C=a(u.id,u)}else t()}return{registerTable:s,searchInfo:m,formQuery:r,demoListApi:f,tableColumns:n,getFormValues:g,reload:t,handleDetail:l,handleEdit:i,handleDelete:b,handleSuccess:h}}});function I(e,m,r,n,s,p){const t=c("TableAction"),a=c("BasicTable");return d(),y("div",null,[R(a,{onRegister:e.registerTable},{bodyCell:S(({column:l,record:i})=>[l.key==="action"?(d(),V(t,{key:0,actions:[{label:"\u8BE6\u60C5",onClick:e.handleDetail.bind(null,i)},{label:"\u7F16\u8F91",onClick:e.handleEdit.bind(null,i)},{label:"\u5220\u9664",color:"error",popConfirm:{title:"\u662F\u5426\u5220\u9664\u8BE5\u6570\u636E\uFF1F",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister"])])}var Eo=v($,[["render",I]]);export{Eo as default};

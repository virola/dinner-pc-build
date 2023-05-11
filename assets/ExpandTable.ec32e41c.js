import{B as d}from"./TableImg.dc13f2c9.js";import{T as F}from"./index.22841bd0.js";import{u as B}from"./useTable.c8870c0b.js";import{P as C}from"./index.e4b3259e.js";import{getBasicColumns as f}from"./tableData.0902c609.js";import{d as b}from"./table.cf784679.js";import{V as E,a as g,X as i,o as a,j as m,z as n,n as T,i as _,t as A,l as D}from"./index.919817c1.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./BasicForm.715a36c3.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./DeleteOutlined.377bc287.js";import"./transButton.d6060a92.js";import"./index.3df1d9ef.js";import"./useRefs.f28a0bf3.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";import"./index.19afb89b.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./useForm.c8dadad1.js";import"./uuid.2b29000c.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.642ec7d0.js";import"./index.7d7196b9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4a9a866c.js";import"./index.098ff7b1.js";import"./index.b047dea7.js";import"./index.56b6489d.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";const w=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function r(t){}function u(t){}return{registerTable:o,handleDelete:r,handleOpen:u}}});function h(o,r,u,t,k,x){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return a(),m(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:n(()=>[T(s,{onRegister:o.registerTable},{expandedRowRender:n(({record:e})=>[_("span",null,"No: "+A(e.no),1)]),bodyCell:n(({column:e,record:p})=>[e.key==="action"?(a(),m(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,p)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,p)}}]},null,8,["actions","dropDownActions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1})}var Eo=E(w,[["render",h]]);export{Eo as default};

import{B as n}from"./TableImg.dc13f2c9.js";import"./index.22841bd0.js";import{u as l}from"./useTable.c8870c0b.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.0902c609.js";import{V as _,a as b,X as s,o as f,h as C,n as t,z as e,B as a}from"./index.919817c1.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./BasicForm.715a36c3.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./DeleteOutlined.377bc287.js";import"./transButton.d6060a92.js";import"./index.3df1d9ef.js";import"./useRefs.f28a0bf3.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";import"./index.19afb89b.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./useForm.c8dadad1.js";import"./index.e4b3259e.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";import"./uuid.2b29000c.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.642ec7d0.js";import"./index.7d7196b9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4a9a866c.js";import"./index.098ff7b1.js";import"./index.b047dea7.js";import"./index.56b6489d.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";const T=b({components:{BasicTable:n},setup(){const[o,{expandAll:r,collapseAll:i}]=l({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:r,collapseAll:i}}}),B={class:"p-4"},g=a("\u5C55\u5F00\u5168\u90E8"),h=a("\u6298\u53E0\u5168\u90E8");function k(o,r,i,p,E,F){const m=s("a-button"),u=s("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:e(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:e(()=>[g]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:e(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var _o=_(T,[["render",k]]);export{_o as default};

import{B as m}from"./TableImg.6806e059.js";import{T as d}from"./index.1226963b.js";import{u as c}from"./useTable.563ac532.js";import{d as F}from"./table.59f67c33.js";import{V as h,a as b,X as a,o as r,h as f,n as B,z as A,j as C,l as w}from"./index.051b8e6d.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./BasicForm.99673a00.js";import"./index.3ec80e2e.js";import"./index.9cd125ba.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./DeleteOutlined.37a665c8.js";import"./transButton.64b42905.js";import"./index.f028e9a2.js";import"./useRefs.30331c8d.js";import"./index.3ddd1a12.js";import"./uniqBy.6301f91d.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./useForm.140b2a6b.js";import"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./uuid.2b29000c.js";import"./index.869b6f14.js";import"./index.29220c51.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3327e8b0.js";import"./index.66663891.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c66d7144.js";import"./index.3ee59996.js";import"./index.7873e13f.js";import"./index.3ee0c50a.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";const T=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",width:200,auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u72B6\u60011",dataIndex:"status1"},{title:"\u72B6\u60012",dataIndex:"status2"},{title:"\u72B6\u60013",dataIndex:"status3"},{title:"\u72B6\u60014",dataIndex:"status4"},{title:"\u72B6\u60015",dataIndex:"status5"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],I=b({components:{BasicTable:m,TableAction:d},setup(){const[t]=c({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:F,columns:T,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function u(o){}function i(o){}function n(o){}return{registerTable:t,handleEdit:u,handleDelete:i,handleOpen:n}}}),x={class:"p-4"};function _(t,u,i,n,o,E){const l=a("TableAction"),p=a("BasicTable");return r(),f("div",x,[B(p,{onRegister:t.registerTable},{bodyCell:A(({column:s,record:e})=>[s.key==="action"?(r(),C(l,{key:0,actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,e),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,e),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,e)},ifShow:g=>e.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,e)},ifShow:()=>e.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,e)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}var bt=h(I,[["render",_]]);export{bt as default};

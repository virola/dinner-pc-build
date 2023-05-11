import{B as S}from"./TableImg.6806e059.js";import{T as B}from"./index.1226963b.js";import{u as F}from"./useTable.563ac532.js";import{g as w}from"./system.24880ab0.js";import{P as D}from"./index.2b14c180.js";import A from"./DeptTree.be668ccc.js";import{u as y}from"./index.2268f048.js";import{A as k,c as I,s as M}from"./AccountModal.db49c331.js";import{V as E,a as V,ad as R,w as P,X as t,o as C,j as _,z as n,n as r,l as W,B as $}from"./index.051b8e6d.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./BasicForm.99673a00.js";import"./index.3ec80e2e.js";import"./index.9cd125ba.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./DeleteOutlined.37a665c8.js";import"./transButton.64b42905.js";import"./index.f028e9a2.js";import"./useRefs.30331c8d.js";import"./index.3ddd1a12.js";import"./uniqBy.6301f91d.js";import"./useForm.140b2a6b.js";import"./uuid.2b29000c.js";import"./index.869b6f14.js";import"./index.29220c51.js";import"./useWindowSizeFn.dbf4cc23.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3327e8b0.js";import"./FullscreenOutlined.6ce9a280.js";import"./index.66663891.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c66d7144.js";import"./index.3ee59996.js";import"./index.7873e13f.js";import"./index.3ee0c50a.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./index.81b0bb2d.js";import"./useContextMenu.3518034a.js";const N=V({name:"AccountManagement",components:{BasicTable:S,PageWrapper:D,DeptTree:A,AccountModal:k,TableAction:B},setup(){const o=R(),[h,{openModal:i}]=y(),a=P({}),[g,{reload:l,updateTableDataRecord:s}]=F({title:"\u8D26\u53F7\u5217\u8868",api:w,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function c(){i(!0,{isUpdate:!1})}function u(e){i(!0,{record:e,isUpdate:!0})}function p(e){}function m({isUpdate:e,values:b}){if(e){const T=s(b.id,b)}else l()}function d(e=""){a.deptId=e,l()}function f(e){o("/system/account_detail/"+e.id)}return{registerTable:g,registerModal:h,handleCreate:c,handleEdit:u,handleDelete:p,handleSuccess:m,handleSelect:d,handleView:f,searchInfo:a}}}),v=$("\u65B0\u589E\u8D26\u53F7");function x(o,h,i,a,g,l){const s=t("DeptTree"),c=t("a-button"),u=t("TableAction"),p=t("BasicTable"),m=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),r(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:n(()=>[r(c,{type:"primary",onClick:o.handleCreate},{default:n(()=>[v]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:e})=>[f.key==="action"?(C(),_(u,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:o.handleView.bind(null,e)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:o.handleEdit.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),r(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Ve=E(N,[["render",x]]);export{Ve as default};

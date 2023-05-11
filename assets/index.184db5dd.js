import{B as b}from"./TableImg.6806e059.js";import{T as C}from"./index.1226963b.js";import{u as g}from"./useTable.563ac532.js";import{f as _}from"./system.24880ab0.js";import{u as D}from"./index.74f5002c.js";import{R as T,c as w,s as B}from"./RoleDrawer.75614fbf.js";import{V as R,a as k,X as t,o as d,h as y,n as a,z as m,j as S,l as E,B as v}from"./index.051b8e6d.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./BasicForm.99673a00.js";import"./index.3ec80e2e.js";import"./index.9cd125ba.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./DeleteOutlined.37a665c8.js";import"./transButton.64b42905.js";import"./index.f028e9a2.js";import"./useRefs.30331c8d.js";import"./index.3ddd1a12.js";import"./uniqBy.6301f91d.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./useForm.140b2a6b.js";import"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./uuid.2b29000c.js";import"./index.869b6f14.js";import"./index.29220c51.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3327e8b0.js";import"./index.66663891.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c66d7144.js";import"./index.3ee59996.js";import"./index.7873e13f.js";import"./index.3ee0c50a.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";import"./index.6854e796.js";import"./index.81b0bb2d.js";import"./useContextMenu.3518034a.js";const A=k({name:"RoleManagement",components:{BasicTable:b,RoleDrawer:T,TableAction:C},setup(){const[e,{openDrawer:r}]=D(),[s,{reload:p}]=g({title:"\u89D2\u8272\u5217\u8868",api:_,columns:w,formConfig:{labelWidth:120,schemas:B},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(o){r(!0,{record:o,isUpdate:!0})}function i(o){}function n(){p()}return{registerTable:s,registerDrawer:e,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}}),F=v(" \u65B0\u589E\u89D2\u8272 ");function V(e,r,s,p,l,c){const i=t("a-button"),n=t("TableAction"),o=t("BasicTable"),f=t("RoleDrawer");return d(),y("div",null,[a(o,{onRegister:e.registerTable},{toolbar:m(()=>[a(i,{type:"primary",onClick:e.handleCreate},{default:m(()=>[F]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),S(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ye=R(A,[["render",V]]);export{ye as default};

var h=(e,a,o)=>new Promise((c,s)=>{var p=t=>{try{r(o.next(t))}catch(n){s(n)}},m=t=>{try{r(o.throw(t))}catch(n){s(n)}},r=t=>t.done?c(t.value):Promise.resolve(t.value).then(p,m);r((o=o.apply(e,a)).next())});import{V as C,a as T,X as u,o as b,h as g,n as d,z as f,j as _,l as w,eM as D,Q as S,B}from"./index.051b8e6d.js";import{B as k}from"./TableImg.6806e059.js";import{T as y}from"./index.1226963b.js";import{u as F}from"./useTable.563ac532.js";import{h as M}from"./system.24880ab0.js";import{u as A}from"./index.74f5002c.js";import{M as E,c as I,s as R}from"./MenuDrawer.b4f2e72a.js";import"./index.f9c0747d.js";import"./eagerComputed.2b892fda.js";import"./BasicForm.99673a00.js";import"./index.3ec80e2e.js";import"./index.9cd125ba.js";import"./index.91f19117.js";import"./index.d091d485.js";import"./index.0a3ccb18.js";import"./DeleteOutlined.37a665c8.js";import"./transButton.64b42905.js";import"./index.f028e9a2.js";import"./useRefs.30331c8d.js";import"./index.3ddd1a12.js";import"./uniqBy.6301f91d.js";import"./index.2268f048.js";import"./useWindowSizeFn.dbf4cc23.js";import"./FullscreenOutlined.6ce9a280.js";import"./useForm.140b2a6b.js";import"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./uuid.2b29000c.js";import"./index.869b6f14.js";import"./index.29220c51.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3327e8b0.js";import"./index.66663891.js";import"./fromPairs.84aabb58.js";import"./scrollTo.c66d7144.js";import"./index.3ee59996.js";import"./index.7873e13f.js";import"./index.3ee0c50a.js";import"./download.a6ed5dfa.js";import"./base64Conver.08b9f4ec.js";import"./index.6854e796.js";const v=T({name:"MenuManagement",components:{BasicTable:k,MenuDrawer:E,TableAction:y},setup(){const[e,{openDrawer:a}]=A(),[o,{reload:c,expandAll:s}]=F({rowKey:"menuId",title:"\u83DC\u5355\u5217\u8868",api:i=>h(this,null,function*(){const l=yield M(i);return D(l,{id:"menuId",pid:"parentId"})}),columns:I,formConfig:{labelWidth:120,schemas:R},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function p(){a(!0,{isUpdate:!1})}function m(i){a(!0,{record:i,isUpdate:!0})}function r(i){}function t(){c()}function n(){S(s)}return{registerTable:o,registerDrawer:e,handleCreate:p,handleEdit:m,handleDelete:r,handleSuccess:t,onFetchSuccess:n}}}),x=B(" \u65B0\u589E\u83DC\u5355 ");function V(e,a,o,c,s,p){const m=u("a-button"),r=u("TableAction"),t=u("BasicTable"),n=u("MenuDrawer");return b(),g("div",null,[d(t,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:f(()=>[d(m,{type:"primary",onClick:e.handleCreate},{default:f(()=>[x]),_:1},8,["onClick"])]),bodyCell:f(({column:i,record:l})=>[i.key==="action"?(b(),_(r,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,l)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,l)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),d(n,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Me=C(v,[["render",V]]);export{Me as default};

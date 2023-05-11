var Ce=Object.defineProperty,Pe=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var K=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&K(e,n,t[n]);if(Q)for(var n of Q(t))ke.call(t,n)&&K(e,n,t[n]);return e},D=(e,t)=>Pe(e,Ue(t));var G=(e,t,n)=>new Promise((s,o)=>{var f=a=>{try{u(n.next(a))}catch(l){o(l)}},d=a=>{try{u(n.throw(a))}catch(l){o(l)}},u=a=>a.done?s(a.value):Promise.resolve(a.value).then(f,d);u((n=n.apply(e,t)).next())});import{n as c,r as Le,c as z,f as R,k as A,aN as Ae,aG as Re,dw as Te,a as F,at as oe,dx as Oe,E as Me,bk as $e,aI as ae,a4 as E,b as Ne,dp as Be,S as ee,V as j,aP as Fe,W as q,a7 as De,X as b,o as h,h as M,H as B,$ as Ee,j as k,z as w,q as V,l as L,B as $,t as N,a1 as W,a2 as xe,Y as x,a0 as ze,a5 as Y,Q as je,w as Ge,v as H,az as He,i as Ve,J as We,dt as Xe,dm as le,cs as Ze,c8 as qe,a3 as Ye}from"./index.051b8e6d.js";import{a as Je,B as re,b as se,u as te}from"./index.2268f048.js";import{U as Qe}from"./index.869b6f14.js";import{P as Ke}from"./index.29220c51.js";import{A as et}from"./index.3ee0c50a.js";import{T as X}from"./index.9cd125ba.js";import{I as tt}from"./index.66663891.js";import{b as nt}from"./uuid.2b29000c.js";import{d as ot}from"./download.a6ed5dfa.js";var at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},lt=at;function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),s.forEach(function(o){rt(e,o,n[o])})}return e}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(t,n){var s=ne({},t,n.attrs);return c(Le,ne({},s,{icon:lt}),null)};J.displayName="MoreOutlined";J.inheritAttrs=!1;var st=J;const ie={helpText:{type:String,default:""},maxSize:{type:Number,default:2},maxNumber:{type:Number,default:1/0},accept:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},uploadParams:{type:Object,default:{}},api:{type:Function,default:null,required:!0},name:{type:String,default:"file"},filename:{type:String,default:null}},it=D(I({value:{type:Array,default:()=>[]}},ie),{showPreviewNumber:{type:Boolean,default:!0},emptyHidePreview:{type:Boolean,default:!1}}),ut={value:{type:Array,default:()=>[]}},ct={columns:{type:[Array],default:null},actionColumn:{type:Object,default:null},dataSource:{type:Array,default:null}},{t:Z}=z();function dt({acceptRef:e,helpTextRef:t,maxNumberRef:n,maxSizeRef:s}){const o=R(()=>{const u=A(e);return u&&u.length>0?u:[]}),f=R(()=>A(o).map(u=>u.indexOf("/")>0||u.startsWith(".")?u:`.${u}`).join(",")),d=R(()=>{const u=A(t);if(u)return u;const a=[],l=A(e);l.length>0&&a.push(Z("component.upload.accept",[l.join(",")]));const i=A(s);i&&a.push(Z("component.upload.maxSize",[i]));const r=A(n);return r&&r!==1/0&&a.push(Z("component.upload.maxNumber",[r])),a.join("\uFF0C")});return{getAccept:o,getStringAccept:f,getHelpText:d}}var S=(e=>(e.SUCCESS="success",e.ERROR="error",e.UPLOADING="uploading",e))(S||{});function pt(e){return ue(e.name)}function ue(e){return/\.(jpg|jpeg|png|gif)$/i.test(e)}function mt(e){return new Promise((t,n)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t({result:s.result,file:e}),s.onerror=o=>n(o)})}const ce=Symbol("basic-table");function Qt(e){Re(ce,e)}function ft(){return Ae(ce)}const{table:gt}=Te,{pageSizeOptions:bt,defaultPageSize:vt,fetchSetting:ht,defaultSize:yt,defaultSortFn:_t,defaultFilterFn:wt}=gt,Kt="key",en=bt,tn=vt,nn=ht,on=yt,an=_t,ln=wt,rn="center",sn="INDEX",St="ACTION";const Ct=F({name:"TableAction",components:{Icon:oe,PopConfirmButton:Oe,Divider:Me,Dropdown:$e,MoreOutlined:st,Tooltip:ae},props:{actions:{type:Array,default:null},dropDownActions:{type:Array,default:null},divider:E.bool.def(!0),outside:E.bool,stopButtonPropagation:E.bool.def(!1)},setup(e){const{prefixCls:t}=Ne("basic-table-action");let n={};e.outside||(n=ft());const{hasPermission:s}=Be();function o(i){const r=i.ifShow;let v=!0;return Fe(r)&&(v=r),q(r)&&(v=r(i)),v}const f=R(()=>(ee(e.actions)||[]).filter(i=>s(i.auth)&&o(i)).map(i=>{const{popConfirm:r}=i;return D(I(I({getPopupContainer:()=>{var v;return(v=A(n==null?void 0:n.wrapRef.value))!=null?v:document.body},type:"link",size:"small"},i),r||{}),{onConfirm:r==null?void 0:r.confirm,onCancel:r==null?void 0:r.cancel,enable:!!r})})),d=R(()=>{const i=(ee(e.dropDownActions)||[]).filter(r=>s(r.auth)&&o(r));return i.map((r,v)=>{const{label:p,popConfirm:g}=r;return D(I(I({},r),g),{onConfirm:g==null?void 0:g.confirm,onCancel:g==null?void 0:g.cancel,text:p,divider:v<i.length-1?e.divider:!1})})}),u=R(()=>{var v,p;const r=(((v=n==null?void 0:n.getColumns)==null?void 0:v.call(n))||[]).find(g=>g.flag===St);return(p=r==null?void 0:r.align)!=null?p:"left"});function a(i){return I({getPopupContainer:()=>{var r;return(r=A(n==null?void 0:n.wrapRef.value))!=null?r:document.body},placement:"bottom"},De(i)?{title:i}:i)}function l(i){if(!e.stopButtonPropagation)return;i.composedPath().find(p=>{var g;return((g=p.tagName)==null?void 0:g.toUpperCase())==="BUTTON"})&&i.stopPropagation()}return{prefixCls:t,getActions:f,getDropdownList:d,getAlign:u,onCellClick:l,getTooltip:a}}});function Pt(e,t,n,s,o,f){const d=b("Icon"),u=b("PopConfirmButton"),a=b("Tooltip"),l=b("Divider"),i=b("MoreOutlined"),r=b("a-button"),v=b("Dropdown");return h(),M("div",{class:V([e.prefixCls,e.getAlign]),onClick:t[0]||(t[0]=(...p)=>e.onCellClick&&e.onCellClick(...p))},[(h(!0),M(B,null,Ee(e.getActions,(p,g)=>(h(),M(B,{key:`${g}-${p.label}`},[p.tooltip?(h(),k(a,W(x({key:0},e.getTooltip(p.tooltip))),{default:w(()=>[c(u,W(xe(p)),{default:w(()=>[p.icon?(h(),k(d,{key:0,icon:p.icon,class:V({"mr-1":!!p.label})},null,8,["icon","class"])):L("",!0),p.label?(h(),M(B,{key:1},[$(N(p.label),1)],64)):L("",!0)]),_:2},1040)]),_:2},1040)):(h(),k(u,W(x({key:1},p)),{default:w(()=>[p.icon?(h(),k(d,{key:0,icon:p.icon,class:V({"mr-1":!!p.label})},null,8,["icon","class"])):L("",!0),p.label?(h(),M(B,{key:1},[$(N(p.label),1)],64)):L("",!0)]),_:2},1040)),e.divider&&g<e.getActions.length-1?(h(),k(l,{key:2,type:"vertical",class:"action-divider"})):L("",!0)],64))),128)),e.dropDownActions&&e.getDropdownList.length>0?(h(),k(v,{key:0,trigger:["hover"],dropMenuList:e.getDropdownList,popconfirm:""},{default:w(()=>[ze(e.$slots,"more"),e.$slots.more?L("",!0):(h(),k(r,{key:0,type:"link",size:"small"},{default:w(()=>[c(i,{class:"icon-more"})]),_:1}))]),_:3},8,["dropMenuList"])):L("",!0)],2)}var de=j(Ct,[["render",Pt]]);const Ut=F({components:{Image:tt},props:{fileUrl:E.string.def(""),fileName:E.string.def("")}}),It={class:"thumb"};function kt(e,t,n,s,o,f){const d=b("Image");return h(),M("span",It,[e.fileUrl?(h(),k(d,{key:0,src:e.fileUrl,width:104},null,8,["src"])):L("",!0)])}var pe=j(Ut,[["render",kt]]);const{t:C}=z();function Lt(){return[{dataIndex:"thumbUrl",title:C("component.upload.legend"),width:100,customRender:({record:e})=>{const{thumbUrl:t}=e||{};return t&&c(pe,{fileUrl:t},null)}},{dataIndex:"name",title:C("component.upload.fileName"),align:"left",customRender:({text:e,record:t})=>{const{percent:n,status:s}=t||{};let o="normal";return s===S.ERROR?o="exception":s===S.UPLOADING?o="active":s===S.SUCCESS&&(o="success"),c("span",null,[c("p",{class:"truncate mb-1",title:e},[e]),c(Ke,{percent:n,size:"small",status:o},null)])}},{dataIndex:"size",title:C("component.upload.fileSize"),width:100,customRender:({text:e=0})=>e&&(e/1024).toFixed(2)+"KB"},{dataIndex:"status",title:C("component.upload.fileStatue"),width:100,customRender:({text:e})=>e===S.SUCCESS?c(X,{color:"green"},{default:()=>C("component.upload.uploadSuccess")}):e===S.ERROR?c(X,{color:"red"},{default:()=>C("component.upload.uploadError")}):e===S.UPLOADING?c(X,{color:"blue"},{default:()=>C("component.upload.uploading")}):e}]}function At(e){return{width:120,title:C("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:t})=>{const n=[{label:C("component.upload.del"),color:"error",onClick:e.bind(null,t)}];return c(de,{actions:n,outside:!0},null)}}}function Rt(){return[{dataIndex:"url",title:C("component.upload.legend"),width:100,customRender:({record:e})=>{const{url:t}=e||{};return ue(t)&&c(pe,{fileUrl:t},null)}},{dataIndex:"name",title:C("component.upload.fileName"),align:"left"}]}function Tt({handleRemove:e,handleDownload:t}){return{width:160,title:C("component.upload.operating"),dataIndex:"action",fixed:!1,customRender:({record:n})=>{const s=[{label:C("component.upload.del"),color:"error",onClick:e.bind(null,n)},{label:C("component.upload.download"),onClick:t.bind(null,n)}];return c(de,{actions:s,outside:!0},null)}}}var me=F({name:"FileList",props:ct,setup(e){const t=Je();return Y(()=>e.dataSource,()=>{je(()=>{var n;(n=t==null?void 0:t.redoModalHeight)==null||n.call(t)})}),()=>{const{columns:n,actionColumn:s,dataSource:o}=e,f=[...n,s];return c("table",{class:"file-table"},[c("colgroup",null,[f.map(d=>{const{width:u=0,dataIndex:a}=d,l={width:`${u}px`,minWidth:`${u}px`};return c("col",{style:u?l:{},key:a},null)})]),c("thead",null,[c("tr",{class:"file-table-tr"},[f.map(d=>{const{title:u="",align:a="center",dataIndex:l}=d;return c("th",{class:["file-table-th",a],key:l},[u])})])]),c("tbody",null,[o.map((d={},u)=>c("tr",{class:"file-table-tr",key:`${u+d.name||""}`},[f.map(a=>{const{dataIndex:l="",customRender:i,align:r="center"}=a,v=i&&q(i);return c("td",{class:["file-table-td",r],key:l},[v?i==null?void 0:i({text:d[l],record:d}):d[l]])})]))])])}}});const Ot=F({components:{BasicModal:re,Upload:Qe,Alert:et,FileList:me},props:D(I({},ie),{previewFileList:{type:Array,default:()=>[]}}),emits:["change","register","delete"],setup(e,{emit:t}){const n=Ge({fileList:[]}),s=H(!1),o=H([]),{accept:f,helpText:d,maxNumber:u,maxSize:a}=He(e),{t:l}=z(),[i,{closeModal:r}]=se(),{getStringAccept:v,getHelpText:p}=dt({acceptRef:f,helpTextRef:d,maxNumberRef:u,maxSizeRef:a}),{createMessage:g}=We(),_=R(()=>o.value.length>0&&!o.value.every(m=>m.status===S.SUCCESS)),fe=R(()=>{const m=o.value.some(y=>y.status===S.SUCCESS);return{disabled:s.value||o.value.length===0||!m}}),ge=R(()=>{const m=o.value.some(y=>y.status===S.ERROR);return s.value?l("component.upload.uploading"):l(m?"component.upload.reUploadFailed":"component.upload.startUpload")});function be(m){const{size:y,name:P}=m,{maxSize:U}=e;if(U&&m.size/1024/1024>=U)return g.error(l("component.upload.maxSizeMultiple",[U])),!1;const O={uuid:nt(),file:m,size:y,name:P,percent:0,type:P.split(".").pop()};return pt(m)?mt(m).then(({result:T})=>{o.value=[...A(o),I({thumbUrl:T},O)]}):o.value=[...A(o),O],!1}function ve(m){const y=o.value.findIndex(P=>P.uuid===m.uuid);y!==-1&&o.value.splice(y,1),t("delete",m)}function he(m){return G(this,null,function*(){var P;const{api:y}=e;if(!y||!q(y))return Xe("upload api must exist and be a function");try{m.status=S.UPLOADING;const{data:U}=yield(P=e.api)==null?void 0:P.call(e,{data:I({},e.uploadParams||{}),file:m.file,name:e.name,filename:e.filename},function(T){const Se=T.loaded/T.total*100|0;m.percent=Se});return m.status=S.SUCCESS,m.responseData=U,{success:!0,error:null}}catch(U){return m.status=S.ERROR,{success:!1,error:U}}})}function ye(){return G(this,null,function*(){var y;const{maxNumber:m}=e;if(o.value.length+((y=e.previewFileList)==null?void 0:y.length)>m)return g.warning(l("component.upload.maxNumber",[m]));try{s.value=!0;const P=o.value.filter(T=>T.status!==S.SUCCESS)||[],U=yield Promise.all(P.map(T=>he(T)));s.value=!1;const O=U.filter(T=>!T.success);if(O.length>0)throw O}catch(P){throw s.value=!1,P}})}function _e(){const{maxNumber:m}=e;if(o.value.length>m)return g.warning(l("component.upload.maxNumber",[m]));if(s.value)return g.warning(l("component.upload.saveWarn"));const y=[];for(const P of o.value){const{status:U,responseData:O}=P;U===S.SUCCESS&&O&&y.push(O.url)}if(y.length<=0)return g.warning(l("component.upload.saveError"));o.value=[],r(),t("change",y)}function we(){return G(this,null,function*(){return s.value?(g.warning(l("component.upload.uploadWait")),!1):(o.value=[],!0)})}return{columns:Lt(),actionColumn:At(ve),register:i,closeModal:r,getHelpText:p,getStringAccept:v,getOkButtonProps:fe,beforeUpload:be,fileListRef:o,state:n,isUploadingRef:s,handleStartUpload:ye,handleOk:_e,handleCloseFunc:we,getIsSelectFile:_,getUploadBtnText:ge,t:l}}}),Mt={class:"upload-modal-toolbar"};function $t(e,t,n,s,o,f){const d=b("a-button"),u=b("Alert"),a=b("Upload"),l=b("FileList"),i=b("BasicModal");return h(),k(i,x({width:"800px",title:e.t("component.upload.upload"),okText:e.t("component.upload.save")},e.$attrs,{onRegister:e.register,onOk:e.handleOk,closeFunc:e.handleCloseFunc,maskClosable:!1,keyboard:!1,class:"upload-modal",okButtonProps:e.getOkButtonProps,cancelButtonProps:{disabled:e.isUploadingRef}}),{centerFooter:w(()=>[c(d,{onClick:e.handleStartUpload,color:"success",disabled:!e.getIsSelectFile,loading:e.isUploadingRef},{default:w(()=>[$(N(e.getUploadBtnText),1)]),_:1},8,["onClick","disabled","loading"])]),default:w(()=>[Ve("div",Mt,[c(u,{message:e.getHelpText,type:"info",banner:"",class:"upload-modal-toolbar__text"},null,8,["message"]),c(a,{accept:e.getStringAccept,multiple:e.multiple,"before-upload":e.beforeUpload,"show-upload-list":!1,class:"upload-modal-toolbar__btn"},{default:w(()=>[c(d,{type:"primary"},{default:w(()=>[$(N(e.t("component.upload.choose")),1)]),_:1})]),_:1},8,["accept","multiple","before-upload"])]),c(l,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","okText","onRegister","onOk","closeFunc","okButtonProps","cancelButtonProps"])}var Nt=j(Ot,[["render",$t]]);const Bt=F({components:{BasicModal:re,FileList:me},props:ut,emits:["list-change","register","delete"],setup(e,{emit:t}){const[n,{closeModal:s}]=se(),{t:o}=z(),f=H([]);Y(()=>e.value,a=>{le(a)||(a=[]),f.value=a.filter(l=>!!l).map(l=>({url:l,type:l.split(".").pop()||"",name:l.split("/").pop()||""}))},{immediate:!0});function d(a){const l=f.value.findIndex(i=>i.url===a.url);if(l!==-1){const i=f.value.splice(l,1);t("delete",i[0].url),t("list-change",f.value.map(r=>r.url))}}function u(a){const{url:l=""}=a;ot({url:l})}return{t:o,register:n,closeModal:s,fileListRef:f,columns:Rt(),actionColumn:Tt({handleRemove:d,handleDownload:u})}}});function Ft(e,t,n,s,o,f){const d=b("FileList"),u=b("BasicModal");return h(),k(u,x({width:"800px",title:e.t("component.upload.preview"),class:"upload-preview-modal"},e.$attrs,{onRegister:e.register,showOkBtn:!1}),{default:w(()=>[c(d,{dataSource:e.fileListRef,columns:e.columns,actionColumn:e.actionColumn},null,8,["dataSource","columns","actionColumn"])]),_:1},16,["title","onRegister"])}var Dt=j(Bt,[["render",Ft]]);const Et=F({name:"BasicUpload",components:{UploadModal:Nt,Space:Ze,UploadPreviewModal:Dt,Icon:oe,Tooltip:ae},props:it,emits:["change","delete","preview-delete","update:value"],setup(e,{emit:t,attrs:n}){const{t:s}=z(),[o,{openModal:f}]=te(),[d,{openModal:u}]=te(),a=H([]),l=R(()=>{const{emptyHidePreview:_}=e;return _&&_?a.value.length>0:!0}),i=R(()=>{const _=I(I({},n),e);return qe(_,"onChange")});Y(()=>e.value,(_=[])=>{a.value=le(_)?_:[]},{immediate:!0});function r(_){a.value=[...A(a),..._||[]],t("update:value",a.value),t("change",a.value)}function v(_){a.value=[..._||[]],t("update:value",a.value),t("change",a.value)}function p(_){t("delete",_)}function g(_){t("preview-delete",_)}return{registerUploadModal:o,openUploadModal:f,handleChange:r,handlePreviewChange:v,registerPreviewModal:d,openPreviewModal:u,fileList:a,showPreview:l,bindValue:i,handleDelete:p,handlePreviewDelete:g,t:s}}});function xt(e,t,n,s,o,f){const d=b("a-button"),u=b("Icon"),a=b("Tooltip"),l=b("Space"),i=b("UploadModal"),r=b("UploadPreviewModal");return h(),M("div",null,[c(l,null,{default:w(()=>[c(d,{type:"primary",onClick:e.openUploadModal,preIcon:"carbon:cloud-upload"},{default:w(()=>[$(N(e.t("component.upload.upload")),1)]),_:1},8,["onClick"]),e.showPreview?(h(),k(a,{key:0,placement:"bottom"},{title:w(()=>[$(N(e.t("component.upload.uploaded"))+" ",1),e.fileList.length?(h(),M(B,{key:0},[$(N(e.fileList.length),1)],64)):L("",!0)]),default:w(()=>[c(d,{onClick:e.openPreviewModal},{default:w(()=>[c(u,{icon:"bi:eye"}),e.fileList.length&&e.showPreviewNumber?(h(),M(B,{key:0},[$(N(e.fileList.length),1)],64)):L("",!0)]),_:1},8,["onClick"])]),_:1})):L("",!0)]),_:1}),c(i,x(e.bindValue,{previewFileList:e.fileList,onRegister:e.registerUploadModal,onChange:e.handleChange,onDelete:e.handleDelete}),null,16,["previewFileList","onRegister","onChange","onDelete"]),c(r,{value:e.fileList,onRegister:e.registerPreviewModal,onListChange:e.handlePreviewChange,onDelete:e.handlePreviewDelete},null,8,["value","onRegister","onListChange","onDelete"])])}var zt=j(Et,[["render",xt]]);const un=Ye(zt);export{St as A,un as B,rn as D,nn as F,sn as I,tn as P,Kt as R,de as T,S as U,en as a,an as b,ln as c,on as d,Qt as e,ft as u};

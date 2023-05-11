var S=Object.defineProperty,N=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var I=(o,t,e)=>t in o?S(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,F=(o,t)=>{for(var e in t||(t={}))T.call(t,e)&&I(o,e,t[e]);if(g)for(var e of g(t))Y.call(t,e)&&I(o,e,t[e]);return o},h=(o,t)=>N(o,y(t));var P=(o,t,e)=>new Promise((l,i)=>{var p=u=>{try{n(e.next(u))}catch(m){i(m)}},d=u=>{try{n(e.throw(u))}catch(m){i(m)}},n=u=>u.done?l(u.value):Promise.resolve(u.value).then(p,d);n((e=e.apply(o,t)).next())});import{B as $,b as q}from"./index.19afb89b.js";import{B as L}from"./BasicForm.715a36c3.js";import{u as O}from"./useForm.c8dadad1.js";import{g as v}from"./dict.d9ee9a6d.js";import{b as V,a as R,u as j,e as U}from"./system.2301cf89.js";import{a as z,v as B,k as c,f as G,V as W,X as w,o as X,j as H,z as J,n as K,Y as Q}from"./index.919817c1.js";const ie=[{title:"\u7528\u6237\u540D",dataIndex:"userName",width:120},{title:"\u6635\u79F0",dataIndex:"nickName",width:120},{title:"\u90E8\u95E8",dataIndex:["dept","deptName"],width:120},{title:"\u624B\u673A\u53F7\u7801",dataIndex:"phonenumber",width:120},{title:"\u72B6\u6001",dataIndex:"status",width:120,key:"status"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],f={xs:24,sm:12,md:12,lg:8},pe=[{field:"userName",label:"\u7528\u6237\u540D",component:"Input",colProps:f},{field:"nickName",label:"\u6635\u79F0",component:"Input",colProps:f},{field:"phonenumber",label:"\u624B\u673A\u53F7\u7801",component:"Input",colProps:f},{field:"status",label:"\u72B6\u6001",component:"ApiSelect",colProps:f,componentProps:{api:()=>v("sys_normal_disable"),labelField:"dictLabel",valueField:"dictValue"}},{field:"[beginTime, endTime]",label:"\u521B\u5EFA\u65F6\u95F4",component:"RangePicker",colProps:f,componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}],a={xs:24,sm:12},Z=[{field:"userName",label:"\u7528\u6237\u540D",component:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],colProps:a},{field:"password",label:"\u5BC6\u7801",component:"InputPassword",required:!0,show:!1,componentProps:{maxlength:20},colProps:a},{field:"nickName",label:"\u6635\u79F0",component:"Input",required:!0,colProps:a},{field:"deptId",label:"\u6240\u5C5E\u90E8\u95E8",component:"TreeSelect",componentProps:{fieldNames:{label:"label",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0,colProps:a},{label:"\u624B\u673A\u53F7\u7801",field:"phonenumber",component:"Input",required:!0,componentProps:{maxlength:11},rules:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"}],colProps:a},{label:"\u7528\u6237\u6027\u522B",field:"sex",component:"ApiSelect",colProps:a,componentProps:{api:()=>v("sys_user_sex"),labelField:"dictLabel",valueField:"dictValue"}},{label:"\u89D2\u8272",field:"roleIds",component:"Select",componentProps:{mode:"multiple"},colProps:a},{label:"\u5C97\u4F4D",field:"postIds",component:"Select",componentProps:{mode:"multiple"},colProps:a},{label:"\u90AE\u7BB1",field:"email",component:"Input",colProps:a},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea",colProps:{span:24}}],ee=z({name:"AccountModal",components:{BasicModal:$,BasicForm:L},emits:["success","register"],setup(o,{emit:t}){const e=B(!0),l=B(""),[i,{setFieldsValue:p,updateSchema:d,resetFields:n,validate:u}]=O({labelWidth:100,baseColProps:{span:24},schemas:Z,showActionButtonGroup:!1,actionColOptions:{span:23}}),[m,{setModalProps:b,closeModal:A}]=q(s=>P(this,null,function*(){n(),b({confirmLoading:!1}),e.value=!!(s!=null&&s.isUpdate),c(e)&&(l.value=s.record.userId,p(F({},s.record)));const{roles:M=[],posts:E=[],roleIds:C=[],postIds:k=[]}=yield V(l.value);c(e)&&p({roleIds:C,postIds:k});const x=yield R();d([{field:"password",show:!c(e),required:!1},{field:"deptId",componentProps:{treeData:x}},{field:"roleIds",componentProps:{multiple:!0,options:M.map(r=>({label:r.roleName,value:r.roleId,disabled:r.status==1}))}},{field:"postIds",componentProps:{multiple:!0,options:E.map(r=>({label:r.postName,value:r.postId,disabled:r.status==1}))}}])})),_=G(()=>c(e)?"\u7F16\u8F91\u8D26\u53F7":"\u65B0\u589E\u8D26\u53F7");function D(){return P(this,null,function*(){try{const s=yield u();b({confirmLoading:!0}),c(e)?yield j(Object.assign({},s,{userId:l.value})):yield U(s),A(),t("success",{isUpdate:c(e),values:h(F({},s),{id:l.value})})}catch(s){b({confirmLoading:!1})}})}return{registerModal:m,registerForm:i,getTitle:_,handleSubmit:D}}});function oe(o,t,e,l,i,p){const d=w("BasicForm"),n=w("BasicModal");return X(),H(n,Q(o.$attrs,{width:660,onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:J(()=>[K(d,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var te=W(ee,[["render",oe]]),de=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));export{te as A,de as a,ie as c,pe as s};

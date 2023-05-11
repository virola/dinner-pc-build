var ue=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var x=(e,o,r)=>o in e?ue(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,m=(e,o)=>{for(var r in o||(o={}))we.call(o,r)&&x(e,r,o[r]);if(U)for(var r of U(o))be.call(o,r)&&x(e,r,o[r]);return e},V=(e,o)=>fe(e,ge(o));var K=(e,o,r)=>new Promise((c,i)=>{var p=l=>{try{a(r.next(l))}catch(d){i(d)}},t=l=>{try{a(r.throw(l))}catch(d){i(d)}},a=l=>l.done?c(l.value):Promise.resolve(l.value).then(p,t);a((r=r.apply(e,o)).next())});import{c as G,a as j,b as A,f as w,V as E,X as y,o as f,h as _,H as he,a0 as g,j as P,z as b,B as N,t as S,Y as T,l as B,q as C,aK as J,dv as ve,a4 as L,i as Q,n as R,b1 as me,v as D,c9 as ye,a5 as W,dE as X,k as n,S as $,c7 as De,Q as ee,W as te,bd as Ce,Z as Y,x as ke,$ as $e,a1 as _e,a2 as Be,T as O,w as re,U as oe,ce as Pe,O as Se,dz as ae,N as Te,a3 as Oe}from"./index.051b8e6d.js";import{D as Fe}from"./index.6854e796.js";import{A as He}from"./ArrowLeftOutlined.339bcb08.js";const{t:Z}=G(),se={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Z("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Z("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Ve=m({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},se);const Le=j({name:"BasicDrawerFooter",props:V(m({},se),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:r}=A("basic-drawer-footer"),c=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}});function i(){o("ok")}function p(){o("close")}return{handleOk:i,prefixCls:r,handleClose:p,getStyle:c}}});function Ne(e,o,r,c,i,p){const t=y("a-button");return e.showFooter||e.$slots.footer?(f(),_("div",{key:0,class:C(e.prefixCls),style:J(e.getStyle)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(f(),_(he,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(f(),P(t,T({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:b(()=>[N(S(e.cancelText),1)]),_:1},16,["onClick"])):B("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(f(),P(t,T({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:b(()=>[N(S(e.okText),1)]),_:1},16,["type","onClick","loading"])):B("",!0),g(e.$slots,"appendFooter")],64))],6)):B("",!0)}var Re=E(Le,[["render",Ne]]);const ze=j({name:"BasicDrawerHeader",components:{BasicTitle:ve,ArrowLeftOutlined:He},props:{isDetail:L.bool,showDetailBack:L.bool,title:L.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:r}=A("basic-drawer-header");function c(){o("close")}return{prefixCls:r,handleClose:c}}}),je={key:1};function Ae(e,o,r,c,i,p){const t=y("BasicTitle"),a=y("ArrowLeftOutlined");return e.isDetail?(f(),_("div",{key:1,class:C([e.prefixCls,`${e.prefixCls}--detail`])},[Q("span",{class:C(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),_("span",{key:0,onClick:o[0]||(o[0]=(...l)=>e.handleClose&&e.handleClose(...l))},[R(a,{class:C(`${e.prefixCls}__back`)},null,8,["class"])])):B("",!0),e.title?(f(),_("span",je,S(e.title),1)):B("",!0)],2),Q("span",{class:C(`${e.prefixCls}__toolbar`)},[g(e.$slots,"titleToolbar")],2)],2)):(f(),P(t,{key:0,class:C(e.prefixCls)},{default:b(()=>[g(e.$slots,"title"),N(" "+S(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var Ee=E(ze,[["render",Ae]]);const qe=j({components:{Drawer:Fe,ScrollContainer:me,DrawerFooter:Re,DrawerHeader:Ee},inheritAttrs:!1,props:Ve,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const r=D(!1),c=ye(),i=D(null),{t:p}=G(),{prefixVar:t,prefixCls:a}=A("basic-drawer"),l={setDrawerProps:ce,emitVisible:void 0},d=O();d&&o("register",l,d.uid);const v=w(()=>X($(e),n(i))),h=w(()=>{const s=V(m(m({placement:"right"},n(c)),n(v)),{visible:n(r)});s.title=void 0;const{isDetail:u,width:H,wrapClassName:I,getContainer:pe}=s;if(u){H||(s.width="100%");const M=`${a}__detail`;s.class=I?`${I} ${M}`:M,pe||(s.getContainer=`.${t}-layout-content`)}return s}),F=w(()=>m(m({},c),n(h))),q=w(()=>{const{footerHeight:s,showFooter:u}=n(h);return u&&s?De(s)?`${s}px`:`${s.replace("px","")}px`:"0px"}),ne=w(()=>{const s=n(q);return{position:"relative",height:`calc(100% - ${s})`}}),ie=w(()=>{var s;return!!((s=n(h))!=null&&s.loading)});W(()=>e.visible,(s,u)=>{s!==u&&(r.value=s)},{deep:!0}),W(()=>r.value,s=>{ee(()=>{var u;o("visible-change",s),d&&((u=l.emitVisible)==null||u.call(l,s,d.uid))})});function le(s){return K(this,null,function*(){const{closeFunc:u}=n(h);if(o("close",s),u&&te(u)){const H=yield u();r.value=!H;return}r.value=!1})}function ce(s){i.value=X(n(i)||{},s),Reflect.has(s,"visible")&&(r.value=!!s.visible)}function de(){o("ok")}return{onClose:le,t:p,prefixCls:a,getMergeProps:v,getScrollContentStyle:ne,getProps:h,getLoading:ie,getBindValues:F,getFooterHeight:q,handleOk:de}}});function Ie(e,o,r,c,i,p){const t=y("DrawerHeader"),a=y("ScrollContainer"),l=y("DrawerFooter"),d=y("Drawer"),v=Ce("loading");return f(),P(d,T({class:e.prefixCls,onClose:e.onClose},e.getBindValues),Y({default:b(()=>[ke((f(),P(a,{style:J(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:b(()=>[g(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[v,e.getLoading]]),R(l,T(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),Y({_:2},[$e(Object.keys(e.$slots),h=>({name:h,fn:b(F=>[g(e.$slots,h,_e(Be(F||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:b(()=>[g(e.$slots,"title")])}:{name:"title",fn:b(()=>[R(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:b(()=>[g(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var Me=E(qe,[["render",Ie]]);const k=re({}),z=re({});function We(){if(!O())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=D(null),o=D(!1),r=D("");function c(t,a){oe(()=>{e.value=null,o.value=null,k[n(r)]=null}),!(n(o)&&Pe()&&t===n(e))&&(r.value=a,e.value=t,o.value=!0,t.emitVisible=(l,d)=>{z[d]=l})}const i=()=>{const t=n(e);return t||ae("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var a;(a=i())==null||a.setDrawerProps(t)},getVisible:w(()=>z[~~n(r)]),openDrawer:(t=!0,a,l=!0)=>{var v;if((v=i())==null||v.setDrawerProps({visible:t}),!a)return;if(l){k[n(r)]=null,k[n(r)]=$(a);return}Se($(k[n(r)]),$(a))||(k[n(r)]=$(a))},closeDrawer:()=>{var t;(t=i())==null||t.setDrawerProps({visible:!1})}};return[c,p]}const Xe=e=>{const o=D(null),r=O(),c=D("");if(!O())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const i=()=>{const t=n(o);if(!t){ae("useDrawerInner instance is undefined!");return}return t},p=(t,a)=>{oe(()=>{o.value=null}),c.value=a,o.value=t,r==null||r.emit("register",t,a)};return Te(()=>{const t=k[n(c)];!t||!e||!te(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var a;(a=i())==null||a.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var a;(a=i())==null||a.setDrawerProps({confirmLoading:t})},getVisible:w(()=>z[~~n(c)]),closeDrawer:()=>{var t;(t=i())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var a;(a=i())==null||a.setDrawerProps(t)}}]},Ye=Oe(Me);export{Ye as B,Xe as a,We as u};

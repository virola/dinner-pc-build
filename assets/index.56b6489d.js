import{K as M,bw as $,a as q,ag as c,ah as J,v as b,by as m,ai as R,aj as l,n as o,bz as G,bR as Q,bP as U,ed as W,x as X,y as Y,bq as E,ee as Z,ak as ee,eH as ae,al as te,am as ne,eI as oe,eJ as re,eK as le,eL as ie}from"./index.919817c1.js";var ce={success:ee,info:ae,error:te,warning:ne},se={success:oe,info:re,error:le,warning:ie},de=$("success","info","warning","error"),fe=function(){return{type:c.oneOf(de),closable:{type:Boolean,default:void 0},closeText:c.any,message:c.any,description:c.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:c.any,closeIcon:c.any,onClose:Function}},ue=q({name:"AAlert",inheritAttrs:!1,props:fe(),setup:function(a,u){var i=u.slots,O=u.emit,x=u.attrs,H=u.expose,w=J("alert",a),L=w.prefixCls,B=w.direction,s=b(!1),C=b(!1),I=b(),N=function(n){n.preventDefault();var r=I.value;r.style.height="".concat(r.offsetHeight,"px"),r.style.height="".concat(r.offsetHeight,"px"),s.value=!0,O("close",n)},k=function(){var n;s.value=!1,C.value=!0,(n=a.afterClose)===null||n===void 0||n.call(a)};H({animationEnd:k});var S=b({});return function(){var t,n,r=a.banner,z=a.closeIcon,A=z===void 0?(n=i.closeIcon)===null||n===void 0?void 0:n.call(i):z,h=a.closable,d=a.type,f=a.showIcon,y=m(i,a,"closeText"),p=m(i,a,"description"),P=m(i,a,"message"),g=m(i,a,"icon");f=r&&f===void 0?!0:f,d=r&&d===void 0?"warning":d||"info";var _=(p?se:ce)[d]||null;y&&(h=!0);var e=L.value,j=R(e,(t={},l(t,"".concat(e,"-").concat(d),!0),l(t,"".concat(e,"-closing"),s.value),l(t,"".concat(e,"-with-description"),!!p),l(t,"".concat(e,"-no-icon"),!f),l(t,"".concat(e,"-banner"),!!r),l(t,"".concat(e,"-closable"),h),l(t,"".concat(e,"-rtl"),B.value==="rtl"),t)),V=h?o("button",{type:"button",onClick:N,class:"".concat(e,"-close-icon"),tabindex:0},[y?o("span",{class:"".concat(e,"-close-text")},[y]):A===void 0?o(G,null,null):A]):null,D=g&&(Q(g)?U(g,{class:"".concat(e,"-icon")}):o("span",{class:"".concat(e,"-icon")},[g]))||o(_,{class:"".concat(e,"-icon")},null),K=W("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:k,onBeforeLeave:function(v){v.style.maxHeight="".concat(v.offsetHeight,"px")},onLeave:function(v){v.style.maxHeight="0px"}});return C.value?null:o(Z,K,{default:function(){return[X(o("div",E(E({role:"alert"},x),{},{style:[x.style,S.value],class:[x.class,j],"data-show":!s.value,ref:I}),[f?D:null,o("div",{class:"".concat(e,"-content")},[P?o("div",{class:"".concat(e,"-message")},[P]):null,p?o("div",{class:"".concat(e,"-description")},[p]):null]),V]),[[Y,!s.value]])]}})}}}),ge=M(ue);export{ge as A};

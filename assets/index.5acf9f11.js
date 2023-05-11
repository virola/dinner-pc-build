var N=Object.defineProperty,A=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var C=(e,n,a)=>n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,F=(e,n)=>{for(var a in n||(n={}))y.call(n,a)&&C(e,a,n[a]);if(D)for(var a of D(n))I.call(n,a)&&C(e,a,n[a]);return e},O=(e,n)=>A(e,M(n));import{P as S}from"./index.2b14c180.js";import{a as $,a4 as u,v as Y,c as P,f2 as R,a5 as j,f3 as k,dq as H,e4 as h,V as b,c7 as U,a7 as V,aQ as W,o as E,h as q,t as z,a3 as Q,cc as X,w as G,az as J,X as w,j as K,z as f,n as i,i as _}from"./index.051b8e6d.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./eagerComputed.2b892fda.js";import"./useWindowSizeFn.dbf4cc23.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./transButton.64b42905.js";const p=1e3,d=p*60,v=d*60,B=v*24,L=$({name:"Time",props:{value:u.oneOfType([u.number,u.instanceOf(Date),u.string]).isRequired,step:u.number.def(60),mode:u.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const n=Y(""),{t:a}=P();R(m,e.step*p),j(()=>e.value,()=>{m()},{immediate:!0});function T(){const{value:t}=e;let s=0;if(U(t)){const l=t.toString().length>10?t:t*1e3;s=new Date(l).getTime()}else V(t)?s=new Date(t).getTime():W(t)&&(s=t.getTime());return s}function m(){const{mode:t,value:s}=e,l=T();t==="relative"?n.value=g(l):t==="datetime"?n.value=k(s):t==="date"&&(n.value=H(s))}function g(t){const s=new Date().getTime(),l=h(t).isBefore(s);let o=s-t;l||(o=-o);let r="",c=a(l?"component.time.before":"component.time.after");return o<p?r=a("component.time.just"):o<d?r=parseInt(o/p)+a("component.time.seconds")+c:o>=d&&o<v?r=Math.floor(o/d)+a("component.time.minutes")+c:o>=v&&o<B?r=Math.floor(o/v)+a("component.time.hours")+c:o>=B&&o<262386e4?r=Math.floor(o/B)+a("component.time.days")+c:o>=262386e4&&o<=3156786e4&&l?r=h(t).format("MM-DD-HH-mm"):r=h(t).format("YYYY"),r}return{date:n}}});function Z(e,n,a,T,m,g){return E(),q("span",null,z(e.date),1)}var x=b(L,[["render",Z]]);const ee=Q(x),te=$({components:{PageWrapper:S,Time:ee,CollapseContainer:X},setup(){const e=new Date().getTime(),n=G({time1:e-60*3*1e3,time2:e-86400*3*1e3});return O(F({},J(n)),{now:e})}}),ne=_("br",null,null,-1),ae=_("br",null,null,-1),oe=_("br",null,null,-1),se=_("br",null,null,-1);function ie(e,n,a,T,m,g){const t=w("Time"),s=w("CollapseContainer"),l=w("PageWrapper");return E(),K(l,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:f(()=>[i(s,{title:"\u57FA\u7840\u793A\u4F8B"},{default:f(()=>[i(t,{value:e.time1},null,8,["value"]),ne,i(t,{value:e.time2},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0",class:"my-4"},{default:f(()=>[i(t,{value:e.now,step:1},null,8,["value"]),ae,i(t,{value:e.now,step:5},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0"},{default:f(()=>[i(t,{value:e.now,mode:"date"},null,8,["value"]),oe,i(t,{value:e.now,mode:"datetime"},null,8,["value"]),se,i(t,{value:e.now},null,8,["value"])]),_:1})]),_:1})}var ge=b(te,[["render",ie]]);export{ge as default};

import{a as E,v as k,w as A,f as c,k as i,a5 as D,a8 as B,Q as I,cL as M,n as s,cb as L,V,a3 as P,E as j,X as b,o as q,j as z,z as _,i as g,t as W,B as C}from"./index.919817c1.js";import{P as Q}from"./index.e4b3259e.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./eagerComputed.79baeeab.js";import"./useWindowSizeFn.c695bcd8.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";import"./transButton.d6060a92.js";const U={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},x="virtual-scroll";function o(t,n="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${n}`}var X=E({name:"VirtualScroll",props:U,setup(t,{slots:n}){const u=k(null),a=A({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),d=c(()=>parseInt(t.itemHeight,10)),m=c(()=>Math.max(0,a.first-i(p))),f=c(()=>Math.min((t.items||[]).length,a.last+i(p))),v=c(()=>({height:o((t.items||[]).length*i(d))})),h=c(()=>{const e={},r=o(t.height),l=o(t.minHeight),y=o(t.minWidth),H=o(t.maxHeight),N=o(t.maxWidth),F=o(t.width);return r&&(e.height=r),l&&(e.minHeight=l),y&&(e.minWidth=y),H&&(e.maxHeight=H),N&&(e.maxWidth=N),F&&(e.width=F),e});D([()=>t.itemHeight,()=>t.height],()=>{w()});function S(e){const r=i(u);if(!r)return 0;const l=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(l/i(d))}function $(){return Math.floor(a.scrollTop/i(d))}function w(){const e=i(u);!e||(a.scrollTop=e.scrollTop,a.first=$(),a.last=S(a.first))}function R(){const{items:e=[]}=t;return e.slice(i(m),i(f)).map(T)}function T(e,r){r+=i(m);const l=o(r*i(d));return s("div",{class:`${x}__item`,style:{top:l},key:r},[L(n,"default",{index:r,item:e})])}return B(()=>{a.last=S(0),I(()=>{const e=i(u);!e||M({el:e,name:"scroll",listener:w,wait:0})})}),()=>s("div",{class:x,style:i(h),ref:u},[s("div",{class:`${x}__container`,style:i(v)},[R()])])}});var G=V(X,[["__scopeId","data-v-dd7becb6"]]);const J=P(G);const K=(()=>{const t=[];for(let n=1;n<2e4;n++)t.push({title:"\u5217\u8868\u9879"+n});return t})(),O=E({components:{VScroll:J,Divider:j,PageWrapper:Q},setup(){return{data:K}}}),Y=C("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Z={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=C("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},rt={class:"virtual-scroll-demo__item"};function at(t,n,u,a,p,d){const m=b("Divider"),f=b("VScroll"),v=b("PageWrapper");return q(),z(v,{class:"virtual-scroll-demo"},{default:_(()=>[s(m,null,{default:_(()=>[Y]),_:1}),g("div",Z,[s(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",tt,W(h.title),1)]),_:1},8,["items"])]),s(m,null,{default:_(()=>[et]),_:1}),g("div",it,[s(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",rt,W(h.title),1)]),_:1},8,["items"])])]),_:1})}var ft=V(O,[["render",at],["__scopeId","data-v-002a1a68"]]);export{ft as default};

import{cr as v,k as c,fo as w,fp as y,bF as x,v as W,fq as b,T as $,e6 as g,V as B,a as R,cc as I,X as k,o as P,j as z,z as d,n as u,B as C}from"./index.051b8e6d.js";import{P as M}from"./index.2b14c180.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./eagerComputed.2b892fda.js";import"./useWindowSizeFn.dbf4cc23.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./transButton.64b42905.js";const S=Symbol("watermark-dom");function T(n=W(document.body)){const r=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:a}=t;i({height:e,width:a})}),s=S.toString(),l=v(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),w(e,r))};function _(t){const e=document.createElement("canvas"),a=300,m=240;Object.assign(e,{width:a,height:m});const o=e.getContext("2d");return o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,a/20,m)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${_(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const a=c(n);if(!a)return s;const{clientHeight:m,clientWidth:o}=a;return i({str:t,width:o,height:m}),a.appendChild(e),s};function h(t){p(t),y(document.documentElement,r),$()&&x(()=>{f()})}return{setWatermark:h,clear:f}}const V=R({components:{CollapseContainer:I,PageWrapper:M},setup(){const n=W(null),{setWatermark:r,clear:s}=T();return{setWatermark:r,clear:s,areaRef:n}}}),E=C(" Create "),L=C(" Clear "),N=C(" Reset ");function j(n,r,s,l,f,_){const i=k("a-button"),p=k("CollapseContainer"),h=k("PageWrapper");return P(),z(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[u(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[u(i,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=t=>n.setWatermark("WaterMark Info"))},{default:d(()=>[E]),_:1}),u(i,{color:"error",class:"mr-2",onClick:n.clear},{default:d(()=>[L]),_:1},8,["onClick"]),u(i,{color:"warning",class:"mr-2",onClick:r[1]||(r[1]=t=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[N]),_:1})]),_:1})]),_:1})}var K=B(V,[["render",j]]);export{K as default};

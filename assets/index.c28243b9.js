import{P as W}from"./index.2b14c180.js";import{V as X,a as z,X as M,bd as Y,o as L,j as A,z as D,x as S,h as V,B as q}from"./index.051b8e6d.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./eagerComputed.2b892fda.js";import"./useWindowSizeFn.dbf4cc23.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./transButton.64b42905.js";const m={event:"mousedown",transition:400},x={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");H(Object.keys(t.modifiers),m);const n=o||x.background,r=x.zIndex;e.addEventListener(m.event,d=>{F({event:d,el:e,background:n,zIndex:r})})},updated(e,t){var n,r;if(!t.value){(n=e==null?void 0:e.clearRipple)==null||n.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function F({event:e,el:t,zIndex:o,background:n}){var E,R;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),d=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,h=t.getBoundingClientRect(),{left:B,top:C}=h,{offsetWidth:b,offsetHeight:_}=t,{transition:T}=m,l=d-B,u=f-C,y=Math.max(l,b-l),w=Math.max(u,_-u),k=window.getComputedStyle(t),g=Math.sqrt(y*y+w*w),$=r>0?r:0,a=document.createElement("div"),s=document.createElement("div");a.className="ripple",Object.assign((E=a.style)!=null?E:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${T}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:n!=null?n:"rgba(0, 0, 0, 0.12)"}),s.className="ripple-container",Object.assign((R=s.style)!=null?R:{},{position:"absolute",left:`${0-$}px`,top:`${0-$}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),s.appendChild(a),t.appendChild(s),Object.assign(a.style,{marginTop:`${u}px`,marginLeft:`${l}px`});const{borderTopLeftRadius:N,borderTopRightRadius:j,borderBottomLeftRadius:P,borderBottomRightRadius:O}=k;Object.assign(s.style,{width:`${b}px`,height:`${_}px`,direction:"ltr",borderTopLeftRadius:N,borderTopRightRadius:j,borderBottomLeftRadius:P,borderBottomRightRadius:O}),setTimeout(()=>{var c;const i=`${g*2}px`;Object.assign((c=a.style)!=null?c:{},{width:i,height:i,marginLeft:`${l-g}px`,marginTop:`${u-g}px`})},0);function p(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var i;(i=s==null?void 0:s.parentNode)==null||i.removeChild(s)},850),t.removeEventListener("mouseup",p,!1),t.removeEventListener("mouseleave",p,!1),t.removeEventListener("dragstart",p,!1),setTimeout(()=>{let i=!0;for(let c=0;c<t.childNodes.length;c++)t.childNodes[c].className==="ripple-container"&&(i=!1);i&&(t.style.position=v!=="static"?v:"")},m.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",p,!1),t.addEventListener("mouseleave",p,!1),t.addEventListener("dragstart",p,!1)):p(),t.setBackground=i=>{!i||(a.style.backgroundColor=i)}}function H(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const I=z({components:{PageWrapper:W},directives:{Ripple:x}}),G={class:"demo-box"},J=q("content"),K=[J];function Q(e,t,o,n,r,d){const f=M("PageWrapper"),h=Y("ripple");return L(),A(f,{title:"Ripple\u793A\u4F8B"},{default:D(()=>[S((L(),V("div",G,K)),[[h]])]),_:1})}var pt=X(I,[["render",Q],["__scopeId","data-v-42c234a1"]]);export{pt as default};

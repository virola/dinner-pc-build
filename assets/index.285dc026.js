import{V as d,a as i,b5 as f,a$ as l,aA as _,b as m,v as h,f as g,o as y,j as F,z as v,q as x,l as C,k as t,f0 as S,f1 as b,X as w,i as L}from"./index.051b8e6d.js";import{a as $}from"./useContentViewHeight.acab2293.js";import"./useWindowSizeFn.dbf4cc23.js";const R=i({name:"LayoutFooter",components:{Footer:f.Footer},setup(){const{getShowFooter:e}=l(),{currentRoute:n}=_(),{prefixCls:u}=m("layout-footer"),a=h(null),{setFooterHeight:s}=$();return{getShowLayoutFooter:g(()=>{var o,c;if(t(e)){const r=(o=t(a))==null?void 0:o.$el;s((r==null?void 0:r.offsetHeight)||0)}else s(0);return t(e)&&!((c=t(n).meta)!=null&&c.hiddenFooter)}),prefixCls:u,footerRef:a}}}),k=e=>(S("data-v-45a78b9a"),e=e(),b(),e),A=k(()=>L("div",null,"Copyright \xA92022 \u987E\u8BDA\u79D1\u6280\u667A\u6167\u98DF\u5802",-1));function B(e,n,u,a,s,p){const o=w("Footer");return e.getShowLayoutFooter?(y(),F(o,{key:0,class:x(e.prefixCls),ref:"footerRef"},{default:v(()=>[A]),_:1},8,["class"])):C("",!0)}var V=d(R,[["render",B],["__scopeId","data-v-45a78b9a"]]);export{V as default};

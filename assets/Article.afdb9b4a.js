import{V as I,a as L,at as h,X as c,o as a,j as l,z as r,h as _,$ as p,n as $,i as s,t as i,q as o,H as d,B as u,l as y}from"./index.051b8e6d.js";/* empty css              */import{T as k}from"./index.9cd125ba.js";import{articleList as b,actions as B}from"./data.53a0f0fb.js";import{L as m}from"./index.b6954d5d.js";import"./eagerComputed.2b892fda.js";const T=L({components:{List:m,ListItem:m.Item,ListItemMeta:m.Item.Meta,Tag:k,Icon:h},setup(){return{prefixCls:"account-center-article",list:b,actions:B}}});function V(t,M,N,z,A,j){const f=c("Tag"),v=c("ListItemMeta"),x=c("Icon"),g=c("ListItem"),C=c("List");return a(),l(C,{"item-layout":"vertical",class:o(t.prefixCls)},{default:r(()=>[(a(!0),_(d,null,p(t.list,n=>(a(),l(g,{key:n.title},{default:r(()=>[$(v,null,{description:r(()=>[s("div",{class:o(`${t.prefixCls}__content`)},i(n.content),3)]),title:r(()=>[s("p",{class:o(`${t.prefixCls}__title`)},i(n.title),3),s("div",null,[(a(!0),_(d,null,p(n.description,e=>(a(),l(f,{key:e,class:"mb-2"},{default:r(()=>[u(i(e),1)]),_:2},1024))),128))])]),_:2},1024),s("div",null,[(a(!0),_(d,null,p(t.actions,e=>(a(),_("div",{key:e.text,class:o(`${t.prefixCls}__action`)},[e.icon?(a(),l(x,{key:0,class:o(`${t.prefixCls}__action-icon`),icon:e.icon,color:e.color},null,8,["class","icon","color"])):y("",!0),u(" "+i(e.text),1)],2))),128)),s("span",{class:o(`${t.prefixCls}__time`)},i(n.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var S=I(T,[["render",V],["__scopeId","data-v-67062fde"]]);export{S as default};

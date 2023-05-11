import{M as E,a as F}from"./index.1308c2f2.js";import{P as k}from"./index.e4b3259e.js";import{V as C,a as w,v as s,X as t,o as g,j as B,z as n,i as p,n as a,k as A,B as d}from"./index.919817c1.js";import{C as D}from"./index.914d870d.js";import"./index.21f2fcb7.js";import"./index.19afb89b.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./eagerComputed.79baeeab.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";import"./transButton.d6060a92.js";import"./index.8091d123.js";import"./index.9ef0f9ba.js";import"./useRefs.f28a0bf3.js";import"./PlusOutlined.bc9c9de1.js";const V=w({components:{MarkDown:E,PageWrapper:k,MarkdownViewer:F,ACard:D},setup(){const e=s(null),u=s(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function l(){const o=A(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function m(o){u.value=o}function i(){u.value=""}return{value:u,toggleTheme:l,markDownRef:e,handleChange:m,clearValue:i}}}),M=d(" \u9ED1\u6697\u4E3B\u9898 "),R=d(" \u6E05\u7A7A\u5185\u5BB9 "),b={class:"mt-2"};function P(e,u,l,m,i,o){const r=t("a-button"),c=t("MarkDown"),_=t("MarkdownViewer"),h=t("a-card"),f=t("PageWrapper");return g(),B(f,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[p("div",null,[a(r,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[M]),_:1},8,["onClick"]),a(r,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[R]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),p("div",b,[a(h,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[a(_,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var Q=C(V,[["render",P]]);export{Q as default};

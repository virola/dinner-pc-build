import{C as g,M as i,J as F}from"./index.30c4446d.js";import{P as x}from"./index.2b14c180.js";import{V as R,a as B,ct as c,cs as b,v as h,X as n,o as k,j as P,z as o,n as a,k as S,dC as _,bf as j,B as l}from"./index.051b8e6d.js";import"./useWindowSizeFn.dbf4cc23.js";import"./index.c4040988.js";import"./index.900b54f5.js";import"./eagerComputed.2b892fda.js";import"./useContentViewHeight.acab2293.js";import"./ArrowLeftOutlined.339bcb08.js";import"./index.47f7791d.js";import"./transButton.64b42905.js";const f='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"\u79D1\u6280\u56ED\u8DEF.","city":"\u6C5F\u82CF\u82CF\u5DDE","country":"\u4E2D\u56FD"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',y=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,J=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,M=B({components:{CodeEditor:g,PageWrapper:x,RadioButton:c.Button,RadioGroup:c.Group,ASpace:b},setup(){const t=h(i.JSON),e=h(f);function m(p){const u=p.target.value;if(u===i.JSON){e.value=f;return}if(u===i.HTML){e.value=J;return}if(u===i.JS){e.value=y;return}}function d(){S(t)==="application/json"?_.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:j(F,{data:JSON.parse(e.value)})}):_.info({title:"\u7F16\u8F91\u5668\u5F53\u524D\u503C",content:e.value})}return{value:e,modeValue:t,handleModeChange:m,showData:d}}}),V=l("\u83B7\u53D6\u6570\u636E"),A=l(" json\u6570\u636E "),N=l(" html\u4EE3\u7801 "),O=l(" javascript\u4EE3\u7801 ");function G(t,e,m,d,p,u){const v=n("a-button"),r=n("RadioButton"),w=n("RadioGroup"),C=n("a-space"),E=n("CodeEditor"),D=n("PageWrapper");return k(),P(D,{title:"\u4EE3\u7801\u7F16\u8F91\u5668\u7EC4\u4EF6\u793A\u4F8B",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(C,{size:"middle"},{default:o(()=>[a(v,{onClick:t.showData,type:"primary"},{default:o(()=>[V]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=s=>t.modeValue=s),onChange:t.handleModeChange},{default:o(()=>[a(r,{value:"application/json"},{default:o(()=>[A]),_:1}),a(r,{value:"htmlmixed"},{default:o(()=>[N]),_:1}),a(r,{value:"javascript"},{default:o(()=>[O]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(E,{value:t.value,"onUpdate:value":e[1]||(e[1]=s=>t.value=s),mode:t.modeValue},null,8,["value","mode"])]),_:1})}var Y=R(M,[["render",G]]);export{Y as default};

import{V as d,a as B,X as i,o as E,j as C,z as a,n as e,B as c,t as m,bf as F}from"./index.919817c1.js";import{_ as g}from"./index.33a4b23c.js";import{t as h,a as _,b as A}from"./data.ec134722.js";import{P as b}from"./index.e4b3259e.js";import{R as k,C as L}from"./index.9ef0f9ba.js";import{P as R}from"./PlusOutlined.bc9c9de1.js";import{D as M}from"./DeleteOutlined.377bc287.js";import"./fromPairs.84aabb58.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./useContextMenu.132ae5dd.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./useWindowSizeFn.c695bcd8.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";import"./transButton.d6060a92.js";const N=B({components:{BasicTree:g,PageWrapper:b,Row:k,Col:L},setup(){function t(u){}function s(u){return[{label:"\u65B0\u589E",handler:()=>{},icon:"bi:plus"},{label:"\u5220\u9664",handler:()=>{},icon:"bx:bxs-folder-open"}]}const l=[{render:u=>F(R,{class:"ml-2",onClick:()=>{}})},{render:()=>F(M)}];function p({level:u}){return u===1?"ion:git-compare-outline":u===2?"ion:home":u===3?"ion:airplane":""}return{treeData:h,treeData2:_,treeData3:A,actionList:l,getRightMenuList:s,createIcon:p}}});function P(t,s,l,p,u,T){const r=i("BasicTree"),o=i("Col"),D=i("Row"),f=i("PageWrapper");return E(),C(f,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B"},{default:a(()=>[e(D,{gutter:[16,16]},{default:a(()=>[e(o,{span:8},{default:a(()=>[e(r,{title:"\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE/\u81EA\u5B9A\u4E49\u56FE\u6807",helpMessage:"\u5E2E\u52A9\u4FE1\u606F",treeData:t.treeData,actionList:t.actionList,renderIcon:t.createIcon},null,8,["treeData","actionList","renderIcon"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u53F3\u952E\u83DC\u5355",treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u5DE5\u5177\u680F\u4F7F\u7528",toolbar:"",checkable:"",search:"",treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u6CA1\u6709fieldNames\uFF0C\u63D2\u69FD\u6709\u6548",helpMessage:"\u6B63\u786E\u7684\u793A\u4F8B",treeData:t.treeData3},{title:a(n=>[c(" \u63D2\u69FD\uFF1A"+m(n.name),1)]),_:1},8,["treeData"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u6709fieldNames\u540E\uFF0C\u63D2\u69FD\u5931\u6548",helpMessage:"\u9519\u8BEF\u7684\u793A\u4F8B, \u5E94\u8BE5\u663E\u793A\u63D2\u69FD\u7684\u5185\u5BB9\u624D\u5BF9",fieldNames:{key:"id",title:"name"},treeData:t.treeData2},{title:a(n=>[c(" \u63D2\u69FD\uFF1A"+m(n.title),1)]),_:1},8,["treeData"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u6709fieldNames\u540E\uFF0CactionList\u5931\u6548",helpMessage:"\u9519\u8BEF\u7684\u793A\u4F8B\uFF0C\u5E94\u8BE5\u5728\u9F20\u6807\u79FB\u4E0A\u53BB\u65F6\uFF0C\u663E\u793A\u65B0\u589E\u548C\u5220\u9664\u6309\u94AE\u624D\u5BF9",treeData:t.treeData3,actionList:t.actionList,fieldNames:{key:"key",title:"name"}},null,8,["treeData","actionList"])]),_:1})]),_:1})]),_:1})}var U=d(N,[["render",P]]);export{U as default};

import{P as B}from"./index.e4b3259e.js";import{V as y,a as A,X as v,o as u,j as $,z as d,i as e,n as E,h as s,$ as r,t as F,H as o,q as C,B as g}from"./index.919817c1.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./eagerComputed.79baeeab.js";import"./useWindowSizeFn.c695bcd8.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";import"./transButton.d6060a92.js";const H=A({components:{PageWrapper:B},setup(){const a=["\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94"],_=[];function t(i=2){let l=[];for(let c=0;c<i;c++)l.push({dishName:"8\u5143\u5957\u9910",recipes:["\u5C0F\u7092\u8089","\u7EA2\u70E7\u9E21\u5757","\u7092\u9752\u83DC","\u571F\u8C46\u4E1D"]});return l}const h=[{key:1,name:"\u5348\u9910",week1:t(),week2:t(),week3:t(),week4:t(),week5:t()},{key:2,name:"\u665A\u9910",week1:t(),week2:t(),week3:t(),week4:t(),week5:t()}];function k(i,l){return l[`week${i+1}`]}return{tableHeader:a,tableData:h,getRecord:k}}}),N={class:"flex justify-between items-center"},P=g("\u67E5\u770B\u98DF\u8C31\u7EFC\u5408\u8BC4\u4EF7"),V=e("div",{class:"flex"},[e("div",{class:"mr-10"},"\u5236\u4F5C\u4EBA\uFF1A\u674E\u67D0"),e("div",{class:"mr-10"},"\u5236\u8868\u65F6\u95F4\uFF1A2022-09-09"),e("div",{class:"mr-10"},"\u7528\u9910\u4EBA\u7FA4\uFF1A\u521D\u4E2D")],-1),x=g("\u5BFC\u51FA\u98DF\u8C31"),R={class:"p-4 bg-white"},W={class:"common-table"},j={class:"ant-table-thead"},z=e("th",null,[e("div",null,[e("div",null,"\u65E5\u671F/\u9910\u522B"),e("div",null,"\uFF08\u98DF\u6750\u5355\u4F4D\uFF1A\u514B\uFF09")])],-1),q={class:"border-r p-2 flex-1 flex items-center"},L={class:"flex-1"};function S(a,_,t,h,k,i){const l=v("a-button"),c=v("PageWrapper");return u(),$(c,{contentFullHeight:""},{headerContent:d(()=>[e("div",N,[E(l,null,{default:d(()=>[P]),_:1}),V,E(l,null,{default:d(()=>[x]),_:1})])]),default:d(()=>[e("div",R,[e("table",W,[e("thead",j,[e("tr",null,[z,(u(!0),s(o,null,r(a.tableHeader,(n,f)=>(u(),s("th",{key:f},[e("div",null,F(n),1)]))),128))])]),e("tbody",null,[(u(!0),s(o,null,r(a.tableData,n=>(u(),s("tr",{key:n.key},[e("td",null,[e("div",null,F(n.name),1)]),(u(!0),s(o,null,r(a.tableHeader,(f,m)=>(u(),s("td",{key:m},[(u(!0),s(o,null,r(a.getRecord(m,n),(p,b)=>(u(),s("div",{key:b,class:C(["flex items-center items-stretch",{"border-b":b<a.getRecord(m,n).length-1}])},[e("div",q,F(p.dishName),1),e("div",L,[(u(!0),s(o,null,r(p.recipes,(w,D)=>(u(),s("div",{class:C(["p-1",{"border-b":D<p.recipes.length-1}]),key:D},F(w),3))),128))])],2))),128))]))),128))]))),128))])])])]),_:1})}var O=y(H,[["render",S]]);export{O as default};

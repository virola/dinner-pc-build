var E=(e,i,r)=>new Promise((s,l)=>{var p=c=>{try{n(r.next(c))}catch(m){l(m)}},a=c=>{try{n(r.throw(c))}catch(m){l(m)}},n=c=>c.done?s(c.value):Promise.resolve(c.value).then(p,a);n((r=r.apply(e,i)).next())});import{E as B}from"./index.ce5ec6ea.js";import{u as C}from"./index.19afb89b.js";import{eN as u,dw as F,a as w,V as N,X as k,o as R,h as T,n as b,z as M,B as A}from"./index.919817c1.js";import{j}from"./Export2Excel.6438127b.js";import"./BasicForm.715a36c3.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./index.4a2acf8a.js";import"./eagerComputed.79baeeab.js";import"./DeleteOutlined.377bc287.js";import"./transButton.d6060a92.js";import"./index.22841bd0.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./useRefs.f28a0bf3.js";import"./index.56b6489d.js";import"./index.7d7196b9.js";import"./uuid.2b29000c.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";import"./index.3df1d9ef.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";import"./useForm.c8dadad1.js";import"./useWindowSizeFn.c695bcd8.js";import"./FullscreenOutlined.a925bd36.js";const{table:x}=F,g=1e4;let y=!1;const O=function(c){return E(this,arguments,function*({api:e,where:i={},parseParam:r,parseData:s,columns:l=[],filename:p="\u5BFC\u51FA\u6570\u636E",datasource:a=null,fileType:n="xlsx"}){if(y)return u.warning("\u6B63\u5728\u5904\u7406\u4E2D...");const m=l.filter(t=>t.key!=="index"&&t.key!="action"&&!t.noExport),S=m.map(t=>t.title),_=[];let d=[];if(e){const t=u.loading("\u8BF7\u6C42\u4E2D..",0),h=Object.assign({},r?r(i):i,{[x.fetchSetting.pageField]:1,[x.fetchSetting.sizeField]:g});y=!0,d=yield e(h).then(o=>{t();let f=o||{};return s&&(f=s(o)),f?(f[x.fetchSetting.totalField]>g&&u.warning("\u5BFC\u51FA\u6570\u636E\u8D85\u8FC7"+g+"\u6761\uFF0C\u4EC5\u5BFC\u51FA\u524D"+g+"\u6761\u8BB0\u5F55\uFF0C\u5EFA\u8BAE\u4FEE\u6539\u67E5\u8BE2\u6761\u4EF6\u540E\u5BFC\u51FA\uFF01",10),f[x.fetchSetting.listField]||[]):(u.error(f.msg||"\u672A\u77E5\u9519\u8BEF"),[])}).catch(o=>(t(),u.error(o.message),[])).finally(()=>{y=!1})}else a&&(d=a);d&&d.length?(d.forEach(t=>{const h=m.map(o=>o.exportRender?o.exportRender({record:t,text:t[o.dataIndex]}):o.customRender?o.customRender({record:t,text:t[o.dataIndex]}):t[o.dataIndex]);_.push(h)}),j({data:_,header:S,filename:p,write2excelOpts:{bookType:n}})):u.error("\u6CA1\u6709\u53EF\u5BFC\u51FA\u6570\u636E!")})},$=w({name:"ExportTableBtn",components:{ExpExcelModal:B},props:{columns:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},api:{type:[String,Function],default:""},where:Object,defaultName:{type:String,default:"\u5BFC\u51FA"}},emits:["btn-click"],setup(e,{emit:i}){const[r,{openModal:s}]=C();function l({filename:a,bookType:n}){O({api:e.api,columns:e.columns,datasource:e.data,filename:a,where:e.where,fileType:n})}function p(){i("btn-click"),s()}return{defaultHeader:l,register:r,clickBtn:p}}}),v=A("\u5BFC\u51FA");function I(e,i,r,s,l,p){const a=k("a-button"),n=k("ExpExcelModal");return R(),T("div",null,[b(a,{onClick:e.clickBtn},{default:M(()=>[v]),_:1},8,["onClick"]),b(n,{defaultName:e.defaultName,onRegister:e.register,onSuccess:e.defaultHeader},null,8,["defaultName","onRegister","onSuccess"])])}var fe=N($,[["render",I]]);export{fe as default};

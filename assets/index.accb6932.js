var d=(o,u,e)=>new Promise((n,r)=>{var a=t=>{try{s(e.next(t))}catch(p){r(p)}},i=t=>{try{s(e.throw(t))}catch(p){r(p)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,i);s((e=e.apply(o,u)).next())});import{P as _}from"./index.e4b3259e.js";import{B as F}from"./BasicForm.715a36c3.js";import{u as C}from"./useForm.c8dadad1.js";import{V as h,a as w,X as m,o as E,j as g,z as c,i as f,n as l,B}from"./index.919817c1.js";import"./index.0bd6a2c0.js";import"./index.5499644c.js";import"./eagerComputed.79baeeab.js";import"./useWindowSizeFn.c695bcd8.js";import"./useContentViewHeight.28236eba.js";import"./ArrowLeftOutlined.d95f742b.js";import"./index.2ed53404.js";import"./transButton.d6060a92.js";import"./index.d24653ee.js";import"./index.1215f001.js";import"./index.04a6da56.js";import"./index.18c8a6a3.js";import"./index.c2ec20a0.js";import"./index.4a2acf8a.js";import"./DeleteOutlined.377bc287.js";import"./index.22841bd0.js";import"./index.19afb89b.js";import"./FullscreenOutlined.a925bd36.js";import"./index.b59e4656.js";import"./index.1fb10b07.js";import"./useRefs.f28a0bf3.js";import"./index.56b6489d.js";import"./index.7d7196b9.js";import"./uuid.2b29000c.js";import"./download.38abbaa7.js";import"./base64Conver.08b9f4ec.js";import"./index.3df1d9ef.js";import"./index.9ef0f9ba.js";import"./uniqBy.4b65255e.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(u,e)=>e?e!==o.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")}]}],b=w({name:"ChangePassword",components:{BasicForm:F,PageWrapper:_},setup(){const[o,{validate:u,resetFields:e}]=C({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:P});function n(){return d(this,null,function*(){try{const r=yield u(),{passwordOld:a,passwordNew:i}=r}catch(r){}})}return{register:o,resetFields:e,handleSubmit:n}}}),A={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"},v=B(" \u91CD\u7F6E "),D=B(" \u786E\u8BA4 ");function k(o,u,e,n,r,a){const i=m("BasicForm"),s=m("a-button"),t=m("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",A,[l(i,{onRegister:o.register},null,8,["onRegister"]),f("div",y,[l(s,{onClick:o.resetFields},{default:c(()=>[v]),_:1},8,["onClick"]),l(s,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:c(()=>[D]),_:1},8,["onClick"])])])]),_:1})}var me=h(b,[["render",k]]);export{me as default};

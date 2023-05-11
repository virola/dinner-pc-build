import{u as r}from"./upload.c21f97a6.js";import"./index.919817c1.js";const t={name:"ABC\u5E9F\u5F03\u7269\u5904\u7406\u516C\u53F8",code:"202209897",address:"\u6E56\u5357\u7701\u957F\u6C99\u5E02\u5F00\u798F\u533A",detail:"\u5F00\u798F\u533A\u7B2C\u4E8C\u5927\u9053123\u53F7",date:"2022-1-1"},s={name:"XXX\u5783\u573E\u5904\u7406\u516C\u53F8",code:"12344325",address:"\u6E56\u5357\u7701\u957F\u6C99\u5E02\u5F00\u798F\u533A",detail:"\u5F00\u798F\u533A\u7B2C\u4E8C\u5927\u9053123\u53F7",date:"2022-2-1"},n=[{field:"name",label:"\u516C\u53F8\u540D\u79F0",required:!0},{field:"user",label:"\u6CD5\u4EBA\u4EE3\u8868"},{field:"code",label:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801"},{field:"type",label:"\u6536\u8FD0\u4EBA"},{field:"address",label:"\u516C\u53F8\u5730\u5740"},{field:"date",label:"\u5BA1\u6838/\u5E74\u68C0\u65E5\u671F"}],d=[{title:"\u57FA\u672C\u4FE1\u606F",dataKey:"basicInfo",column:3,fields:n},{title:"\u9644\u4EF6",dataKey:"staffInfo",column:2,fields:[{field:"image",label:"\u516C\u53F8\u8D44\u8D28",render:"image"},{field:"contract",label:"\u5408\u540C",render:"file"}]}],m=d,p=[t,s],o=[];d.forEach(l=>{l.fields&&l.fields.forEach(e=>{const a={field:e.field,label:e.label,component:"Input",colProps:{sm:24,md:12,lg:8,xl:8,xxl:8}};e.required&&(a.rules=[{required:!0,message:`\u8BF7\u8F93\u5165${e.label}`}]),e.render&&e.render=="image"&&(a.component="Upload",a.componentProps={maxNumber:5,maxSize:10,accept:[".png",".jpg"],api:r}),e.render&&e.render=="file"&&(a.component="Upload",a.componentProps={maxNumber:5,maxSize:10,api:r}),o.push(a)})});const f=[...o];export{m as descSchema,f as editFormSchema,p as records};

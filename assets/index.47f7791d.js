import{A as n}from"./index.900b54f5.js";import{a as G,ah as N,cq as T,aj as v,by as O,bQ as $,bP as q,n as s,aM as z,bq as u}from"./index.051b8e6d.js";var I=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},E=G({name:"AAvatarGroup",inheritAttrs:!1,props:I(),setup:function(e,p){var b=p.slots,t=p.attrs,f=N("avatar-group",e),i=f.prefixCls,S=f.direction;return T(e),function(){var r,d=e.maxPopoverPlacement,h=d===void 0?"top":d,o=e.maxCount,_=e.maxStyle,g=e.maxPopoverTrigger,j=g===void 0?"hover":g,P=(r={},v(r,i.value,!0),v(r,"".concat(i.value,"-rtl"),S.value==="rtl"),v(r,"".concat(t.class),!!t.class),r),A=O(b,e),l=$(A).map(function(x,C){return q(x,{key:"avatar-key-".concat(C)})}),c=l.length;if(o&&o<c){var y=l.slice(0,o),k=l.slice(o,c);return y.push(s(z,{key:"avatar-popover-key",content:k,trigger:j,placement:h,overlayClassName:"".concat(i.value,"-popover")},{default:function(){return[s(n,{style:_},{default:function(){return["+".concat(c-o)]}})]}})),s("div",u(u({},t),{},{class:P,style:t.style}),[y])}return s("div",u(u({},t),{},{class:P,style:t.style}),[l])}}}),m=E;n.Group=m;n.install=function(a){return a.component(n.name,n),a.component(m.name,m),a};

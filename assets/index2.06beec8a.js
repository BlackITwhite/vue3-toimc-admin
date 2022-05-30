import{e as L,am as x,o as c,c as A,a as ee,Y as ne,x as te,b5 as o,be as g,I as ae,v as le,bs as re,aL as se,bw as ue,g as ie,h as oe,aq as de,bx as ce,z as me,A as h,av as y,aS as pe,bl as be,N as fe,a1 as ve,by as Ne,B as he,ad as ge,aT as T,r as f,a_ as we,a5 as O,C as P,a$ as S,b as z,w as U,j as $,F as Y,a7 as _,al as Ve}from"./index.2df1a13d.js";import{R as Ie}from"./index2.de6f3b51.js";const ye=L({name:"Minus"}),Se={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},$e=ee("path",{fill:"currentColor",d:"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"},null,-1),Ae=[$e];function Ce(e,r,m,s,C,d){return c(),A("svg",Se,Ae)}var Fe=x(ye,[["render",Ce]]);const ke=ne({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:{type:Boolean,default:!1},max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:{type:Number},disabled:{type:Boolean,default:!1},size:{type:String,values:te},controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||o(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)}}),Be={change:(e,r)=>e!==r,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,input:e=>o(e)||g(e),"update:modelValue":e=>o(e)||g(e)},De=L({name:"ElInputNumber",components:{ElInput:ae,ElIcon:le,ArrowUp:re,ArrowDown:se,Plus:ue,Minus:Fe},directives:{RepeatClick:Ie},props:ke,emits:Be,setup(e,{emit:r}){const m=ie(),s=oe({currentValue:e.modelValue,userInput:null}),{t:C}=de(),{formItem:d}=ce(),F=me("input-number"),w=h(()=>o(e.modelValue)&&V(e.modelValue,-1)<e.min),v=h(()=>o(e.modelValue)&&V(e.modelValue)>e.max),k=h(()=>{const n=R(e.step);return y(e.precision)?Math.max(R(e.modelValue),n):(n>e.precision,e.precision)}),B=h(()=>e.controls&&e.controlsPosition==="right"),D=pe(),p=be(),N=h(()=>{if(s.userInput!==null)return s.userInput;let n=s.currentValue;if(g(n))return"";if(o(n)){if(Number.isNaN(n))return"";y(e.precision)||(n=n.toFixed(e.precision))}return n}),M=(n,t)=>{y(t)&&(t=k.value);const a=n.toString().split(".");if(a.length>1){const l=a[0],u=Math.round(+a[1]/10**(a[1].length-t));return Number.parseFloat(`${l}.${u}`)}return Number.parseFloat(`${Math.round(n*10**t)/10**t}`)},R=n=>{if(g(n))return 0;const t=n.toString(),a=t.indexOf(".");let l=0;return a!==-1&&(l=t.length-a-1),l},V=(n,t=1)=>o(n)?M(n+e.step*t):s.currentValue,j=()=>{if(p.value||v.value)return;const n=e.modelValue||0,t=V(n);E(t)},q=()=>{if(p.value||w.value)return;const n=e.modelValue||0,t=V(n,-1);E(t)},K=(n,t)=>{const{max:a,min:l,step:u,precision:b,stepStrictly:Z,valueOnClear:I}=e;let i=Number(n);if(g(n)||Number.isNaN(i))return null;if(n===""){if(I===null)return null;i=ge(I)?{min:l,max:a}[I]:I}return Z&&(i=Math.round(i/u)*u),y(b)||(i=M(i,b)),(i>a||i<l)&&(i=i>a?a:l,t&&r("update:modelValue",i)),i},E=n=>{var t;const a=s.currentValue,l=K(n);a!==l&&(s.userInput=null,r("update:modelValue",l),r("input",l),r("change",l,a),(t=d==null?void 0:d.validate)==null||t.call(d,"change").catch(u=>T()),s.currentValue=l)},G=n=>s.userInput=n,H=n=>{const t=n!==""?Number(n):"";(o(t)&&!Number.isNaN(t)||n==="")&&E(t),s.userInput=null},W=()=>{var n,t;(t=(n=m.value)==null?void 0:n.focus)==null||t.call(n)},J=()=>{var n,t;(t=(n=m.value)==null?void 0:n.blur)==null||t.call(n)},Q=n=>{r("focus",n)},X=n=>{var t;r("blur",n),(t=d==null?void 0:d.validate)==null||t.call(d,"blur").catch(a=>T())};return fe(()=>e.modelValue,n=>{s.currentValue=K(n,!0),s.userInput=null},{immediate:!0}),ve(()=>{var n;const{min:t,max:a,modelValue:l}=e,u=(n=m.value)==null?void 0:n.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(a)?u.setAttribute("aria-valuemax",String(a)):u.removeAttribute("aria-valuemax"),Number.isFinite(t)?u.setAttribute("aria-valuemin",String(t)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",String(s.currentValue)),u.setAttribute("aria-disabled",String(p.value)),!o(l)&&l!=null){let b=Number(l);Number.isNaN(b)&&(b=null),r("update:modelValue",b)}}),Ne(()=>{var n;const t=(n=m.value)==null?void 0:n.input;t==null||t.setAttribute("aria-valuenow",s.currentValue)}),{t:C,input:m,displayValue:N,handleInput:G,handleInputChange:H,controlsAtRight:B,decrease:q,increase:j,inputNumberSize:D,inputNumberDisabled:p,maxDisabled:v,minDisabled:w,focus:W,blur:J,handleFocus:Q,handleBlur:X,ns:F}}}),Ee=["aria-label"],Pe=["aria-label"];function ze(e,r,m,s,C,d){const F=f("arrow-down"),w=f("minus"),v=f("el-icon"),k=f("arrow-up"),B=f("plus"),D=f("el-input"),p=we("repeat-click");return c(),A("div",{class:P([e.ns.b(),e.ns.m(e.inputNumberSize),e.ns.is("disabled",e.inputNumberDisabled),e.ns.is("without-controls",!e.controls),e.ns.is("controls-right",e.controlsAtRight)]),onDragstart:r[2]||(r[2]=_(()=>{},["prevent"]))},[e.controls?O((c(),A("span",{key:0,role:"button","aria-label":e.t("el.inputNumber.decrease"),class:P([e.ns.e("decrease"),e.ns.is("disabled",e.minDisabled)]),onKeydown:r[0]||(r[0]=S((...N)=>e.decrease&&e.decrease(...N),["enter"]))},[z(v,null,{default:U(()=>[e.controlsAtRight?(c(),$(F,{key:0})):(c(),$(w,{key:1}))]),_:1})],42,Ee)),[[p,e.decrease]]):Y("v-if",!0),e.controls?O((c(),A("span",{key:1,role:"button","aria-label":e.t("el.inputNumber.increase"),class:P([e.ns.e("increase"),e.ns.is("disabled",e.maxDisabled)]),onKeydown:r[1]||(r[1]=S((...N)=>e.increase&&e.increase(...N),["enter"]))},[z(v,null,{default:U(()=>[e.controlsAtRight?(c(),$(k,{key:0})):(c(),$(B,{key:1}))]),_:1})],42,Pe)),[[p,e.increase]]):Y("v-if",!0),z(D,{id:e.id,ref:"input",type:"number",step:e.step,"model-value":e.displayValue,placeholder:e.placeholder,disabled:e.inputNumberDisabled,size:e.inputNumberSize,max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[S(_(e.increase,["prevent"]),["up"]),S(_(e.decrease,["prevent"]),["down"])],onBlur:e.handleBlur,onFocus:e.handleFocus,onInput:e.handleInput,onChange:e.handleInputChange},null,8,["id","step","model-value","placeholder","disabled","size","max","min","name","label","onKeydown","onBlur","onFocus","onInput","onChange"])],34)}var _e=he(De,[["render",ze],["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Ke=Ve(_e);export{Ke as E};

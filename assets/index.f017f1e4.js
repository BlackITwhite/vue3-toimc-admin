import{_ as b,e as g,g as p,o as m,c as v,b as o,w as t,a,t as f,I as w,H as k,k as u,p as A,d as R,l as I,Z as D,j as V,a8 as X,a9 as x}from"./index.42c98f94.js";import{E as Y}from"./el-card.dd0f8719.js";import{E as $}from"./el-col.45ae0650.js";import{_ as j}from"./TransitionList.898ebea2.js";/* empty css                       *//* empty css                        */import{a as L,b as N}from"./index2.ad0dc2a0.js";import"./BasicTransition.bc404977.js";const T=g({setup(){const e=p(!0),s=p(.3),_=p(!1),h=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"];let c;const r=()=>{l(),_.value=!0,c=setInterval(()=>{e.value=!1,setTimeout(()=>{e.value=!0},s.value*1e3)},s.value*2e3)},l=()=>{_.value=!1,clearInterval(c)};return{show:e,start:r,stop:l,transitionList:h,delay:s,handleChange:n=>{s.value=n,l(),r()},state:_}}}),C=e=>(A("data-v-315900bc"),e=e(),R(),e),z={class:"p-4"},G=u("\u5F00\u59CB\u52A8\u753B"),H=u("\u505C\u6B62\u52A8\u753B"),U={class:"ml-4"},Z={class:"mr-4"},q=C(()=>a("div",null,"\u65F6\u95F4\u63A7\u5236\uFF1A",-1)),J=u("0.3s"),K=u("1s"),M=u("3s"),O=u("5s"),P=C(()=>a("h1",{class:"py-4"},"\u5185\u7F6E\u52A8\u753B",-1)),Q={class:"min-h-45"},W={class:"box"};function ee(e,s,_,h,c,r){const l=I,d=D,n=L,F=N,B=j,E=$,y=Y;return m(),v("div",z,[o(y,{header:"\u8FC7\u6E21\u52A8\u753B",class:"min-h-[1080px]"},{default:t(()=>[o(d,{justify:"space-between",class:"w-full"},{default:t(()=>[o(d,{align:"middle"},{default:t(()=>[o(l,{type:"primary",onClick:e.start},{default:t(()=>[G]),_:1},8,["onClick"]),o(l,{onClick:e.stop},{default:t(()=>[H]),_:1},8,["onClick"]),a("div",U,"\u662F\u5426\u5F00\u59CB\uFF1A"+f(e.state?"\u5DF2\u5F00\u59CB":"\u5DF2\u505C\u6B62"),1)]),_:1}),o(d,{align:"middle"},{default:t(()=>[a("div",Z,"\u72B6\u6001\uFF1A"+f(e.show?"\u663E\u793A\u4E2D...":"\u9690\u85CF\u4E2D..."),1),q,o(F,{modelValue:e.delay,"onUpdate:modelValue":s[0]||(s[0]=i=>e.delay=i),size:"default",onChange:e.handleChange},{default:t(()=>[o(n,{label:.3},{default:t(()=>[J]),_:1},8,["label"]),o(n,{label:1},{default:t(()=>[K]),_:1}),o(n,{label:3},{default:t(()=>[M]),_:1}),o(n,{label:5},{default:t(()=>[O]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),P,o(d,null,{default:t(()=>[(m(!0),v(w,null,k(e.transitionList,(i,S)=>(m(),V(E,{key:S,span:6,class:"flex flex-col items-center justify-center mb-6"},{default:t(()=>[a("div",null,f(i),1),a("div",Q,[o(B,{name:i,delay:e.delay},{default:t(()=>[X(a("div",W,null,512),[[x,e.show]])]),_:2},1032,["name","delay"])])]),_:2},1024))),128))]),_:1})]),_:1})])}var _e=b(T,[["render",ee],["__scopeId","data-v-315900bc"]]);export{_e as default};

import{_ as b,e as g,f as p,E as w,o as m,c as v,b as o,w as t,a,t as f,J as A,I as k,h as u,p as R,d as I,$ as D,g as V,ar as X,aX as $}from"./index.52c47f52.js";import{E as x}from"./el-card.ad255d8a.js";import{E as Y}from"./el-col.ee66a030.js";import{_ as L}from"./TransitionList.cbc933c4.js";/* empty css                       *//* empty css                        */import{a as N,b as j}from"./index.3be59f85.js";import"./BasicTransition.45635f22.js";const T=g({setup(){const e=p(!0),s=p(.3),_=p(!1),h=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"];let r;const c=()=>{l(),_.value=!0,r=setInterval(()=>{e.value=!1,setTimeout(()=>{e.value=!0},s.value*1e3)},s.value*2e3)},l=()=>{_.value=!1,clearInterval(r)};return{show:e,start:c,stop:l,transitionList:h,delay:s,handleChange:n=>{s.value=n,l(),c()},state:_}}}),C=e=>(R("data-v-315900bc"),e=e(),I(),e),z={class:"p-4"},G=u("\u5F00\u59CB\u52A8\u753B"),J=u("\u505C\u6B62\u52A8\u753B"),U={class:"ml-4"},q={class:"mr-4"},H=C(()=>a("div",null,"\u65F6\u95F4\u63A7\u5236\uFF1A",-1)),K=u("0.3s"),M=u("1s"),O=u("3s"),P=u("5s"),Q=C(()=>a("h1",{class:"py-4"},"\u5185\u7F6E\u52A8\u753B",-1)),W={class:"min-h-45"},Z={class:"box"};function ee(e,s,_,h,r,c){const l=w,d=D,n=N,F=j,E=L,B=Y,y=x;return m(),v("div",z,[o(y,{header:"\u8FC7\u6E21\u52A8\u753B",class:"min-h-[1080px]"},{default:t(()=>[o(d,{justify:"space-between",class:"w-full"},{default:t(()=>[o(d,{align:"middle"},{default:t(()=>[o(l,{type:"primary",onClick:e.start},{default:t(()=>[G]),_:1},8,["onClick"]),o(l,{onClick:e.stop},{default:t(()=>[J]),_:1},8,["onClick"]),a("div",U,"\u662F\u5426\u5F00\u59CB\uFF1A"+f(e.state?"\u5DF2\u5F00\u59CB":"\u5DF2\u505C\u6B62"),1)]),_:1}),o(d,{align:"middle"},{default:t(()=>[a("div",q,"\u72B6\u6001\uFF1A"+f(e.show?"\u663E\u793A\u4E2D...":"\u9690\u85CF\u4E2D..."),1),H,o(F,{modelValue:e.delay,"onUpdate:modelValue":s[0]||(s[0]=i=>e.delay=i),size:"default",onChange:e.handleChange},{default:t(()=>[o(n,{label:.3},{default:t(()=>[K]),_:1},8,["label"]),o(n,{label:1},{default:t(()=>[M]),_:1}),o(n,{label:3},{default:t(()=>[O]),_:1}),o(n,{label:5},{default:t(()=>[P]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),Q,o(d,null,{default:t(()=>[(m(!0),v(A,null,k(e.transitionList,(i,S)=>(m(),V(B,{key:S,span:6,class:"flex flex-col items-center justify-center mb-6"},{default:t(()=>[a("div",null,f(i),1),a("div",W,[o(E,{name:i,delay:e.delay},{default:t(()=>[X(a("div",Z,null,512),[[$,e.show]])]),_:2},1032,["name","delay"])])]),_:2},1024))),128))]),_:1})]),_:1})])}var _e=b(T,[["render",ee],["__scopeId","data-v-315900bc"]]);export{_e as default};
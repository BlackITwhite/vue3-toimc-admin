import{e as h,_ as E,o as n,j as d,w as l,b as u,P as $,cg as S,N as z,g as y,aN as T,c as r,H as b,I as k,G as C,a,t as _,k as j,cf as V,Z as M,as as P,m as L,q as R}from"./index.42c98f94.js";import{E as q}from"./el-card.dd0f8719.js";/* empty css                   */import{E as G}from"./index2.cf40d90e.js";import{E as H}from"./el-col.45ae0650.js";const U=h({name:"Notification",props:{value:{type:[String,Number],default:""},max:{type:Number,default:1/0},isDot:{type:Boolean,default:!1},type:{type:String,default:"danger"},size:{type:String,default:"28px"},icon:{type:String,default:"Bell"}},setup(){return{}}});function W(e,o,p,f,F,m){const t=$,s=S;return n(),d(s,{value:e.value,"is-dot":e.isDot,type:e.type||"danger",max:e.max},{default:l(()=>[u(t,{type:e.icon,size:e.size},null,8,["type","size"])]),_:1},8,["value","is-dot","type","max"])}var x=E(U,[["render",W]]);const Z=h({name:"NoticePad",props:{size:{type:String,default:"28px"},icon:{type:String,default:"Bell"},value:{type:[String,Number],default:""},max:{type:Number,default:1/0},isDot:{type:Boolean,default:!1},type:{type:String,default:"danger"},width:{type:Number,default:300},trigger:{type:String,default:"click"}},setup(){return{}}});function J(e,o,p,f,F,m){const t=x,s=G;return n(),d(s,{placement:"bottom",width:e.width,trigger:e.trigger,"popper-class":"toimc-custom-popper"},{reference:l(()=>[u(t,{size:e.size,icon:e.icon,value:e.value,max:e.max,"is-dot":e.isDot,type:e.type},null,8,["size","icon","value","max","is-dot","type"])]),default:l(()=>[z(e.$slots,"default")]),_:3},8,["width","trigger"])}var K=E(Z,[["render",J]]);const O=h({name:"MessageList",props:{lists:{type:Array,default:()=>[]},actions:{type:Array,default:()=>[]}},emits:["change","clickItem","clickAction"],setup(e,{emit:o}){return{activeName:y("\u901A\u77E5"),handleClick:(t,s)=>{o("change",{tab:t,event:s})},handleClickItem:(t,s)=>{o("clickItem",{item:t,index:s})},handleClickAction:(t,s)=>{o("clickAction",{item:t,index:s})}}}}),Q={key:0},X=["onClick"],Y={class:"text-base overflow-ellipsis"},ee={key:0,class:"text-sm text-gray-400 mb-2 line-clamp-2"},te={class:"text-sm text-gray-400"},ue={class:"flex justify-around actions cursor-pointer"},ae=["onClick"];function ne(e,o,p,f,F,m){const t=V,s=H,D=T,g=M,A=P,N=L,w=$,I=R;return n(),d(I,{modelValue:e.activeName,"onUpdate:modelValue":o[0]||(o[0]=c=>e.activeName=c),onTabClick:e.handleClick},{default:l(()=>[(n(!0),r(k,null,b(e.lists,(c,v)=>(n(),d(N,{key:v,label:c.title,name:c.title},{default:l(()=>[u(A,{"max-height":"300px"},{default:l(()=>[c.content?(n(),r("ul",Q,[(n(!0),r(k,null,b(c.content,(i,B)=>(n(),r("li",{key:B,class:"py-2 cursor-pointer hover:bg-blue-100",onClick:Ee=>e.handleClickItem(i,B)},[u(g,{justify:"center",align:"middle"},{default:l(()=>[u(s,{span:4,class:"flex justify-center"},{default:l(()=>[i.avatar?(n(),d(t,{key:0,size:"small",src:i.avatar},null,8,["src"])):C("",!0)]),_:2},1024),u(s,{span:20,class:"px-3"},{default:l(()=>[u(g,{class:"mb-2",align:"middle"},{default:l(()=>[a("div",Y,_(i.title),1),i.tag?(n(),d(D,{key:0,effect:"dark",size:"small",type:i.tagType,class:"ml-2"},{default:l(()=>[j(_(i.tag),1)]),_:2},1032,["type"])):C("",!0)]),_:2},1024),i.desc?(n(),r("div",ee,_(i.desc),1)):C("",!0),a("div",te,_(i.time),1)]),_:2},1024)]),_:2},1024)],8,X))),128))])):C("",!0)]),_:2},1024)]),_:2},1032,["label","name"]))),128)),a("div",ue,[(n(!0),r(k,null,b(e.actions,(c,v)=>(n(),r("div",{key:v,class:"action-item flex items-center flex-1 justify-center hover:bg-blue-100",onClick:i=>e.handleClickAction(c,v)},[c.icon?(n(),d(w,{key:0,type:c.icon,class:"mr-1",size:"18px"},null,8,["type"])):C("",!0),a("span",null,_(c.title),1)],8,ae))),128))])]),_:1},8,["modelValue","onTabClick"])}var se=E(O,[["render",ne],["__scopeId","data-v-3da880c4"]]);const le=h({setup(){const e=y([{title:"\u6E05\u7A7A",icon:"Delete"},{title:"\u66F4\u591A",icon:"More"}]),o=y([{title:"\u901A\u77E5",content:[{title:"\u6D88\u606F1",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33",desc:"\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..\u8FD9\u91CC\u662F\u63CF\u8FF0\u4FE1\u606F..",tag:"\u7D27\u6025",tagType:"danger"},{title:"\u6D88\u606F1",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33"},{title:"\u6D88\u606F1",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33"}]},{title:"\u5173\u6CE8",content:[{title:"\u6D88\u606F3",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33"},{title:"\u6D88\u606F3",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB93",time:"2022-01-01 14:55:33",tag:"\u901A\u77E5",tagType:"info"},{title:"\u6D88\u606F3",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33"}]},{title:"\u5F85\u529E",content:[{title:"\u6D88\u606F2",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33"},{title:"\u6D88\u606F2",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",time:"2022-01-01 14:55:33",tag:"\u901A\u77E5",tagType:"info"},{title:"\u6D88\u606F2",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",msg:"\u6D88\u606F\u5185\u5BB91",time:"2022-01-01 14:55:33"}]}]),p=y();return{actions:e,lists:o,clickItem:p,handleClick:(F,m)=>{p.value=F}}}}),oe={class:"p-4"},ce=a("div",{class:"py-4"},"\u9ED8\u8BA4\u60C5\u51B5\uFF1A",-1),ie=a("br",null,null,-1),re=a("div",{class:"py-4"},"\u5C0F\u7EA2\u70B9\uFF1A\u8BBE\u7F6Eis-dot\u5C5E\u6027",-1),pe=a("br",null,null,-1),de=a("div",{class:"py-4"},"max\u6700\u5927\u503C\uFF0Cvalue\u5FC5\u987B\u662FNumber",-1),Fe=a("br",null,null,-1),me=a("div",{class:"py-4"},"icon\u8BBE\u7F6E",-1),_e={class:"w-[400px] flex justify-between"},fe=a("br",null,null,-1),Ce=a("div",{class:"py-4"},"type\u8BBE\u7F6Ebadge\u4E2D\u7684\u5206\u7C7B\uFF1A",-1),ge={class:"w-[400px] flex justify-between"},ve=a("div",{class:"py-4"},"\u70B9\u51FB\u5F39\u51FA\u5C42\uFF1A",-1),ye={class:"w-[400px] flex justify-between"};function he(e,o,p,f,F,m){const t=x,s=se,D=K,g=q;return n(),r("div",oe,[u(g,{header:"\u901A\u77E5\u83DC\u5355"},{default:l(()=>[ce,u(t,{value:"1000"}),ie,re,u(t,{value:"1000","is-dot":""}),pe,de,u(t,{value:1e3,max:99}),Fe,me,a("div",_e,[u(t,{value:1e3,max:99,icon:"Message"}),u(t,{value:1e3,max:99,icon:"ChatRound"}),u(t,{value:1e3,max:99,icon:"Avatar"}),u(t,{value:1e3,max:99,icon:"ChatDotRound"}),u(t,{value:1e3,max:99,icon:"Warning"})]),fe,Ce,a("div",ge,[u(t,{value:1e3,max:99,type:"info"}),u(t,{value:1e3,max:99,type:"success"}),u(t,{value:1e3,max:99,type:"primary"}),u(t,{value:1e3,max:99,type:"danger"}),u(t,{value:1e3,max:99,type:"warning"})]),ve,a("div",ye,[u(D,{value:1e3,max:99,type:"info"},{default:l(()=>[u(s,{actions:e.actions,lists:e.lists,onClickItem:e.handleClick},null,8,["actions","lists","onClickItem"])]),_:1})]),a("div",null,_(e.clickItem),1)]),_:1})])}var xe=E(le,[["render",he]]);export{xe as default};

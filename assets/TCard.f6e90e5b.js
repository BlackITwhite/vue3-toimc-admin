import{e as _,bM as v,_ as w,o,c as i,b as t,R as b,w as a,a as p,t as k,S as l,F as d,C as n,a5 as $,a6 as z,j as m,T as B,P as E,U as I,aJ as T}from"./index.2df1a13d.js";import{E as j}from"./el-card.bc03c297.js";import{_ as N}from"./TransitionList.7bac8975.js";const P=_({props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},headerClass:{type:String,default:""},bodyClass:{type:String,default:""},footerClass:{type:String,default:""},collapse:{type:Boolean,default:!1},shadow:{type:String,default:"always"},size:{type:String,default:"default"},tips:{type:[String,Object],default:""},layout:{type:String,default:"default"},tipsIcon:{type:String,default:"ep:info-filled"}},setup(e,{slots:r}){const u=c=>{const s=r[c];return!!(s&&s())},[f,y]=v(!0);return{showSlots:u,isCollapse:f,toggle:y}}}),V={key:0,class:"flex items-center"},D={class:"mr-2"};function O(e,r,u,f,y,c){const s=I,g=T,h=N,C=j;return o(),i("div",{class:n([{"no-header":!!e.headerClass&&e.layout!=="default"},{["card-"+e.size]:e.size}])},[t(C,{shadow:e.shadow,"body-style":e.bodyClass?{padding:"unset"}:e.bodyStyle},b({default:a(()=>[t(h,{name:"Expand"},{default:a(()=>[$(p("div",{class:n(e.bodyClass)},[l(e.$slots,"default",{},void 0,!0)],2),[[z,e.isCollapse]])]),_:3}),e.showSlots("footer")?(o(),i("div",{key:0,class:n([e.footerClass,e.layout==="default"?"footer":""])},[l(e.$slots,"footer",{},void 0,!0)],2)):d("",!0)]),_:2},[e.showSlots("header")||e.header?{name:"header",fn:a(()=>[p("div",{class:n([e.headerClass,"header"])},[e.header?(o(),i("span",V,[p("span",D,k(e.header),1),e.tips?l(e.$slots,"tips",{key:0},()=>[typeof e.tips=="string"?(o(),m(g,{key:0,content:e.tips},{default:a(()=>[t(s,{icon:e.tipsIcon,class:"text-gray-400"},null,8,["icon"])]),_:1},8,["content"])):e.tips.content!==""?(o(),m(g,B(E({key:1},e.tips)),{default:a(()=>[t(s,{icon:e.tipsIcon,class:"text-gray-400"},null,8,["icon"])]),_:1},16)):d("",!0)],!0):d("",!0)])):l(e.$slots,"header",{key:1},void 0,!0),e.collapse?(o(),i("div",{key:2,onClick:r[0]||(r[0]=(...S)=>e.toggle&&e.toggle(...S))},[l(e.$slots,"collapse",{show:e.isCollapse},()=>[t(s,{icon:"ep:arrow-up",class:n(["rotate-icon",e.isCollapse&&"active"])},null,8,["class"])],!0)])):d("",!0)],2)])}:void 0]),1032,["shadow","body-style"])],2)}var R=w(P,[["render",O],["__scopeId","data-v-5066a638"]]);export{R as _};

import{e as S,bI as _,_ as w,o,c as i,b as t,I as b,w as a,a as p,t as k,J as l,g as m,T as $,K as z,B as d,z as n,aN as B,aQ as I,L as E,av as N}from"./index.ced000e2.js";import{E as T}from"./el-card.2c496b27.js";import{_ as V}from"./TransitionList.f397a221.js";const j=S({props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},headerClass:{type:String,default:""},bodyClass:{type:String,default:""},footerClass:{type:String,default:""},collapse:{type:Boolean,default:!1},shadow:{type:String,default:"always"},size:{type:String,default:"default"},tips:{type:[String,Object],default:""},layout:{type:String,default:"default"},tipsIcon:{type:String,default:"ep:info-filled"}},setup(e,{slots:r}){const u=c=>{const s=r[c];return!!(s&&s())},[f,y]=_(!0);return{showSlots:u,isCollapse:f,toggle:y}}}),D={key:0,class:"flex items-center"},O={class:"mr-2"};function P(e,r,u,f,y,c){const s=E,g=N,h=V,C=T;return o(),i("div",{class:n([{"no-header":!!e.headerClass&&e.layout!=="default"},{["card-"+e.size]:e.size}])},[t(C,{shadow:e.shadow,"body-style":e.bodyClass?{padding:"unset"}:e.bodyStyle},b({default:a(()=>[t(h,{name:"Expand"},{default:a(()=>[B(p("div",{class:n(e.bodyClass)},[l(e.$slots,"default",{},void 0,!0)],2),[[I,e.isCollapse]])]),_:3}),e.showSlots("footer")?(o(),i("div",{key:0,class:n([e.footerClass,e.layout==="default"?"footer":""])},[l(e.$slots,"footer",{},void 0,!0)],2)):d("",!0)]),_:2},[e.showSlots("header")||e.header?{name:"header",fn:a(()=>[p("div",{class:n([e.headerClass,"header"])},[e.header?(o(),i("span",D,[p("span",O,k(e.header),1),e.tips?l(e.$slots,"tips",{key:0},()=>[typeof e.tips=="string"?(o(),m(g,{key:0,content:e.tips},{default:a(()=>[t(s,{icon:e.tipsIcon,class:"text-gray-400"},null,8,["icon"])]),_:1},8,["content"])):e.tips.content!==""?(o(),m(g,$(z({key:1},e.tips)),{default:a(()=>[t(s,{icon:e.tipsIcon,class:"text-gray-400"},null,8,["icon"])]),_:1},16)):d("",!0)],!0):d("",!0)])):l(e.$slots,"header",{key:1},void 0,!0),e.collapse?(o(),i("div",{key:2,onClick:r[0]||(r[0]=(...v)=>e.toggle&&e.toggle(...v))},[l(e.$slots,"collapse",{show:e.isCollapse},()=>[t(s,{icon:"ep:arrow-up",class:n(["rotate-icon",e.isCollapse&&"active"])},null,8,["class"])],!0)])):d("",!0)],2)])}:void 0]),1032,["shadow","body-style"])],2)}var Q=w(j,[["render",P],["__scopeId","data-v-5066a638"]]);export{Q as _};
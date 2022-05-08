import{e as P,ak as j,v as T,f as $,G as B,al as O,y as H,o as r,c,J as g,z as n,m as R,b0 as U,a4 as X,a0 as q,an as F,aK as Q,x as l,X as Y,ab as Z,r as E,B as f,a as S,R as A,g as y,w as G,A as _,t as b,h as L,a2 as x,aW as ee}from"./index.033fa97f.js";const se=P({name:"ElSteps",props:{space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},alignCenter:{type:Boolean,default:!1},simple:{type:Boolean,default:!1},finishStatus:{type:String,default:"finish",validator:e=>["wait","process","finish","error","success"].includes(e)},processStatus:{type:String,default:"process",validator:e=>["wait","process","finish","error","success"].includes(e)}},emits:[j],setup(e,{emit:d}){const a=T("steps"),o=$([]);return B(o,()=>{o.value.forEach((i,s)=>{i.setIndex(s)})}),O("ElSteps",{props:e,steps:o}),B(()=>e.active,(i,s)=>{d(j,i,s)}),{steps:o,ns:a}}});function te(e,d,a,o,i,s){return r(),c("div",{class:n([e.ns.b(),e.ns.m(e.simple?"simple":e.direction)])},[g(e.$slots,"default")],2)}var ne=H(se,[["render",te],["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/index.vue"]]);const ae=P({name:"ElStep",components:{ElIcon:R,Close:U,Check:X},props:{title:{type:String,default:""},icon:{type:[String,Object],default:""},description:{type:String,default:""},status:{type:String,default:"",validator:e=>["","wait","process","finish","error","success"].includes(e)}},setup(e){const d=T("step"),a=$(-1),o=$({}),i=$(""),s=q("ElSteps"),p=Z();F(()=>{B([()=>s.props.active,()=>s.props.processStatus,()=>s.props.finishStatus],([t])=>{W(t)},{immediate:!0})}),Q(()=>{s.steps.value=s.steps.value.filter(t=>t.uid!==p.uid)});const h=l(()=>e.status||i.value),C=l(()=>{const t=s.steps.value[a.value-1];return t?t.currentStatus:"wait"}),N=l(()=>s.props.alignCenter),I=l(()=>s.props.direction==="vertical"),w=l(()=>s.props.simple),k=l(()=>s.steps.value.length),V=l(()=>{var t;return((t=s.steps.value[k.value-1])==null?void 0:t.uid)===p.uid}),v=l(()=>w.value?"":s.props.space),K=l(()=>{const t={flexBasis:typeof v.value=="number"?`${v.value}px`:v.value?v.value:`${100/(k.value-(N.value?0:1))}%`};return I.value||V.value&&(t.maxWidth=`${100/k.value}%`),t}),z=t=>{a.value=t},D=t=>{let u=100;const m={};m.transitionDelay=`${150*a.value}ms`,t===s.props.processStatus?u=0:t==="wait"&&(u=0,m.transitionDelay=`${-150*a.value}ms`),m.borderWidth=u&&!w.value?"1px":0,m[s.props.direction==="vertical"?"height":"width"]=`${u}%`,o.value=m},W=t=>{t>a.value?i.value=s.props.finishStatus:t===a.value&&C.value!=="error"?i.value=s.props.processStatus:i.value="wait";const u=s.steps.value[k.value-1];u&&u.calcProgress(i.value)},M=Y({uid:l(()=>p.uid),currentStatus:h,setIndex:z,calcProgress:D});return s.steps.value=[...s.steps.value,M],{ns:d,index:a,lineStyle:o,currentStatus:h,isCenter:N,isVertical:I,isSimple:w,isLast:V,space:v,style:K,parent:s,setIndex:z,calcProgress:D,updateStatus:W}}});function ie(e,d,a,o,i,s){const p=E("el-icon"),h=E("check"),C=E("close");return r(),c("div",{style:A(e.style),class:n([e.ns.b(),e.ns.is(e.isSimple?"simple":e.parent.props.direction),e.ns.is("flex",e.isLast&&!e.space&&!e.isCenter),e.ns.is("center",e.isCenter&&!e.isVertical&&!e.isSimple)])},[f(" icon & line "),S("div",{class:n([e.ns.e("head"),e.ns.is(e.currentStatus)])},[e.isSimple?f("v-if",!0):(r(),c("div",{key:0,class:n(e.ns.e("line"))},[S("i",{class:n(e.ns.e("line-inner")),style:A(e.lineStyle)},null,6)],2)),S("div",{class:n([e.ns.e("icon"),e.ns.is(e.icon?"icon":"text")])},[e.currentStatus!=="success"&&e.currentStatus!=="error"?g(e.$slots,"icon",{key:0},()=>[e.icon?(r(),y(p,{key:0,class:n(e.ns.e("icon-inner"))},{default:G(()=>[(r(),y(_(e.icon)))]),_:1},8,["class"])):f("v-if",!0),!e.icon&&!e.isSimple?(r(),c("div",{key:1,class:n(e.ns.e("icon-inner"))},b(e.index+1),3)):f("v-if",!0)]):(r(),y(p,{key:1,class:n([e.ns.e("icon-inner"),e.ns.is("status")])},{default:G(()=>[e.currentStatus==="success"?(r(),y(h,{key:0})):(r(),y(C,{key:1}))]),_:1},8,["class"]))],2)],2),f(" title & description "),S("div",{class:n(e.ns.e("main"))},[S("div",{class:n([e.ns.e("title"),e.ns.is(e.currentStatus)])},[g(e.$slots,"title",{},()=>[L(b(e.title),1)])],2),e.isSimple?(r(),c("div",{key:0,class:n(e.ns.e("arrow"))},null,2)):(r(),c("div",{key:1,class:n([e.ns.e("description"),e.ns.is(e.currentStatus)])},[g(e.$slots,"description",{},()=>[L(b(e.description),1)])],2))],2)],6)}var J=H(ae,[["render",ie],["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const le=x(ne,{Step:J}),oe=ee(J);export{oe as E,le as a};
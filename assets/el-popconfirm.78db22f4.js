import{Y as $,dF as B,bx as A,dG as _,Z as h,aA as g,e as z,E as w,av as F,m as I,aC as V,a9 as D,v as R,f as M,x as k,y as O,r as p,o as f,g as u,w as n,a as m,z as s,R as Z,A as q,B as b,h as d,t as y,b as P,J as G,K as J,aZ as K,a2 as L}from"./index.033fa97f.js";const Y=$({title:{type:String},confirmButtonText:{type:String},cancelButtonText:{type:String},confirmButtonType:{type:String,values:B,default:"primary"},cancelButtonType:{type:String,values:B,default:"text"},icon:{type:A,default:_},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},onConfirm:{type:h(Function)},onCancel:{type:h(Function)},teleported:g.teleported,persistent:g.persistent}),E="ElPopconfirm",j=z({name:E,components:{ElButton:w,ElTooltip:F,ElIcon:I},props:Y,setup(e){const{compatTeleported:C}=V(E,"appendToBody"),{t:r}=D(),T=R("popconfirm"),i=M(),v=()=>{var t,o;(o=(t=K(i))==null?void 0:t.onClose)==null||o.call(t)},a=()=>{v()},l=t=>{var o;(o=e.onConfirm)==null||o.call(e,t),a()},c=t=>{var o;(o=e.onCancel)==null||o.call(e,t),a()},N=k(()=>e.confirmButtonText||r("el.popconfirm.confirmButtonText")),S=k(()=>e.cancelButtonText||r("el.popconfirm.cancelButtonText"));return{finalConfirmButtonText:N,finalCancelButtonText:S,tooltipRef:i,ns:T,compatTeleported:C,confirm:l,cancel:c}}});function H(e,C,r,T,i,v){const a=p("el-icon"),l=p("el-button"),c=p("el-tooltip");return f(),u(c,J({ref:"tooltipRef"},e.$attrs,{trigger:"click",effect:"light","popper-class":`${e.ns.namespace.value}-popover`,teleported:e.compatTeleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:n(()=>[m("div",{class:s(e.ns.b())},[m("div",{class:s(e.ns.e("main"))},[!e.hideIcon&&e.icon?(f(),u(a,{key:0,class:s(e.ns.e("icon")),style:Z({color:e.iconColor})},{default:n(()=>[(f(),u(q(e.icon)))]),_:1},8,["class","style"])):b("v-if",!0),d(" "+y(e.title),1)],2),m("div",{class:s(e.ns.e("action"))},[P(l,{size:"small",type:e.cancelButtonType,onClick:e.cancel},{default:n(()=>[d(y(e.finalCancelButtonText),1)]),_:1},8,["type","onClick"]),P(l,{size:"small",type:e.confirmButtonType,onClick:e.confirm},{default:n(()=>[d(y(e.finalConfirmButtonText),1)]),_:1},8,["type","onClick"])],2)],2)]),default:n(()=>[e.$slots.reference?G(e.$slots,"reference",{key:0}):b("v-if",!0)]),_:3},16,["popper-class","teleported","hide-after","persistent"])}var Q=O(j,[["render",H],["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const W=L(Q);export{W as E};
var V=Object.defineProperty,$=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(l,t,a)=>t in l?V(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,C=(l,t)=>{for(var a in t||(t={}))z.call(t,a)&&h(l,a,t[a]);if(g)for(var a of g(t))F.call(t,a)&&h(l,a,t[a]);return l},B=(l,t)=>$(l,D(t));import{Y as J,cI as M,cJ as m,e as O,cK as P,b8 as K,v as R,f as Y,x as f,o as n,g as c,w as u,aO as Z,aR as j,a as S,aZ as e,m as w,z as i,A as q,B as r,c as p,J as E,h as T,t as d,b as G,F as H,bh as L,y as Q,a2 as U}from"./index.033fa97f.js";const W=["light","dark"],X=J({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:M(m),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:W,default:"light"}}),_={close:l=>l instanceof MouseEvent},x={name:"ElAlert"},ee=O(B(C({},x),{props:X,emits:_,setup(l,{emit:t}){const a=l,{Close:I}=P,y=K(),o=R("alert"),v=Y(!0),k=f(()=>m[a.type]||m.info),A=f(()=>a.description||{[o.is("big")]:y.default}),N=f(()=>a.description||{[o.is("bold")]:y.default}),b=s=>{v.value=!1,t("close",s)};return(s,te)=>(n(),c(L,{name:e(o).b("fade")},{default:u(()=>[Z(S("div",{class:i([e(o).b(),e(o).m(s.type),e(o).is("center",s.center),e(o).is(s.effect)]),role:"alert"},[s.showIcon&&e(k)?(n(),c(e(w),{key:0,class:i([e(o).e("icon"),e(A)])},{default:u(()=>[(n(),c(q(e(k))))]),_:1},8,["class"])):r("v-if",!0),S("div",{class:i(e(o).e("content"))},[s.title||s.$slots.title?(n(),p("span",{key:0,class:i([e(o).e("title"),e(N)])},[E(s.$slots,"title",{},()=>[T(d(s.title),1)])],2)):r("v-if",!0),s.$slots.default||s.description?(n(),p("p",{key:1,class:i(e(o).e("description"))},[E(s.$slots,"default",{},()=>[T(d(s.description),1)])],2)):r("v-if",!0),s.closable?(n(),p(H,{key:2},[s.closeText?(n(),p("div",{key:0,class:i([e(o).e("close-btn"),e(o).is("customed")]),onClick:b},d(s.closeText),3)):(n(),c(e(w),{key:1,class:i(e(o).e("close-btn")),onClick:b},{default:u(()=>[G(e(I))]),_:1},8,["class"]))],2112)):r("v-if",!0)],2)],2),[[j,v.value]])]),_:3},8,["name"]))}}));var se=Q(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const le=U(se);export{le as E};
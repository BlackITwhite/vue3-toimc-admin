var re=Object.defineProperty,ie=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var q=(e,n,o)=>n in e?re(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,P=(e,n)=>{for(var o in n||(n={}))de.call(n,o)&&q(e,o,n[o]);if(Z)for(var o of Z(n))ce.call(n,o)&&q(e,o,n[o]);return e},J=(e,n)=>ie(e,ue(n));import{H as N,cp as fe,e as me,cR as pe,E as ve,N as ge,bW as ye,n as Ce,cM as be,az as Ee,a9 as he,x as Be,f as M,c5 as Me,g as we,y,cL as Q,aE as ke,ap as w,an as Se,bB as Te,aJ as $e,cc as Ae,cS as Ve,as as ze,cT as Ie,cU as Pe,G as Le,z as Re,bV as Oe,r as k,aM as De,o as d,h as C,w as g,aN as L,aQ as U,b as S,a as m,c as b,A as u,B as Y,C as E,t as T,aO as R,a7 as O,K as Ne,S as x,i as _,bg as He,aq as Ke,bs as Ue,cV as D,by as je,ae as Fe,cW as ne,cb as ee,a3 as Ge}from"./index.fbf2fccb.js";import{u as We}from"./index2.54363448.js";const Xe=(e,n,o)=>{const r=a=>{o(a)&&a.stopImmediatePropagation()};let t;N(()=>e.value,a=>{a?t=fe(document,n,r,!0):t==null||t()},{immediate:!0})},Ze=me({name:"ElMessageBox",directives:{TrapFocus:pe},components:P({ElButton:ve,ElInput:ge,ElOverlay:ye,ElIcon:Ce},be),inheritAttrs:!1,props:{buttonSize:{type:String,validator:Ee},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{t:o}=he(),r=Be("message-box"),t=M(!1),{nextZIndex:a}=Me(),s=we({beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:a()}),c=y(()=>{const l=s.type;return{[r.bm("icon",l)]:l&&Q[l]}}),H=ke(y(()=>e.buttonSize),{prop:!0,form:!0,formItem:!0}),A=y(()=>s.icon||Q[s.type]||""),K=y(()=>!!s.message),V=M(),i=M(),z=M(),j=M(),se=y(()=>s.confirmButtonClass);N(()=>s.inputValue,async l=>{await w(),e.boxType==="prompt"&&l!==null&&G()},{immediate:!0}),N(()=>t.value,l=>{l&&((e.boxType==="alert"||e.boxType==="confirm")&&w().then(()=>{var f,v,X;(X=(v=(f=j.value)==null?void 0:f.$el)==null?void 0:v.focus)==null||X.call(v)}),s.zIndex=a()),e.boxType==="prompt"&&(l?w().then(()=>{z.value&&z.value.$el&&le().focus()}):(s.editorErrorMessage="",s.validateError=!1))});const oe=y(()=>e.draggable);We(V,i,oe),Se(async()=>{await w(),e.closeOnHashChange&&Te(window,"hashchange",B)}),$e(()=>{e.closeOnHashChange&&Ae(window,"hashchange",B)});function B(){!t.value||(t.value=!1,w(()=>{s.action&&n("action",s.action)}))}const F=()=>{e.closeOnClickModal&&I(s.distinguishCancelAndClose?"close":"cancel")},ae=Oe(F),te=l=>{if(s.inputType!=="textarea")return l.preventDefault(),I("confirm")},I=l=>{var f;e.boxType==="prompt"&&l==="confirm"&&!G()||(s.action=l,s.beforeClose?(f=s.beforeClose)==null||f.call(s,l,s,B):B())},G=()=>{if(e.boxType==="prompt"){const l=s.inputPattern;if(l&&!l.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||o("el.messagebox.error"),s.validateError=!0,!1;const f=s.inputValidator;if(typeof f=="function"){const v=f(s.inputValue);if(v===!1)return s.editorErrorMessage=s.inputErrorMessage||o("el.messagebox.error"),s.validateError=!0,!1;if(typeof v=="string")return s.editorErrorMessage=v,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},le=()=>{const l=z.value.$refs;return l.input||l.textarea},W=()=>{I("close")};return e.closeOnPressEscape?Ve({handleClose:W},t):Xe(t,"keydown",l=>l.code===ze.esc),e.lockScroll&&Ie(t),Pe(t),J(P({},Le(s)),{ns:r,overlayEvent:ae,visible:t,hasMessage:K,typeClass:c,btnSize:H,iconComponent:A,confirmButtonClasses:se,rootRef:V,headerRef:i,inputRef:z,confirmRef:j,doClose:B,handleClose:W,handleWrapperClick:F,handleInputEnter:te,handleAction:I,t:o})}}),qe=["aria-label"],Je={key:0},Qe=["innerHTML"];function Ye(e,n,o,r,t,a){const s=k("el-icon"),c=k("close"),H=k("el-input"),A=k("el-button"),K=k("el-overlay"),V=De("trap-focus");return d(),C(He,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=i=>e.$emit("vanish"))},{default:g(()=>[L(S(K,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:g(()=>[m("div",{class:u(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...i)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...i)),onMousedown:n[9]||(n[9]=(...i)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...i)),onMouseup:n[10]||(n[10]=(...i)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...i))},[L((d(),b("div",{ref:"rootRef",role:"dialog","aria-label":e.title||"dialog","aria-modal":"true",class:u([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:x(e.customStyle),onClick:n[7]||(n[7]=O(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(d(),b("div",{key:0,ref:"headerRef",class:u(e.ns.e("header"))},[m("div",{class:u(e.ns.e("title"))},[e.iconComponent&&e.center?(d(),C(s,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:g(()=>[(d(),C(Y(e.iconComponent)))]),_:1},8,["class"])):E("v-if",!0),m("span",null,T(e.title),1)],2),e.showClose?(d(),b("button",{key:0,type:"button",class:u(e.ns.e("headerbtn")),"aria-label":"Close",onClick:n[0]||(n[0]=i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=R(O(i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[S(s,{class:u(e.ns.e("close"))},{default:g(()=>[S(c)]),_:1},8,["class"])],34)):E("v-if",!0)],2)):E("v-if",!0),m("div",{class:u(e.ns.e("content"))},[m("div",{class:u(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(d(),C(s,{key:0,class:u([e.ns.e("status"),e.typeClass])},{default:g(()=>[(d(),C(Y(e.iconComponent)))]),_:1},8,["class"])):E("v-if",!0),e.hasMessage?(d(),b("div",{key:1,class:u(e.ns.e("message"))},[Ne(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(d(),b("p",{key:1,innerHTML:e.message},null,8,Qe)):(d(),b("p",Je,T(e.message),1))])],2)):E("v-if",!0)],2),L(m("div",{class:u(e.ns.e("input"))},[S(H,{ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=i=>e.inputValue=i),type:e.inputType,placeholder:e.inputPlaceholder,class:u({invalid:e.validateError}),onKeydown:R(e.handleInputEnter,["enter"])},null,8,["modelValue","type","placeholder","class","onKeydown"]),m("div",{class:u(e.ns.e("errormsg")),style:x({visibility:e.editorErrorMessage?"visible":"hidden"})},T(e.editorErrorMessage),7)],2),[[U,e.showInput]])],2),m("div",{class:u(e.ns.e("btns"))},[e.showCancelButton?(d(),C(A,{key:0,loading:e.cancelButtonLoading,class:u([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=i=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=R(O(i=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:g(()=>[_(T(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):E("v-if",!0),L(S(A,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:u([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=i=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=R(O(i=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:g(()=>[_(T(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[U,e.showConfirmButton]])],2)],14,qe)),[[V]])],34)]),_:3},8,["z-index","overlay-class","mask"]),[[U,e.visible]])]),_:3})}var xe=Re(Ze,[["render",Ye],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const $=new Map,_e=(e,n,o=null)=>{const r=Ge(xe,e);return r.appContext=o,ne(r,n),document.body.appendChild(n.firstElementChild),r.component},en=()=>document.createElement("div"),nn=(e,n)=>{const o=en();e.onVanish=()=>{ne(null,o),$.delete(t)},e.onAction=a=>{const s=$.get(t);let c;e.showInput?c={value:t.inputValue,action:a}:c=a,e.callback?e.callback(c,r.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?s.reject("close"):s.reject("cancel"):s.resolve(c)};const r=_e(e,o,n),t=r.proxy;for(const a in e)ee(e,a)&&!ee(t.$props,a)&&(t[a]=e[a]);return N(()=>t.message,(a,s)=>{D(a)?r.slots.default=()=>[a]:D(s)&&!D(a)&&delete r.slots.default},{immediate:!0}),t.visible=!0,t};function h(e,n=null){if(!Ke)return Promise.reject();let o;return Ue(e)||D(e)?e={message:e}:o=e.callback,new Promise((r,t)=>{const a=nn(e,n!=null?n:h._context);$.set(a,{options:e,callback:o,resolve:r,reject:t})})}const sn=["alert","confirm","prompt"],on={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};sn.forEach(e=>{h[e]=an(e)});function an(e){return(n,o,r,t)=>{let a;return je(o)?(r=o,a=""):Fe(o)?a="":a=o,h(Object.assign(P({title:a,message:n,type:""},on[e]),r,{boxType:e}),t)}}h.close=()=>{$.forEach((e,n)=>{n.doClose()}),$.clear()};h._context=null;const p=h;p.install=e=>{p._context=e._context,e.config.globalProperties.$msgbox=p,e.config.globalProperties.$messageBox=p,e.config.globalProperties.$alert=p.alert,e.config.globalProperties.$confirm=p.confirm,e.config.globalProperties.$prompt=p.prompt};const un=p;export{un as E};

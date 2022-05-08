var me=Object.defineProperty,ve=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Q=(s,n,t)=>n in s?me(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,F=(s,n)=>{for(var t in n||(n={}))ge.call(n,t)&&Q(s,t,n[t]);if(Z)for(var t of Z(n))he.call(n,t)&&Q(s,t,n[t]);return s},T=(s,n)=>ve(s,ye(n));import{aX as J,aY as be,Y as q,Z as m,$ as K,ah as E,e as H,a9 as ke,v as N,f as Y,o as g,g as P,w as R,c as S,C as Ee,z as y,aZ as a,aP as re,J as C,B as h,a as A,b as L,a_ as $e,m as O,t as x,a7 as D,R as Ce,a$ as Re,a4 as we,b0 as Ue,b1 as Se,b2 as Pe,F as Le,b3 as Fe,y as M,b4 as Te,a0 as _e,b5 as V,b6 as Oe,G as ee,aG as De,b7 as Be,b8 as je,b9 as Ae,x as te,aK as Ne,al as qe,ba as Ke,I as se,K as ae,a2 as He}from"./index.033fa97f.js";import{E as Me}from"./el-progress.0cd78f85.js";const ie=Symbol("uploadContextKey"),ze="ElUpload";class Ie extends Error{constructor(n,t,c,d){super(n),this.name="UploadAjaxError",this.status=t,this.method=c,this.url=d}}function oe(s,n,t){let c;return t.response?c=`${t.response.error||t.response}`:t.responseText?c=`${t.responseText}`:c=`fail to ${n.method} ${s} ${t.status}`,new Ie(c,t.status,n.method,s)}function Xe(s){const n=s.responseText||s.response;if(!n)return n;try{return JSON.parse(n)}catch{return n}}const We=s=>{typeof XMLHttpRequest=="undefined"&&J(ze,"XMLHttpRequest is undefined");const n=new XMLHttpRequest,t=s.action;n.upload&&n.upload.addEventListener("progress",i=>{const p=i;p.percent=i.total>0?i.loaded/i.total*100:0,s.onProgress(p)});const c=new FormData;if(s.data)for(const[i,p]of Object.entries(s.data))Array.isArray(p)?c.append(i,...p):c.append(i,p);c.append(s.filename,s.file,s.file.name),n.addEventListener("error",()=>{s.onError(oe(t,s,n))}),n.addEventListener("load",()=>{if(n.status<200||n.status>=300)return s.onError(oe(t,s,n));s.onSuccess(Xe(n))}),n.open(s.method,t,!0),s.withCredentials&&"withCredentials"in n&&(n.withCredentials=!0);const d=s.headers||{};if(d instanceof Headers)d.forEach((i,p)=>n.setRequestHeader(p,i));else for(const[i,p]of Object.entries(d))be(p)||n.setRequestHeader(i,String(p));return n.send(c),n},ue=["text","picture","picture-card"];let Ge=1;const de=()=>Date.now()+Ge++,ce=q({action:{type:String,default:"#"},headers:{type:m(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>K({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:m(Array),default:()=>K([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ue,default:"text"},httpRequest:{type:m(Function),default:We},disabled:Boolean,limit:Number}),Ve=q(T(F({},ce),{beforeUpload:{type:m(Function),default:E},beforeRemove:{type:m(Function)},onRemove:{type:m(Function),default:E},onChange:{type:m(Function),default:E},onPreview:{type:m(Function),default:E},onSuccess:{type:m(Function),default:E},onProgress:{type:m(Function),default:E},onError:{type:m(Function),default:E},onExceed:{type:m(Function),default:E}})),Je=q({files:{type:m(Array),default:()=>K([])},disabled:{type:Boolean,default:!1},handlePreview:{type:m(Function),default:E},listType:{type:String,values:ue,default:"text"}}),Ye={remove:s=>!!s},Ze=["onKeydown"],Qe=["src"],xe=["onClick"],et=["onClick"],tt=["onClick"],st={name:"ElUploadList"},at=H(T(F({},st),{props:Je,emits:Ye,setup(s,{emit:n}){const t=s,{t:c}=ke(),d=N("upload"),i=N("icon"),p=N("list"),w=Y(!1),U=r=>{t.handlePreview(r)},$=r=>{r.target.focus()},k=r=>{n("remove",r)};return(r,l)=>(g(),P(Fe,{tag:"ul",class:y([a(d).b("list"),a(d).bm("list",r.listType),a(d).is("disabled",r.disabled)]),name:a(p).b()},{default:R(()=>[(g(!0),S(Le,null,Ee(r.files,e=>(g(),S("li",{key:e.uid||e.name,class:y([a(d).be("list","item"),a(d).is(e.status),{focusing:w.value}]),tabindex:"0",onKeydown:re(o=>!r.disabled&&k(e),["delete"]),onFocus:l[0]||(l[0]=o=>w.value=!0),onBlur:l[1]||(l[1]=o=>w.value=!1),onClick:$},[C(r.$slots,"default",{file:e},()=>[r.listType==="picture"||e.status!=="uploading"&&r.listType==="picture-card"?(g(),S("img",{key:0,class:y(a(d).be("list","item-thumbnail")),src:e.url,alt:""},null,10,Qe)):h("v-if",!0),r.listType!=="picture"&&(e.status==="uploading"||r.listType!=="picture-card")?(g(),S("div",{key:1,class:y(a(d).be("list","item-info"))},[A("a",{class:y(a(d).be("list","item-name")),onClick:D(o=>U(e),["prevent"])},[L(a(O),{class:y(a(i).m("document"))},{default:R(()=>[L(a($e))]),_:1},8,["class"]),A("span",{class:y(a(d).be("list","item-file-name"))},x(e.name),3)],10,xe),e.status==="uploading"?(g(),P(a(Me),{key:0,type:r.listType==="picture-card"?"circle":"line","stroke-width":r.listType==="picture-card"?6:2,percentage:Number(e.percentage),style:Ce(r.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):h("v-if",!0)],2)):h("v-if",!0),A("label",{class:y(a(d).be("list","item-status-label"))},[r.listType==="text"?(g(),P(a(O),{key:0,class:y([a(i).m("upload-success"),a(i).m("circle-check")])},{default:R(()=>[L(a(Re))]),_:1},8,["class"])):["picture-card","picture"].includes(r.listType)?(g(),P(a(O),{key:1,class:y([a(i).m("upload-success"),a(i).m("check")])},{default:R(()=>[L(a(we))]),_:1},8,["class"])):h("v-if",!0)],2),r.disabled?h("v-if",!0):(g(),P(a(O),{key:2,class:y(a(i).m("close")),onClick:o=>k(e)},{default:R(()=>[L(a(Ue))]),_:2},1032,["class","onClick"])),h(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),h(" This is a bug which needs to be fixed "),h(" TODO: Fix the incorrect navigation interaction "),r.disabled?h("v-if",!0):(g(),S("i",{key:3,class:y(a(i).m("close-tip"))},x(a(c)("el.upload.deleteTip")),3)),r.listType==="picture-card"?(g(),S("span",{key:4,class:y(a(d).be("list","item-actions"))},[A("span",{class:y(a(d).be("list","item-preview")),onClick:o=>r.handlePreview(e)},[L(a(O),{class:y(a(i).m("zoom-in"))},{default:R(()=>[L(a(Se))]),_:1},8,["class"])],10,et),r.disabled?h("v-if",!0):(g(),S("span",{key:0,class:y(a(d).be("list","item-delete")),onClick:o=>k(e)},[L(a(O),{class:y(a(i).m("delete"))},{default:R(()=>[L(a(Pe))]),_:1},8,["class"])],10,tt))],2)):h("v-if",!0)])],42,Ze))),128)),C(r.$slots,"append")]),_:3},8,["class","name"]))}}));var ne=M(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ot=q({disabled:{type:Boolean,default:!1}}),nt={file:s=>Te(s)},lt=["onDrop","onDragover"],rt={name:"ElUploadDrag"},it=H(T(F({},rt),{props:ot,emits:nt,setup(s,{emit:n}){const t=s,c="ElUploadDrag",d=_e(ie);d||J(c,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=N("upload"),p=Y(!1),w=$=>{if(t.disabled)return;p.value=!1;const k=Array.from($.dataTransfer.files),r=d.accept.value;if(!r){n("file",k);return}const l=k.filter(e=>{const{type:o,name:f}=e,v=f.includes(".")?`.${f.split(".").pop()}`:"",u=o.replace(/\/.*$/,"");return r.split(",").map(b=>b.trim()).filter(b=>b).some(b=>b.startsWith(".")?v===b:/\/\*$/.test(b)?u===b.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(b)?o===b:!1)});n("file",l)},U=()=>{t.disabled||(p.value=!0)};return($,k)=>(g(),S("div",{class:y([a(i).b("dragger"),a(i).is("dragover",p.value)]),onDrop:D(w,["prevent"]),onDragover:D(U,["prevent"]),onDragleave:k[0]||(k[0]=D(r=>p.value=!1,["prevent"]))},[C($.$slots,"default")],42,lt))}}));var ut=M(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const dt=q(T(F({},ce),{fileList:{type:m(Array),default:()=>K([])},beforeUpload:{type:m(Function),default:E},onRemove:{type:m(Function),default:E},onStart:{type:m(Function),default:E},onSuccess:{type:m(Function),default:E},onProgress:{type:m(Function),default:E},onError:{type:m(Function),default:E},onExceed:{type:m(Function),default:E}})),ct=["onKeydown"],pt=["name","multiple","accept"],ft={name:"ElUploadContent",inheritAttrs:!1},mt=H(T(F({},ft),{props:dt,setup(s,{expose:n}){const t=s,c=N("upload"),d=V({}),i=V(),p=e=>{if(e.length===0)return;const{autoUpload:o,limit:f,fileList:v,multiple:u,onStart:b,onExceed:_}=t;if(f&&v.length+e.length>f){_(e,v);return}u||(e=e.slice(0,1));for(const z of e){const B=z;B.uid=de(),b(B),o&&w(B)}},w=async e=>{if(i.value.value="",!t.beforeUpload)return U(e);let o;try{o=await t.beforeUpload(e)}catch{o=!1}if(o===!1){t.onRemove(e);return}let f=e;if(o instanceof Blob){o instanceof File?f=o:f=new File([o],e.name,{type:e.type});for(const v of Object.keys(e))f[v]=e[v]}U(e)},U=e=>{const{headers:o,data:f,method:v,withCredentials:u,name:b,action:_,onProgress:z,onSuccess:B,onError:pe,httpRequest:fe}=t,{uid:I}=e,X={headers:o||{},withCredentials:u,file:e,data:f,method:v,filename:b,action:_,onProgress:j=>{z(j,e)},onSuccess:j=>{B(j,e),delete d.value[I]},onError:j=>{pe(j,e),delete d.value[I]}},W=fe(X);d.value[I]=W,W instanceof Promise&&W.then(X.onSuccess,X.onError)},$=e=>{const o=e.target.files;!o||p(Array.from(o))},k=()=>{t.disabled||(i.value.value="",i.value.click())},r=()=>{k()};return n({abort:e=>{Oe(d.value).filter(e?([f])=>String(e.uid)===f:()=>!0).forEach(([f,v])=>{v instanceof XMLHttpRequest&&v.abort(),delete d.value[f]})},upload:w}),(e,o)=>(g(),S("div",{class:y([a(c).b(),a(c).m(e.listType)]),tabindex:"0",onClick:k,onKeydown:re(D(r,["self"]),["enter","space"])},[e.drag?(g(),P(ut,{key:0,disabled:e.disabled,onFile:p},{default:R(()=>[C(e.$slots,"default")]),_:3},8,["disabled"])):C(e.$slots,"default",{key:1}),A("input",{ref_key:"inputRef",ref:i,class:y(a(c).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:$,onClick:o[0]||(o[0]=D(()=>{},["stop"]))},null,42,pt)],42,ct))}}));var le=M(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const G="ElUpload",vt=s=>{var n;(n=s.url)!=null&&n.startsWith("blob:")&&URL.revokeObjectURL(s.url)},yt=(s,n)=>{const t=Y([]),c=l=>t.value.find(e=>e.uid===l.uid);function d(l){var e;(e=n.value)==null||e.abort(l)}function i(l=["ready","uploading","success","fail"]){t.value=t.value.filter(e=>!l.includes(e.status))}const p=(l,e)=>{const o=c(e);!o||(o.status="fail",t.value.splice(t.value.indexOf(o),1),s.onError(l,o,t.value),s.onChange(o,t.value))},w=(l,e)=>{const o=c(e);!o||(s.onProgress(l,o,t.value),o.status="uploading",o.percentage=Math.round(l.percent))},U=(l,e)=>{const o=c(e);!o||(o.status="success",o.response=l,s.onSuccess(l,o,t.value),s.onChange(o,t.value))},$=l=>{const e={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(s.listType==="picture-card"||s.listType==="picture")try{e.url=URL.createObjectURL(l)}catch(o){De(G,o.message),s.onError(o,e,t.value)}t.value.push(e),s.onChange(e,t.value)},k=async(l,e)=>{e&&Be({scope:G,from:"handleRemove second argument",version:"2.2",replacement:"first argument `file`",ref:"https://element-plus.org/en-US/component/upload.html#methods"},!0);const o=e||l,f=o instanceof File?c(o):o;f||J(G,"file to be removed not found");const v=u=>{d(u);const b=t.value;b.splice(b.indexOf(u),1),s.onRemove(u,b),vt(u)};s.beforeRemove?await s.beforeRemove(f,t.value)!==!1&&v(f):v(f)};function r(){t.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var e;return l&&((e=n.value)==null?void 0:e.upload(l))})}return ee(()=>s.listType,l=>{l!=="picture-card"&&l!=="picture"||(t.value=t.value.map(e=>{const{raw:o,url:f}=e;if(!f&&o)try{e.url=URL.createObjectURL(o)}catch(v){s.onError(v,e,t.value)}return e}))}),ee(()=>s.fileList,l=>{for(const e of l)e.uid||(e.uid=de()),e.status||(e.status="success");t.value=l},{immediate:!0,deep:!0}),{abort:d,clearFiles:i,handleError:p,handleProgress:w,handleStart:$,handleSuccess:U,handleRemove:k,submit:r,uploadFiles:t}},gt={name:"ElUpload"},ht=H(T(F({},gt),{props:Ve,setup(s,{expose:n}){const t=s,c=je(),d=Ae(),i=V(),{abort:p,submit:w,clearFiles:U,uploadFiles:$,handleStart:k,handleError:r,handleRemove:l,handleSuccess:e,handleProgress:o}=yt(t,i),f=te(()=>t.listType==="picture-card"),v=te(()=>T(F({},t),{onStart:k,onProgress:o,onSuccess:e,onError:r,onRemove:l}));return Ne(()=>{$.value.forEach(({url:u})=>{u!=null&&u.startsWith("blob:")&&URL.revokeObjectURL(u)})}),qe(ie,{accept:Ke(t,"accept")}),n({abort:p,submit:w,clearFiles:U,handleStart:k,handleRemove:l}),(u,b)=>(g(),S("div",null,[a(f)&&u.showFileList?(g(),P(ne,{key:0,disabled:a(d),"list-type":u.listType,files:a($),"handle-preview":u.onPreview,onRemove:a(l)},se({append:R(()=>[u.listType==="picture-card"?(g(),P(le,ae({key:0,ref_key:"uploadRef",ref:i},a(v)),{default:R(()=>[a(c).trigger?C(u.$slots,"trigger",{key:0}):h("v-if",!0),!a(c).trigger&&a(c).default?C(u.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)):h("v-if",!0)]),_:2},[u.$slots.file?{name:"default",fn:R(({file:_})=>[C(u.$slots,"file",{file:_})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0),u.listType!=="picture-card"?(g(),P(le,ae({key:1,ref_key:"uploadRef",ref:i},a(v)),{default:R(()=>[a(c).trigger?C(u.$slots,"trigger",{key:0}):h("v-if",!0),!a(c).trigger&&a(c).default?C(u.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)):h("v-if",!0),u.$slots.trigger?C(u.$slots,"default",{key:2}):h("v-if",!0),C(u.$slots,"tip"),!a(f)&&u.showFileList?(g(),P(ne,{key:3,disabled:a(d),"list-type":u.listType,files:a($),"handle-preview":u.onPreview,onRemove:a(l)},se({_:2},[u.$slots.file?{name:"default",fn:R(({file:_})=>[C(u.$slots,"file",{file:_})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0)]))}}));var bt=M(ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Ct=He(bt);export{Ct as E};
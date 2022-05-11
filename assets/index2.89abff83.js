var ke=Object.defineProperty,Te=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var J=(e,s,t)=>s in e?ke(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,P=(e,s)=>{for(var t in s||(s={}))De.call(s,t)&&J(e,t,s[t]);if(G)for(var t of G(s))we.call(s,t)&&J(e,t,s[t]);return e},M=(e,s)=>Te(e,Ce(s));import{d as T}from"./date-utils2.86fb6acb.js";import{T as Re,b as ye,g as Ae,c as Pe,t as Me,d as Ve,D as Ee,C as Oe}from"./index2.d969e219.js";import{e as Y,a9 as Be,v as Q,x as v,f as E,a0 as He,y as $e,as as S,bA as N,r as Ne,o as Fe,c as Ie,a as g,z as b,t as V,b as W,B as Ue,al as Ke,a3 as X}from"./index.2c27ed2b.js";const k=(e,s)=>{const t=[];for(let d=e;d<=s;d++)t.push(d);return t},je=Y({components:{TimeSpinner:Re},props:{visible:Boolean,actualVisible:Boolean,parsedValue:{type:[Array]},format:{type:String,default:""}},emits:["pick","select-range","set-picker-option"],setup(e,s){const{t,lang:d}=Be(),D=Q("time"),w=Q("picker"),i=v(()=>e.parsedValue[0]),u=v(()=>e.parsedValue[1]),C=ye(e),Z=()=>{s.emit("pick",C.value,!1)},R=v(()=>e.format.includes("ss")),_=v(()=>e.format.includes("A")?"A":e.format.includes("a")?"a":""),x=E([]),ee=E([]),ne=(n=!1)=>{s.emit("pick",[i.value,u.value],n)},ae=n=>{F(n.millisecond(0),u.value)},se=n=>{F(i.value,n.millisecond(0))},oe=n=>{const a=n.map(r=>T(r).locale(d.value)),o=j(a);return a[0].isSame(o[0])&&a[1].isSame(o[1])},F=(n,a)=>{s.emit("pick",[n,a],!0)},te=v(()=>i.value>u.value),y=E([0,2]),ie=(n,a)=>{s.emit("select-range",n,a,"min"),y.value=[n,a]},B=v(()=>R.value?11:8),le=(n,a)=>{s.emit("select-range",n,a,"max"),y.value=[n+B.value,a+B.value]},re=n=>{const a=R.value?[0,3,6,11,14,17]:[0,3,8,11],o=["hours","minutes"].concat(R.value?["seconds"]:[]),c=(a.indexOf(y.value[0])+n+a.length)%a.length,l=a.length/2;c<l?A.start_emitSelectRange(o[c]):A.end_emitSelectRange(o[c-l])},ce=n=>{const a=n.code;if(a===S.left||a===S.right){const o=a===S.left?-1:1;re(o),n.preventDefault();return}if(a===S.up||a===S.down){const o=a===S.up?-1:1,r=y.value[0]<B.value?"start":"end";A[`${r}_scrollDown`](o),n.preventDefault();return}},I=(n,a)=>{const o=z?z(n):[],r=n==="start",l=(a||(r?u.value:i.value)).hour(),p=r?k(l+1,23):k(0,l-1);return N(o,p)},U=(n,a,o)=>{const r=L?L(n,a):[],c=a==="start",l=o||(c?u.value:i.value),p=l.hour();if(n!==p)return r;const f=l.minute(),m=c?k(f+1,59):k(0,f-1);return N(r,m)},K=(n,a,o,r)=>{const c=q?q(n,a,o):[],l=o==="start",p=r||(l?u.value:i.value),f=p.hour(),m=p.minute();if(n!==f||a!==m)return c;const h=p.second(),$=l?k(h+1,59):k(0,h-1);return N(c,$)},j=n=>n.map((a,o)=>pe(n[0],n[1],o===0?"start":"end")),{getAvailableHours:de,getAvailableMinutes:me,getAvailableSeconds:ue}=Ae(I,U,K),pe=(n,a,o)=>{const r={hour:de,minute:me,second:ue},c=o==="start";let l=c?n:a;const p=c?a:n;return["hour","minute","second"].forEach(f=>{if(r[f]){let m;const h=r[f];if(f==="minute"?m=h(l.hour(),o,p):f==="second"?m=h(l.hour(),l.minute(),o,p):m=h(o,p),m&&m.length&&!m.includes(l[f]())){const $=c?0:m.length-1;l=l[f](m[$])}}}),l},fe=n=>n?Array.isArray(n)?n.map(a=>T(a,e.format).locale(d.value)):T(n,e.format).locale(d.value):null,be=n=>n?Array.isArray(n)?n.map(a=>a.format(e.format)):n.format(e.format):null,ge=()=>{if(Array.isArray(H))return H.map(a=>T(a).locale(d.value));const n=T(H).locale(d.value);return[n,n.add(60,"m")]};s.emit("set-picker-option",["formatToString",be]),s.emit("set-picker-option",["parseUserInput",fe]),s.emit("set-picker-option",["isValidValue",oe]),s.emit("set-picker-option",["handleKeydown",ce]),s.emit("set-picker-option",["getDefaultValue",ge]),s.emit("set-picker-option",["getRangeAvailableTime",j]);const A={},he=n=>{A[n[0]]=n[1]},ve=He("EP_PICKER_BASE"),{arrowControl:Se,disabledHours:z,disabledMinutes:L,disabledSeconds:q,defaultValue:H}=ve.props;return{nsTime:D,nsPicker:w,arrowControl:Se,onSetOption:he,setMaxSelectionRange:le,setMinSelectionRange:ie,btnConfirmDisabled:te,handleCancel:Z,handleConfirm:ne,t,showSeconds:R,minDate:i,maxDate:u,amPmMode:_,handleMinChange:ae,handleMaxChange:se,minSelectableRange:x,maxSelectableRange:ee,disabledHours_:I,disabledMinutes_:U,disabledSeconds_:K}}}),ze=["disabled"];function Le(e,s,t,d,D,w){const i=Ne("time-spinner");return e.actualVisible?(Fe(),Ie("div",{key:0,class:b([e.nsTime.b("range-picker"),e.nsPicker.b("panel")])},[g("div",{class:b(e.nsTime.be("range-picker","content"))},[g("div",{class:b(e.nsTime.be("range-picker","cell"))},[g("div",{class:b(e.nsTime.be("range-picker","header"))},V(e.t("el.datepicker.startTime")),3),g("div",{class:b([e.nsTime.be("range-picker","body"),e.nsTime.be("panel","content"),e.nsTime.is("arrow",e.arrowControl),{"has-seconds":e.showSeconds}])},[W(i,{ref:"minSpinner",role:"start","show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"arrow-control":e.arrowControl,"spinner-date":e.minDate,"disabled-hours":e.disabledHours_,"disabled-minutes":e.disabledMinutes_,"disabled-seconds":e.disabledSeconds_,onChange:e.handleMinChange,onSetOption:e.onSetOption,onSelectRange:e.setMinSelectionRange},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2)],2),g("div",{class:b(e.nsTime.be("range-picker","cell"))},[g("div",{class:b(e.nsTime.be("range-picker","header"))},V(e.t("el.datepicker.endTime")),3),g("div",{class:b([e.nsTime.be("range-picker","body"),e.nsTime.be("panel","content"),e.nsTime.is("arrow",e.arrowControl),{"has-seconds":e.showSeconds}])},[W(i,{ref:"maxSpinner",role:"end","show-seconds":e.showSeconds,"am-pm-mode":e.amPmMode,"arrow-control":e.arrowControl,"spinner-date":e.maxDate,"disabled-hours":e.disabledHours_,"disabled-minutes":e.disabledMinutes_,"disabled-seconds":e.disabledSeconds_,onChange:e.handleMaxChange,onSetOption:e.onSetOption,onSelectRange:e.setMaxSelectionRange},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onChange","onSetOption","onSelectRange"])],2)],2)],2),g("div",{class:b(e.nsTime.be("panel","footer"))},[g("button",{type:"button",class:b([e.nsTime.be("panel","btn"),"cancel"]),onClick:s[0]||(s[0]=u=>e.handleCancel())},V(e.t("el.datepicker.cancel")),3),g("button",{type:"button",class:b([e.nsTime.be("panel","btn"),"confirm"]),disabled:e.btnConfirmDisabled,onClick:s[1]||(s[1]=u=>e.handleConfirm())},V(e.t("el.datepicker.confirm")),11,ze)],2)],2)):Ue("v-if",!0)}var qe=$e(je,[["render",Le],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);T.extend(Pe);var Ge=Y({name:"ElTimePicker",install:null,props:M(P({},Me),{isRange:{type:Boolean,default:!1}}),emits:["update:modelValue"],setup(e,s){const t=E(null),d=e.isRange?"timerange":"time",D=e.isRange?qe:Ve,w=M(P({},e),{focus:()=>{var i;(i=t.value)==null||i.handleFocus()},blur:()=>{var i;(i=t.value)==null||i.handleBlur()}});return Ke("ElPopperOptions",e.popperOptions),s.expose(w),()=>{var i;const u=(i=e.format)!=null?i:Ee;return X(Oe,M(P({},e),{format:u,type:d,ref:t,"onUpdate:modelValue":C=>s.emit("update:modelValue",C)}),{default:C=>X(D,C)})}}});const O=Ge;O.install=e=>{e.component(O.name,O)};const Ye=O;export{Ye as E};
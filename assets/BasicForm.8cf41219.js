var ee=Object.defineProperty;var L=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var q=(e,n,t)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,H=(e,n)=>{for(var t in n||(n={}))le.call(n,t)&&q(e,t,n[t]);if(L)for(var t of L(n))oe.call(n,t)&&q(e,t,n[t]);return e};import{e as Q,s as G,v as ne,x as ae,y as te,z as se,g as j,A as E,B as re,r as R,o as r,j as i,w as p,C as V,D as $,F as T,c as C,G as F,H as B,I as ue,J as pe,K as de,L as ce,M as J,N as ie,_ as fe,b as N,O as me,t as w,P as y,Q as z,k as O,R as P,S as m,T as M,a as be,l as ve,U as ye,V as ge,W as ke,X as Se}from"./index.2df1a13d.js";import{E as he}from"./el-col.d22f51bd.js";import{E as X,a as Ee}from"./el-cascader-panel.06daf23a.js";import{E as Ve,a as $e,b as Te}from"./el-checkbox.32c0f1bc.js";/* empty css                 */import{E as Y}from"./el-upload.c30a4dca.js";import"./el-progress.3252af20.js";import{_ as Ce}from"./TInput.29dfea1e.js";import{c as Fe,a as Ie,E as we}from"./index2.f47abd64.js";import{E as Be}from"./index2.06beec8a.js";import{E as Ue,a as _e,b as Ne}from"./index2.d30758d7.js";import{E as ze}from"./index2.0d56e431.js";import{E as Oe}from"./index2.ebd4653c.js";import{E as Pe}from"./index2.fdf5cd19.js";import{d as Z}from"./dayjs.min.d8299382.js";Z.extend(Fe);const{Option:je}=G,g=e=>{const n=(e||"").split(":");if(n.length>=2){let t=Number.parseInt(n[0],10);const u=Number.parseInt(n[1],10),d=e.toUpperCase();return d.includes("AM")&&t===12?t=0:d.includes("PM")&&t!==12&&(t+=12),{hours:t,minutes:u}}return null},A=(e,n)=>{const t=g(e),u=g(n),d=t.minutes+t.hours*60,f=u.minutes+u.hours*60;return d===f?0:d>f?1:-1},K=e=>`${e}`.padStart(2,"0"),I=e=>`${K(e.hours)}:${K(e.minutes)}`,De=(e,n)=>{const t=g(e),u=g(n),d={hours:t.hours,minutes:t.minutes};return d.minutes+=u.minutes,d.hours+=u.hours,d.hours+=Math.floor(d.minutes/60),d.minutes=d.minutes%60,I(d)},He=Q({name:"ElTimeSelect",components:{ElSelect:G,ElOption:je,ElIcon:ne},model:{prop:"value",event:"change"},props:{format:{type:String,default:"HH:mm"},modelValue:String,disabled:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},effect:{type:String,default:"light"},clearable:{type:Boolean,default:!0},size:{type:String,values:ae,default:""},placeholder:{type:String,default:""},start:{type:String,default:"09:00"},end:{type:String,default:"18:00"},step:{type:String,default:"00:30"},minTime:{type:String,default:""},maxTime:{type:String,default:""},name:{type:String,default:""},prefixIcon:{type:[String,Object],default:Ie},clearIcon:{type:[String,Object],default:te}},emits:["change","blur","focus","update:modelValue"],setup(e){const n=se("input"),t=j(null),u=E(()=>e.modelValue),d=E(()=>{const o=g(e.start);return I(o)}),f=E(()=>{const o=g(e.end);return I(o)}),k=E(()=>{const o=g(e.step);return I(o)}),b=E(()=>{const o=g(e.minTime);return o?I(o):null}),S=E(()=>{const o=g(e.maxTime);return o?I(o):null}),c=E(()=>{const o=[];if(e.start&&e.end&&e.step){let a=d.value,h;for(;A(a,f.value)<=0;)h=Z(a,"HH:mm").format(e.format),o.push({value:h,disabled:A(a,b.value||"-1:-1")<=0||A(a,S.value||"100:100")>=0}),a=De(a,k.value)}return o});return{nsInput:n,select:t,value:u,items:c,blur:()=>{var o,a;(a=(o=t.value)==null?void 0:o.blur)==null||a.call(o)},focus:()=>{var o,a;(a=(o=t.value)==null?void 0:o.focus)==null||a.call(o)}}}});function Re(e,n,t,u,d,f){const k=R("el-option"),b=R("el-icon"),S=R("el-select");return r(),i(S,{ref:"select","model-value":e.value,disabled:e.disabled,clearable:e.clearable,"clear-icon":e.clearIcon,size:e.size,effect:e.effect,placeholder:e.placeholder,"default-first-option":"",filterable:e.editable,"onUpdate:modelValue":n[0]||(n[0]=c=>e.$emit("update:modelValue",c)),onChange:n[1]||(n[1]=c=>e.$emit("change",c)),onBlur:n[2]||(n[2]=c=>e.$emit("blur",c)),onFocus:n[3]||(n[3]=c=>e.$emit("focus",c))},{prefix:p(()=>[e.prefixIcon?(r(),i(b,{key:0,class:V(e.nsInput.e("prefix-icon"))},{default:p(()=>[(r(),i($(e.prefixIcon)))]),_:1},8,["class"])):T("v-if",!0)]),default:p(()=>[(r(!0),C(B,null,F(e.items,c=>(r(),i(k,{key:c.value,label:c.value,value:c.value,disabled:c.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["model-value","disabled","clearable","clear-icon","size","effect","placeholder","filterable"])}var D=re(He,[["render",Re],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-select/src/time-select.vue"]]);D.install=e=>{e.component(D.name,D)};const Me=D,Ae=Me;var Ge=Q({name:"DForm",components:{ElInput:ue,ElCascader:X,ElCheckbox:Ve,ElCheckboxGroup:$e,ElCheckboxButton:Te,ElColorPicker:pe,ElDatePicker:we,ElInputNumber:Be,ElRadio:Ue,ElRadioButton:_e,ElRate:ze,ElRadioGroup:Ne,ElSelect:G,ElOption:de,ElSlider:Oe,ElSwitch:ce,ElTimePicker:Pe,ElTimeSelect:Ae,ElTransfer:Ee,ElUpload:Y},props:{schemas:{type:Array,default:()=>[],required:!0},labelWidth:{type:String,default:"80px"},action:{type:Boolean,default:!0},inline:{type:Boolean,default:!1},actionClass:{type:String,default:""},submitText:{type:String,default:"\u63D0\u4EA4"},cancelText:{type:String,default:"\u91CD\u7F6E"}},emits:["change","submit","reset","error"],setup(e,{emit:n,expose:t}){const u=j(),d=j(H({},J(e.schemas.reduce((o,a)=>(o[a.prop]=a.rules,o),{})))),f=j(H({},J(e.schemas.reduce((o,a)=>(o[a.prop]=a.value,o),{}))));ie(()=>f,()=>{n("change",f.value)},{deep:!0});const k=()=>{!u.value||u.value.validate(o=>{if(o)n("submit",f.value);else return n("error",f.value),!1})},b=()=>{!u.value||(u.value.resetFields(),n("reset",f.value))},S=o=>!!o&&typeof o!="string"&&!!o.length&&o.length>0,c=o=>typeof(o==null?void 0:o.itemSlot)=="string"&&(o==null?void 0:o.itemSlot)||"defalut",U=o=>{let a=[];return typeof(o==null?void 0:o.itemSlot)=="object"&&(a=Object.keys(o.itemSlot)),a},_=o=>{const a=["cascader","checkbox","checkbox-group","checkbox-button","color-picker","date-picker","input","input-number","radio","radio-group","radio-button","rate","select","option","slider","switch","time-picker","time-select","transfer","upload","editor"];return!!(typeof o.component=="string"&&a.includes(o.component))};return t({validate:async function(o){var a;return(a=u.value)==null?void 0:a.validate(o)},validateField:function(o,a){var h;return(h=u.value)==null?void 0:h.validateField(o,a)},clearValidate:function(o){var a;return(a=u.value)==null?void 0:a.clearValidate(o)},scrollToField:function(o){var a;return(a=u.value)==null?void 0:a.scrollToField(o)}}),{model:f,rules:d,form:u,submitForm:k,resetForm:b,resetFields:b,showSlot:S,getSlotName:c,getSlotItemNames:U,isElemComp:_,getFieldsValue:()=>f.value,getFieldValue:o=>f.value[o]||void 0}}});function We(e,n,t,u,d,f){const k=Ce,b=ve,S=ye,c=Y,U=X,_=ge,o=he,a=ke,h=Se;return e.model?(r(),i(h,y({key:0,ref:"form","label-width":e.labelWidth,"validate-on-rule-change":!1,model:e.model,rules:e.rules,inline:e.inline},e.$attrs),{default:p(()=>[N(a,null,{default:p(()=>[(r(!0),C(B,null,F(e.schemas,(l,x)=>(r(),i(o,{key:x,span:e.inline?(l==null?void 0:l.span)||-1:24},{default:p(()=>[N(_,{modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=s=>e.model=s),prop:l.prop,label:l.label,class:V(l.class)},{default:p(()=>[l.component==="innerText"?(r(),C("div",{key:0,class:V(l.class),style:me(l.style)},w(l.value||e.model[l.prop]),7)):typeof l.component=="object"||!e.isElemComp(l)?(r(),i($(l.component),y({key:1},l.attrs,z(l.events||{})),null,16)):typeof l.component=="string"&&e.isElemComp(l)&&["radio-group","checkbox-group"].includes(l.component)?(r(),i($("el-"+l.component),y({key:2,modelValue:e.model[l.prop],"onUpdate:modelValue":s=>e.model[l.prop]=s},l.attrs,z(l.events||{})),{default:p(()=>[(r(!0),C(B,null,F(l.children,(s,v)=>(r(),i($("el-"+s.component),{key:v,label:s.value},{default:p(()=>[O(w(s.label),1)]),_:2},1032,["label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):l.component==="input"?(r(),i(k,y({key:3,modelValue:e.model[l.prop],"onUpdate:modelValue":s=>e.model[l.prop]=s},l.attrs,z(l.events||{})),P({_:2},[F(e.getSlotItemNames(l),(s,v)=>({name:s,fn:p(()=>[l.itemSlot&&l.itemSlot[s]?m(e.$slots,l.itemSlot[s],{key:v}):T("",!0)])}))]),1040,["modelValue","onUpdate:modelValue"])):l.component==="upload"?(r(),i(c,M(y({key:4},l==null?void 0:l.upload)),P({default:p(()=>[m(e.$slots,l.slot?l.slot+"-trigger":"trigger"),m(e.$slots,l.slot?l.slot+"tip":"tip"),m(e.$slots,l.slot?l.slot+"file":"file")]),_:2},[l.upload&&l.upload.type?{name:"trigger",fn:p(()=>{var s,v,W;return[((s=l.upload)==null?void 0:s.type)==="button"?(r(),i(b,{key:0,type:l.upload.btnType||"primary",class:V(l.upload.class)},{default:p(()=>[m(e.$slots,l.slot?l.slot+"prefix":"prefix"),m(e.$slots,"default",{},()=>[O(w(l.upload.text),1)]),m(e.$slots,l.slot?l.slot+"suffix":"suffix")]),_:2},1032,["type","class"])):(r(),i(S,{key:1,icon:((v=l.upload)==null?void 0:v.icon)||"ep:upload",class:V((W=l.upload)==null?void 0:W.class)},null,8,["icon","class"]))]})}:void 0]),1040)):l.component==="cascader"?(r(),i(U,y({key:5},l.attrs,{modelValue:e.model[l.prop],"onUpdate:modelValue":s=>e.model[l.prop]=s,label:l.label}),P({_:2},[l.slot?{name:"default",fn:p(({data:s})=>[e.showSlot(l.slot)?m(e.$slots,l.slot&&(l==null?void 0:l.slot[0]),M(y({key:0},s))):m(e.$slots,l.slot,M(y({key:1},s)))])}:void 0]),1040,["modelValue","onUpdate:modelValue","label"])):(r(),i($("el-"+l.component),y({key:6,modelValue:e.model[l.prop],"onUpdate:modelValue":s=>e.model[l.prop]=s},l.attrs,z(l.events||{})),P({_:2},[l.children&&l.children.length?{name:"default",fn:p(()=>[(r(!0),C(B,null,F(l.children,(s,v)=>(r(),i($("el-"+s.component),y({key:v,label:s.label,value:s.value},l.attrs),null,16,["label","value"]))),128))])}:e.showSlot(l.slot)?{name:"default",fn:p(()=>[(r(!0),C(B,null,F(l.slot,(s,v)=>m(e.$slots,s,{key:v,scope:e.$scope})),128))])}:l.itemSlot?{name:e.getSlotName(l),fn:p(()=>[l.slot?m(e.$slots,l.slot,{key:0}):T("",!0)])}:{name:"default",fn:p(()=>[l.slot?m(e.$slots,l.slot,{key:0}):T("",!0)])}]),1040,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["modelValue","prop","label","class"])]),_:2},1032,["span"]))),128))]),_:3}),e.action?m(e.$slots,"action",{key:0,form:e.form,model:e.model,validate:e.form&&e.form.validate},()=>[be("div",{class:V(e.actionClass)},[N(b,{type:"primary",onClick:e.submitForm},{default:p(()=>[O(w(e.submitText),1)]),_:1},8,["onClick"]),N(b,{onClick:e.resetForm},{default:p(()=>[O(w(e.cancelText),1)]),_:1},8,["onClick"])],2)]):T("",!0)]),_:3},16,["label-width","model","rules","inline"])):T("",!0)}var rl=fe(Ge,[["render",We]]);export{rl as _};

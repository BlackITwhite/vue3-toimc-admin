var Y=Object.defineProperty,Z=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var N=(e,a,l)=>a in e?Y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,L=(e,a)=>{for(var l in a||(a={}))_.call(a,l)&&N(e,l,a[l]);if(w)for(var l of w(a))ee.call(a,l)&&N(e,l,a[l]);return e},A=(e,a)=>Z(e,x(a));import{az as O,a0 as $,aC as ae,aD as le,x as f,aT as U,f as G,aj as y,aE as B,aU as ne,ap as M,G as R,aF as j,ab as P,e as z,v as D,y as E,o as h,g as oe,w as se,a as T,z as c,aN as S,aV as I,c as k,J as F,F as te,h as K,t as W,B as V,A as ie,R as ue,al as re,D as de,a3 as be,a2 as me,aW as J}from"./index.2c27ed2b.js";const ve={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:{type:String,validator:O},id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},q={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:{type:String,validator:O},tabindex:[String,Number]},C=()=>{const e=$(ae,{}),a=$(le,{}),l=$("CheckboxGroup",{}),t=f(()=>l&&(l==null?void 0:l.name)==="ElCheckboxGroup"),i=f(()=>a.size);return{isGroup:t,checkboxGroup:l,elForm:e,elFormItemSize:i,elFormItem:a}},ce=(e,{elFormItem:a})=>{const{inputId:l,isLabeledByFormItem:t}=U(e,{formItemContext:a});return{isLabeledByFormItem:t,groupId:l}},fe=e=>{const a=G(!1),{emit:l}=P(),{isGroup:t,checkboxGroup:i,elFormItem:r}=C(),n=G(!1);return{model:f({get(){var s,u;return t.value?(s=i.modelValue)==null?void 0:s.value:(u=e.modelValue)!=null?u:a.value},set(s){var u;t.value&&Array.isArray(s)?(n.value=i.max!==void 0&&s.length>i.max.value,n.value===!1&&((u=i==null?void 0:i.changeEvent)==null||u.call(i,s))):(l(y,s),a.value=s)}}),isGroup:t,isLimitExceeded:n,elFormItem:r}},he=(e,a,{model:l})=>{const{isGroup:t,checkboxGroup:i}=C(),r=G(!1),n=B(i==null?void 0:i.checkboxGroupSize,{prop:!0}),m=f(()=>{const o=l.value;return ne(o)==="[object Boolean]"?o:Array.isArray(o)?o.includes(e.label):o!=null?o===e.trueLabel:!!o}),s=B(f(()=>{var o;return t.value?(o=i==null?void 0:i.checkboxGroupSize)==null?void 0:o.value:void 0})),u=f(()=>!!(a.default||e.label));return{isChecked:m,focus:r,size:n,checkboxSize:s,hasOwnLabel:u}},ke=(e,{model:a,isChecked:l})=>{const{elForm:t,isGroup:i,checkboxGroup:r}=C(),n=f(()=>{var s,u;const o=(s=r.max)==null?void 0:s.value,v=(u=r.min)==null?void 0:u.value;return!!(o||v)&&a.value.length>=o&&!l.value||a.value.length<=v&&l.value});return{isDisabled:f(()=>{var s,u;const o=e.disabled||(t==null?void 0:t.disabled);return(u=i.value?((s=r.disabled)==null?void 0:s.value)||o||n.value:o)!=null?u:!1}),isLimitDisabled:n}},pe=(e,{model:a})=>{function l(){Array.isArray(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&l()},ge=(e,{model:a,isLimitExceeded:l,hasOwnLabel:t,isDisabled:i,isLabeledByFormItem:r})=>{const{elFormItem:n}=C(),{emit:m}=P();function s(d){var b,p;return d===e.trueLabel||d===!0?(b=e.trueLabel)!=null?b:!0:(p=e.falseLabel)!=null?p:!1}function u(d,b){m("change",s(d),b)}function o(d){if(l.value)return;const b=d.target;m("change",s(b.checked),d)}async function v(d){l.value||!t.value&&!i.value&&r.value&&(a.value=s([!1,e.falseLabel].includes(a.value)),await M(),u(a.value,d))}return R(()=>e.modelValue,()=>{var d;(d=n==null?void 0:n.validate)==null||d.call(n,"change").catch(b=>j())}),{handleChange:o,onClickRoot:v}},H=(e,a)=>{const{model:l,isGroup:t,isLimitExceeded:i,elFormItem:r}=fe(e),{focus:n,size:m,isChecked:s,checkboxSize:u,hasOwnLabel:o}=he(e,a,{model:l}),{isDisabled:v}=ke(e,{model:l,isChecked:s}),{inputId:d,isLabeledByFormItem:b}=U(e,{formItemContext:r,disableIdGeneration:o,disableIdManagement:t}),{handleChange:p,onClickRoot:g}=ge(e,{model:l,isLimitExceeded:i,hasOwnLabel:o,isDisabled:v,isLabeledByFormItem:b});return pe(e,{model:l}),{elFormItem:r,inputId:d,isLabeledByFormItem:b,isChecked:s,isDisabled:v,isGroup:t,checkboxSize:u,hasOwnLabel:o,model:l,handleChange:p,onClickRoot:g,focus:n,size:m}},Ce=z({name:"ElCheckbox",props:q,emits:[y,"change"],setup(e,{slots:a}){const l=D("checkbox");return L({ns:l},H(e,a))}}),ye=["tabindex","role","aria-checked"],Se=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Ie=["id","aria-hidden","disabled","value","name","tabindex"];function Le(e,a,l,t,i,r){return h(),oe(ie(!e.hasOwnLabel&&e.isLabeledByFormItem?"span":"label"),{class:c([e.ns.b(),e.ns.m(e.checkboxSize),e.ns.is("disabled",e.isDisabled),e.ns.is("bordered",e.border),e.ns.is("checked",e.isChecked)]),"aria-controls":e.indeterminate?e.controls:null,onClick:e.onClickRoot},{default:se(()=>[T("span",{class:c([e.ns.e("input"),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("indeterminate",e.indeterminate),e.ns.is("focus",e.focus)]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[T("span",{class:c(e.ns.e("inner"))},null,2),e.trueLabel||e.falseLabel?S((h(),k("input",{key:0,id:e.inputId,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),class:c(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...n)=>e.handleChange&&e.handleChange(...n)),onFocus:a[2]||(a[2]=n=>e.focus=!0),onBlur:a[3]||(a[3]=n=>e.focus=!1)},null,42,Se)),[[I,e.model]]):S((h(),k("input",{key:1,id:e.inputId,"onUpdate:modelValue":a[4]||(a[4]=n=>e.model=n),class:c(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...n)=>e.handleChange&&e.handleChange(...n)),onFocus:a[6]||(a[6]=n=>e.focus=!0),onBlur:a[7]||(a[7]=n=>e.focus=!1)},null,42,Ie)),[[I,e.model]])],10,ye),e.hasOwnLabel?(h(),k("span",{key:0,class:c(e.ns.e("label"))},[F(e.$slots,"default"),e.$slots.default?V("v-if",!0):(h(),k(te,{key:0},[K(W(e.label),1)],2112))],2)):V("v-if",!0)]),_:3},8,["class","aria-controls","onClick"])}var $e=E(Ce,[["render",Le],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Ge=z({name:"ElCheckboxButton",props:q,emits:[y,"change"],setup(e,{slots:a}){const{focus:l,isChecked:t,isDisabled:i,size:r,model:n,handleChange:m}=H(e,a),{checkboxGroup:s}=C(),u=D("checkbox"),o=f(()=>{var v,d,b,p;const g=(d=(v=s==null?void 0:s.fill)==null?void 0:v.value)!=null?d:"";return{backgroundColor:g,borderColor:g,color:(p=(b=s==null?void 0:s.textColor)==null?void 0:b.value)!=null?p:"",boxShadow:g?`-1px 0 0 0 ${g}`:null}});return{focus:l,isChecked:t,isDisabled:i,model:n,handleChange:m,activeStyle:o,size:r,ns:u}}}),Be=["name","tabindex","disabled","true-value","false-value"],Ve=["name","tabindex","disabled","value"];function ze(e,a,l,t,i,r){return h(),k("label",{class:c([e.ns.b("button"),e.ns.bm("button",e.size),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("focus",e.focus)])},[e.trueLabel||e.falseLabel?S((h(),k("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=n=>e.model=n),class:c(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...n)=>e.handleChange&&e.handleChange(...n)),onFocus:a[2]||(a[2]=n=>e.focus=!0),onBlur:a[3]||(a[3]=n=>e.focus=!1)},null,42,Be)),[[I,e.model]]):S((h(),k("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=n=>e.model=n),class:c(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,value:e.label,onChange:a[5]||(a[5]=(...n)=>e.handleChange&&e.handleChange(...n)),onFocus:a[6]||(a[6]=n=>e.focus=!0),onBlur:a[7]||(a[7]=n=>e.focus=!1)},null,42,Ve)),[[I,e.model]]),e.$slots.default||e.label?(h(),k("span",{key:2,class:c(e.ns.be("button","inner")),style:ue(e.isChecked?e.activeStyle:null)},[F(e.$slots,"default",{},()=>[K(W(e.label),1)])],6)):V("v-if",!0)],2)}var Q=E(Ge,[["render",ze],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const De=z({name:"ElCheckboxGroup",props:ve,emits:[y,"change"],setup(e,{emit:a,slots:l}){const{elFormItem:t}=C(),{groupId:i,isLabeledByFormItem:r}=ce(e,{elFormItem:t}),n=B(),m=D("checkbox"),s=o=>{a(y,o),M(()=>{a("change",o)})},u=f({get(){return e.modelValue},set(o){s(o)}});return re("CheckboxGroup",A(L({name:"ElCheckboxGroup",modelValue:u},de(e)),{checkboxGroupSize:n,changeEvent:s})),R(()=>e.modelValue,()=>{var o;(o=t.validate)==null||o.call(t,"change").catch(v=>j())}),()=>be(e.tag,{id:i.value,class:m.b("group"),role:"group","aria-label":r.value?void 0:e.label||"checkbox-group","aria-labelledby":r.value?t.labelId:void 0},[F(l,"default")])}});var X=E(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const we=me($e,{CheckboxButton:Q,CheckboxGroup:X}),Ne=J(Q),Ae=J(X);export{we as E,Ae as a,Ne as b};
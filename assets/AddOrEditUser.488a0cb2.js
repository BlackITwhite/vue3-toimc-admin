var X=Object.defineProperty;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(e,a,r)=>a in e?X(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,$=(e,a)=>{for(var r in a||(a={}))Q.call(a,r)&&S(e,r,a[r]);if(T)for(var r of T(a))W.call(a,r)&&S(e,r,a[r]);return e};import{e as O,f as v,H as K,_ as G,o as D,h as k,w as t,a as C,b as o,aN as Y,i as w,E as M,g as Z,aR as x,dG as ee,bN as F,r as j,dJ as ae,t as re,c as R,F as N,C as oe,D as z,N as se,V as te,n as ue,P as le,m as ne,X as de}from"./index.fbf2fccb.js";/* empty css                       *//* empty css                 */import{E as ie}from"./el-upload.33f72e89.js";import"./el-progress.e3d651a8.js";import{a as d}from"./index.cf99b79d.js";import{v as me}from"./el-loading.c03d156b.js";/* empty css                  */import{E as pe}from"./el-tree.bb8a5e1d.js";import"./el-checkbox.5a561696.js";import{q as fe}from"./depart.0f10d426.js";import{E as ce}from"./index2.fa446ecb.js";import{E as he,b as ge}from"./index2.06099e3a.js";const B={authorization:"Bearer "+localStorage.getItem("token")},aa=e=>new Promise(a=>{d.get("/api/sys/user/userRoleList",{params:e,headers:B}).then(r=>{a(r.data)})}),De=e=>new Promise(a=>{d.get("/api/sys/user/queryUserRole",{params:e,headers:B}).then(r=>{a(r.data)})}),ra=e=>new Promise(a=>{d.delete("/api/sys/user/deleteBatch",{data:e,headers:B}).then(r=>{a(r.data)})}),oa=e=>new Promise(a=>{d.delete("/api/sys/user/deleteUserRoleBatch",{data:e,headers:B}).then(r=>{a(r.data)})}),ve=e=>new Promise(a=>{d.put("/api/sys/user/edit",e,{headers:B}).then(r=>{a(r.data)})}),sa=e=>new Promise(a=>{d.put("/api/sys/user/resetPassword",e,{headers:B}).then(r=>{a(r.data)})}),ta=e=>new Promise(a=>{d.put("/api/sys/user/frozenBatch",e,{headers:B}).then(r=>{a(r.data)})}),ua=e=>new Promise(a=>{d.get("/api/sys/user/list",{params:e,headers:B}).then(r=>{a(r.data)})}),ye=e=>new Promise(a=>{d.post("/api/sys/user/add",e,{headers:B}).then(r=>{a(r.data)})}),y={authorization:"Bearer "+localStorage.getItem("token")},la=()=>new Promise(e=>{d.get("/api/sys/role/queryTreeList",{headers:y}).then(a=>{e(a.data)})}),na=e=>new Promise(a=>{const r={roleId:e};d.get("/api/sys/permission/queryRolePermission",{params:r,headers:y}).then(m=>{a(m.data)})}),we=()=>new Promise(e=>{d.get("/api/sys/role/queryAll",{headers:y}).then(a=>{e(a.data)})}),da=e=>new Promise(a=>{d.get("/api/sys/role/list",{params:e,headers:y}).then(r=>{a(r.data)})}),ia=e=>new Promise(a=>{d.delete("/api/sys/role/delete",{data:e,headers:y}).then(r=>{a(r.data)})}),ma=e=>new Promise(a=>{d.delete("/api/sys/role/deleteBatch",{data:e,headers:y}).then(r=>{a(r.data)})}),pa=(e,a)=>a?new Promise(r=>{d.put("/api/sys/role/edit",e,{headers:y}).then(m=>{r(m.data)})}):new Promise(r=>{d.post("/api/sys/role/add",e,{headers:y}).then(m=>{r(m.data)})}),fa=e=>new Promise(a=>{d.post("/api/sys/permission/saveRolePermission",e,{headers:y}).then(r=>{a(r.data)})}),Be=O({props:{show:{type:Boolean,default:!1},checkedKeys:{type:String,default:""}},emits:["close","confirm","loadTreeData"],setup(e,{emit:a}){const r={children:"children",label:"departName",value:"id"},m=v(!1),i=v([]),c=v();(()=>{m.value=!0,fe().then(f=>{i.value=f.data,m.value=!1,a("loadTreeData",f.data)})})();const n=()=>{a("close")},E=()=>{let f=c.value.getCheckedNodes(!1,!0);n(),a("confirm",f)};return K(()=>e.show,f=>{if(f){let _=e.checkedKeys.split(",");_.length>0&&setTimeout(()=>{c.value,c.value.setCheckedKeys(_)},100)}},{immediate:!0}),{defaultProps:r,treeData:i,treeDepartRef:c,loading:m,close:n,onConfirm:E}}}),Fe={class:"overflow-auto",style:{height:"340px"}},Ee={class:"dialog-footer flex justify-end"},_e=w("\u53D6\u6D88"),be=w("\u786E\u8BA4");function Ce(e,a,r,m,i,c){const p=pe,n=M,E=ce,f=me;return D(),k(E,{"model-value":e.show,title:"\u9009\u62E9\u90E8\u95E8",center:"",width:"400px",onClose:e.close},{footer:t(()=>[C("span",Ee,[o(n,{onClick:e.close},{default:t(()=>[_e]),_:1},8,["onClick"]),o(n,{type:"primary",onClick:e.onConfirm},{default:t(()=>[be]),_:1},8,["onClick"])])]),default:t(()=>[C("div",Fe,[Y(o(p,{ref:"treeDepartRef","default-expand-all":"",data:e.treeData,"show-checkbox":"","node-key":"id","check-strictly":"",props:e.defaultProps},null,8,["data","props"]),[[f,e.loading]])])]),_:1},8,["model-value","onClose"])}var Pe=G(Be,[["render",Ce]]);const ke=O({components:{PickDepart:Pe},props:{show:{type:Boolean,default:!1},roleId:{type:String,default:null},user:{type:Object,default:()=>({})}},emits:["close"],setup(e,a){const r=v(),m=v(!1),i=v({username:"",password:"",confirmPassword:"",realname:"",avatar:"",phone:"",workNo:"",roleIds:"",departIds:"",roleIdsArr:[],departIdsArr:[],sex:"",status:""}),c=v([]),p=v([]);(()=>{we().then(u=>{u.code===0&&(c.value=u.data.records||[])})})();const f=Z({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u8D26\u53F7",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u57283-10\u4E4B\u95F4",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",trigger:"blur"}],confirmPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{validator:(u,l,g)=>{l===""?g(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):l!==i.value.password?g(new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!")):g()},trigger:"blur"}],realname:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D",trigger:"blur"}],phone:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"}],workNo:[{required:!0,message:"\u8BF7\u8F93\u5165\u5DE5\u53F7",trigger:"blur"}]}),_=u=>{u.code===0?i.value.avatar=u.data:F.error(u.message)},I=u=>{if(u.type==="image/jpeg"||u.type==="image/png"){if(u.size/1024/1024>2)return F.error("\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC7 2MB!"),!1}else return F.error("\u4E0A\u6B21\u5934\u50CF\u7C7B\u578B\u4E3Apng\u6216\u8005jpg\u683C\u5F0F\u6587\u4EF6"),!1;return!0},V=u=>{let l=u||[],g=[];l.forEach(q=>{g.push(q),q.children&&q.children.forEach(J=>{g.push(J)})}),p.value=g},P=()=>{if(!e.user.id){e.roleId&&(i.value.roleIds=e.roleId,i.value.roleIdsArr=[e.roleId]);return}let u={userId:e.user.id};De(u).then(l=>{l.code===0&&(i.value.roleIdsArr=l.data,i.value.roleIds=l.data.join(",")||"")})},b=u=>{p.value=u,i.value.departIds=u.map(l=>l.id).join(","),i.value.departIdsArr=u.map(l=>l.id)},A=()=>{i.value={id:e.user.id,username:e.user.username,realname:e.user.realname,avatar:e.user.avatar||"",phone:e.user.phone,workNo:e.user.workNo,roleIds:"",roleIdsArr:[],departIds:e.user.departIds||"",departIdsArr:e.user.departIds?e.user.departIds.split(","):[],sex:e.user.sex?e.user.sex:0,status:e.user.status},P()},U=async u=>{!u||await u.validate((l,g)=>{l&&(e.user.id?s():L())})},h=v(!1),L=()=>{if(h.value)return;const u=$({},i.value);h.value=!0,ye(u).then(l=>{h.value=!1,l.code===0?F.success("\u6DFB\u52A0\u6210\u529F"):F.error(l.message)})},s=()=>{if(h.value)return;const u=$({},i.value);h.value=!0,ve(u).then(l=>{h.value=!1,l.code===0?F.success("\u4FEE\u6539\u6210\u529F"):F.error(l.message)})},H=()=>{a.emit("close")};return K(()=>e.show,u=>{u&&A()},{immediate:!0}),{Search:x,Refresh:ee,ruleFormRef:r,rules:f,formData:i,roleList:c,departList:p,showPickDepart:m,isEditLoading:h,onClose:H,submitForm:U,handleAvatarSuccess:_,beforeAvatarUpload:I,onConfirmDepart:b,onLoadTreeData:V}}}),Ie={class:"divide-y divide-gray-500/50"},Ve={class:"p-4"},Ae=["src"],Re=w(" \u9009\u62E9\u90E8\u95E8 "),Ue=w("\u7537"),Le=w("\u5973"),qe=w("\u6B63\u5E38"),$e=w("\u51BB\u7ED3"),Ne={class:"flex justify-end"},Te=w("\u53D6\u6D88"),Se=w("\u786E\u8BA4");function je(e,a,r,m,i,c){const p=se,n=te,E=j("Plus"),f=ue,_=ie,I=le,V=ne,P=M,b=he,A=ge,U=de,h=j("pick-depart"),L=ae;return D(),k(L,{"model-value":e.show,direction:"rtl",size:"604px",onClose:e.onClose},{title:t(()=>[C("h4",Ie,[C("span",null,re(e.user.id?"\u7F16\u8F91":"\u65B0\u589E")+"\u7528\u6237",1)])]),default:t(()=>[C("div",Ve,[o(U,{ref:"ruleFormRef",model:e.formData,rules:e.rules,"label-width":"90px","label-position":"right"},{default:t(()=>[o(n,{label:"\u7528\u6237\u8D26\u53F7",prop:"username"},{default:t(()=>[o(p,{modelValue:e.formData.username,"onUpdate:modelValue":a[0]||(a[0]=s=>e.formData.username=s),disabled:!!e.user.id,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u8D26\u53F7"},null,8,["modelValue","disabled"])]),_:1}),e.user.id?oe("",!0):(D(),R(N,{key:0},[o(n,{label:"\u767B\u5F55\u5BC6\u7801",prop:"password"},{default:t(()=>[o(p,{modelValue:e.formData.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.formData.password=s),type:"password",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"confirmPassword"},{default:t(()=>[o(p,{modelValue:e.formData.confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=s=>e.formData.confirmPassword=s),type:"password",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1})],64)),o(n,{label:"\u7528\u6237\u59D3\u540D",prop:"realname"},{default:t(()=>[o(p,{modelValue:e.formData.realname,"onUpdate:modelValue":a[3]||(a[3]=s=>e.formData.realname=s),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u5934\u50CF",prop:"avatar"},{default:t(()=>[o(_,{class:"avatar-uploader border border-gray-100",action:"/api/sys/common/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},{default:t(()=>[e.formData.avatar?(D(),R("img",{key:0,src:e.formData.avatar,class:"avatar"},null,8,Ae)):(D(),k(f,{key:1,class:"avatar-uploader-icon"},{default:t(()=>[o(E)]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1}),o(n,{label:"\u624B\u673A\u53F7",prop:"phone"},{default:t(()=>[o(p,{modelValue:e.formData.phone,"onUpdate:modelValue":a[4]||(a[4]=s=>e.formData.phone=s),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u5DE5\u53F7",prop:"workNo"},{default:t(()=>[o(p,{modelValue:e.formData.workNo,"onUpdate:modelValue":a[5]||(a[5]=s=>e.formData.workNo=s),placeholder:"\u8BF7\u8F93\u5165\u5DE5\u53F7"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u89D2\u8272"},{default:t(()=>[o(V,{modelValue:e.formData.roleIdsArr,"onUpdate:modelValue":a[6]||(a[6]=s=>e.formData.roleIdsArr=s),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",style:{width:"100%"}},{default:t(()=>[(D(!0),R(N,null,z(e.roleList,s=>(D(),k(I,{key:s.id,label:s.roleName,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"\u6240\u5C5E\u90E8\u95E8"},{default:t(()=>[o(V,{modelValue:e.formData.departIdsArr,"onUpdate:modelValue":a[7]||(a[7]=s=>e.formData.departIdsArr=s),style:{width:"340px","margin-right":"4px"},disabled:"",multiple:"",placeholder:"\u8BF7\u9009\u62E9\u90E8\u95E8"},{default:t(()=>[(D(!0),R(N,null,z(e.departList,s=>(D(),k(I,{key:s.id,label:s.departName,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(P,{type:"primary",onClick:a[8]||(a[8]=s=>e.showPickDepart=!0)},{default:t(()=>[Re]),_:1})]),_:1}),o(n,{label:"\u6027\u522B"},{default:t(()=>[o(A,{modelValue:e.formData.sex,"onUpdate:modelValue":a[9]||(a[9]=s=>e.formData.sex=s)},{default:t(()=>[o(b,{label:"1"},{default:t(()=>[Ue]),_:1}),o(b,{label:"2"},{default:t(()=>[Le]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"\u72B6\u6001"},{default:t(()=>[o(A,{modelValue:e.formData.status,"onUpdate:modelValue":a[10]||(a[10]=s=>e.formData.status=s)},{default:t(()=>[o(b,{label:"1"},{default:t(()=>[qe]),_:1}),o(b,{label:"0"},{default:t(()=>[$e]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),C("div",Ne,[o(P,{onClick:e.onClose},{default:t(()=>[Te]),_:1},8,["onClick"]),o(P,{type:"primary",loading:e.isEditLoading,onClick:a[11]||(a[11]=s=>e.submitForm(e.ruleFormRef))},{default:t(()=>[Se]),_:1},8,["loading"])])]),o(h,{show:e.showPickDepart,"checked-keys":e.formData.departIds,onClose:a[12]||(a[12]=s=>e.showPickDepart=!1),onConfirm:e.onConfirmDepart,onLoadTreeData:e.onLoadTreeData},null,8,["show","checked-keys","onConfirm","onLoadTreeData"])]),_:1},8,["model-value","onClose"])}var ca=G(ke,[["render",je],["__scopeId","data-v-62a6a562"]]);export{ca as A,la as a,na as b,pa as c,ra as d,oa as e,ta as f,aa as g,da as h,ia as i,ma as j,ua as q,sa as r,fa as s};

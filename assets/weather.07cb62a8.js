var L=Object.defineProperty;var S=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(e,s,n)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,$=(e,s)=>{for(var n in s||(s={}))k.call(s,n)&&V(e,n,s[n]);if(S)for(var n of S(s))M.call(s,n)&&V(e,n,s[n]);return e};import{e as z,f as l,ap as H,L as F,_ as I,o as B,c as U,a as u,W as j,t as w,ar as O,aX as X,U as Z,Z as q,a0 as G,b as a,w as o,p as J,d as K,h as b,$ as Q}from"./index.2dc4f4d6.js";import{E as Y}from"./el-card.93b3c81a.js";/* empty css                        *//* empty css                 */import{E as x}from"./el-col.aa4a0e05.js";import{E as ee}from"./index.13fa9537.js";import{E as se}from"./index.505b525a.js";import"./index.579a31ba.js";var N="/vue3-toimc-admin/assets/not-available.370934e3.svg",te="/vue3-toimc-admin/assets/clear-day.1750460c.svg",ae="/vue3-toimc-admin/assets/cloudy.166af3f1.svg",ne="/vue3-toimc-admin/assets/drizzle.52d1ab01.svg",oe="/vue3-toimc-admin/assets/fog.f25816bc.svg",ie="/vue3-toimc-admin/assets/hurricane.bf691091.svg",ue="/vue3-toimc-admin/assets/mist.a73979af.svg",le="/vue3-toimc-admin/assets/overcast-day.65e5e477.svg",re="/vue3-toimc-admin/assets/overcast.404c05a4.svg",de="/vue3-toimc-admin/assets/rain.5cfdb502.svg",me="/vue3-toimc-admin/assets/sleet.4e1d5513.svg",_e="/vue3-toimc-admin/assets/snow.3716e1b7.svg",ce="/vue3-toimc-admin/assets/thermometer-colder.27e44f79.svg",ge="/vue3-toimc-admin/assets/thermometer-warmer.a2cb4247.svg",ve="/vue3-toimc-admin/assets/thunderstorms-rain.a29ad635.svg",pe="/vue3-toimc-admin/assets/wind.2fc5eaed.svg",fe="/vue3-toimc-admin/assets/clear-day.49d8c731.svg",he="/vue3-toimc-admin/assets/cloudy.748e25f6.svg",we="/vue3-toimc-admin/assets/drizzle.a4dba4de.svg",be="/vue3-toimc-admin/assets/fog.3b9c20d0.svg",ye="/vue3-toimc-admin/assets/hurricane.f598fa4b.svg",Ee="/vue3-toimc-admin/assets/mist.6bc8e890.svg",Ae="/vue3-toimc-admin/assets/not-available.71622bd8.svg",Fe="/vue3-toimc-admin/assets/overcast-day.8a30a844.svg",Se="/vue3-toimc-admin/assets/overcast.49e2e20c.svg",Ve="/vue3-toimc-admin/assets/rain.b26b9aff.svg",$e="/vue3-toimc-admin/assets/sleet.ff126866.svg",je="/vue3-toimc-admin/assets/snow.050f823c.svg",Ce="/vue3-toimc-admin/assets/thermometer-colder.761f5be2.svg",De="/vue3-toimc-admin/assets/thermometer-warmer.dfa3e251.svg",ze="/vue3-toimc-admin/assets/thunderstorms-rain.5c8d2cef.svg",Ie="/vue3-toimc-admin/assets/wind.e44ecfa2.svg";function Be(e){return e.includes("\u98CE")?["\u9F99\u5377\u98CE","\u72C2\u7206\u98CE","\u98D3\u98CE","\u70ED\u5E26\u98CE\u66B4"].includes(e)?"\u9F99\u5377\u98CE":"\u98CE":e.includes("\u973E")||e.includes("\u96FE")?["\u91CD","\u5927","\u6D53","\u6C99","\u5C18"].some(s=>e.includes(s))?"\u5927\u96FE":"\u5C0F\u96FE":e.includes("\u96E8")?e.includes("\u96F7")?"\u96F7\u9635\u96E8":e.includes("\u96EA")?"\u96E8\u5939\u96EA":e.includes("\u5927")||e.includes("\u66B4")?"\u5927\u96E8":"\u5C0F\u96E8":e.includes("\u96EA")?"\u96EA":e}const Ue={\u6674:"clear-day",\u5C11\u4E91:"cloudy",\u6674\u95F4\u591A\u4E91:"overcast-day",\u591A\u4E91:"overcast",\u9634:"overcast",\u5E73\u9759:"overcast",\u98CE:"wind",\u9F99\u5377\u98CE:"hurricane",\u5927\u96FE:"fog",\u5C0F\u96FE:"mist",\u96F7\u9635\u96E8:"thunderstorms-rain",\u5927\u96E8:"rain",\u5C0F\u96E8:"drizzle",\u96E8\u5939\u96EA:"sleet",\u96EA:"snow",\u70ED:"thermometer-warmer",\u51B7:"thermometer-colder",\u672A\u77E5:"not-available"};function Ne(e){return new URL({"./assets/weather-animation-icon/clear-day.svg":fe,"./assets/weather-animation-icon/cloudy.svg":he,"./assets/weather-animation-icon/drizzle.svg":we,"./assets/weather-animation-icon/fog.svg":be,"./assets/weather-animation-icon/hurricane.svg":ye,"./assets/weather-animation-icon/mist.svg":Ee,"./assets/weather-animation-icon/not-available.svg":Ae,"./assets/weather-animation-icon/overcast-day.svg":Fe,"./assets/weather-animation-icon/overcast.svg":Se,"./assets/weather-animation-icon/rain.svg":Ve,"./assets/weather-animation-icon/sleet.svg":$e,"./assets/weather-animation-icon/snow.svg":je,"./assets/weather-animation-icon/thermometer-colder.svg":Ce,"./assets/weather-animation-icon/thermometer-warmer.svg":De,"./assets/weather-animation-icon/thunderstorms-rain.svg":ze,"./assets/weather-animation-icon/wind.svg":Ie}[`./assets/weather-animation-icon/${e}.svg`],self.location).href}function Re(e){return new URL({"./assets/weather-static-icon/clear-day.svg":te,"./assets/weather-static-icon/cloudy.svg":ae,"./assets/weather-static-icon/drizzle.svg":ne,"./assets/weather-static-icon/fog.svg":oe,"./assets/weather-static-icon/hurricane.svg":ie,"./assets/weather-static-icon/mist.svg":ue,"./assets/weather-static-icon/not-available.svg":N,"./assets/weather-static-icon/overcast-day.svg":le,"./assets/weather-static-icon/overcast.svg":re,"./assets/weather-static-icon/rain.svg":de,"./assets/weather-static-icon/sleet.svg":me,"./assets/weather-static-icon/snow.svg":_e,"./assets/weather-static-icon/thermometer-colder.svg":ce,"./assets/weather-static-icon/thermometer-warmer.svg":ge,"./assets/weather-static-icon/thunderstorms-rain.svg":ve,"./assets/weather-static-icon/wind.svg":pe}[`./assets/weather-static-icon/${e}.svg`],self.location).href}function C(e,s=!0){const n=Be(e)||"\u672A\u77E5",r=Ue[n]||"not-available";return s===!1?Re(r):Ne(r)}var Pe="/vue3-toimc-admin/assets/cloudy_d.5b74d2a5.jpg",We="/vue3-toimc-admin/assets/cloudy_n.672e861e.jpg",Te="/vue3-toimc-admin/assets/foggy_d.a02df919.jpg",Le="/vue3-toimc-admin/assets/foggy_n.855b4100.jpg",ke="/vue3-toimc-admin/assets/rain_d.3214f216.jpg",Me="/vue3-toimc-admin/assets/rain_n.7edf56ab.jpg",He="/vue3-toimc-admin/assets/snow_d.ebbb20db.jpg",Oe="/vue3-toimc-admin/assets/snow_n.faf48bb9.jpg",Xe="/vue3-toimc-admin/assets/sunny_d.bd28a33a.jpg",Ze="/vue3-toimc-admin/assets/sunny_n.52a7085f.jpg",qe="/vue3-toimc-admin/assets/thunder_d.4bc39377.jpg",Ge="/vue3-toimc-admin/assets/thunder_n.bef0d50e.jpg",Je="/vue3-toimc-admin/assets/yin_d.505930b3.jpg",Ke="/vue3-toimc-admin/assets/yin_d.505930b3.jpg";function Qe(e){return e.includes("\u98CE")?"\u98CE":e.includes("\u973E")||e.includes("\u96FE")?"\u96FE":e.includes("\u96E8")?"\u96E8":e.includes("\u96EA")?"\u96EA":e}const Ye={\u6674:"sunny",\u5C11\u4E91:"sunny",\u6674\u95F4\u591A\u4E91:"cloudy",\u591A\u4E91:"cloudy",\u9634:"yin",\u98CE:"wind",\u96FE:"foggy",\u96E8:"rain",\u96EA:"snow"};function xe(e){return new URL({"./assets/images/cloudy_d.jpg":Pe,"./assets/images/cloudy_n.jpg":We,"./assets/images/foggy_d.jpg":Te,"./assets/images/foggy_n.jpg":Le,"./assets/images/rain_d.jpg":ke,"./assets/images/rain_n.jpg":Me,"./assets/images/snow_d.jpg":He,"./assets/images/snow_n.jpg":Oe,"./assets/images/sunny_d.jpg":Xe,"./assets/images/sunny_n.jpg":Ze,"./assets/images/thunder_d.jpg":qe,"./assets/images/thunder_n.jpg":Ge,"./assets/images/yin_d.jpg":Je,"./assets/images/yin_n.jpg":Ke}[`./assets/images/${e}.jpg`],self.location).href}function D(e,s=""){const n=Qe(e)||"\u672A\u77E5",r=Ye[n];let d="_d";if(s!=="")d=s==="night"?"_n":"_d";else{const m=new Date;d=m.getHours()<6||m.getHours()>18?"_n":"_d"}return xe(r+d)}const es=z({name:"WeatherSimple",props:{animation:{type:Boolean,default:!1},dayOrNight:{type:String,default:""},componentStyle:{type:Object,default:()=>{}},textPosition:{type:String,default:"around"},wind:{type:Boolean,default:!0}},setup(e){const s=l(""),n=l(""),r=l(N),d=l("24"),m=l("\u672A\u77E5"),f=l(""),_=l("\u672A\u77E5"),c=l("0"),g=l({}),v=()=>{var p;const i={};return(p=e.componentStyle)!=null&&p.width&&(i.width=e.componentStyle.width+"px",i.height=e.componentStyle.height+"px",i.fontSize=e.componentStyle.fontSize+"px",i.borderRadius=e.componentStyle.borderRadius+"px"),i},y=async()=>{const t=await(await fetch("https://restapi.amap.com/v3/ip?key=3c8dcea768d07bba53ae063c25bdf91f")).json();n.value=t.adcode,s.value=t.province+t.city},E=async()=>{const i=`https://restapi.amap.com/v3/weather/weatherInfo?key=3c8dcea768d07bba53ae063c25bdf91f&city=${n.value}&extensions=base`,p=await fetch(i),{status:t,lives:R}=await p.json();if(t==="1"){const{weather:A,temperature:P,winddirection:W,windpower:T}=R[0];r.value=C(A,e.animation),d.value=P,m.value=A,_.value=W,c.value=T,f.value=D(A,"")}};return H(async()=>{await y(),await E(),g.value=v()}),F(()=>e.animation,i=>{r.value=C(m.value,i)}),F(()=>e.dayOrNight,i=>{f.value=D(m.value,i)}),F(()=>e.componentStyle,()=>{g.value=v()},{deep:!0}),{cityName:s,weatherIcon:r,weatherText:m,weatherImage:f,temperature:d,finalStyle:g,windDirection:_,windPower:c}}}),ss={class:"weather-box"},ts={class:"weather-icon-wrapper"},as=["src"],ns={class:"temperature"},os={class:"city"};function is(e,s,n,r,d,m){return B(),U("div",{class:"wrapper",style:j($({backgroundImage:"url("+e.weatherImage+")"},e.finalStyle))},[u("div",ss,[u("div",ts,[u("img",{src:e.weatherIcon,alt:"weather icon"},null,8,as)]),u("div",{class:"weather-text-wrapper",style:j({justifyContent:e.textPosition==="center"?"center":"space-around"})},[u("div",null,[u("div",ns,w(e.temperature)+"\xB0",1),O(u("div",{class:"wind"},w(e.windDirection)+" "+w(e.windPower)+"\u7EA7",513),[[X,e.wind]])]),u("div",os,w(e.cityName)+" | "+w(e.weatherText),1)],4)])],4)}var us=I(es,[["render",is],["__scopeId","data-v-e0140ad0"]]);const ls=z({setup(){const e=l(!1),s=l(!0),n=l(""),r=l("around"),d=l({width:200,height:200,fontSize:15,borderRadius:30});return{simpleAnimation:e,simpleWind:s,simpleDayAndNight:n,simpleSetting:d,simpleTextPosition:r}}}),h=e=>(J("data-v-42d57c9f"),e=e(),K(),e),rs={class:"p-4"},ds=h(()=>u("div",{class:"card-header"},[u("span",null,"\u5F53\u524D\u5929\u6C14")],-1)),ms=h(()=>u("span",null,"\u5F00\u542F\u52A8\u753B\uFF1A",-1)),_s=h(()=>u("span",null,"\u663E\u793A\u98CE\u529B\uFF1A",-1)),cs=h(()=>u("span",null,"\u81EA\u5B9A\u4E49\u663C\u591C\uFF1A",-1)),gs=b("\u6839\u636E\u5F53\u524D\u65F6\u95F4"),vs=b("\u767D\u5929"),ps=b("\u9ED1\u591C"),fs=h(()=>u("span",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1A",-1)),hs=h(()=>u("span",null,"\u6587\u5B57\u5206\u5E03\uFF1A",-1)),ws=b("\u5206\u6563"),bs=b("\u5C45\u4E2D");function ys(e,s,n,r,d,m){const f=Z,_=x,c=ee,g=se,v=q,y=G,E=Q,i=us,p=Y;return B(),U("div",rs,[a(p,{class:"mb-2"},{header:o(()=>[ds]),default:o(()=>[a(E,null,{default:o(()=>[a(_,{class:"flex items-center"},{default:o(()=>[ms,a(f,{modelValue:e.simpleAnimation,"onUpdate:modelValue":s[0]||(s[0]=t=>e.simpleAnimation=t)},null,8,["modelValue"])]),_:1}),a(_,{class:"flex items-center"},{default:o(()=>[_s,a(f,{modelValue:e.simpleWind,"onUpdate:modelValue":s[1]||(s[1]=t=>e.simpleWind=t)},null,8,["modelValue"])]),_:1}),a(_,{class:"flex items-center"},{default:o(()=>[cs,a(c,{modelValue:e.simpleDayAndNight,"onUpdate:modelValue":s[2]||(s[2]=t=>e.simpleDayAndNight=t),label:"",size:"large"},{default:o(()=>[gs]),_:1},8,["modelValue"]),a(c,{modelValue:e.simpleDayAndNight,"onUpdate:modelValue":s[3]||(s[3]=t=>e.simpleDayAndNight=t),label:"day",size:"large"},{default:o(()=>[vs]),_:1},8,["modelValue"]),a(c,{modelValue:e.simpleDayAndNight,"onUpdate:modelValue":s[4]||(s[4]=t=>e.simpleDayAndNight=t),label:"night",size:"large"},{default:o(()=>[ps]),_:1},8,["modelValue"])]),_:1}),a(_,{class:"flex items-center"},{default:o(()=>[fs,a(y,{inline:!0,model:e.simpleSetting,class:"flex items-center"},{default:o(()=>[a(v,{label:"\u5BBD\u5EA6"},{default:o(()=>[a(g,{modelValue:e.simpleSetting.width,"onUpdate:modelValue":s[5]||(s[5]=t=>e.simpleSetting.width=t)},null,8,["modelValue"])]),_:1}),a(v,{label:"\u9AD8\u5EA6"},{default:o(()=>[a(g,{modelValue:e.simpleSetting.height,"onUpdate:modelValue":s[6]||(s[6]=t=>e.simpleSetting.height=t)},null,8,["modelValue"])]),_:1}),a(v,{label:"\u5B57\u4F53"},{default:o(()=>[a(g,{modelValue:e.simpleSetting.fontSize,"onUpdate:modelValue":s[7]||(s[7]=t=>e.simpleSetting.fontSize=t)},null,8,["modelValue"])]),_:1}),a(v,{label:"\u5706\u89D2"},{default:o(()=>[a(g,{modelValue:e.simpleSetting.borderRadius,"onUpdate:modelValue":s[8]||(s[8]=t=>e.simpleSetting.borderRadius=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(_,{class:"flex items-center"},{default:o(()=>[hs,a(c,{modelValue:e.simpleTextPosition,"onUpdate:modelValue":s[9]||(s[9]=t=>e.simpleTextPosition=t),label:"around",size:"large"},{default:o(()=>[ws]),_:1},8,["modelValue"]),a(c,{modelValue:e.simpleTextPosition,"onUpdate:modelValue":s[10]||(s[10]=t=>e.simpleTextPosition=t),label:"center",size:"large"},{default:o(()=>[bs]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(i,{wind:e.simpleWind,animation:e.simpleAnimation,"day-or-night":e.simpleDayAndNight,"component-style":e.simpleSetting,"text-position":e.simpleTextPosition},null,8,["wind","animation","day-or-night","component-style","text-position"])]),_:1})])}var zs=I(ls,[["render",ys],["__scopeId","data-v-42d57c9f"]]);export{zs as default};

import{_ as p}from"./BasicTable.aaf43f42.js";import{_ as i,e as c,g as d,a2 as u,o as g,j as m,w as b,k as w,t as f}from"./index.f79788e7.js";import"./el-loading.c4a661c9.js";import"./el-pagination.05ffef9b.js";import"./el-table-column.1307e853.js";import"./el-checkbox.8d705354.js";import"./el-image-viewer.60be5310.js";/* empty css                */import"./el-progress.260800ea.js";import"./TCard.607454a9.js";import"./el-card.422534e0.js";import"./TransitionList.ce6e5fc9.js";import"./BasicTransition.aee8ac8b.js";import"./index2.f8425a21.js";const h=c({name:"BasicTableExample",setup(){const t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:50,avatar:"ep:arrow-down-bold",rate:3.5,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:65,avatar:"ep:arrow-down-bold",rate:2.7,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:15,avatar:"ep:arrow-down-bold",rate:3.4,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:75,avatar:"ep:arrow-down-bold",rate:5,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}],a=[{label:"\u7D22\u5F15",type:"index",align:"center"},{type:"selection",align:"center"},{label:"\u65E5\u671F",prop:"date",align:"center",attrs:{sortable:!0}},{label:"\u5934\u50CF",prop:"url",align:"center",type:"image"},{label:"\u8BC4\u5206",prop:"rate",align:"center",type:"rate"},{label:"\u59D3\u540D",prop:"name",align:"center",type:"tag"},{label:"\u6D88\u606F",prop:"badge",align:"center",type:"badge"},{label:"\u8FDB\u5EA6",prop:"progress",align:"center",type:"progress",width:200,attrs:{color:"green"},format:e=>`${e}%`},{label:"\u5730\u5740",prop:"address",align:"center",slot:"address",width:300},{label:"\u94FE\u63A5",prop:"link",align:"center",type:"link",width:120},{label:"\u64CD\u4F5C",align:"center",action:!0,fixed:"right",width:200,actionItems:[{type:"button",attrs:{type:"primary"},text:"\u7F16\u8F91",click:e=>{}},{type:"button",text:"\u8BE6\u60C5",click:e=>{}}]}],o={total:100},r=e=>{},n=d();return u(()=>{setInterval(()=>{},3e3)}),{tableData:t,columns:a,pagination:o,handleCurrentChange:r,table:n}}});function _(t,a,o,r,n,e){const s=p;return g(),m(s,{ref:"table",data:t.tableData,columns:t.columns,pagination:t.pagination,"default-sort":{prop:"date",order:"descending"}},{address:b(({row:l})=>[w(f(l),1)]),_:1},8,["data","columns","pagination"])}var $=i(h,[["render",_]]);export{$ as default};
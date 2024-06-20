import{n as w,N as m,O as z,P as V,_ as $,v as r,o as d,q as f,Q as T,c as k,b as e,w as l,F as S,u as b,s as B,d as s}from"./DHv837eF.js";function L(t,u="px"){if(!(t==null||t===""))return isNaN(t)?String(t):`${Number(t)}${u}`}const H=Symbol(),C={shimmer:!0};function j(){return V(H,C)}const M=w({name:"Skeletor",props:{as:{type:String,default:"span"},circle:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},size:{type:[String,Number],default:null},width:{type:[String,Number],default:null},height:{type:[String,Number],default:null},shimmer:{type:Boolean,default:void 0}},setup(t){const u=j(),p=m(()=>!t.circle&&(t.size||t.height)),h=m(()=>!t.circle&&!t.size&&!t.height),g=m(()=>t.shimmer!==void 0?!t.shimmer:!u.shimmer),v=m(()=>({"vue-skeletor":!0,"vue-skeletor--rect":p.value,"vue-skeletor--text":h.value,"vue-skeletor--shimmerless":g.value,"vue-skeletor--circle":t.circle,"vue-skeletor--pill":t.pill})),o=m(()=>{const a={};if(t.size){const i=L(t.size);a.width=i,a.height=i}return!t.size&&t.width&&(a.width=L(t.width)),!t.size&&t.height&&(a.height=L(t.height)),a}),n=h.value?"‌":null;return()=>z(t.as,{class:v.value,style:o.value},[n])}}),U=w({name:"SxSkeleton",components:{Skeletor:M},props:{circle:{type:Boolean,default:!1},height:{type:String,default:void 0}},computed:{style(){let t="";return this.circle&&(t+="border-radius: 50%;"),this.height&&(t+=`height: ${this.height};`),t}}});function D(t,u,p,h,g,v){const o=r("Skeletor");return d(),f(o,{style:T(t.style),height:void 0},null,8,["style"])}const N=$(U,[["render",D]]),F=w({components:{SxSkeleton:N},props:{headerLength:{type:Number,default:6,validator(t){return t>0&&t<=12}},rowsLength:{type:Number,default:6,validator(t){return t>0&&t<=100}}},computed:{headerLengthHandler(){const t=Math.min(this.headerLength,12);return Math.max(t,1)},rowsLengthHandler(){return this.rowsLength}}}),O={class:"card"};function E(t,u,p,h,g,v){const o=N,n=r("v-col"),a=r("v-row"),i=r("v-divider"),c=r("v-container");return d(),k("div",O,[e(c,null,{default:l(()=>[e(a,{"no-gutters":"",justify:"space-between",class:"pb-4"},{default:l(()=>[e(n,{cols:"2"},{default:l(()=>[e(o)]),_:1}),e(n,{cols:"4"},{default:l(()=>[e(o,{pill:"",height:"30%"})]),_:1})]),_:1}),e(a,{class:"pb-2"},{default:l(()=>[(d(!0),k(S,null,b(t.headerLengthHandler,_=>(d(),f(n,{key:`skeleton-header-${_}`},{default:l(()=>[e(o,{pill:"",width:"30px",class:"text-center"})]),_:2},1024))),128))]),_:1}),(d(!0),k(S,null,b(t.rowsLengthHandler,_=>(d(),f(a,{key:`skeleton-body-row-${_}`,justify:"center"},{default:l(()=>[(d(!0),k(S,null,b(t.headerLengthHandler,y=>(d(),f(n,{key:`skeleton-body-row-col${y}`,class:"pa-1"},{default:l(()=>[e(o,{pill:"",height:"7px",width:"50px"})]),_:2},1024))),128)),e(i,{class:"pb-3"})]),_:2},1024))),128)),e(a,{"no-gutters":"",justify:"end",class:"pt-2"},{default:l(()=>[e(n,{cols:"2",class:"px-1"},{default:l(()=>[e(o,{pill:"",height:"7px"})]),_:1}),e(n,{cols:"1",class:"px-1"},{default:l(()=>[e(o,{pill:"",height:"7px"})]),_:1}),e(n,{cols:"auto",class:"px-1"},{default:l(()=>[e(o,{circle:"",height:"25px",width:"25px"})]),_:1}),e(n,{cols:"auto",class:"px-1"},{default:l(()=>[e(o,{circle:"",height:"25px",width:"25px"})]),_:1})]),_:1})]),_:1})])}const R=$(F,[["render",E]]),q=w({data(){return{layout:"demo",headerLengthProp:6,rowsLengthProp:6}}});function A(t,u,p,h,g,v){const o=R,n=r("v-sheet"),a=r("v-col"),i=r("v-row"),c=r("v-chip"),_=r("v-text-field"),y=r("v-divider"),P=B;return d(),f(P,{name:t.layout},{title:l(()=>[s(" Demo: Skeleton component ")]),component:l(()=>[e(o,{class:"sx-skeleton-demo","rows-length":t.rowsLengthProp,"header-length":t.headerLengthProp},null,8,["rows-length","header-length"])]),props:l(()=>[e(i,{"no-gutters":""},{default:l(()=>[e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[s(" Name ")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[s(" Type ")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[s(" Default Value ")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[s(" Control ")]),_:1})]),_:1})]),_:1}),e(i,{"no-gutters":"",align:"center"},{default:l(()=>[e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[s(" HeaderLength ")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[e(c,{variant:"elevated"},{default:l(()=>[s(" Number ")]),_:1})]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[e(c,{variant:"elevated"},{default:l(()=>[s(" 6 ")]),_:1})]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[e(_,{modelValue:t.headerLengthProp,"onUpdate:modelValue":u[0]||(u[0]=x=>t.headerLengthProp=x),modelModifiers:{number:!0},min:"1",max:"12",label:"headerLength",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y),e(i,{"no-gutters":"",align:"center"},{default:l(()=>[e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[s(" RowsLength ")]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[e(c,{variant:"elevated"},{default:l(()=>[s(" Number ")]),_:1})]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[e(c,{variant:"elevated"},{default:l(()=>[s(" 6 ")]),_:1})]),_:1})]),_:1}),e(a,null,{default:l(()=>[e(n,{class:"ma-2 pa-2"},{default:l(()=>[e(_,{modelValue:t.rowsLengthProp,"onUpdate:modelValue":u[1]||(u[1]=x=>t.rowsLengthProp=x),modelModifiers:{number:!0},min:"1",label:"rowsLength",type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y)]),_:1},8,["name"])}const Q=$(q,[["render",A]]);export{Q as default};
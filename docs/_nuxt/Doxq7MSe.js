import{_ as b}from"./BtvLMddM.js";import{n as g,_ as V,q as y,w as l,v as r,s as w,o as C,d as s,b as e,a as h}from"./D_lg_yVf.js";const D=g({data(){return{layout:"demo",selectClearable:!0,selectChips:!1,selectMultiple:!1,selectDisabled:!1,selectLabel:"",selectHint:"",selectErrorMessage:"",scrollToSelected:!0,selectOptions:["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","last one","last two"],selectDensity:"comfortable",densityOptions:["compact","comfortable","default"],rulesExample:[]}}}),S=h("div",{class:"v-list-item--active"},null,-1);function M(n,d,B,T,U,E){const c=b,a=r("v-sheet"),t=r("v-col"),f=r("v-row"),u=r("v-chip"),m=r("v-checkbox"),i=r("v-divider"),_=r("v-text-field"),p=r("v-select"),v=w;return C(),y(v,{name:n.layout},{title:l(()=>[s(" Demo: Select component ")]),component:l(()=>[S,e(c,{id:"demoSelect",class:"sx-select-demo",variant:"outlined",clearable:n.selectClearable,chips:n.selectChips,multiple:n.selectMultiple,items:n.selectOptions,label:n.selectLabel,disabled:n.selectDisabled,hint:n.selectHint,density:n.selectDensity,"error-messages":n.selectErrorMessage,"scroll-to-selected":n.scrollToSelected},null,8,["clearable","chips","multiple","items","label","disabled","hint","density","error-messages","scroll-to-selected"])]),props:l(()=>[e(f,{"no-gutters":""},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Name ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Type ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Default Value ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Control ")]),_:1})]),_:1})]),_:1}),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" scroll To Selected ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" Boolean ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" false ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(m,{modelValue:n.scrollToSelected,"onUpdate:modelValue":d[0]||(d[0]=o=>n.scrollToSelected=o),label:"scrollToSelected",density:"default","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Clearable ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" Boolean ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" false ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(m,{modelValue:n.selectClearable,"onUpdate:modelValue":d[1]||(d[1]=o=>n.selectClearable=o),label:"Clearable",density:"default","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Chips ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" Boolean ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" false ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(m,{modelValue:n.selectChips,"onUpdate:modelValue":d[2]||(d[2]=o=>n.selectChips=o),label:"Chips","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Multiple ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" Boolean ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" false ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(m,{modelValue:n.selectMultiple,"onUpdate:modelValue":d[3]||(d[3]=o=>n.selectMultiple=o),label:"Multiple","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Disabled ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" Boolean ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" false ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(m,{modelValue:n.selectDisabled,"onUpdate:modelValue":d[4]||(d[4]=o=>n.selectDisabled=o),label:"Disabled","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Label ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" String ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" undefined ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(_,{modelValue:n.selectLabel,"onUpdate:modelValue":d[5]||(d[5]=o=>n.selectLabel=o),label:"Label"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Error message ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" String ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" undefined ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(_,{modelValue:n.selectErrorMessage,"onUpdate:modelValue":d[6]||(d[6]=o=>n.selectErrorMessage=o),label:"Error message"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i),e(f,{"no-gutters":"",align:"center"},{default:l(()=>[e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[s(" Density ")]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" String ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(u,{variant:"elevated"},{default:l(()=>[s(" comfortable ")]),_:1})]),_:1})]),_:1}),e(t,null,{default:l(()=>[e(a,{class:"ma-2 pa-2"},{default:l(()=>[e(p,{modelValue:n.selectDensity,"onUpdate:modelValue":d[7]||(d[7]=o=>n.selectDensity=o),label:"Density",items:n.densityOptions},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),e(i)]),_:1},8,["name"])}const k=V(D,[["render",M]]);export{k as default};

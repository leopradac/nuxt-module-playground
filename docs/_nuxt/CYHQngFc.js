import{_ as g}from"./CAqXSRo2.js";import{_ as V}from"./BIMmBcXL.js";import{_ as k}from"./B3E8jDLI.js";import{n as x,_ as S,q as y,w as a,v as i,s as C,o as U,d as o,a as m,b as e,z as w}from"./D_lg_yVf.js";import"./DtEB0qrE.js";const B=x({data(){return{layout:"demo",checkboxStatus:!0,disabledProp:!1,hintProp:"Hint sample",labelProp:"Label sample",indeterminateProp:!1,snippet:`<SxCheckbox
    v-model="checkboxStatus"
    :disabled="disabledProp"
    :hint="hintProp"
    :indeterminate="indeterminateProp"
>
    <template #label><strong>Fixed Label</strong>&nbsp;| Using Slot</template>
</SxCheckbox>`}},methods:{copy(){navigator.clipboard.writeText(this.snippet)}}}),$={class:"d-flex align-center bg-primary-container pa-5 my-5 text-center"},L=m("strong",null,"Fixed Label",-1),N=m("div",{class:"font-italic font-weight-thin"},' note: if slot "label" is defined then label attribute will be ignored. ',-1);function T(l,s,D,F,H,q){const _=g,p=i("v-divider"),c=V,b=i("v-snackbar"),t=i("v-sheet"),n=i("v-col"),r=i("v-row"),u=i("v-chip"),f=i("v-checkbox"),v=k,h=i("v-text-field"),P=C;return U(),y(P,{name:l.layout},{title:a(()=>[o(" Demo: SxCheckbox component ")]),component:a(()=>[m("div",$,[e(_,{modelValue:l.checkboxStatus,"onUpdate:modelValue":s[0]||(s[0]=d=>l.checkboxStatus=d),class:"mr-5",disabled:l.disabledProp,hint:l.hintProp,label:l.labelProp,indeterminate:l.indeterminateProp},null,8,["modelValue","disabled","hint","label","indeterminate"]),e(p,{class:"border-opacity-75",vertical:""}),e(_,{modelValue:l.checkboxStatus,"onUpdate:modelValue":s[1]||(s[1]=d=>l.checkboxStatus=d),class:"mx-5",disabled:l.disabledProp,hint:l.hintProp,indeterminate:l.indeterminateProp},{label:a(()=>[L,o(" | Using Slot ")]),_:1},8,["modelValue","disabled","hint","indeterminate"]),m("div",null,[e(b,{timeout:3e3},{activator:a(({props:d})=>[e(c,w(d,{icon:"mdi-content-copy",onClick:l.copy}),null,16,["onClick"])]),default:a(()=>[o(" Snippet copied to your clipboard as reference. ")]),_:1})])])]),props:a(()=>[e(r,{"no-gutters":""},{default:a(()=>[e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" Name ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" Type ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" Default Value ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" Control ")]),_:1})]),_:1})]),_:1}),e(r,{"no-gutters":"",align:"center"},{default:a(()=>[e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" disabled ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" Boolean ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" false ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(f,{modelValue:l.disabledProp,"onUpdate:modelValue":s[2]||(s[2]=d=>l.disabledProp=d)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p),e(r,{"no-gutters":"",align:"center"},{default:a(()=>[e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" hint ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" String ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" undefined ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(v,{modelValue:l.hintProp,"onUpdate:modelValue":s[3]||(s[3]=d=>l.hintProp=d),label:"Hint"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p),e(r,{"no-gutters":"",align:"center"},{default:a(()=>[e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" label (attribute) ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" String ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" undefined ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(h,{modelValue:l.labelProp,"onUpdate:modelValue":s[4]||(s[4]=d=>l.labelProp=d),label:"Label"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p),e(r,{"no-gutters":"",align:"center"},{default:a(()=>[e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[o(" indeterminate ")]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" Boolean ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(u,{variant:"elevated"},{default:a(()=>[o(" false ")]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(t,{class:"ma-2 pa-2"},{default:a(()=>[e(f,{modelValue:l.indeterminateProp,"onUpdate:modelValue":s[5]||(s[5]=d=>l.indeterminateProp=d)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),N]),_:1},8,["name"])}const G=S(B,[["render",T]]);export{G as default};

import{E as d,F as f,r as i,G as h,H as p,e as v,I as m,J as y,K as b}from"./CtUUay5E.js";let g;function w(){return g}function H(e){return typeof e=="function"?e():f(e)}function s(e,a=""){if(e instanceof Promise)return e;const t=H(e);return!e||!t?t:Array.isArray(t)?t.map(n=>s(n,a)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([n,r])=>n==="titleTemplate"||n.startsWith("on")?[n,f(r)]:[n,s(r,n)])):t}const _="usehead",u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c="__unhead_injection_handler__";function j(){if(c in u)return u[c]();const e=d(_);return e||w()}function I(e,a={}){const t=a.head||j();if(t)return t.ssr?t.push(e,a):U(t,e,a)}function U(e,a,t={}){const n=i(!1),r=i({});h(()=>{r.value=n.value?{}:s(a)});const o=e.push(r.value,t);return p(r,l=>{o.patch(l)}),b()&&(v(()=>{o.dispose()}),m(()=>{n.value=!0}),y(()=>{n.value=!1})),o}export{I as u};

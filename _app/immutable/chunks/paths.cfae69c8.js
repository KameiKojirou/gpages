import{D as u,s as _}from"./index.0917c1f3.js";const e=[];function q(i,a=u){let o;const n=new Set;function r(t){if(_(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function h(t,b=u){const s=[t,b];return n.add(s),n.size===1&&(o=a(r)||u),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:h}}var c;const g=((c=globalThis.__sveltekit_1huqoqk)==null?void 0:c.base)??"/sveltekit-github-pages";var f;const k=((f=globalThis.__sveltekit_1huqoqk)==null?void 0:f.assets)??g;export{k as a,g as b,q as w};
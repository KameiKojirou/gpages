function g(){}const dt=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(X)}function L(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return Y(t,n=>e=n)(),e}function Wt(t,e,n){t.$$.on_destroy.push(Y(e,n))}function It(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,c){if(s){const r=Z(e,n,i,c);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e,n){return t.set(n),e}function Xt(t){return t&&L(t.destroy)?t.destroy:g}function Yt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const tt=typeof window<"u";let mt=tt?()=>window.performance.now():()=>Date.now(),F=tt?t=>requestAnimationFrame(t):g;const w=new Set;function et(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&F(et)}function pt(t){let e;return w.size===0&&F(et),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}const Zt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let P=!1;function yt(){P=!0}function gt(){P=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=u?s+1:bt(1,s,h=>e[n[h]].claim_order,u))-1;i[l]=n[d]+1;const a=d+1;n[a]=l,s=Math.max(a,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<c.length&&r[l].claim_order>=c[u].claim_order;)u++;const d=u<c.length?c[u]:null;t.insertBefore(r[l],d)}}function $t(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=q("style");return Et(nt(t),e),e.sheet}function Et(t,e){return $t(t.head||t,e),e.sheet}function vt(t,e){if(P){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function Nt(t,e,n){P&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function q(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function te(){return G(" ")}function ee(){return G("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){st(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ot(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function se(t,e,n){return ot(t,e,n,q)}function re(t,e,n){return ot(t,e,n,it)}function kt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function oe(t){return kt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function le(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);st(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(c,e)}function ce(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ae(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Mt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=q(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class K extends Mt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}}function fe(t,e){return new t(e)}const C=new Map;let D=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:wt(e),rules:{}};return C.set(t,n),n}function Q(t,e,n,i,s,c,r,o=0){const l=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=l){const b=e+(n-e)*c(y);u+=y*100+`%{${r(b,1-b)}}
`}const d=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${St(d)}_${o}`,h=nt(t),{stylesheet:f,rules:_}=C.get(h)||Ct(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,D+=1,a}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),D-=s,D||Ht())}function Ht(){F(()=>{D||(C.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),C.clear())})}let k;function N(t){k=t}function W(){if(!k)throw new Error("Function called outside component initialization");return k}function de(t){W().$$.on_mount.push(t)}function _e(t){W().$$.after_update.push(t)}function he(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],U=[];let E=[];const V=[],ct=Promise.resolve();let z=!1;function ut(){z||(z=!0,ct.then(at))}function pe(){return ut(),ct}function H(t){E.push(t)}const R=new Set;let x=0;function at(){if(x!==0)return;const t=k;do{try{for(;x<$.length;){const e=$[x];x++,N(e),Lt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(N(null),$.length=0,x=0;U.length;)U.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];R.has(n)||(R.add(n),n())}E.length=0}while($.length);for(;V.length;)V.pop()();z=!1,R.clear(),N(t)}function Lt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function Pt(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let T;function jt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function B(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const S=new Set;let p;function ye(){p={r:0,c:[],p}}function ge(){p.r||v(p.c),p=p.p}function Ot(t,e){t&&t.i&&(S.delete(t),t.i(e))}function be(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function xe(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,u=null;function d(){u&&Dt(t,u)}function a(f,_){const m=f.b-r;return _*=Math.abs(m),{a:r,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=dt,tick:b=g,css:j}=c||Rt,O={start:mt()+_,b:f};f||(O.group=p,p.r+=1),o||l?l=O:(j&&(d(),u=Q(t,r,f,m,_,y,j)),f&&b(0,1),o=a(O,m),H(()=>B(t,f,"start")),pt(M=>{if(l&&M>l.start&&(o=a(l,m),l=null,B(t,o.b,"start"),j&&(d(),u=Q(t,r,o.b,o.duration,0,y,c.css))),o){if(M>=o.end)b(r=o.b,1-r),B(t,o.b,"end"),l||(o.b?d():--o.group.r||v(o.group.c)),o=null;else if(M>=o.start){const ft=M-o.start;r=o.a+o.d*y(ft/o.duration),b(r,1-r)}}return!!(o||l)}))}return{run(f){L(c)?jt().then(()=>{c=c(s),h(f)}):h(f)},end(){d(),o=l=null}}}function $e(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(X).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),c.forEach(H)}function zt(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&($.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,s,c,r,o=[-1]){const l=k;N(t);const u=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return u.ctx&&s(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),d&&Ft(t,a)),h}):[],u.update(),d=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){yt();const a=At(e.target);u.fragment&&u.fragment.l(a),a.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&Ot(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),gt(),at()}N(l)}class ve{$destroy(){zt(this,1),this.$destroy=g}$on(e,n){if(!L(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as $,Bt as A,zt as B,vt as C,g as D,Gt as E,dt as F,Yt as G,ne as H,Wt as I,he as J,_t as K,Ut as L,Zt as M,It as N,Xt as O,Kt as P,Qt as Q,Jt as R,ve as S,H as T,xe as U,v as V,me as W,K as X,it as Y,ae as Z,le as _,te as a,Vt as a0,Nt as b,oe as c,be as d,ee as e,ge as f,Ot as g,A as h,Ee as i,_e as j,q as k,se as l,At as m,ie as n,de as o,ue as p,G as q,kt as r,qt as s,pe as t,ce as u,ye as v,U as w,fe as x,$e as y,we as z};

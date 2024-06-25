import{s as pe,f as C,a as V,l as X,g as D,h as I,c as y,d as h,m as Z,j as w,i as L,K as g,p as he,M as ne,e as oe,I as ve,n as be}from"../chunks/scheduler.2807654d.js";import{S as $e,i as de,b as M,d as P,m as B,a as x,t as E,e as j,g as R,c as G}from"../chunks/index.f0c96418.js";import{e as H,u as xe,o as we}from"../chunks/index.433bca53.js";import{g as ke,a as se}from"../chunks/app.dafff01f.js";import{C as Ce}from"../chunks/Card.2111f015.js";import{C as De}from"../chunks/CardLogo.c1d598b6.js";import{C as Ee,a as Ie}from"../chunks/ChipIcon.8ec8a629.js";import{g as J}from"../chunks/assets.8062788d.js";import{b as O}from"../chunks/paths.c5bf1542.js";import{U as ee}from"../chunks/UIcon.f55086f0.js";import{C as Ve}from"../chunks/Chip.fc935fd3.js";import{S as ye}from"../chunks/SearchPage.f6cbcedc.js";import{t as Se,i as W}from"../chunks/experience.cd4b1b35.js";import{i as Le}from"../chunks/index.fd998c02.js";function ae(a,t,l){const e=a.slice();return e[6]=t[l],e}function ie(a,t,l){const e=a.slice();return e[9]=t[l],e}function Me(a){let t,l,e,r=a[9].label+"",s,c,f;return t=new ee({props:{icon:a[9].icon}}),{c(){M(t.$$.fragment),l=V(),e=C("span"),s=X(r),c=V(),this.h()},l(o){P(t.$$.fragment,o),l=y(o),e=D(o,"SPAN",{class:!0});var n=I(e);s=Z(n,r),n.forEach(h),c=y(o),this.h()},h(){w(e,"class","m-l-1")},m(o,n){B(t,o,n),L(o,l,n),L(o,e,n),g(e,s),L(o,c,n),f=!0},p(o,n){const u={};n&2&&(u.icon=o[9].icon),t.$set(u),(!f||n&2)&&r!==(r=o[9].label+"")&&he(s,r)},i(o){f||(x(t.$$.fragment,o),f=!0)},o(o){E(t.$$.fragment,o),f=!1},d(o){o&&(h(l),h(e),h(c)),j(t,o)}}}function ce(a){let t,l;return t=new Ve({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){M(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,r){const s={};r&4098&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function fe(a){let t,l;return t=new Ie({props:{logo:J(a[6].logo),name:a[6].name,href:`${O}/skills/${a[6].slug}`}}),{c(){M(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,r){const s={};r&1&&(s.logo=J(e[6].logo)),r&1&&(s.name=e[6].name),r&1&&(s.href=`${O}/skills/${e[6].slug}`),t.$set(s)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function Pe(a){let t,l,e,r,s,c,f,o,n,u,v,N,k,b,S=a[0].shortDescription+"",q,Q,A,K;l=new De({props:{src:J(a[0].logo),alt:a[0].company,size:55}}),f=new Ee({props:{title:`${a[0].name}`}});let F=H(a[1]),$=[];for(let i=0;i<F.length;i+=1)$[i]=ce(ie(a,F,i));const ge=i=>E($[i],1,1,()=>{$[i]=null});let T=H(a[0].skills),d=[];for(let i=0;i<T.length;i+=1)d[i]=fe(ae(a,T,i));const _e=i=>E(d[i],1,1,()=>{d[i]=null});return{c(){t=C("div"),M(l.$$.fragment),e=V(),r=C("div"),s=C("div"),c=C("h3"),M(f.$$.fragment),o=V(),n=C("div");for(let i=0;i<$.length;i+=1)$[i].c();u=V(),v=C("div"),N=X(a[2]),k=V(),b=C("div"),q=X(S),Q=V(),A=C("div");for(let i=0;i<d.length;i+=1)d[i].c();this.h()},l(i){t=D(i,"DIV",{class:!0});var p=I(t);P(l.$$.fragment,p),e=y(p),r=D(p,"DIV",{class:!0});var _=I(r);s=D(_,"DIV",{class:!0});var Y=I(s);c=D(Y,"H3",{class:!0});var m=I(c);P(f.$$.fragment,m),m.forEach(h),o=y(Y),n=D(Y,"DIV",{class:!0});var U=I(n);for(let z=0;z<$.length;z+=1)$[z].l(U);U.forEach(h),Y.forEach(h),u=y(_),v=D(_,"DIV",{class:!0});var te=I(v);N=Z(te,a[2]),te.forEach(h),k=y(_),b=D(_,"DIV",{class:!0});var le=I(b);q=Z(le,S),le.forEach(h),Q=y(_),A=D(_,"DIV",{class:!0});var re=I(A);for(let z=0;z<d.length;z+=1)d[z].l(re);re.forEach(h),_.forEach(h),p.forEach(h),this.h()},h(){w(c,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),w(n,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),w(s,"class","col "),w(v,"class","text-[var(--text)] text-[0.9em] font-200"),w(b,"class","experience-description"),w(A,"class","flex flex-row flex-wrap mt-5"),w(r,"class","col ml-0 md:ml-[20px] gap-3 w-full"),w(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,p){L(i,t,p),B(l,t,null),g(t,e),g(t,r),g(r,s),g(s,c),B(f,c,null),g(s,o),g(s,n);for(let _=0;_<$.length;_+=1)$[_]&&$[_].m(n,null);g(r,u),g(r,v),g(v,N),g(r,k),g(r,b),g(b,q),g(r,Q),g(r,A);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(A,null);K=!0},p(i,p){const _={};p&1&&(_.src=J(i[0].logo)),p&1&&(_.alt=i[0].company),l.$set(_);const Y={};if(p&1&&(Y.title=`${i[0].name}`),f.$set(Y),p&2){F=H(i[1]);let m;for(m=0;m<F.length;m+=1){const U=ie(i,F,m);$[m]?($[m].p(U,p),x($[m],1)):($[m]=ce(U),$[m].c(),x($[m],1),$[m].m(n,null))}for(R(),m=F.length;m<$.length;m+=1)ge(m);G()}if((!K||p&1)&&S!==(S=i[0].shortDescription+"")&&he(q,S),p&1){T=H(i[0].skills);let m;for(m=0;m<T.length;m+=1){const U=ae(i,T,m);d[m]?(d[m].p(U,p),x(d[m],1)):(d[m]=fe(U),d[m].c(),x(d[m],1),d[m].m(A,null))}for(R(),m=T.length;m<d.length;m+=1)_e(m);G()}},i(i){if(!K){x(l.$$.fragment,i),x(f.$$.fragment,i);for(let p=0;p<F.length;p+=1)x($[p]);for(let p=0;p<T.length;p+=1)x(d[p]);K=!0}},o(i){E(l.$$.fragment,i),E(f.$$.fragment,i),$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)E($[p]);d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)E(d[p]);K=!1},d(i){i&&h(t),j(l),j(f),ne($,i),ne(d,i)}}}function Be(a){let t,l;return t=new Ce({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${O}/experience/${a[0].slug}`,color:a[0].color,$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){M(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,[r]){const s={};r&1&&(s.href=`${O}/experience/${e[0].slug}`),r&1&&(s.color=e[0].color),r&4099&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function je(a,t,l){let e,{experience:r}=t;const s=ke(r.period.from,r.period.to),c=`${se(r.period.from.getMonth())} ${r.period.from.getFullYear()}`,f=r.period.to?`${se(r.period.to.getMonth())} ${r.period.to.getFullYear()}`:"Present",o=`${c} - ${f} · ${s}`;return a.$$set=n=>{"experience"in n&&l(0,r=n.experience)},a.$$.update=()=>{a.$$.dirty&1&&l(1,e=[{label:r.company,icon:"i-carbon-building"},{label:r.location,icon:"i-carbon-location"},{label:r.contract,icon:"i-carbon-hourglass"}])},[r,e,o]}class Ne extends $e{constructor(t){super(),de(this,t,je,Be,pe,{experience:0})}}function ue(a,t,l){const e=a.slice();return e[2]=t[l],e[4]=l,e}function Ue(a){let t,l,e=[],r=new Map,s,c,f=H(a[0]);const o=n=>n[2].slug;for(let n=0;n<f.length;n+=1){let u=ue(a,f,n),v=o(u);r.set(v,e[n]=me(v,u))}return{c(){t=C("div"),l=V();for(let n=0;n<e.length;n+=1)e[n].c();s=oe(),this.h()},l(n){t=D(n,"DIV",{class:!0}),I(t).forEach(h),l=y(n);for(let u=0;u<e.length;u+=1)e[u].l(n);s=oe(),this.h()},h(){w(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,u){L(n,t,u),L(n,l,u);for(let v=0;v<e.length;v+=1)e[v]&&e[v].m(n,u);L(n,s,u),c=!0},p(n,u){u&1&&(f=H(n[0]),R(),e=xe(e,u,o,1,n,f,r,s.parentNode,we,me,s,ue),G())},i(n){if(!c){for(let u=0;u<f.length;u+=1)x(e[u]);c=!0}},o(n){for(let u=0;u<e.length;u+=1)E(e[u]);c=!1},d(n){n&&(h(t),h(l),h(s));for(let u=0;u<e.length;u+=1)e[u].d(n)}}}function qe(a){let t,l,e,r,s="Could not find anything...",c;return l=new ee({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),M(l.$$.fragment),e=V(),r=C("p"),r.textContent=s,this.h()},l(f){t=D(f,"DIV",{class:!0});var o=I(t);P(l.$$.fragment,o),e=y(o),r=D(o,"P",{class:!0,["data-svelte-h"]:!0}),ve(r)!=="svelte-1jyyf6v"&&(r.textContent=s),o.forEach(h),this.h()},h(){w(r,"class","font-300"),w(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,o){L(f,t,o),B(l,t,null),g(t,e),g(t,r),c=!0},p:be,i(f){c||(x(l.$$.fragment,f),c=!0)},o(f){E(l.$$.fragment,f),c=!1},d(f){f&&h(t),j(l)}}}function me(a,t){let l,e,r,s,c,f,o,n,u,v,N;return c=new ee({props:{icon:"i-carbon-condition-point",classes:""}}),n=new Ne({props:{experience:t[2]}}),{key:a,first:null,c(){l=C("div"),e=C("div"),r=V(),s=C("div"),M(c.$$.fragment),f=V(),o=C("div"),M(n.$$.fragment),u=V(),this.h()},l(k){l=D(k,"DIV",{class:!0});var b=I(l);e=D(b,"DIV",{class:!0}),I(e).forEach(h),r=y(b),s=D(b,"DIV",{class:!0});var S=I(s);P(c.$$.fragment,S),S.forEach(h),f=y(b),o=D(b,"DIV",{class:!0});var q=I(o);P(n.$$.fragment,q),q.forEach(h),u=y(b),b.forEach(h),this.h()},h(){w(e,"class","flex-1 hidden lg:flex"),w(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),w(o,"class","flex-1 col items-stretch"),w(l,"class",v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=l},m(k,b){L(k,l,b),g(l,e),g(l,r),g(l,s),B(c,s,null),g(l,f),g(l,o),B(n,o,null),g(l,u),N=!0},p(k,b){t=k;const S={};b&1&&(S.experience=t[2]),n.$set(S),(!N||b&1&&v!==(v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&w(l,"class",v)},i(k){N||(x(c.$$.fragment,k),x(n.$$.fragment,k),N=!0)},o(k){E(c.$$.fragment,k),E(n.$$.fragment,k),N=!1},d(k){k&&h(l),j(c),j(n)}}}function Ae(a){let t,l,e,r;const s=[qe,Ue],c=[];function f(o,n){return o[0].length===0?0:1}return l=f(a),e=c[l]=s[l](a),{c(){t=C("div"),e.c(),this.h()},l(o){t=D(o,"DIV",{class:!0});var n=I(t);e.l(n),n.forEach(h),this.h()},h(){w(t,"class","col items-center relative mt-10 flex-1")},m(o,n){L(o,t,n),c[l].m(t,null),r=!0},p(o,n){let u=l;l=f(o),l===u?c[l].p(o,n):(R(),E(c[u],1,1,()=>{c[u]=null}),G(),e=c[l],e?e.p(o,n):(e=c[l]=s[l](o),e.c()),x(e,1),e.m(t,null))},i(o){r||(x(e),r=!0)},o(o){E(e),r=!1},d(o){o&&h(t),c[l].d()}}}function Fe(a){let t,l;return t=new ye({props:{title:Se,$$slots:{default:[Ae]},$$scope:{ctx:a}}}),t.$on("search",a[1]),{c(){M(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){B(t,e,r),l=!0},p(e,[r]){const s={};r&33&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function Te(a,t,l){let e=[...W];return[e,s=>{const c=s.detail.search;if(Le(c)){l(0,e=W);return}l(0,e=W.filter(f=>f.name.toLowerCase().includes(c)||f.company.toLowerCase().includes(c)||f.description.toLowerCase().includes(c)))}]}class lt extends $e{constructor(t){super(),de(this,t,Te,Fe,pe,{})}}export{lt as component};

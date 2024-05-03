(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ca(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ce(r)?Gs(r):ca(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(te(e))return e}}const qs=/;(?![^(]*\))/g,Vs=/:([^]+)/,Js=/\/\*.*?\*\//gs;function Gs(e){const t={};return e.replace(Js,"").split(qs).forEach(n=>{if(n){const r=n.split(Vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ua(e){let t="";if(ce(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=ua(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zs=fa(Qs);function lo(e){return!!e||e===""}const Ve=e=>ce(e)?e:e==null?"":R(e)||te(e)&&(e.toString===mo||!z(e.toString))?JSON.stringify(e,fo,2):String(e),fo=(e,t)=>t&&t.__v_isRef?fo(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:co(t)?{[`Set(${t.size})`]:[...t.values()]}:te(t)&&!R(t)&&!po(t)?String(t):t,Q={},jt=[],Re=()=>{},el=()=>!1,tl=/^on[^a-z]/,rr=e=>tl.test(e),da=e=>e.startsWith("onUpdate:"),pe=Object.assign,ma=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},nl=Object.prototype.hasOwnProperty,Y=(e,t)=>nl.call(e,t),R=Array.isArray,Dt=e=>ar(e)==="[object Map]",co=e=>ar(e)==="[object Set]",z=e=>typeof e=="function",ce=e=>typeof e=="string",pa=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",uo=e=>te(e)&&z(e.then)&&z(e.catch),mo=Object.prototype.toString,ar=e=>mo.call(e),rl=e=>ar(e).slice(8,-1),po=e=>ar(e)==="[object Object]",ha=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},al=/-(\w)/g,We=ir(e=>e.replace(al,(t,n)=>n?n.toUpperCase():"")),il=/\B([A-Z])/g,Kt=ir(e=>e.replace(il,"-$1").toLowerCase()),or=ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ar=ir(e=>e?`on${or(e)}`:""),ln=(e,t)=>!Object.is(e,t),Cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Xn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ol=e=>{const t=parseFloat(e);return isNaN(t)?e:t},sl=e=>{const t=ce(e)?Number(e):NaN;return isNaN(t)?e:t};let ni;const ll=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ne;class fl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function cl(e,t=Ne){t&&t.active&&t.effects.push(e)}function ul(){return Ne}const ga=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ho=e=>(e.w&ct)>0,go=e=>(e.n&ct)>0,dl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ct},ml=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ho(a)&&!go(a)?a.delete(e):t[n++]=a,a.w&=~ct,a.n&=~ct}t.length=n}},Lr=new WeakMap;let en=0,ct=1;const Rr=30;let $e;const Tt=Symbol(""),jr=Symbol("");class va{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cl(this,r)}run(){if(!this.active)return this.fn();let t=$e,n=lt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$e,$e=this,lt=!0,ct=1<<++en,en<=Rr?dl(this):ri(this),this.fn()}finally{en<=Rr&&ml(this),ct=1<<--en,$e=this.parent,lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(ri(this),this.onStop&&this.onStop(),this.active=!1)}}function ri(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let lt=!0;const vo=[];function Xt(){vo.push(lt),lt=!1}function qt(){const e=vo.pop();lt=e===void 0?!0:e}function ke(e,t,n){if(lt&&$e){let r=Lr.get(e);r||Lr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ga()),bo(a)}}function bo(e,t){let n=!1;en<=Rr?go(e)||(e.n|=ct,n=!ho(e)):n=!e.has($e),n&&(e.add($e),$e.deps.push(e))}function Je(e,t,n,r,a,i){const o=Lr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?ha(n)&&s.push(o.get("length")):(s.push(o.get(Tt)),Dt(e)&&s.push(o.get(jr)));break;case"delete":R(e)||(s.push(o.get(Tt)),Dt(e)&&s.push(o.get(jr)));break;case"set":Dt(e)&&s.push(o.get(Tt));break}if(s.length===1)s[0]&&Dr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Dr(ga(l))}}function Dr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&ai(r);for(const r of n)r.computed||ai(r)}function ai(e,t){(e!==$e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const pl=fa("__proto__,__v_isRef,__isVue"),_o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pa)),hl=ba(),gl=ba(!1,!0),vl=ba(!0),ii=bl();function bl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const r=W(this)[t].apply(this,n);return qt(),r}}),e}function _l(e){const t=W(this);return ke(t,"has",e),t.hasOwnProperty(e)}function ba(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Fl:Ao:t?ko:wo).get(r))return r;const o=R(r);if(!e){if(o&&Y(ii,a))return Reflect.get(ii,a,i);if(a==="hasOwnProperty")return _l}const s=Reflect.get(r,a,i);return(pa(a)?_o.has(a):pl(a))||(e||ke(r,"get",a),t)?s:ve(s)?o&&ha(a)?s:s.value:te(s)?e?Co(s):xa(s):s}}const yl=yo(),xl=yo(!0);function yo(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!qn(a)&&!Ut(a)&&(o=W(o),a=W(a)),!R(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=R(n)&&ha(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===W(i)&&(s?ln(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),l}}function wl(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function kl(e,t){const n=Reflect.has(e,t);return(!pa(t)||!_o.has(t))&&ke(e,"has",t),n}function Al(e){return ke(e,"iterate",R(e)?"length":Tt),Reflect.ownKeys(e)}const xo={get:hl,set:yl,deleteProperty:wl,has:kl,ownKeys:Al},Cl={get:vl,set(e,t){return!0},deleteProperty(e,t){return!0}},El=pe({},xo,{get:gl,set:xl}),_a=e=>e,sr=e=>Reflect.getPrototypeOf(e);function An(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);n||(t!==i&&ke(a,"get",t),ke(a,"get",i));const{has:o}=sr(a),s=r?_a:n?ka:fn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Cn(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return t||(e!==a&&ke(r,"has",e),ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function En(e,t=!1){return e=e.__v_raw,!t&&ke(W(e),"iterate",Tt),Reflect.get(e,"size",e)}function oi(e){e=W(e);const t=W(this);return sr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function si(e,t){t=W(t);const n=W(this),{has:r,get:a}=sr(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function li(e){const t=W(this),{has:n,get:r}=sr(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function fi(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function On(e,t){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=t?_a:e?ka:fn;return!e&&ke(s,"iterate",Tt),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function In(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),o=Dt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?_a:t?ka:fn;return!t&&ke(i,"iterate",l?jr:Tt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:this}}function Ol(){const e={get(i){return An(this,i)},get size(){return En(this)},has:Cn,add:oi,set:si,delete:li,clear:fi,forEach:On(!1,!1)},t={get(i){return An(this,i,!1,!0)},get size(){return En(this)},has:Cn,add:oi,set:si,delete:li,clear:fi,forEach:On(!1,!0)},n={get(i){return An(this,i,!0)},get size(){return En(this,!0)},has(i){return Cn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:On(!0,!1)},r={get(i){return An(this,i,!0,!0)},get size(){return En(this,!0)},has(i){return Cn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:On(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=In(i,!1,!1),n[i]=In(i,!0,!1),t[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[e,n,t,r]}const[Il,Sl,Tl,Pl]=Ol();function ya(e,t){const n=t?e?Pl:Tl:e?Sl:Il;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Nl={get:ya(!1,!1)},$l={get:ya(!1,!0)},Ml={get:ya(!0,!1)},wo=new WeakMap,ko=new WeakMap,Ao=new WeakMap,Fl=new WeakMap;function Ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ll(rl(e))}function xa(e){return Ut(e)?e:wa(e,!1,xo,Nl,wo)}function jl(e){return wa(e,!1,El,$l,ko)}function Co(e){return wa(e,!0,Cl,Ml,Ao)}function wa(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Rl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function zt(e){return Ut(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function qn(e){return!!(e&&e.__v_isShallow)}function Eo(e){return zt(e)||Ut(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Oo(e){return Xn(e,"__v_skip",!0),e}const fn=e=>te(e)?xa(e):e,ka=e=>te(e)?Co(e):e;function Io(e){lt&&$e&&(e=W(e),bo(e.dep||(e.dep=ga())))}function So(e,t){e=W(e);const n=e.dep;n&&Dr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Dl(e){return zl(e,!1)}function zl(e,t){return ve(e)?e:new Bl(e,t)}class Bl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:fn(t)}get value(){return Io(this),this._value}set value(t){const n=this.__v_isShallow||qn(t)||Ut(t);t=n?t:W(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:fn(t),So(this))}}function we(e){return ve(e)?e.value:e}const Hl={get:(e,t,n)=>we(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function To(e){return zt(e)?e:new Proxy(e,Hl)}var Po;class Ul{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Po]=!1,this._dirty=!0,this.effect=new va(t,()=>{this._dirty||(this._dirty=!0,So(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return Io(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Po="__v_isReadonly";function Yl(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new Ul(r,a,i||!a,n)}function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){lr(i,t,n)}return a}function Te(e,t,n,r){if(z(e)){const i=ft(e,t,n,r);return i&&uo(i)&&i.catch(o=>{lr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Te(e[i],t,n,r));return a}function lr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}Wl(e,n,a,r)}function Wl(e,t,n,r=!0){console.error(e)}let cn=!1,zr=!1;const ge=[];let Ue=0;const Bt=[];let qe=null,At=0;const No=Promise.resolve();let Aa=null;function Kl(e){const t=Aa||No;return e?t.then(this?e.bind(this):e):t}function Xl(e){let t=Ue+1,n=ge.length;for(;t<n;){const r=t+n>>>1;un(ge[r])<e?t=r+1:n=r}return t}function Ca(e){(!ge.length||!ge.includes(e,cn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?ge.push(e):ge.splice(Xl(e.id),0,e),$o())}function $o(){!cn&&!zr&&(zr=!0,Aa=No.then(Fo))}function ql(e){const t=ge.indexOf(e);t>Ue&&ge.splice(t,1)}function Vl(e){R(e)?Bt.push(...e):(!qe||!qe.includes(e,e.allowRecurse?At+1:At))&&Bt.push(e),$o()}function ci(e,t=cn?Ue+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function Mo(e){if(Bt.length){const t=[...new Set(Bt)];if(Bt.length=0,qe){qe.push(...t);return}for(qe=t,qe.sort((n,r)=>un(n)-un(r)),At=0;At<qe.length;At++)qe[At]();qe=null,At=0}}const un=e=>e.id==null?1/0:e.id,Jl=(e,t)=>{const n=un(e)-un(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Fo(e){zr=!1,cn=!0,ge.sort(Jl);const t=Re;try{for(Ue=0;Ue<ge.length;Ue++){const n=ge[Ue];n&&n.active!==!1&&ft(n,null,14)}}finally{Ue=0,ge.length=0,Mo(),cn=!1,Aa=null,(ge.length||Bt.length)&&Fo()}}function Gl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||Q;h&&(a=n.map(x=>ce(x)?x.trim():x)),m&&(a=n.map(ol))}let s,l=r[s=Ar(t)]||r[s=Ar(We(t))];!l&&i&&(l=r[s=Ar(Kt(t))]),l&&Te(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Te(c,e,6,a)}}function Lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=c=>{const u=Lo(c,t,!0);u&&(s=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):pe(o,i),te(e)&&r.set(e,o),o)}function fr(e,t){return!e||!rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Kt(t))||Y(e,t))}let Ee=null,cr=null;function Vn(e){const t=Ee;return Ee=e,cr=e&&e.type.__scopeId||null,t}function ht(e){cr=e}function gt(){cr=null}function Ro(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&yi(-1);const i=Vn(t);let o;try{o=e(...a)}finally{Vn(i),r._d&&yi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Er(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:x,ctx:N,inheritAttrs:S}=e;let H,_;const O=Vn(e);try{if(n.shapeFlag&4){const L=a||r;H=He(u.call(L,L,m,i,x,h,N)),_=l}else{const L=t;H=He(L.length>1?L(i,{attrs:l,slots:s,emit:c}):L(i,null)),_=t.props?l:Ql(l)}}catch(L){rn.length=0,lr(L,e,1),H=X(je)}let C=H;if(_&&S!==!1){const L=Object.keys(_),{shapeFlag:B}=C;L.length&&B&7&&(o&&L.some(da)&&(_=Zl(_,o)),C=ut(C,_))}return n.dirs&&(C=ut(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),H=C,Vn(O),H}const Ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||rr(n))&&((t||(t={}))[n]=e[n]);return t},Zl=(e,t)=>{const n={};for(const r in e)(!da(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ef(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ui(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!fr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ui(r,o,c):!0:!!o;return!1}function ui(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!fr(n,i))return!0}return!1}function tf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const nf=e=>e.__isSuspense;function rf(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Vl(e)}function af(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=le||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const Sn={};function Bn(e,t,n){return jo(e,t,n)}function jo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Q){const s=ul()===(le==null?void 0:le.scope)?le:null;let l,c=!1,u=!1;if(ve(e)?(l=()=>e.value,c=qn(e)):zt(e)?(l=()=>e,r=!0):R(e)?(u=!0,c=e.some(C=>zt(C)||qn(C)),l=()=>e.map(C=>{if(ve(C))return C.value;if(zt(C))return Ot(C);if(z(C))return ft(C,s,2)})):z(e)?t?l=()=>ft(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Te(e,s,3,[h])}:l=Re,t&&r){const C=l;l=()=>Ot(C())}let m,h=C=>{m=_.onStop=()=>{ft(C,s,4)}},x;if(mn)if(h=Re,t?n&&Te(t,s,3,[l(),u?[]:void 0,h]):l(),a==="sync"){const C=rc();x=C.__watcherHandles||(C.__watcherHandles=[])}else return Re;let N=u?new Array(e.length).fill(Sn):Sn;const S=()=>{if(_.active)if(t){const C=_.run();(r||c||(u?C.some((L,B)=>ln(L,N[B])):ln(C,N)))&&(m&&m(),Te(t,s,3,[C,N===Sn?void 0:u&&N[0]===Sn?[]:N,h]),N=C)}else _.run()};S.allowRecurse=!!t;let H;a==="sync"?H=S:a==="post"?H=()=>xe(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),H=()=>Ca(S));const _=new va(l,H);t?n?S():N=_.run():a==="post"?xe(_.run.bind(_),s&&s.suspense):_.run();const O=()=>{_.stop(),s&&s.scope&&ma(s.scope.effects,_)};return x&&x.push(O),O}function of(e,t,n){const r=this.proxy,a=ce(e)?e.includes(".")?Do(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=le;Yt(this);const s=jo(a,i.bind(r),n);return o?Yt(o):Pt(),s}function Do(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ot(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))Ot(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)Ot(e[n],t);else if(co(e)||Dt(e))e.forEach(n=>{Ot(n,t)});else if(po(e))for(const n in e)Ot(e[n],t);return e}function sf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yo(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const Ie=[Function,Array],lf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},setup(e,{slots:t}){const n=Vf(),r=sf();let a;return()=>{const i=t.default&&Ho(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==je){o=S;break}}const s=W(e),{mode:l}=s;if(r.isLeaving)return Or(o);const c=di(o);if(!c)return Or(o);const u=Br(c,s,r,n);Hr(c,u);const m=n.subTree,h=m&&di(m);let x=!1;const{getTransitionKey:N}=c.type;if(N){const S=N();a===void 0?a=S:S!==a&&(a=S,x=!0)}if(h&&h.type!==je&&(!Ct(c,h)||x)){const S=Br(h,s,r,n);if(Hr(h,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Or(o);l==="in-out"&&c.type!==je&&(S.delayLeave=(H,_,O)=>{const C=Bo(r,h);C[String(h.key)]=h,H._leaveCb=()=>{_(),H._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},zo=lf;function Bo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Br(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:m,onLeave:h,onAfterLeave:x,onLeaveCancelled:N,onBeforeAppear:S,onAppear:H,onAfterAppear:_,onAppearCancelled:O}=t,C=String(e.key),L=Bo(n,e),B=(D,K)=>{D&&Te(D,r,9,K)},ue=(D,K)=>{const V=K[1];B(D,K),R(D)?D.every(he=>he.length<=1)&&V():D.length<=1&&V()},ae={mode:i,persisted:o,beforeEnter(D){let K=s;if(!n.isMounted)if(a)K=S||s;else return;D._leaveCb&&D._leaveCb(!0);const V=L[C];V&&Ct(e,V)&&V.el._leaveCb&&V.el._leaveCb(),B(K,[D])},enter(D){let K=l,V=c,he=u;if(!n.isMounted)if(a)K=H||l,V=_||c,he=O||u;else return;let $=!1;const ne=D._enterCb=Ae=>{$||($=!0,Ae?B(he,[D]):B(V,[D]),ae.delayedLeave&&ae.delayedLeave(),D._enterCb=void 0)};K?ue(K,[D,ne]):ne()},leave(D,K){const V=String(e.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return K();B(m,[D]);let he=!1;const $=D._leaveCb=ne=>{he||(he=!0,K(),ne?B(N,[D]):B(x,[D]),D._leaveCb=void 0,L[V]===e&&delete L[V])};L[V]=e,h?ue(h,[D,$]):$()},clone(D){return Br(D,t,n,r)}};return ae}function Or(e){if(ur(e))return e=ut(e),e.children=null,e}function di(e){return ur(e)?e.children?e.children[0]:void 0:e}function Hr(e,t){e.shapeFlag&6&&e.component?Hr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ho(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&a++,r=r.concat(Ho(o.children,t,s))):(t||o.type!==je)&&r.push(s!=null?ut(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ea(e){return z(e)?{setup:e,name:e.name}:e}const Hn=e=>!!e.type.__asyncLoader,ur=e=>e.type.__isKeepAlive;function ff(e,t){Uo(e,"a",t)}function cf(e,t){Uo(e,"da",t)}function Uo(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(dr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ur(a.parent.vnode)&&uf(r,t,n,a),a=a.parent}}function uf(e,t,n,r){const a=dr(t,e,r,!0);Ko(()=>{ma(r[t],a)},n)}function dr(e,t,n=le,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Yt(n);const s=Te(t,n,e,o);return Pt(),qt(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=le)=>(!mn||e==="sp")&&dr(e,(...r)=>t(...r),n),df=tt("bm"),Yo=tt("m"),mf=tt("bu"),pf=tt("u"),Wo=tt("bum"),Ko=tt("um"),hf=tt("sp"),gf=tt("rtg"),vf=tt("rtc");function bf(e,t=le){dr("ec",e,t)}function _f(e,t){const n=Ee;if(n===null)return e;const r=gr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=Q]=t[i];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&Ot(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Xt(),Te(l,n,8,[e.el,s,e,t]),qt())}}const Xo="components",yf="directives";function Oa(e,t){return qo(Xo,e,!0,t)||e}const xf=Symbol();function wf(e){return qo(yf,e)}function qo(e,t,n=!0,r=!1){const a=Ee||le;if(a){const i=a.type;if(e===Xo){const s=ec(i,!1);if(s&&(s===t||s===We(t)||s===or(We(t))))return i}const o=mi(a[e]||i[e],t)||mi(a.appContext[e],t);return!o&&r?i:o}}function mi(e,t){return e&&(e[t]||e[We(t)]||e[or(We(t))])}function mr(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ce(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ur=e=>e?is(e)?gr(e)||e.proxy:Ur(e.parent):null,nn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$emit:e=>e.emit,$options:e=>Ia(e),$forceUpdate:e=>e.f||(e.f=()=>Ca(e.update)),$nextTick:e=>e.n||(e.n=Kl.bind(e.proxy)),$watch:e=>of.bind(e)}),Ir=(e,t)=>e!==Q&&!e.__isScriptSetup&&Y(e,t),kf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ir(r,t))return o[t]=1,r[t];if(a!==Q&&Y(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&Y(c,t))return o[t]=3,i[t];if(n!==Q&&Y(n,t))return o[t]=4,n[t];Yr&&(o[t]=0)}}const u=nn[t];let m,h;if(u)return t==="$attrs"&&ke(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Q&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ir(a,t)?(a[t]=n,!0):r!==Q&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Q&&Y(e,o)||Ir(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(nn,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Yr=!0;function Af(e){const t=Ia(e),n=e.proxy,r=e.ctx;Yr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:x,updated:N,activated:S,deactivated:H,beforeDestroy:_,beforeUnmount:O,destroyed:C,unmounted:L,render:B,renderTracked:ue,renderTriggered:ae,errorCaptured:D,serverPrefetch:K,expose:V,inheritAttrs:he,components:$,directives:ne,filters:Ae}=t;if(c&&Cf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ie in o){const J=o[ie];z(J)&&(r[ie]=J.bind(n))}if(a){const ie=a.call(n,n);te(ie)&&(e.data=xa(ie))}if(Yr=!0,i)for(const ie in i){const J=i[ie],vt=z(J)?J.bind(n,n):z(J.get)?J.get.bind(n,n):Re,wn=!z(J)&&z(J.set)?J.set.bind(n):Re,bt=Se({get:vt,set:wn});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>bt.value,set:De=>bt.value=De})}if(s)for(const ie in s)Vo(s[ie],r,n,ie);if(l){const ie=z(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(J=>{af(J,ie[J])})}u&&pi(u,e,"c");function me(ie,J){R(J)?J.forEach(vt=>ie(vt.bind(n))):J&&ie(J.bind(n))}if(me(df,m),me(Yo,h),me(mf,x),me(pf,N),me(ff,S),me(cf,H),me(bf,D),me(vf,ue),me(gf,ae),me(Wo,O),me(Ko,L),me(hf,K),R(V))if(V.length){const ie=e.exposed||(e.exposed={});V.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:vt=>n[J]=vt})})}else e.exposed||(e.exposed={});B&&e.render===Re&&(e.render=B),he!=null&&(e.inheritAttrs=he),$&&(e.components=$),ne&&(e.directives=ne)}function Cf(e,t,n=Re,r=!1){R(e)&&(e=Wr(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=zn(i.from||a,i.default,!0):o=zn(i.from||a):o=zn(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function pi(e,t,n){Te(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vo(e,t,n,r){const a=r.includes(".")?Do(n,r):()=>n[r];if(ce(e)){const i=t[e];z(i)&&Bn(a,i)}else if(z(e))Bn(a,e.bind(n));else if(te(e))if(R(e))e.forEach(i=>Vo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Bn(a,i,e)}}function Ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Jn(l,c,o,!0)),Jn(l,t,o)),te(t)&&i.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Jn(e,i,n,!0),a&&a.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ef[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ef={data:hi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:kt,directives:kt,watch:If,provide:hi,inject:Of};function hi(e,t){return t?e?function(){return pe(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Of(e,t){return kt(Wr(e),Wr(t))}function Wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?pe(pe(Object.create(null),e),t):t}function If(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Sf(e,t,n,r=!1){const a={},i={};Xn(i,hr,1),e.propsDefaults=Object.create(null),Jo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:jl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Tf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=W(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(fr(e.emitsOptions,h))continue;const x=t[h];if(l)if(Y(i,h))x!==i[h]&&(i[h]=x,c=!0);else{const N=We(h);a[N]=Kr(l,s,N,x,e,!1)}else x!==i[h]&&(i[h]=x,c=!0)}}}else{Jo(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!Y(t,m)&&((u=Kt(m))===m||!Y(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Kr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],c=!0)}c&&Je(e,"set","$attrs")}function Jo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Dn(l))continue;const c=t[l];let u;a&&Y(a,u=We(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:fr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=W(n),c=s||Q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Kr(a,l,m,c[m],e,!Y(c,m))}}return o}function Kr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Yt(a),r=c[n]=l.call(null,t),Pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Go(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const u=m=>{l=!0;const[h,x]=Go(m,t,!0);pe(o,h),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return te(e)&&r.set(e,jt),jt;if(R(i))for(let u=0;u<i.length;u++){const m=We(i[u]);gi(m)&&(o[m]=Q)}else if(i)for(const u in i){const m=We(u);if(gi(m)){const h=i[u],x=o[m]=R(h)||z(h)?{type:h}:Object.assign({},h);if(x){const N=_i(Boolean,x.type),S=_i(String,x.type);x[0]=N>-1,x[1]=S<0||N<S,(N>-1||Y(x,"default"))&&s.push(m)}}}const c=[o,s];return te(e)&&r.set(e,c),c}function gi(e){return e[0]!=="$"}function vi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function bi(e,t){return vi(e)===vi(t)}function _i(e,t){return R(t)?t.findIndex(n=>bi(n,e)):z(t)&&bi(t,e)?0:-1}const Qo=e=>e[0]==="_"||e==="$stable",Sa=e=>R(e)?e.map(He):[He(e)],Pf=(e,t,n)=>{if(t._n)return t;const r=Ro((...a)=>Sa(t(...a)),n);return r._c=!1,r},Zo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Qo(a))continue;const i=e[a];if(z(i))t[a]=Pf(a,i,r);else if(i!=null){const o=Sa(i);t[a]=()=>o}}},es=(e,t)=>{const n=Sa(t);e.slots.default=()=>n},Nf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Xn(t,"_",n)):Zo(t,e.slots={})}else e.slots={},t&&es(e,t);Xn(e.slots,hr,1)},$f=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Zo(t,a)),o=t}else t&&(es(e,t),o={default:1});if(i)for(const s in a)!Qo(s)&&!(s in o)&&delete a[s]};function ts(){return{app:null,config:{isNativeTag:el,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mf=0;function Ff(e,t){return function(r,a=null){z(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=ts(),o=new Set;let s=!1;const l=i.app={_uid:Mf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ac,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...u)):z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=X(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,gr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Xr(e,t,n,r,a=!1){if(R(e)){e.forEach((h,x)=>Xr(h,t&&(R(t)?t[x]:t),n,r,a));return}if(Hn(r)&&!a)return;const i=r.shapeFlag&4?gr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===Q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ce(c)?(u[c]=null,Y(m,c)&&(m[c]=null)):ve(c)&&(c.value=null)),z(l))ft(l,s,12,[o,u]);else{const h=ce(l),x=ve(l);if(h||x){const N=()=>{if(e.f){const S=h?Y(m,l)?m[l]:u[l]:l.value;a?R(S)&&ma(S,i):R(S)?S.includes(i)||S.push(i):h?(u[l]=[i],Y(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,Y(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(N.id=-1,xe(N,n)):N()}}}const xe=rf;function Lf(e){return Rf(e)}function Rf(e,t){const n=ll();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:x=Re,insertStaticContent:N}=e,S=(f,d,p,v=null,g=null,w=null,E=!1,y=null,A=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ct(f,d)&&(v=kn(f),De(f,g,w,!0),f=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:b,ref:M,shapeFlag:T}=d;switch(b){case pr:H(f,d,p,v);break;case je:_(f,d,p,v);break;case Un:f==null&&O(d,p,v,E);break;case _e:$(f,d,p,v,g,w,E,y,A);break;default:T&1?B(f,d,p,v,g,w,E,y,A):T&6?ne(f,d,p,v,g,w,E,y,A):(T&64||T&128)&&b.process(f,d,p,v,g,w,E,y,A,Mt)}M!=null&&g&&Xr(M,f&&f.ref,w,d||f,!d)},H=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},_=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},O=(f,d,p,v)=>{[f.el,f.anchor]=N(f.children,d,p,v,f.el,f.anchor)},C=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},L=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},B=(f,d,p,v,g,w,E,y,A)=>{E=E||d.type==="svg",f==null?ue(d,p,v,g,w,E,y,A):K(f,d,g,w,E,y,A)},ue=(f,d,p,v,g,w,E,y)=>{let A,b;const{type:M,props:T,shapeFlag:F,transition:j,dirs:U}=f;if(A=f.el=o(f.type,w,T&&T.is,T),F&8?u(A,f.children):F&16&&D(f.children,A,null,v,g,w&&M!=="foreignObject",E,y),U&&_t(f,null,v,"created"),ae(A,f,f.scopeId,E,v),T){for(const q in T)q!=="value"&&!Dn(q)&&i(A,q,null,T[q],w,f.children,v,g,Xe);"value"in T&&i(A,"value",null,T.value),(b=T.onVnodeBeforeMount)&&Be(b,v,f)}U&&_t(f,null,v,"beforeMount");const G=(!g||g&&!g.pendingBranch)&&j&&!j.persisted;G&&j.beforeEnter(A),r(A,d,p),((b=T&&T.onVnodeMounted)||G||U)&&xe(()=>{b&&Be(b,v,f),G&&j.enter(A),U&&_t(f,null,v,"mounted")},g)},ae=(f,d,p,v,g)=>{if(p&&x(f,p),v)for(let w=0;w<v.length;w++)x(f,v[w]);if(g){let w=g.subTree;if(d===w){const E=g.vnode;ae(f,E,E.scopeId,E.slotScopeIds,g.parent)}}},D=(f,d,p,v,g,w,E,y,A=0)=>{for(let b=A;b<f.length;b++){const M=f[b]=y?st(f[b]):He(f[b]);S(null,M,d,p,v,g,w,E,y)}},K=(f,d,p,v,g,w,E)=>{const y=d.el=f.el;let{patchFlag:A,dynamicChildren:b,dirs:M}=d;A|=f.patchFlag&16;const T=f.props||Q,F=d.props||Q;let j;p&&yt(p,!1),(j=F.onVnodeBeforeUpdate)&&Be(j,p,d,f),M&&_t(d,f,p,"beforeUpdate"),p&&yt(p,!0);const U=g&&d.type!=="foreignObject";if(b?V(f.dynamicChildren,b,y,p,v,U,w):E||J(f,d,y,null,p,v,U,w,!1),A>0){if(A&16)he(y,d,T,F,p,v,g);else if(A&2&&T.class!==F.class&&i(y,"class",null,F.class,g),A&4&&i(y,"style",T.style,F.style,g),A&8){const G=d.dynamicProps;for(let q=0;q<G.length;q++){const fe=G[q],Pe=T[fe],Ft=F[fe];(Ft!==Pe||fe==="value")&&i(y,fe,Pe,Ft,g,f.children,p,v,Xe)}}A&1&&f.children!==d.children&&u(y,d.children)}else!E&&b==null&&he(y,d,T,F,p,v,g);((j=F.onVnodeUpdated)||M)&&xe(()=>{j&&Be(j,p,d,f),M&&_t(d,f,p,"updated")},v)},V=(f,d,p,v,g,w,E)=>{for(let y=0;y<d.length;y++){const A=f[y],b=d[y],M=A.el&&(A.type===_e||!Ct(A,b)||A.shapeFlag&70)?m(A.el):p;S(A,b,M,null,v,g,w,E,!0)}},he=(f,d,p,v,g,w,E)=>{if(p!==v){if(p!==Q)for(const y in p)!Dn(y)&&!(y in v)&&i(f,y,p[y],null,E,d.children,g,w,Xe);for(const y in v){if(Dn(y))continue;const A=v[y],b=p[y];A!==b&&y!=="value"&&i(f,y,b,A,E,d.children,g,w,Xe)}"value"in v&&i(f,"value",p.value,v.value)}},$=(f,d,p,v,g,w,E,y,A)=>{const b=d.el=f?f.el:s(""),M=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:F,slotScopeIds:j}=d;j&&(y=y?y.concat(j):j),f==null?(r(b,p,v),r(M,p,v),D(d.children,p,M,g,w,E,y,A)):T>0&&T&64&&F&&f.dynamicChildren?(V(f.dynamicChildren,F,p,g,w,E,y),(d.key!=null||g&&d===g.subTree)&&ns(f,d,!0)):J(f,d,p,M,g,w,E,y,A)},ne=(f,d,p,v,g,w,E,y,A)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,E,A):Ae(d,p,v,g,w,E,A):Gt(f,d,A)},Ae=(f,d,p,v,g,w,E)=>{const y=f.component=qf(f,v,g);if(ur(f)&&(y.ctx.renderer=Mt),Jf(y),y.asyncDep){if(g&&g.registerDep(y,me),!f.el){const A=y.subTree=X(je);_(null,A,d,p)}return}me(y,f,d,p,g,w,E)},Gt=(f,d,p)=>{const v=d.component=f.component;if(ef(f,d,p))if(v.asyncDep&&!v.asyncResolved){ie(v,d,p);return}else v.next=d,ql(v.update),v.update();else d.el=f.el,v.vnode=d},me=(f,d,p,v,g,w,E)=>{const y=()=>{if(f.isMounted){let{next:M,bu:T,u:F,parent:j,vnode:U}=f,G=M,q;yt(f,!1),M?(M.el=U.el,ie(f,M,E)):M=U,T&&Cr(T),(q=M.props&&M.props.onVnodeBeforeUpdate)&&Be(q,j,M,U),yt(f,!0);const fe=Er(f),Pe=f.subTree;f.subTree=fe,S(Pe,fe,m(Pe.el),kn(Pe),f,g,w),M.el=fe.el,G===null&&tf(f,fe.el),F&&xe(F,g),(q=M.props&&M.props.onVnodeUpdated)&&xe(()=>Be(q,j,M,U),g)}else{let M;const{el:T,props:F}=d,{bm:j,m:U,parent:G}=f,q=Hn(d);if(yt(f,!1),j&&Cr(j),!q&&(M=F&&F.onVnodeBeforeMount)&&Be(M,G,d),yt(f,!0),T&&kr){const fe=()=>{f.subTree=Er(f),kr(T,f.subTree,f,g,null)};q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=Er(f);S(null,fe,p,v,f,g,w),d.el=fe.el}if(U&&xe(U,g),!q&&(M=F&&F.onVnodeMounted)){const fe=d;xe(()=>Be(M,G,fe),g)}(d.shapeFlag&256||G&&Hn(G.vnode)&&G.vnode.shapeFlag&256)&&f.a&&xe(f.a,g),f.isMounted=!0,d=p=v=null}},A=f.effect=new va(y,()=>Ca(b),f.scope),b=f.update=()=>A.run();b.id=f.uid,yt(f,!0),b()},ie=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Tf(f,d.props,v,p),$f(f,d.children,p),Xt(),ci(),qt()},J=(f,d,p,v,g,w,E,y,A=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,T=d.children,{patchFlag:F,shapeFlag:j}=d;if(F>0){if(F&128){wn(b,T,p,v,g,w,E,y,A);return}else if(F&256){vt(b,T,p,v,g,w,E,y,A);return}}j&8?(M&16&&Xe(b,g,w),T!==b&&u(p,T)):M&16?j&16?wn(b,T,p,v,g,w,E,y,A):Xe(b,g,w,!0):(M&8&&u(p,""),j&16&&D(T,p,v,g,w,E,y,A))},vt=(f,d,p,v,g,w,E,y,A)=>{f=f||jt,d=d||jt;const b=f.length,M=d.length,T=Math.min(b,M);let F;for(F=0;F<T;F++){const j=d[F]=A?st(d[F]):He(d[F]);S(f[F],j,p,null,g,w,E,y,A)}b>M?Xe(f,g,w,!0,!1,T):D(d,p,v,g,w,E,y,A,T)},wn=(f,d,p,v,g,w,E,y,A)=>{let b=0;const M=d.length;let T=f.length-1,F=M-1;for(;b<=T&&b<=F;){const j=f[b],U=d[b]=A?st(d[b]):He(d[b]);if(Ct(j,U))S(j,U,p,null,g,w,E,y,A);else break;b++}for(;b<=T&&b<=F;){const j=f[T],U=d[F]=A?st(d[F]):He(d[F]);if(Ct(j,U))S(j,U,p,null,g,w,E,y,A);else break;T--,F--}if(b>T){if(b<=F){const j=F+1,U=j<M?d[j].el:v;for(;b<=F;)S(null,d[b]=A?st(d[b]):He(d[b]),p,U,g,w,E,y,A),b++}}else if(b>F)for(;b<=T;)De(f[b],g,w,!0),b++;else{const j=b,U=b,G=new Map;for(b=U;b<=F;b++){const Ce=d[b]=A?st(d[b]):He(d[b]);Ce.key!=null&&G.set(Ce.key,b)}let q,fe=0;const Pe=F-U+1;let Ft=!1,Za=0;const Qt=new Array(Pe);for(b=0;b<Pe;b++)Qt[b]=0;for(b=j;b<=T;b++){const Ce=f[b];if(fe>=Pe){De(Ce,g,w,!0);continue}let ze;if(Ce.key!=null)ze=G.get(Ce.key);else for(q=U;q<=F;q++)if(Qt[q-U]===0&&Ct(Ce,d[q])){ze=q;break}ze===void 0?De(Ce,g,w,!0):(Qt[ze-U]=b+1,ze>=Za?Za=ze:Ft=!0,S(Ce,d[ze],p,null,g,w,E,y,A),fe++)}const ei=Ft?jf(Qt):jt;for(q=ei.length-1,b=Pe-1;b>=0;b--){const Ce=U+b,ze=d[Ce],ti=Ce+1<M?d[Ce+1].el:v;Qt[b]===0?S(null,ze,p,ti,g,w,E,y,A):Ft&&(q<0||b!==ei[q]?bt(ze,p,ti,2):q--)}}},bt=(f,d,p,v,g=null)=>{const{el:w,type:E,transition:y,children:A,shapeFlag:b}=f;if(b&6){bt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){E.move(f,d,p,Mt);return}if(E===_e){r(w,d,p);for(let T=0;T<A.length;T++)bt(A[T],d,p,v);r(f.anchor,d,p);return}if(E===Un){C(f,d,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(w),r(w,d,p),xe(()=>y.enter(w),g);else{const{leave:T,delayLeave:F,afterLeave:j}=y,U=()=>r(w,d,p),G=()=>{T(w,()=>{U(),j&&j()})};F?F(w,U,G):G()}else r(w,d,p)},De=(f,d,p,v=!1,g=!1)=>{const{type:w,props:E,ref:y,children:A,dynamicChildren:b,shapeFlag:M,patchFlag:T,dirs:F}=f;if(y!=null&&Xr(y,null,p,f,!0),M&256){d.ctx.deactivate(f);return}const j=M&1&&F,U=!Hn(f);let G;if(U&&(G=E&&E.onVnodeBeforeUnmount)&&Be(G,d,f),M&6)Xs(f.component,p,v);else{if(M&128){f.suspense.unmount(p,v);return}j&&_t(f,null,d,"beforeUnmount"),M&64?f.type.remove(f,d,p,g,Mt,v):b&&(w!==_e||T>0&&T&64)?Xe(b,d,p,!1,!0):(w===_e&&T&384||!g&&M&16)&&Xe(A,d,p),v&&Ga(f)}(U&&(G=E&&E.onVnodeUnmounted)||j)&&xe(()=>{G&&Be(G,d,f),j&&_t(f,null,d,"unmounted")},p)},Ga=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===_e){Ks(p,v);return}if(d===Un){L(f);return}const w=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:y}=g,A=()=>E(p,w);y?y(f.el,w,A):A()}else w()},Ks=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},Xs=(f,d,p)=>{const{bum:v,scope:g,update:w,subTree:E,um:y}=f;v&&Cr(v),g.stop(),w&&(w.active=!1,De(E,f,d,p)),y&&xe(y,d),xe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Xe=(f,d,p,v=!1,g=!1,w=0)=>{for(let E=w;E<f.length;E++)De(f[E],d,p,v,g)},kn=f=>f.shapeFlag&6?kn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Qa=(f,d,p)=>{f==null?d._vnode&&De(d._vnode,null,null,!0):S(d._vnode||null,f,d,null,null,null,p),ci(),Mo(),d._vnode=f},Mt={p:S,um:De,m:bt,r:Ga,mt:Ae,mc:D,pc:J,pbc:V,n:kn,o:e};let wr,kr;return t&&([wr,kr]=t(Mt)),{render:Qa,hydrate:wr,createApp:Ff(Qa,wr)}}function yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ns(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||ns(o,s)),s.type===pr&&(s.el=o.el)}}function jf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Df=e=>e.__isTeleport,_e=Symbol(void 0),pr=Symbol(void 0),je=Symbol(void 0),Un=Symbol(void 0),rn=[];let Fe=null;function re(e=!1){rn.push(Fe=e?null:[])}function zf(){rn.pop(),Fe=rn[rn.length-1]||null}let dn=1;function yi(e){dn+=e}function rs(e){return e.dynamicChildren=dn>0?Fe||jt:null,zf(),dn>0&&Fe&&Fe.push(e),e}function se(e,t,n,r,a,i){return rs(k(e,t,n,r,a,i,!0))}function Bf(e,t,n,r,a){return rs(X(e,t,n,r,a,!0))}function qr(e){return e?e.__v_isVNode===!0:!1}function Ct(e,t){return e.type===t.type&&e.key===t.key}const hr="__vInternal",as=({key:e})=>e??null,Yn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||ve(e)||z(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&as(t),ref:t&&Yn(t),scopeId:cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return s?(Pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),dn>0&&!o&&Fe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fe.push(l),l}const X=Hf;function Hf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===xf)&&(e=je),qr(e)){const s=ut(e,t,!0);return n&&Pa(s,n),dn>0&&!i&&Fe&&(s.shapeFlag&6?Fe[Fe.indexOf(e)]=s:Fe.push(s)),s.patchFlag|=-2,s}if(tc(e)&&(e=e.__vccOpts),t){t=Uf(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=ua(s)),te(l)&&(Eo(l)&&!R(l)&&(l=pe({},l)),t.style=ca(l))}const o=ce(e)?1:nf(e)?128:Df(e)?64:te(e)?4:z(e)?2:0;return k(e,t,n,r,a,o,i,!0)}function Uf(e){return e?Eo(e)||hr in e?pe({},e):e:null}function ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Wf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&as(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Yn(t)):[a,Yn(t)]:Yn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ge(e=" ",t=0){return X(pr,null,e,t)}function Ta(e,t){const n=X(Un,null,e);return n.staticCount=t,n}function Yf(e="",t=!1){return t?(re(),Bf(je,null,e)):X(je,null,e)}function He(e){return e==null||typeof e=="boolean"?X(je):R(e)?X(_e,null,e.slice()):typeof e=="object"?st(e):X(pr,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ut(e)}function Pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(hr in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[Ge(t)]):n=8);e.children=t,e.shapeFlag|=n}function Wf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ua([t.class,r.class]));else if(a==="style")t.style=ca([t.style,r.style]);else if(rr(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){Te(e,t,7,[n,r])}const Kf=ts();let Xf=0;function qf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Kf,i={uid:Xf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Go(r,a),emitsOptions:Lo(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gl.bind(null,i),e.ce&&e.ce(i),i}let le=null;const Vf=()=>le||Ee,Yt=e=>{le=e,e.scope.on()},Pt=()=>{le&&le.scope.off(),le=null};function is(e){return e.vnode.shapeFlag&4}let mn=!1;function Jf(e,t=!1){mn=t;const{props:n,children:r}=e.vnode,a=is(e);Sf(e,n,a,t),Nf(e,r);const i=a?Gf(e,t):void 0;return mn=!1,i}function Gf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Oo(new Proxy(e.ctx,kf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Zf(e):null;Yt(e),Xt();const i=ft(r,e,0,[e.props,a]);if(qt(),Pt(),uo(i)){if(i.then(Pt,Pt),t)return i.then(o=>{xi(e,o,t)}).catch(o=>{lr(o,e,0)});e.asyncDep=i}else xi(e,i,t)}else os(e,t)}function xi(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=To(t)),os(e,n)}let wi;function os(e,t,n){const r=e.type;if(!e.render){if(!t&&wi&&!r.render){const a=r.template||Ia(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=wi(a,c)}}e.render=r.render||Re}Yt(e),Xt(),Af(e),qt(),Pt()}function Qf(e){return new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}})}function Zf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Qf(e))},slots:e.slots,emit:e.emit,expose:t}}function gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(To(Oo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}}))}function ec(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function tc(e){return z(e)&&"__vccOpts"in e}const Se=(e,t)=>Yl(e,t,mn);function Na(e,t,n){const r=arguments.length;return r===2?te(t)&&!R(t)?qr(t)?X(e,null,[t]):X(e,t):X(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),X(e,t,n))}const nc=Symbol(""),rc=()=>zn(nc),ac="3.2.47",ic="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,ki=Et&&Et.createElement("template"),oc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(ic,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ki.innerHTML=r?`<svg>${e}</svg>`:e;const s=ki.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lc(e,t,n){const r=e.style,a=ce(n);if(n&&!a){if(t&&!ce(t))for(const i in t)n[i]==null&&Vr(r,i,"");for(const i in n)Vr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ai=/\s*!important$/;function Vr(e,t,n){if(R(n))n.forEach(r=>Vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=fc(e,t);Ai.test(n)?e.setProperty(Kt(r),n.replace(Ai,""),"important"):e[r]=n}}const Ci=["Webkit","Moz","ms"],Sr={};function fc(e,t){const n=Sr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Sr[t]=r;r=or(r);for(let a=0;a<Ci.length;a++){const i=Ci[a]+r;if(i in e)return Sr[t]=i}return t}const Ei="http://www.w3.org/1999/xlink";function cc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,n);else{const i=Zs(t);n==null||i&&!lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function uc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=lo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function dc(e,t,n,r){e.addEventListener(t,n,r)}function mc(e,t,n,r){e.removeEventListener(t,n,r)}function pc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=hc(t);if(r){const c=i[t]=bc(r,a);dc(e,s,c,l)}else o&&(mc(e,s,o,l),i[t]=void 0)}}const Oi=/(?:Once|Passive|Capture)$/;function hc(e){let t;if(Oi.test(e)){t={};let r;for(;r=e.match(Oi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Kt(e.slice(2)),t]}let Tr=0;const gc=Promise.resolve(),vc=()=>Tr||(gc.then(()=>Tr=0),Tr=Date.now());function bc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Te(_c(r,n.value),t,5,[r])};return n.value=e,n.attached=vc(),n}function _c(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ii=/^on[a-z]/,yc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?sc(e,r,a):t==="style"?lc(e,n,r):rr(t)?da(t)||pc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xc(e,t,r,a))?uc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cc(e,t,r,a))};function xc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ii.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ii.test(t)&&ce(n)?!1:t in e}const at="transition",Zt="animation",$a=(e,{slots:t})=>Na(zo,wc(e),t);$a.displayName="Transition";const ss={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$a.props=pe({},zo.props,ss);const xt=(e,t=[])=>{R(e)?e.forEach(n=>n(...t)):e&&e(...t)},Si=e=>e?R(e)?e.some(t=>t.length>1):e.length>1:!1;function wc(e){const t={};for(const $ in e)$ in ss||(t[$]=e[$]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,N=kc(a),S=N&&N[0],H=N&&N[1],{onBeforeEnter:_,onEnter:O,onEnterCancelled:C,onLeave:L,onLeaveCancelled:B,onBeforeAppear:ue=_,onAppear:ae=O,onAppearCancelled:D=C}=t,K=($,ne,Ae)=>{wt($,ne?u:s),wt($,ne?c:o),Ae&&Ae()},V=($,ne)=>{$._isLeaving=!1,wt($,m),wt($,x),wt($,h),ne&&ne()},he=$=>(ne,Ae)=>{const Gt=$?ae:O,me=()=>K(ne,$,Ae);xt(Gt,[ne,me]),Ti(()=>{wt(ne,$?l:i),it(ne,$?u:s),Si(Gt)||Pi(ne,r,S,me)})};return pe(t,{onBeforeEnter($){xt(_,[$]),it($,i),it($,o)},onBeforeAppear($){xt(ue,[$]),it($,l),it($,c)},onEnter:he(!1),onAppear:he(!0),onLeave($,ne){$._isLeaving=!0;const Ae=()=>V($,ne);it($,m),Ec(),it($,h),Ti(()=>{$._isLeaving&&(wt($,m),it($,x),Si(L)||Pi($,r,H,Ae))}),xt(L,[$,Ae])},onEnterCancelled($){K($,!1),xt(C,[$])},onAppearCancelled($){K($,!0),xt(D,[$])},onLeaveCancelled($){V($),xt(B,[$])}})}function kc(e){if(e==null)return null;if(te(e))return[Pr(e.enter),Pr(e.leave)];{const t=Pr(e);return[t,t]}}function Pr(e){return sl(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function wt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ti(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ac=0;function Pi(e,t,n,r){const a=e._endId=++Ac,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=Cc(e,t);if(!o)return r();const c=o+"end";let u=0;const m=()=>{e.removeEventListener(c,h),i()},h=x=>{x.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(c,h)}function Cc(e,t){const n=window.getComputedStyle(e),r=N=>(n[N]||"").split(", "),a=r(`${at}Delay`),i=r(`${at}Duration`),o=Ni(a,i),s=r(`${Zt}Delay`),l=r(`${Zt}Duration`),c=Ni(s,l);let u=null,m=0,h=0;t===at?o>0&&(u=at,m=o,h=i.length):t===Zt?c>0&&(u=Zt,m=c,h=l.length):(m=Math.max(o,c),u=m>0?o>c?at:Zt:null,h=u?u===at?i.length:l.length:0);const x=u===at&&/\b(transform|all)(,|$)/.test(r(`${at}Property`).toString());return{type:u,timeout:m,propCount:h,hasTransform:x}}function Ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>$i(n)+$i(e[r])))}function $i(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ec(){return document.body.offsetHeight}const Oc=pe({patchProp:yc},oc);let Mi;function Ic(){return Mi||(Mi=Lf(Oc))}const Sc=(...e)=>{const t=Ic().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Tc(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Tc(e){return ce(e)?document.querySelector(e):e}const ls=function(){return document.ontouchstart!==null?"click":"touchstart"},Gn="__vue_click_away__",fs=function(e,t,n){cs(e);let r=n.context,a=t.value,i=!1;setTimeout(function(){i=!0},0),e[Gn]=function(o){if((!e||!e.contains(o.target))&&a&&i&&typeof a=="function")return a.call(r,o)},document.addEventListener(ls(),e[Gn],!1)},cs=function(e){document.removeEventListener(ls(),e[Gn],!1),delete e[Gn]},Pc=function(e,t,n){t.value!==t.oldValue&&fs(e,t,n)},Nc={install:function(e){e.directive("click-away",$c)}},$c={mounted:fs,updated:Pc,unmounted:cs};function Fi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qn(e){return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(e)}function Mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Li(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fc(e,t,n){return t&&Li(e.prototype,t),n&&Li(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ma(e,t){return Rc(e)||Dc(e,t)||us(e,t)||Bc()}function _n(e){return Lc(e)||jc(e)||us(e)||zc()}function Lc(e){if(Array.isArray(e))return Jr(e)}function Rc(e){if(Array.isArray(e))return e}function jc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function us(e,t){if(e){if(typeof e=="string")return Jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jr(e,t)}}function Jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ri=function(){},Fa={},ds={},ms=null,ps={mark:Ri,measure:Ri};try{typeof window<"u"&&(Fa=window),typeof document<"u"&&(ds=document),typeof MutationObserver<"u"&&(ms=MutationObserver),typeof performance<"u"&&(ps=performance)}catch{}var Hc=Fa.navigator||{},ji=Hc.userAgent,Di=ji===void 0?"":ji,dt=Fa,ee=ds,zi=ms,Tn=ps;dt.document;var nt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",hs=~Di.indexOf("MSIE")||~Di.indexOf("Trident/"),Pn,Nn,$n,Mn,Fn,Qe="___FONT_AWESOME___",Gr=16,gs="fa",vs="svg-inline--fa",Nt="data-fa-i2svg",Qr="data-fa-pseudo-element",Uc="data-fa-pseudo-element-pending",La="data-prefix",Ra="data-icon",Bi="fontawesome-i2svg",Yc="async",Wc=["HTML","HEAD","STYLE","SCRIPT"],bs=function(){try{return!0}catch{return!1}}(),Z="classic",oe="sharp",ja=[Z,oe];function yn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var pn=yn((Pn={},de(Pn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),de(Pn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Pn)),hn=yn((Nn={},de(Nn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Nn,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Nn)),gn=yn(($n={},de($n,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de($n,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),$n)),Kc=yn((Mn={},de(Mn,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Mn,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Mn)),Xc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_s="fa-layers-text",qc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vc=yn((Fn={},de(Fn,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Fn,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Fn)),ys=[1,2,3,4,5,6,7,8,9,10],Jc=ys.concat([11,12,13,14,15,16,17,18,19,20]),Gc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],It={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vn=new Set;Object.keys(hn[Z]).map(vn.add.bind(vn));Object.keys(hn[oe]).map(vn.add.bind(vn));var Qc=[].concat(ja,_n(vn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",It.GROUP,It.SWAP_OPACITY,It.PRIMARY,It.SECONDARY]).concat(ys.map(function(e){return"".concat(e,"x")})).concat(Jc.map(function(e){return"w-".concat(e)})),an=dt.FontAwesomeConfig||{};function Zc(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function eu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var tu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tu.forEach(function(e){var t=Ma(e,2),n=t[0],r=t[1],a=eu(Zc(n));a!=null&&(an[r]=a)})}var xs={styleDefault:"solid",familyDefault:"classic",cssPrefix:gs,replacementClass:vs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};an.familyPrefix&&(an.cssPrefix=an.familyPrefix);var Wt=I(I({},xs),an);Wt.autoReplaceSvg||(Wt.observeMutations=!1);var P={};Object.keys(xs).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Wt[e]=n,on.forEach(function(r){return r(P)})},get:function(){return Wt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Wt.cssPrefix=t,on.forEach(function(n){return n(P)})},get:function(){return Wt.cssPrefix}});dt.FontAwesomeConfig=P;var on=[];function nu(e){return on.push(e),function(){on.splice(on.indexOf(e),1)}}var ot=Gr,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ru(e){if(!(!e||!nt)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var au="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bn(){for(var e=12,t="";e-- >0;)t+=au[Math.random()*62|0];return t}function Vt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Da(e){return e.classList?Vt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ws(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ws(e[n]),'" ')},"").trim()}function vr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function za(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function ou(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function su(e){var t=e.transform,n=e.width,r=n===void 0?Gr:n,a=e.height,i=a===void 0?Gr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&hs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var lu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ks(){var e=gs,t=vs,n=P.cssPrefix,r=P.replacementClass,a=lu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Hi=!1;function Nr(){P.autoAddCss&&!Hi&&(ru(ks()),Hi=!0)}var fu={mixout:function(){return{dom:{css:ks,insertCss:Nr}}},hooks:function(){return{beforeDOMElementCreation:function(){Nr()},beforeI2svg:function(){Nr()}}}},Ze=dt||{};Ze[Qe]||(Ze[Qe]={});Ze[Qe].styles||(Ze[Qe].styles={});Ze[Qe].hooks||(Ze[Qe].hooks={});Ze[Qe].shims||(Ze[Qe].shims=[]);var Le=Ze[Qe],As=[],cu=function e(){ee.removeEventListener("DOMContentLoaded",e),Zn=1,As.map(function(t){return t()})},Zn=!1;nt&&(Zn=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Zn||ee.addEventListener("DOMContentLoaded",cu));function uu(e){nt&&(Zn?setTimeout(e,0):As.push(e))}function xn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ws(e):"<".concat(t," ").concat(iu(r),">").concat(i.map(xn).join(""),"</").concat(t,">")}function Ui(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var du=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?du(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function mu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zr(e){var t=mu(e);return t.length===1?t[0].toString(16):null}function pu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Yi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ea(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Yi(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,Yi(t)):Le.styles[e]=I(I({},Le.styles[e]||{}),i),e==="fas"&&ea("fa",t)}var Ln,Rn,jn,Lt=Le.styles,hu=Le.shims,gu=(Ln={},de(Ln,Z,Object.values(gn[Z])),de(Ln,oe,Object.values(gn[oe])),Ln),Ba=null,Cs={},Es={},Os={},Is={},Ss={},vu=(Rn={},de(Rn,Z,Object.keys(pn[Z])),de(Rn,oe,Object.keys(pn[oe])),Rn);function bu(e){return~Qc.indexOf(e)}function _u(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!bu(a)?a:null}var Ts=function(){var t=function(i){return $r(Lt,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};Cs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Es=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ss=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||P.autoFetchSvg,r=$r(hu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Os=r.names,Is=r.unicodes,Ba=br(P.styleDefault,{family:P.familyDefault})};nu(function(e){Ba=br(e.styleDefault,{family:P.familyDefault})});Ts();function Ha(e,t){return(Cs[e]||{})[t]}function yu(e,t){return(Es[e]||{})[t]}function St(e,t){return(Ss[e]||{})[t]}function Ps(e){return Os[e]||{prefix:null,iconName:null}}function xu(e){var t=Is[e],n=Ha("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Ba}var Ua=function(){return{prefix:null,iconName:null,rest:[]}};function br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,a=pn[r][e],i=hn[r][e]||hn[r][a],o=e in Le.styles?e:null;return i||o||null}var Wi=(jn={},de(jn,Z,Object.keys(gn[Z])),de(jn,oe,Object.keys(gn[oe])),jn);function _r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,Z,"".concat(P.cssPrefix,"-").concat(Z)),de(t,oe,"".concat(P.cssPrefix,"-").concat(oe)),t),o=null,s=Z;(e.includes(i[Z])||e.some(function(c){return Wi[Z].includes(c)}))&&(s=Z),(e.includes(i[oe])||e.some(function(c){return Wi[oe].includes(c)}))&&(s=oe);var l=e.reduce(function(c,u){var m=_u(P.cssPrefix,u);if(Lt[u]?(u=gu[s].includes(u)?Kc[s][u]:u,o=u,c.prefix=u):vu[s].indexOf(u)>-1?(o=u,c.prefix=br(u,{family:s})):m?c.iconName=m:u!==P.replacementClass&&u!==i[Z]&&u!==i[oe]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?Ps(c.iconName):{},x=St(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||x||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Lt.far&&Lt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Ua());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(Lt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=St(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var wu=function(){function e(){Mc(this,e),this.definitions={}}return Fc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),ea(s,o[s]);var l=gn[Z][s];l&&ea(l,o[s]),Ts()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ki=[],Rt={},Ht={},ku=Object.keys(Ht);function Au(e,t){var n=t.mixoutsTo;return Ki=e,Rt={},Object.keys(Ht).forEach(function(r){ku.indexOf(r)===-1&&delete Ht[r]}),Ki.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Qn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Rt[o]||(Rt[o]=[]),Rt[o].push(i[o])})}r.provides&&r.provides(Ht)}),n}function ta(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Rt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function $t(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Rt[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ht[e]?Ht[e].apply(null,t):void 0}function na(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(t)return t=St(n,t)||t,Ui(Ns.definitions,n,t)||Ui(Le.styles,n,t)}var Ns=new wu,Cu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,$t("noAuto")},Eu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?($t("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,uu(function(){Iu({autoReplaceSvgRoot:n}),$t("watch",t)})}},Ou={icon:function(t){if(t===null)return null;if(Qn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=br(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Xc))){var a=_r(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:St(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:St(i,t)||t}}}},Oe={noAuto:Cu,config:P,dom:Eu,parse:Ou,library:Ns,findIconDefinition:na,toHtml:xn},Iu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Le.styles).length>0||P.autoFetchSvg)&&nt&&P.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return xn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nt){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(za(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=vr(I(I({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Tu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Ya(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,x=h===void 0?!1:h,N=r.found?r:n,S=N.width,H=N.height,_=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(K){return m.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(m.classes).join(" "),C={children:[],attributes:I(I({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(H)})},L=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/H*16*.0625,"em")}:{};x&&(C.attributes[Nt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||bn())},children:[l]}),delete C.attributes.title);var B=I(I({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I(I({},L),m.styles)}),ue=r.found&&n.found?et("generateAbstractMask",B)||{children:[],attributes:{}}:et("generateAbstractIcon",B)||{children:[],attributes:{}},ae=ue.children,D=ue.attributes;return B.children=ae,B.attributes=D,s?Tu(B):Su(B)}function Xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Nt]="");var u=I({},o.styles);za(a)&&(u.transform=su({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=vr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Pu(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=vr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mr=Le.styles;function ra(e){var t=e[0],n=e[1],r=e.slice(4),a=Ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(It.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(It.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(It.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Nu={found:!1,width:512,height:512};function $u(e,t){!bs&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function aa(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=Ps(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Mr[t]&&Mr[t][e]){var o=Mr[t][e];return r(ra(o))}$u(e,t),r(I(I({},Nu),{},{icon:P.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var qi=function(){},ia=P.measurePerformance&&Tn&&Tn.mark&&Tn.measure?Tn:{mark:qi,measure:qi},tn='FA "6.5.2"',Mu=function(t){return ia.mark("".concat(tn," ").concat(t," begins")),function(){return $s(t)}},$s=function(t){ia.mark("".concat(tn," ").concat(t," ends")),ia.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},Wa={begin:Mu,end:$s},Wn=function(){};function Vi(e){var t=e.getAttribute?e.getAttribute(Nt):null;return typeof t=="string"}function Fu(e){var t=e.getAttribute?e.getAttribute(La):null,n=e.getAttribute?e.getAttribute(Ra):null;return t&&n}function Lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ru(){if(P.autoReplaceSvg===!0)return Kn.replace;var e=Kn[P.autoReplaceSvg];return e||Kn.replace}function ju(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function Du(e){return ee.createElement(e)}function Ms(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ju:Du:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ms(o,{ceFn:r}))}),a}function zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ms(a),n)}),n.getAttribute(Nt)===null&&P.keepOriginalSource){var r=ee.createComment(zu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Da(n).indexOf(P.replacementClass))return Kn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return xn(s)}).join(`
`);n.setAttribute(Nt,""),n.innerHTML=o}};function Ji(e){e()}function Fs(e,t){var n=typeof t=="function"?t:Wn;if(e.length===0)n();else{var r=Ji;P.mutateApproach===Yc&&(r=dt.requestAnimationFrame||Ji),r(function(){var a=Ru(),i=Wa.begin("mutate");e.map(a),i(),n()})}}var Ka=!1;function Ls(){Ka=!0}function oa(){Ka=!1}var er=null;function Gi(e){if(zi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Wn:t,r=e.nodeCallback,a=r===void 0?Wn:r,i=e.pseudoElementsCallback,o=i===void 0?Wn:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;er=new zi(function(c){if(!Ka){var u=mt();Vt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Vi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Vi(m.target)&&~Gc.indexOf(m.attributeName))if(m.attributeName==="class"&&Fu(m.target)){var h=_r(Da(m.target)),x=h.prefix,N=h.iconName;m.target.setAttribute(La,x||u),N&&m.target.setAttribute(Ra,N)}else Lu(m.target)&&a(m.target)})}}),nt&&er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bu(){er&&er.disconnect()}function Hu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Uu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=_r(Da(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yu(a.prefix,e.innerText)||Ha(a.prefix,Zr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Yu(e){var t=Vt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||bn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Uu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Yu(e),s=ta("parseNodeAttributes",{},e),l=t.styleParser?Hu(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ku=Le.styles;function Rs(e){var t=P.autoReplaceSvg==="nest"?Qi(e,{styleParser:!1}):Qi(e);return~t.extra.classes.indexOf(_s)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var pt=new Set;ja.map(function(e){pt.add("fa-".concat(e))});Object.keys(pn[Z]).map(pt.add.bind(pt));Object.keys(pn[oe]).map(pt.add.bind(pt));pt=_n(pt);function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Bi,"-").concat(m))},a=function(m){return n.remove("".concat(Bi,"-").concat(m))},i=P.autoFetchSvg?pt:ja.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ku));i.includes("fa")||i.push("fa");var o=[".".concat(_s,":not([").concat(Nt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Vt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Wa.begin("onTree"),c=s.reduce(function(u,m){try{var h=Rs(m);h&&u.push(h)}catch(x){bs||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){Fs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Xu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rs(e).then(function(n){n&&Fs([n],t)})}function qu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:na(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:na(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Vu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,x=n.titleId,N=x===void 0?null:x,S=n.classes,H=S===void 0?[]:S,_=n.attributes,O=_===void 0?{}:_,C=n.styles,L=C===void 0?{}:C;if(t){var B=t.prefix,ue=t.iconName,ae=t.icon;return yr(I({type:"icon"},t),function(){return $t("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(h?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(N||bn()):(O["aria-hidden"]="true",O.focusable="false")),Ya({icons:{main:ra(ae),mask:l?ra(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ue,transform:I(I({},Ye),a),symbol:o,title:h,maskId:u,titleId:N,extra:{attributes:O,styles:L,classes:H}})})}},Ju={mixout:function(){return{icon:qu(Vu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zi,n.nodeCallback=Xu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Zi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(x,N){Promise.all([aa(a,s),u.iconName?aa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var H=Ma(S,2),_=H[0],O=H[1];x([n,Ya({icons:{main:_,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(N)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=vr(s);l.length>0&&(a.style=l);var c;return za(o)&&(c=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Gu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return yr({type:"layer"},function(){$t("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(_n(i)).join(" ")},children:o}]})}}}},Qu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return yr({type:"counter",content:n},function(){return $t("beforeDOMElementCreation",{content:n,params:r}),Pu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(_n(s))}})})}}}},Zu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,x=h===void 0?{}:h;return yr({type:"text",content:n},function(){return $t("beforeDOMElementCreation",{content:n,params:r}),Xi({content:n,transform:I(I({},Ye),i),title:s,extra:{attributes:m,styles:x,classes:["".concat(P.cssPrefix,"-layers-text")].concat(_n(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(hs){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ed=new RegExp('"',"ug"),eo=[1105920,1112319];function td(e){var t=e.replace(ed,""),n=pu(t,0),r=n>=eo[0]&&n<=eo[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zr(a?t[0]:t),isSecondary:r||a}}function to(e,t){var n="".concat(Uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Vt(e.children),o=i.filter(function(ae){return ae.getAttribute(Qr)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:Z,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hn[h][l[2].toLowerCase()]:Vc[h][c],N=td(m),S=N.value,H=N.isSecondary,_=l[0].startsWith("FontAwesome"),O=Ha(x,S),C=O;if(_){var L=xu(S);L.iconName&&L.prefix&&(O=L.iconName,x=L.prefix)}if(O&&!H&&(!o||o.getAttribute(La)!==x||o.getAttribute(Ra)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var B=Wu(),ue=B.extra;ue.attributes[Qr]=t,aa(O,x).then(function(ae){var D=Ya(I(I({},B),{},{icons:{main:ae,mask:Ua()},prefix:x,iconName:C,extra:ue,watchable:!0})),K=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(K,e.firstChild):e.appendChild(K),K.outerHTML=D.map(function(V){return xn(V)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function nd(e){return Promise.all([to(e,"::before"),to(e,"::after")])}function rd(e){return e.parentNode!==document.head&&!~Wc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function no(e){if(nt)return new Promise(function(t,n){var r=Vt(e.querySelectorAll("*")).filter(rd).map(nd),a=Wa.begin("searchPseudoElements");Ls(),Promise.all(r).then(function(){a(),oa(),t()}).catch(function(){a(),oa(),n()})})}var ad={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=no,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;P.searchPseudoElements&&no(a)}}},ro=!1,id={mixout:function(){return{dom:{unwatch:function(){Ls(),ro=!0}}}},hooks:function(){return{bootstrap:function(){Gi(ta("mutationObserverCallbacks",{}))},noAuto:function(){Bu()},watch:function(n){var r=n.observeMutationsRoot;ro?oa():Gi(ta("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ao=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},od={mixout:function(){return{parse:{transform:function(n){return ao(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ao(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:h};return{tag:"g",attributes:I({},x.outer),children:[{tag:"g",attributes:I({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),x.path)}]}]}}}},Fr={x:0,y:0,width:"100%",height:"100%"};function io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function sd(e){return e.tag==="g"?e.children:[e]}var ld={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?_r(a.split(" ").map(function(o){return o.trim()})):Ua();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,x=ou({transform:l,containerWidth:m,iconWidth:c}),N={tag:"rect",attributes:I(I({},Fr),{},{fill:"white"})},S=u.children?{children:u.children.map(io)}:{},H={tag:"g",attributes:I({},x.inner),children:[io(I({tag:u.tag,attributes:I(I({},u.attributes),x.path)},S))]},_={tag:"g",attributes:I({},x.outer),children:[H]},O="mask-".concat(s||bn()),C="clip-".concat(s||bn()),L={tag:"mask",attributes:I(I({},Fr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,_]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:sd(h)},L]};return r.push(B,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(O,")")},Fr)}),{children:r,attributes:a}}}},fd={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},cd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ud=[fu,Ju,Gu,Qu,Zu,ad,id,od,ld,fd,cd];Au(ud,{mixoutsTo:Oe});Oe.noAuto;var js=Oe.config,dd=Oe.library;Oe.dom;var tr=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var md=Oe.icon;Oe.layer;var pd=Oe.text;Oe.counter;function oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oo(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nr(e){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(e)}function ye(e,t,n){return t=wd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function gd(e,t){if(e==null)return{};var n=hd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sa(e){return vd(e)||bd(e)||_d(e)||yd()}function vd(e){if(Array.isArray(e))return la(e)}function bd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _d(e,t){if(e){if(typeof e=="string")return la(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return la(e,t)}}function la(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wd(e){var t=xd(e,"string");return typeof t=="symbol"?t:String(t)}var kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ds={exports:{}};(function(e){(function(t){var n=function(_,O,C){if(!c(O)||m(O)||h(O)||x(O)||l(O))return O;var L,B=0,ue=0;if(u(O))for(L=[],ue=O.length;B<ue;B++)L.push(n(_,O[B],C));else{L={};for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&(L[_(ae,C)]=n(_,O[ae],C))}return L},r=function(_,O){O=O||{};var C=O.separator||"_",L=O.split||/(?=[A-Z])/;return _.split(L).join(C)},a=function(_){return N(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(O,C){return C?C.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var O=a(_);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(_,O){return r(_,O).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},h=function(_){return s.call(_)=="[object RegExp]"},x=function(_){return s.call(_)=="[object Boolean]"},N=function(_){return _=_-0,_===_},S=function(_,O){var C=O&&"process"in O?O.process:O;return typeof C!="function"?_:function(L,B){return C(L,_,B)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,O){return n(S(a,O),_)},decamelizeKeys:function(_,O){return n(S(o,O),_,O)},pascalizeKeys:function(_,O){return n(S(i,O),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(kd)})(Ds);var Ad=Ds.exports,Cd=["class","style"];function Ed(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ad.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Od(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Xa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Od(u);break;case"style":l.style=Ed(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=gd(n,Cd);return Na(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var zs=!1;try{zs=!0}catch{}function Id(){if(!zs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}function Sd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ye(t,"fa-".concat(e.size),e.size!==null),ye(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ye(t,"fa-pull-".concat(e.pull),e.pull!==null),ye(t,"fa-swap-opacity",e.swapOpacity),ye(t,"fa-bounce",e.bounce),ye(t,"fa-shake",e.shake),ye(t,"fa-beat",e.beat),ye(t,"fa-fade",e.fade),ye(t,"fa-beat-fade",e.beatFade),ye(t,"fa-flash",e.flash),ye(t,"fa-spin-pulse",e.spinPulse),ye(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function so(e){if(e&&nr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(tr.icon)return tr.icon(e);if(e===null)return null;if(nr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Td=Ea({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Se(function(){return so(t.icon)}),i=Se(function(){return sn("classes",Sd(t))}),o=Se(function(){return sn("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=Se(function(){return sn("mask",so(t.mask))}),l=Se(function(){return md(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Bn(l,function(u){if(!u)return Id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Se(function(){return l.value?Xa(l.value.abstract[0],{},r):null});return function(){return c.value}}});Ea({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=js.familyPrefix,i=Se(function(){return["".concat(a,"-layers")].concat(sa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Na("div",{class:i.value},r.default?r.default():[])}}});Ea({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=js.familyPrefix,i=Se(function(){return sn("classes",[].concat(sa(t.counter?["".concat(a,"-layers-counter")]:[]),sa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Se(function(){return sn("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=Se(function(){var c=pd(t.value.toString(),Me(Me({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Se(function(){return Xa(s.value,{},r)});return function(){return l.value}}});var Pd={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Nd={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},$d={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Md={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]};const Ke=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Fd={},Jt=e=>(ht("data-v-5548493b"),e=e(),gt(),e),Ld={class:"about"},Rd=Jt(()=>k("i",{id:"about"},null,-1)),jd=Jt(()=>k("div",{class:"about_intro"},[k("h2",{class:"about_intro__title"},"Компания"),k("div",{class:"about_intro__text content-text"}," С момента запуска компании в 2013 году мы стали одними из лидеров на рынке бронирования экскурсий ")],-1)),Dd={class:"about_stat"},zd=Jt(()=>k("div",{class:"about_stat__item"},[Ge(" 669 "),k("span",null,"городов")],-1)),Bd=Jt(()=>k("div",{class:"about_stat__item"},[Ge(" 99 "),k("span",null,"стран")],-1)),Hd={class:"about_stat__item"},Ud=Jt(()=>k("span",null,"посетителей в месяц",-1)),Yd=Jt(()=>k("div",{class:"about_content"},[k("p",null," Трипстер — это бизнес с человеческим лицом, который делает продукт про людей и для людей. Мы не просто продаём экскурсии, а выбираем для путешественников лучшее. ")],-1)),Wd={class:"about_arrow-up",href:"#"};function Kd(e,t){const n=Oa("font-awesome-icon");return re(),se("section",Ld,[Rd,jd,k("div",Dd,[zd,Bd,k("div",Hd,[Ge(Ve(new Intl.NumberFormat("ru-RU",{style:"decimal"}).format(2052370))+" ",1),Ud])]),Yd,k("div",null,[k("a",Wd,[X(n,{icon:["fas","angle-up"]})])])])}const Xd=Ke(Fd,[["render",Kd],["__scopeId","data-v-5548493b"]]);const qd={},Bs=e=>(ht("data-v-b9afeadd"),e=e(),gt(),e),Vd={class:"aliens"},Jd=Bs(()=>k("div",{class:"aliens_content content-text"}," Мы такие же увлечённые путешественники и с удовольствием пользуемся Tрипстером сами и советуем его близким ",-1)),Gd=Bs(()=>k("div",{class:"aliens_label"},"Даша, SMM-редактор",-1)),Qd=[Jd,Gd];function Zd(e,t){return re(),se("section",Vd,Qd)}const em=Ke(qd,[["render",Zd],["__scopeId","data-v-b9afeadd"]]),tm=[{id:"conc01",info:"Постоянно растем, чтобы завтра было лучше, чем вчера",image:"/tours-by-locals/images/concept_img_1.png",mobileImage:""},{id:"conc02",info:"Меняемся, чтобы соответствовать современным вызовам",image:"/tours-by-locals/images/concept_img_2.png",mobileImage:""},{id:"conc03",info:"Принимаем все решения открыто и в диалоге со всеми членами команды",image:"/tours-by-locals/images/concept_img_3.png",mobileImage:""},{id:"conc04",info:"Берем в работу классные идеи, которые поданы аргументированно и экспертно",image:"/tours-by-locals/images/concept_img_4.png",mobileImage:""},{id:"conc05",info:"Помогаем и поддерживаем друг друга для достижения общего результата",image:"/tours-by-locals/images/concept_img_5.png",mobileImage:"/tours-by-locals/images/concept_img_5_mobile.png"}];const Hs=e=>(ht("data-v-24e72bbd"),e=e(),gt(),e),nm={class:"concept"},rm=Hs(()=>k("h3",null,[k("span",null,"Наш главный принцип работы —"),Ge(" открытость и возможность каждого члена команды менять процессы в компании ")],-1)),am=Hs(()=>k("div",{class:"concept_intro"}," У нас нет босса и подчинённых, а люди в команде — не просто ресурс. В Трипстере каждый заряжен общей идеей — делать качественный и полезный продукт для путешествий. И в этом ценность общего дела для нас. ",-1)),im={class:"concept_gallery"},om=["srcset"],sm=["srcset"],lm=["src"],fm={__name:"Concept",setup(e){return(t,n)=>(re(),se("section",nm,[rm,am,k("div",im,[(re(!0),se(_e,null,mr(we(tm),r=>(re(),se("div",{class:"concept_gallery__item",key:r.id},[k("p",null,Ve(r.info),1),k("div",null,[k("picture",null,[k("source",{media:"(min-width:768px)",srcset:r.image},null,8,om),k("source",{media:"(max-width:767px)",srcset:r.mobileImage},null,8,sm),k("img",{src:r.image,alt:"workflow"},null,8,lm)])])]))),128))])]))}},cm=Ke(fm,[["__scopeId","data-v-24e72bbd"]]);const um={},dm=e=>(ht("data-v-d7fd7290"),e=e(),gt(),e),mm={class:"footer"},pm={href:"https://jobs.friend.work/68867469BE63840C92B96047B6EFB174",target:"_blank",rel:"noopener noreferrer"},hm=dm(()=>k("div",null,"© 2013–2023, Tripster Limited",-1));function gm(e,t){const n=Oa("font-awesome-icon");return re(),se("footer",mm,[k("a",pm,[Ge("Присоединяйся"),k("span",null,[X(n,{icon:["fas","angle-right"]})])]),hm])}const vm=Ke(um,[["render",gm],["__scopeId","data-v-d7fd7290"]]),bm="/tours-by-locals/assets/guides-011af6a4.png",_m=[{id:"guide01",name:"Марина",image:"/tours-by-locals/images/guide_img_01.jpg",location:"Гид в Москве",rating:"★5,00",path:"https://experience.tripster.ru/guide/107875/"},{id:"guide02",name:"Дмитрий",image:"/tours-by-locals/images/guide_img_02.jpg",location:"Гид в Петербурге",rating:"★5,00",path:"https://experience.tripster.ru/guide/803789/"},{id:"guide03",name:"Анна",image:"/tours-by-locals/images/guide_img_03.jpg",location:"Гид в Сочи",rating:"★5,00",path:"https://experience.tripster.ru/guide/552590/"},{id:"guide04",name:"Ян",image:"/tours-by-locals/images/guide_img_04.jpg",location:"Гид в Бородино",rating:"★5,00",path:"https://experience.tripster.ru/guide/93479/"}];const qa=e=>(ht("data-v-934999e7"),e=e(),gt(),e),ym={class:"guides"},xm=qa(()=>k("h3",{class:"guides_title"}," Трипстер даёт людям возможность получать необычный опыт даже в рамках родного города ",-1)),wm=qa(()=>k("div",{class:"guides_intro"}," Наш основной фокус — на гидах-личностях, которые буквально меняют отношение к привычному или открывают людям совсем неизвестное. ",-1)),km=qa(()=>k("div",{class:"guides_image"},[k("img",{src:bm,alt:"guides"})],-1)),Am={class:"guides_gallery"},Cm=["href","name","rating","location"],Em=["src","alt"],Om={class:"guides_gallery__guide"},Im={__name:"Guides",setup(e){return(t,n)=>(re(),se("section",ym,[xm,wm,km,k("div",Am,[(re(!0),se(_e,null,mr(we(_m),r=>(re(),se("a",{class:"guides_gallery__item",href:r.path,target:"_blank",rel:"noopener noreferrer",key:r.id,name:r.name,rating:r.rating,location:r.location},[k("img",{src:r.image,alt:r.name},null,8,Em),k("div",Om,[k("div",null,[k("p",null,Ve(r.name),1),k("p",null,Ve(r.rating),1)]),k("div",null,[k("p",null,Ve(r.location),1)])])],8,Cm))),128))])]))}},Sm=Ke(Im,[["__scopeId","data-v-934999e7"]]),Us="/tours-by-locals/assets/logo-e0516fd1.svg",Tm="/tours-by-locals/assets/logo_mobile-11f00a95.svg";const Ys=e=>(ht("data-v-83720989"),e=e(),gt(),e),Pm=Us,Nm=Tm,$m={class:"header",id:"#header"},Mm={class:"header_navbar"},Fm=Ta('<div class="header_navbar__logo" data-v-83720989><a href="#" data-v-83720989><picture data-v-83720989><source media="(min-width:768px)" srcset="'+Pm+'" data-v-83720989><source media="(max-width:767px)" srcset="'+Nm+'" data-v-83720989><img src="'+Us+'" alt="Tipster logo" data-v-83720989></picture></a></div>',1),Lm={class:"header_navbar__menu"},Rm=Ys(()=>k("div",null,[k("a",{href:"https://jobs.friend.work/68867469BE63840C92B96047B6EFB174",target:"_blank",rel:"noopener noreferrer"},"Вакансии")],-1)),jm={key:0,class:"header_dropdown__wrapper"},Dm={class:"header_dropdown_content"},zm=["href"],Bm=Ys(()=>k("div",{class:"header_content"},[k("h1",null,[Ge(" Работа "),k("br"),Ge(" в Tripster ")]),k("div",{class:"content-text"}," Сервис онлайн-бронирования необычных экскурсий от местных жителей по всему миру ")],-1)),Hm={__name:"Header",setup(e){const t=Dl(!1),n=()=>{t.value=!1},r=[{name:"Компания",path:"#about"},{name:"Продукт",path:"#product"},{name:"Возможности",path:"#opportunities"},{name:"Команда",path:"#team"}];return(a,i)=>{const o=Oa("font-awesome-icon"),s=wf("click-away");return re(),se("header",$m,[k("nav",Mm,[Fm,k("div",Lm,[Rm,t.value?(re(),se("div",{key:1,class:"menu_close",onClick:i[1]||(i[1]=l=>t.value=!1)},[X(o,{icon:["fas","xmark"]})])):(re(),se("div",{key:0,class:"menu_open",onClick:i[0]||(i[0]=l=>t.value=!0)},[X(o,{icon:["fas","bars"]})]))])]),X($a,{name:"dropdown"},{default:Ro(()=>[t.value?(re(),se("div",jm,[_f((re(),se("div",Dm,[(re(),se(_e,null,mr(r,(l,c)=>k("a",{class:"header_dropdown__link",href:l.path,key:c,onClick:i[2]||(i[2]=u=>t.value=!1)},Ve(l.name),9,zm)),64))])),[[s,n]])])):Yf("",!0)]),_:1}),Bm])}}},Um=Ke(Hm,[["__scopeId","data-v-83720989"]]);const Ym={},Va=e=>(ht("data-v-2b5fc85d"),e=e(),gt(),e),Wm={class:"mission"},Km=Va(()=>k("h3",{class:"mission_title"},[k("span",null,"Главная цель компании —"),Ge(" стать сервисом №1 в сфере путешествий ")],-1)),Xm=Va(()=>k("div",{class:"mission_content"},[k("p",null," Хотим, чтобы Трипстер стал синонимом увлекательного и уникального опыта познания мира. Сегодня в нашей команде сотрудники с опытом работы в топовых компаниях: Яндекс, VK, Ozon, Циан, X5, Авито, Tutu. "),k("p",null," Их экспертиза помогает совершенствовать сервис и обмениваться друг с другом опытом внутри компании. Мы ищем людей, которые хотят делать классный продукт, делиться своими знаниями и развиваться. ")],-1)),qm=Va(()=>k("div",{class:"mission_advantage"}," Трипстер — это прибыльный бизнес, который полностью окупает себя, а значит, не зависит от сторонних инвесторов. Заработанные деньги инвестируются в дальнейший рост, так что даже в условиях нестабильной экономики мы развиваемся. ",-1)),Vm=[Km,Xm,qm];function Jm(e,t){return re(),se("section",Wm,Vm)}const Gm=Ke(Ym,[["render",Jm],["__scopeId","data-v-2b5fc85d"]]);const Qm={},xr=e=>(ht("data-v-4f5dd64a"),e=e(),gt(),e),Zm={class:"opportunities"},ep=xr(()=>k("i",{id:"opportunities"},null,-1)),tp=xr(()=>k("h2",{class:"opportunities_title"},"Возможности",-1)),np=xr(()=>k("div",{class:"opportunities_intro"},[k("p",null," Трипстер — современная и технологичная компания. У нас работают крутые профи из сфер IT и маркетинга, в компании которых можно постоянно учиться новому. ")],-1)),rp=xr(()=>k("ul",{class:"opportunities_list"},[k("li",null," Предлагаем комфортный формат работы на удалёнке и гибкий график, уважаем work-life balance и всячески следим, чтобы наши коллеги не выгорали на работе. "),k("li",null," Проводим для разных команд и отделов тренинги, чтобы усиливать их профессиональные навыки. "),k("li",null," Компенсируем индивидуальное обучение членам команды, когда есть запрос на повышение компетенций в своей области. "),k("li",null," Свободно принимаем любую идею и реализуем её — как в работе, так и вне рабочих процессов. Мы рады инициативным членам команды. ")],-1)),ap=[ep,tp,np,rp];function ip(e,t){return re(),se("section",Zm,ap)}const op=Ke(Qm,[["render",ip],["__scopeId","data-v-4f5dd64a"]]),sp="/tours-by-locals/assets/ceo-4a7536e5.png",lp=[{id:"gal01",name:"Горная Ингушетия — поездка из Пятигорска",image:"/tours-by-locals/images/review_img_01.jpg",info:"Ингушетия приняла нас с распростёртыми объятиями и подарила впечатления на всю жизнь! Благодарю организаторов и гида Романа, экскурсия вышла насыщенной, информативной, вдохновляющей и компания участников вышла замечательной!",author:"Анна",authorImg:"/tours-by-locals/images/review_author_01.png",path:"https://experience.tripster.ru/experience/34255/"},{id:"gal02",name:"Калейдоскоп Каппадокии",image:"/tours-by-locals/images/review_img_02.jpg",info:"Наш гид был Ильхам — просто невероятный! Я таких гидов никогда не встречала! Этот человек создан для работы с людьми. Сам тур невероятный! Эмоции переполняют! Ни одна фотография или видео не передадут эту атмосферу, красоту и не подарят вам такие мощные эмоции ☺",author:"Инна",authorImg:"/tours-by-locals/images/review_author_02.png",path:"https://experience.tripster.ru/experience/27125/"},{id:"gal03",name:"Покорить вершину Тибидабо",image:"/tours-by-locals/images/review_img_03.jpg",info:"Огромная благодарность Людмиле за замечательную экскурсию на Тибидабо! Она прекрасный рассказчик, очень интересно познакомила нас с Тибидабо, с самим храмом и окрестностями. Людмила лёгкий в общении и эрудированный гид. Экскурсия осталась в наших сердцах ярким впечатлением! Большое спасибо:)",author:"Анастасия",authorImg:"/tours-by-locals/images/review_author_03.png",path:"https://experience.tripster.ru/experience/20081/"},{id:"gal04",name:"Плато Бермамыт — открыть российский Гранд-Каньон",image:"/tours-by-locals/images/review_img_04.jpg",info:"Поездка вышла отличная! Компания очень удачно сложилась, все очень весёлые и классные ребята. Наш гид — тоже супер, с ним и поболтать, и посмеяться можно. Также нужно быть готовым, что дороги просто не будет, большую часть времени вас будет трясти как в стиральной машине. Но эти виды того стоят!",author:"Полина",authorImg:"/tours-by-locals/images/review_author_04.png",path:"https://experience.tripster.ru/experience/26282/"}];const fp={class:"product"},cp=Ta('<i id="product" data-v-cd3a31b9></i><div class="product_intro" data-v-cd3a31b9><h2 class="product_intro__title" data-v-cd3a31b9>Продукт</h2><div class="product_intro__text content-text" data-v-cd3a31b9> «Мы делаем полезный и удобный сервис для путешественников и находим экскурсии, которые становятся уникальным опытом встречи с другими людьми, возможностью соприкоснуться с их мировоззрением, с местами, про которые даже не мог подумать и представить» </div><div class="product_intro__ceo" data-v-cd3a31b9><img src="'+sp+'" alt="tipster&#39;s ceo" data-v-cd3a31b9><div data-v-cd3a31b9><p data-v-cd3a31b9>Алексей Мельчаков</p><span data-v-cd3a31b9>CEO, co-founder</span></div></div></div>',2),up={class:"product_gallery"},dp=["href"],mp=["src","alt"],pp={class:"item_author"},hp=["src","alt"],gp={class:"item_info"},vp=["href"],bp={__name:"Product",setup(e){return(t,n)=>(re(),se("section",fp,[cp,k("div",up,[(re(!0),se(_e,null,mr(we(lp),r=>(re(),se("div",{class:"product_gallery__item item",key:r.id},[k("a",{href:r.path,target:"_blank",rel:"noopener noreferrer"},[k("img",{class:"item_image",src:r.image,alt:r.name},null,8,mp)],8,dp),k("div",pp,[k("img",{src:r.authorImg,alt:r.author},null,8,hp),k("p",null,Ve(r.author),1)]),k("div",gp,[k("p",null,Ve(r.info),1)]),k("a",{class:"item_link",href:r.path,target:"_blank",rel:"noopener noreferrer"},Ve(r.name),9,vp)]))),128))])]))}},_p=Ke(bp,[["__scopeId","data-v-cd3a31b9"]]),Ws="/tours-by-locals/assets/team-bdfa5f95.jpg",yp="/tours-by-locals/assets/team_mobile-cc5910f9.jpg";const xp={},wp=Ws,kp=yp,Ap={class:"team"},Cp=Ta('<i id="team" data-v-cfe88774></i><div class="team_info" data-v-cfe88774><h2 class="team_title" data-v-cfe88774>Команда</h2><p data-v-cfe88774> У нас по-настоящему дружная команда. Мы регулярно проводим неофициальные встречи в московском офисе и придумываем форматы онлайн-встреч для того, чтобы не терять связь с ребятами на удалёнке из других городов и стран. </p></div><div class="team_stat" data-v-cfe88774><div class="team_stat__item" data-v-cfe88774> 124 <span data-v-cfe88774>человека</span></div></div><div class="team_image" data-v-cfe88774><picture data-v-cfe88774><source media="(min-width:768px)" srcset="'+wp+'" data-v-cfe88774><source media="(max-width:767px)" srcset="'+kp+'" data-v-cfe88774><img src="'+Ws+'" alt="team" data-v-cfe88774></picture></div>',4),Ep=[Cp];function Op(e,t){return re(),se("section",Ap,Ep)}const Ip=Ke(xp,[["render",Op],["__scopeId","data-v-cfe88774"]]),Sp={class:"main"},Tp={__name:"App",setup(e){return(t,n)=>(re(),se(_e,null,[X(we(Um)),k("main",Sp,[X(we(Xd)),X(we(Gm)),X(we(_p)),X(we(Sm)),X(we(em)),X(we(op)),X(we(Ip)),X(we(cm))]),X(we(vm))],64))}};dd.add(Pd,$d,Md,Nd);const Ja=Sc(Tp);Ja.use(Nc);Ja.component("font-awesome-icon",Td);Ja.mount("#app");

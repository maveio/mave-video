(function(g,d){typeof exports=="object"&&typeof module!="undefined"?d(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],d):(g=typeof globalThis!="undefined"?globalThis:g||self,d(g.Mave={},g.Vue))})(this,function(g,d){"use strict";var pt=Object.defineProperty,mt=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var Pe=(g,d,_)=>d in g?pt(g,d,{enumerable:!0,configurable:!0,writable:!0,value:_}):g[d]=_,W=(g,d)=>{for(var _ in d||(d={}))yt.call(d,_)&&Pe(g,_,d[_]);if(Me)for(var _ of Me(d))gt.call(d,_)&&Pe(g,_,d[_]);return g},G=(g,d)=>mt(g,vt(d));class _{constructor(){this._baseUrl="mave.io"}static getInstance(){return _._inst||(_._inst=new _),_._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),ae=new Map;class de{constructor(e,t){if(this._$cssResult$=!0,t!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ae.get(this.cssText);return K&&e===void 0&&(ae.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const He=i=>new de(typeof i=="string"?i:i+"",J),he=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new de(t,J)},Re=(i,e)=>{K?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),n=window.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)})},ce=K?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return He(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const ue=window.trustedTypes,Oe=ue?ue.emptyScript:"",pe=window.reactiveElementPolyfillSupport,Y={toAttribute(i,e){switch(e){case Boolean:i=i?Oe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},me=(i,e)=>e!==i&&(e==e||i==i),Z={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:me};class k extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const n=this._$Eh(s,t);n!==void 0&&(this._$Eu.set(n,s),e.push(n))}),e}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of s)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(ce(n))}else e!==void 0&&t.push(ce(e));return t}static _$Eh(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Re(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=Z){var n,r;const o=this.constructor._$Eh(e,s);if(o!==void 0&&s.reflect===!0){const u=((r=(n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:Y.toAttribute)(t,s.type);this._$Ei=e,u==null?this.removeAttribute(o):this.setAttribute(o,u),this._$Ei=null}}_$AK(e,t){var s,n,r;const o=this.constructor,u=o._$Eu.get(e);if(u!==void 0&&this._$Ei!==u){const l=o.getPropertyOptions(u),a=l.converter,f=(r=(n=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&r!==void 0?r:Y.fromAttribute;this._$Ei=u,this[u]=f(t,l.type),this._$Ei=null}}requestUpdate(e,t,s){let n=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||me)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(s)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$ES(s,this[s],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},pe==null||pe({ReactiveElement:k}),((X=globalThis.reactiveElementVersions)!==null&&X!==void 0?X:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q;const C=globalThis.trustedTypes,ve=C?C.createPolicy("lit-html",{createHTML:i=>i}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+$,Be=`<${ye}>`,x=document,B=(i="")=>x.createComment(i),N=i=>i===null||typeof i!="object"&&typeof i!="function",ge=Array.isArray,Ne=i=>{var e;return ge(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,fe=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,be=/'/g,$e=/"/g,we=/^(?:script|style|textarea|title)$/i,Le=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),V=Le(1),T=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ae=new WeakMap,ze=(i,e,t)=>{var s,n;const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const u=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new j(e.insertBefore(B(),u),u,void 0,t!=null?t:{})}return o._$AI(i),o},U=x.createTreeWalker(x,129,null,!1),je=(i,e)=>{const t=i.length-1,s=[];let n,r=e===2?"<svg>":"",o=L;for(let l=0;l<t;l++){const a=i[l];let f,c,h=-1,v=0;for(;v<a.length&&(o.lastIndex=v,c=o.exec(a),c!==null);)v=o.lastIndex,o===L?c[1]==="!--"?o=_e:c[1]!==void 0?o=fe:c[2]!==void 0?(we.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=w):c[3]!==void 0&&(o=w):o===w?c[0]===">"?(o=n!=null?n:L,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,f=c[1],o=c[3]===void 0?w:c[3]==='"'?$e:be):o===$e||o===be?o=w:o===_e||o===fe?o=L:(o=w,n=void 0);const E=o===w&&i[l+1].startsWith("/>")?" ":"";r+=o===L?a+Be:h>=0?(s.push(f),a.slice(0,h)+"$lit$"+a.slice(h)+$+E):a+$+(h===-2?(s.push(void 0),l):E)}const u=r+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ve!==void 0?ve.createHTML(u):u,s]};class z{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let r=0,o=0;const u=e.length-1,l=this.parts,[a,f]=je(e,t);if(this.el=z.createElement(a,s),U.currentNode=this.el.content,t===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(n=U.nextNode())!==null&&l.length<u;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith($)){const v=f[o++];if(c.push(h),v!==void 0){const E=n.getAttribute(v.toLowerCase()+"$lit$").split($),S=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:S[2],strings:E,ctor:S[1]==="."?Ve:S[1]==="?"?qe:S[1]==="@"?Fe:D})}else l.push({type:6,index:r})}for(const h of c)n.removeAttribute(h)}if(we.test(n.tagName)){const c=n.textContent.split($),h=c.length-1;if(h>0){n.textContent=C?C.emptyScript:"";for(let v=0;v<h;v++)n.append(c[v],B()),U.nextNode(),l.push({type:2,index:++r});n.append(c[h],B())}}}else if(n.nodeType===8)if(n.data===ye)l.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf($,c+1))!==-1;)l.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function M(i,e,t=i,s){var n,r,o,u;if(e===T)return e;let l=s!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[s]:t._$Cu;const a=N(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,t,s)),s!==void 0?((o=(u=t)._$Cl)!==null&&o!==void 0?o:u._$Cl=[])[s]=l:t._$Cu=l),l!==void 0&&(e=M(i,l._$AS(i,e.values),l,s)),e}class Ie{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:n}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:x).importNode(s,!0);U.currentNode=r;let o=U.nextNode(),u=0,l=0,a=n[0];for(;a!==void 0;){if(u===a.index){let f;a.type===2?f=new j(o,o.nextSibling,this,e):a.type===1?f=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(f=new We(o,this,e)),this.v.push(f),a=n[++l]}u!==(a==null?void 0:a.index)&&(o=U.nextNode(),u++)}return r}m(e){let t=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class j{constructor(e,t,s,n){var r;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),N(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==T&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Ne(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==y&&N(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=z.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(s);else{const o=new Ie(r,this),u=o.p(this.options);o.m(s),this.k(u),this._$AH=o}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new z(e)),t}S(e){ge(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const r of e)n===t.length?t.push(s=new j(this.M(B()),this.M(B()),this,this.options)):s=t[n],s._$AI(r),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class D{constructor(e,t,s,n,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,n){const r=this.strings;let o=!1;if(r===void 0)e=M(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==T,o&&(this._$AH=e);else{const u=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=M(this,u[s+l],t,l),a===T&&(a=this._$AH[l]),o||(o=!N(a)||a!==this._$AH[l]),a===y?e=y:e!==y&&(e+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}o&&!n&&this.C(e)}C(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ve extends D{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===y?void 0:e}}const De=C?C.emptyScript:"";class qe extends D{constructor(){super(...arguments),this.type=4}C(e){e&&e!==y?this.element.setAttribute(this.name,De):this.element.removeAttribute(this.name)}}class Fe extends D{constructor(e,t,s,n,r){super(e,t,s,n,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=M(this,e,t,0))!==null&&s!==void 0?s:y)===T)return;const n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class We{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const Ee=window.litHtmlPolyfillSupport;Ee==null||Ee(z,j),((Q=globalThis.litHtmlVersions)!==null&&Q!==void 0?Q:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee,te;class P extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return T}}P.finalized=!0,P._$litElement$=!0,(ee=globalThis.litElementHydrateSupport)===null||ee===void 0||ee.call(globalThis,{LitElement:P});const Se=globalThis.litElementPolyfillSupport;Se==null||Se({LitElement:P}),((te=globalThis.litElementVersions)!==null&&te!==void 0?te:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?G(W({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function b(i){return(e,t)=>t!==void 0?((s,n,r)=>{n.constructor.createProperty(r,s)})(i,e,t):Ge(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(i){return b(G(W({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=({finisher:i,descriptor:e})=>(t,s)=>{var n;if(s===void 0){const r=(n=t.originalKey)!==null&&n!==void 0?n:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:G(W({},t),{key:r});return i!=null&&(o.finisher=function(u){i(u,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i==null||i(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(i,e){return Ke({descriptor:t=>{const s={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&o!==void 0?o:null),this[n]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ie;((ie=window.HTMLSlotElement)===null||ie===void 0?void 0:ie.prototype.assignedElements)!=null;const Je=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],I=i=>{let e=0;for(let t=0;t<i.length;t++){const s=i[t],n=Je.indexOf(s);e=e*83+n}return e},se=i=>{let e=i/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},ne=i=>{let e=Math.max(0,Math.min(1,i));return e<=.0031308?Math.round(e*12.92*255+.5):Math.round((1.055*Math.pow(e,1/2.4)-.055)*255+.5)},Xe=i=>i<0?-1:1,oe=(i,e)=>Xe(i)*Math.pow(Math.abs(i),e);class ke extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}}const Ye=i=>{if(!i||i.length<6)throw new ke("The blurhash string must be at least 6 characters");const e=I(i[0]),t=Math.floor(e/9)+1,s=e%9+1;if(i.length!==4+2*s*t)throw new ke(`blurhash length mismatch: length is ${i.length} but it should be ${4+2*s*t}`)},Ze=i=>{const e=i>>16,t=i>>8&255,s=i&255;return[se(e),se(t),se(s)]},Qe=(i,e)=>{const t=Math.floor(i/361),s=Math.floor(i/19)%19,n=i%19;return[oe((t-9)/9,2)*e,oe((s-9)/9,2)*e,oe((n-9)/9,2)*e]},et=(i,e,t,s)=>{Ye(i),s=s|1;const n=I(i[0]),r=Math.floor(n/9)+1,o=n%9+1,l=(I(i[1])+1)/166,a=new Array(o*r);for(let h=0;h<a.length;h++)if(h===0){const v=I(i.substring(2,6));a[h]=Ze(v)}else{const v=I(i.substring(4+h*2,6+h*2));a[h]=Qe(v,l*s)}const f=e*4,c=new Uint8ClampedArray(f*t);for(let h=0;h<t;h++)for(let v=0;v<e;v++){let E=0,S=0,Ue=0;for(let q=0;q<r;q++)for(let F=0;F<o;F++){const re=Math.cos(Math.PI*v*F/e)*Math.cos(Math.PI*h*q/t);let le=a[F+q*o];E+=le[0]*re,S+=le[1]*re,Ue+=le[2]*re}let ht=ne(E),ct=ne(S),ut=ne(Ue);c[4*v+0+h*f]=ht,c[4*v+1+h*f]=ct,c[4*v+2+h*f]=ut,c[4*v+3+h*f]=255}return c};var Ce=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Te=(i,e,t)=>e in i?Ce(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,nt=(i,e)=>{for(var t in e||(e={}))it.call(e,t)&&Te(i,t,e[t]);if(xe)for(var t of xe(e))st.call(e,t)&&Te(i,t,e[t]);return i},p=(i,e,t,s)=>{for(var n=s>1?void 0:s?tt(e,t):e,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Ce(e,t,n),n},O=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return O._inst||(O._inst=new O),O._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}},ot=he`
  dialog {
    position: relative;
    display: flex;
    float: left;
    align-items: center;
    border-width: 0;
    width: 100%;
    height: 100%;
    max-width: 100vw !important;
    max-height: 100vh !important;
    padding: 0;
    margin: 0;
    background: transparent;
  }

  canvas {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .active_overlay {
    position: fixed;
    background: black;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .active_overlay video {
    object-fit: contain;
  }

  iframe {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 20;
    transition-property: all;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  video {
    transform: scale(1.01);
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    object-fit: cover;
  }

  video::cue {
    color: white;
    opacity: 1;
    background-color: rgba(0, 0, 0, 1) !important;
    /* background-image: linear-gradient(to bottom, black, black); */
  }

  video::-webkit-media-text-track-container {
    opacity: 1;
    top: -3rem;
    overflow: visible !important;
  }

  video::-webkit-media-text-track-background {
    display: none !important;
  }

  video::-webkit-media-text-track-display {
    display: inline-block !important;
    /* border: 1px solid red; */
    overflow: visible !important;
  }

  video::-webkit-media-text-track-display-backdrop {
    background: transparent !important;
  }
`,A=class extends P{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var i;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(i=this.iframe)==null||i.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var i;document.documentElement.setAttribute("style",this._globalStyle||""),(i=this.iframe)==null||i.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return V`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${O.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded&&this._delayed?"loaded":"initial"}
          ></iframe>
        </div>
      </div>
    `}iframeLoaded(){this._loaded=!0}};A.styles=he`
    .ghost {
      background-color: #1c1917;
      width: 14rem;
      height: 100vh;
      position: fixed;
      margin-right: -14rem;
      top: 0;
      right: 0;
      z-index: 10000;
      transition: margin 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }

    .ghost.active {
      margin-right: 0;
    }

    .settings {
      width: 14rem;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10000;
    }

    .initial {
      opacity: 0;
      transform: scale(0.95);
      transition: opacity, transform 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }

    .loaded {
      opacity: 1;
      transform: scale(1);
      transition: opacity, transform 150ms;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  `,p([b({type:String})],A.prototype,"embed",2),p([R("#iframe")],A.prototype,"iframe",2),p([H()],A.prototype,"_ghostActive",2),p([H()],A.prototype,"_loaded",2),p([H()],A.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",A);var rt=crypto.getRandomValues(new Uint8Array(21)).reduce((i,e)=>i+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-",""),m=class extends P{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=O.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1}connectedCallback(){var i;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((i=this.video)==null?void 0:i.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));let i=document.querySelector("mave-settings");i&&i.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=1&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},750),this.loadeddata=!0),!this.canPlay){let i=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(i.bind(this),25),this.canPlay=!0)};i()}}videoHandler(i){if(this.video)switch(i.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let e=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(e)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let e=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:e}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(i.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(i){var e;let{data:t}=i,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let o=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:o}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let n=t.event;switch(Object.keys(n)[0]){case"play":n.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=n.muted;break;case"volume":this.video.volume=n.volume;break;case"currentTime":this.video.currentTime=n.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,this._blurhashShouldBeVisible&&(this._blurhashShouldBeVisible=!1),this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let o=document.createElement("mave-settings");o.setAttribute("embed",this.embed),document.body.appendChild(o)}else{let o=document.querySelector("mave-settings");o&&o.remove()}break;case"mave:close_settings":this._settingsActive=!1;let r=document.querySelector("mave-settings");r&&r.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((e=this.video)==null?void 0:e.paused)&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=t.video_src,this.autoplay=t.autoplay,t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){let i=document.createElement("style");if(this._overlayActive&&(i.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)i.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;else if(this.aspectRatio){let[e,t]=this.aspectRatio.split(":");i.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${e} / ${t}; width: 100%; min-width: 320px; min-height: 180px; }`}else i.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";return i}closeDialog(){this._overlayActive=!1,this.sendMessage("mave:closing_overlay")}poster(){var i;return`${(i=this.src)==null?void 0:i.replace("stream","image")}/thumbnail.jpg?time=0`}render(){return V`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive?"active_overlay":""}
      >
        ${this.renderCanvas()}
        ${this.src?V`
              ${this.initiateScript()}

              <video
                id="video"
                playsinline
                @canplay=${this.videoHandler}
                @play=${this.videoHandler}
                @pause=${this.videoHandler}
                @ended=${this.videoHandler}
                @progress=${this.videoHandler}
                @loadeddata=${this.videoHandler}
                @timeupdate=${this.videoHandler}
                .poster=${this.poster()}
                .muted=${this.muted}
                .autoplay=${this.autoplay}
                .loop=${this.loop}
                .src=${this.src}
              ></video>
            `:""}
        ${this.embed?V`
              <iframe
                title="embed"
                id="iframe"
                src="${this.generateUrl()}"
                sandbox="allow-scripts allow-forms allow-same-origin"
                allow="autoplay; fullscreen; clipboard-write;"
                frameborder="0"
                scrolling="no"
              >
              </iframe>
            `:""}
      </dialog>
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}?reference_id=${rt}`}sendMessage(i,e={}){if(!this.iframe.contentWindow||!this.video)return;let t=nt({message:i},e);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let i=document.createElement("canvas"),e=et(this.blurhash,320,180),t=i.getContext("2d"),s=t==null?void 0:t.createImageData(320,180);return s==null||s.data.set(e),s&&(t==null||t.putImageData(s,0,0)),i}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let i=document.createElement("script");return i.onload=this.scriptHandler.bind(this),i.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",i}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let i=new Hls;i.loadSource(this.src),i.attachMedia(this.video),i.subtitleTrack=0,i.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:i,bottom:e}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,s=(i>0||e>0)&&i<t;this.sendMessage(s?"mave:video_in_viewport":"mave:video_out_viewport")}};m.styles=ot,p([b({type:String})],m.prototype,"embed",2),p([b({type:String})],m.prototype,"reference_id",2),p([b({type:String})],m.prototype,"display_name",2),p([b({type:String})],m.prototype,"jwt",2),p([b({type:String})],m.prototype,"classname",2),p([b({type:Boolean})],m.prototype,"muted",2),p([b({type:Boolean})],m.prototype,"autoplay",2),p([b({type:Boolean})],m.prototype,"loop",2),p([b({type:String})],m.prototype,"src",2),p([b({type:String})],m.prototype,"blurhash",2),p([b({type:String,attribute:"aspect-ratio"})],m.prototype,"aspectRatio",2),p([b({type:String})],m.prototype,"width",2),p([b({type:String})],m.prototype,"height",2),p([R("#dialog")],m.prototype,"dialog",2),p([R("#iframe")],m.prototype,"iframe",2),p([R("#video")],m.prototype,"video",2),p([R("#canvas")],m.prototype,"canvas",2),p([R("#script")],m.prototype,"script",2),p([H()],m.prototype,"_settingsActive",2),p([H()],m.prototype,"_blurhashShouldBeVisible",2),p([H()],m.prototype,"_overlayActive",2),customElements.get("mave-component")||customElements.define("mave-component",m);const lt=["src","blurhash","loop","autoplay","muted","width","height","aspectRatio"],at=d.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},async setup(i){let e,t;const s=i,n=`https://${_.getInstance().baseUrl}/${s.embed}/json`,r=async()=>{try{return await(await fetch(n)).json()}catch(l){return console.log("error",l),null}},o=([e,t]=d.withAsyncContext(()=>r()),e=await e,t(),e),u=o.settingsAspectRatio||o.videoAspectRatio;return(l,a)=>(d.openBlock(),d.createElementBlock("mave-component",d.mergeProps(l.$props,{src:d.unref(o).videoSource,blurhash:d.unref(o).videoBlurHash,loop:d.unref(o).loop,autoplay:d.unref(o).autoPlay,muted:d.unref(o).autoPlay,width:d.unref(o).width,height:d.unref(o).height,aspectRatio:d.unref(u)}),null,16,lt))}}),dt=d.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},setup(i){return(e,t)=>(d.openBlock(),d.createBlock(d.Suspense,null,{default:d.withCtx(()=>[d.createVNode(at,d.normalizeProps(d.guardReactiveProps(e.$props)),null,16)]),_:1}))}});g.Mave=dt,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

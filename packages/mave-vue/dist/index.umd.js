(function(y,d){typeof exports=="object"&&typeof module!="undefined"?d(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],d):(y=typeof globalThis!="undefined"?globalThis:y||self,d(y.Mave={},y.Vue))})(this,function(y,d){"use strict";var pt=Object.defineProperty,vt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var He=(y,d,_)=>d in y?pt(y,d,{enumerable:!0,configurable:!0,writable:!0,value:_}):y[d]=_,W=(y,d)=>{for(var _ in d||(d={}))gt.call(d,_)&&He(y,_,d[_]);if(Ue)for(var _ of Ue(d))yt.call(d,_)&&He(y,_,d[_]);return y},G=(y,d)=>vt(y,mt(d));class _{constructor(){this._baseUrl="mave.io"}static getInstance(){return _._inst||(_._inst=new _),_._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),le=new Map;class de{constructor(e,t){if(this._$cssResult$=!0,t!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=le.get(this.cssText);return K&&e===void 0&&(le.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Pe=i=>new de(typeof i=="string"?i:i+"",J),he=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new de(t,J)},Re=(i,e)=>{K?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),o=window.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,i.appendChild(s)})},ce=K?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Pe(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const ue=window.trustedTypes,Oe=ue?ue.emptyScript:"",pe=window.reactiveElementPolyfillSupport,Y={toAttribute(i,e){switch(e){case Boolean:i=i?Oe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ve=(i,e)=>e!==i&&(e==e||i==i),Z={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ve};class C extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const o=this._$Eh(s,t);o!==void 0&&(this._$Eu.set(o,s),e.push(o))}),e}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of s)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)t.unshift(ce(o))}else e!==void 0&&t.push(ce(e));return t}static _$Eh(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Re(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=Z){var o,r;const n=this.constructor._$Eh(e,s);if(n!==void 0&&s.reflect===!0){const u=((r=(o=s.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&r!==void 0?r:Y.toAttribute)(t,s.type);this._$Ei=e,u==null?this.removeAttribute(n):this.setAttribute(n,u),this._$Ei=null}}_$AK(e,t){var s,o,r;const n=this.constructor,u=n._$Eu.get(e);if(u!==void 0&&this._$Ei!==u){const a=n.getPropertyOptions(u),l=a.converter,b=(r=(o=(s=l)===null||s===void 0?void 0:s.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&r!==void 0?r:Y.fromAttribute;this._$Ei=u,this[u]=b(t,a.type),this._$Ei=null}}requestUpdate(e,t,s){let o=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||ve)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,r)=>this[r]=o),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(s)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdated)===null||o===void 0?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$ES(s,this[s],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},pe==null||pe({ReactiveElement:C}),((X=globalThis.reactiveElementVersions)!==null&&X!==void 0?X:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q;const T=globalThis.trustedTypes,me=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,ge="?"+$,Be=`<${ge}>`,M=document,B=(i="")=>M.createComment(i),L=i=>i===null||typeof i!="object"&&typeof i!="function",ye=Array.isArray,Le=i=>{var e;return ye(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,be=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,fe=/'/g,$e=/"/g,we=/^(?:script|style|textarea|title)$/i,Ne=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),z=Ne(1),U=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ae=new WeakMap,ze=(i,e,t)=>{var s,o;const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let n=r._$litPart$;if(n===void 0){const u=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new D(e.insertBefore(B(),u),u,void 0,t!=null?t:{})}return n._$AI(i),n},H=M.createTreeWalker(M,129,null,!1),je=(i,e)=>{const t=i.length-1,s=[];let o,r=e===2?"<svg>":"",n=N;for(let a=0;a<t;a++){const l=i[a];let b,c,h=-1,m=0;for(;m<l.length&&(n.lastIndex=m,c=n.exec(l),c!==null);)m=n.lastIndex,n===N?c[1]==="!--"?n=_e:c[1]!==void 0?n=be:c[2]!==void 0?(we.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=A):c[3]!==void 0&&(n=A):n===A?c[0]===">"?(n=o!=null?o:N,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,b=c[1],n=c[3]===void 0?A:c[3]==='"'?$e:fe):n===$e||n===fe?n=A:n===_e||n===be?n=N:(n=A,o=void 0);const k=n===A&&i[a+1].startsWith("/>")?" ":"";r+=n===N?l+Be:h>=0?(s.push(b),l.slice(0,h)+"$lit$"+l.slice(h)+$+k):l+$+(h===-2?(s.push(void 0),a):k)}const u=r+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[me!==void 0?me.createHTML(u):u,s]};class j{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let r=0,n=0;const u=e.length-1,a=this.parts,[l,b]=je(e,t);if(this.el=j.createElement(l,s),H.currentNode=this.el.content,t===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(o=H.nextNode())!==null&&a.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith($)){const m=b[n++];if(c.push(h),m!==void 0){const k=o.getAttribute(m.toLowerCase()+"$lit$").split($),x=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:x[2],strings:k,ctor:x[1]==="."?Ve:x[1]==="?"?qe:x[1]==="@"?Fe:I})}else a.push({type:6,index:r})}for(const h of c)o.removeAttribute(h)}if(we.test(o.tagName)){const c=o.textContent.split($),h=c.length-1;if(h>0){o.textContent=T?T.emptyScript:"";for(let m=0;m<h;m++)o.append(c[m],B()),H.nextNode(),a.push({type:2,index:++r});o.append(c[h],B())}}}else if(o.nodeType===8)if(o.data===ge)a.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf($,c+1))!==-1;)a.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(e,t){const s=M.createElement("template");return s.innerHTML=e,s}}function P(i,e,t=i,s){var o,r,n,u;if(e===U)return e;let a=s!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[s]:t._$Cu;const l=L(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,s)),s!==void 0?((n=(u=t)._$Cl)!==null&&n!==void 0?n:u._$Cl=[])[s]=a:t._$Cu=a),a!==void 0&&(e=P(i,a._$AS(i,e.values),a,s)),e}class De{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:M).importNode(s,!0);H.currentNode=r;let n=H.nextNode(),u=0,a=0,l=o[0];for(;l!==void 0;){if(u===l.index){let b;l.type===2?b=new D(n,n.nextSibling,this,e):l.type===1?b=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(b=new We(n,this,e)),this.v.push(b),l=o[++a]}u!==(l==null?void 0:l.index)&&(n=H.nextNode(),u++)}return r}m(e){let t=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class D{constructor(e,t,s,o){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cg=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),L(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==U&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Le(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==g&&L(this._$AH)?this._$AA.nextSibling.data=e:this.k(M.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=j.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(s);else{const n=new De(r,this),u=n.p(this.options);n.m(s),this.k(u),this._$AH=n}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new j(e)),t}S(e){ye(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const r of e)o===t.length?t.push(s=new D(this.M(B()),this.M(B()),this,this.options)):s=t[o],s._$AI(r),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class I{constructor(e,t,s,o,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const r=this.strings;let n=!1;if(r===void 0)e=P(this,e,t,0),n=!L(e)||e!==this._$AH&&e!==U,n&&(this._$AH=e);else{const u=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=P(this,u[s+a],t,a),l===U&&(l=this._$AH[a]),n||(n=!L(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}n&&!o&&this.C(e)}C(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ve extends I{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===g?void 0:e}}const Ie=T?T.emptyScript:"";class qe extends I{constructor(){super(...arguments),this.type=4}C(e){e&&e!==g?this.element.setAttribute(this.name,Ie):this.element.removeAttribute(this.name)}}class Fe extends I{constructor(e,t,s,o,r){super(e,t,s,o,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=P(this,e,t,0))!==null&&s!==void 0?s:g)===U)return;const o=this._$AH,r=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==g&&(o===g||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class We{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const Ee=window.litHtmlPolyfillSupport;Ee==null||Ee(j,D),((Q=globalThis.litHtmlVersions)!==null&&Q!==void 0?Q:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee,te;class R extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return U}}R.finalized=!0,R._$litElement$=!0,(ee=globalThis.litElementHydrateSupport)===null||ee===void 0||ee.call(globalThis,{LitElement:R});const Se=globalThis.litElementPolyfillSupport;Se==null||Se({LitElement:R}),((te=globalThis.litElementVersions)!==null&&te!==void 0?te:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?G(W({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function f(i){return(e,t)=>t!==void 0?((s,o,r)=>{o.constructor.createProperty(r,s)})(i,e,t):Ge(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(i){return f(G(W({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=({finisher:i,descriptor:e})=>(t,s)=>{var o;if(s===void 0){const r=(o=t.originalKey)!==null&&o!==void 0?o:t.key,n=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:G(W({},t),{key:r});return i!=null&&(n.finisher=function(u){i(u,r)}),n}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i==null||i(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(i,e){return Ke({descriptor:t=>{const s={get(){var o,r;return(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var r,n;return this[o]===void 0&&(this[o]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null),this[o]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ie;((ie=window.HTMLSlotElement)===null||ie===void 0?void 0:ie.prototype.assignedElements)!=null;const Je=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],V=i=>{let e=0;for(let t=0;t<i.length;t++){const s=i[t],o=Je.indexOf(s);e=e*83+o}return e},se=i=>{let e=i/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},oe=i=>{let e=Math.max(0,Math.min(1,i));return e<=.0031308?Math.round(e*12.92*255+.5):Math.round((1.055*Math.pow(e,1/2.4)-.055)*255+.5)},Xe=i=>i<0?-1:1,ne=(i,e)=>Xe(i)*Math.pow(Math.abs(i),e);class ke extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}}const Ye=i=>{if(!i||i.length<6)throw new ke("The blurhash string must be at least 6 characters");const e=V(i[0]),t=Math.floor(e/9)+1,s=e%9+1;if(i.length!==4+2*s*t)throw new ke(`blurhash length mismatch: length is ${i.length} but it should be ${4+2*s*t}`)},Ze=i=>{const e=i>>16,t=i>>8&255,s=i&255;return[se(e),se(t),se(s)]},Qe=(i,e)=>{const t=Math.floor(i/361),s=Math.floor(i/19)%19,o=i%19;return[ne((t-9)/9,2)*e,ne((s-9)/9,2)*e,ne((o-9)/9,2)*e]},et=(i,e,t,s)=>{Ye(i),s=s|1;const o=V(i[0]),r=Math.floor(o/9)+1,n=o%9+1,a=(V(i[1])+1)/166,l=new Array(n*r);for(let h=0;h<l.length;h++)if(h===0){const m=V(i.substring(2,6));l[h]=Ze(m)}else{const m=V(i.substring(4+h*2,6+h*2));l[h]=Qe(m,a*s)}const b=e*4,c=new Uint8ClampedArray(b*t);for(let h=0;h<t;h++)for(let m=0;m<e;m++){let k=0,x=0,Me=0;for(let q=0;q<r;q++)for(let F=0;F<n;F++){const re=Math.cos(Math.PI*m*F/e)*Math.cos(Math.PI*h*q/t);let ae=l[F+q*n];k+=ae[0]*re,x+=ae[1]*re,Me+=ae[2]*re}let ht=oe(k),ct=oe(x),ut=oe(Me);c[4*m+0+h*b]=ht,c[4*m+1+h*b]=ct,c[4*m+2+h*b]=ut,c[4*m+3+h*b]=255}return c};var xe=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,Ce=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Te=(i,e,t)=>e in i?xe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ot=(i,e)=>{for(var t in e||(e={}))it.call(e,t)&&Te(i,t,e[t]);if(Ce)for(var t of Ce(e))st.call(e,t)&&Te(i,t,e[t]);return i},p=(i,e,t,s)=>{for(var o=s>1?void 0:s?tt(e,t):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=(s?n(e,t,o):n(o))||o);return s&&o&&xe(e,t,o),o},O=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return O._inst||(O._inst=new O),O._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}},nt=he`
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

  dialog::backdrop {
    background: black;
  }

  dialog[open] {
    -webkit-animation: show 250ms ease-out normal;
  }

  @-webkit-keyframes show {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 100;
      transform: scale(1);
    }
  }

  canvas,
  .poster {
    transform: scale(1.01);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .active_upload {
    width: calc(100vw - 14rem);
    height: 100vh;
  }

  .active_upload::backdrop {
    background: rgba(0, 0, 0, 0.5);
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
`,w=class extends R{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var i;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0,this.dialog.showModal()},0),(i=this.iframe)==null||i.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var i;document.documentElement.setAttribute("style",this._globalStyle||""),(i=this.iframe)==null||i.removeEventListener("load",this.iframeLoaded.bind(this)),this.dialog.close(),super.disconnectedCallback()}dialogHandler(i){i.type=="close"&&window.postMessage({message:"mave:close_settings",hash:this.embed},"*"),i.target==this.dialog&&this.dialog.close()}render(){return z`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
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
      </dialog>
    `}iframeLoaded(){this._loaded=!0}};w.styles=he`
    dialog {
      position: relative;
      display: flex;
      float: right;
      align-items: center;
      border-width: 0;
      background: transparent;
      height: 100vh;
    }

    dialog::backdrop {
      background: none;
    }

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
  `,p([f({type:String})],w.prototype,"embed",2),p([S("#dialog")],w.prototype,"dialog",2),p([S("#iframe")],w.prototype,"iframe",2),p([E()],w.prototype,"_ghostActive",2),p([E()],w.prototype,"_loaded",2),p([E()],w.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",w);var rt=crypto.getRandomValues(new Uint8Array(21)).reduce((i,e)=>i+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-",""),v=class extends R{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._uploadActive=!1,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=O.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1}connectedCallback(){var i;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((i=this.video)==null?void 0:i.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));let i=document.querySelector("mave-settings");i&&i.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=1&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},750),this.loadeddata=!0),!this.canPlay){let i=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(i.bind(this),25),this.canPlay=!0)};i()}}videoHandler(i){if(this.video)switch(i.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let e=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(e)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let e=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:e,bitrate:this._bitrate}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(i.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(i){var e;let{data:t}=i,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let n=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:n,bitrate:this._bitrate}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let o=t.event;switch(Object.keys(o)[0]){case"play":o.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=o.muted;break;case"volume":this.video.volume=o.volume;break;case"currentTime":this.video.currentTime=o.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,this._blurhashShouldBeVisible&&(this._blurhashShouldBeVisible=!1),this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:open_dialog":this.dialog.showModal(),this._uploadActive=!0;break;case"mave:close_dialog":this.dialog.close(),this._uploadActive=!1;break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let n=document.createElement("mave-settings");n.setAttribute("embed",this.embed),document.body.appendChild(n)}else{let n=document.querySelector("mave-settings");n&&n.remove()}break;case"mave:close_settings":this._settingsActive=!1;let r=document.querySelector("mave-settings");r&&r.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((e=this.video)==null?void 0:e.paused)&&this.video.currentTime<this.video.duration&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this._blurhashShouldBeVisible=!1,this.loadeddata=!1,this.canPlay=!1,this.src=t.video_src,this.autoplay=t.autoplay,t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){let i=document.createElement("style");if(this._overlayActive&&(i.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)i.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;else if(this.aspectRatio){let[e,t]=this.aspectRatio.split(":");i.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${e} / ${t}; width: 100%; min-width: 320px; min-height: 180px; }`}else i.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";return i}closeDialog(){this._overlayActive=!1,this._uploadActive=!1,this.sendMessage("mave:closing_overlay")}clickDialog(i){this._uploadActive&&i.target==this.dialog&&(this.closeDialog(),this.sendMessage("mave:cancel_upload"))}poster(){var i;return`${(i=this.src)==null?void 0:i.replace("stream","image")}/thumbnail.jpg?time=0`}render(){return z`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive?"active_overlay":this._uploadActive?"active_upload":""}
      >
        ${this.renderCanvas()}
        ${this.src?z`
              ${this.initiateScript()}
              ${this._blurhashShouldBeVisible?z`
                    <img
                      class="poster"
                      .src=${this.poster()}
                      style="filter: contrast(1.05); filter: brightness(1.1);"
                    />
                  `:""}

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
                .muted=${this.muted}
                .autoplay=${this.autoplay}
                .loop=${this.loop}
                .src=${this.src}
              ></video>
            `:""}
        ${this.embed?z`
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
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}?reference_id=${rt}`}sendMessage(i,e={}){if(!this.iframe.contentWindow||!this.video)return;let t=ot({message:i},e);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let i=document.createElement("canvas"),e=et(this.blurhash,320,180),t=i.getContext("2d"),s=t==null?void 0:t.createImageData(320,180);return s==null||s.data.set(e),s&&(t==null||t.putImageData(s,0,0)),i}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let i=document.createElement("script");return i.onload=this.scriptHandler.bind(this),i.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",i}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let i=new Hls;i.loadSource(this.src),i.attachMedia(this.video);let e=[];i.on(Hls.Events.MANIFEST_LOADED,(t,s)=>{e=s.levels.reverse()}),i.on(Hls.Events.LEVEL_LOADED,(t,s)=>{this._bitrate!=e[s.level].bitrate&&(this._bitrate=e[s.level].bitrate,this.sendMessage("mave:bitrate",{bitrate:this._bitrate}))}),i.subtitleTrack=0,i.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:i,bottom:e}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,s=(i>0||e>0)&&i<t;this.sendMessage(s?"mave:video_in_viewport":"mave:video_out_viewport")}};v.styles=nt,p([f({type:String})],v.prototype,"embed",2),p([f({type:String})],v.prototype,"reference_id",2),p([f({type:String})],v.prototype,"display_name",2),p([f({type:String})],v.prototype,"jwt",2),p([f({type:String})],v.prototype,"classname",2),p([f({type:Boolean})],v.prototype,"muted",2),p([f({type:Boolean})],v.prototype,"autoplay",2),p([f({type:Boolean})],v.prototype,"loop",2),p([f({type:String})],v.prototype,"src",2),p([f({type:String})],v.prototype,"blurhash",2),p([f({type:String,attribute:"aspect-ratio"})],v.prototype,"aspectRatio",2),p([f({type:String})],v.prototype,"width",2),p([f({type:String})],v.prototype,"height",2),p([S("#dialog")],v.prototype,"dialog",2),p([S("#iframe")],v.prototype,"iframe",2),p([S("#video")],v.prototype,"video",2),p([S("#canvas")],v.prototype,"canvas",2),p([S("#script")],v.prototype,"script",2),p([E()],v.prototype,"_settingsActive",2),p([E()],v.prototype,"_blurhashShouldBeVisible",2),p([E()],v.prototype,"_overlayActive",2),p([E()],v.prototype,"_uploadActive",2),customElements.get("mave-component")||customElements.define("mave-component",v);const at=["src","blurhash","loop","autoplay","muted","width","height","aspectRatio"],lt=d.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},async setup(i){let e,t;const s=i,o=`https://${_.getInstance().baseUrl}/${s.embed}/json`,r=async()=>{try{return await(await fetch(o)).json()}catch(a){return console.log("error",a),null}},n=([e,t]=d.withAsyncContext(()=>r()),e=await e,t(),e),u=n.settingsAspectRatio||n.videoAspectRatio;return(a,l)=>(d.openBlock(),d.createElementBlock("mave-component",d.mergeProps(a.$props,{src:d.unref(n).videoSource,blurhash:d.unref(n).videoBlurHash,loop:d.unref(n).loop,autoplay:d.unref(n).autoPlay,muted:d.unref(n).autoPlay,width:d.unref(n).width,height:d.unref(n).height,aspectRatio:d.unref(u)}),null,16,at))}}),dt=d.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},setup(i){return(e,t)=>(d.openBlock(),d.createBlock(d.Suspense,null,{default:d.withCtx(()=>[d.createVNode(lt,d.normalizeProps(d.guardReactiveProps(e.$props)),null,16)]),_:1}))}});y.Mave=dt,Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

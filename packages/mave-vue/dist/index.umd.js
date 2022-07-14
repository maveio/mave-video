(function(g,h){typeof exports=="object"&&typeof module!="undefined"?h(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],h):(g=typeof globalThis!="undefined"?globalThis:g||self,h(g.Mave={},g.Vue))})(this,function(g,h){"use strict";var Je=Object.defineProperty,Ze=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var $e=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var we=(g,h,_)=>h in g?Je(g,h,{enumerable:!0,configurable:!0,writable:!0,value:_}):g[h]=_,D=(g,h)=>{for(var _ in h||(h={}))Qe.call(h,_)&&we(g,_,h[_]);if($e)for(var _ of $e(h))Xe.call(h,_)&&we(g,_,h[_]);return g},I=(g,h)=>Ze(g,Ge(h));class _{constructor(){this._baseUrl="mave.io"}static getInstance(){return _._inst||(_._inst=new _),_._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),ee=new Map;class te{constructor(e,t){if(this._$cssResult$=!0,t!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ee.get(this.cssText);return q&&e===void 0&&(ee.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Ae=i=>new te(typeof i=="string"?i:i+"",W),ie=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new te(t,W)},Ee=(i,e)=>{q?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),o=window.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,i.appendChild(s)})},se=q?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ae(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const oe=window.trustedTypes,Se=oe?oe.emptyScript:"",re=window.reactiveElementPolyfillSupport,J={toAttribute(i,e){switch(e){case Boolean:i=i?Se:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ne=(i,e)=>e!==i&&(e==e||i==i),Z={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:ne};class k extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const o=this._$Eh(s,t);o!==void 0&&(this._$Eu.set(o,s),e.push(o))}),e}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of s)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)t.unshift(se(o))}else e!==void 0&&t.push(se(e));return t}static _$Eh(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=Z){var o,n;const r=this.constructor._$Eh(e,s);if(r!==void 0&&s.reflect===!0){const c=((n=(o=s.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:J.toAttribute)(t,s.type);this._$Ei=e,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$Ei=null}}_$AK(e,t){var s,o,n;const r=this.constructor,c=r._$Eu.get(e);if(c!==void 0&&this._$Ei!==c){const l=r.getPropertyOptions(c),a=l.converter,b=(n=(o=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&o!==void 0?o:typeof a=="function"?a:null)!==null&&n!==void 0?n:J.fromAttribute;this._$Ei=c,this[c]=b(t,l.type),this._$Ei=null}}requestUpdate(e,t,s){let o=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||ne)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(s)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdated)===null||o===void 0?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$ES(s,this[s],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},re==null||re({ReactiveElement:k}),((K=globalThis.reactiveElementVersions)!==null&&K!==void 0?K:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const x=globalThis.trustedTypes,le=x?x.createPolicy("lit-html",{createHTML:i=>i}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,ae="?"+w,ke=`<${ae}>`,C=document,R=(i="")=>C.createComment(i),L=i=>i===null||typeof i!="object"&&typeof i!="function",he=Array.isArray,xe=i=>{var e;return he(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,de=/-->/g,ce=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,pe=/'/g,ue=/"/g,ve=/^(?:script|style|textarea|title)$/i,Ce=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),B=Ce(1),H=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),me=new WeakMap,He=(i,e,t)=>{var s,o;const n=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let r=n._$litPart$;if(r===void 0){const c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new N(e.insertBefore(R(),c),c,void 0,t!=null?t:{})}return r._$AI(i),r},T=C.createTreeWalker(C,129,null,!1),Te=(i,e)=>{const t=i.length-1,s=[];let o,n=e===2?"<svg>":"",r=O;for(let l=0;l<t;l++){const a=i[l];let b,u,v=-1,f=0;for(;f<a.length&&(r.lastIndex=f,u=r.exec(a),u!==null);)f=r.lastIndex,r===O?u[1]==="!--"?r=de:u[1]!==void 0?r=ce:u[2]!==void 0?(ve.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=E):u[3]!==void 0&&(r=E):r===E?u[0]===">"?(r=o!=null?o:O,v=-1):u[1]===void 0?v=-2:(v=r.lastIndex-u[2].length,b=u[1],r=u[3]===void 0?E:u[3]==='"'?ue:pe):r===ue||r===pe?r=E:r===de||r===ce?r=O:(r=E,o=void 0);const j=r===E&&i[l+1].startsWith("/>")?" ":"";n+=r===O?a+ke:v>=0?(s.push(b),a.slice(0,v)+"$lit$"+a.slice(v)+w+j):a+w+(v===-2?(s.push(void 0),l):j)}const c=n+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[le!==void 0?le.createHTML(c):c,s]};class F{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let n=0,r=0;const c=e.length-1,l=this.parts,[a,b]=Te(e,t);if(this.el=F.createElement(a,s),T.currentNode=this.el.content,t===2){const u=this.el.content,v=u.firstChild;v.remove(),u.append(...v.childNodes)}for(;(o=T.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const v of o.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(w)){const f=b[r++];if(u.push(v),f!==void 0){const j=o.getAttribute(f.toLowerCase()+"$lit$").split(w),V=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:V[2],strings:j,ctor:V[1]==="."?Pe:V[1]==="?"?Re:V[1]==="@"?Le:z})}else l.push({type:6,index:n})}for(const v of u)o.removeAttribute(v)}if(ve.test(o.tagName)){const u=o.textContent.split(w),v=u.length-1;if(v>0){o.textContent=x?x.emptyScript:"";for(let f=0;f<v;f++)o.append(u[f],R()),T.nextNode(),l.push({type:2,index:++n});o.append(u[v],R())}}}else if(o.nodeType===8)if(o.data===ae)l.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(w,u+1))!==-1;)l.push({type:7,index:n}),u+=w.length-1}n++}}static createElement(e,t){const s=C.createElement("template");return s.innerHTML=e,s}}function U(i,e,t=i,s){var o,n,r,c;if(e===H)return e;let l=s!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[s]:t._$Cu;const a=L(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,t,s)),s!==void 0?((r=(c=t)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[s]=l:t._$Cu=l),l!==void 0&&(e=U(i,l._$AS(i,e.values),l,s)),e}class Ue{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:C).importNode(s,!0);T.currentNode=n;let r=T.nextNode(),c=0,l=0,a=o[0];for(;a!==void 0;){if(c===a.index){let b;a.type===2?b=new N(r,r.nextSibling,this,e):a.type===1?b=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(b=new Oe(r,this,e)),this.v.push(b),a=o[++l]}c!==(a==null?void 0:a.index)&&(r=T.nextNode(),c++)}return n}m(e){let t=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class N{constructor(e,t,s,o){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),L(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==H&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):xe(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==m&&L(this._$AH)?this._$AA.nextSibling.data=e:this.k(C.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=F.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(s);else{const r=new Ue(n,this),c=r.p(this.options);r.m(s),this.k(c),this._$AH=r}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new F(e)),t}S(e){he(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const n of e)o===t.length?t.push(s=new N(this.M(R()),this.M(R()),this,this.options)):s=t[o],s._$AI(n),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class z{constructor(e,t,s,o,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const n=this.strings;let r=!1;if(n===void 0)e=U(this,e,t,0),r=!L(e)||e!==this._$AH&&e!==H,r&&(this._$AH=e);else{const c=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=U(this,c[s+l],t,l),a===H&&(a=this._$AH[l]),r||(r=!L(a)||a!==this._$AH[l]),a===m?e=m:e!==m&&(e+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.C(e)}C(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Pe extends z{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===m?void 0:e}}const Me=x?x.emptyScript:"";class Re extends z{constructor(){super(...arguments),this.type=4}C(e){e&&e!==m?this.element.setAttribute(this.name,Me):this.element.removeAttribute(this.name)}}class Le extends z{constructor(e,t,s,o,n){super(e,t,s,o,n),this.type=5}_$AI(e,t=this){var s;if((e=(s=U(this,e,t,0))!==null&&s!==void 0?s:m)===H)return;const o=this._$AH,n=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==m&&(o===m||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const ge=window.litHtmlPolyfillSupport;ge==null||ge(F,N),((G=globalThis.litHtmlVersions)!==null&&G!==void 0?G:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q,X;class P extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return H}}P.finalized=!0,P._$litElement$=!0,(Q=globalThis.litElementHydrateSupport)===null||Q===void 0||Q.call(globalThis,{LitElement:P});const _e=globalThis.litElementPolyfillSupport;_e==null||_e({LitElement:P}),((X=globalThis.litElementVersions)!==null&&X!==void 0?X:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?I(D({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function y(i){return(e,t)=>t!==void 0?((s,o,n)=>{o.constructor.createProperty(n,s)})(i,e,t):Be(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(i){return y(I(D({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=({finisher:i,descriptor:e})=>(t,s)=>{var o;if(s===void 0){const n=(o=t.originalKey)!==null&&o!==void 0?o:t.key,r=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:I(D({},t),{key:n});return i!=null&&(r.finisher=function(c){i(c,n)}),r}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i==null||i(n,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(i,e){return Fe({descriptor:t=>{const s={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var n,r;return this[o]===void 0&&(this[o]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&r!==void 0?r:null),this[o]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;((Y=window.HTMLSlotElement)===null||Y===void 0?void 0:Y.prototype.assignedElements)!=null;var ye=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,fe=(i,e,t)=>e in i?ye(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Ve=(i,e)=>{for(var t in e||(e={}))ze.call(e,t)&&fe(i,t,e[t]);if(be)for(var t of be(e))je.call(e,t)&&fe(i,t,e[t]);return i},d=(i,e,t,s)=>{for(var o=s>1?void 0:s?Ne(e,t):e,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(e,t,o):r(o))||o);return s&&o&&ye(e,t,o),o},M=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return M._inst||(M._inst=new M),M._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}},De=ie`
  :root {
    --mave_embed_dialog_height: 100vh !important;
  }

  dialog {
    position: relative;
    display: flex;
    float: left;
    align-items: center;
    border-width: 0;
    width: 100%;
    height: 100%;
    max-width: 100vw !important;
    max-height: var(--mave_embed_dialog_height);
    padding: 0;
    margin: 0;
    background: transparent;
  }

  @media (max-width: 768px) {
    dialog {
      transition-property: max-height;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }

  .active_fullscreen {
    min-width: 100vw !important;
    min-height: 100vh !important;
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

  .active_overlay #video {
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

  #video {
    transform: scale(1.01);
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
  }

  #video::cue {
    color: white;
    opacity: 1;
    background-color: rgba(0, 0, 0, 1) !important;
    /* background-image: linear-gradient(to bottom, black, black); */
  }

  #video::-webkit-media-text-track-container {
    opacity: 1;
    top: -3rem;
    overflow: visible !important;
  }

  #video::-webkit-media-text-track-background {
    display: none !important;
  }

  #video::-webkit-media-text-track-display {
    display: inline-block !important;
    /* border: 1px solid red; */
    overflow: visible !important;
  }

  #video::-webkit-media-text-track-display-backdrop {
    background: transparent !important;
  }
`,A=class extends P{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var i;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),window.addEventListener("resize",this.appHeight),window.addEventListener("focus",this.appHeight),this.appHeight(),setTimeout(()=>{this._ghostActive=!0,this.dialog.showModal()},0),(i=this.iframe)==null||i.addEventListener("load",this.iframeLoaded.bind(this))}appHeight(){document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)}disconnectedCallback(){var i;document.documentElement.setAttribute("style",this._globalStyle||""),(i=this.iframe)==null||i.removeEventListener("load",this.iframeLoaded.bind(this)),this.dialog.close(),window.removeEventListener("resize",this.appHeight),window.removeEventListener("focus",this.appHeight),super.disconnectedCallback()}dialogHandler(i){i.type=="close"&&window.postMessage({message:"mave:close_settings",hash:this.embed},"*"),i.target==this.dialog&&this.dialog.close()}render(){return B`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${M.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded&&this._delayed?"loaded":"initial"}
          ></iframe>
        </div>
      </dialog>
    `}iframeLoaded(){this._loaded=!0}};A.styles=ie`
    dialog {
      position: relative;
      display: flex;
      float: right;
      align-items: center;
      border-width: 0;
      background: transparent;
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
      height: var(--app-height);
      min-height: -webkit-fill-available;
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
  `,d([y({type:String})],A.prototype,"embed",2),d([S("#dialog")],A.prototype,"dialog",2),d([S("#iframe")],A.prototype,"iframe",2),d([$()],A.prototype,"_ghostActive",2),d([$()],A.prototype,"_loaded",2),d([$()],A.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",A);var Ie=crypto.getRandomValues(new Uint8Array(21)).reduce((i,e)=>i+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-",""),p=class extends P{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._isFullscreen=!1,this._uploadActive=!1,this._posterShouldBeVisible=!0,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=M.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1,this.debouncedAppHeight=this.debounce(this.appHeight.bind(this),550)}connectedCallback(){var i;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this));for(let e of["fullscreenchange","webkitfullscreenchange"])this.addEventListener(e,this.fullscreenChangeHandler.bind(this));((i=this.video)==null?void 0:i.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));for(let e of["fullscreenchange","webkitfullscreenchange"])this.removeEventListener(e,this.fullscreenChangeHandler.bind(this));let i=document.querySelector("mave-settings");i&&i.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=2&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},1250),this.loadeddata=!0),!this.canPlay){let i=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(i.bind(this),25),this.canPlay=!0)};i()}}videoHandler(i){if(this.video)switch(i.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let e=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(e)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._posterShouldBeVisible&&(document.webkitExitFullscreen?setTimeout(()=>{this._posterShouldBeVisible=!1},250):this._posterShouldBeVisible=!1),this._iframeReady){this.timeUpdate();let e=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:e,bitrate:this._bitrate}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(i.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(i){var e;let{data:t}=i,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let r=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:r,bitrate:this._bitrate}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let o=t.event;switch(Object.keys(o)[0]){case"play":o.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=o.muted,this.sendMessage("mave:video_muted",{muted:this.video.muted});break;case"volume":this.video.volume=o.volume;break;case"currentTime":this.video.currentTime=o.currentTime;break}break;case"mave:open_popup_overlay":if(this.isFullscreen())return;this.openOverlay();break;case"mave:close_popup_overlay":if(this.isFullscreen())return;this.closeOverlay();break;case"mave:open_dialog":this.dialog.showModal(),this._uploadActive=!0;break;case"mave:close_dialog":this.dialog.close(),this._uploadActive=!1;break;case"mave:toggle_fullscreen":this.isFullscreen()||this._overlayActive?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this._overlayActive||this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let r=document.createElement("mave-settings");r.setAttribute("embed",this.embed),document.body.appendChild(r)}else{let r=document.querySelector("mave-settings");r&&r.remove()}break;case"mave:close_settings":this._settingsActive=!1;let n=document.querySelector("mave-settings");n&&n.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((e=this.video)==null?void 0:e.paused)&&this.video.currentTime<this.video.duration&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this._blurhashShouldBeVisible=!1,this.loadeddata=!1,this.canPlay=!1,this.src!=t.video_src&&(this.src=t.video_src),this.autoplay!=t.autoplay&&(this.autoplay=t.autoplay),this.blurhash!=t.blurhash&&(this.blurhash=t.blurhash),this.posterImage!=t.poster_image&&(this.posterImage=t.poster_image),this.posterVideoSource!=t.poster_video_source&&(this.posterVideoSource=t.poster_video_source);break}}fullscreenChangeHandler(){this._isFullscreen=!this._isFullscreen,this.sendMessage("mave:video_fullscreen",{fullscreen:this.isFullscreen()})}generateStyle(){let i=document.createElement("style");if((this._overlayActive||this._isFullscreen)&&(i.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)i.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;else if(this.aspectRatio){let[e,t]=this.aspectRatio.split(":");i.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${e} / ${t}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${e} / ${t}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`}else i.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";return i}closeDialog(){this.isFullscreen()?this.closeFullscreen():(this._overlayActive=!1,this._uploadActive=!1,this.sendMessage("mave:close_overlay"))}clickDialog(i){this._uploadActive&&i.target==this.dialog&&(this.closeDialog(),this.sendMessage("mave:cancel_upload"))}poster(){var i;return this.posterImage&&!this.autoplay?this.posterImage:`${(i=this.src)==null?void 0:i.replace("stream","image")}/thumbnail.jpg?time=0`}videoPoster(){return navigator.userAgent.toLowerCase().includes("chrome")?this.poster():""}videoStyle(){return!navigator.userAgent.toLowerCase().includes("chrome")&&this._posterShouldBeVisible?"opacity: 0;":""}render(){return B`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive||this._isFullscreen?"active_overlay":this._uploadActive?"active_upload":""}
      >
        ${this.renderCanvas()}
        ${this.src?B`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible?B` <img class="poster" .src=${this.poster()} /> `:""}

              <video
                id="video"
                style=${this.videoStyle()}
                playsinline
                @canplay=${this.videoHandler}
                @play=${this.videoHandler}
                @pause=${this.videoHandler}
                @ended=${this.videoHandler}
                @progress=${this.videoHandler}
                @loadeddata=${this.videoHandler}
                @timeupdate=${this.videoHandler}
                .poster=${this.videoPoster()}
                .muted=${this.muted}
                .autoplay=${this.autoplay}
                .loop=${this.loop}
                .src=${this.src}
              ></video>
            `:""}
        ${this.embed?B`
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
    `}firstUpdated(i){this.appHeight()}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}?reference_id=${Ie}`}sendMessage(i,e={}){if(!this.iframe.contentWindow||!this.video)return;let t=Ve({message:i},e);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){this.isFullscreen()||(this.requestFullscreen?this.requestFullscreen():this.webkitRequestFullscreen?this.webkitRequestFullscreen():(this.sendMessage("mave:open_overlay",{}),this.openOverlay()),this.video&&!this.video.paused&&(this.video.muted=!1,this.sendMessage("mave:video_muted",{muted:this.video.muted})))}closeFullscreen(){(this.isFullscreen()||this._overlayActive)&&(document.exitFullscreen&&!this._overlayActive?document.exitFullscreen():document.webkitExitFullscreen&&!this._overlayActive?document.webkitExitFullscreen():(this.sendMessage("mave:close_overlay",{}),this.closeOverlay(),this.closeDialog()))}renderCanvas(){}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let i=document.createElement("script");return i.onload=this.scriptHandler.bind(this),i.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",i}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let i=new Hls;i.loadSource(this.src),i.attachMedia(this.video);let e=[];i.on(Hls.Events.MANIFEST_LOADED,(t,s)=>{e=s.levels.reverse()}),i.on(Hls.Events.LEVEL_LOADED,(t,s)=>{this._bitrate!=e[s.level].bitrate&&(this._bitrate=e[s.level].bitrate,this.sendMessage("mave:bitrate",{bitrate:this._bitrate}))}),i.subtitleTrack=0,i.subtitleDisplay=!0}this._hlsLoaded=!0}}appHeight(){document.documentElement.style.setProperty("--mave_embed_dialog_height",`${window.innerHeight}px`)}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:i,bottom:e}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,s=(i>0||e>0)&&i<t;this.sendMessage(s?"mave:video_in_viewport":"mave:video_out_viewport"),this.debouncedAppHeight()}isFullscreen(){return!!document.fullscreenElement||!!document.webkitFullscreenElement||"ontouchend"in document&&this._isFullscreen}openOverlay(){this.isFullscreen()||(this._overlayActive=!0,this._blurhashShouldBeVisible&&(this._blurhashShouldBeVisible=!1),this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`))}closeOverlay(){this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"")}debounce(i,e){let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>{i(...s)},e)}}};p.styles=De,d([y({type:String})],p.prototype,"embed",2),d([y({type:String})],p.prototype,"reference_id",2),d([y({type:String})],p.prototype,"display_name",2),d([y({type:String})],p.prototype,"jwt",2),d([y({type:String})],p.prototype,"classname",2),d([y({type:Boolean})],p.prototype,"muted",2),d([y({type:Boolean})],p.prototype,"autoplay",2),d([y({type:Boolean})],p.prototype,"loop",2),d([y({type:String})],p.prototype,"src",2),d([y({type:String})],p.prototype,"blurhash",2),d([y({type:String,attribute:"aspect-ratio"})],p.prototype,"aspectRatio",2),d([y({type:String})],p.prototype,"width",2),d([y({type:String})],p.prototype,"height",2),d([y({type:String,attribute:"poster-image"})],p.prototype,"posterImage",2),d([y({type:String,attribute:"poster-video-source"})],p.prototype,"posterVideoSource",2),d([S("#dialog")],p.prototype,"dialog",2),d([S("#iframe")],p.prototype,"iframe",2),d([S("#video")],p.prototype,"video",2),d([S("#canvas")],p.prototype,"canvas",2),d([S("#script")],p.prototype,"script",2),d([$()],p.prototype,"_settingsActive",2),d([$()],p.prototype,"_blurhashShouldBeVisible",2),d([$()],p.prototype,"_overlayActive",2),d([$()],p.prototype,"_isFullscreen",2),d([$()],p.prototype,"_uploadActive",2),d([$()],p.prototype,"_posterShouldBeVisible",2),customElements.get("mave-component")||customElements.define("mave-component",p);const qe=["src","blurhash","loop","autoplay","muted","width","height","aspectRatio"],We=h.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},async setup(i){let e,t;const s=i,o=`https://${_.getInstance().baseUrl}/${s.embed}/json`,n=async()=>{try{return await(await fetch(o)).json()}catch(l){return console.log("error",l),null}},r=([e,t]=h.withAsyncContext(()=>n()),e=await e,t(),e),c=r.settingsAspectRatio||r.videoAspectRatio;return(l,a)=>(h.openBlock(),h.createElementBlock("mave-component",h.mergeProps(l.$props,{src:h.unref(r).videoSource,blurhash:h.unref(r).videoBlurHash,loop:h.unref(r).loop,autoplay:h.unref(r).autoPlay,muted:h.unref(r).autoPlay,width:h.unref(r).width,height:h.unref(r).height,aspectRatio:h.unref(c)}),null,16,qe))}}),Ke=h.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null,posterImage:null,posterVideoSource:null},setup(i){return(e,t)=>(h.openBlock(),h.createBlock(h.Suspense,null,{default:h.withCtx(()=>[h.createVNode(We,h.normalizeProps(h.guardReactiveProps(e.$props)),null,16)]),_:1}))}});g.Mave=Ke,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

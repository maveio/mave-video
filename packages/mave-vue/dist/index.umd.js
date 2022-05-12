(function(_,u){typeof exports=="object"&&typeof module!="undefined"?u(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],u):(_=typeof globalThis!="undefined"?globalThis:_||self,u(_.Mave={},_.Vue))})(this,function(_,u){"use strict";var Gt=Object.defineProperty,Kt=Object.defineProperties;var Zt=Object.getOwnPropertyDescriptors;var et=Object.getOwnPropertySymbols;var Jt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var tt=(_,u,b)=>u in _?Gt(_,u,{enumerable:!0,configurable:!0,writable:!0,value:b}):_[u]=b,ie=(_,u)=>{for(var b in u||(u={}))Jt.call(u,b)&&tt(_,b,u[b]);if(et)for(var b of et(u))Qt.call(u,b)&&tt(_,b,u[b]);return _},se=(_,u)=>Kt(_,Zt(u));class b{constructor(){this._baseUrl="mave.io"}static getInstance(){return b._inst||(b._inst=new b),b._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}}function ne(i){if(i.__esModule)return i;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(i).forEach(function(t){var s=Object.getOwnPropertyDescriptor(i,t);Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:function(){return i[t]}})}),e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),be=new Map;class oe{constructor(e,t){if(this._$cssResult$=!0,t!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=be.get(this.cssText);return Z&&e===void 0&&(be.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const $e=i=>new oe(typeof i=="string"?i:i+"",re),it=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new oe(t,re)},we=(i,e)=>{Z?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),n=window.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)})},ae=Z?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return $e(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var le;const Ae=window.trustedTypes,st=Ae?Ae.emptyScript:"",Ee=window.reactiveElementPolyfillSupport,J={toAttribute(i,e){switch(e){case Boolean:i=i?st:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},de=(i,e)=>e!==i&&(e==e||i==i),he={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:de};class E extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const n=this._$Eh(s,t);n!==void 0&&(this._$Eu.set(n,s),e.push(n))}),e}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||he}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of s)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(ae(n))}else e!==void 0&&t.push(ae(e));return t}static _$Eh(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return we(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=he){var n,o;const r=this.constructor._$Eh(e,s);if(r!==void 0&&s.reflect===!0){const d=((o=(n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:J.toAttribute)(t,s.type);this._$Ei=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Ei=null}}_$AK(e,t){var s,n,o;const r=this.constructor,d=r._$Eu.get(e);if(d!==void 0&&this._$Ei!==d){const a=r.getPropertyOptions(d),l=a.converter,p=(o=(n=(s=l)===null||s===void 0?void 0:s.fromAttribute)!==null&&n!==void 0?n:typeof l=="function"?l:null)!==null&&o!==void 0?o:J.fromAttribute;this._$Ei=d,this[d]=p(t,a.type),this._$Ei=null}}requestUpdate(e,t,s){let n=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||de)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(s)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$ES(s,this[s],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},Ee==null||Ee({ReactiveElement:E}),((le=globalThis.reactiveElementVersions)!==null&&le!==void 0?le:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce;const P=globalThis.trustedTypes,Se=P?P.createPolicy("lit-html",{createHTML:i=>i}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+$,nt=`<${ue}>`,T=document,B=(i="")=>T.createComment(i),N=i=>i===null||typeof i!="object"&&typeof i!="function",Me=Array.isArray,Ce=i=>{var e;return Me(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,ke=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Pe=/'/g,Te=/"/g,Ue=/^(?:script|style|textarea|title)$/i,He=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),rt=He(1),ot=He(2),M=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Re=new WeakMap,Oe=(i,e,t)=>{var s,n;const o=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let r=o._$litPart$;if(r===void 0){const d=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=r=new H(e.insertBefore(B(),d),d,void 0,t!=null?t:{})}return r._$AI(i),r},U=T.createTreeWalker(T,129,null,!1),je=(i,e)=>{const t=i.length-1,s=[];let n,o=e===2?"<svg>":"",r=q;for(let a=0;a<t;a++){const l=i[a];let p,h,c=-1,m=0;for(;m<l.length&&(r.lastIndex=m,h=r.exec(l),h!==null);)m=r.lastIndex,r===q?h[1]==="!--"?r=xe:h[1]!==void 0?r=ke:h[2]!==void 0?(Ue.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=S):h[3]!==void 0&&(r=S):r===S?h[0]===">"?(r=n!=null?n:q,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,p=h[1],r=h[3]===void 0?S:h[3]==='"'?Te:Pe):r===Te||r===Pe?r=S:r===xe||r===ke?r=q:(r=S,n=void 0);const w=r===S&&i[a+1].startsWith("/>")?" ":"";o+=r===q?l+nt:c>=0?(s.push(p),l.slice(0,c)+"$lit$"+l.slice(c)+$+w):l+$+(c===-2?(s.push(void 0),a):w)}const d=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Se!==void 0?Se.createHTML(d):d,s]};class z{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let o=0,r=0;const d=e.length-1,a=this.parts,[l,p]=je(e,t);if(this.el=z.createElement(l,s),U.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(n=U.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith($)){const m=p[r++];if(h.push(c),m!==void 0){const w=n.getAttribute(m.toLowerCase()+"$lit$").split($),A=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:A[2],strings:w,ctor:A[1]==="."?Be:A[1]==="?"?Ne:A[1]==="@"?qe:I})}else a.push({type:6,index:o})}for(const c of h)n.removeAttribute(c)}if(Ue.test(n.tagName)){const h=n.textContent.split($),c=h.length-1;if(c>0){n.textContent=P?P.emptyScript:"";for(let m=0;m<c;m++)n.append(h[m],B()),U.nextNode(),a.push({type:2,index:++o});n.append(h[c],B())}}}else if(n.nodeType===8)if(n.data===ue)a.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf($,h+1))!==-1;)a.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function C(i,e,t=i,s){var n,o,r,d;if(e===M)return e;let a=s!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[s]:t._$Cu;const l=N(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,s)),s!==void 0?((r=(d=t)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[s]=a:t._$Cu=a),a!==void 0&&(e=C(i,a._$AS(i,e.values),a,s)),e}class Le{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:n}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:T).importNode(s,!0);U.currentNode=o;let r=U.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let p;l.type===2?p=new H(r,r.nextSibling,this,e):l.type===1?p=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(p=new ze(r,this,e)),this.v.push(p),l=n[++a]}d!==(l==null?void 0:l.index)&&(r=U.nextNode(),d++)}return o}m(e){let t=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class H{constructor(e,t,s,n){var o;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),N(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==M&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Ce(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==f&&N(this._$AH)?this._$AA.nextSibling.data=e:this.k(T.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=z.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(s);else{const r=new Le(o,this),d=r.p(this.options);r.m(s),this.k(d),this._$AH=r}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new z(e)),t}S(e){Me(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const o of e)n===t.length?t.push(s=new H(this.M(B()),this.M(B()),this,this.options)):s=t[n],s._$AI(o),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class I{constructor(e,t,s,n,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,n){const o=this.strings;let r=!1;if(o===void 0)e=C(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==M,r&&(this._$AH=e);else{const d=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=C(this,d[s+a],t,a),l===M&&(l=this._$AH[a]),r||(r=!N(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}r&&!n&&this.C(e)}C(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Be extends I{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===f?void 0:e}}const at=P?P.emptyScript:"";class Ne extends I{constructor(){super(...arguments),this.type=4}C(e){e&&e!==f?this.element.setAttribute(this.name,at):this.element.removeAttribute(this.name)}}class qe extends I{constructor(e,t,s,n,o){super(e,t,s,n,o),this.type=5}_$AI(e,t=this){var s;if((e=(s=C(this,e,t,0))!==null&&s!==void 0?s:f)===M)return;const n=this._$AH,o=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==f&&(n===f||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const lt={L:"$lit$",P:$,V:ue,I:1,N:je,R:Le,j:Ce,D:C,H,F:I,O:Ne,W:qe,B:Be,Z:ze},Ie=window.litHtmlPolyfillSupport;Ie==null||Ie(z,H),((ce=globalThis.litHtmlVersions)!==null&&ce!==void 0?ce:globalThis.litHtmlVersions=[]).push("2.2.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pe,me;const dt=E;class V extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return M}}V.finalized=!0,V._$litElement$=!0,(pe=globalThis.litElementHydrateSupport)===null||pe===void 0||pe.call(globalThis,{LitElement:V});const Ve=globalThis.litElementPolyfillSupport;Ve==null||Ve({LitElement:V});const ht={_$AK:(i,e,t)=>{i._$AK(e,t)},_$AL:i=>i._$AL};((me=globalThis.litElementVersions)!==null&&me!==void 0?me:globalThis.litElementVersions=[]).push("3.2.0");var ct=Object.freeze(Object.defineProperty({__proto__:null,CSSResult:oe,adoptStyles:we,css:it,getCompatibleStyle:ae,supportsAdoptingStyleSheets:Z,unsafeCSS:$e,ReactiveElement:E,defaultConverter:J,notEqual:de,_$LH:lt,html:rt,noChange:M,nothing:f,render:Oe,svg:ot,LitElement:V,UpdatingElement:dt,_$LE:ht},Symbol.toStringTag,{value:"Module"})),ve=ne(ct);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=i=>e=>typeof e=="function"?((t,s)=>(window.customElements.define(t,s),s))(i,e):((t,s)=>{const{kind:n,elements:o}=s;return{kind:n,elements:o,finisher(r){window.customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?se(ie({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function De(i){return(e,t)=>t!==void 0?((s,n,o)=>{n.constructor.createProperty(o,s)})(i,e,t):pt(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(i){return De(se(ie({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=({finisher:i,descriptor:e})=>(t,s)=>{var n;if(s===void 0){const o=(n=t.originalKey)!==null&&n!==void 0?n:t.key,r=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:se(ie({},t),{key:o});return i!=null&&(r.finisher=function(d){i(d,o)}),r}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i==null||i(o,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(i){return R({finisher:(e,t)=>{Object.assign(e.prototype[t],i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(i,e){return R({descriptor:t=>{const s={get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const n=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var o,r;return this[n]===void 0&&(this[n]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&r!==void 0?r:null),this[n]}}return s}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(i){return R({descriptor:e=>({get(){var t,s;return(s=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(i))!==null&&s!==void 0?s:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(i){return R({descriptor:e=>({async get(){var t;return await this.updateComplete,(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector(i)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye;const _t=((ye=window.HTMLSlotElement)===null||ye===void 0?void 0:ye.prototype.assignedElements)!=null?(i,e)=>i.assignedElements(e):(i,e)=>i.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function Fe(i){const{slot:e,selector:t}=i!=null?i:{};return R({descriptor:s=>({get(){var n;const o="slot"+(e?`[name=${e}]`:":not([name])"),r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o),d=r!=null?_t(r,i):[];return t?d.filter(a=>a.matches(t)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(i,e,t){let s,n=i;return typeof i=="object"?(n=i.slot,s=i):s={flatten:e},t?Fe({slot:n,flatten:e,selector:t}):R({descriptor:o=>({get(){var r,d;const a="slot"+(n?`[name=${n}]`:":not([name])"),l=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(a);return(d=l==null?void 0:l.assignedNodes(s))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}var $t=Object.freeze(Object.defineProperty({__proto__:null,customElement:ut,property:De,state:mt,eventOptions:vt,query:yt,queryAll:gt,queryAsync:ft,queryAssignedElements:Fe,queryAssignedNodes:bt},Symbol.toStringTag,{value:"Module"})),We=ne($t);const Ge=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],D=i=>{let e=0;for(let t=0;t<i.length;t++){const s=i[t],n=Ge.indexOf(s);e=e*83+n}return e},F=(i,e)=>{var t="";for(let s=1;s<=e;s++){let n=Math.floor(i)/Math.pow(83,e-s)%83;t+=Ge[Math.floor(n)]}return t},O=i=>{let e=i/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},j=i=>{let e=Math.max(0,Math.min(1,i));return e<=.0031308?Math.round(e*12.92*255+.5):Math.round((1.055*Math.pow(e,1/2.4)-.055)*255+.5)},wt=i=>i<0?-1:1,L=(i,e)=>wt(i)*Math.pow(Math.abs(i),e);class W extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}}const Ke=i=>{if(!i||i.length<6)throw new W("The blurhash string must be at least 6 characters");const e=D(i[0]),t=Math.floor(e/9)+1,s=e%9+1;if(i.length!==4+2*s*t)throw new W(`blurhash length mismatch: length is ${i.length} but it should be ${4+2*s*t}`)},At=i=>{try{Ke(i)}catch(e){return{result:!1,errorReason:e.message}}return{result:!0}},Et=i=>{const e=i>>16,t=i>>8&255,s=i&255;return[O(e),O(t),O(s)]},St=(i,e)=>{const t=Math.floor(i/361),s=Math.floor(i/19)%19,n=i%19;return[L((t-9)/9,2)*e,L((s-9)/9,2)*e,L((n-9)/9,2)*e]},Mt=(i,e,t,s)=>{Ke(i),s=s|1;const n=D(i[0]),o=Math.floor(n/9)+1,r=n%9+1,a=(D(i[1])+1)/166,l=new Array(r*o);for(let c=0;c<l.length;c++)if(c===0){const m=D(i.substring(2,6));l[c]=Et(m)}else{const m=D(i.substring(4+c*2,6+c*2));l[c]=St(m,a*s)}const p=e*4,h=new Uint8ClampedArray(p*t);for(let c=0;c<t;c++)for(let m=0;m<e;m++){let w=0,A=0,Y=0;for(let ee=0;ee<o;ee++)for(let te=0;te<r;te++){const fe=Math.cos(Math.PI*m*te/e)*Math.cos(Math.PI*c*ee/t);let _e=l[te+ee*r];w+=_e[0]*fe,A+=_e[1]*fe,Y+=_e[2]*fe}let Dt=j(w),Ft=j(A),Wt=j(Y);h[4*m+0+c*p]=Dt,h[4*m+1+c*p]=Ft,h[4*m+2+c*p]=Wt,h[4*m+3+c*p]=255}return h},Q=4,Ct=(i,e,t,s)=>{let n=0,o=0,r=0;const d=e*Q;for(let l=0;l<e;l++)for(let p=0;p<t;p++){const h=s(l,p);n+=h*O(i[Q*l+0+p*d]),o+=h*O(i[Q*l+1+p*d]),r+=h*O(i[Q*l+2+p*d])}let a=1/(e*t);return[n*a,o*a,r*a]},xt=i=>{const e=j(i[0]),t=j(i[1]),s=j(i[2]);return(e<<16)+(t<<8)+s},kt=(i,e)=>{let t=Math.floor(Math.max(0,Math.min(18,Math.floor(L(i[0]/e,.5)*9+9.5)))),s=Math.floor(Math.max(0,Math.min(18,Math.floor(L(i[1]/e,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(L(i[2]/e,.5)*9+9.5))));return t*19*19+s*19+n};var Pt=Object.freeze(Object.defineProperty({__proto__:null,decode:Mt,isBlurhashValid:At,encode:(i,e,t,s,n)=>{if(s<1||s>9||n<1||n>9)throw new W("BlurHash must have between 1 and 9 components");if(e*t*4!==i.length)throw new W("Width and height must match the pixels array");let o=[];for(let h=0;h<n;h++)for(let c=0;c<s;c++){const m=c==0&&h==0?1:2,w=Ct(i,e,t,(A,Y)=>m*Math.cos(Math.PI*c*A/e)*Math.cos(Math.PI*h*Y/t));o.push(w)}const r=o[0],d=o.slice(1);let a="",l=s-1+(n-1)*9;a+=F(l,1);let p;if(d.length>0){let h=Math.max(...d.map(m=>Math.max(...m))),c=Math.floor(Math.max(0,Math.min(82,Math.floor(h*166-.5))));p=(c+1)/166,a+=F(c,1)}else p=1,a+=F(0,1);return a+=F(xt(r),4),d.forEach(h=>{a+=F(kt(h,p),2)}),a},ValidationError:W},Symbol.toStringTag,{value:"Module"})),Tt=ne(Pt),G=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyNames,Je=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,Xe=(i,e,t)=>e in i?G(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Rt=(i,e)=>{for(var t in e||(e={}))Qe.call(e,t)&&Xe(i,t,e[t]);if(Je)for(var t of Je(e))Ht.call(e,t)&&Xe(i,t,e[t]);return i},Ot=(i,e)=>{for(var t in e)G(i,t,{get:e[t],enumerable:!0})},jt=(i,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ut(e))!Qe.call(i,n)&&n!==t&&G(i,n,{get:()=>e[n],enumerable:!(s=Ze(e,n))||s.enumerable});return i},Lt=i=>jt(G({},"__esModule",{value:!0}),i),v=(i,e,t,s)=>{for(var n=s>1?void 0:s?Ze(e,t):e,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(e,t,n):r(n))||n);return s&&n&&G(e,t,n),n},Ye={};Ot(Ye,{Config:()=>x,MaveComponent:()=>y}),Lt(Ye);var x=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return x._inst||(x._inst=new x),x._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}},X=ve,g=We,Bt=ve,Nt=Bt.css`
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
`,qt=Tt,ge=ve,K=We,k=class extends ge.LitElement{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var i;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(i=this.iframe)==null||i.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var i;document.documentElement.setAttribute("style",this._globalStyle||""),(i=this.iframe)==null||i.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return ge.html`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${x.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded&&this._delayed?"loaded":"initial"}
          ></iframe>
        </div>
      </div>
    `}iframeLoaded(){this._loaded=!0}};k.styles=ge.css`
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
  `,v([(0,K.property)({type:String})],k.prototype,"embed",2),v([(0,K.query)("#iframe")],k.prototype,"iframe",2),v([(0,K.state)()],k.prototype,"_ghostActive",2),v([(0,K.state)()],k.prototype,"_loaded",2),v([(0,K.state)()],k.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",k);var y=class extends X.LitElement{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=x.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1}connectedCallback(){var i;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((i=this.video)==null?void 0:i.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));let i=document.querySelector("mave-settings");i&&i.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=1&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},500),this.loadeddata=!0),!this.canPlay){let i=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(i.bind(this),25),this.canPlay=!0)};i()}}videoHandler(i){if(this.video)switch(i.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let e=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(e)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let e=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:e}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(i.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(i){var e;let{data:t}=i,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let r=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:r}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let n=t.event;switch(Object.keys(n)[0]){case"play":n.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=n.muted;break;case"volume":this.video.volume=n.volume;break;case"currentTime":this.video.currentTime=n.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let r=document.createElement("mave-settings");r.setAttribute("embed",this.embed),document.body.appendChild(r)}else{let r=document.querySelector("mave-settings");r&&r.remove()}break;case"mave:close_settings":this._settingsActive=!1;let o=document.querySelector("mave-settings");o&&o.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((e=this.video)==null?void 0:e.paused)&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=t.video_src,this.autoplay=t.autoplay,t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){let i=document.createElement("style");if(this._overlayActive&&(i.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)i.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;else if(this.aspectRatio){let[e,t]=this.aspectRatio.split(":");i.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${e} / ${t}; width: 100%; min-width: 320px; min-height: 180px; }`}else i.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";return i}closeDialog(){this._overlayActive=!1,this.sendMessage("mave:closing_overlay")}render(){return X.html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive?"active_overlay":""}
      >
        ${this.renderCanvas()}
        ${this.src?X.html`
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
                .muted=${this.muted}
                .autoplay=${this.autoplay}
                .loop=${this.loop}
                .src=${this.src}
              ></video>
            `:""}
        ${this.embed?X.html`
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
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}`}sendMessage(i,e={}){if(!this.iframe.contentWindow||!this.video)return;let t=Rt({message:i},e);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let i=document.createElement("canvas"),e=(0,qt.decode)(this.blurhash,320,180),t=i.getContext("2d"),s=t==null?void 0:t.createImageData(320,180);return s==null||s.data.set(e),s&&(t==null||t.putImageData(s,0,0)),i}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let i=document.createElement("script");return i.onload=this.scriptHandler.bind(this),i.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",i}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let i=new Hls;i.loadSource(this.src),i.attachMedia(this.video),i.subtitleTrack=0,i.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:i,bottom:e}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,s=(i>0||e>0)&&i<t;this.sendMessage(s?"mave:video_in_viewport":"mave:video_out_viewport")}};y.styles=Nt,v([(0,g.property)({type:String})],y.prototype,"embed",2),v([(0,g.property)({type:String})],y.prototype,"reference_id",2),v([(0,g.property)({type:String})],y.prototype,"display_name",2),v([(0,g.property)({type:String})],y.prototype,"jwt",2),v([(0,g.property)({type:String})],y.prototype,"classname",2),v([(0,g.property)({type:Boolean})],y.prototype,"muted",2),v([(0,g.property)({type:Boolean})],y.prototype,"autoplay",2),v([(0,g.property)({type:Boolean})],y.prototype,"loop",2),v([(0,g.property)({type:String})],y.prototype,"src",2),v([(0,g.property)({type:String})],y.prototype,"blurhash",2),v([(0,g.property)({type:String,attribute:"aspect-ratio"})],y.prototype,"aspectRatio",2),v([(0,g.property)({type:String})],y.prototype,"width",2),v([(0,g.property)({type:String})],y.prototype,"height",2),v([(0,g.query)("#dialog")],y.prototype,"dialog",2),v([(0,g.query)("#iframe")],y.prototype,"iframe",2),v([(0,g.query)("#video")],y.prototype,"video",2),v([(0,g.query)("#canvas")],y.prototype,"canvas",2),v([(0,g.query)("#script")],y.prototype,"script",2),v([(0,g.state)()],y.prototype,"_settingsActive",2),v([(0,g.state)()],y.prototype,"_blurhashShouldBeVisible",2),v([(0,g.state)()],y.prototype,"_overlayActive",2),customElements.get("mave-component")||customElements.define("mave-component",y);const zt=["src","blurhash","loop","autoplay","muted","width","height","aspectRatio"],It=u.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},async setup(i){let e,t;const s=i,n=`https://${b.getInstance().baseUrl}/${s.embed}/json`,o=async()=>{try{return await(await fetch(n)).json()}catch(a){return console.log("error",a),null}},r=([e,t]=u.withAsyncContext(()=>o()),e=await e,t(),e),d=r.settingsAspectRatio||r.videoAspectRatio;return(a,l)=>(u.openBlock(),u.createElementBlock("mave-component",u.mergeProps(a.$props,{src:u.unref(r).videoSource,blurhash:u.unref(r).videoBlurHash,loop:u.unref(r).loop,autoplay:u.unref(r).autoPlay,muted:u.unref(r).autoPlay,width:u.unref(r).width,height:u.unref(r).height,aspectRatio:u.unref(d)}),null,16,zt))}}),Vt=u.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},setup(i){return(e,t)=>(u.openBlock(),u.createBlock(u.Suspense,null,{default:u.withCtx(()=>[u.createVNode(It,u.normalizeProps(u.guardReactiveProps(e.$props)),null,16)]),_:1}))}});_.Mave=Vt,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

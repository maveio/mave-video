(function(_,d){typeof exports=="object"&&typeof module!="undefined"?d(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],d):(_=typeof globalThis!="undefined"?globalThis:_||self,d(_.Mave={},_.Vue))})(this,function(_,d){"use strict";var ut=Object.defineProperty,pt=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var Ce=(_,d,y)=>d in _?ut(_,d,{enumerable:!0,configurable:!0,writable:!0,value:y}):_[d]=y,q=(_,d)=>{for(var y in d||(d={}))mt.call(d,y)&&Ce(_,y,d[y]);if(ke)for(var y of ke(d))gt.call(d,y)&&Ce(_,y,d[y]);return _},W=(_,d)=>pt(_,vt(d));class y{constructor(){this._baseUrl="app.mave.io"}static getInstance(){return y._inst||(y._inst=new y),y._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),se=new Map;class oe{constructor(e,t){if(this._$cssResult$=!0,t!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=se.get(this.cssText);return K&&e===void 0&&(se.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Te=i=>new oe(typeof i=="string"?i:i+"",J),ne=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new oe(t,J)},He=(i,e)=>{K?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),o=window.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,i.appendChild(s)})},re=K?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Te(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q;const le=window.trustedTypes,xe=le?le.emptyScript:"",ae=window.reactiveElementPolyfillSupport,Z={toAttribute(i,e){switch(e){case Boolean:i=i?xe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},de=(i,e)=>e!==i&&(e==e||i==i),Y={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:de};class C extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const o=this._$Eh(s,t);o!==void 0&&(this._$Eu.set(o,s),e.push(o))}),e}static createProperty(e,t=Y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of s)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)t.unshift(re(o))}else e!==void 0&&t.push(re(e));return t}static _$Eh(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return He(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=Y){var o,r;const n=this.constructor._$Eh(e,s);if(n!==void 0&&s.reflect===!0){const c=((r=(o=s.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&r!==void 0?r:Z.toAttribute)(t,s.type);this._$Ei=e,c==null?this.removeAttribute(n):this.setAttribute(n,c),this._$Ei=null}}_$AK(e,t){var s,o,r;const n=this.constructor,c=n._$Eu.get(e);if(c!==void 0&&this._$Ei!==c){const l=n.getPropertyOptions(c),a=l.converter,b=(r=(o=(s=a)===null||s===void 0?void 0:s.fromAttribute)!==null&&o!==void 0?o:typeof a=="function"?a:null)!==null&&r!==void 0?r:Z.fromAttribute;this._$Ei=c,this[c]=b(t,l.type),this._$Ei=null}}requestUpdate(e,t,s){let o=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||de)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,r)=>this[r]=o),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(s)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdated)===null||o===void 0?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$ES(s,this[s],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},ae==null||ae({ReactiveElement:C}),((Q=globalThis.reactiveElementVersions)!==null&&Q!==void 0?Q:globalThis.reactiveElementVersions=[]).push("1.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const T=globalThis.trustedTypes,he=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,ce="?"+w,Ue=`<${ce}>`,H=document,R=(i="")=>H.createComment(i),L=i=>i===null||typeof i!="object"&&typeof i!="function",ue=Array.isArray,Pe=i=>{var e;return ue(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,ve=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,me=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,Me=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),x=Me(1),U=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ye=new WeakMap,Oe=(i,e,t)=>{var s,o;const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let n=r._$litPart$;if(n===void 0){const c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new F(e.insertBefore(R(),c),c,void 0,t!=null?t:{})}return n._$AI(i),n},P=H.createTreeWalker(H,129,null,!1),Re=(i,e)=>{const t=i.length-1,s=[];let o,r=e===2?"<svg>":"",n=N;for(let l=0;l<t;l++){const a=i[l];let b,p,m=-1,$=0;for(;$<a.length&&(n.lastIndex=$,p=n.exec(a),p!==null);)$=n.lastIndex,n===N?p[1]==="!--"?n=pe:p[1]!==void 0?n=ve:p[2]!==void 0?(_e.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=S):p[3]!==void 0&&(n=S):n===S?p[0]===">"?(n=o!=null?o:N,m=-1):p[1]===void 0?m=-2:(m=n.lastIndex-p[2].length,b=p[1],n=p[3]===void 0?S:p[3]==='"'?ge:me):n===ge||n===me?n=S:n===pe||n===ve?n=N:(n=S,o=void 0);const I=n===S&&i[l+1].startsWith("/>")?" ":"";r+=n===N?a+Ue:m>=0?(s.push(b),a.slice(0,m)+"$lit$"+a.slice(m)+w+I):a+w+(m===-2?(s.push(void 0),l):I)}const c=r+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[he!==void 0?he.createHTML(c):c,s]};class B{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let r=0,n=0;const c=e.length-1,l=this.parts,[a,b]=Re(e,t);if(this.el=B.createElement(a,s),P.currentNode=this.el.content,t===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(o=P.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const p=[];for(const m of o.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(w)){const $=b[n++];if(p.push(m),$!==void 0){const I=o.getAttribute($.toLowerCase()+"$lit$").split(w),D=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:D[2],strings:I,ctor:D[1]==="."?Ne:D[1]==="?"?Fe:D[1]==="@"?je:z})}else l.push({type:6,index:r})}for(const m of p)o.removeAttribute(m)}if(_e.test(o.tagName)){const p=o.textContent.split(w),m=p.length-1;if(m>0){o.textContent=T?T.emptyScript:"";for(let $=0;$<m;$++)o.append(p[$],R()),P.nextNode(),l.push({type:2,index:++r});o.append(p[m],R())}}}else if(o.nodeType===8)if(o.data===ce)l.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(w,p+1))!==-1;)l.push({type:7,index:r}),p+=w.length-1}r++}}static createElement(e,t){const s=H.createElement("template");return s.innerHTML=e,s}}function M(i,e,t=i,s){var o,r,n,c;if(e===U)return e;let l=s!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[s]:t._$Cu;const a=L(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(i),l._$AT(i,t,s)),s!==void 0?((n=(c=t)._$Cl)!==null&&n!==void 0?n:c._$Cl=[])[s]=l:t._$Cu=l),l!==void 0&&(e=M(i,l._$AS(i,e.values),l,s)),e}class Le{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:o}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(s,!0);P.currentNode=r;let n=P.nextNode(),c=0,l=0,a=o[0];for(;a!==void 0;){if(c===a.index){let b;a.type===2?b=new F(n,n.nextSibling,this,e):a.type===1?b=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(b=new ze(n,this,e)),this.v.push(b),a=o[++l]}c!==(a==null?void 0:a.index)&&(n=P.nextNode(),c++)}return r}m(e){let t=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class F{constructor(e,t,s,o){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cg=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),L(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==U&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Pe(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==v&&L(this._$AH)?this._$AA.nextSibling.data=e:this.k(H.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=B.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.m(s);else{const n=new Le(r,this),c=n.p(this.options);n.m(s),this.k(c),this._$AH=n}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new B(e)),t}S(e){ue(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const r of e)o===t.length?t.push(s=new F(this.M(R()),this.M(R()),this,this.options)):s=t[o],s._$AI(r),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class z{constructor(e,t,s,o,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const r=this.strings;let n=!1;if(r===void 0)e=M(this,e,t,0),n=!L(e)||e!==this._$AH&&e!==U,n&&(this._$AH=e);else{const c=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=M(this,c[s+l],t,l),a===U&&(a=this._$AH[l]),n||(n=!L(a)||a!==this._$AH[l]),a===v?e=v:e!==v&&(e+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}n&&!o&&this.C(e)}C(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ne extends z{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===v?void 0:e}}const Be=T?T.emptyScript:"";class Fe extends z{constructor(){super(...arguments),this.type=4}C(e){e&&e!==v?this.element.setAttribute(this.name,Be):this.element.removeAttribute(this.name)}}class je extends z{constructor(e,t,s,o,r){super(e,t,s,o,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=M(this,e,t,0))!==null&&s!==void 0?s:v)===U)return;const o=this._$AH,r=e===v&&o!==v||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==v&&(o===v||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const be=window.litHtmlPolyfillSupport;be==null||be(B,F),((G=globalThis.litHtmlVersions)!==null&&G!==void 0?G:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X,ee;class O extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return U}}O.finalized=!0,O._$litElement$=!0,(X=globalThis.litElementHydrateSupport)===null||X===void 0||X.call(globalThis,{LitElement:O});const $e=globalThis.litElementPolyfillSupport;$e==null||$e({LitElement:O}),((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=i=>(...e)=>({_$litDirective$:i,values:e});class qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(i,e)=>{var t,s;const o=i._$AN;if(o===void 0)return!1;for(const r of o)(s=(t=r)._$AO)===null||s===void 0||s.call(t,e,!1),j(r,e);return!0},V=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},fe=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Je(e)}};function We(i){this._$AN!==void 0?(V(this),this._$AM=i,fe(this)):this._$AM=i}function Ke(i,e=!1,t=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let r=t;r<s.length;r++)j(s[r],!1),V(s[r]);else s!=null&&(j(s,!1),V(s));else j(this,i)}const Je=i=>{var e,t,s,o;i.type==Ie.CHILD&&((e=(s=i)._$AP)!==null&&e!==void 0||(s._$AP=Ke),(t=(o=i)._$AQ)!==null&&t!==void 0||(o._$AQ=We))};class Qe extends qe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),fe(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,o;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)===null||s===void 0||s.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(j(this,e),V(this))}setValue(e){if(Ve(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const te=new WeakMap,Ze=De(class extends Qe{render(i){return v}update(i,[e]){var t;const s=e!==this.U;return s&&this.U!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=e,this.ht=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),v}ot(i){var e;if(typeof this.U=="function"){const t=(e=this.ht)!==null&&e!==void 0?e:globalThis;let s=te.get(t);s===void 0&&(s=new WeakMap,te.set(t,s)),s.get(this.U)!==void 0&&this.U.call(this.ht,void 0),s.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)}else this.U.value=i}get rt(){var i,e,t;return typeof this.U=="function"?(e=te.get((i=this.ht)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.U):(t=this.U)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?W(q({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function g(i){return(e,t)=>t!==void 0?((s,o,r)=>{o.constructor.createProperty(r,s)})(i,e,t):Ye(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(i){return g(W(q({},i),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=({finisher:i,descriptor:e})=>(t,s)=>{var o;if(s===void 0){const r=(o=t.originalKey)!==null&&o!==void 0?o:t.key,n=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:W(q({},t),{key:r});return i!=null&&(n.finisher=function(c){i(c,r)}),n}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i==null||i(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(i,e){return Ge({descriptor:t=>{const s={get(){var o,r;return(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var r,n;return this[o]===void 0&&(this[o]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null),this[o]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ie;((ie=window.HTMLSlotElement)===null||ie===void 0?void 0:ie.prototype.assignedElements)!=null;var we=Object.defineProperty,Xe=Object.defineProperties,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Ee=(i,e,t)=>e in i?we(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ot=(i,e)=>{for(var t in e||(e={}))it.call(e,t)&&Ee(i,t,e[t]);if(Ae)for(var t of Ae(e))st.call(e,t)&&Ee(i,t,e[t]);return i},nt=(i,e)=>Xe(i,tt(e)),h=(i,e,t,s)=>{for(var o=s>1?void 0:s?et(e,t):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=(s?n(e,t,o):n(o))||o);return s&&o&&we(e,t,o),o},k=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return k._inst||(k._inst=new k),k._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}},rt=ne`
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
    align-items: center;
    justify-content: center;
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
    position: absolute;
    top: 0;
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

  #end {
    display: none;
    position: absolute; 
    width: 100%; 
    height: 100%;
    z-index: 30;
    top: 0;
    left: 0;
  }
`,E=class extends O{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var i;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),window.addEventListener("resize",this.appHeight),window.addEventListener("focus",this.appHeight),this.appHeight(),setTimeout(()=>{this._ghostActive=!0,this.dialog.showModal()},0),(i=this.iframe)==null||i.addEventListener("load",this.iframeLoaded.bind(this))}appHeight(){document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)}disconnectedCallback(){var i;document.documentElement.setAttribute("style",this._globalStyle||""),(i=this.iframe)==null||i.removeEventListener("load",this.iframeLoaded.bind(this)),this.dialog.close(),window.removeEventListener("resize",this.appHeight),window.removeEventListener("focus",this.appHeight),super.disconnectedCallback()}dialogHandler(i){i.type=="close"&&window.postMessage({message:"mave:close_settings",hash:this.embed},"*"),i.target==this.dialog&&this.dialog.close()}render(){return x`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${k.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded&&this._delayed?"loaded":"initial"}
          ></iframe>
        </div>
      </dialog>
    `}iframeLoaded(){this._loaded=!0}};E.styles=ne`
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
  `,h([g({type:String})],E.prototype,"embed",2),h([A("#dialog")],E.prototype,"dialog",2),h([A("#iframe")],E.prototype,"iframe",2),h([f()],E.prototype,"_ghostActive",2),h([f()],E.prototype,"_loaded",2),h([f()],E.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",E);var lt=crypto.getRandomValues(new Uint8Array(21)).reduce((i,e)=>i+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-",""),Se=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","castchange","entercast","leavecast"],at=["mave:video_canplay","mave:video_progress","mave:video_play","mave:video_pause","mave:video_ended","mave:video_timeupdate","mave:vide_muted","mave:vide_muted","mave:video_fullscreen","mave:open_overlay","mave:close_overlay","mave:bitrate"],u=class extends O{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._isFullscreen=!1,this._uploadActive=!1,this._posterShouldBeVisible=!0,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=k.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1,this.debouncedAppHeight=this.debounce(this.appHeight.bind(this),550)}connectedCallback(){if(super.connectedCallback(),!this.src&&this.embed){let i=`https://${k.getInstance().baseUrl}/${this.embed}/json`;(async()=>{try{let e=await(await fetch(i)).json();this.autoplay=e.autoPlay,this.loop=e.loop,this.aspectRatio=e.settingsAspectRatio,this.blurhash=e.videoBlurHash,this.src=e.videoSource,this.height=e.height,this.width=e.width,this.posterImage=e.posterImage,this.posterVideoSource=e.posterVideoSource}catch(e){console.log("error",e)}})()}window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this));for(let i of["fullscreenchange","webkitfullscreenchange"])this.addEventListener(i,this.fullscreenChangeHandler.bind(this));this._hlsLoaded||this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));for(let e of["fullscreenchange","webkitfullscreenchange"])this.removeEventListener(e,this.fullscreenChangeHandler.bind(this));let i=document.querySelector("mave-settings");i&&i.remove(),super.disconnectedCallback()}listEvents(){return[...Se,...at]}play(){var i,e,t;this.video&&((i=this.video)==null?void 0:i.currentTime)>=((e=this.video)==null?void 0:e.duration)&&(this.video.currentTime=0),(t=this.video)==null||t.play()}pause(){var i;(i=this.video)==null||i.pause()}setVolume(i){this.video&&(i>0&&(this.video.muted=!1),this.video.volume=i,this.sendMessage("mave:volume_change",{volume:i}))}setMuted(i){this.video&&(this.video.muted=i,this.sendMessage("mave:video_muted",{muted:this.video.muted}))}setCurrentTime(i){this.video&&(this.video.currentTime=i)}getCurrentTime(){var i;return(i=this.video)==null?void 0:i.currentTime}toggleEndScreen(){this.endElement&&(this.endElement.style.display==="block"?this.endElement.style.display="none":this.endElement.style.display="block")}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=2&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},1250),this.loadeddata=!0),!this.canPlay){let i=()=>{var e;this._iframeReady||(this.sendMessage("mave:video_canplay",{duration:(e=this.video)==null?void 0:e.duration}),setTimeout(i.bind(this),25),this.canPlay=!0)};i()}}videoHandler(i){if(this.video)switch(i.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let e=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(e)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._posterShouldBeVisible&&(document.webkitExitFullscreen?setTimeout(()=>{this._posterShouldBeVisible=!1},450):this._posterShouldBeVisible=!1),this._iframeReady){this.timeUpdate();let e=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:e,bitrate:this._bitrate,duration:this.video.duration}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"volumechange":break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(i.type=="ended"?"mave:video_ended":"mave:video_pause")},25),!this.loop&&this.endElement&&(this.endElement.style.display="block");break}}messageHandler(i){var e;let{data:t}=i,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,this.triggerEvent("ready",{videoElement:this.video}),!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let n=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:n,bitrate:this._bitrate,duration:this.video.duration}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let o=t.event;switch(Object.keys(o)[0]){case"play":o.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=o.muted,this.sendMessage("mave:video_muted",{muted:this.video.muted});break;case"volume":this.video.volume=o.volume;break;case"currentTime":this.video.currentTime=o.currentTime;break}break;case"mave:open_popup_overlay":if(this.isFullscreen())return;this.openOverlay();break;case"mave:close_popup_overlay":if(this.isFullscreen())return;this.closeOverlay();break;case"mave:open_dialog":this.dialog.showModal(),this._uploadActive=!0;break;case"mave:close_dialog":this.dialog.close(),this._uploadActive=!1;break;case"mave:toggle_fullscreen":this.isFullscreen()||this._overlayActive?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this._overlayActive||this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let n=document.createElement("mave-settings");n.setAttribute("embed",this.embed),document.body.appendChild(n)}else{let n=document.querySelector("mave-settings");n&&n.remove()}break;case"mave:close_settings":this._settingsActive=!1;let r=document.querySelector("mave-settings");r&&r.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((e=this.video)==null?void 0:e.paused)&&this.video.currentTime<this.video.duration&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this._blurhashShouldBeVisible=!1,this.loadeddata=!1,this.canPlay=!1,this.src!=t.video_src&&(this.src=t.video_src),this.fileType!=t.file_type&&(this.fileType=t.file_type),this.autoplay!=t.autoplay&&(this.autoplay=t.autoplay),this.blurhash!=t.blurhash&&(this.blurhash=t.blurhash),this.posterImage!=t.poster_image&&(this.posterImage=t.poster_image),this.posterVideoSource!=t.poster_video_source&&(this.posterVideoSource=t.poster_video_source);break}}fullscreenChangeHandler(){this._isFullscreen=!this._isFullscreen,this.sendMessage("mave:video_fullscreen",{fullscreen:this.isFullscreen()})}generateStyle(){let i=document.createElement("style");if((this._overlayActive||this._isFullscreen)&&(i.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)i.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;else if(this.aspectRatio){let[e,t]=this.aspectRatio.split(":");i.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${e} / ${t}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${e} / ${t}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`}else i.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";return i}closeDialog(){this.isFullscreen()?this.closeFullscreen():(this._overlayActive=!1,this._uploadActive=!1,this.sendMessage("mave:close_overlay"))}clickDialog(i){this._uploadActive&&i.target==this.dialog&&(this.closeDialog(),this.sendMessage("mave:cancel_upload"))}poster(){return this.posterImage&&!this.autoplay?this.posterImage:v}videoPoster(){return navigator.userAgent.toLowerCase().includes("chrome")?this.poster():v}videoStyle(){return!navigator.userAgent.toLowerCase().includes("chrome")&&this._posterShouldBeVisible?"opacity: 0;":v}videoRendered(i){Se.forEach(e=>{i==null||i.addEventListener(e,t=>{var s;let o;e=="seeked"?o={detail:{duration:(s=this.video)==null?void 0:s.duration,embed:this.embed}}:o={detail:{embed:this.embed}},this.dispatchEvent(new CustomEvent(t.type,o))})})}render(){return x`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive||this._isFullscreen?"active_overlay":this._uploadActive?"active_upload":""}
      >
        ${this.renderCanvas()}
        ${this.src?x`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible?x` <img class="poster" .src=${this.poster()} /> `:""}

              <video
                ${Ze(this.videoRendered)}
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
                @volumechange=${this.videoHandler}
                .poster=${this.videoPoster()}
                .muted=${this.muted}
                .autoplay=${this.autoplay}
                .loop=${this.loop}
                .src=${this.needsHls()?this.src:v}
              >
                ${this.needsHls()?v:x`<source
                      src=${this.src}
                      type=${this.fileType?"video/"+this.fileType:"video/mp4"}
                    />`}
              </video>
            `:v}
        ${this.embed?x`
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
              <slot id="end" name="end-screen"></slot>
            `:v}
        </dialog>
    `}firstUpdated(i){this.appHeight()}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}?reference_id=${lt}`}sendMessage(i,e={}){if(!this.iframe.contentWindow||!this.video)return;let t=nt(ot({message:i},e),{embed:this.embed});this.iframe.contentWindow.postMessage(t,"*"),this.triggerEvent(i,t)}openFullscreen(){this.isFullscreen()||(this.requestFullscreen?this.requestFullscreen():this.webkitRequestFullscreen?this.webkitRequestFullscreen():(this.sendMessage("mave:open_overlay",{}),this.openOverlay()),this.video&&!this.video.paused&&(this.video.muted=!1,this.sendMessage("mave:video_muted",{muted:this.video.muted})))}closeFullscreen(){(this.isFullscreen()||this._overlayActive)&&(document.exitFullscreen&&!this._overlayActive?document.exitFullscreen():document.webkitExitFullscreen&&!this._overlayActive?document.webkitExitFullscreen():(this.sendMessage("mave:close_overlay",{}),this.closeOverlay(),this.closeDialog()))}renderCanvas(){}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){if(this.src&&!this.needsHls())return;let i=document.createElement("script");return i.onload=this.scriptHandler.bind(this),i.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",i}needsHls(){var i,e;return((i=this.src)==null?void 0:i.includes(".m3u8"))||((e=this.src)==null?void 0:e.includes("mux.com"))}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded||!this.needsHls())){if(Hls.isSupported()){let i=new Hls;i.config.startLevel=3,i.loadSource(this.src),i.attachMedia(this.video);let e=[];i.on(Hls.Events.MANIFEST_LOADED,(t,s)=>{e=s.levels.reverse()}),i.on(Hls.Events.LEVEL_LOADED,(t,s)=>{this._bitrate!=e[s.level].bitrate&&(this._bitrate=e[s.level].bitrate,this.sendMessage("mave:bitrate",{bitrate:this._bitrate}))}),i.subtitleTrack=0,i.subtitleDisplay=!0}this._hlsLoaded=!0}}appHeight(){document.documentElement.style.setProperty("--mave_embed_dialog_height",`${window.innerHeight}px`)}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:i,bottom:e}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,s=(i>0||e>0)&&i<t;this.sendMessage(s?"mave:video_in_viewport":"mave:video_out_viewport"),this.debouncedAppHeight()}isFullscreen(){return!!document.fullscreenElement||!!document.webkitFullscreenElement||"ontouchend"in document&&this._isFullscreen}openOverlay(){this.isFullscreen()||(this._overlayActive=!0,this._blurhashShouldBeVisible&&(this._blurhashShouldBeVisible=!1),this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`))}closeOverlay(){this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"")}triggerEvent(i,e){let t=e?{detail:e}:void 0,s=new CustomEvent(i,t);this.dispatchEvent(s)}debounce(i,e){let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>{i(...s)},e)}}};u.styles=rt,h([g({type:String})],u.prototype,"embed",2),h([g({type:String})],u.prototype,"reference_id",2),h([g({type:String})],u.prototype,"display_name",2),h([g({type:String})],u.prototype,"jwt",2),h([g({type:String})],u.prototype,"classname",2),h([g({type:Boolean})],u.prototype,"muted",2),h([g({type:Boolean})],u.prototype,"autoplay",2),h([g({type:Boolean})],u.prototype,"loop",2),h([g({type:String})],u.prototype,"src",2),h([g({type:String})],u.prototype,"blurhash",2),h([g({type:String,attribute:"aspect-ratio"})],u.prototype,"aspectRatio",2),h([g({type:String})],u.prototype,"width",2),h([g({type:String})],u.prototype,"height",2),h([g({type:String,attribute:"poster-image"})],u.prototype,"posterImage",2),h([g({type:String,attribute:"poster-video-source"})],u.prototype,"posterVideoSource",2),h([g({type:String,attribute:"file-type"})],u.prototype,"fileType",2),h([A("#dialog")],u.prototype,"dialog",2),h([A("#iframe")],u.prototype,"iframe",2),h([A("#video")],u.prototype,"video",2),h([A("#canvas")],u.prototype,"canvas",2),h([A("#script")],u.prototype,"script",2),h([A("#end")],u.prototype,"endElement",2),h([f()],u.prototype,"_settingsActive",2),h([f()],u.prototype,"_blurhashShouldBeVisible",2),h([f()],u.prototype,"_overlayActive",2),h([f()],u.prototype,"_isFullscreen",2),h([f()],u.prototype,"_uploadActive",2),h([f()],u.prototype,"_posterShouldBeVisible",2),customElements.get("mave-component")||customElements.define("mave-component",u);const dt=["src","blurhash","loop","autoplay","muted","width","height","aspectRatio"],ht=d.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},async setup(i){let e,t;const s=i,o=`https://${y.getInstance().baseUrl}/${s.embed}/json`,r=async()=>{try{return await(await fetch(o)).json()}catch(l){return console.log("error",l),null}},n=([e,t]=d.withAsyncContext(()=>r()),e=await e,t(),e),c=n.settingsAspectRatio||n.videoAspectRatio;return(l,a)=>(d.openBlock(),d.createElementBlock("mave-component",d.mergeProps(l.$props,{src:d.unref(n).videoSource,blurhash:d.unref(n).videoBlurHash,loop:d.unref(n).loop,autoplay:d.unref(n).autoPlay,muted:d.unref(n).autoPlay,width:d.unref(n).width,height:d.unref(n).height,aspectRatio:d.unref(c)}),null,16,dt))}}),ct=d.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null,posterImage:null,posterVideoSource:null},setup(i){return(e,t)=>(d.openBlock(),d.createBlock(d.Suspense,null,{default:d.withCtx(()=>[d.createVNode(ht,d.normalizeProps(d.guardReactiveProps(e.$props)),null,16)]),_:1}))}});_.Mave=ct,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

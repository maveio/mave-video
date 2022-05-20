var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { defineComponent, withAsyncContext, openBlock, createElementBlock, mergeProps, unref, createBlock, Suspense, withCtx, createVNode, normalizeProps, guardReactiveProps } from "vue";
class Config {
  constructor() {
    this._baseUrl = "mave.io";
  }
  static getInstance() {
    if (!Config._inst) {
      Config._inst = new Config();
    }
    return Config._inst;
  }
  get baseUrl() {
    return this._baseUrl;
  }
  set baseUrl(val) {
    this._baseUrl = val;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$3 = Symbol(), n$4 = /* @__PURE__ */ new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$4.get(this.cssText);
    return t$2 && e2 === void 0 && (n$4.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$4 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$3), r$2 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$3);
}, i$4 = (e2, n2) => {
  t$2 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$2 = t$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$2 = window.trustedTypes, r$1 = e$2 ? e$2.emptyScript : "", h$2 = window.reactiveElementPolyfillSupport, o$3 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r$1 : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$3 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$2 = { attribute: true, type: String, converter: o$3, reflect: false, hasChanged: n$3 };
class a$2 extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.l) !== null && i2 !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Eh(s2, i2);
      e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$2) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$2;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S$2(i3));
    } else
      i2 !== void 0 && s2.push(S$2(i2));
    return s2;
  }
  static _$Eh(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this._$Eg) !== null && i2 !== void 0 ? i2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Et.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$4(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i2, s2 = l$2) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$3.toAttribute)(i2, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$3.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$3)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i3) => this[i3] = t3), this._$Et = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (t3) {
      throw i2 = false, this._$EU(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$EC !== void 0 && (this._$EC.forEach((t3, i2) => this._$ES(i2, this[i2], t3)), this._$EC = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$2.finalized = true, a$2.elementProperties = /* @__PURE__ */ new Map(), a$2.elementStyles = [], a$2.shadowRootOptions = { mode: "open" }, h$2 == null || h$2({ ReactiveElement: a$2 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;
const i$3 = globalThis.trustedTypes, s$1 = i$3 ? i$3.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$1 = `lit$${(Math.random() + "").slice(9)}$`, o$2 = "?" + e$1, n$2 = `<${o$2}>`, l$1 = document, h$1 = (t2 = "") => l$1.createComment(t2), r = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d$1 = Array.isArray, u = (t2) => {
  var i2;
  return d$1(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a$1 = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _$1 = /'/g, m = /"/g, g = /^(?:script|style|textarea|title)$/i, p = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), $$1 = p(1), b = Symbol.for("lit-noChange"), w$1 = Symbol.for("lit-nothing"), T$1 = /* @__PURE__ */ new WeakMap(), x$1 = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h$1(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$1.createTreeWalker(l$1, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, p2 = -1, $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); )
      $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a$1 : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _$1) : d2 === m || d2 === _$1 ? d2 = f : d2 === v || d2 === a$1 ? d2 = c : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c ? s2 + n$2 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$1 + y) : s2 + e$1 + (p2 === -2 ? (l2.push(void 0), i3) : y);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class E$1 {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = E$1.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e$1)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$1), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S$1 });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$1), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$3 ? i$3.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h$1()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h$1());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$2)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$1, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$1.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r(i2) ? void 0 : i2._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = P(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class V$1 {
  constructor(t2, i2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$1).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i2 = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = w$1, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = P(this, t2, i2), r(t2) ? t2 === w$1 || t2 == null || t2 === "" ? (this._$AH !== w$1 && this._$AR(), this._$AH = w$1) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u(t2) ? this.S(t2) : this.$(t2);
  }
  M(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  k(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== w$1 && r(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l$1.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E$1.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new V$1(o2, this), i3 = t3.p(this.options);
      t3.m(s2), this.k(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = T$1.get(t2.strings);
    return i2 === void 0 && T$1.set(t2.strings, i2 = new E$1(t2)), i2;
  }
  S(t2) {
    d$1(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.M(h$1()), this.M(h$1()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S$1 {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = w$1, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w$1;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = P(this, t2, i2, 0), n2 = !r(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r(h2) || h2 !== this._$AH[l2]), h2 === w$1 ? t2 = w$1 : t2 !== w$1 && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.C(t2);
  }
  C(t2) {
    t2 === w$1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S$1 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t2) {
    this.element[this.name] = t2 === w$1 ? void 0 : t2;
  }
}
const k$1 = i$3 ? i$3.emptyScript : "";
class H extends S$1 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t2) {
    t2 && t2 !== w$1 ? this.element.setAttribute(this.name, k$1) : this.element.removeAttribute(this.name);
  }
}
class I extends S$1 {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : w$1) === b)
      return;
    const e2 = this._$AH, o2 = t2 === w$1 && e2 !== w$1 || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w$1 && (e2 === w$1 || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(E$1, N), ((t$1 = globalThis.litHtmlVersions) !== null && t$1 !== void 0 ? t$1 : globalThis.litHtmlVersions = []).push("2.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o$1;
class s extends a$2 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = x$1(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l = globalThis.litElementHydrateSupport) === null || l === void 0 || l.call(globalThis, { LitElement: s });
const n$1 = globalThis.litElementPolyfillSupport;
n$1 == null || n$1({ LitElement: s });
((o$1 = globalThis.litElementVersions) !== null && o$1 !== void 0 ? o$1 : globalThis.litElementVersions = []).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2 = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(n2) {
  n2.createProperty(e2.key, i2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i$2(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t(t2) {
  return e(__spreadProps(__spreadValues({}, t2), { state: true }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = ({ finisher: e2, descriptor: t2 }) => (o2, n2) => {
  var r2;
  if (n2 === void 0) {
    const n3 = (r2 = o2.originalKey) !== null && r2 !== void 0 ? r2 : o2.key, i2 = t2 != null ? { kind: "method", placement: "prototype", key: n3, descriptor: t2(o2.key) } : __spreadProps(__spreadValues({}, o2), { key: n3 });
    return e2 != null && (i2.finisher = function(t3) {
      e2(t3, n3);
    }), i2;
  }
  {
    const r3 = o2.constructor;
    t2 !== void 0 && Object.defineProperty(o2, n2, t2(n2)), e2 == null || e2(r3, n2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$1(i2, n2) {
  return o({ descriptor: (o2) => {
    const t2 = { get() {
      var o3, n3;
      return (n3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && n3 !== void 0 ? n3 : null;
    }, enumerable: true, configurable: true };
    if (n2) {
      const n3 = typeof o2 == "symbol" ? Symbol() : "__" + o2;
      t2.get = function() {
        var o3, t3;
        return this[n3] === void 0 && (this[n3] = (t3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && t3 !== void 0 ? t3 : null), this[n3];
      };
    }
    return t2;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
((n = window.HTMLSlotElement) === null || n === void 0 ? void 0 : n.prototype.assignedElements) != null ? (o2, n2) => o2.assignedElements(n2) : (o2, n2) => o2.assignedNodes(n2).filter((o3) => o3.nodeType === Node.ELEMENT_NODE);
const digitCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "#",
  "$",
  "%",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~"
];
const decode83 = (str) => {
  let value = 0;
  for (let i2 = 0; i2 < str.length; i2++) {
    const c2 = str[i2];
    const digit = digitCharacters.indexOf(c2);
    value = value * 83 + digit;
  }
  return value;
};
const sRGBToLinear = (value) => {
  let v2 = value / 255;
  if (v2 <= 0.04045) {
    return v2 / 12.92;
  } else {
    return Math.pow((v2 + 0.055) / 1.055, 2.4);
  }
};
const linearTosRGB = (value) => {
  let v2 = Math.max(0, Math.min(1, value));
  if (v2 <= 31308e-7) {
    return Math.round(v2 * 12.92 * 255 + 0.5);
  } else {
    return Math.round((1.055 * Math.pow(v2, 1 / 2.4) - 0.055) * 255 + 0.5);
  }
};
const sign = (n2) => n2 < 0 ? -1 : 1;
const signPow = (val, exp) => sign(val) * Math.pow(Math.abs(val), exp);
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.message = message;
  }
}
const validateBlurhash = (blurhash) => {
  if (!blurhash || blurhash.length < 6) {
    throw new ValidationError("The blurhash string must be at least 6 characters");
  }
  const sizeFlag = decode83(blurhash[0]);
  const numY = Math.floor(sizeFlag / 9) + 1;
  const numX = sizeFlag % 9 + 1;
  if (blurhash.length !== 4 + 2 * numX * numY) {
    throw new ValidationError(`blurhash length mismatch: length is ${blurhash.length} but it should be ${4 + 2 * numX * numY}`);
  }
};
const decodeDC = (value) => {
  const intR = value >> 16;
  const intG = value >> 8 & 255;
  const intB = value & 255;
  return [sRGBToLinear(intR), sRGBToLinear(intG), sRGBToLinear(intB)];
};
const decodeAC = (value, maximumValue) => {
  const quantR = Math.floor(value / (19 * 19));
  const quantG = Math.floor(value / 19) % 19;
  const quantB = value % 19;
  const rgb = [
    signPow((quantR - 9) / 9, 2) * maximumValue,
    signPow((quantG - 9) / 9, 2) * maximumValue,
    signPow((quantB - 9) / 9, 2) * maximumValue
  ];
  return rgb;
};
const decode = (blurhash, width, height, punch) => {
  validateBlurhash(blurhash);
  punch = punch | 1;
  const sizeFlag = decode83(blurhash[0]);
  const numY = Math.floor(sizeFlag / 9) + 1;
  const numX = sizeFlag % 9 + 1;
  const quantisedMaximumValue = decode83(blurhash[1]);
  const maximumValue = (quantisedMaximumValue + 1) / 166;
  const colors = new Array(numX * numY);
  for (let i2 = 0; i2 < colors.length; i2++) {
    if (i2 === 0) {
      const value = decode83(blurhash.substring(2, 6));
      colors[i2] = decodeDC(value);
    } else {
      const value = decode83(blurhash.substring(4 + i2 * 2, 6 + i2 * 2));
      colors[i2] = decodeAC(value, maximumValue * punch);
    }
  }
  const bytesPerRow = width * 4;
  const pixels = new Uint8ClampedArray(bytesPerRow * height);
  for (let y = 0; y < height; y++) {
    for (let x2 = 0; x2 < width; x2++) {
      let r2 = 0;
      let g2 = 0;
      let b2 = 0;
      for (let j = 0; j < numY; j++) {
        for (let i2 = 0; i2 < numX; i2++) {
          const basis = Math.cos(Math.PI * x2 * i2 / width) * Math.cos(Math.PI * y * j / height);
          let color = colors[i2 + j * numX];
          r2 += color[0] * basis;
          g2 += color[1] * basis;
          b2 += color[2] * basis;
        }
      }
      let intR = linearTosRGB(r2);
      let intG = linearTosRGB(g2);
      let intB = linearTosRGB(b2);
      pixels[4 * x2 + 0 + y * bytesPerRow] = intR;
      pixels[4 * x2 + 1 + y * bytesPerRow] = intG;
      pixels[4 * x2 + 2 + y * bytesPerRow] = intB;
      pixels[4 * x2 + 3 + y * bytesPerRow] = 255;
    }
  }
  return pixels;
};
var k = Object.defineProperty;
var x = Object.getOwnPropertyDescriptor;
var _ = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var w = (o2, r2, e2) => r2 in o2 ? k(o2, r2, { enumerable: true, configurable: true, writable: true, value: e2 }) : o2[r2] = e2, E = (o2, r2) => {
  for (var e2 in r2 || (r2 = {}))
    T.call(r2, e2) && w(o2, e2, r2[e2]);
  if (_)
    for (var e2 of _(r2))
      S.call(r2, e2) && w(o2, e2, r2[e2]);
  return o2;
};
var i = (o2, r2, e2, t2) => {
  for (var s2 = t2 > 1 ? void 0 : t2 ? x(r2, e2) : r2, n2 = o2.length - 1, c2; n2 >= 0; n2--)
    (c2 = o2[n2]) && (s2 = (t2 ? c2(r2, e2, s2) : c2(s2)) || s2);
  return t2 && s2 && k(r2, e2, s2), s2;
};
var d = class {
  constructor() {
    this._baseUrl = "mave.io";
  }
  static getInstance() {
    return d._inst || (d._inst = new d()), d._inst;
  }
  get baseUrl() {
    return this._baseUrl;
  }
  set baseUrl(r2) {
    this._baseUrl = r2;
  }
};
var $ = r$2`
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
`;
var h = class extends s {
  constructor() {
    super(...arguments);
    this._ghostActive = true;
    this._loaded = true;
    this._delayed = false;
  }
  connectedCallback() {
    var e2;
    super.connectedCallback(), setTimeout(() => {
      this._delayed = true;
    }, 250), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`), setTimeout(() => {
      this._ghostActive = true, this.dialog.showModal();
    }, 0), (e2 = this.iframe) == null || e2.addEventListener("load", this.iframeLoaded.bind(this));
  }
  disconnectedCallback() {
    var e2;
    document.documentElement.setAttribute("style", this._globalStyle || ""), (e2 = this.iframe) == null || e2.removeEventListener("load", this.iframeLoaded.bind(this)), this.dialog.close(), super.disconnectedCallback();
  }
  dialogHandler(e2) {
    e2.type == "close" && window.postMessage({ message: "mave:close_settings", hash: this.embed }, "*"), e2.target.nodeName === "DIALOG" && this.dialog.close();
  }
  render() {
    return $$1`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
        <div class=${this._ghostActive ? "ghost active" : "ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${d.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded && this._delayed ? "loaded" : "initial"}
          ></iframe>
        </div>
      </dialog>
    `;
  }
  iframeLoaded() {
    this._loaded = true;
  }
};
h.styles = r$2`
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
  `, i([e({ type: String })], h.prototype, "embed", 2), i([i$1("#dialog")], h.prototype, "dialog", 2), i([i$1("#iframe")], h.prototype, "iframe", 2), i([t()], h.prototype, "_ghostActive", 2), i([t()], h.prototype, "_loaded", 2), i([t()], h.prototype, "_delayed", 2);
customElements.get("mave-settings") || customElements.define("mave-settings", h);
var V = crypto.getRandomValues(new Uint8Array(21)).reduce((o2, r2) => o2 += (r2 &= 63) < 36 ? r2.toString(36) : r2 < 62 ? (r2 - 26).toString(36).toUpperCase() : r2 < 63 ? "_" : "-", ""), a = class extends s {
  constructor() {
    super(...arguments);
    this._settingsActive = false;
    this._blurhashShouldBeVisible = true;
    this._overlayActive = false;
    this._hlsLoaded = false;
    this._iframeReady = false;
    this._initialPlayEventTriggered = false;
    this.baseUrl = d.getInstance().baseUrl;
    this.canPlay = false;
    this.loadeddata = false;
  }
  connectedCallback() {
    var e2;
    super.connectedCallback(), window.addEventListener("message", this.messageHandler.bind(this)), window.addEventListener("load", this.visibilityHandler.bind(this)), window.addEventListener("scroll", this.visibilityHandler.bind(this)), window.addEventListener("resize", this.visibilityHandler.bind(this)), ((e2 = this.video) == null ? void 0 : e2.canPlayType("application/vnd.apple.mpegurl")) && !this._hlsLoaded && this.scriptHandler();
  }
  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler.bind(this)), window.removeEventListener("load", this.visibilityHandler.bind(this)), window.removeEventListener("scroll", this.visibilityHandler.bind(this)), window.removeEventListener("resize", this.visibilityHandler.bind(this));
    let e2 = document.querySelector("mave-settings");
    e2 && e2.remove(), super.disconnectedCallback();
  }
  initializeVideo() {
    if (!this.loadeddata && this.video && this.video.readyState >= 1 && (setTimeout(() => {
      this.blurhash && (this._blurhashShouldBeVisible = false);
    }, 750), this.loadeddata = true), !this.canPlay) {
      let e2 = () => {
        this._iframeReady || (this.sendMessage("mave:video_canplay"), setTimeout(e2.bind(this), 25), this.canPlay = true);
      };
      e2();
    }
  }
  videoHandler(e2) {
    if (!!this.video)
      switch (e2.type) {
        case "loadeddata":
        case "canplay":
          this.initializeVideo();
          break;
        case "progress":
          (!this.canPlay || !this.loadeddata) && this.initializeVideo();
          try {
            let t2 = this.video.buffered.length - 1, s2 = Math.round(this.video.buffered.end(t2) / this.video.duration * 100);
            this.sendMessage("mave:video_progress", { buffer: s2 });
          } catch {
          }
          break;
        case "play":
          if (this._iframeReady) {
            this.timeUpdate();
            let t2 = this.autoplay && !this._initialPlayEventTriggered || this.video.currentTime < 1e-4 ? 0 : this.video.currentTime;
            this.sendMessage("mave:video_play", { currentTime: t2, bitrate: this._bitrate }), this._initialPlayEventTriggered = true;
          }
          break;
        case "timeupdate":
          this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime });
          break;
        case "pause":
        case "ended":
          this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this._animationFrame && (cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0), setTimeout(() => {
            this.sendMessage(e2.type == "ended" ? "mave:video_ended" : "mave:video_pause");
          }, 25);
          break;
      }
  }
  messageHandler(e2) {
    var n2;
    let { data: t2 } = e2, { message: s2 } = t2;
    if (!(!this.isConnected || !t2 || t2.hash != this.embed))
      switch (s2) {
        case "mave:player_ready":
          if (this._iframeReady = true, !this._initialPlayEventTriggered && this.video && !this.video.paused) {
            let m2 = this.autoplay ? 0 : this.video.currentTime;
            this.sendMessage("mave:video_play", { currentTime: m2, bitrate: this._bitrate }), this._initialPlayEventTriggered = true;
          }
          break;
        case "mave:player_event":
          if (!this.video)
            return;
          let c2 = t2.event;
          switch (Object.keys(c2)[0]) {
            case "play":
              c2.play ? this.video.play() : this.video.pause();
              break;
            case "muted":
              this.video.muted = c2.muted;
              break;
            case "volume":
              this.video.volume = c2.volume;
              break;
            case "currentTime":
              this.video.currentTime = c2.currentTime;
              break;
          }
          break;
        case "mave:open_popup_overlay":
          this._overlayActive = true, this._blurhashShouldBeVisible && (this._blurhashShouldBeVisible = false), this.dialog.showModal(), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; overflow: hidden;`);
          break;
        case "mave:close_popup_overlay":
          this.dialog.close(), this._overlayActive = false, document.documentElement.setAttribute("style", this._globalStyle || "");
          break;
        case "mave:toggle_fullscreen":
          document.fullscreenElement ? this.closeFullscreen() : this.openFullscreen();
          break;
        case "mave:open_fullscreen":
          this.openFullscreen();
          break;
        case "mave:close_fullscreen":
          this.closeFullscreen();
          break;
        case "mave:open_settings":
          if (this._settingsActive = !this._settingsActive, this._settingsActive) {
            let m2 = document.createElement("mave-settings");
            m2.setAttribute("embed", this.embed), document.body.appendChild(m2);
          } else {
            let m2 = document.querySelector("mave-settings");
            m2 && m2.remove();
          }
          break;
        case "mave:close_settings":
          this._settingsActive = false;
          let y = document.querySelector("mave-settings");
          y && y.remove();
          break;
        case "mave:update_embed_settings":
          this.aspectRatio = t2.aspect_ratio_enabled ? t2.aspect_ratio : void 0, this.width = t2.aspect_ratio_enabled ? void 0 : t2.width, this.height = t2.aspect_ratio_enabled ? void 0 : t2.height, this.loop = t2.loop, this.autoplay = t2.autoplay_enabled, this.autoplay && ((n2 = this.video) == null ? void 0 : n2.paused) && this.video.currentTime < this.video.duration && this.video.play(), this.visibilityHandler();
          break;
        case "mave:request_in_viewport":
          setTimeout(() => {
            this.visibilityHandler();
          }, 20);
          break;
        case "mave:render_video":
          this._hlsLoaded = false, this.src = t2.video_src, this.autoplay = t2.autoplay, t2.blurhash && (this.blurhash = t2.blurhash);
          break;
      }
  }
  generateStyle() {
    let e2 = document.createElement("style");
    if (this._overlayActive && (e2.textContent = ":host { overflow: hidden; width: 100%; height: 100%; }"), this.width && this.height)
      e2.textContent = `:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;
    else if (this.aspectRatio) {
      let [t2, s2] = this.aspectRatio.split(":");
      e2.textContent = `:host { display: block; overflow: hidden; aspect-ratio: ${t2} / ${s2}; width: 100%; min-width: 320px; min-height: 180px; }`;
    } else
      e2.textContent = ":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";
    return e2;
  }
  closeDialog() {
    this._overlayActive = false, this.sendMessage("mave:closing_overlay");
  }
  poster() {
    var e2;
    return `${(e2 = this.src) == null ? void 0 : e2.replace("stream", "image")}/thumbnail.jpg?time=0`;
  }
  render() {
    return $$1`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive ? "active_overlay" : ""}
      >
        ${this.renderCanvas()}
        ${this.src ? $$1`
              ${this.initiateScript()}
              ${this._blurhashShouldBeVisible ? $$1`
                    <img
                      class="poster"
                      .src=${this.poster()}
                      style="filter: contrast(1.05); filter: brightness(1.1);"
                    />
                  ` : ""}

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
            ` : ""}
        ${this.embed ? $$1`
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
            ` : ""}
      </dialog>
    `;
  }
  generateUrl() {
    return this.jwt ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}` : this.reference_id && this.display_name ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}` : this.reference_id ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}` : this.display_name ? `https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}` : `https://${this.baseUrl}/e/${this.embed}?reference_id=${V}`;
  }
  sendMessage(e2, t2 = {}) {
    if (!this.iframe.contentWindow || !this.video)
      return;
    let s2 = E({ message: e2 }, t2);
    this.iframe.contentWindow.postMessage(s2, "*");
  }
  openFullscreen() {
    document.fullscreenElement || (this.requestFullscreen ? this.requestFullscreen() : this.dialog.webkitRequestFullScreen(), this.sendMessage("mave:video_fullscreen", { fullscreen: false }));
  }
  closeFullscreen() {
    document.fullscreenElement && (document.exitFullscreen(), this.sendMessage("mave:video_fullscreen", { fullscreen: true }));
  }
  renderCanvas() {
    if (!this.blurhash || !this._blurhashShouldBeVisible)
      return;
    let e2 = document.createElement("canvas"), t2 = decode(this.blurhash, 320, 180), s2 = e2.getContext("2d"), n2 = s2 == null ? void 0 : s2.createImageData(320, 180);
    return n2 == null || n2.data.set(t2), n2 && (s2 == null || s2.putImageData(n2, 0, 0)), e2;
  }
  timeUpdate() {
    this._animationFrame = requestAnimationFrame(() => {
      !this.video || (this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this.timeUpdate());
    });
  }
  initiateScript() {
    let e2 = document.createElement("script");
    return e2.onload = this.scriptHandler.bind(this), e2.src = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js", e2;
  }
  scriptHandler() {
    if (!(!this.video || !this.src || this._hlsLoaded)) {
      if (this.video.canPlayType("application/vnd.apple.mpegurl"))
        this.video.src = this.src;
      else if (Hls.isSupported()) {
        let e2 = new Hls();
        e2.loadSource(this.src), e2.attachMedia(this.video);
        let t2 = [];
        e2.on(Hls.Events.MANIFEST_LOADED, (s2, n2) => {
          t2 = n2.levels.reverse();
        }), e2.on(Hls.Events.LEVEL_LOADED, (s2, n2) => {
          this._bitrate != t2[n2.level].bitrate && (this._bitrate = t2[n2.level].bitrate, this.sendMessage("mave:bitrate", { bitrate: this._bitrate }));
        }), e2.subtitleTrack = 0, e2.subtitleDisplay = true;
      }
      this._hlsLoaded = true;
    }
  }
  visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow)
      return;
    let { top: e2, bottom: t2 } = this.iframe.getBoundingClientRect(), s2 = window.innerHeight || document.documentElement.clientHeight, n2 = (e2 > 0 || t2 > 0) && e2 < s2;
    this.sendMessage(n2 ? "mave:video_in_viewport" : "mave:video_out_viewport");
  }
};
a.styles = $, i([e({ type: String })], a.prototype, "embed", 2), i([e({ type: String })], a.prototype, "reference_id", 2), i([e({ type: String })], a.prototype, "display_name", 2), i([e({ type: String })], a.prototype, "jwt", 2), i([e({ type: String })], a.prototype, "classname", 2), i([e({ type: Boolean })], a.prototype, "muted", 2), i([e({ type: Boolean })], a.prototype, "autoplay", 2), i([e({ type: Boolean })], a.prototype, "loop", 2), i([e({ type: String })], a.prototype, "src", 2), i([e({ type: String })], a.prototype, "blurhash", 2), i([e({ type: String, attribute: "aspect-ratio" })], a.prototype, "aspectRatio", 2), i([e({ type: String })], a.prototype, "width", 2), i([e({ type: String })], a.prototype, "height", 2), i([i$1("#dialog")], a.prototype, "dialog", 2), i([i$1("#iframe")], a.prototype, "iframe", 2), i([i$1("#video")], a.prototype, "video", 2), i([i$1("#canvas")], a.prototype, "canvas", 2), i([i$1("#script")], a.prototype, "script", 2), i([t()], a.prototype, "_settingsActive", 2), i([t()], a.prototype, "_blurhashShouldBeVisible", 2), i([t()], a.prototype, "_overlayActive", 2);
customElements.get("mave-component") || customElements.define("mave-component", a);
const _hoisted_1 = ["src", "blurhash", "loop", "autoplay", "muted", "width", "height", "aspectRatio"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    embed: null,
    reference_id: null,
    display_name: null,
    jwt: null,
    muted: { type: Boolean },
    autoplay: { type: Boolean },
    loop: { type: Boolean },
    float: null,
    src: null,
    blurhash: null,
    aspectRatio: null,
    width: null,
    height: null,
    className: null,
    style: null
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const url = `https://${Config.getInstance().baseUrl}/${props.embed}/json`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        console.log("error", error);
        return null;
      }
    };
    const data = ([__temp, __restore] = withAsyncContext(() => fetchData()), __temp = await __temp, __restore(), __temp);
    const aspectRatio = data.settingsAspectRatio || data.videoAspectRatio;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("mave-component", mergeProps(_ctx.$props, {
        src: unref(data).videoSource,
        blurhash: unref(data).videoBlurHash,
        loop: unref(data).loop,
        autoplay: unref(data).autoPlay,
        muted: unref(data).autoPlay,
        width: unref(data).width,
        height: unref(data).height,
        aspectRatio: unref(aspectRatio)
      }), null, 16, _hoisted_1);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    embed: null,
    reference_id: null,
    display_name: null,
    jwt: null,
    muted: { type: Boolean },
    autoplay: { type: Boolean },
    loop: { type: Boolean },
    float: null,
    src: null,
    blurhash: null,
    aspectRatio: null,
    width: null,
    height: null,
    className: null,
    style: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Suspense, null, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, normalizeProps(guardReactiveProps(_ctx.$props)), null, 16)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as Mave };

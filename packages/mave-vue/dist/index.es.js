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
const t$3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$5 = Symbol(), n$6 = /* @__PURE__ */ new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$5)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$6.get(this.cssText);
    return t$3 && e2 === void 0 && (n$6.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$5 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$5), r$4 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$5);
}, i$5 = (e2, n2) => {
  t$3 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$2 = t$3 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$5(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$4 = window.trustedTypes, r$3 = e$4 ? e$4.emptyScript : "", h$3 = window.reactiveElementPolyfillSupport, o$4 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r$3 : null;
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
} }, n$5 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$3 = { attribute: true, type: String, converter: o$4, reflect: false, hasChanged: n$5 };
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
  static createProperty(t2, i2 = l$3) {
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
    return this.elementProperties.get(t2) || l$3;
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
    return i$5(s2, this.constructor.elementStyles), s2;
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
  _$ES(t2, i2, s2 = l$3) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$4.toAttribute)(i2, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$4.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$5)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$E_());
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
a$2.finalized = true, a$2.elementProperties = /* @__PURE__ */ new Map(), a$2.elementStyles = [], a$2.shadowRootOptions = { mode: "open" }, h$3 == null || h$3({ ReactiveElement: a$2 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;
const i$4 = globalThis.trustedTypes, s$1 = i$4 ? i$4.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$3 = `lit$${(Math.random() + "").slice(9)}$`, o$3 = "?" + e$3, n$4 = `<${o$3}>`, l$2 = document, h$2 = (t2 = "") => l$2.createComment(t2), r$2 = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d$2 = Array.isArray, u = (t2) => {
  var i2;
  return d$2(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a$1 = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea|title)$/i, p = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), $$1 = p(1), b = Symbol.for("lit-noChange"), w$1 = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), x$1 = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h$2(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A$1 = l$2.createTreeWalker(l$2, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c$1;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, p2 = -1, $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); )
      $2 = d2.lastIndex, d2 === c$1 ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a$1 : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c$1, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a$1 ? d2 = c$1 : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c$1 ? s2 + n$4 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$3 + y) : s2 + e$3 + (p2 === -2 ? (l2.push(void 0), i3) : y);
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
    if (this.el = E$1.createElement(v2, n2), A$1.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A$1.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e$3)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$3), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H$1 : i3[1] === "@" ? I : S$1 });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$3), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$4 ? i$4.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h$2()), A$1.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h$2());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$3)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$3, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$3.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$2.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r$2(i2) ? void 0 : i2._$litDirective$;
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
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$2).importNode(s2, true);
    A$1.currentNode = o2;
    let n2 = A$1.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L$1(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A$1.nextNode(), h2++);
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
    t2 = P(this, t2, i2), r$2(t2) ? t2 === w$1 || t2 == null || t2 === "" ? (this._$AH !== w$1 && this._$AR(), this._$AH = w$1) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u(t2) ? this.S(t2) : this.$(t2);
  }
  M(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  k(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== w$1 && r$2(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l$2.createTextNode(t2)), this._$AH = t2;
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
    let i2 = T.get(t2.strings);
    return i2 === void 0 && T.set(t2.strings, i2 = new E$1(t2)), i2;
  }
  S(t2) {
    d$2(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.M(h$2()), this.M(h$2()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
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
      t2 = P(this, t2, i2, 0), n2 = !r$2(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r$2(h2) || h2 !== this._$AH[l2]), h2 === w$1 ? t2 = w$1 : t2 !== w$1 && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
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
const k$1 = i$4 ? i$4.emptyScript : "";
class H$1 extends S$1 {
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
class L$1 {
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
z == null || z(E$1, N), ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0 ? t$2 : globalThis.litHtmlVersions = []).push("2.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1, o$2;
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
s.finalized = true, s._$litElement$ = true, (l$1 = globalThis.litElementHydrateSupport) === null || l$1 === void 0 || l$1.call(globalThis, { LitElement: s });
const n$3 = globalThis.litElementPolyfillSupport;
n$3 == null || n$3({ LitElement: s });
((o$2 = globalThis.litElementVersions) !== null && o$2 !== void 0 ? o$2 : globalThis.litElementVersions = []).push("3.2.0");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r$1 = (o2) => o2.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$2 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i$3 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = (i2, t2) => {
  var s2, o2;
  const n2 = i2._$AN;
  if (n2 === void 0)
    return false;
  for (const i3 of n2)
    (o2 = (s2 = i3)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e$1(i3, t2);
  return true;
}, o$1 = (i2) => {
  let t2, s2;
  do {
    if ((t2 = i2._$AM) === void 0)
      break;
    s2 = t2._$AN, s2.delete(i2), i2 = t2;
  } while ((s2 == null ? void 0 : s2.size) === 0);
}, n$2 = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let s2 = t2._$AN;
    if (s2 === void 0)
      t2._$AN = s2 = /* @__PURE__ */ new Set();
    else if (s2.has(i2))
      break;
    s2.add(i2), l(t2);
  }
};
function r(i2) {
  this._$AN !== void 0 ? (o$1(this), this._$AM = i2, n$2(this)) : this._$AM = i2;
}
function h$1(i2, t2 = false, s2 = 0) {
  const n2 = this._$AH, r2 = this._$AN;
  if (r2 !== void 0 && r2.size !== 0)
    if (t2)
      if (Array.isArray(n2))
        for (let i3 = s2; i3 < n2.length; i3++)
          e$1(n2[i3], false), o$1(n2[i3]);
      else
        n2 != null && (e$1(n2, false), o$1(n2));
    else
      e$1(this, i2);
}
const l = (i2) => {
  var t2, e2, o2, n2;
  i2.type == t$1.CHILD && ((t2 = (o2 = i2)._$AP) !== null && t2 !== void 0 || (o2._$AP = h$1), (e2 = (n2 = i2)._$AQ) !== null && e2 !== void 0 || (n2._$AQ = r));
};
class d$1 extends i$3 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, s2) {
    super._$AT(i2, t2, s2), n$2(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var s2, n2;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e$1(this, i2), o$1(this));
  }
  setValue(t2) {
    if (r$1(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const h = /* @__PURE__ */ new WeakMap(), n$1 = e$2(class extends d$1 {
  render(t2) {
    return w$1;
  }
  update(t2, [s2]) {
    var e2;
    const o2 = s2 !== this.U;
    return o2 && this.U !== void 0 && this.ot(void 0), (o2 || this.rt !== this.lt) && (this.U = s2, this.ht = (e2 = t2.options) === null || e2 === void 0 ? void 0 : e2.host, this.ot(this.lt = t2.element)), w$1;
  }
  ot(i2) {
    var t2;
    if (typeof this.U == "function") {
      const s2 = (t2 = this.ht) !== null && t2 !== void 0 ? t2 : globalThis;
      let e2 = h.get(s2);
      e2 === void 0 && (e2 = /* @__PURE__ */ new WeakMap(), h.set(s2, e2)), e2.get(this.U) !== void 0 && this.U.call(this.ht, void 0), e2.set(this.U, i2), i2 !== void 0 && this.U.call(this.ht, i2);
    } else
      this.U.value = i2;
  }
  get rt() {
    var i2, t2, s2;
    return typeof this.U == "function" ? (t2 = h.get((i2 = this.ht) !== null && i2 !== void 0 ? i2 : globalThis)) === null || t2 === void 0 ? void 0 : t2.get(this.U) : (s2 = this.U) === null || s2 === void 0 ? void 0 : s2.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
});
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
var E = Object.defineProperty, A = Object.defineProperties, F = Object.getOwnPropertyDescriptor, L = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var k = (n2, o2, e2) => o2 in n2 ? E(n2, o2, { enumerable: true, configurable: true, writable: true, value: e2 }) : n2[o2] = e2, H = (n2, o2) => {
  for (var e2 in o2 || (o2 = {}))
    V.call(o2, e2) && k(n2, e2, o2[e2]);
  if (w)
    for (var e2 of w(o2))
      U.call(o2, e2) && k(n2, e2, o2[e2]);
  return n2;
}, $ = (n2, o2) => A(n2, L(o2));
var i = (n2, o2, e2, t2) => {
  for (var s2 = t2 > 1 ? void 0 : t2 ? F(o2, e2) : o2, r2 = n2.length - 1, h2; r2 >= 0; r2--)
    (h2 = n2[r2]) && (s2 = (t2 ? h2(o2, e2, s2) : h2(s2)) || s2);
  return t2 && s2 && E(o2, e2, s2), s2;
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
  set baseUrl(o2) {
    this._baseUrl = o2;
  }
};
var x = r$4`
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
`;
var c = class extends s {
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
    }, 250), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`), window.addEventListener("resize", this.appHeight), window.addEventListener("focus", this.appHeight), this.appHeight(), setTimeout(() => {
      this._ghostActive = true, this.dialog.showModal();
    }, 0), (e2 = this.iframe) == null || e2.addEventListener("load", this.iframeLoaded.bind(this));
  }
  appHeight() {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  disconnectedCallback() {
    var e2;
    document.documentElement.setAttribute("style", this._globalStyle || ""), (e2 = this.iframe) == null || e2.removeEventListener("load", this.iframeLoaded.bind(this)), this.dialog.close(), window.removeEventListener("resize", this.appHeight), window.removeEventListener("focus", this.appHeight), super.disconnectedCallback();
  }
  dialogHandler(e2) {
    e2.type == "close" && window.postMessage({ message: "mave:close_settings", hash: this.embed }, "*"), e2.target == this.dialog && this.dialog.close();
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
c.styles = r$4`
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
  `, i([e({ type: String })], c.prototype, "embed", 2), i([i$1("#dialog")], c.prototype, "dialog", 2), i([i$1("#iframe")], c.prototype, "iframe", 2), i([t()], c.prototype, "_ghostActive", 2), i([t()], c.prototype, "_loaded", 2), i([t()], c.prototype, "_delayed", 2);
customElements.get("mave-settings") || customElements.define("mave-settings", c);
var q = crypto.getRandomValues(new Uint8Array(21)).reduce((n2, o2) => n2 += (o2 &= 63) < 36 ? o2.toString(36) : o2 < 62 ? (o2 - 26).toString(36).toUpperCase() : o2 < 63 ? "_" : "-", ""), S = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "waitingforkey", "resize", "enterpictureinpicture", "leavepictureinpicture", "castchange", "entercast", "leavecast"], O = ["mave:video_canplay", "mave:video_progress", "mave:video_play", "mave:video_pause", "mave:video_ended", "mave:video_timeupdate", "mave:vide_muted", "mave:vide_muted", "mave:video_fullscreen", "mave:open_overlay", "mave:close_overlay", "mave:bitrate"], a = class extends s {
  constructor() {
    super(...arguments);
    this._settingsActive = false;
    this._blurhashShouldBeVisible = true;
    this._overlayActive = false;
    this._isFullscreen = false;
    this._uploadActive = false;
    this._posterShouldBeVisible = true;
    this._hlsLoaded = false;
    this._iframeReady = false;
    this._initialPlayEventTriggered = false;
    this.baseUrl = d.getInstance().baseUrl;
    this.canPlay = false;
    this.loadeddata = false;
    this.debouncedAppHeight = this.debounce(this.appHeight.bind(this), 550);
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.src && this.embed) {
      let e2 = `https://${d.getInstance().baseUrl}/${this.embed}/json`;
      (async () => {
        try {
          let r2 = await (await fetch(e2)).json();
          this.autoplay = r2.autoPlay, this.loop = r2.loop, this.aspectRatio = r2.settingsAspectRatio, this.blurhash = r2.videoBlurHash, this.src = r2.videoSource, this.height = r2.height, this.width = r2.width, this.posterImage = r2.posterImage, this.posterVideoSource = r2.posterVideoSource;
        } catch (s2) {
          console.log("error", s2);
        }
      })();
    }
    window.addEventListener("message", this.messageHandler.bind(this)), window.addEventListener("load", this.visibilityHandler.bind(this)), window.addEventListener("scroll", this.visibilityHandler.bind(this)), window.addEventListener("resize", this.visibilityHandler.bind(this));
    for (let e2 of ["fullscreenchange", "webkitfullscreenchange"])
      this.addEventListener(e2, this.fullscreenChangeHandler.bind(this));
    this._hlsLoaded || this.scriptHandler();
  }
  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler.bind(this)), window.removeEventListener("load", this.visibilityHandler.bind(this)), window.removeEventListener("scroll", this.visibilityHandler.bind(this)), window.removeEventListener("resize", this.visibilityHandler.bind(this));
    for (let t2 of ["fullscreenchange", "webkitfullscreenchange"])
      this.removeEventListener(t2, this.fullscreenChangeHandler.bind(this));
    let e2 = document.querySelector("mave-settings");
    e2 && e2.remove(), super.disconnectedCallback();
  }
  listEvents() {
    return [...S, ...O];
  }
  play() {
    var e2, t2, s2;
    this.video && ((e2 = this.video) == null ? void 0 : e2.currentTime) >= ((t2 = this.video) == null ? void 0 : t2.duration) && (this.video.currentTime = 0), (s2 = this.video) == null || s2.play();
  }
  pause() {
    var e2;
    (e2 = this.video) == null || e2.pause();
  }
  setVolume(e2) {
    this.video && (e2 > 0 && (this.video.muted = false), this.video.volume = e2, this.sendMessage("mave:volume_change", { volume: e2 }));
  }
  setMuted(e2) {
    this.video && (this.video.muted = e2, this.sendMessage("mave:video_muted", { muted: this.video.muted }));
  }
  setCurrentTime(e2) {
    this.video && (this.video.currentTime = e2);
  }
  getCurrentTime() {
    var e2;
    return (e2 = this.video) == null ? void 0 : e2.currentTime;
  }
  toggleEndScreen() {
    this.endElement && (this.endElement.style.display === "block" ? this.endElement.style.display = "none" : this.endElement.style.display = "block");
  }
  initializeVideo() {
    if (!this.loadeddata && this.video && this.video.readyState >= 2 && (setTimeout(() => {
      this.blurhash && (this._blurhashShouldBeVisible = false);
    }, 1250), this.loadeddata = true), !this.canPlay) {
      let e2 = () => {
        var t2;
        this._iframeReady || (this.sendMessage("mave:video_canplay", { duration: (t2 = this.video) == null ? void 0 : t2.duration }), setTimeout(e2.bind(this), 25), this.canPlay = true);
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
          if (this._posterShouldBeVisible && (document.webkitExitFullscreen ? setTimeout(() => {
            this._posterShouldBeVisible = false;
          }, 450) : this._posterShouldBeVisible = false), this._iframeReady) {
            this.timeUpdate();
            let t2 = this.autoplay && !this._initialPlayEventTriggered || this.video.currentTime < 1e-4 ? 0 : this.video.currentTime;
            this.sendMessage("mave:video_play", { currentTime: t2, bitrate: this._bitrate, duration: this.video.duration }), this._initialPlayEventTriggered = true;
          }
          break;
        case "timeupdate":
          this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime });
          break;
        case "volumechange":
          break;
        case "pause":
        case "ended":
          this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this._animationFrame && (cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0), setTimeout(() => {
            this.sendMessage(e2.type == "ended" ? "mave:video_ended" : "mave:video_pause");
          }, 25), !this.loop && this.endElement && (this.endElement.style.display = "block");
          break;
      }
  }
  messageHandler(e2) {
    var r2;
    let { data: t2 } = e2, { message: s2 } = t2;
    if (!(!this.isConnected || !t2 || t2.hash != this.embed))
      switch (s2) {
        case "mave:player_ready":
          if (this._iframeReady = true, this.triggerEvent("ready", { videoElement: this.video }), !this._initialPlayEventTriggered && this.video && !this.video.paused) {
            let u2 = this.autoplay ? 0 : this.video.currentTime;
            this.sendMessage("mave:video_play", { currentTime: u2, bitrate: this._bitrate, duration: this.video.duration }), this._initialPlayEventTriggered = true;
          }
          break;
        case "mave:player_event":
          if (!this.video)
            return;
          let h2 = t2.event;
          switch (Object.keys(h2)[0]) {
            case "play":
              h2.play ? this.video.play() : this.video.pause();
              break;
            case "muted":
              this.video.muted = h2.muted, this.sendMessage("mave:video_muted", { muted: this.video.muted });
              break;
            case "volume":
              this.video.volume = h2.volume;
              break;
            case "currentTime":
              this.video.currentTime = h2.currentTime;
              break;
          }
          break;
        case "mave:open_popup_overlay":
          if (this.isFullscreen())
            return;
          this.openOverlay();
          break;
        case "mave:close_popup_overlay":
          if (this.isFullscreen())
            return;
          this.closeOverlay();
          break;
        case "mave:open_dialog":
          this.dialog.showModal(), this._uploadActive = true;
          break;
        case "mave:close_dialog":
          this.dialog.close(), this._uploadActive = false;
          break;
        case "mave:toggle_fullscreen":
          this.isFullscreen() || this._overlayActive ? this.closeFullscreen() : this.openFullscreen();
          break;
        case "mave:open_fullscreen":
          this._overlayActive || this.openFullscreen();
          break;
        case "mave:close_fullscreen":
          this.closeFullscreen();
          break;
        case "mave:open_settings":
          if (this._settingsActive = !this._settingsActive, this._settingsActive) {
            let u2 = document.createElement("mave-settings");
            u2.setAttribute("embed", this.embed), document.body.appendChild(u2);
          } else {
            let u2 = document.querySelector("mave-settings");
            u2 && u2.remove();
          }
          break;
        case "mave:close_settings":
          this._settingsActive = false;
          let _2 = document.querySelector("mave-settings");
          _2 && _2.remove();
          break;
        case "mave:update_embed_settings":
          this.aspectRatio = t2.aspect_ratio_enabled ? t2.aspect_ratio : void 0, this.width = t2.aspect_ratio_enabled ? void 0 : t2.width, this.height = t2.aspect_ratio_enabled ? void 0 : t2.height, this.loop = t2.loop, this.autoplay = t2.autoplay_enabled, this.autoplay && ((r2 = this.video) == null ? void 0 : r2.paused) && this.video.currentTime < this.video.duration && this.video.play(), this.visibilityHandler();
          break;
        case "mave:request_in_viewport":
          setTimeout(() => {
            this.visibilityHandler();
          }, 20);
          break;
        case "mave:render_video":
          this._hlsLoaded = false, this._blurhashShouldBeVisible = false, this.loadeddata = false, this.canPlay = false, this.src != t2.video_src && (this.src = t2.video_src), this.fileType != t2.file_type && (this.fileType = t2.file_type), this.autoplay != t2.autoplay && (this.autoplay = t2.autoplay), this.blurhash != t2.blurhash && (this.blurhash = t2.blurhash), this.posterImage != t2.poster_image && (this.posterImage = t2.poster_image), this.posterVideoSource != t2.poster_video_source && (this.posterVideoSource = t2.poster_video_source);
          break;
      }
  }
  fullscreenChangeHandler() {
    this._isFullscreen = !this._isFullscreen, this.sendMessage("mave:video_fullscreen", { fullscreen: this.isFullscreen() });
  }
  generateStyle() {
    let e2 = document.createElement("style");
    if ((this._overlayActive || this._isFullscreen) && (e2.textContent = ":host { overflow: hidden; width: 100%; height: 100%; }"), this.width && this.height)
      e2.textContent = `:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;
    else if (this.aspectRatio) {
      let [t2, s2] = this.aspectRatio.split(":");
      e2.textContent = `:host { display: block; overflow: hidden; aspect-ratio: ${t2} / ${s2}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${t2} / ${s2}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`;
    } else
      e2.textContent = ":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";
    return e2;
  }
  closeDialog() {
    this.isFullscreen() ? this.closeFullscreen() : (this._overlayActive = false, this._uploadActive = false, this.sendMessage("mave:close_overlay"));
  }
  clickDialog(e2) {
    this._uploadActive && e2.target == this.dialog && (this.closeDialog(), this.sendMessage("mave:cancel_upload"));
  }
  poster() {
    return this.posterImage && !this.autoplay ? this.posterImage : w$1;
  }
  videoPoster() {
    return navigator.userAgent.toLowerCase().includes("chrome") ? this.poster() : w$1;
  }
  videoStyle() {
    return !navigator.userAgent.toLowerCase().includes("chrome") && this._posterShouldBeVisible ? "opacity: 0;" : w$1;
  }
  videoRendered(e2) {
    S.forEach((t2) => {
      e2 == null || e2.addEventListener(t2, (s2) => {
        var h2;
        let r2;
        t2 == "seeked" ? r2 = { detail: { duration: (h2 = this.video) == null ? void 0 : h2.duration, embed: this.embed } } : r2 = { detail: { embed: this.embed } }, this.dispatchEvent(new CustomEvent(s2.type, r2));
      });
    });
  }
  render() {
    return $$1`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive || this._isFullscreen ? "active_overlay" : this._uploadActive ? "active_upload" : ""}
      >
        ${this.renderCanvas()}
        ${this.src ? $$1`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible ? $$1` <img class="poster" .src=${this.poster()} /> ` : ""}

              <video
                ${n$1(this.videoRendered)}
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
                .src=${this.needsHls() ? this.src : w$1}
              >
                ${this.needsHls() ? w$1 : $$1`<source
                      src=${this.src}
                      type=${this.fileType ? "video/" + this.fileType : "video/mp4"}
                    />`}
              </video>
            ` : w$1}
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
              <slot id="end" name="end-screen"></slot>
            ` : w$1}
        </dialog>
    `;
  }
  firstUpdated(e2) {
    this.appHeight();
  }
  generateUrl() {
    return this.jwt ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}` : this.reference_id && this.display_name ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}` : this.reference_id ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}` : this.display_name ? `https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}` : `https://${this.baseUrl}/e/${this.embed}?reference_id=${q}`;
  }
  sendMessage(e2, t2 = {}) {
    if (!this.iframe.contentWindow || !this.video)
      return;
    let s2 = $(H({ message: e2 }, t2), { embed: this.embed });
    this.iframe.contentWindow.postMessage(s2, "*"), this.triggerEvent(e2, s2);
  }
  openFullscreen() {
    this.isFullscreen() || (this.requestFullscreen ? this.requestFullscreen() : this.webkitRequestFullscreen ? this.webkitRequestFullscreen() : (this.sendMessage("mave:open_overlay", {}), this.openOverlay()), this.video && !this.video.paused && (this.video.muted = false, this.sendMessage("mave:video_muted", { muted: this.video.muted })));
  }
  closeFullscreen() {
    (this.isFullscreen() || this._overlayActive) && (document.exitFullscreen && !this._overlayActive ? document.exitFullscreen() : document.webkitExitFullscreen && !this._overlayActive ? document.webkitExitFullscreen() : (this.sendMessage("mave:close_overlay", {}), this.closeOverlay(), this.closeDialog()));
  }
  renderCanvas() {
  }
  timeUpdate() {
    this._animationFrame = requestAnimationFrame(() => {
      !this.video || (this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this.timeUpdate());
    });
  }
  initiateScript() {
    if (this.src && !this.needsHls())
      return;
    let e2 = document.createElement("script");
    return e2.onload = this.scriptHandler.bind(this), e2.src = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js", e2;
  }
  needsHls() {
    var e2, t2;
    return ((e2 = this.src) == null ? void 0 : e2.includes(".m3u8")) || ((t2 = this.src) == null ? void 0 : t2.includes("mux.com"));
  }
  scriptHandler() {
    if (!(!this.video || !this.src || this._hlsLoaded || !this.needsHls())) {
      if (Hls.isSupported()) {
        let e2 = new Hls();
        e2.config.startLevel = 3, e2.loadSource(this.src), e2.attachMedia(this.video);
        let t2 = [];
        e2.on(Hls.Events.MANIFEST_LOADED, (s2, r2) => {
          t2 = r2.levels.reverse();
        }), e2.on(Hls.Events.LEVEL_LOADED, (s2, r2) => {
          this._bitrate != t2[r2.level].bitrate && (this._bitrate = t2[r2.level].bitrate, this.sendMessage("mave:bitrate", { bitrate: this._bitrate }));
        }), e2.subtitleTrack = 0, e2.subtitleDisplay = true;
      }
      this._hlsLoaded = true;
    }
  }
  appHeight() {
    document.documentElement.style.setProperty("--mave_embed_dialog_height", `${window.innerHeight}px`);
  }
  visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow)
      return;
    let { top: e2, bottom: t2 } = this.iframe.getBoundingClientRect(), s2 = window.innerHeight || document.documentElement.clientHeight, r2 = (e2 > 0 || t2 > 0) && e2 < s2;
    this.sendMessage(r2 ? "mave:video_in_viewport" : "mave:video_out_viewport"), this.debouncedAppHeight();
  }
  isFullscreen() {
    return !!document.fullscreenElement || !!document.webkitFullscreenElement || "ontouchend" in document && this._isFullscreen;
  }
  openOverlay() {
    this.isFullscreen() || (this._overlayActive = true, this._blurhashShouldBeVisible && (this._blurhashShouldBeVisible = false), this.dialog.showModal(), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; overflow: hidden;`));
  }
  closeOverlay() {
    this.dialog.close(), this._overlayActive = false, document.documentElement.setAttribute("style", this._globalStyle || "");
  }
  triggerEvent(e2, t2) {
    let s2 = t2 ? { detail: t2 } : void 0, r2 = new CustomEvent(e2, s2);
    this.dispatchEvent(r2);
  }
  debounce(e2, t2) {
    let s2;
    return (...r2) => {
      clearTimeout(s2), s2 = setTimeout(() => {
        e2(...r2);
      }, t2);
    };
  }
};
a.styles = x, i([e({ type: String })], a.prototype, "embed", 2), i([e({ type: String })], a.prototype, "reference_id", 2), i([e({ type: String })], a.prototype, "display_name", 2), i([e({ type: String })], a.prototype, "jwt", 2), i([e({ type: String })], a.prototype, "classname", 2), i([e({ type: Boolean })], a.prototype, "muted", 2), i([e({ type: Boolean })], a.prototype, "autoplay", 2), i([e({ type: Boolean })], a.prototype, "loop", 2), i([e({ type: String })], a.prototype, "src", 2), i([e({ type: String })], a.prototype, "blurhash", 2), i([e({ type: String, attribute: "aspect-ratio" })], a.prototype, "aspectRatio", 2), i([e({ type: String })], a.prototype, "width", 2), i([e({ type: String })], a.prototype, "height", 2), i([e({ type: String, attribute: "poster-image" })], a.prototype, "posterImage", 2), i([e({ type: String, attribute: "poster-video-source" })], a.prototype, "posterVideoSource", 2), i([e({ type: String, attribute: "file-type" })], a.prototype, "fileType", 2), i([i$1("#dialog")], a.prototype, "dialog", 2), i([i$1("#iframe")], a.prototype, "iframe", 2), i([i$1("#video")], a.prototype, "video", 2), i([i$1("#canvas")], a.prototype, "canvas", 2), i([i$1("#script")], a.prototype, "script", 2), i([i$1("#end")], a.prototype, "endElement", 2), i([t()], a.prototype, "_settingsActive", 2), i([t()], a.prototype, "_blurhashShouldBeVisible", 2), i([t()], a.prototype, "_overlayActive", 2), i([t()], a.prototype, "_isFullscreen", 2), i([t()], a.prototype, "_uploadActive", 2), i([t()], a.prototype, "_posterShouldBeVisible", 2);
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
    style: null,
    posterImage: null,
    posterVideoSource: null
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

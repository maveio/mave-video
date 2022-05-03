var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a3, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a3, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    }
  return a3;
};
var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "../../node_modules/tsup/assets/cjs_shims.js"() {
  }
});

// ../../node_modules/@lit/reactive-element/css-tag.js
var t, e, n, s, o, r, i, S;
var init_css_tag = __esm({
  "../../node_modules/@lit/reactive-element/css-tag.js"() {
    init_cjs_shims();
    t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    e = Symbol();
    n = /* @__PURE__ */ new Map();
    s = class {
      constructor(t4, n7) {
        if (this._$cssResult$ = true, n7 !== e)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t4;
      }
      get styleSheet() {
        let e9 = n.get(this.cssText);
        return t && e9 === void 0 && (n.set(this.cssText, e9 = new CSSStyleSheet()), e9.replaceSync(this.cssText)), e9;
      }
      toString() {
        return this.cssText;
      }
    };
    o = (t4) => new s(typeof t4 == "string" ? t4 : t4 + "", e);
    r = (t4, ...n7) => {
      const o7 = t4.length === 1 ? t4[0] : n7.reduce((e9, n8, s5) => e9 + ((t5) => {
        if (t5._$cssResult$ === true)
          return t5.cssText;
        if (typeof t5 == "number")
          return t5;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(n8) + t4[s5 + 1], t4[0]);
      return new s(o7, e);
    };
    i = (e9, n7) => {
      t ? e9.adoptedStyleSheets = n7.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : n7.forEach((t4) => {
        const n8 = document.createElement("style"), s5 = window.litNonce;
        s5 !== void 0 && n8.setAttribute("nonce", s5), n8.textContent = t4.cssText, e9.appendChild(n8);
      });
    };
    S = t ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
      let e9 = "";
      for (const n7 of t5.cssRules)
        e9 += n7.cssText;
      return o(e9);
    })(t4) : t4;
  }
});

// ../../node_modules/@lit/reactive-element/reactive-element.js
var s2, e2, r2, h, o2, n2, l, a;
var init_reactive_element = __esm({
  "../../node_modules/@lit/reactive-element/reactive-element.js"() {
    init_cjs_shims();
    init_css_tag();
    init_css_tag();
    e2 = window.trustedTypes;
    r2 = e2 ? e2.emptyScript : "";
    h = window.reactiveElementPolyfillSupport;
    o2 = { toAttribute(t4, i5) {
      switch (i5) {
        case Boolean:
          t4 = t4 ? r2 : null;
          break;
        case Object:
        case Array:
          t4 = t4 == null ? t4 : JSON.stringify(t4);
      }
      return t4;
    }, fromAttribute(t4, i5) {
      let s5 = t4;
      switch (i5) {
        case Boolean:
          s5 = t4 !== null;
          break;
        case Number:
          s5 = t4 === null ? null : Number(t4);
          break;
        case Object:
        case Array:
          try {
            s5 = JSON.parse(t4);
          } catch (t5) {
            s5 = null;
          }
      }
      return s5;
    } };
    n2 = (t4, i5) => i5 !== t4 && (i5 == i5 || t4 == t4);
    l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
    a = class extends HTMLElement {
      constructor() {
        super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
      }
      static addInitializer(t4) {
        var i5;
        (i5 = this.l) !== null && i5 !== void 0 || (this.l = []), this.l.push(t4);
      }
      static get observedAttributes() {
        this.finalize();
        const t4 = [];
        return this.elementProperties.forEach((i5, s5) => {
          const e9 = this._$Eh(s5, i5);
          e9 !== void 0 && (this._$Eu.set(e9, s5), t4.push(e9));
        }), t4;
      }
      static createProperty(t4, i5 = l) {
        if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t4, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t4)) {
          const s5 = typeof t4 == "symbol" ? Symbol() : "__" + t4, e9 = this.getPropertyDescriptor(t4, s5, i5);
          e9 !== void 0 && Object.defineProperty(this.prototype, t4, e9);
        }
      }
      static getPropertyDescriptor(t4, i5, s5) {
        return { get() {
          return this[i5];
        }, set(e9) {
          const r5 = this[t4];
          this[i5] = e9, this.requestUpdate(t4, r5, s5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t4) {
        return this.elementProperties.get(t4) || l;
      }
      static finalize() {
        if (this.hasOwnProperty("finalized"))
          return false;
        this.finalized = true;
        const t4 = Object.getPrototypeOf(this);
        if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
          const t5 = this.properties, i5 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
          for (const s5 of i5)
            this.createProperty(s5, t5[s5]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
      }
      static finalizeStyles(i5) {
        const s5 = [];
        if (Array.isArray(i5)) {
          const e9 = new Set(i5.flat(1 / 0).reverse());
          for (const i6 of e9)
            s5.unshift(S(i6));
        } else
          i5 !== void 0 && s5.push(S(i5));
        return s5;
      }
      static _$Eh(t4, i5) {
        const s5 = i5.attribute;
        return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
      }
      o() {
        var t4;
        this._$Ep = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t4 = this.constructor.l) === null || t4 === void 0 || t4.forEach((t5) => t5(this));
      }
      addController(t4) {
        var i5, s5;
        ((i5 = this._$Eg) !== null && i5 !== void 0 ? i5 : this._$Eg = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s5 = t4.hostConnected) === null || s5 === void 0 || s5.call(t4));
      }
      removeController(t4) {
        var i5;
        (i5 = this._$Eg) === null || i5 === void 0 || i5.splice(this._$Eg.indexOf(t4) >>> 0, 1);
      }
      _$Em() {
        this.constructor.elementProperties.forEach((t4, i5) => {
          this.hasOwnProperty(i5) && (this._$Et.set(i5, this[i5]), delete this[i5]);
        });
      }
      createRenderRoot() {
        var t4;
        const s5 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
        return i(s5, this.constructor.elementStyles), s5;
      }
      connectedCallback() {
        var t4;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
          var i5;
          return (i5 = t5.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
        });
      }
      enableUpdating(t4) {
      }
      disconnectedCallback() {
        var t4;
        (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
          var i5;
          return (i5 = t5.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
        });
      }
      attributeChangedCallback(t4, i5, s5) {
        this._$AK(t4, s5);
      }
      _$ES(t4, i5, s5 = l) {
        var e9, r5;
        const h4 = this.constructor._$Eh(t4, s5);
        if (h4 !== void 0 && s5.reflect === true) {
          const n7 = ((r5 = (e9 = s5.converter) === null || e9 === void 0 ? void 0 : e9.toAttribute) !== null && r5 !== void 0 ? r5 : o2.toAttribute)(i5, s5.type);
          this._$Ei = t4, n7 == null ? this.removeAttribute(h4) : this.setAttribute(h4, n7), this._$Ei = null;
        }
      }
      _$AK(t4, i5) {
        var s5, e9, r5;
        const h4 = this.constructor, n7 = h4._$Eu.get(t4);
        if (n7 !== void 0 && this._$Ei !== n7) {
          const t5 = h4.getPropertyOptions(n7), l5 = t5.converter, a3 = (r5 = (e9 = (s5 = l5) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e9 !== void 0 ? e9 : typeof l5 == "function" ? l5 : null) !== null && r5 !== void 0 ? r5 : o2.fromAttribute;
          this._$Ei = n7, this[n7] = a3(i5, t5.type), this._$Ei = null;
        }
      }
      requestUpdate(t4, i5, s5) {
        let e9 = true;
        t4 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t4)).hasChanged || n2)(this[t4], i5) ? (this._$AL.has(t4) || this._$AL.set(t4, i5), s5.reflect === true && this._$Ei !== t4 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t4, s5))) : e9 = false), !this.isUpdatePending && e9 && (this._$Ep = this._$E_());
      }
      async _$E_() {
        this.isUpdatePending = true;
        try {
          await this._$Ep;
        } catch (t5) {
          Promise.reject(t5);
        }
        const t4 = this.scheduleUpdate();
        return t4 != null && await t4, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var t4;
        if (!this.isUpdatePending)
          return;
        this.hasUpdated, this._$Et && (this._$Et.forEach((t5, i6) => this[i6] = t5), this._$Et = void 0);
        let i5 = false;
        const s5 = this._$AL;
        try {
          i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t4 = this._$Eg) === null || t4 === void 0 || t4.forEach((t5) => {
            var i6;
            return (i6 = t5.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t5);
          }), this.update(s5)) : this._$EU();
        } catch (t5) {
          throw i5 = false, this._$EU(), t5;
        }
        i5 && this._$AE(s5);
      }
      willUpdate(t4) {
      }
      _$AE(t4) {
        var i5;
        (i5 = this._$Eg) === null || i5 === void 0 || i5.forEach((t5) => {
          var i6;
          return (i6 = t5.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t5);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
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
      shouldUpdate(t4) {
        return true;
      }
      update(t4) {
        this._$EC !== void 0 && (this._$EC.forEach((t5, i5) => this._$ES(i5, this[i5], t5)), this._$EC = void 0), this._$EU();
      }
      updated(t4) {
      }
      firstUpdated(t4) {
      }
    };
    a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.3.1");
  }
});

// ../../node_modules/lit-html/lit-html.js
function P(t4, i5, s5 = t4, e9) {
  var o7, n7, l5, h4;
  if (i5 === b)
    return i5;
  let d2 = e9 !== void 0 ? (o7 = s5._$Cl) === null || o7 === void 0 ? void 0 : o7[e9] : s5._$Cu;
  const u2 = r3(i5) ? void 0 : i5._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n7 = d2 == null ? void 0 : d2._$AO) === null || n7 === void 0 || n7.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t4), d2._$AT(t4, s5, e9)), e9 !== void 0 ? ((l5 = (h4 = s5)._$Cl) !== null && l5 !== void 0 ? l5 : h4._$Cl = [])[e9] = d2 : s5._$Cu = d2), d2 !== void 0 && (i5 = P(t4, d2._$AS(t4, i5.values), d2, e9)), i5;
}
var t2, i2, s3, e3, o3, n3, l2, h2, r3, d, u, c, v, a2, f, _, m, g, p, $, y, b, w, T, x, A, C, E, V, N, S2, M, k, H, I, L, R, z;
var init_lit_html = __esm({
  "../../node_modules/lit-html/lit-html.js"() {
    init_cjs_shims();
    i2 = globalThis.trustedTypes;
    s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
    e3 = `lit$${(Math.random() + "").slice(9)}$`;
    o3 = "?" + e3;
    n3 = `<${o3}>`;
    l2 = document;
    h2 = (t4 = "") => l2.createComment(t4);
    r3 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
    d = Array.isArray;
    u = (t4) => {
      var i5;
      return d(t4) || typeof ((i5 = t4) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
    };
    c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    v = /-->/g;
    a2 = />/g;
    f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
    _ = /'/g;
    m = /"/g;
    g = /^(?:script|style|textarea|title)$/i;
    p = (t4) => (i5, ...s5) => ({ _$litType$: t4, strings: i5, values: s5 });
    $ = p(1);
    y = p(2);
    b = Symbol.for("lit-noChange");
    w = Symbol.for("lit-nothing");
    T = /* @__PURE__ */ new WeakMap();
    x = (t4, i5, s5) => {
      var e9, o7;
      const n7 = (e9 = s5 == null ? void 0 : s5.renderBefore) !== null && e9 !== void 0 ? e9 : i5;
      let l5 = n7._$litPart$;
      if (l5 === void 0) {
        const t5 = (o7 = s5 == null ? void 0 : s5.renderBefore) !== null && o7 !== void 0 ? o7 : null;
        n7._$litPart$ = l5 = new N(i5.insertBefore(h2(), t5), t5, void 0, s5 != null ? s5 : {});
      }
      return l5._$AI(t4), l5;
    };
    A = l2.createTreeWalker(l2, 129, null, false);
    C = (t4, i5) => {
      const o7 = t4.length - 1, l5 = [];
      let h4, r5 = i5 === 2 ? "<svg>" : "", d2 = c;
      for (let i6 = 0; i6 < o7; i6++) {
        const s5 = t4[i6];
        let o8, u3, p2 = -1, $2 = 0;
        for (; $2 < s5.length && (d2.lastIndex = $2, u3 = d2.exec(s5), u3 !== null); )
          $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h4 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h4 != null ? h4 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o8 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h4 = void 0);
        const y2 = d2 === f && t4[i6 + 1].startsWith("/>") ? " " : "";
        r5 += d2 === c ? s5 + n3 : p2 >= 0 ? (l5.push(o8), s5.slice(0, p2) + "$lit$" + s5.slice(p2) + e3 + y2) : s5 + e3 + (p2 === -2 ? (l5.push(void 0), i6) : y2);
      }
      const u2 = r5 + (t4[o7] || "<?>") + (i5 === 2 ? "</svg>" : "");
      if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
      return [s3 !== void 0 ? s3.createHTML(u2) : u2, l5];
    };
    E = class {
      constructor({ strings: t4, _$litType$: s5 }, n7) {
        let l5;
        this.parts = [];
        let r5 = 0, d2 = 0;
        const u2 = t4.length - 1, c2 = this.parts, [v2, a3] = C(t4, s5);
        if (this.el = E.createElement(v2, n7), A.currentNode = this.el.content, s5 === 2) {
          const t5 = this.el.content, i5 = t5.firstChild;
          i5.remove(), t5.append(...i5.childNodes);
        }
        for (; (l5 = A.nextNode()) !== null && c2.length < u2; ) {
          if (l5.nodeType === 1) {
            if (l5.hasAttributes()) {
              const t5 = [];
              for (const i5 of l5.getAttributeNames())
                if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
                  const s6 = a3[d2++];
                  if (t5.push(i5), s6 !== void 0) {
                    const t6 = l5.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s6);
                    c2.push({ type: 1, index: r5, name: i6[2], strings: t6, ctor: i6[1] === "." ? M : i6[1] === "?" ? H : i6[1] === "@" ? I : S2 });
                  } else
                    c2.push({ type: 6, index: r5 });
                }
              for (const i5 of t5)
                l5.removeAttribute(i5);
            }
            if (g.test(l5.tagName)) {
              const t5 = l5.textContent.split(e3), s6 = t5.length - 1;
              if (s6 > 0) {
                l5.textContent = i2 ? i2.emptyScript : "";
                for (let i5 = 0; i5 < s6; i5++)
                  l5.append(t5[i5], h2()), A.nextNode(), c2.push({ type: 2, index: ++r5 });
                l5.append(t5[s6], h2());
              }
            }
          } else if (l5.nodeType === 8)
            if (l5.data === o3)
              c2.push({ type: 2, index: r5 });
            else {
              let t5 = -1;
              for (; (t5 = l5.data.indexOf(e3, t5 + 1)) !== -1; )
                c2.push({ type: 7, index: r5 }), t5 += e3.length - 1;
            }
          r5++;
        }
      }
      static createElement(t4, i5) {
        const s5 = l2.createElement("template");
        return s5.innerHTML = t4, s5;
      }
    };
    V = class {
      constructor(t4, i5) {
        this.v = [], this._$AN = void 0, this._$AD = t4, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(t4) {
        var i5;
        const { el: { content: s5 }, parts: e9 } = this._$AD, o7 = ((i5 = t4 == null ? void 0 : t4.creationScope) !== null && i5 !== void 0 ? i5 : l2).importNode(s5, true);
        A.currentNode = o7;
        let n7 = A.nextNode(), h4 = 0, r5 = 0, d2 = e9[0];
        for (; d2 !== void 0; ) {
          if (h4 === d2.index) {
            let i6;
            d2.type === 2 ? i6 = new N(n7, n7.nextSibling, this, t4) : d2.type === 1 ? i6 = new d2.ctor(n7, d2.name, d2.strings, this, t4) : d2.type === 6 && (i6 = new L(n7, this, t4)), this.v.push(i6), d2 = e9[++r5];
          }
          h4 !== (d2 == null ? void 0 : d2.index) && (n7 = A.nextNode(), h4++);
        }
        return o7;
      }
      m(t4) {
        let i5 = 0;
        for (const s5 of this.v)
          s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t4, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t4[i5])), i5++;
      }
    };
    N = class {
      constructor(t4, i5, s5, e9) {
        var o7;
        this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t4, this._$AB = i5, this._$AM = s5, this.options = e9, this._$Cg = (o7 = e9 == null ? void 0 : e9.isConnected) === null || o7 === void 0 || o7;
      }
      get _$AU() {
        var t4, i5;
        return (i5 = (t4 = this._$AM) === null || t4 === void 0 ? void 0 : t4._$AU) !== null && i5 !== void 0 ? i5 : this._$Cg;
      }
      get parentNode() {
        let t4 = this._$AA.parentNode;
        const i5 = this._$AM;
        return i5 !== void 0 && t4.nodeType === 11 && (t4 = i5.parentNode), t4;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t4, i5 = this) {
        t4 = P(this, t4, i5), r3(t4) ? t4 === w || t4 == null || t4 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t4 !== this._$AH && t4 !== b && this.$(t4) : t4._$litType$ !== void 0 ? this.T(t4) : t4.nodeType !== void 0 ? this.k(t4) : u(t4) ? this.S(t4) : this.$(t4);
      }
      M(t4, i5 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t4, i5);
      }
      k(t4) {
        this._$AH !== t4 && (this._$AR(), this._$AH = this.M(t4));
      }
      $(t4) {
        this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.k(l2.createTextNode(t4)), this._$AH = t4;
      }
      T(t4) {
        var i5;
        const { values: s5, _$litType$: e9 } = t4, o7 = typeof e9 == "number" ? this._$AC(t4) : (e9.el === void 0 && (e9.el = E.createElement(e9.h, this.options)), e9);
        if (((i5 = this._$AH) === null || i5 === void 0 ? void 0 : i5._$AD) === o7)
          this._$AH.m(s5);
        else {
          const t5 = new V(o7, this), i6 = t5.p(this.options);
          t5.m(s5), this.k(i6), this._$AH = t5;
        }
      }
      _$AC(t4) {
        let i5 = T.get(t4.strings);
        return i5 === void 0 && T.set(t4.strings, i5 = new E(t4)), i5;
      }
      S(t4) {
        d(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s5, e9 = 0;
        for (const o7 of t4)
          e9 === i5.length ? i5.push(s5 = new N(this.M(h2()), this.M(h2()), this, this.options)) : s5 = i5[e9], s5._$AI(o7), e9++;
        e9 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e9), i5.length = e9);
      }
      _$AR(t4 = this._$AA.nextSibling, i5) {
        var s5;
        for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i5); t4 && t4 !== this._$AB; ) {
          const i6 = t4.nextSibling;
          t4.remove(), t4 = i6;
        }
      }
      setConnected(t4) {
        var i5;
        this._$AM === void 0 && (this._$Cg = t4, (i5 = this._$AP) === null || i5 === void 0 || i5.call(this, t4));
      }
    };
    S2 = class {
      constructor(t4, i5, s5, e9, o7) {
        this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t4, this.name = i5, this._$AM = e9, this.options = o7, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = w;
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t4, i5 = this, s5, e9) {
        const o7 = this.strings;
        let n7 = false;
        if (o7 === void 0)
          t4 = P(this, t4, i5, 0), n7 = !r3(t4) || t4 !== this._$AH && t4 !== b, n7 && (this._$AH = t4);
        else {
          const e10 = t4;
          let l5, h4;
          for (t4 = o7[0], l5 = 0; l5 < o7.length - 1; l5++)
            h4 = P(this, e10[s5 + l5], i5, l5), h4 === b && (h4 = this._$AH[l5]), n7 || (n7 = !r3(h4) || h4 !== this._$AH[l5]), h4 === w ? t4 = w : t4 !== w && (t4 += (h4 != null ? h4 : "") + o7[l5 + 1]), this._$AH[l5] = h4;
        }
        n7 && !e9 && this.C(t4);
      }
      C(t4) {
        t4 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
      }
    };
    M = class extends S2 {
      constructor() {
        super(...arguments), this.type = 3;
      }
      C(t4) {
        this.element[this.name] = t4 === w ? void 0 : t4;
      }
    };
    k = i2 ? i2.emptyScript : "";
    H = class extends S2 {
      constructor() {
        super(...arguments), this.type = 4;
      }
      C(t4) {
        t4 && t4 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
      }
    };
    I = class extends S2 {
      constructor(t4, i5, s5, e9, o7) {
        super(t4, i5, s5, e9, o7), this.type = 5;
      }
      _$AI(t4, i5 = this) {
        var s5;
        if ((t4 = (s5 = P(this, t4, i5, 0)) !== null && s5 !== void 0 ? s5 : w) === b)
          return;
        const e9 = this._$AH, o7 = t4 === w && e9 !== w || t4.capture !== e9.capture || t4.once !== e9.once || t4.passive !== e9.passive, n7 = t4 !== w && (e9 === w || o7);
        o7 && this.element.removeEventListener(this.name, this, e9), n7 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
      }
      handleEvent(t4) {
        var i5, s5;
        typeof this._$AH == "function" ? this._$AH.call((s5 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s5 !== void 0 ? s5 : this.element, t4) : this._$AH.handleEvent(t4);
      }
    };
    L = class {
      constructor(t4, i5, s5) {
        this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t4) {
        P(this, t4);
      }
    };
    R = { L: "$lit$", P: e3, V: o3, I: 1, N: C, R: V, j: u, D: P, H: N, F: S2, O: H, W: I, B: M, Z: L };
    z = window.litHtmlPolyfillSupport;
    z == null || z(E, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.2.2");
  }
});

// ../../node_modules/lit-element/lit-element.js
var l3, o4, r4, s4, n4, h3;
var init_lit_element = __esm({
  "../../node_modules/lit-element/lit-element.js"() {
    init_cjs_shims();
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    r4 = a;
    s4 = class extends a {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
      }
      createRenderRoot() {
        var t4, e9;
        const i5 = super.createRenderRoot();
        return (t4 = (e9 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e9.renderBefore = i5.firstChild), i5;
      }
      update(t4) {
        const i5 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Dt = x(i5, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        var t4;
        super.connectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(true);
      }
      disconnectedCallback() {
        var t4;
        super.disconnectedCallback(), (t4 = this._$Dt) === null || t4 === void 0 || t4.setConnected(false);
      }
      render() {
        return b;
      }
    };
    s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
    n4 = globalThis.litElementPolyfillSupport;
    n4 == null || n4({ LitElement: s4 });
    h3 = { _$AK: (t4, e9, i5) => {
      t4._$AK(e9, i5);
    }, _$AL: (t4) => t4._$AL };
    ((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.2.0");
  }
});

// ../../node_modules/lit/index.js
var lit_exports = {};
__export(lit_exports, {
  CSSResult: () => s,
  LitElement: () => s4,
  ReactiveElement: () => a,
  UpdatingElement: () => r4,
  _$LE: () => h3,
  _$LH: () => R,
  adoptStyles: () => i,
  css: () => r,
  defaultConverter: () => o2,
  getCompatibleStyle: () => S,
  html: () => $,
  noChange: () => b,
  notEqual: () => n2,
  nothing: () => w,
  render: () => x,
  supportsAdoptingStyleSheets: () => t,
  svg: () => y,
  unsafeCSS: () => o
});
var init_lit = __esm({
  "../../node_modules/lit/index.js"() {
    init_cjs_shims();
    init_reactive_element();
    init_lit_html();
    init_lit_element();
  }
});

// ../../node_modules/@lit/reactive-element/decorators/custom-element.js
var n5;
var init_custom_element = __esm({
  "../../node_modules/@lit/reactive-element/decorators/custom-element.js"() {
    init_cjs_shims();
    n5 = (n7) => (e9) => typeof e9 == "function" ? ((n8, e10) => (window.customElements.define(n8, e10), e10))(n7, e9) : ((n8, e10) => {
      const { kind: t4, elements: i5 } = e10;
      return { kind: t4, elements: i5, finisher(e11) {
        window.customElements.define(n8, e11);
      } };
    })(n7, e9);
  }
});

// ../../node_modules/@lit/reactive-element/decorators/property.js
function e4(e9) {
  return (n7, t4) => t4 !== void 0 ? ((i5, e10, n8) => {
    e10.constructor.createProperty(n8, i5);
  })(e9, n7, t4) : i3(e9, n7);
}
var i3;
var init_property = __esm({
  "../../node_modules/@lit/reactive-element/decorators/property.js"() {
    init_cjs_shims();
    i3 = (i5, e9) => e9.kind === "method" && e9.descriptor && !("value" in e9.descriptor) ? __spreadProps(__spreadValues({}, e9), { finisher(n7) {
      n7.createProperty(e9.key, i5);
    } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e9.key, initializer() {
      typeof e9.initializer == "function" && (this[e9.key] = e9.initializer.call(this));
    }, finisher(n7) {
      n7.createProperty(e9.key, i5);
    } };
  }
});

// ../../node_modules/@lit/reactive-element/decorators/state.js
function t3(t4) {
  return e4(__spreadProps(__spreadValues({}, t4), { state: true }));
}
var init_state = __esm({
  "../../node_modules/@lit/reactive-element/decorators/state.js"() {
    init_cjs_shims();
    init_property();
  }
});

// ../../node_modules/@lit/reactive-element/decorators/base.js
var o5;
var init_base = __esm({
  "../../node_modules/@lit/reactive-element/decorators/base.js"() {
    init_cjs_shims();
    o5 = ({ finisher: e9, descriptor: t4 }) => (o7, n7) => {
      var r5;
      if (n7 === void 0) {
        const n8 = (r5 = o7.originalKey) !== null && r5 !== void 0 ? r5 : o7.key, i5 = t4 != null ? { kind: "method", placement: "prototype", key: n8, descriptor: t4(o7.key) } : __spreadProps(__spreadValues({}, o7), { key: n8 });
        return e9 != null && (i5.finisher = function(t5) {
          e9(t5, n8);
        }), i5;
      }
      {
        const r6 = o7.constructor;
        t4 !== void 0 && Object.defineProperty(o7, n7, t4(n7)), e9 == null || e9(r6, n7);
      }
    };
  }
});

// ../../node_modules/@lit/reactive-element/decorators/event-options.js
function e5(e9) {
  return o5({ finisher: (r5, t4) => {
    Object.assign(r5.prototype[t4], e9);
  } });
}
var init_event_options = __esm({
  "../../node_modules/@lit/reactive-element/decorators/event-options.js"() {
    init_cjs_shims();
    init_base();
  }
});

// ../../node_modules/@lit/reactive-element/decorators/query.js
function i4(i5, n7) {
  return o5({ descriptor: (o7) => {
    const t4 = { get() {
      var o8, n8;
      return (n8 = (o8 = this.renderRoot) === null || o8 === void 0 ? void 0 : o8.querySelector(i5)) !== null && n8 !== void 0 ? n8 : null;
    }, enumerable: true, configurable: true };
    if (n7) {
      const n8 = typeof o7 == "symbol" ? Symbol() : "__" + o7;
      t4.get = function() {
        var o8, t5;
        return this[n8] === void 0 && (this[n8] = (t5 = (o8 = this.renderRoot) === null || o8 === void 0 ? void 0 : o8.querySelector(i5)) !== null && t5 !== void 0 ? t5 : null), this[n8];
      };
    }
    return t4;
  } });
}
var init_query = __esm({
  "../../node_modules/@lit/reactive-element/decorators/query.js"() {
    init_cjs_shims();
    init_base();
  }
});

// ../../node_modules/@lit/reactive-element/decorators/query-all.js
function e6(e9) {
  return o5({ descriptor: (r5) => ({ get() {
    var r6, o7;
    return (o7 = (r6 = this.renderRoot) === null || r6 === void 0 ? void 0 : r6.querySelectorAll(e9)) !== null && o7 !== void 0 ? o7 : [];
  }, enumerable: true, configurable: true }) });
}
var init_query_all = __esm({
  "../../node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_cjs_shims();
    init_base();
  }
});

// ../../node_modules/@lit/reactive-element/decorators/query-async.js
function e7(e9) {
  return o5({ descriptor: (r5) => ({ async get() {
    var r6;
    return await this.updateComplete, (r6 = this.renderRoot) === null || r6 === void 0 ? void 0 : r6.querySelector(e9);
  }, enumerable: true, configurable: true }) });
}
var init_query_async = __esm({
  "../../node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_cjs_shims();
    init_base();
  }
});

// ../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
function l4(n7) {
  const { slot: l5, selector: t4 } = n7 != null ? n7 : {};
  return o5({ descriptor: (o7) => ({ get() {
    var o8;
    const r5 = "slot" + (l5 ? `[name=${l5}]` : ":not([name])"), i5 = (o8 = this.renderRoot) === null || o8 === void 0 ? void 0 : o8.querySelector(r5), s5 = i5 != null ? e8(i5, n7) : [];
    return t4 ? s5.filter((o9) => o9.matches(t4)) : s5;
  }, enumerable: true, configurable: true }) });
}
var n6, e8;
var init_query_assigned_elements = __esm({
  "../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_cjs_shims();
    init_base();
    e8 = ((n6 = window.HTMLSlotElement) === null || n6 === void 0 ? void 0 : n6.prototype.assignedElements) != null ? (o7, n7) => o7.assignedElements(n7) : (o7, n7) => o7.assignedNodes(n7).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);
  }
});

// ../../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
function o6(o7, n7, r5) {
  let l5, s5 = o7;
  return typeof o7 == "object" ? (s5 = o7.slot, l5 = o7) : l5 = { flatten: n7 }, r5 ? l4({ slot: s5, flatten: n7, selector: r5 }) : o5({ descriptor: (e9) => ({ get() {
    var e10, t4;
    const o8 = "slot" + (s5 ? `[name=${s5}]` : ":not([name])"), n8 = (e10 = this.renderRoot) === null || e10 === void 0 ? void 0 : e10.querySelector(o8);
    return (t4 = n8 == null ? void 0 : n8.assignedNodes(l5)) !== null && t4 !== void 0 ? t4 : [];
  }, enumerable: true, configurable: true }) });
}
var init_query_assigned_nodes = __esm({
  "../../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_cjs_shims();
    init_base();
    init_query_assigned_elements();
  }
});

// ../../node_modules/lit/decorators.js
var decorators_exports = {};
__export(decorators_exports, {
  customElement: () => n5,
  eventOptions: () => e5,
  property: () => e4,
  query: () => i4,
  queryAll: () => e6,
  queryAssignedElements: () => l4,
  queryAssignedNodes: () => o6,
  queryAsync: () => e7,
  state: () => t3
});
var init_decorators = __esm({
  "../../node_modules/lit/decorators.js"() {
    init_cjs_shims();
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// ../../node_modules/@fpapado/blurhash/dist/base83.js
var digitCharacters, decode83, encode83;
var init_base83 = __esm({
  "../../node_modules/@fpapado/blurhash/dist/base83.js"() {
    init_cjs_shims();
    digitCharacters = [
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
    decode83 = (str) => {
      let value = 0;
      for (let i5 = 0; i5 < str.length; i5++) {
        const c2 = str[i5];
        const digit = digitCharacters.indexOf(c2);
        value = value * 83 + digit;
      }
      return value;
    };
    encode83 = (n7, length) => {
      var result = "";
      for (let i5 = 1; i5 <= length; i5++) {
        let digit = Math.floor(n7) / Math.pow(83, length - i5) % 83;
        result += digitCharacters[Math.floor(digit)];
      }
      return result;
    };
  }
});

// ../../node_modules/@fpapado/blurhash/dist/utils.js
var sRGBToLinear, linearTosRGB, sign, signPow;
var init_utils = __esm({
  "../../node_modules/@fpapado/blurhash/dist/utils.js"() {
    init_cjs_shims();
    sRGBToLinear = (value) => {
      let v2 = value / 255;
      if (v2 <= 0.04045) {
        return v2 / 12.92;
      } else {
        return Math.pow((v2 + 0.055) / 1.055, 2.4);
      }
    };
    linearTosRGB = (value) => {
      let v2 = Math.max(0, Math.min(1, value));
      if (v2 <= 31308e-7) {
        return Math.round(v2 * 12.92 * 255 + 0.5);
      } else {
        return Math.round((1.055 * Math.pow(v2, 1 / 2.4) - 0.055) * 255 + 0.5);
      }
    };
    sign = (n7) => n7 < 0 ? -1 : 1;
    signPow = (val, exp) => sign(val) * Math.pow(Math.abs(val), exp);
  }
});

// ../../node_modules/@fpapado/blurhash/dist/error.js
var ValidationError;
var init_error = __esm({
  "../../node_modules/@fpapado/blurhash/dist/error.js"() {
    init_cjs_shims();
    ValidationError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "ValidationError";
        this.message = message;
      }
    };
  }
});

// ../../node_modules/@fpapado/blurhash/dist/decode.js
var validateBlurhash, isBlurhashValid, decodeDC, decodeAC, decode, decode_default;
var init_decode = __esm({
  "../../node_modules/@fpapado/blurhash/dist/decode.js"() {
    init_cjs_shims();
    init_base83();
    init_utils();
    init_error();
    validateBlurhash = (blurhash) => {
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
    isBlurhashValid = (blurhash) => {
      try {
        validateBlurhash(blurhash);
      } catch (error) {
        return { result: false, errorReason: error.message };
      }
      return { result: true };
    };
    decodeDC = (value) => {
      const intR = value >> 16;
      const intG = value >> 8 & 255;
      const intB = value & 255;
      return [sRGBToLinear(intR), sRGBToLinear(intG), sRGBToLinear(intB)];
    };
    decodeAC = (value, maximumValue) => {
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
    decode = (blurhash, width, height, punch) => {
      validateBlurhash(blurhash);
      punch = punch | 1;
      const sizeFlag = decode83(blurhash[0]);
      const numY = Math.floor(sizeFlag / 9) + 1;
      const numX = sizeFlag % 9 + 1;
      const quantisedMaximumValue = decode83(blurhash[1]);
      const maximumValue = (quantisedMaximumValue + 1) / 166;
      const colors = new Array(numX * numY);
      for (let i5 = 0; i5 < colors.length; i5++) {
        if (i5 === 0) {
          const value = decode83(blurhash.substring(2, 6));
          colors[i5] = decodeDC(value);
        } else {
          const value = decode83(blurhash.substring(4 + i5 * 2, 6 + i5 * 2));
          colors[i5] = decodeAC(value, maximumValue * punch);
        }
      }
      const bytesPerRow = width * 4;
      const pixels = new Uint8ClampedArray(bytesPerRow * height);
      for (let y2 = 0; y2 < height; y2++) {
        for (let x2 = 0; x2 < width; x2++) {
          let r5 = 0;
          let g2 = 0;
          let b2 = 0;
          for (let j = 0; j < numY; j++) {
            for (let i5 = 0; i5 < numX; i5++) {
              const basis = Math.cos(Math.PI * x2 * i5 / width) * Math.cos(Math.PI * y2 * j / height);
              let color = colors[i5 + j * numX];
              r5 += color[0] * basis;
              g2 += color[1] * basis;
              b2 += color[2] * basis;
            }
          }
          let intR = linearTosRGB(r5);
          let intG = linearTosRGB(g2);
          let intB = linearTosRGB(b2);
          pixels[4 * x2 + 0 + y2 * bytesPerRow] = intR;
          pixels[4 * x2 + 1 + y2 * bytesPerRow] = intG;
          pixels[4 * x2 + 2 + y2 * bytesPerRow] = intB;
          pixels[4 * x2 + 3 + y2 * bytesPerRow] = 255;
        }
      }
      return pixels;
    };
    decode_default = decode;
  }
});

// ../../node_modules/@fpapado/blurhash/dist/encode.js
var bytesPerPixel, multiplyBasisFunction, encodeDC, encodeAC, encode, encode_default;
var init_encode = __esm({
  "../../node_modules/@fpapado/blurhash/dist/encode.js"() {
    init_cjs_shims();
    init_base83();
    init_utils();
    init_error();
    bytesPerPixel = 4;
    multiplyBasisFunction = (pixels, width, height, basisFunction) => {
      let r5 = 0;
      let g2 = 0;
      let b2 = 0;
      const bytesPerRow = width * bytesPerPixel;
      for (let x2 = 0; x2 < width; x2++) {
        for (let y2 = 0; y2 < height; y2++) {
          const basis = basisFunction(x2, y2);
          r5 += basis * sRGBToLinear(pixels[bytesPerPixel * x2 + 0 + y2 * bytesPerRow]);
          g2 += basis * sRGBToLinear(pixels[bytesPerPixel * x2 + 1 + y2 * bytesPerRow]);
          b2 += basis * sRGBToLinear(pixels[bytesPerPixel * x2 + 2 + y2 * bytesPerRow]);
        }
      }
      let scale = 1 / (width * height);
      return [r5 * scale, g2 * scale, b2 * scale];
    };
    encodeDC = (value) => {
      const roundedR = linearTosRGB(value[0]);
      const roundedG = linearTosRGB(value[1]);
      const roundedB = linearTosRGB(value[2]);
      return (roundedR << 16) + (roundedG << 8) + roundedB;
    };
    encodeAC = (value, maximumValue) => {
      let quantR = Math.floor(Math.max(0, Math.min(18, Math.floor(signPow(value[0] / maximumValue, 0.5) * 9 + 9.5))));
      let quantG = Math.floor(Math.max(0, Math.min(18, Math.floor(signPow(value[1] / maximumValue, 0.5) * 9 + 9.5))));
      let quantB = Math.floor(Math.max(0, Math.min(18, Math.floor(signPow(value[2] / maximumValue, 0.5) * 9 + 9.5))));
      return quantR * 19 * 19 + quantG * 19 + quantB;
    };
    encode = (pixels, width, height, componentX, componentY) => {
      if (componentX < 1 || componentX > 9 || componentY < 1 || componentY > 9) {
        throw new ValidationError("BlurHash must have between 1 and 9 components");
      }
      if (width * height * 4 !== pixels.length) {
        throw new ValidationError("Width and height must match the pixels array");
      }
      let factors = [];
      for (let y2 = 0; y2 < componentY; y2++) {
        for (let x2 = 0; x2 < componentX; x2++) {
          const normalisation = x2 == 0 && y2 == 0 ? 1 : 2;
          const factor = multiplyBasisFunction(pixels, width, height, (i5, j) => normalisation * Math.cos(Math.PI * x2 * i5 / width) * Math.cos(Math.PI * y2 * j / height));
          factors.push(factor);
        }
      }
      const dc = factors[0];
      const ac = factors.slice(1);
      let hash = "";
      let sizeFlag = componentX - 1 + (componentY - 1) * 9;
      hash += encode83(sizeFlag, 1);
      let maximumValue;
      if (ac.length > 0) {
        let actualMaximumValue = Math.max(...ac.map((val) => Math.max(...val)));
        let quantisedMaximumValue = Math.floor(Math.max(0, Math.min(82, Math.floor(actualMaximumValue * 166 - 0.5))));
        maximumValue = (quantisedMaximumValue + 1) / 166;
        hash += encode83(quantisedMaximumValue, 1);
      } else {
        maximumValue = 1;
        hash += encode83(0, 1);
      }
      hash += encode83(encodeDC(dc), 4);
      ac.forEach((factor) => {
        hash += encode83(encodeAC(factor, maximumValue), 2);
      });
      return hash;
    };
    encode_default = encode;
  }
});

// ../../node_modules/@fpapado/blurhash/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  ValidationError: () => ValidationError,
  decode: () => decode_default,
  encode: () => encode_default,
  isBlurhashValid: () => isBlurhashValid
});
var init_dist = __esm({
  "../../node_modules/@fpapado/blurhash/dist/index.js"() {
    init_cjs_shims();
    init_decode();
    init_encode();
    init_error();
  }
});

// ../mave-component/dist/index.js
var require_dist = __commonJS({
  "../mave-component/dist/index.js"(exports, module2) {
    init_cjs_shims();
    var b2 = Object.defineProperty;
    var w2 = Object.getOwnPropertyDescriptor;
    var x2 = Object.getOwnPropertyNames;
    var y2 = Object.getOwnPropertySymbols;
    var k2 = Object.prototype.hasOwnProperty;
    var S3 = Object.prototype.propertyIsEnumerable;
    var _2 = (o7, s5, e9) => s5 in o7 ? b2(o7, s5, { enumerable: true, configurable: true, writable: true, value: e9 }) : o7[s5] = e9;
    var E2 = (o7, s5) => {
      for (var e9 in s5 || (s5 = {}))
        k2.call(s5, e9) && _2(o7, e9, s5[e9]);
      if (y2)
        for (var e9 of y2(s5))
          S3.call(s5, e9) && _2(o7, e9, s5[e9]);
      return o7;
    };
    var L2 = (o7, s5) => {
      for (var e9 in s5)
        b2(o7, e9, { get: s5[e9], enumerable: true });
    };
    var A2 = (o7, s5, e9, t4) => {
      if (s5 && typeof s5 == "object" || typeof s5 == "function")
        for (let i5 of x2(s5))
          !k2.call(o7, i5) && i5 !== e9 && b2(o7, i5, { get: () => s5[i5], enumerable: !(t4 = w2(s5, i5)) || t4.enumerable });
      return o7;
    };
    var F = (o7) => A2(b2({}, "__esModule", { value: true }), o7);
    var a3 = (o7, s5, e9, t4) => {
      for (var i5 = t4 > 1 ? void 0 : t4 ? w2(s5, e9) : s5, l5 = o7.length - 1, h4; l5 >= 0; l5--)
        (h4 = o7[l5]) && (i5 = (t4 ? h4(s5, e9, i5) : h4(i5)) || i5);
      return t4 && i5 && b2(s5, e9, i5), i5;
    };
    var U = {};
    L2(U, { Config: () => d2, MaveComponent: () => r5 });
    module2.exports = F(U);
    var d2 = class {
      constructor() {
        this._baseUrl = "mave.io";
      }
      static getInstance() {
        return d2._inst || (d2._inst = new d2()), d2._inst;
      }
      get baseUrl() {
        return this._baseUrl;
      }
      set baseUrl(s5) {
        this._baseUrl = s5;
      }
    };
    var c2 = (init_lit(), __toCommonJS(lit_exports));
    var n7 = (init_decorators(), __toCommonJS(decorators_exports));
    var $2 = (init_lit(), __toCommonJS(lit_exports));
    var H2 = $2.css`
  dialog {
    position: relative;
    display: flex;
    float: left;
    align-items: center;
    // transition-property: all;
    // transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    // transition-duration: 150ms;
    background: black;
    border-width: 0;
    // aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
    max-width: 100vw !important;
    max-height: 100vh !important;
    padding: 0;
    margin: 0;
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
    width: 100vw;
    height: 100vh;
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
    var T2 = (init_dist(), __toCommonJS(dist_exports));
    var v2 = (init_lit(), __toCommonJS(lit_exports));
    var p2 = (init_decorators(), __toCommonJS(decorators_exports));
    var m2 = class extends v2.LitElement {
      constructor() {
        super(...arguments);
        this._ghostActive = true;
        this._loaded = true;
      }
      connectedCallback() {
        var e9;
        super.connectedCallback(), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`), setTimeout(() => {
          this._ghostActive = true;
        }, 0), (e9 = this.iframe) == null || e9.addEventListener("load", this.iframeLoaded.bind(this));
      }
      disconnectedCallback() {
        var e9;
        document.documentElement.setAttribute("style", this._globalStyle || ""), (e9 = this.iframe) == null || e9.removeEventListener("load", this.iframeLoaded.bind(this)), super.disconnectedCallback();
      }
      render() {
        return v2.html`
      <div>
        <div class=${this._ghostActive ? "ghost active" : "ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${d2.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded ? "loaded" : "initial"}
          ></iframe>
        </div>
      </div>
    `;
      }
      iframeLoaded() {
        this._loaded = true;
      }
    };
    m2.styles = v2.css`
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
  `, a3([(0, p2.property)({ type: String })], m2.prototype, "embed", 2), a3([(0, p2.query)("#iframe")], m2.prototype, "iframe", 2), a3([(0, p2.state)()], m2.prototype, "_ghostActive", 2), a3([(0, p2.state)()], m2.prototype, "_loaded", 2);
    customElements.get("mave-settings") || customElements.define("mave-settings", m2);
    var r5 = class extends c2.LitElement {
      constructor() {
        super(...arguments);
        this._settingsActive = false;
        this._blurhashShouldBeVisible = true;
        this._overlayActive = false;
        this._hlsLoaded = false;
        this._iframeReady = false;
        this._initialPlayEventTriggered = false;
        this.baseUrl = d2.getInstance().baseUrl;
      }
      connectedCallback() {
        var e9;
        super.connectedCallback(), window.addEventListener("message", this.messageHandler.bind(this)), window.addEventListener("load", this.visibilityHandler.bind(this)), window.addEventListener("scroll", this.visibilityHandler.bind(this)), window.addEventListener("resize", this.visibilityHandler.bind(this)), ((e9 = this.video) == null ? void 0 : e9.canPlayType("application/vnd.apple.mpegurl")) && !this._hlsLoaded && this.scriptHandler();
      }
      disconnectedCallback() {
        window.removeEventListener("message", this.messageHandler.bind(this)), window.removeEventListener("load", this.visibilityHandler.bind(this)), window.removeEventListener("scroll", this.visibilityHandler.bind(this)), window.removeEventListener("resize", this.visibilityHandler.bind(this)), super.disconnectedCallback();
      }
      videoHandler(e9) {
        if (!!this.video)
          switch (e9.type) {
            case "loadeddata":
              this.video.readyState >= 2 && setTimeout(() => {
                this.blurhash && (this._blurhashShouldBeVisible = false);
              }, 500);
              break;
            case "canplay":
              let t4 = () => {
                this._iframeReady || (this.sendMessage("mave:video_canplay"), setTimeout(t4.bind(this), 25));
              };
              t4();
              break;
            case "progress":
              try {
                let i5 = this.video.buffered.length - 1, l5 = Math.round(this.video.buffered.end(i5) / this.video.duration * 100);
                this.sendMessage("mave:video_progress", { buffer: l5 });
              } catch {
              }
              break;
            case "play":
              if (this._iframeReady) {
                this.timeUpdate();
                let i5 = this.autoplay && !this._initialPlayEventTriggered ? 0 : this.video.currentTime;
                this.sendMessage("mave:video_play", { currentTime: i5 }), this._initialPlayEventTriggered = true;
              }
              break;
            case "timeupdate":
              this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime });
              break;
            case "pause":
            case "ended":
              this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this._animationFrame && (cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0), setTimeout(() => {
                this.sendMessage(e9.type == "ended" ? "mave:video_ended" : "mave:video_pause");
              }, 25);
              break;
          }
      }
      messageHandler(e9) {
        var l5;
        let { data: t4 } = e9, { message: i5 } = t4;
        if (!(!this.isConnected || !t4 || t4.hash != this.embed))
          switch (i5) {
            case "mave:player_ready":
              if (this._iframeReady = true, !this._initialPlayEventTriggered && this.video && !this.video.paused) {
                let u2 = this.autoplay ? 0 : this.video.currentTime;
                this.sendMessage("mave:video_play", { currentTime: u2 }), this._initialPlayEventTriggered = true;
              }
              break;
            case "mave:player_event":
              if (!this.video)
                return;
              let h4 = t4.event;
              switch (Object.keys(h4)[0]) {
                case "play":
                  h4.play ? this.video.play() : this.video.pause();
                  break;
                case "muted":
                  this.video.muted = h4.muted;
                  break;
                case "volume":
                  this.video.volume = h4.volume;
                  break;
                case "currentTime":
                  this.video.currentTime = h4.currentTime;
                  break;
              }
              break;
            case "mave:open_popup_overlay":
              this._overlayActive = true, window.scrollTo(0, 0), this.dialog.showModal(), this.dialog.scrollIntoView(false), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; overflow: hidden;`);
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
                let u2 = document.createElement("mave-settings");
                u2.setAttribute("embed", this.embed), document.body.appendChild(u2);
              } else {
                let u2 = document.querySelector("mave-settings");
                u2 && u2.remove();
              }
              break;
            case "mave:close_settings":
              this._settingsActive = false;
              let f2 = document.querySelector("mave-settings");
              f2 && f2.remove();
              break;
            case "mave:update_embed_settings":
              this.aspectRatio = t4.aspect_ratio_enabled ? t4.aspect_ratio : void 0, this.width = t4.aspect_ratio_enabled ? void 0 : t4.width, this.height = t4.aspect_ratio_enabled ? void 0 : t4.height, this.loop = t4.loop, this.autoplay = t4.autoplay_enabled, this.autoplay && ((l5 = this.video) == null ? void 0 : l5.paused) && this.video.play(), this.visibilityHandler();
              break;
            case "mave:request_in_viewport":
              setTimeout(() => {
                this.visibilityHandler();
              }, 20);
              break;
            case "mave:render_video":
              this._hlsLoaded = false, this.src = t4.video_src, this.autoplay = t4.autoplay == "true", t4.blurhash && (this.blurhash = t4.blurhash);
              break;
          }
      }
      generateStyle() {
        if (this._overlayActive)
          return c2.html`<style>
      :host {
        width: 100%; 
        height: 100%;
      }
    `;
        if (this.width && this.height)
          return c2.html`<style>
        :host {
          width: ${this.width};
          height: ${this.height};
        }
      </style>`;
        if (this.aspectRatio && this.aspectRatio != "auto") {
          let [e9, t4] = this.aspectRatio.split(":");
          return c2.html`<style>
          :host {
            aspect-ratio: ${e9} / ${t4};
            width: 100%;
          }
        </style>`;
        } else
          return c2.html`<style>
          :host {
            aspect-ratio: 16 / 9;
            min-height: 360px;
            width: 100%;
          }
        </style>`;
      }
      closeDialog() {
        this._overlayActive = false, this.sendMessage("mave:closing_overlay");
      }
      render() {
        return c2.html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive ? "active_overlay" : ""}
      >
        ${this.renderCanvas()}
        ${this.src ? c2.html`
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
            ` : ""}
        ${this.embed ? c2.html`
              <iframe
                title="embed"
                id="iframe"
                src="${this.generateUrl()}"
                sandbox="allow-scripts allow-forms allow-same-origin"
                allow="autoplay; fullscreen; clipboard-write;"
                frameborder="0"
              >
              </iframe>
            ` : ""}
      </dialog>
    `;
      }
      generateUrl() {
        return this.jwt ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}` : this.reference_id && this.display_name ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}` : this.reference_id ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}` : this.display_name ? `https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}` : `https://${this.baseUrl}/e/${this.embed}`;
      }
      sendMessage(e9, t4 = {}) {
        if (!this.iframe.contentWindow || !this.video)
          return;
        let i5 = E2({ message: e9 }, t4);
        this.iframe.contentWindow.postMessage(i5, "*");
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
        let e9 = document.createElement("canvas"), t4 = (0, T2.decode)(this.blurhash, 320, 180), i5 = e9.getContext("2d"), l5 = i5 == null ? void 0 : i5.createImageData(320, 180);
        return l5 == null || l5.data.set(t4), l5 && (i5 == null || i5.putImageData(l5, 0, 0)), e9;
      }
      timeUpdate() {
        this._animationFrame = requestAnimationFrame(() => {
          !this.video || (this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this.timeUpdate());
        });
      }
      initiateScript() {
        let e9 = document.createElement("script");
        return e9.onload = this.scriptHandler.bind(this), e9.src = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js", e9;
      }
      scriptHandler() {
        if (!(!this.video || !this.src || this._hlsLoaded)) {
          if (this.video.canPlayType("application/vnd.apple.mpegurl"))
            this.video.src = this.src;
          else if (Hls.isSupported()) {
            let e9 = new Hls();
            e9.loadSource(this.src), e9.attachMedia(this.video), e9.subtitleTrack = 0, e9.subtitleDisplay = true;
          }
          this._hlsLoaded = true;
        }
      }
      visibilityHandler() {
        if (!this.iframe || !this.iframe.contentWindow)
          return;
        let { top: e9, bottom: t4 } = this.iframe.getBoundingClientRect(), i5 = window.innerHeight || document.documentElement.clientHeight, l5 = (e9 > 0 || t4 > 0) && e9 < i5;
        this.sendMessage(l5 ? "mave:video_in_viewport" : "mave:video_out_viewport");
      }
    };
    r5.styles = H2, a3([(0, n7.property)({ type: String })], r5.prototype, "embed", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "reference_id", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "display_name", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "jwt", 2), a3([(0, n7.property)({ type: Boolean })], r5.prototype, "muted", 2), a3([(0, n7.property)({ type: Boolean })], r5.prototype, "autoplay", 2), a3([(0, n7.property)({ type: Boolean })], r5.prototype, "loop", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "src", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "blurhash", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "aspectRatio", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "width", 2), a3([(0, n7.property)({ type: String })], r5.prototype, "height", 2), a3([(0, n7.query)("#dialog")], r5.prototype, "dialog", 2), a3([(0, n7.query)("#iframe")], r5.prototype, "iframe", 2), a3([(0, n7.query)("#video")], r5.prototype, "video", 2), a3([(0, n7.query)("#canvas")], r5.prototype, "canvas", 2), a3([(0, n7.query)("#script")], r5.prototype, "script", 2), a3([(0, n7.state)()], r5.prototype, "_settingsActive", 2), a3([(0, n7.state)()], r5.prototype, "_blurhashShouldBeVisible", 2), a3([(0, n7.state)()], r5.prototype, "_overlayActive", 2);
    customElements.get("mave-component") || customElements.define("mave-component", r5);
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Mave: () => Mave
});
module.exports = __toCommonJS(src_exports);
init_cjs_shims();

// src/Mave.tsx
init_cjs_shims();
var import_react = require("react");

// ../config/config.ts
init_cjs_shims();
var Config2 = class {
  constructor() {
    this._baseUrl = "mave.io";
  }
  static getInstance() {
    if (!Config2._inst) {
      Config2._inst = new Config2();
    }
    return Config2._inst;
  }
  get baseUrl() {
    return this._baseUrl;
  }
  set baseUrl(val) {
    this._baseUrl = val;
  }
};

// src/Mave.tsx
var import_mave_component = __toESM(require_dist());
var Mave = (props) => {
  const [autoplay, setAutoplay] = (0, import_react.useState)(void 0);
  const [loop, setLoop] = (0, import_react.useState)(void 0);
  const [settingsAspectRatio, setSettingsAspectRatio] = (0, import_react.useState)(void 0);
  const [settingsFloat, setSettingsFloat] = (0, import_react.useState)(void 0);
  const [videoBlurHash, setVideoBlurHash] = (0, import_react.useState)(void 0);
  const [videoSource, setVideoSource] = (0, import_react.useState)(void 0);
  const [videoAspectRatio, setVideoAspectRatio] = (0, import_react.useState)(void 0);
  const [height, setHeight] = (0, import_react.useState)(void 0);
  const [width, setWidth] = (0, import_react.useState)(void 0);
  (0, import_react.useEffect)(() => {
    const url = `https://${Config2.getInstance().baseUrl}/${props.embed}/json`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAutoplay(json.autoPlay);
        setLoop(json.loop);
        setSettingsAspectRatio(json.settingsAspectRatio);
        setSettingsFloat(json.settingsFloat);
        setVideoBlurHash(json.videoBlurHash);
        setVideoSource(json.videoSource);
        setVideoAspectRatio(json.videoAspectRatio);
        setHeight(json.height);
        setWidth(json.width);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const attributes = {
    embed: props.embed,
    reference_id: props.reference_id,
    display_name: props.display_name,
    jwt: props.jwt,
    float: settingsFloat,
    src: videoSource,
    blurhash: videoBlurHash
  };
  if (loop) {
    attributes.loop = loop;
  }
  if (autoplay) {
    attributes.autoplay = autoplay;
    attributes.muted = autoplay;
  }
  if (width && height) {
    attributes.width = width;
    attributes.height = height;
  }
  if (settingsAspectRatio || videoAspectRatio) {
    attributes.aspectRatio = settingsAspectRatio || videoAspectRatio;
  }
  return /* @__PURE__ */ React.createElement("mave-component", __spreadValues({}, attributes));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Mave
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

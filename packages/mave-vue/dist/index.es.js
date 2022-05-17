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
var b = Object.defineProperty;
var w = Object.getOwnPropertyDescriptor;
var T = Object.getOwnPropertyNames, y = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var _ = (o, i, e) => i in o ? b(o, i, { enumerable: true, configurable: true, writable: true, value: e }) : o[i] = e, $ = (o, i) => {
  for (var e in i || (i = {}))
    k.call(i, e) && _(o, e, i[e]);
  if (y)
    for (var e of y(i))
      S.call(i, e) && _(o, e, i[e]);
  return o;
};
var L = (o, i) => {
  for (var e in i)
    b(o, e, { get: i[e], enumerable: true });
}, A = (o, i, e, t) => {
  if (i && typeof i == "object" || typeof i == "function")
    for (let s of T(i))
      !k.call(o, s) && s !== e && b(o, s, { get: () => i[s], enumerable: !(t = w(i, s)) || t.enumerable });
  return o;
};
var U = (o) => A(b({}, "__esModule", { value: true }), o), a = (o, i, e, t) => {
  for (var s = t > 1 ? void 0 : t ? w(i, e) : i, l = o.length - 1, h; l >= 0; l--)
    (h = o[l]) && (s = (t ? h(i, e, s) : h(s)) || s);
  return t && s && b(i, e, s), s;
};
var z = {};
L(z, { Config: () => d, MaveComponent: () => r });
module.exports = U(z);
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
  set baseUrl(i) {
    this._baseUrl = i;
  }
};
var v = require("lit"), n = require("lit/decorators.js");
var E = require("lit"), x = E.css`
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
`;
var H = require("@fpapado/blurhash");
var u = require("lit"), m = require("lit/decorators.js");
var c = class extends u.LitElement {
  constructor() {
    super(...arguments);
    this._ghostActive = true;
    this._loaded = true;
    this._delayed = false;
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), setTimeout(() => {
      this._delayed = true;
    }, 250), this._globalStyle = document.documentElement.getAttribute("style") || "", document.documentElement.setAttribute("style", `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`), setTimeout(() => {
      this._ghostActive = true;
    }, 0), (e = this.iframe) == null || e.addEventListener("load", this.iframeLoaded.bind(this));
  }
  disconnectedCallback() {
    var e;
    document.documentElement.setAttribute("style", this._globalStyle || ""), (e = this.iframe) == null || e.removeEventListener("load", this.iframeLoaded.bind(this)), super.disconnectedCallback();
  }
  render() {
    return u.html`
      <div>
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
      </div>
    `;
  }
  iframeLoaded() {
    this._loaded = true;
  }
};
c.styles = u.css`
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
  `, a([(0, m.property)({ type: String })], c.prototype, "embed", 2), a([(0, m.query)("#iframe")], c.prototype, "iframe", 2), a([(0, m.state)()], c.prototype, "_ghostActive", 2), a([(0, m.state)()], c.prototype, "_loaded", 2), a([(0, m.state)()], c.prototype, "_delayed", 2);
customElements.get("mave-settings") || customElements.define("mave-settings", c);
var F = crypto.getRandomValues(new Uint8Array(21)).reduce((o, i) => o += (i &= 63) < 36 ? i.toString(36) : i < 62 ? (i - 26).toString(36).toUpperCase() : i < 63 ? "_" : "-", ""), r = class extends v.LitElement {
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
    var e;
    super.connectedCallback(), window.addEventListener("message", this.messageHandler.bind(this)), window.addEventListener("load", this.visibilityHandler.bind(this)), window.addEventListener("scroll", this.visibilityHandler.bind(this)), window.addEventListener("resize", this.visibilityHandler.bind(this)), ((e = this.video) == null ? void 0 : e.canPlayType("application/vnd.apple.mpegurl")) && !this._hlsLoaded && this.scriptHandler();
  }
  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler.bind(this)), window.removeEventListener("load", this.visibilityHandler.bind(this)), window.removeEventListener("scroll", this.visibilityHandler.bind(this)), window.removeEventListener("resize", this.visibilityHandler.bind(this));
    let e = document.querySelector("mave-settings");
    e && e.remove(), super.disconnectedCallback();
  }
  initializeVideo() {
    if (!this.loadeddata && this.video && this.video.readyState >= 1 && (setTimeout(() => {
      this.blurhash && (this._blurhashShouldBeVisible = false);
    }, 750), this.loadeddata = true), !this.canPlay) {
      let e = () => {
        this._iframeReady || (this.sendMessage("mave:video_canplay"), setTimeout(e.bind(this), 25), this.canPlay = true);
      };
      e();
    }
  }
  videoHandler(e) {
    if (!!this.video)
      switch (e.type) {
        case "loadeddata":
        case "canplay":
          this.initializeVideo();
          break;
        case "progress":
          (!this.canPlay || !this.loadeddata) && this.initializeVideo();
          try {
            let t = this.video.buffered.length - 1, s = Math.round(this.video.buffered.end(t) / this.video.duration * 100);
            this.sendMessage("mave:video_progress", { buffer: s });
          } catch {
          }
          break;
        case "play":
          if (this._iframeReady) {
            this.timeUpdate();
            let t = this.autoplay && !this._initialPlayEventTriggered || this.video.currentTime < 1e-4 ? 0 : this.video.currentTime;
            this.sendMessage("mave:video_play", { currentTime: t }), this._initialPlayEventTriggered = true;
          }
          break;
        case "timeupdate":
          this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime });
          break;
        case "pause":
        case "ended":
          this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this._animationFrame && (cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0), setTimeout(() => {
            this.sendMessage(e.type == "ended" ? "mave:video_ended" : "mave:video_pause");
          }, 25);
          break;
      }
  }
  messageHandler(e) {
    var l;
    let { data: t } = e, { message: s } = t;
    if (!(!this.isConnected || !t || t.hash != this.embed))
      switch (s) {
        case "mave:player_ready":
          if (this._iframeReady = true, !this._initialPlayEventTriggered && this.video && !this.video.paused) {
            let p = this.autoplay ? 0 : this.video.currentTime;
            this.sendMessage("mave:video_play", { currentTime: p }), this._initialPlayEventTriggered = true;
          }
          break;
        case "mave:player_event":
          if (!this.video)
            return;
          let h = t.event;
          switch (Object.keys(h)[0]) {
            case "play":
              h.play ? this.video.play() : this.video.pause();
              break;
            case "muted":
              this.video.muted = h.muted;
              break;
            case "volume":
              this.video.volume = h.volume;
              break;
            case "currentTime":
              this.video.currentTime = h.currentTime;
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
            let p = document.createElement("mave-settings");
            p.setAttribute("embed", this.embed), document.body.appendChild(p);
          } else {
            let p = document.querySelector("mave-settings");
            p && p.remove();
          }
          break;
        case "mave:close_settings":
          this._settingsActive = false;
          let f = document.querySelector("mave-settings");
          f && f.remove();
          break;
        case "mave:update_embed_settings":
          this.aspectRatio = t.aspect_ratio_enabled ? t.aspect_ratio : void 0, this.width = t.aspect_ratio_enabled ? void 0 : t.width, this.height = t.aspect_ratio_enabled ? void 0 : t.height, this.loop = t.loop, this.autoplay = t.autoplay_enabled, this.autoplay && ((l = this.video) == null ? void 0 : l.paused) && this.video.play(), this.visibilityHandler();
          break;
        case "mave:request_in_viewport":
          setTimeout(() => {
            this.visibilityHandler();
          }, 20);
          break;
        case "mave:render_video":
          this._hlsLoaded = false, this.src = t.video_src, this.autoplay = t.autoplay, t.blurhash && (this.blurhash = t.blurhash);
          break;
      }
  }
  generateStyle() {
    let e = document.createElement("style");
    if (this._overlayActive && (e.textContent = ":host { overflow: hidden; width: 100%; height: 100%; }"), this.width && this.height)
      e.textContent = `:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;
    else if (this.aspectRatio) {
      let [t, s] = this.aspectRatio.split(":");
      e.textContent = `:host { display: block; overflow: hidden; aspect-ratio: ${t} / ${s}; width: 100%; min-width: 320px; min-height: 180px; }`;
    } else
      e.textContent = ":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";
    return e;
  }
  closeDialog() {
    this._overlayActive = false, this.sendMessage("mave:closing_overlay");
  }
  poster() {
    var e;
    return `${(e = this.src) == null ? void 0 : e.replace("stream", "image")}/thumbnail.jpg?time=0`;
  }
  render() {
    return v.html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive ? "active_overlay" : ""}
      >
        ${this.renderCanvas()}
        ${this.src ? v.html`
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
            ` : ""}
        ${this.embed ? v.html`
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
    return this.jwt ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}` : this.reference_id && this.display_name ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}` : this.reference_id ? `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}` : this.display_name ? `https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}` : `https://${this.baseUrl}/e/${this.embed}?reference_id=${F}`;
  }
  sendMessage(e, t = {}) {
    if (!this.iframe.contentWindow || !this.video)
      return;
    let s = $({ message: e }, t);
    this.iframe.contentWindow.postMessage(s, "*");
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
    let e = document.createElement("canvas"), t = (0, H.decode)(this.blurhash, 320, 180), s = e.getContext("2d"), l = s == null ? void 0 : s.createImageData(320, 180);
    return l == null || l.data.set(t), l && (s == null || s.putImageData(l, 0, 0)), e;
  }
  timeUpdate() {
    this._animationFrame = requestAnimationFrame(() => {
      !this.video || (this.sendMessage("mave:video_timeupdate", { currentTime: this.video.currentTime }), this.timeUpdate());
    });
  }
  initiateScript() {
    let e = document.createElement("script");
    return e.onload = this.scriptHandler.bind(this), e.src = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js", e;
  }
  scriptHandler() {
    if (!(!this.video || !this.src || this._hlsLoaded)) {
      if (this.video.canPlayType("application/vnd.apple.mpegurl"))
        this.video.src = this.src;
      else if (Hls.isSupported()) {
        let e = new Hls();
        e.loadSource(this.src), e.attachMedia(this.video), e.subtitleTrack = 0, e.subtitleDisplay = true;
      }
      this._hlsLoaded = true;
    }
  }
  visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow)
      return;
    let { top: e, bottom: t } = this.iframe.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, l = (e > 0 || t > 0) && e < s;
    this.sendMessage(l ? "mave:video_in_viewport" : "mave:video_out_viewport");
  }
};
r.styles = x, a([(0, n.property)({ type: String })], r.prototype, "embed", 2), a([(0, n.property)({ type: String })], r.prototype, "reference_id", 2), a([(0, n.property)({ type: String })], r.prototype, "display_name", 2), a([(0, n.property)({ type: String })], r.prototype, "jwt", 2), a([(0, n.property)({ type: String })], r.prototype, "classname", 2), a([(0, n.property)({ type: Boolean })], r.prototype, "muted", 2), a([(0, n.property)({ type: Boolean })], r.prototype, "autoplay", 2), a([(0, n.property)({ type: Boolean })], r.prototype, "loop", 2), a([(0, n.property)({ type: String })], r.prototype, "src", 2), a([(0, n.property)({ type: String })], r.prototype, "blurhash", 2), a([(0, n.property)({ type: String, attribute: "aspect-ratio" })], r.prototype, "aspectRatio", 2), a([(0, n.property)({ type: String })], r.prototype, "width", 2), a([(0, n.property)({ type: String })], r.prototype, "height", 2), a([(0, n.query)("#dialog")], r.prototype, "dialog", 2), a([(0, n.query)("#iframe")], r.prototype, "iframe", 2), a([(0, n.query)("#video")], r.prototype, "video", 2), a([(0, n.query)("#canvas")], r.prototype, "canvas", 2), a([(0, n.query)("#script")], r.prototype, "script", 2), a([(0, n.state)()], r.prototype, "_settingsActive", 2), a([(0, n.state)()], r.prototype, "_blurhashShouldBeVisible", 2), a([(0, n.state)()], r.prototype, "_overlayActive", 2);
customElements.get("mave-component") || customElements.define("mave-component", r);
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

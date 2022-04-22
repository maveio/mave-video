var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/MaveComponent.ts
import { html as html2, LitElement as LitElement2 } from "lit";
import { customElement as customElement2, property as property2, query as query2, state as state2 } from "lit/decorators.js";

// src/style.ts
import { css } from "lit";
var style = css`
  :host {
  }

  dialog {
    position: relative;
    display: flex;
    float: left;
    margin-bottom: -2px;
    padding: 0;
    margin: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    transition-property: all;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 150ms;
    background: black;
    border-width: 0;
    aspect-ratio: 16 / 9;
    min-height: 360px;
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
    display: flex;
    background: black;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 20px solid black;
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

// src/MaveComponent.ts
import { decode } from "@fpapado/blurhash";

// src/SettingsComponent.ts
import { html, css as css2, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
var SettingsComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._ghostActive = true;
    this._loaded = true;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this._globalStyle = document.documentElement.getAttribute("style") || "";
    document.documentElement.setAttribute("style", `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`);
    setTimeout(() => {
      this._ghostActive = true;
    }, 0);
    (_a = this.iframe) == null ? void 0 : _a.addEventListener("load", this.iframeLoaded.bind(this));
  }
  disconnectedCallback() {
    var _a;
    document.documentElement.setAttribute("style", this._globalStyle || "");
    (_a = this.iframe) == null ? void 0 : _a.removeEventListener("load", this.iframeLoaded.bind(this));
    super.disconnectedCallback();
  }
  render() {
    return html`
      <div>
        <div class=${this._ghostActive ? "ghost active" : "ghost"}></div>
        <div class="settings">
          <iframe
            src="https://mave.io/e/${this.embed}/settings"
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
SettingsComponent.styles = css2`
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
  `;
__decorateClass([
  property({ type: String })
], SettingsComponent.prototype, "embed", 2);
__decorateClass([
  query("#iframe")
], SettingsComponent.prototype, "iframe", 2);
__decorateClass([
  state()
], SettingsComponent.prototype, "_ghostActive", 2);
__decorateClass([
  state()
], SettingsComponent.prototype, "_loaded", 2);
SettingsComponent = __decorateClass([
  customElement("mave-settings")
], SettingsComponent);

// src/MaveComponent.ts
var MaveComponent = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this._settingsActive = false;
    this._blurhashShouldBeVisible = true;
    this._overlayActive = false;
    this._hlsLoaded = false;
    this._iframeReady = false;
    this._initialPlayEventTriggered = false;
    this.baseUrl = "mave.io";
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    window.addEventListener("message", this.messageHandler.bind(this));
    window.addEventListener("load", this.visibilityHandler.bind(this));
    window.addEventListener("scroll", this.visibilityHandler.bind(this));
    window.addEventListener("resize", this.visibilityHandler.bind(this));
    if (((_a = this.video) == null ? void 0 : _a.canPlayType("application/vnd.apple.mpegurl")) && !this._hlsLoaded) {
      this.scriptHandler();
    }
  }
  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler.bind(this));
    window.removeEventListener("load", this.visibilityHandler.bind(this));
    window.removeEventListener("scroll", this.visibilityHandler.bind(this));
    window.removeEventListener("resize", this.visibilityHandler.bind(this));
    super.disconnectedCallback();
  }
  videoHandler(event) {
    if (!this.video)
      return;
    switch (event.type) {
      case "loadeddata":
        if (this.video.readyState >= 2) {
          setTimeout(() => {
            if (this.blurhash)
              this._blurhashShouldBeVisible = false;
          }, 500);
        }
        break;
      case "canplay":
        const checkPlayerState = () => {
          if (this._iframeReady)
            return;
          this.sendMessage("mave:video_canplay");
          setTimeout(checkPlayerState.bind(this), 25);
        };
        checkPlayerState();
        break;
      case "progress":
        try {
          const lastBuffer = this.video.buffered.length - 1;
          const buffer = Math.round(this.video.buffered.end(lastBuffer) / this.video.duration * 100);
          this.sendMessage("mave:video_progress", { buffer });
        } catch (e) {
        }
        break;
      case "play":
        if (this._iframeReady) {
          this.timeUpdate();
          const time = this.autoplay && !this._initialPlayEventTriggered ? 0 : this.video.currentTime;
          this.sendMessage("mave:video_play", { currentTime: time });
          this._initialPlayEventTriggered = true;
        }
        break;
      case "timeupdate":
        this.sendMessage("mave:video_timeupdate", {
          currentTime: this.video.currentTime
        });
        break;
      case "pause":
      case "ended":
        this.sendMessage("mave:video_timeupdate", {
          currentTime: this.video.currentTime
        });
        if (this._animationFrame) {
          cancelAnimationFrame(this._animationFrame);
          this._animationFrame = void 0;
        }
        setTimeout(() => {
          this.sendMessage(event.type == "ended" ? "mave:video_ended" : "mave:video_pause");
        }, 25);
        break;
    }
  }
  messageHandler(event) {
    const { data } = event;
    const { message } = data;
    if (!data || data.hash != this.embed)
      return;
    switch (message) {
      case "mave:player_ready":
        this._iframeReady = true;
        if (!this._initialPlayEventTriggered && this.video && !this.video.paused) {
          const time = this.autoplay ? 0 : this.video.currentTime;
          this.sendMessage("mave:video_play", { currentTime: time });
          this._initialPlayEventTriggered = true;
        }
        break;
      case "mave:player_event":
        if (!this.video)
          return;
        const playerEvent = data.event;
        const type = Object.keys(playerEvent)[0];
        switch (type) {
          case "play":
            playerEvent.play ? this.video.play() : this.video.pause();
            break;
          case "muted":
            this.video.muted = playerEvent.muted;
            break;
          case "volume":
            this.video.volume = playerEvent.volume;
            break;
          case "currentTime":
            this.video.currentTime = playerEvent.currentTime;
            break;
        }
        break;
      case "mave:open_popup_overlay":
        this._overlayActive = true;
        window.scrollTo(0, 0);
        this.dialog.showModal();
        this.dialog.scrollIntoView(false);
        break;
      case "mave:close_popup_overlay":
        this.dialog.close();
        this._overlayActive = false;
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
        this._settingsActive = !this._settingsActive;
        break;
      case "mave:close_settings":
        this._settingsActive = false;
        break;
      case "mave:request_in_viewport":
        setTimeout(() => {
          this.visibilityHandler();
        }, 20);
        break;
      case "mave:render_video":
        this._hlsLoaded = false;
        this.src = data.video_src;
        this.autoplay = data.autoplay;
        if (data.blurhash)
          this.blurhash = data.blurhash;
        break;
    }
  }
  generateStyle() {
    if (this.width && this.height) {
      return `width: ${this.width}; height: ${this.height};`;
    } else {
      if (this.aspectRatio && this.aspectRatio != "auto") {
        const [w, h] = this.aspectRatio.split(":");
        return `aspect-ratio: ${w} / ${h}; width: 100%`;
      } else {
        return `aspect-ratio: 16 / 9; min-height: 360px; width: 100%;`;
      }
    }
  }
  render() {
    return html2`
      ${this._settingsActive && html2` <mave-settings embed=${this.embed} /> ` || ""}

      <dialog id="dialog" style="${this.generateStyle()}">
        ${this.renderCanvas()}
        ${this.src && html2`
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
          ` || ""}
        ${this.embed && html2`
            <iframe
              title="embed"
              id="iframe"
              src="${this.generateUrl()}"
              sandbox="allow-scripts allow-forms allow-same-origin"
              allow="autoplay; fullscreen; clipboard-write;"
              frameborder="0"
            >
            </iframe>
          ` || ""}
      </dialog>
    `;
  }
  generateUrl() {
    if (this.jwt) {
      return `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`;
    } else {
      if (this.reference_id && this.display_name) {
        return `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`;
      } else if (this.reference_id) {
        return `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`;
      } else if (this.display_name) {
        return `https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`;
      } else {
        return `https://${this.baseUrl}/e/${this.embed}`;
      }
    }
  }
  sendMessage(event, options = {}) {
    if (!this.iframe.contentWindow)
      return;
    const payload = __spreadValues({ message: event }, options);
    this.iframe.contentWindow.postMessage(payload, "*");
  }
  openFullscreen() {
    if (!document.fullscreenElement) {
      this.requestFullscreen();
      this.sendMessage("mave:video_fullscreen", { fullscreen: false });
    }
  }
  closeFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      this.sendMessage("mave:video_fullscreen", { fullscreen: true });
    }
  }
  renderCanvas() {
    if (!this.blurhash || !this._blurhashShouldBeVisible)
      return;
    const canvas = document.createElement("canvas");
    const pixels = decode(this.blurhash, 320, 180);
    const ctx = canvas.getContext("2d");
    const imageData = ctx == null ? void 0 : ctx.createImageData(320, 180);
    imageData == null ? void 0 : imageData.data.set(pixels);
    if (imageData)
      ctx == null ? void 0 : ctx.putImageData(imageData, 0, 0);
    return canvas;
  }
  timeUpdate() {
    this._animationFrame = requestAnimationFrame(() => {
      if (!this.video)
        return;
      this.sendMessage("mave:video_timeupdate", {
        currentTime: this.video.currentTime
      });
      this.timeUpdate();
    });
  }
  initiateScript() {
    let script = document.createElement("script");
    script.onload = this.scriptHandler.bind(this);
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js";
    return script;
  }
  scriptHandler() {
    if (!this.video || !this.src || this._hlsLoaded)
      return;
    if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
      this.video.src = this.src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.src);
      hls.attachMedia(this.video);
      hls.subtitleTrack = 0;
      hls.subtitleDisplay = true;
    }
    this._hlsLoaded = true;
  }
  visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow)
      return;
    const { top, bottom } = this.iframe.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    const visible = (top > 0 || bottom > 0) && top < vHeight;
    this.sendMessage(visible ? "mave:video_in_viewport" : "mave:video_out_viewport");
  }
};
MaveComponent.styles = style;
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "embed", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "reference_id", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "display_name", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "jwt", 2);
__decorateClass([
  property2({ type: Boolean })
], MaveComponent.prototype, "muted", 2);
__decorateClass([
  property2({ type: Boolean })
], MaveComponent.prototype, "autoplay", 2);
__decorateClass([
  property2({ type: Boolean })
], MaveComponent.prototype, "loop", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "src", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "blurhash", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "aspectRatio", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "width", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "height", 2);
__decorateClass([
  query2("#dialog")
], MaveComponent.prototype, "dialog", 2);
__decorateClass([
  query2("#iframe")
], MaveComponent.prototype, "iframe", 2);
__decorateClass([
  query2("#video")
], MaveComponent.prototype, "video", 2);
__decorateClass([
  query2("#canvas")
], MaveComponent.prototype, "canvas", 2);
__decorateClass([
  query2("#script")
], MaveComponent.prototype, "script", 2);
__decorateClass([
  state2()
], MaveComponent.prototype, "_settingsActive", 2);
__decorateClass([
  state2()
], MaveComponent.prototype, "_blurhashShouldBeVisible", 2);
MaveComponent = __decorateClass([
  customElement2("mave-component")
], MaveComponent);
export {
  MaveComponent
};

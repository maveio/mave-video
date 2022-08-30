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

// ../config/config.ts
var Config = class {
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
};

// src/MaveComponent.ts
import { html as html2, LitElement as LitElement2, nothing } from "lit";
import { property as property2, query as query2, state as state2 } from "lit/decorators.js";

// src/style.ts
import { css } from "lit";
var style = css`
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
`;

// src/SettingsComponent.ts
import { html, css as css2, LitElement } from "lit";
import { property, query, state } from "lit/decorators.js";
var SettingsComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this._ghostActive = true;
    this._loaded = true;
    this._delayed = false;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    setTimeout(() => {
      this._delayed = true;
    }, 250);
    this._globalStyle = document.documentElement.getAttribute("style") || "";
    document.documentElement.setAttribute("style", `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`);
    window.addEventListener("resize", this.appHeight);
    window.addEventListener("focus", this.appHeight);
    this.appHeight();
    setTimeout(() => {
      this._ghostActive = true;
      this.dialog.showModal();
    }, 0);
    (_a = this.iframe) == null ? void 0 : _a.addEventListener("load", this.iframeLoaded.bind(this));
  }
  appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  disconnectedCallback() {
    var _a;
    document.documentElement.setAttribute("style", this._globalStyle || "");
    (_a = this.iframe) == null ? void 0 : _a.removeEventListener("load", this.iframeLoaded.bind(this));
    this.dialog.close();
    window.removeEventListener("resize", this.appHeight);
    window.removeEventListener("focus", this.appHeight);
    super.disconnectedCallback();
  }
  dialogHandler(event) {
    if (event.type == "close") {
      window.postMessage({ message: "mave:close_settings", hash: this.embed }, "*");
    }
    if (event.target == this.dialog) {
      this.dialog.close();
    }
  }
  render() {
    return html`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
        <div class=${this._ghostActive ? "ghost active" : "ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${Config.getInstance().baseUrl}/e/${this.embed}/settings"
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
SettingsComponent.styles = css2`
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
  `;
__decorateClass([
  property({ type: String })
], SettingsComponent.prototype, "embed", 2);
__decorateClass([
  query("#dialog")
], SettingsComponent.prototype, "dialog", 2);
__decorateClass([
  query("#iframe")
], SettingsComponent.prototype, "iframe", 2);
__decorateClass([
  state()
], SettingsComponent.prototype, "_ghostActive", 2);
__decorateClass([
  state()
], SettingsComponent.prototype, "_loaded", 2);
__decorateClass([
  state()
], SettingsComponent.prototype, "_delayed", 2);
if (!customElements.get("mave-settings")) {
  customElements.define("mave-settings", SettingsComponent);
}

// src/MaveComponent.ts
var nanoid = crypto.getRandomValues(new Uint8Array(21)).reduce((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e < 63 ? "_" : "-", "");
var MaveComponent = class extends LitElement2 {
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
    this.baseUrl = Config.getInstance().baseUrl;
    this.canPlay = false;
    this.loadeddata = false;
    this.debouncedAppHeight = this.debounce(this.appHeight.bind(this), 550);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    window.addEventListener("message", this.messageHandler.bind(this));
    window.addEventListener("load", this.visibilityHandler.bind(this));
    window.addEventListener("scroll", this.visibilityHandler.bind(this));
    window.addEventListener("resize", this.visibilityHandler.bind(this));
    for (const e of ["fullscreenchange", "webkitfullscreenchange"]) {
      this.addEventListener(e, this.fullscreenChangeHandler.bind(this));
    }
    if (((_a = this.video) == null ? void 0 : _a.canPlayType("application/vnd.apple.mpegurl")) && !this._hlsLoaded) {
      this.scriptHandler();
    }
  }
  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler.bind(this));
    window.removeEventListener("load", this.visibilityHandler.bind(this));
    window.removeEventListener("scroll", this.visibilityHandler.bind(this));
    window.removeEventListener("resize", this.visibilityHandler.bind(this));
    for (const e of ["fullscreenchange", "webkitfullscreenchange"]) {
      this.removeEventListener(e, this.fullscreenChangeHandler.bind(this));
    }
    const settings = document.querySelector("mave-settings");
    if (settings)
      settings.remove();
    super.disconnectedCallback();
  }
  initializeVideo() {
    if (!this.loadeddata && this.video && this.video.readyState >= 2) {
      setTimeout(() => {
        if (this.blurhash)
          this._blurhashShouldBeVisible = false;
      }, 1250);
      this.loadeddata = true;
    }
    if (!this.canPlay) {
      const checkPlayerState = () => {
        var _a;
        if (this._iframeReady)
          return;
        this.sendMessage("mave:video_canplay", { duration: (_a = this.video) == null ? void 0 : _a.duration });
        setTimeout(checkPlayerState.bind(this), 25);
        this.canPlay = true;
      };
      checkPlayerState();
    }
  }
  videoHandler(event) {
    if (!this.video)
      return;
    switch (event.type) {
      case "loadeddata":
      case "canplay":
        this.initializeVideo();
        break;
      case "progress":
        if (!this.canPlay || !this.loadeddata)
          this.initializeVideo();
        try {
          const lastBuffer = this.video.buffered.length - 1;
          const buffer = Math.round(this.video.buffered.end(lastBuffer) / this.video.duration * 100);
          this.sendMessage("mave:video_progress", { buffer });
        } catch (e) {
        }
        break;
      case "play":
        if (this._posterShouldBeVisible) {
          if (document.webkitExitFullscreen) {
            setTimeout(() => {
              this._posterShouldBeVisible = false;
            }, 250);
          } else {
            this._posterShouldBeVisible = false;
          }
        }
        if (this._iframeReady) {
          this.timeUpdate();
          const time = this.autoplay && !this._initialPlayEventTriggered || this.video.currentTime < 1e-4 ? 0 : this.video.currentTime;
          this.sendMessage("mave:video_play", {
            currentTime: time,
            bitrate: this._bitrate
          });
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
    var _a;
    const { data } = event;
    const { message } = data;
    if (!this.isConnected || !data || data.hash != this.embed)
      return;
    switch (message) {
      case "mave:player_ready":
        this._iframeReady = true;
        if (!this._initialPlayEventTriggered && this.video && !this.video.paused) {
          const time = this.autoplay ? 0 : this.video.currentTime;
          this.sendMessage("mave:video_play", {
            currentTime: time,
            bitrate: this._bitrate
          });
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
            this.sendMessage("mave:video_muted", { muted: this.video.muted });
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
        this.dialog.showModal();
        this._uploadActive = true;
        break;
      case "mave:close_dialog":
        this.dialog.close();
        this._uploadActive = false;
        break;
      case "mave:toggle_fullscreen":
        this.isFullscreen() || this._overlayActive ? this.closeFullscreen() : this.openFullscreen();
        break;
      case "mave:open_fullscreen":
        if (!this._overlayActive)
          this.openFullscreen();
        break;
      case "mave:close_fullscreen":
        this.closeFullscreen();
        break;
      case "mave:open_settings":
        this._settingsActive = !this._settingsActive;
        if (this._settingsActive) {
          const settings2 = document.createElement(`mave-settings`);
          settings2.setAttribute("embed", this.embed);
          document.body.appendChild(settings2);
        } else {
          const settings2 = document.querySelector("mave-settings");
          if (settings2)
            settings2.remove();
        }
        break;
      case "mave:close_settings":
        this._settingsActive = false;
        const settings = document.querySelector("mave-settings");
        if (settings)
          settings.remove();
        break;
      case "mave:update_embed_settings":
        this.aspectRatio = data.aspect_ratio_enabled ? data.aspect_ratio : void 0;
        this.width = data.aspect_ratio_enabled ? void 0 : data.width;
        this.height = data.aspect_ratio_enabled ? void 0 : data.height;
        this.loop = data.loop;
        this.autoplay = data.autoplay_enabled;
        if (this.autoplay && ((_a = this.video) == null ? void 0 : _a.paused) && this.video.currentTime < this.video.duration)
          this.video.play();
        this.visibilityHandler();
        break;
      case "mave:request_in_viewport":
        setTimeout(() => {
          this.visibilityHandler();
        }, 20);
        break;
      case "mave:render_video":
        this._hlsLoaded = false;
        this._blurhashShouldBeVisible = false;
        this.loadeddata = false;
        this.canPlay = false;
        if (this.src != data.video_src)
          this.src = data.video_src;
        if (this.autoplay != data.autoplay)
          this.autoplay = data.autoplay;
        if (this.blurhash != data.blurhash)
          this.blurhash = data.blurhash;
        if (this.posterImage != data.poster_image)
          this.posterImage = data.poster_image;
        if (this.posterVideoSource != data.poster_video_source)
          this.posterVideoSource = data.poster_video_source;
        break;
    }
  }
  fullscreenChangeHandler() {
    this._isFullscreen = !this._isFullscreen;
    this.sendMessage("mave:video_fullscreen", {
      fullscreen: this.isFullscreen()
    });
  }
  generateStyle() {
    const css3 = document.createElement("style");
    if (this._overlayActive || this._isFullscreen) {
      css3.textContent = ":host { overflow: hidden; width: 100%; height: 100%; }";
    }
    if (this.width && this.height) {
      css3.textContent = `:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;
    } else {
      if (this.aspectRatio) {
        const [w, h] = this.aspectRatio.split(":");
        css3.textContent = `:host { display: block; overflow: hidden; aspect-ratio: ${w} / ${h}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${w} / ${h}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`;
      } else {
        css3.textContent = ":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";
      }
    }
    return css3;
  }
  closeDialog() {
    if (this.isFullscreen()) {
      this.closeFullscreen();
    } else {
      this._overlayActive = false;
      this._uploadActive = false;
      this.sendMessage("mave:close_overlay");
    }
  }
  clickDialog(e) {
    if (this._uploadActive && e.target == this.dialog) {
      this.closeDialog();
      this.sendMessage("mave:cancel_upload");
    }
  }
  poster() {
    var _a, _b;
    if (this.posterImage && !this.autoplay) {
      return this.posterImage;
    } else {
      if ((_a = this.src) == null ? void 0 : _a.includes("stream")) {
        return `${(_b = this.src) == null ? void 0 : _b.replace("stream", "image")}/thumbnail.jpg?time=0`;
      } else {
        return nothing;
      }
    }
  }
  videoPoster() {
    return navigator.userAgent.toLowerCase().includes("chrome") ? this.poster() : nothing;
  }
  videoStyle() {
    return !navigator.userAgent.toLowerCase().includes("chrome") && this._posterShouldBeVisible ? "opacity: 0;" : nothing;
  }
  render() {
    return html2`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive || this._isFullscreen ? "active_overlay" : this._uploadActive ? "active_upload" : ""}
      >
        ${this.renderCanvas()}
        ${this.src ? html2`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible ? html2` <img class="poster" .src=${this.poster()} /> ` : ""}

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
            ` : ""}
        ${this.embed ? html2`
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
  firstUpdated(changedProperties) {
    this.appHeight();
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
        return `https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`;
      } else {
        return `https://${this.baseUrl}/e/${this.embed}?reference_id=${nanoid}`;
      }
    }
  }
  sendMessage(event, options = {}) {
    if (!this.iframe.contentWindow || !this.video)
      return;
    const payload = __spreadValues({ message: event }, options);
    this.iframe.contentWindow.postMessage(payload, "*");
  }
  openFullscreen() {
    if (!this.isFullscreen()) {
      if (this.requestFullscreen) {
        this.requestFullscreen();
      } else if (this.webkitRequestFullscreen) {
        this.webkitRequestFullscreen();
      } else {
        this.sendMessage("mave:open_overlay", {});
        this.openOverlay();
      }
      if (this.video && !this.video.paused) {
        this.video.muted = false;
        this.sendMessage("mave:video_muted", { muted: this.video.muted });
      }
    }
  }
  closeFullscreen() {
    if (this.isFullscreen() || this._overlayActive) {
      if (document.exitFullscreen && !this._overlayActive) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen && !this._overlayActive) {
        document.webkitExitFullscreen();
      } else {
        this.sendMessage("mave:close_overlay", {});
        this.closeOverlay();
        this.closeDialog();
      }
    }
  }
  renderCanvas() {
    return;
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
    if (this.src && !this.src.includes(".m3u8"))
      return;
    let script = document.createElement("script");
    script.onload = this.scriptHandler.bind(this);
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js";
    return script;
  }
  scriptHandler() {
    if (!this.video || !this.src || this._hlsLoaded)
      return;
    if (this.video.canPlayType("application/vnd.apple.mpegurl") || !this.src.includes(".m3u8")) {
      this.video.src = this.src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.src);
      hls.attachMedia(this.video);
      let levels = [];
      hls.on(Hls.Events.MANIFEST_LOADED, (_, data) => {
        levels = data.levels.reverse();
      });
      hls.on(Hls.Events.LEVEL_LOADED, (_, data) => {
        if (this._bitrate != levels[data.level].bitrate) {
          this._bitrate = levels[data.level].bitrate;
          this.sendMessage("mave:bitrate", { bitrate: this._bitrate });
        }
      });
      hls.subtitleTrack = 0;
      hls.subtitleDisplay = true;
    }
    this._hlsLoaded = true;
  }
  appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--mave_embed_dialog_height", `${window.innerHeight}px`);
  }
  visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow)
      return;
    const { top, bottom } = this.iframe.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    const visible = (top > 0 || bottom > 0) && top < vHeight;
    this.sendMessage(visible ? "mave:video_in_viewport" : "mave:video_out_viewport");
    this.debouncedAppHeight();
  }
  isFullscreen() {
    return !!document.fullscreenElement || !!document.webkitFullscreenElement || "ontouchend" in document && this._isFullscreen;
  }
  openOverlay() {
    if (this.isFullscreen())
      return;
    this._overlayActive = true;
    if (this._blurhashShouldBeVisible)
      this._blurhashShouldBeVisible = false;
    this.dialog.showModal();
    this._globalStyle = document.documentElement.getAttribute("style") || "";
    document.documentElement.setAttribute("style", `${this._globalStyle}; overflow: hidden;`);
  }
  closeOverlay() {
    this.dialog.close();
    this._overlayActive = false;
    document.documentElement.setAttribute("style", this._globalStyle || "");
  }
  debounce(func, timeout) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
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
  property2({ type: String })
], MaveComponent.prototype, "classname", 2);
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
  property2({ type: String, attribute: "aspect-ratio" })
], MaveComponent.prototype, "aspectRatio", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "width", 2);
__decorateClass([
  property2({ type: String })
], MaveComponent.prototype, "height", 2);
__decorateClass([
  property2({ type: String, attribute: "poster-image" })
], MaveComponent.prototype, "posterImage", 2);
__decorateClass([
  property2({ type: String, attribute: "poster-video-source" })
], MaveComponent.prototype, "posterVideoSource", 2);
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
__decorateClass([
  state2()
], MaveComponent.prototype, "_overlayActive", 2);
__decorateClass([
  state2()
], MaveComponent.prototype, "_isFullscreen", 2);
__decorateClass([
  state2()
], MaveComponent.prototype, "_uploadActive", 2);
__decorateClass([
  state2()
], MaveComponent.prototype, "_posterShouldBeVisible", 2);
if (!customElements.get("mave-component")) {
  customElements.define("mave-component", MaveComponent);
}
export {
  Config,
  MaveComponent
};

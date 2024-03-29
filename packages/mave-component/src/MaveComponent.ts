import { html, LitElement, nothing } from "lit";
import { ref } from "lit/directives/ref.js";

import { property, query, state } from "lit/decorators.js";
import { Config } from "../../config/config";
import { style } from "./style";
import { decode } from "@fpapado/blurhash";
import "./SettingsComponent";

// (c) nanoid.js
let nanoid = crypto
  .getRandomValues(new Uint8Array(21))
  .reduce(
    (t, e) =>
      (t +=
        (e &= 63) < 36
          ? e.toString(36)
          : e < 62
          ? (e - 26).toString(36).toUpperCase()
          : e < 63
          ? "_"
          : "-"),
    ""
  );

interface IEvent extends Event {
  data: {
    message: string;
    hash: string;
    event?: any;
    video_src?: string;
    autoplay_enabled?: boolean;
    autoplay?: boolean;
    blurhash?: string;
    aspect_ratio_enabled?: boolean;
    aspect_ratio?: string;
    width?: string;
    height?: string;
    loop?: boolean;
    poster_image?: string;
    poster_video_source?: string;
    file_type?: string;
  };
}

const videoEvents = [
  "abort",
  "canplay",
  "canplaythrough",
  "durationchange",
  "emptied",
  "encrypted",
  "ended",
  "error",
  "loadeddata",
  "loadedmetadata",
  "loadstart",
  "pause",
  "play",
  "playing",
  "progress",
  "ratechange",
  "seeked",
  "seeking",
  "stalled",
  "suspend",
  "timeupdate",
  "volumechange",
  "waiting",
  "waitingforkey",
  "resize",
  "enterpictureinpicture",
  "leavepictureinpicture",
  "castchange",
  "entercast",
  "leavecast",
];

const maveEvents = [
  "mave:video_canplay",
  "mave:video_progress",
  "mave:video_play",
  "mave:video_pause",
  "mave:video_ended",
  "mave:video_timeupdate",
  "mave:vide_muted",
  "mave:vide_muted",
  "mave:video_fullscreen",
  "mave:open_overlay",
  "mave:close_overlay",
  "mave:bitrate",
];

export class MaveComponent extends LitElement {
  static styles = style;

  @property({ type: String }) embed!: string;

  @property({ type: String }) reference_id?: string;

  @property({ type: String }) display_name?: string;

  @property({ type: String }) jwt?: string;

  @property({ type: String }) classname?: string;

  // Internal properties

  @property({ type: Boolean }) muted?: boolean;

  @property({ type: Boolean }) autoplay?: boolean;

  @property({ type: Boolean }) loop?: boolean;

  @property({ type: String }) src?: string;

  @property({ type: String }) blurhash?: string;

  @property({ type: String, attribute: "aspect-ratio" }) aspectRatio?: string;

  @property({ type: String }) width?: string;

  @property({ type: String }) height?: string;

  @property({ type: String, attribute: "poster-image" }) posterImage?: string;

  @property({ type: String, attribute: "poster-video-source" })
  posterVideoSource?: string;

  @property({ type: String, attribute: "file-type" }) fileType?: string;

  @query("#dialog") dialog!: HTMLDialogElement;

  @query("#iframe") iframe!: HTMLIFrameElement;

  @query("#video") video?: HTMLVideoElement;

  @query("#canvas") canvas?: HTMLCanvasElement;

  @query("#script") script?: HTMLScriptElement;

  @query("#end") endElement?: HTMLElement;

  @state() private _settingsActive: boolean = false;

  @state() private _blurhashShouldBeVisible: boolean = true;

  @state() private _overlayActive: boolean = false;

  @state() private _isFullscreen: boolean = false;

  @state() private _uploadActive: boolean = false;

  @state() private _posterShouldBeVisible: boolean = true;

  private _hlsLoaded: boolean = false;

  private _iframeReady: boolean = false;

  private _initialPlayEventTriggered: boolean = false;

  private _animationFrame?: number;

  private _bitrate?: number;

  private baseUrl: string = Config.getInstance().baseUrl;

  private _globalStyle?: string;

  private canPlay: boolean = false;

  private loadeddata: boolean = false;

  private debouncedAppHeight: Function = this.debounce(
    this.appHeight.bind(this),
    550
  );

  connectedCallback() {
    super.connectedCallback();

    if (!this.src && this.embed) {
      const url = `https://${Config.getInstance().baseUrl}/${this.embed}/json`;

      const fetchData = async () => {
        try {
          // @ts-ignore
          const response = await fetch(url);
          const data = await response.json();

          this.autoplay = data.autoPlay;
          this.loop = data.loop;
          this.aspectRatio = data.settingsAspectRatio;
          this.blurhash = data.videoBlurHash;
          this.src = data.videoSource;
          this.height = data.height;
          this.width = data.width;
          this.posterImage = data.posterImage;
          this.posterVideoSource = data.posterVideoSource;
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }

    window.addEventListener("message", this.messageHandler.bind(this));
    window.addEventListener("load", this.visibilityHandler.bind(this));
    window.addEventListener("scroll", this.visibilityHandler.bind(this));
    window.addEventListener("resize", this.visibilityHandler.bind(this));

    for (const e of ["fullscreenchange", "webkitfullscreenchange"]) {
      this.addEventListener(e, this.fullscreenChangeHandler.bind(this));
    }

    if (!this._hlsLoaded) {
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

    // remove settings when it's active
    const settings = document.querySelector("mave-settings");
    if (settings) settings.remove();

    super.disconnectedCallback();
  }

  listEvents() {
    return [...videoEvents, ...maveEvents];
  }

  play() {
    if (this.video && this.video?.currentTime >= this.video?.duration)
      this.video.currentTime = 0;
    this.video?.play();
  }

  pause() {
    this.video?.pause();
  }

  setVolume(volume: number) {
    if (this.video) {
      if (volume > 0) this.video.muted = false;
      this.video.volume = volume;
      this.sendMessage("mave:volume_change", { volume });
    }
  }

  setMuted(muted: boolean) {
    if (this.video) {
      this.video.muted = muted;
      this.sendMessage("mave:video_muted", { muted: this.video.muted });
    }
  }

  setCurrentTime(time: number) {
    if (this.video) this.video.currentTime = time;
  }

  getCurrentTime() {
    return this.video?.currentTime;
  }

  toggleEndScreen() {
    if (this.endElement) {
      if (this.endElement.style.display === "block") {
        this.endElement.style.display = "none";
      } else {
        this.endElement.style.display = "block";
      }
    }
  }

  initializeVideo() {
    if (!this.loadeddata && this.video && this.video.readyState >= 2) {
      setTimeout(() => {
        if (this.blurhash) this._blurhashShouldBeVisible = false;
      }, 1250);
      this.loadeddata = true;
    }

    if (!this.canPlay) {
      const checkPlayerState = () => {
        if (this._iframeReady) return;

        this.sendMessage("mave:video_canplay", {
          duration: this.video?.duration,
        });
        setTimeout(checkPlayerState.bind(this), 25);
        this.canPlay = true;
      };

      checkPlayerState();
    }
  }

  videoHandler(event: Event) {
    if (!this.video) return;

    switch (event.type) {
      case "loadeddata":
      case "canplay":
        this.initializeVideo();
        break;
      case "progress":
        if (!this.canPlay || !this.loadeddata) this.initializeVideo();
        try {
          const lastBuffer = this.video.buffered.length - 1;
          const buffer = Math.round(
            (this.video.buffered.end(lastBuffer) / this.video.duration) * 100
          );

          this.sendMessage("mave:video_progress", { buffer });
        } catch (e) {}
        break;
      case "play":
        if (this._posterShouldBeVisible) {
          // workaround for Safari (poster image glitch)

          // @ts-ignore
          if (document.webkitExitFullscreen) {
            setTimeout(() => {
              this._posterShouldBeVisible = false;
            }, 450);
          } else {
            this._posterShouldBeVisible = false;
          }
        }

        if (this._iframeReady) {
          this.timeUpdate();

          const time =
            (this.autoplay && !this._initialPlayEventTriggered) ||
            this.video.currentTime < 0.0001
              ? 0
              : this.video.currentTime;

          this.sendMessage("mave:video_play", {
            currentTime: time,
            bitrate: this._bitrate,
            duration: this.video.duration,
          });

          this._initialPlayEventTriggered = true;
        }
        break;
      case "timeupdate":
        this.sendMessage("mave:video_timeupdate", {
          currentTime: this.video.currentTime,
        });
        break;
      case "volumechange":
        break;
      case "pause":
      case "ended":
        this.sendMessage("mave:video_timeupdate", {
          currentTime: this.video.currentTime,
        });

        if (this._animationFrame) {
          cancelAnimationFrame(this._animationFrame);
          this._animationFrame = undefined;
        }

        // small delay to finish timeupdate
        setTimeout(() => {
          this.sendMessage(
            event.type == "ended" ? "mave:video_ended" : "mave:video_pause"
          );
        }, 25);

        if (
          event.type == "ended" &&
          !this.loop &&
          this.endElement &&
          this.querySelector('[slot="end-screen"]')
        ) {
          this.endElement.style.display = "block";
        }

        break;
    }
  }

  messageHandler(event: IEvent) {
    const { data } = event;
    const { message } = data;

    if (!this.isConnected || !data || data.hash != this.embed) return;

    switch (message) {
      case "mave:player_ready":
        this._iframeReady = true;
        this.triggerEvent("ready", { videoElement: this.video });

        if (
          !this._initialPlayEventTriggered &&
          this.video &&
          !this.video.paused
        ) {
          const time = this.autoplay ? 0 : this.video.currentTime;

          this.sendMessage("mave:video_play", {
            currentTime: time,
            bitrate: this._bitrate,
            duration: this.video.duration,
          });
          this._initialPlayEventTriggered = true;
        }

        break;
      case "mave:player_event":
        if (!this.video) return;
        const playerEvent = data.event!;
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
        if (this.isFullscreen()) return;
        this.openOverlay();
        break;
      case "mave:close_popup_overlay":
        if (this.isFullscreen()) return;
        this.closeOverlay();
        break;
      case "mave:open_dialog":
        // @ts-ignore
        this.dialog.showModal();
        this._uploadActive = true;
        break;
      case "mave:close_dialog":
        // @ts-ignore
        this.dialog.close();
        this._uploadActive = false;
        break;
      case "mave:toggle_fullscreen":
        this.isFullscreen() || this._overlayActive
          ? this.closeFullscreen()
          : this.openFullscreen();
        break;
      case "mave:open_fullscreen":
        if (!this._overlayActive) this.openFullscreen();
        break;
      case "mave:close_fullscreen":
        this.closeFullscreen();
        break;
      case "mave:open_settings":
        this._settingsActive = !this._settingsActive;

        if (this._settingsActive) {
          const settings = document.createElement(`mave-settings`);
          settings.setAttribute("embed", this.embed);
          document.body.appendChild(settings);
        } else {
          const settings = document.querySelector("mave-settings");
          if (settings) settings.remove();
        }
        break;
      case "mave:close_settings":
        this._settingsActive = false;
        const settings = document.querySelector("mave-settings");
        if (settings) settings.remove();
        break;
      case "mave:update_embed_settings":
        this.aspectRatio = data.aspect_ratio_enabled
          ? data.aspect_ratio
          : undefined;
        this.width = data.aspect_ratio_enabled ? undefined : data.width;
        this.height = data.aspect_ratio_enabled ? undefined : data.height;

        this.loop = data.loop;
        this.autoplay = data.autoplay_enabled;

        if (
          this.autoplay &&
          this.video?.paused &&
          this.video.currentTime < this.video.duration
        )
          this.video.play();

        this.visibilityHandler();

        break;
      case "mave:request_in_viewport":
        setTimeout(() => {
          this.visibilityHandler();
        }, 20);
        break;
      case "mave:render_video":
        // reset video
        this._hlsLoaded = false;
        this._blurhashShouldBeVisible = false;
        this.loadeddata = false;
        this.canPlay = false;

        if (this.src != data.video_src) this.src = data.video_src;
        if (this.fileType != data.file_type) this.fileType = data.file_type;
        if (this.autoplay != data.autoplay) this.autoplay = data.autoplay;
        if (this.blurhash != data.blurhash) this.blurhash = data.blurhash;
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
      fullscreen: this.isFullscreen(),
    });
  }

  generateStyle() {
    const css = document.createElement("style");

    if (this._overlayActive || this._isFullscreen) {
      css.textContent =
        ":host { overflow: hidden; width: 100%; height: 100%; }";
    }

    if (this.width && this.height) {
      css.textContent = `:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;
    } else {
      if (this.aspectRatio) {
        const aspectRatio = this.aspectRatio.includes(":")
          ? `${this.aspectRatio.split(":")[0]} / ${
              this.aspectRatio.split(":")[1]
            }`
          : "16 / 9";

        css.textContent = `:host { display: block; overflow: hidden; aspect-ratio: ${aspectRatio}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${aspectRatio}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`;
      } else {
        css.textContent =
          ":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";
      }
    }

    return css;
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

  clickDialog(e: Event) {
    if (this._uploadActive && e.target == this.dialog) {
      this.closeDialog();
      this.sendMessage("mave:cancel_upload");
    }
  }

  poster() {
    if (this.posterImage && !this.autoplay) {
      return this.posterImage;
    } else {
      return nothing;
    }
  }

  videoPoster() {
    return navigator.userAgent.toLowerCase().includes("chrome")
      ? this.poster()
      : nothing;
  }

  videoStyle() {
    return !navigator.userAgent.toLowerCase().includes("chrome") &&
      this._posterShouldBeVisible
      ? "opacity: 0;"
      : nothing;
  }

  videoRendered(video?: Element) {
    videoEvents.forEach((type) => {
      video?.addEventListener(type, (event) => {
        let data;
        if (type == "seeked") {
          data = {
            detail: { duration: this.video?.duration, embed: this.embed },
          };
        } else {
          data = { detail: { embed: this.embed } };
        }
        this.dispatchEvent(
          // @ts-ignore
          new CustomEvent(event.type, data)
        );
      });
    });
  }

  render() {
    return html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive || this._isFullscreen
          ? "active_overlay"
          : "" || this._uploadActive
          ? "active_upload"
          : ""}
      >
        ${this.renderCanvas()}
        ${this.src
          ? html`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible
                ? html` <img class="poster" .src=${this.poster()} /> `
                : ""}

              <video
                ${ref(this.videoRendered)}
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
                .src=${this.needsHls() ? this.src : nothing}
              >
                ${!this.needsHls()
                  ? html`<source
                      src=${this.src}
                      type=${this.fileType
                        ? "video/" + this.fileType
                        : "video/mp4"}
                    />`
                  : nothing}
              </video>
            `
          : nothing}
        ${this.embed
          ? html`
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
            `
          : nothing}
      </dialog>
    `;
  }

  firstUpdated(changedProperties: any) {
    this.appHeight();
  }

  private generateUrl() {
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

  private sendMessage(event: string, options: any = {}) {
    if (!this.iframe.contentWindow || !this.video) return;

    const payload = { message: event, ...options, embed: this.embed };
    this.iframe.contentWindow.postMessage(payload, "*");
    this.triggerEvent(event, payload);
  }

  private openFullscreen() {
    // TODO:
    // this value is not working?!?!

    // @ts-ignore
    if (!this.isFullscreen()) {
      if (this.requestFullscreen) {
        this.requestFullscreen();
        // @ts-ignore
      } else if (this.webkitRequestFullscreen) {
        // @ts-ignore
        this.webkitRequestFullscreen();
        // @ts-ignore
      } else if (this.video.webkitEnterFullscreen) {
        // @ts-ignore
        this.video.webkitEnterFullscreen();
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

  private closeFullscreen() {
    if (this.isFullscreen() || this._overlayActive) {
      if (document.exitFullscreen && !this._overlayActive) {
        document.exitFullscreen();
        // @ts-ignore
      } else if (document.webkitExitFullscreen && !this._overlayActive) {
        // @ts-ignore
        document.webkitExitFullscreen();
      } else {
        this.sendMessage("mave:close_overlay", {});
        this.closeOverlay();
        this.closeDialog();
      }
    }
  }

  private renderCanvas() {
    // current no canvas support
    return;

    // if (!this.blurhash || !this._blurhashShouldBeVisible) return;

    // const canvas = document.createElement("canvas");
    // const pixels = decode(this.blurhash, 320, 180);

    // const ctx = canvas.getContext("2d");
    // const imageData = ctx?.createImageData(320, 180);
    // imageData?.data.set(pixels);
    // if (imageData) ctx?.putImageData(imageData, 0, 0);
    // return canvas;
  }

  private timeUpdate() {
    this._animationFrame = requestAnimationFrame(() => {
      if (!this.video) return;
      this.sendMessage("mave:video_timeupdate", {
        currentTime: this.video.currentTime,
      });
      this.timeUpdate();
    });
  }

  private initiateScript() {
    if (this.src && !this.needsHls()) return;

    let script = document.createElement("script");
    script.onload = this.scriptHandler.bind(this);
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js";
    return script;
  }

  private needsHls() {
    return this.src?.includes(".m3u8") || this.src?.includes("mux.com");
  }

  private scriptHandler() {
    if (!this.video || !this.src || this._hlsLoaded || !this.needsHls()) return;

    // @ts-ignore
    if (Hls.isSupported()) {
      // @ts-ignore
      const hls = new Hls();
      hls.config.startLevel = 3;

      hls.loadSource(this.src);
      hls.attachMedia(this.video);
      let levels: any = [];
      // @ts-ignore
      hls.on(Hls.Events.MANIFEST_LOADED, (_, data: any) => {
        levels = data.levels.reverse();
      });
      // @ts-ignore
      hls.on(Hls.Events.LEVEL_LOADED, (_, data: any) => {
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

  private appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty(
      "--mave_embed_dialog_height",
      `${window.innerHeight}px`
    );
  }

  private visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow) return;
    const { top, bottom } = this.iframe.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    const visible = (top > 0 || bottom > 0) && top < vHeight;

    this.sendMessage(
      visible ? "mave:video_in_viewport" : "mave:video_out_viewport"
    );

    this.debouncedAppHeight();
  }

  private isFullscreen(): boolean {
    return (
      !!document.fullscreenElement ||
      // @ts-ignore
      !!document.webkitFullscreenElement ||
      ("ontouchend" in document && this._isFullscreen)
    );
  }

  private openOverlay() {
    if (this.isFullscreen()) return;

    this._overlayActive = true;
    if (this._blurhashShouldBeVisible) this._blurhashShouldBeVisible = false;

    // @ts-ignore
    this.dialog.showModal();

    this._globalStyle = document.documentElement.getAttribute("style") || "";
    document.documentElement.setAttribute(
      "style",
      `${this._globalStyle}; overflow: hidden;`
    );
  }

  private closeOverlay() {
    // @ts-ignore
    this.dialog.close();
    this._overlayActive = false;

    document.documentElement.setAttribute("style", this._globalStyle || "");
  }

  private triggerEvent(eventName: string, data?: any) {
    const object = data ? { detail: data } : undefined;
    const event = new CustomEvent(eventName, object);
    this.dispatchEvent(event);
  }

  private debounce<Params extends any[]>(
    func: (...args: Params) => any,
    timeout: number
  ): (...args: Params) => void {
    let timer: NodeJS.Timeout;
    return (...args: Params) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  }
}

if (!customElements.get("mave-component")) {
  customElements.define("mave-component", MaveComponent);
}

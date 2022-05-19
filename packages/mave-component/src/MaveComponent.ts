import { html, LitElement } from "lit";
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
  };
}

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

  @query("#dialog") dialog!: HTMLDialogElement;

  @query("#iframe") iframe!: HTMLIFrameElement;

  @query("#video") video?: HTMLVideoElement;

  @query("#canvas") canvas?: HTMLCanvasElement;

  @query("#script") script?: HTMLScriptElement;

  @state() private _settingsActive: boolean = false;

  @state() private _blurhashShouldBeVisible: boolean = true;

  @state() private _overlayActive: boolean = false;

  private _hlsLoaded: boolean = false;

  private _iframeReady: boolean = false;

  private _initialPlayEventTriggered: boolean = false;

  private _animationFrame?: number;

  private _bitrate?: number;

  private baseUrl: string = Config.getInstance().baseUrl;

  private _globalStyle?: string;

  private canPlay: boolean = false;

  private loadeddata: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("message", this.messageHandler.bind(this));
    window.addEventListener("load", this.visibilityHandler.bind(this));
    window.addEventListener("scroll", this.visibilityHandler.bind(this));
    window.addEventListener("resize", this.visibilityHandler.bind(this));

    if (
      this.video?.canPlayType("application/vnd.apple.mpegurl") &&
      !this._hlsLoaded
    ) {
      this.scriptHandler();
    }
  }

  disconnectedCallback() {
    window.removeEventListener("message", this.messageHandler.bind(this));
    window.removeEventListener("load", this.visibilityHandler.bind(this));
    window.removeEventListener("scroll", this.visibilityHandler.bind(this));
    window.removeEventListener("resize", this.visibilityHandler.bind(this));

    // remove settings when it's active
    const settings = document.querySelector("mave-settings");
    if (settings) settings.remove();

    super.disconnectedCallback();
  }

  initializeVideo() {
    if (!this.loadeddata && this.video && this.video.readyState >= 1) {
      setTimeout(() => {
        if (this.blurhash) this._blurhashShouldBeVisible = false;
      }, 750);
      this.loadeddata = true;
    }

    if (!this.canPlay) {
      const checkPlayerState = () => {
        if (this._iframeReady) return;

        this.sendMessage("mave:video_canplay");
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
        if (this._iframeReady) {
          this.timeUpdate();

          const time =
            (this.autoplay && !this._initialPlayEventTriggered) ||
            this.video.currentTime < 0.0001
              ? 0
              : this.video.currentTime;

          this.sendMessage("mave:video_play", { currentTime: time, bitrate: this._bitrate });

          this._initialPlayEventTriggered = true;
        }
        break;
      case "timeupdate":
        this.sendMessage("mave:video_timeupdate", {
          currentTime: this.video.currentTime,
        });
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

        if (
          !this._initialPlayEventTriggered &&
          this.video &&
          !this.video.paused
        ) {
          const time = this.autoplay ? 0 : this.video.currentTime;

          this.sendMessage("mave:video_play", { currentTime: time, bitrate: this._bitrate });
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
        if (this._blurhashShouldBeVisible)
          this._blurhashShouldBeVisible = false;
        // @ts-ignore
        this.dialog.showModal();

        this._globalStyle =
          document.documentElement.getAttribute("style") || "";
        document.documentElement.setAttribute(
          "style",
          `${this._globalStyle}; overflow: hidden;`
        );

        break;
      case "mave:close_popup_overlay":
        // @ts-ignore
        this.dialog.close();
        this._overlayActive = false;

        document.documentElement.setAttribute("style", this._globalStyle || "");

        break;
      case "mave:toggle_fullscreen":
        document.fullscreenElement
          ? this.closeFullscreen()
          : this.openFullscreen();
        break;
      case "mave:open_fullscreen":
        this.openFullscreen();
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
        this._hlsLoaded = false;
        this.src = data.video_src;
        this.autoplay = data.autoplay;
        if (data.blurhash) this.blurhash = data.blurhash;
        break;
    }
  }

  generateStyle() {
    const css = document.createElement("style");

    if (this._overlayActive) {
      css.textContent =
        ":host { overflow: hidden; width: 100%; height: 100%; }";
    }

    if (this.width && this.height) {
      css.textContent = `:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;
    } else {
      if (this.aspectRatio) {
        const [w, h] = this.aspectRatio.split(":");
        css.textContent = `:host { display: block; overflow: hidden; aspect-ratio: ${w} / ${h}; width: 100%; min-width: 320px; min-height: 180px; }`;
      } else {
        css.textContent =
          ":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";
      }
    }

    return css;
  }

  closeDialog() {
    this._overlayActive = false;
    this.sendMessage("mave:closing_overlay");
  }

  poster() {
    return `${this.src?.replace("stream", "image")}/thumbnail.jpg?time=0`;
  }

  render() {
    return html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive ? "active_overlay" : ""}
      >
        ${this.renderCanvas()}
        ${this.src
          ? html`
              ${this.initiateScript()}
              ${this._blurhashShouldBeVisible
                ? html` <img class="poster" .src=${this.poster()} /> `
                : ""}

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
            `
          : ""}
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
            `
          : ""}
      </dialog>
    `;
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

    const payload = { message: event, ...options };
    this.iframe.contentWindow.postMessage(payload, "*");
  }

  private openFullscreen() {
    if (!document.fullscreenElement) {
      if (this.requestFullscreen) {
        this.requestFullscreen();
      } else {
        // @ts-ignore
        this.dialog.webkitRequestFullScreen();
      }

      this.sendMessage("mave:video_fullscreen", { fullscreen: false });
    }
  }

  private closeFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      this.sendMessage("mave:video_fullscreen", { fullscreen: true });
    }
  }

  private renderCanvas() {
    if (!this.blurhash || !this._blurhashShouldBeVisible) return;

    const canvas = document.createElement("canvas");
    const pixels = decode(this.blurhash, 320, 180);

    const ctx = canvas.getContext("2d");
    const imageData = ctx?.createImageData(320, 180);
    imageData?.data.set(pixels);
    if (imageData) ctx?.putImageData(imageData, 0, 0);
    return canvas;
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
    let script = document.createElement("script");
    script.onload = this.scriptHandler.bind(this);
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js";
    return script;
  }

  private scriptHandler() {
    if (!this.video || !this.src || this._hlsLoaded) return;

    if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
      this.video.src = this.src;

      // no bitrate detected

      // @ts-ignore
    } else if (Hls.isSupported()) {
      // @ts-ignore
      const hls = new Hls();
      hls.loadSource(this.src);
      hls.attachMedia(this.video);
      let levels : any = []
      // @ts-ignore
      hls.on(Hls.Events.MANIFEST_LOADED, (_, data: any) => {  
        levels = data.levels.reverse();
      });
      // @ts-ignore
      hls.on(Hls.Events.LEVEL_LOADED, (_, data: any) => {
        if(this._bitrate != levels[data.level].bitrate) {
          this._bitrate = levels[data.level].bitrate
          this.sendMessage("mave:bitrate", { bitrate: this._bitrate });
        }
      });
      hls.subtitleTrack = 0;
      hls.subtitleDisplay = true;
    }
    this._hlsLoaded = true;
  }

  private visibilityHandler() {
    if (!this.iframe || !this.iframe.contentWindow) return;
    const { top, bottom } = this.iframe.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    const visible = (top > 0 || bottom > 0) && top < vHeight;

    this.sendMessage(
      visible ? "mave:video_in_viewport" : "mave:video_out_viewport"
    );
  }
}

if (!customElements.get("mave-component")) {
  customElements.define("mave-component", MaveComponent);
}

import { html, css, LitElement } from "lit";
import { property, query, state } from "lit/decorators.js";
import { baseURL } from "../../config/config";

export class SettingsComponent extends LitElement {
  @property({ type: String }) embed!: string;

  @query("#iframe") iframe!: HTMLIFrameElement;

  @state() private _ghostActive: boolean = true;

  @state() private _loaded: boolean = true;

  private _globalStyle?: string;

  static styles = css`
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

  connectedCallback() {
    super.connectedCallback();

    this._globalStyle = document.documentElement.getAttribute("style") || "";
    document.documentElement.setAttribute(
      "style",
      `${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`
    );

    // workaround for animation
    setTimeout(() => {
      this._ghostActive = true;
    }, 0);

    this.iframe?.addEventListener("load", this.iframeLoaded.bind(this));
  }

  disconnectedCallback() {
    document.documentElement.setAttribute("style", this._globalStyle || "");
    this.iframe?.removeEventListener("load", this.iframeLoaded.bind(this));
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div>
        <div class=${this._ghostActive ? "ghost active" : "ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${baseURL}/e/${this.embed}/settings"
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

  private iframeLoaded() {
    this._loaded = true;
  }
}

if (!customElements.get("mave-settings")) {
  customElements.define("mave-settings", SettingsComponent);
}

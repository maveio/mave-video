var w=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(l,r,e)=>r in l?w(l,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[r]=e,k=(l,r)=>{for(var e in r||(r={}))T.call(r,e)&&_(l,e,r[e]);if(y)for(var e of y(r))x.call(r,e)&&_(l,e,r[e]);return l};var i=(l,r,e,t)=>{for(var s=t>1?void 0:t?H(r,e):r,n=l.length-1,c;n>=0;n--)(c=l[n])&&(s=(t?c(r,e,s):c(s))||s);return t&&s&&w(r,e,s),s};var o=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return o._inst||(o._inst=new o),o._inst}get baseUrl(){return this._baseUrl}set baseUrl(r){this._baseUrl=r}};import{html as u,LitElement as z}from"lit";import{property as d,query as p,state as b}from"lit/decorators.js";import{css as S}from"lit";var E=S`
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
    background: black;
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
`;import{decode as R}from"@fpapado/blurhash";import{html as L,css as A,LitElement as F}from"lit";import{property as U,query as j,state as $}from"lit/decorators.js";var h=class extends F{constructor(){super(...arguments);this._ghostActive=!0;this._loaded=!0}connectedCallback(){var e;super.connectedCallback(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return L`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${o.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded?"loaded":"initial"}
          ></iframe>
        </div>
      </div>
    `}iframeLoaded(){this._loaded=!0}};h.styles=A`
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
  `,i([U({type:String})],h.prototype,"embed",2),i([j("#iframe")],h.prototype,"iframe",2),i([$()],h.prototype,"_ghostActive",2),i([$()],h.prototype,"_loaded",2);customElements.get("mave-settings")||customElements.define("mave-settings",h);var a=class extends z{constructor(){super(...arguments);this._settingsActive=!1;this._blurhashShouldBeVisible=!0;this._overlayActive=!1;this._hlsLoaded=!1;this._iframeReady=!1;this._initialPlayEventTriggered=!1;this.baseUrl=o.getInstance().baseUrl}connectedCallback(){var e;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((e=this.video)==null?void 0:e.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this)),super.disconnectedCallback()}videoHandler(e){if(!!this.video)switch(e.type){case"loadeddata":this.video.readyState>=2&&setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},500);break;case"canplay":let t=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(t.bind(this),25))};t();break;case"progress":try{let s=this.video.buffered.length-1,n=Math.round(this.video.buffered.end(s)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:n})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let s=this.autoplay&&!this._initialPlayEventTriggered?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:s}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(e){var n;let{data:t}=e,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let m=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:m}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let c=t.event;switch(Object.keys(c)[0]){case"play":c.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=c.muted;break;case"volume":this.video.volume=c.volume;break;case"currentTime":this.video.currentTime=c.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,window.scrollTo(0,0),this.dialog.showModal(),this.dialog.scrollIntoView(!1),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let m=document.createElement("mave-settings");m.setAttribute("embed",this.embed),document.body.appendChild(m)}else{let m=document.querySelector("mave-settings");m&&m.remove()}break;case"mave:close_settings":this._settingsActive=!1;let f=document.querySelector("mave-settings");f&&f.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((n=this.video)==null?void 0:n.paused)&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=t.video_src,this.autoplay=t.autoplay=="true",t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){if(this._overlayActive)return u`<style>
      :host {
        width: 100%; 
        height: 100%;
      }
    `;if(this.width&&this.height)return u`<style>
        :host {
          width: ${this.width};
          height: ${this.height};
        }
      </style>`;if(this.aspectRatio&&this.aspectRatio!="auto"){let[e,t]=this.aspectRatio.split(":");return u`<style>
          :host {
            aspect-ratio: ${e} / ${t};
            width: 100%;
          }
        </style>`}else return u`<style>
          :host {
            aspect-ratio: 16 / 9;
            min-height: 360px;
            width: 100%;
          }
        </style>`}closeDialog(){this._overlayActive=!1,this.sendMessage("mave:closing_overlay")}render(){return u`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive?"active_overlay":""}
      >
        ${this.renderCanvas()}
        ${this.src?u`
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
            `:""}
        ${this.embed?u`
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
            `:""}
      </dialog>
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}`}sendMessage(e,t={}){if(!this.iframe.contentWindow||!this.video)return;let s=k({message:e},t);this.iframe.contentWindow.postMessage(s,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let e=document.createElement("canvas"),t=R(this.blurhash,320,180),s=e.getContext("2d"),n=s==null?void 0:s.createImageData(320,180);return n==null||n.data.set(t),n&&(s==null||s.putImageData(n,0,0)),e}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let e=new Hls;e.loadSource(this.src),e.attachMedia(this.video),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:t}=this.iframe.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,n=(e>0||t>0)&&e<s;this.sendMessage(n?"mave:video_in_viewport":"mave:video_out_viewport")}};a.styles=E,i([d({type:String})],a.prototype,"embed",2),i([d({type:String})],a.prototype,"reference_id",2),i([d({type:String})],a.prototype,"display_name",2),i([d({type:String})],a.prototype,"jwt",2),i([d({type:Boolean})],a.prototype,"muted",2),i([d({type:Boolean})],a.prototype,"autoplay",2),i([d({type:Boolean})],a.prototype,"loop",2),i([d({type:String})],a.prototype,"src",2),i([d({type:String})],a.prototype,"blurhash",2),i([d({type:String})],a.prototype,"aspectRatio",2),i([d({type:String})],a.prototype,"width",2),i([d({type:String})],a.prototype,"height",2),i([p("#dialog")],a.prototype,"dialog",2),i([p("#iframe")],a.prototype,"iframe",2),i([p("#video")],a.prototype,"video",2),i([p("#canvas")],a.prototype,"canvas",2),i([p("#script")],a.prototype,"script",2),i([b()],a.prototype,"_settingsActive",2),i([b()],a.prototype,"_blurhashShouldBeVisible",2),i([b()],a.prototype,"_overlayActive",2);customElements.get("mave-component")||customElements.define("mave-component",a);export{o as Config,a as MaveComponent};

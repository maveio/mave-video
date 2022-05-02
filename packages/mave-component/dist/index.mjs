var g=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var b=(o,n,e)=>n in o?g(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e,f=(o,n)=>{for(var e in n||(n={}))$.call(n,e)&&b(o,e,n[e]);if(v)for(var e of v(n))H.call(n,e)&&b(o,e,n[e]);return o};var i=(o,n,e,s)=>{for(var t=s>1?void 0:s?E(n,e):n,r=o.length-1,h;r>=0;r--)(h=o[r])&&(t=(s?h(n,e,t):h(t))||t);return s&&t&&g(n,e,t),t};import{html as m,LitElement as z}from"lit";import{property as l,query as c,state as w}from"lit/decorators.js";import{css as T}from"lit";var y=T`
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
`;import{decode as j}from"@fpapado/blurhash";import{html as x,css as L,LitElement as S}from"lit";import{property as F,query as A,state as _}from"lit/decorators.js";var d=class extends S{constructor(){super(...arguments);this._ghostActive=!0;this._loaded=!0}connectedCallback(){var e;super.connectedCallback(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return x`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://mave.io/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded?"loaded":"initial"}
          ></iframe>
        </div>
      </div>
    `}iframeLoaded(){this._loaded=!0}};d.styles=L`
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
  `,i([F({type:String})],d.prototype,"embed",2),i([A("#iframe")],d.prototype,"iframe",2),i([_()],d.prototype,"_ghostActive",2),i([_()],d.prototype,"_loaded",2);customElements.get("mave-settings")||customElements.define("mave-settings",d);var a=class extends z{constructor(){super(...arguments);this._settingsActive=!1;this._blurhashShouldBeVisible=!0;this._overlayActive=!1;this._hlsLoaded=!1;this._iframeReady=!1;this._initialPlayEventTriggered=!1;this.baseUrl="mave.io"}connectedCallback(){var e;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((e=this.video)==null?void 0:e.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this)),super.disconnectedCallback()}videoHandler(e){if(!!this.video)switch(e.type){case"loadeddata":this.video.readyState>=2&&setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},500);break;case"canplay":let s=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(s.bind(this),25))};s();break;case"progress":try{let t=this.video.buffered.length-1,r=Math.round(this.video.buffered.end(t)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:r})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let t=this.autoplay&&!this._initialPlayEventTriggered?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:t}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(e){let{data:s}=e,{message:t}=s;if(!(!s||s.hash!=this.embed))switch(t){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let k=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:k}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let r=s.event;switch(Object.keys(r)[0]){case"play":r.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=r.muted;break;case"volume":this.video.volume=r.volume;break;case"currentTime":this.video.currentTime=r.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,window.scrollTo(0,0),this.dialog.showModal(),this.dialog.scrollIntoView(!1);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1;break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":this._settingsActive=!this._settingsActive;break;case"mave:close_settings":this._settingsActive=!1;break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=s.video_src,this.autoplay=s.autoplay,s.blurhash&&(this.blurhash=s.blurhash);break}}generateStyle(){if(this.width&&this.height)return`width: ${this.width}; height: ${this.height};`;if(this.aspectRatio&&this.aspectRatio!="auto"){let[e,s]=this.aspectRatio.split(":");return`aspect-ratio: ${e} / ${s}; width: 100%`}else return"aspect-ratio: 16 / 9; min-height: 360px; width: 100%;"}render(){return m`
      ${this._settingsActive&&m` <mave-settings embed=${this.embed} /> `||""}

      <dialog id="dialog" style="${this.generateStyle()}">
        ${this.renderCanvas()}
        ${this.src&&m`
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
          `||""}
        ${this.embed&&m`
            <iframe
              title="embed"
              id="iframe"
              src="${this.generateUrl()}"
              sandbox="allow-scripts allow-forms allow-same-origin"
              allow="autoplay; fullscreen; clipboard-write;"
              frameborder="0"
            >
            </iframe>
          `||""}
      </dialog>
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:`https://${this.baseUrl}/e/${this.embed}`}sendMessage(e,s={}){if(!this.iframe.contentWindow)return;let t=f({message:e},s);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let e=document.createElement("canvas"),s=j(this.blurhash,320,180),t=e.getContext("2d"),r=t==null?void 0:t.createImageData(320,180);return r==null||r.data.set(s),r&&(t==null||t.putImageData(r,0,0)),e}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let e=new Hls;e.loadSource(this.src),e.attachMedia(this.video),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:s}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,r=(e>0||s>0)&&e<t;this.sendMessage(r?"mave:video_in_viewport":"mave:video_out_viewport")}};a.styles=y,i([l({type:String})],a.prototype,"embed",2),i([l({type:String})],a.prototype,"reference_id",2),i([l({type:String})],a.prototype,"display_name",2),i([l({type:String})],a.prototype,"jwt",2),i([l({type:Boolean})],a.prototype,"muted",2),i([l({type:Boolean})],a.prototype,"autoplay",2),i([l({type:Boolean})],a.prototype,"loop",2),i([l({type:String})],a.prototype,"src",2),i([l({type:String})],a.prototype,"blurhash",2),i([l({type:String})],a.prototype,"aspectRatio",2),i([l({type:String})],a.prototype,"width",2),i([l({type:String})],a.prototype,"height",2),i([c("#dialog")],a.prototype,"dialog",2),i([c("#iframe")],a.prototype,"iframe",2),i([c("#video")],a.prototype,"video",2),i([c("#canvas")],a.prototype,"canvas",2),i([c("#script")],a.prototype,"script",2),i([w()],a.prototype,"_settingsActive",2),i([w()],a.prototype,"_blurhashShouldBeVisible",2);customElements.get("mave-component")||customElements.define("mave-component",a);export{a as MaveComponent};

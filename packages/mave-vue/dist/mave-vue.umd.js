(function(d){typeof define=="function"&&define.amd?define(["vue"],d):d()})(function(){"use strict";var d=Object.defineProperty,y=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,i,t)=>i in e?d(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,$=(e,i)=>{for(var t in i||(i={}))g.call(i,t)&&f(e,t,i[t]);if(b)for(var t of b(i))k.call(i,t)&&f(e,t,i[t]);return e},E=(e,i)=>{for(var t in i)d(e,t,{get:i[t],enumerable:!0})},x=(e,i,t,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of w(i))!g.call(e,o)&&o!==t&&d(e,o,{get:()=>i[o],enumerable:!(n=y(i,o))||n.enumerable});return e},S=e=>x(d({},"__esModule",{value:!0}),e),s=(e,i,t,n)=>{for(var o=n>1?void 0:n?y(i,t):i,p=e.length-1,l;p>=0;p--)(l=e[p])&&(o=(n?l(i,t,o):l(o))||o);return n&&o&&d(i,t,o),o},_={};E(_,{Config:()=>h,MaveComponent:()=>a}),module.exports=S(_);var h=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return h._inst||(h._inst=new h),h._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}},v=require("lit"),r=require("lit/decorators.js"),T=require("lit"),H=T.css`
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
`,A=require("@fpapado/blurhash"),u=require("lit"),m=require("lit/decorators.js"),c=class extends u.LitElement{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var e;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return u.html`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${h.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded&&this._delayed?"loaded":"initial"}
          ></iframe>
        </div>
      </div>
    `}iframeLoaded(){this._loaded=!0}};c.styles=u.css`
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
  `,s([(0,m.property)({type:String})],c.prototype,"embed",2),s([(0,m.query)("#iframe")],c.prototype,"iframe",2),s([(0,m.state)()],c.prototype,"_ghostActive",2),s([(0,m.state)()],c.prototype,"_loaded",2),s([(0,m.state)()],c.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",c);var a=class extends v.LitElement{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=h.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1}connectedCallback(){var e;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((e=this.video)==null?void 0:e.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));let e=document.querySelector("mave-settings");e&&e.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=1&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},500),this.loadeddata=!0),!this.canPlay){let e=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(e.bind(this),25),this.canPlay=!0)};e()}}videoHandler(e){if(this.video)switch(e.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let i=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(i)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let i=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:i}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(e){var i;let{data:t}=e,{message:n}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(n){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let l=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:l}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let o=t.event;switch(Object.keys(o)[0]){case"play":o.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=o.muted;break;case"volume":this.video.volume=o.volume;break;case"currentTime":this.video.currentTime=o.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let l=document.createElement("mave-settings");l.setAttribute("embed",this.embed),document.body.appendChild(l)}else{let l=document.querySelector("mave-settings");l&&l.remove()}break;case"mave:close_settings":this._settingsActive=!1;let p=document.querySelector("mave-settings");p&&p.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((i=this.video)==null?void 0:i.paused)&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=t.video_src,this.autoplay=t.autoplay,t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){let e=document.createElement("style");if(this._overlayActive&&(e.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)e.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;else if(this.aspectRatio){let[i,t]=this.aspectRatio.split(":");e.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${i} / ${t}; width: 100%; min-width: 320px; min-height: 180px; }`}else e.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";return e}closeDialog(){this._overlayActive=!1,this.sendMessage("mave:closing_overlay")}render(){return v.html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive?"active_overlay":""}
      >
        ${this.renderCanvas()}
        ${this.src?v.html`
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
        ${this.embed?v.html`
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
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}`}sendMessage(e,i={}){if(!this.iframe.contentWindow||!this.video)return;let t=$({message:e},i);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let e=document.createElement("canvas"),i=(0,A.decode)(this.blurhash,320,180),t=e.getContext("2d"),n=t==null?void 0:t.createImageData(320,180);return n==null||n.data.set(i),n&&(t==null||t.putImageData(n,0,0)),e}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let e=new Hls;e.loadSource(this.src),e.attachMedia(this.video),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:i}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,n=(e>0||i>0)&&e<t;this.sendMessage(n?"mave:video_in_viewport":"mave:video_out_viewport")}};a.styles=H,s([(0,r.property)({type:String})],a.prototype,"embed",2),s([(0,r.property)({type:String})],a.prototype,"reference_id",2),s([(0,r.property)({type:String})],a.prototype,"display_name",2),s([(0,r.property)({type:String})],a.prototype,"jwt",2),s([(0,r.property)({type:String})],a.prototype,"classname",2),s([(0,r.property)({type:Boolean})],a.prototype,"muted",2),s([(0,r.property)({type:Boolean})],a.prototype,"autoplay",2),s([(0,r.property)({type:Boolean})],a.prototype,"loop",2),s([(0,r.property)({type:String})],a.prototype,"src",2),s([(0,r.property)({type:String})],a.prototype,"blurhash",2),s([(0,r.property)({type:String,attribute:"aspect-ratio"})],a.prototype,"aspectRatio",2),s([(0,r.property)({type:String})],a.prototype,"width",2),s([(0,r.property)({type:String})],a.prototype,"height",2),s([(0,r.query)("#dialog")],a.prototype,"dialog",2),s([(0,r.query)("#iframe")],a.prototype,"iframe",2),s([(0,r.query)("#video")],a.prototype,"video",2),s([(0,r.query)("#canvas")],a.prototype,"canvas",2),s([(0,r.query)("#script")],a.prototype,"script",2),s([(0,r.state)()],a.prototype,"_settingsActive",2),s([(0,r.state)()],a.prototype,"_blurhashShouldBeVisible",2),s([(0,r.state)()],a.prototype,"_overlayActive",2),customElements.get("mave-component")||customElements.define("mave-component",a)});

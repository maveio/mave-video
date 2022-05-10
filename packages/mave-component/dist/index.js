var b=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(o,s,e)=>s in o?b(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,E=(o,s)=>{for(var e in s||(s={}))k.call(s,e)&&_(o,e,s[e]);if(y)for(var e of y(s))S.call(s,e)&&_(o,e,s[e]);return o};var L=(o,s)=>{for(var e in s)b(o,e,{get:s[e],enumerable:!0})},A=(o,s,e,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of T(s))!k.call(o,i)&&i!==e&&b(o,i,{get:()=>s[i],enumerable:!(t=w(s,i))||t.enumerable});return o};var F=o=>A(b({},"__esModule",{value:!0}),o),a=(o,s,e,t)=>{for(var i=t>1?void 0:t?w(s,e):s,l=o.length-1,h;l>=0;l--)(h=o[l])&&(i=(t?h(s,e,i):h(i))||i);return t&&i&&b(s,e,i),i};var U={};L(U,{Config:()=>d,MaveComponent:()=>r});module.exports=F(U);var d=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return d._inst||(d._inst=new d),d._inst}get baseUrl(){return this._baseUrl}set baseUrl(s){this._baseUrl=s}};var v=require("lit"),n=require("lit/decorators.js");var $=require("lit"),x=$.css`
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
`;var H=require("@fpapado/blurhash");var u=require("lit"),m=require("lit/decorators.js");var c=class extends u.LitElement{constructor(){super(...arguments);this._ghostActive=!0;this._loaded=!0;this._delayed=!1}connectedCallback(){var e;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return u.html`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${d.getInstance().baseUrl}/e/${this.embed}/settings"
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
  `,a([(0,m.property)({type:String})],c.prototype,"embed",2),a([(0,m.query)("#iframe")],c.prototype,"iframe",2),a([(0,m.state)()],c.prototype,"_ghostActive",2),a([(0,m.state)()],c.prototype,"_loaded",2),a([(0,m.state)()],c.prototype,"_delayed",2);customElements.get("mave-settings")||customElements.define("mave-settings",c);var r=class extends v.LitElement{constructor(){super(...arguments);this._settingsActive=!1;this._blurhashShouldBeVisible=!0;this._overlayActive=!1;this._hlsLoaded=!1;this._iframeReady=!1;this._initialPlayEventTriggered=!1;this.baseUrl=d.getInstance().baseUrl;this.canPlay=!1;this.loadeddata=!1}connectedCallback(){var e;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((e=this.video)==null?void 0:e.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));let e=document.querySelector("mave-settings");e&&e.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=1&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},500),this.loadeddata=!0),!this.canPlay){let e=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(e.bind(this),25),this.canPlay=!0)};e()}}videoHandler(e){if(!!this.video)switch(e.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let t=this.video.buffered.length-1,i=Math.round(this.video.buffered.end(t)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:i})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let t=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:t}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(e){var l;let{data:t}=e,{message:i}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(i){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let p=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:p}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let h=t.event;switch(Object.keys(h)[0]){case"play":h.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=h.muted;break;case"volume":this.video.volume=h.volume;break;case"currentTime":this.video.currentTime=h.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let p=document.createElement("mave-settings");p.setAttribute("embed",this.embed),document.body.appendChild(p)}else{let p=document.querySelector("mave-settings");p&&p.remove()}break;case"mave:close_settings":this._settingsActive=!1;let f=document.querySelector("mave-settings");f&&f.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((l=this.video)==null?void 0:l.paused)&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=t.video_src,this.autoplay=t.autoplay,t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){let e=document.createElement("style");if(this._overlayActive&&(e.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)e.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;else if(this.aspectRatio){let[t,i]=this.aspectRatio.split(":");e.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${t} / ${i}; width: 100%; min-width: 320px; min-height: 180px; }`}else e.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";return e}closeDialog(){this._overlayActive=!1,this.sendMessage("mave:closing_overlay")}render(){return v.html`
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
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}`}sendMessage(e,t={}){if(!this.iframe.contentWindow||!this.video)return;let i=E({message:e},t);this.iframe.contentWindow.postMessage(i,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let e=document.createElement("canvas"),t=(0,H.decode)(this.blurhash,320,180),i=e.getContext("2d"),l=i==null?void 0:i.createImageData(320,180);return l==null||l.data.set(t),l&&(i==null||i.putImageData(l,0,0)),e}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let e=new Hls;e.loadSource(this.src),e.attachMedia(this.video),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:t}=this.iframe.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,l=(e>0||t>0)&&e<i;this.sendMessage(l?"mave:video_in_viewport":"mave:video_out_viewport")}};r.styles=x,a([(0,n.property)({type:String})],r.prototype,"embed",2),a([(0,n.property)({type:String})],r.prototype,"reference_id",2),a([(0,n.property)({type:String})],r.prototype,"display_name",2),a([(0,n.property)({type:String})],r.prototype,"jwt",2),a([(0,n.property)({type:String})],r.prototype,"classname",2),a([(0,n.property)({type:Boolean})],r.prototype,"muted",2),a([(0,n.property)({type:Boolean})],r.prototype,"autoplay",2),a([(0,n.property)({type:Boolean})],r.prototype,"loop",2),a([(0,n.property)({type:String})],r.prototype,"src",2),a([(0,n.property)({type:String})],r.prototype,"blurhash",2),a([(0,n.property)({type:String,attribute:"aspect-ratio"})],r.prototype,"aspectRatio",2),a([(0,n.property)({type:String})],r.prototype,"width",2),a([(0,n.property)({type:String})],r.prototype,"height",2),a([(0,n.query)("#dialog")],r.prototype,"dialog",2),a([(0,n.query)("#iframe")],r.prototype,"iframe",2),a([(0,n.query)("#video")],r.prototype,"video",2),a([(0,n.query)("#canvas")],r.prototype,"canvas",2),a([(0,n.query)("#script")],r.prototype,"script",2),a([(0,n.state)()],r.prototype,"_settingsActive",2),a([(0,n.state)()],r.prototype,"_blurhashShouldBeVisible",2),a([(0,n.state)()],r.prototype,"_overlayActive",2);customElements.get("mave-component")||customElements.define("mave-component",r);0&&(module.exports={Config,MaveComponent});

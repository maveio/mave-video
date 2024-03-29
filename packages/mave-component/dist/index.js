var E=Object.defineProperty,F=Object.defineProperties,A=Object.getOwnPropertyDescriptor,L=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(n,o,e)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,H=(n,o)=>{for(var e in o||(o={}))V.call(o,e)&&k(n,e,o[e]);if(w)for(var e of w(o))U.call(o,e)&&k(n,e,o[e]);return n},$=(n,o)=>F(n,L(o));var i=(n,o,e,t)=>{for(var a=t>1?void 0:t?A(o,e):o,r=n.length-1,h;r>=0;r--)(h=n[r])&&(a=(t?h(o,e,a):h(a))||a);return t&&a&&E(o,e,a),a};var d=class{constructor(){this._baseUrl="app.mave.io"}static getInstance(){return d._inst||(d._inst=new d),d._inst}get baseUrl(){return this._baseUrl}set baseUrl(o){this._baseUrl=o}};import{html as g,LitElement as I,nothing as m}from"lit";import{ref as D}from"lit/directives/ref.js";import{property as l,query as p,state as v}from"lit/decorators.js";import{css as P}from"lit";var x=P`
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
    align-items: center;
    justify-content: center;
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
    position: absolute;
    top: 0;
    height: 100%;
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

  #end {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 30;
    top: 0;
    left: 0;
  }
`;import{html as z,css as R,LitElement as j}from"lit";import{property as B,query as S,state as y}from"lit/decorators.js";var c=class extends j{constructor(){super(...arguments);this._ghostActive=!0;this._loaded=!0;this._delayed=!1}connectedCallback(){var e;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),window.addEventListener("resize",this.appHeight),window.addEventListener("focus",this.appHeight),this.appHeight(),setTimeout(()=>{this._ghostActive=!0,this.dialog.showModal()},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}appHeight(){document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),this.dialog.close(),window.removeEventListener("resize",this.appHeight),window.removeEventListener("focus",this.appHeight),super.disconnectedCallback()}dialogHandler(e){e.type=="close"&&window.postMessage({message:"mave:close_settings",hash:this.embed},"*"),e.target==this.dialog&&this.dialog.close()}render(){return z`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
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
      </dialog>
    `}iframeLoaded(){this._loaded=!0}};c.styles=R`
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
  `,i([B({type:String})],c.prototype,"embed",2),i([S("#dialog")],c.prototype,"dialog",2),i([S("#iframe")],c.prototype,"iframe",2),i([y()],c.prototype,"_ghostActive",2),i([y()],c.prototype,"_loaded",2),i([y()],c.prototype,"_delayed",2);customElements.get("mave-settings")||customElements.define("mave-settings",c);var q=crypto.getRandomValues(new Uint8Array(21)).reduce((n,o)=>n+=(o&=63)<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-",""),T=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","castchange","entercast","leavecast"],O=["mave:video_canplay","mave:video_progress","mave:video_play","mave:video_pause","mave:video_ended","mave:video_timeupdate","mave:vide_muted","mave:vide_muted","mave:video_fullscreen","mave:open_overlay","mave:close_overlay","mave:bitrate"],s=class extends I{constructor(){super(...arguments);this._settingsActive=!1;this._blurhashShouldBeVisible=!0;this._overlayActive=!1;this._isFullscreen=!1;this._uploadActive=!1;this._posterShouldBeVisible=!0;this._hlsLoaded=!1;this._iframeReady=!1;this._initialPlayEventTriggered=!1;this.baseUrl=d.getInstance().baseUrl;this.canPlay=!1;this.loadeddata=!1;this.debouncedAppHeight=this.debounce(this.appHeight.bind(this),550)}connectedCallback(){if(super.connectedCallback(),!this.src&&this.embed){let e=`https://${d.getInstance().baseUrl}/${this.embed}/json`;(async()=>{try{let r=await(await fetch(e)).json();this.autoplay=r.autoPlay,this.loop=r.loop,this.aspectRatio=r.settingsAspectRatio,this.blurhash=r.videoBlurHash,this.src=r.videoSource,this.height=r.height,this.width=r.width,this.posterImage=r.posterImage,this.posterVideoSource=r.posterVideoSource}catch(a){console.log("error",a)}})()}window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this));for(let e of["fullscreenchange","webkitfullscreenchange"])this.addEventListener(e,this.fullscreenChangeHandler.bind(this));this._hlsLoaded||this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));for(let t of["fullscreenchange","webkitfullscreenchange"])this.removeEventListener(t,this.fullscreenChangeHandler.bind(this));let e=document.querySelector("mave-settings");e&&e.remove(),super.disconnectedCallback()}listEvents(){return[...T,...O]}play(){var e,t,a;this.video&&((e=this.video)==null?void 0:e.currentTime)>=((t=this.video)==null?void 0:t.duration)&&(this.video.currentTime=0),(a=this.video)==null||a.play()}pause(){var e;(e=this.video)==null||e.pause()}setVolume(e){this.video&&(e>0&&(this.video.muted=!1),this.video.volume=e,this.sendMessage("mave:volume_change",{volume:e}))}setMuted(e){this.video&&(this.video.muted=e,this.sendMessage("mave:video_muted",{muted:this.video.muted}))}setCurrentTime(e){this.video&&(this.video.currentTime=e)}getCurrentTime(){var e;return(e=this.video)==null?void 0:e.currentTime}toggleEndScreen(){this.endElement&&(this.endElement.style.display==="block"?this.endElement.style.display="none":this.endElement.style.display="block")}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=2&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},1250),this.loadeddata=!0),!this.canPlay){let e=()=>{var t;this._iframeReady||(this.sendMessage("mave:video_canplay",{duration:(t=this.video)==null?void 0:t.duration}),setTimeout(e.bind(this),25),this.canPlay=!0)};e()}}videoHandler(e){if(!!this.video)switch(e.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let t=this.video.buffered.length-1,a=Math.round(this.video.buffered.end(t)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:a})}catch{}break;case"play":if(this._posterShouldBeVisible&&(document.webkitExitFullscreen?setTimeout(()=>{this._posterShouldBeVisible=!1},450):this._posterShouldBeVisible=!1),this._iframeReady){this.timeUpdate();let t=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:t,bitrate:this._bitrate,duration:this.video.duration}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"volumechange":break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25),e.type=="ended"&&!this.loop&&this.endElement&&this.querySelector('[slot="end-screen"]')&&(this.endElement.style.display="block");break}}messageHandler(e){var r;let{data:t}=e,{message:a}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(a){case"mave:player_ready":if(this._iframeReady=!0,this.triggerEvent("ready",{videoElement:this.video}),!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let u=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:u,bitrate:this._bitrate,duration:this.video.duration}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let h=t.event;switch(Object.keys(h)[0]){case"play":h.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=h.muted,this.sendMessage("mave:video_muted",{muted:this.video.muted});break;case"volume":this.video.volume=h.volume;break;case"currentTime":this.video.currentTime=h.currentTime;break}break;case"mave:open_popup_overlay":if(this.isFullscreen())return;this.openOverlay();break;case"mave:close_popup_overlay":if(this.isFullscreen())return;this.closeOverlay();break;case"mave:open_dialog":this.dialog.showModal(),this._uploadActive=!0;break;case"mave:close_dialog":this.dialog.close(),this._uploadActive=!1;break;case"mave:toggle_fullscreen":this.isFullscreen()||this._overlayActive?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this._overlayActive||this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let u=document.createElement("mave-settings");u.setAttribute("embed",this.embed),document.body.appendChild(u)}else{let u=document.querySelector("mave-settings");u&&u.remove()}break;case"mave:close_settings":this._settingsActive=!1;let _=document.querySelector("mave-settings");_&&_.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((r=this.video)==null?void 0:r.paused)&&this.video.currentTime<this.video.duration&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this._blurhashShouldBeVisible=!1,this.loadeddata=!1,this.canPlay=!1,this.src!=t.video_src&&(this.src=t.video_src),this.fileType!=t.file_type&&(this.fileType=t.file_type),this.autoplay!=t.autoplay&&(this.autoplay=t.autoplay),this.blurhash!=t.blurhash&&(this.blurhash=t.blurhash),this.posterImage!=t.poster_image&&(this.posterImage=t.poster_image),this.posterVideoSource!=t.poster_video_source&&(this.posterVideoSource=t.poster_video_source);break}}fullscreenChangeHandler(){this._isFullscreen=!this._isFullscreen,this.sendMessage("mave:video_fullscreen",{fullscreen:this.isFullscreen()})}generateStyle(){let e=document.createElement("style");if((this._overlayActive||this._isFullscreen)&&(e.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)e.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;else if(this.aspectRatio){let t=this.aspectRatio.includes(":")?`${this.aspectRatio.split(":")[0]} / ${this.aspectRatio.split(":")[1]}`:"16 / 9";e.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${t}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${t}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`}else e.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";return e}closeDialog(){this.isFullscreen()?this.closeFullscreen():(this._overlayActive=!1,this._uploadActive=!1,this.sendMessage("mave:close_overlay"))}clickDialog(e){this._uploadActive&&e.target==this.dialog&&(this.closeDialog(),this.sendMessage("mave:cancel_upload"))}poster(){return this.posterImage&&!this.autoplay?this.posterImage:m}videoPoster(){return navigator.userAgent.toLowerCase().includes("chrome")?this.poster():m}videoStyle(){return!navigator.userAgent.toLowerCase().includes("chrome")&&this._posterShouldBeVisible?"opacity: 0;":m}videoRendered(e){T.forEach(t=>{e==null||e.addEventListener(t,a=>{var h;let r;t=="seeked"?r={detail:{duration:(h=this.video)==null?void 0:h.duration,embed:this.embed}}:r={detail:{embed:this.embed}},this.dispatchEvent(new CustomEvent(a.type,r))})})}render(){return g`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive||this._isFullscreen?"active_overlay":this._uploadActive?"active_upload":""}
      >
        ${this.renderCanvas()}
        ${this.src?g`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible?g` <img class="poster" .src=${this.poster()} /> `:""}

              <video
                ${D(this.videoRendered)}
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
                .src=${this.needsHls()?this.src:m}
              >
                ${this.needsHls()?m:g`<source
                      src=${this.src}
                      type=${this.fileType?"video/"+this.fileType:"video/mp4"}
                    />`}
              </video>
            `:m}
        ${this.embed?g`
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
            `:m}
      </dialog>
    `}firstUpdated(e){this.appHeight()}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}?reference_id=${q}`}sendMessage(e,t={}){if(!this.iframe.contentWindow||!this.video)return;let a=$(H({message:e},t),{embed:this.embed});this.iframe.contentWindow.postMessage(a,"*"),this.triggerEvent(e,a)}openFullscreen(){this.isFullscreen()||(this.requestFullscreen?this.requestFullscreen():this.webkitRequestFullscreen?this.webkitRequestFullscreen():this.video.webkitEnterFullscreen?this.video.webkitEnterFullscreen():(this.sendMessage("mave:open_overlay",{}),this.openOverlay()),this.video&&!this.video.paused&&(this.video.muted=!1,this.sendMessage("mave:video_muted",{muted:this.video.muted})))}closeFullscreen(){(this.isFullscreen()||this._overlayActive)&&(document.exitFullscreen&&!this._overlayActive?document.exitFullscreen():document.webkitExitFullscreen&&!this._overlayActive?document.webkitExitFullscreen():(this.sendMessage("mave:close_overlay",{}),this.closeOverlay(),this.closeDialog()))}renderCanvas(){}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){if(this.src&&!this.needsHls())return;let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}needsHls(){var e,t;return((e=this.src)==null?void 0:e.includes(".m3u8"))||((t=this.src)==null?void 0:t.includes("mux.com"))}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded||!this.needsHls())){if(Hls.isSupported()){let e=new Hls;e.config.startLevel=3,e.loadSource(this.src),e.attachMedia(this.video);let t=[];e.on(Hls.Events.MANIFEST_LOADED,(a,r)=>{t=r.levels.reverse()}),e.on(Hls.Events.LEVEL_LOADED,(a,r)=>{this._bitrate!=t[r.level].bitrate&&(this._bitrate=t[r.level].bitrate,this.sendMessage("mave:bitrate",{bitrate:this._bitrate}))}),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}appHeight(){document.documentElement.style.setProperty("--mave_embed_dialog_height",`${window.innerHeight}px`)}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:t}=this.iframe.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,r=(e>0||t>0)&&e<a;this.sendMessage(r?"mave:video_in_viewport":"mave:video_out_viewport"),this.debouncedAppHeight()}isFullscreen(){return!!document.fullscreenElement||!!document.webkitFullscreenElement||"ontouchend"in document&&this._isFullscreen}openOverlay(){this.isFullscreen()||(this._overlayActive=!0,this._blurhashShouldBeVisible&&(this._blurhashShouldBeVisible=!1),this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`))}closeOverlay(){this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"")}triggerEvent(e,t){let a=t?{detail:t}:void 0,r=new CustomEvent(e,a);this.dispatchEvent(r)}debounce(e,t){let a;return(...r)=>{clearTimeout(a),a=setTimeout(()=>{e(...r)},t)}}};s.styles=x,i([l({type:String})],s.prototype,"embed",2),i([l({type:String})],s.prototype,"reference_id",2),i([l({type:String})],s.prototype,"display_name",2),i([l({type:String})],s.prototype,"jwt",2),i([l({type:String})],s.prototype,"classname",2),i([l({type:Boolean})],s.prototype,"muted",2),i([l({type:Boolean})],s.prototype,"autoplay",2),i([l({type:Boolean})],s.prototype,"loop",2),i([l({type:String})],s.prototype,"src",2),i([l({type:String})],s.prototype,"blurhash",2),i([l({type:String,attribute:"aspect-ratio"})],s.prototype,"aspectRatio",2),i([l({type:String})],s.prototype,"width",2),i([l({type:String})],s.prototype,"height",2),i([l({type:String,attribute:"poster-image"})],s.prototype,"posterImage",2),i([l({type:String,attribute:"poster-video-source"})],s.prototype,"posterVideoSource",2),i([l({type:String,attribute:"file-type"})],s.prototype,"fileType",2),i([p("#dialog")],s.prototype,"dialog",2),i([p("#iframe")],s.prototype,"iframe",2),i([p("#video")],s.prototype,"video",2),i([p("#canvas")],s.prototype,"canvas",2),i([p("#script")],s.prototype,"script",2),i([p("#end")],s.prototype,"endElement",2),i([v()],s.prototype,"_settingsActive",2),i([v()],s.prototype,"_blurhashShouldBeVisible",2),i([v()],s.prototype,"_overlayActive",2),i([v()],s.prototype,"_isFullscreen",2),i([v()],s.prototype,"_uploadActive",2),i([v()],s.prototype,"_posterShouldBeVisible",2);customElements.get("mave-component")||customElements.define("mave-component",s);export{d as Config,s as MaveComponent};

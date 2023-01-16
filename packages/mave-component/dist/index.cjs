var g=Object.defineProperty,F=Object.defineProperties,w=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var _=(l,i,e)=>i in l?g(l,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[i]=e,E=(l,i)=>{for(var e in i||(i={}))k.call(i,e)&&_(l,e,i[e]);if(y)for(var e of y(i))V.call(i,e)&&_(l,e,i[e]);return l},H=(l,i)=>F(l,A(i));var U=(l,i)=>{for(var e in i)g(l,e,{get:i[e],enumerable:!0})},P=(l,i,e,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of L(i))!k.call(l,s)&&s!==e&&g(l,s,{get:()=>i[s],enumerable:!(t=w(i,s))||t.enumerable});return l};var z=l=>P(g({},"__esModule",{value:!0}),l),a=(l,i,e,t)=>{for(var s=t>1?void 0:t?w(i,e):i,o=l.length-1,c;o>=0;o--)(c=l[o])&&(s=(t?c(i,e,s):c(s))||s);return t&&s&&g(i,e,s),s};var B={};U(B,{Config:()=>h,MaveComponent:()=>r});module.exports=z(B);var h=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return h._inst||(h._inst=new h),h._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}};var d=require("lit"),S=require("lit/directives/ref.js"),n=require("lit/decorators.js");var $=require("lit"),x=$.css`
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
`;var v=require("lit"),m=require("lit/decorators.js");var u=class extends v.LitElement{constructor(){super(...arguments);this._ghostActive=!0;this._loaded=!0;this._delayed=!1}connectedCallback(){var e;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),window.addEventListener("resize",this.appHeight),window.addEventListener("focus",this.appHeight),this.appHeight(),setTimeout(()=>{this._ghostActive=!0,this.dialog.showModal()},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}appHeight(){document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),this.dialog.close(),window.removeEventListener("resize",this.appHeight),window.removeEventListener("focus",this.appHeight),super.disconnectedCallback()}dialogHandler(e){e.type=="close"&&window.postMessage({message:"mave:close_settings",hash:this.embed},"*"),e.target==this.dialog&&this.dialog.close()}render(){return v.html`
      <dialog
        id="dialog"
        @close=${this.dialogHandler}
        @click=${this.dialogHandler}
      >
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
      </dialog>
    `}iframeLoaded(){this._loaded=!0}};u.styles=v.css`
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
  `,a([(0,m.property)({type:String})],u.prototype,"embed",2),a([(0,m.query)("#dialog")],u.prototype,"dialog",2),a([(0,m.query)("#iframe")],u.prototype,"iframe",2),a([(0,m.state)()],u.prototype,"_ghostActive",2),a([(0,m.state)()],u.prototype,"_loaded",2),a([(0,m.state)()],u.prototype,"_delayed",2);customElements.get("mave-settings")||customElements.define("mave-settings",u);var R=crypto.getRandomValues(new Uint8Array(21)).reduce((l,i)=>l+=(i&=63)<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-",""),T=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","castchange","entercast","leavecast"],j=["mave:video_canplay","mave:video_progress","mave:video_play","mave:video_pause","mave:video_ended","mave:video_timeupdate","mave:vide_muted","mave:vide_muted","mave:video_fullscreen","mave:open_overlay","mave:close_overlay","mave:bitrate"],r=class extends d.LitElement{constructor(){super(...arguments);this._settingsActive=!1;this._blurhashShouldBeVisible=!0;this._overlayActive=!1;this._isFullscreen=!1;this._uploadActive=!1;this._posterShouldBeVisible=!0;this._hlsLoaded=!1;this._iframeReady=!1;this._initialPlayEventTriggered=!1;this.baseUrl=h.getInstance().baseUrl;this.canPlay=!1;this.loadeddata=!1;this.debouncedAppHeight=this.debounce(this.appHeight.bind(this),550)}connectedCallback(){if(super.connectedCallback(),!this.src&&this.embed){let e=`https://${h.getInstance().baseUrl}/${this.embed}/json`;(async()=>{try{let o=await(await fetch(e)).json();this.autoplay=o.autoPlay,this.loop=o.loop,this.aspectRatio=o.settingsAspectRatio,this.blurhash=o.videoBlurHash,this.src=o.videoSource,this.height=o.height,this.width=o.width,this.posterImage=o.posterImage,this.posterVideoSource=o.posterVideoSource}catch(s){console.log("error",s)}})()}window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this));for(let e of["fullscreenchange","webkitfullscreenchange"])this.addEventListener(e,this.fullscreenChangeHandler.bind(this));this._hlsLoaded||this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));for(let t of["fullscreenchange","webkitfullscreenchange"])this.removeEventListener(t,this.fullscreenChangeHandler.bind(this));let e=document.querySelector("mave-settings");e&&e.remove(),super.disconnectedCallback()}listEvents(){return[...T,...j]}play(){var e,t,s;this.video&&((e=this.video)==null?void 0:e.currentTime)>=((t=this.video)==null?void 0:t.duration)&&(this.video.currentTime=0),(s=this.video)==null||s.play()}pause(){var e;(e=this.video)==null||e.pause()}setVolume(e){this.video&&(e>0&&(this.video.muted=!1),this.video.volume=e,this.sendMessage("mave:volume_change",{volume:e}))}setMuted(e){this.video&&(this.video.muted=e,this.sendMessage("mave:video_muted",{muted:this.video.muted}))}setCurrentTime(e){this.video&&(this.video.currentTime=e)}getCurrentTime(){var e;return(e=this.video)==null?void 0:e.currentTime}toggleEndScreen(){this.endElement&&(this.endElement.style.display==="block"?this.endElement.style.display="none":this.endElement.style.display="block")}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=2&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},1250),this.loadeddata=!0),!this.canPlay){let e=()=>{var t;this._iframeReady||(this.sendMessage("mave:video_canplay",{duration:(t=this.video)==null?void 0:t.duration}),setTimeout(e.bind(this),25),this.canPlay=!0)};e()}}videoHandler(e){if(!!this.video)switch(e.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let t=this.video.buffered.length-1,s=Math.round(this.video.buffered.end(t)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:s})}catch{}break;case"play":if(this._posterShouldBeVisible&&(document.webkitExitFullscreen?setTimeout(()=>{this._posterShouldBeVisible=!1},450):this._posterShouldBeVisible=!1),this._iframeReady){this.timeUpdate();let t=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:t,bitrate:this._bitrate,duration:this.video.duration}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"volumechange":break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25),e.type=="ended"&&!this.loop&&this.endElement&&this.endElement.innerHTML.length>0&&(this.endElement.style.display="block");break}}messageHandler(e){var o;let{data:t}=e,{message:s}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(s){case"mave:player_ready":if(this._iframeReady=!0,this.triggerEvent("ready",{videoElement:this.video}),!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let p=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:p,bitrate:this._bitrate,duration:this.video.duration}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let c=t.event;switch(Object.keys(c)[0]){case"play":c.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=c.muted,this.sendMessage("mave:video_muted",{muted:this.video.muted});break;case"volume":this.video.volume=c.volume;break;case"currentTime":this.video.currentTime=c.currentTime;break}break;case"mave:open_popup_overlay":if(this.isFullscreen())return;this.openOverlay();break;case"mave:close_popup_overlay":if(this.isFullscreen())return;this.closeOverlay();break;case"mave:open_dialog":this.dialog.showModal(),this._uploadActive=!0;break;case"mave:close_dialog":this.dialog.close(),this._uploadActive=!1;break;case"mave:toggle_fullscreen":this.isFullscreen()||this._overlayActive?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this._overlayActive||this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let p=document.createElement("mave-settings");p.setAttribute("embed",this.embed),document.body.appendChild(p)}else{let p=document.querySelector("mave-settings");p&&p.remove()}break;case"mave:close_settings":this._settingsActive=!1;let f=document.querySelector("mave-settings");f&&f.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((o=this.video)==null?void 0:o.paused)&&this.video.currentTime<this.video.duration&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this._blurhashShouldBeVisible=!1,this.loadeddata=!1,this.canPlay=!1,this.src!=t.video_src&&(this.src=t.video_src),this.fileType!=t.file_type&&(this.fileType=t.file_type),this.autoplay!=t.autoplay&&(this.autoplay=t.autoplay),this.blurhash!=t.blurhash&&(this.blurhash=t.blurhash),this.posterImage!=t.poster_image&&(this.posterImage=t.poster_image),this.posterVideoSource!=t.poster_video_source&&(this.posterVideoSource=t.poster_video_source);break}}fullscreenChangeHandler(){this._isFullscreen=!this._isFullscreen,this.sendMessage("mave:video_fullscreen",{fullscreen:this.isFullscreen()})}generateStyle(){let e=document.createElement("style");if((this._overlayActive||this._isFullscreen)&&(e.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)e.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; } canvas, .poster { width: ${this.width}; object-fit: cover; } #video, #video[poster] { object-fit: cover; }`;else if(this.aspectRatio){let t=this.aspectRatio.includes(":")?`${this.aspectRatio.split(":")[0]} / ${this.aspectRatio.split(":")[1]}`:"16 / 9";e.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${t}; width: 100%; min-width: 320px; min-height: 180px; } canvas, .poster { aspect-ratio: ${t}; object-fit: contain; } #video, #video[poster] { object-fit: contain; }`}else e.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; } #video, #video[poster] { object-fit: contain; }";return e}closeDialog(){this.isFullscreen()?this.closeFullscreen():(this._overlayActive=!1,this._uploadActive=!1,this.sendMessage("mave:close_overlay"))}clickDialog(e){this._uploadActive&&e.target==this.dialog&&(this.closeDialog(),this.sendMessage("mave:cancel_upload"))}poster(){return this.posterImage&&!this.autoplay?this.posterImage:d.nothing}videoPoster(){return navigator.userAgent.toLowerCase().includes("chrome")?this.poster():d.nothing}videoStyle(){return!navigator.userAgent.toLowerCase().includes("chrome")&&this._posterShouldBeVisible?"opacity: 0;":d.nothing}videoRendered(e){T.forEach(t=>{e==null||e.addEventListener(t,s=>{var c;let o;t=="seeked"?o={detail:{duration:(c=this.video)==null?void 0:c.duration,embed:this.embed}}:o={detail:{embed:this.embed}},this.dispatchEvent(new CustomEvent(s.type,o))})})}render(){return d.html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @click=${this.clickDialog}
        @close=${this.closeDialog}
        class=${this._overlayActive||this._isFullscreen?"active_overlay":this._uploadActive?"active_upload":""}
      >
        ${this.renderCanvas()}
        ${this.src?d.html`
              ${this.initiateScript()}
              ${this._posterShouldBeVisible?d.html` <img class="poster" .src=${this.poster()} /> `:""}

              <video
                ${(0,S.ref)(this.videoRendered)}
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
                .src=${this.needsHls()?this.src:d.nothing}
              >
                ${this.needsHls()?d.nothing:d.html`<source
                      src=${this.src}
                      type=${this.fileType?"video/"+this.fileType:"video/mp4"}
                    />`}
              </video>
            `:d.nothing}
        ${this.embed?d.html`
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
            `:d.nothing}
      </dialog>
    `}firstUpdated(e){this.appHeight()}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}?reference_id=${R}`}sendMessage(e,t={}){if(!this.iframe.contentWindow||!this.video)return;let s=H(E({message:e},t),{embed:this.embed});this.iframe.contentWindow.postMessage(s,"*"),this.triggerEvent(e,s)}openFullscreen(){this.isFullscreen()||(this.requestFullscreen?this.requestFullscreen():this.webkitRequestFullscreen?this.webkitRequestFullscreen():this.video.webkitEnterFullscreen?this.video.webkitEnterFullscreen():(console.log("going for open_overlay"),this.sendMessage("mave:open_overlay",{}),this.openOverlay()),this.video&&!this.video.paused&&(this.video.muted=!1,this.sendMessage("mave:video_muted",{muted:this.video.muted})))}closeFullscreen(){(this.isFullscreen()||this._overlayActive)&&(document.exitFullscreen&&!this._overlayActive?document.exitFullscreen():document.webkitExitFullscreen&&!this._overlayActive?document.webkitExitFullscreen():(this.sendMessage("mave:close_overlay",{}),this.closeOverlay(),this.closeDialog()))}renderCanvas(){}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){if(this.src&&!this.needsHls())return;let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}needsHls(){var e,t;return((e=this.src)==null?void 0:e.includes(".m3u8"))||((t=this.src)==null?void 0:t.includes("mux.com"))}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded||!this.needsHls())){if(Hls.isSupported()){let e=new Hls;e.config.startLevel=3,e.loadSource(this.src),e.attachMedia(this.video);let t=[];e.on(Hls.Events.MANIFEST_LOADED,(s,o)=>{t=o.levels.reverse()}),e.on(Hls.Events.LEVEL_LOADED,(s,o)=>{this._bitrate!=t[o.level].bitrate&&(this._bitrate=t[o.level].bitrate,this.sendMessage("mave:bitrate",{bitrate:this._bitrate}))}),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}appHeight(){document.documentElement.style.setProperty("--mave_embed_dialog_height",`${window.innerHeight}px`)}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:t}=this.iframe.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,o=(e>0||t>0)&&e<s;this.sendMessage(o?"mave:video_in_viewport":"mave:video_out_viewport"),this.debouncedAppHeight()}isFullscreen(){return!!document.fullscreenElement||!!document.webkitFullscreenElement||"ontouchend"in document&&this._isFullscreen}openOverlay(){this.isFullscreen()||(this._overlayActive=!0,this._blurhashShouldBeVisible&&(this._blurhashShouldBeVisible=!1),this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`))}closeOverlay(){this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"")}triggerEvent(e,t){let s=t?{detail:t}:void 0,o=new CustomEvent(e,s);this.dispatchEvent(o)}debounce(e,t){let s;return(...o)=>{clearTimeout(s),s=setTimeout(()=>{e(...o)},t)}}};r.styles=x,a([(0,n.property)({type:String})],r.prototype,"embed",2),a([(0,n.property)({type:String})],r.prototype,"reference_id",2),a([(0,n.property)({type:String})],r.prototype,"display_name",2),a([(0,n.property)({type:String})],r.prototype,"jwt",2),a([(0,n.property)({type:String})],r.prototype,"classname",2),a([(0,n.property)({type:Boolean})],r.prototype,"muted",2),a([(0,n.property)({type:Boolean})],r.prototype,"autoplay",2),a([(0,n.property)({type:Boolean})],r.prototype,"loop",2),a([(0,n.property)({type:String})],r.prototype,"src",2),a([(0,n.property)({type:String})],r.prototype,"blurhash",2),a([(0,n.property)({type:String,attribute:"aspect-ratio"})],r.prototype,"aspectRatio",2),a([(0,n.property)({type:String})],r.prototype,"width",2),a([(0,n.property)({type:String})],r.prototype,"height",2),a([(0,n.property)({type:String,attribute:"poster-image"})],r.prototype,"posterImage",2),a([(0,n.property)({type:String,attribute:"poster-video-source"})],r.prototype,"posterVideoSource",2),a([(0,n.property)({type:String,attribute:"file-type"})],r.prototype,"fileType",2),a([(0,n.query)("#dialog")],r.prototype,"dialog",2),a([(0,n.query)("#iframe")],r.prototype,"iframe",2),a([(0,n.query)("#video")],r.prototype,"video",2),a([(0,n.query)("#canvas")],r.prototype,"canvas",2),a([(0,n.query)("#script")],r.prototype,"script",2),a([(0,n.query)("#end")],r.prototype,"endElement",2),a([(0,n.state)()],r.prototype,"_settingsActive",2),a([(0,n.state)()],r.prototype,"_blurhashShouldBeVisible",2),a([(0,n.state)()],r.prototype,"_overlayActive",2),a([(0,n.state)()],r.prototype,"_isFullscreen",2),a([(0,n.state)()],r.prototype,"_uploadActive",2),a([(0,n.state)()],r.prototype,"_posterShouldBeVisible",2);customElements.get("mave-component")||customElements.define("mave-component",r);0&&(module.exports={Config,MaveComponent});

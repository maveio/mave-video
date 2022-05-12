(function(c,a){typeof exports=="object"&&typeof module!="undefined"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(c=typeof globalThis!="undefined"?globalThis:c||self,a(c.Mave={},c.Vue))})(this,function(c,a){"use strict";class u{constructor(){this._baseUrl="mave.io"}static getInstance(){return u._inst||(u._inst=new u),u._inst}get baseUrl(){return this._baseUrl}set baseUrl(i){this._baseUrl=i}}var v=Object.defineProperty,_=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,$=(e,i,t)=>i in e?v(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,T=(e,i)=>{for(var t in i||(i={}))k.call(i,t)&&$(e,t,i[t]);if(w)for(var t of w(i))S.call(i,t)&&$(e,t,i[t]);return e},A=(e,i)=>{for(var t in i)v(e,t,{get:i[t],enumerable:!0})},H=(e,i,t,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of E(i))!k.call(e,n)&&n!==t&&v(e,n,{get:()=>i[n],enumerable:!(d=_(i,n))||d.enumerable});return e},j=e=>H(v({},"__esModule",{value:!0}),e),s=(e,i,t,d)=>{for(var n=d>1?void 0:d?_(i,t):i,h=e.length-1,l;h>=0;h--)(l=e[h])&&(n=(d?l(i,t,n):l(n))||n);return d&&n&&v(i,t,n),n},x={};A(x,{Config:()=>p,MaveComponent:()=>r}),module.exports=j(x);var p=class{constructor(){this._baseUrl="mave.io"}static getInstance(){return p._inst||(p._inst=new p),p._inst}get baseUrl(){return this._baseUrl}set baseUrl(e){this._baseUrl=e}},b=require("lit"),o=require("lit/decorators.js"),U=require("lit"),M=U.css`
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
`,P=require("@fpapado/blurhash"),f=require("lit"),y=require("lit/decorators.js"),m=class extends f.LitElement{constructor(){super(...arguments),this._ghostActive=!0,this._loaded=!0,this._delayed=!1}connectedCallback(){var e;super.connectedCallback(),setTimeout(()=>{this._delayed=!0},250),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; padding-right: 14rem; transition: padding 150ms; transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`),setTimeout(()=>{this._ghostActive=!0},0),(e=this.iframe)==null||e.addEventListener("load",this.iframeLoaded.bind(this))}disconnectedCallback(){var e;document.documentElement.setAttribute("style",this._globalStyle||""),(e=this.iframe)==null||e.removeEventListener("load",this.iframeLoaded.bind(this)),super.disconnectedCallback()}render(){return f.html`
      <div>
        <div class=${this._ghostActive?"ghost active":"ghost"}></div>
        <div class="settings">
          <iframe
            src="https://${p.getInstance().baseUrl}/e/${this.embed}/settings"
            frameborder="0"
            sandbox="allow-scripts allow-forms allow-same-origin"
            allow="autoplay; fullscreen; clipboard-write;"
            width="100%"
            height="100%"
            class=${this._loaded&&this._delayed?"loaded":"initial"}
          ></iframe>
        </div>
      </div>
    `}iframeLoaded(){this._loaded=!0}};m.styles=f.css`
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
  `,s([(0,y.property)({type:String})],m.prototype,"embed",2),s([(0,y.query)("#iframe")],m.prototype,"iframe",2),s([(0,y.state)()],m.prototype,"_ghostActive",2),s([(0,y.state)()],m.prototype,"_loaded",2),s([(0,y.state)()],m.prototype,"_delayed",2),customElements.get("mave-settings")||customElements.define("mave-settings",m);var r=class extends b.LitElement{constructor(){super(...arguments),this._settingsActive=!1,this._blurhashShouldBeVisible=!0,this._overlayActive=!1,this._hlsLoaded=!1,this._iframeReady=!1,this._initialPlayEventTriggered=!1,this.baseUrl=p.getInstance().baseUrl,this.canPlay=!1,this.loadeddata=!1}connectedCallback(){var e;super.connectedCallback(),window.addEventListener("message",this.messageHandler.bind(this)),window.addEventListener("load",this.visibilityHandler.bind(this)),window.addEventListener("scroll",this.visibilityHandler.bind(this)),window.addEventListener("resize",this.visibilityHandler.bind(this)),((e=this.video)==null?void 0:e.canPlayType("application/vnd.apple.mpegurl"))&&!this._hlsLoaded&&this.scriptHandler()}disconnectedCallback(){window.removeEventListener("message",this.messageHandler.bind(this)),window.removeEventListener("load",this.visibilityHandler.bind(this)),window.removeEventListener("scroll",this.visibilityHandler.bind(this)),window.removeEventListener("resize",this.visibilityHandler.bind(this));let e=document.querySelector("mave-settings");e&&e.remove(),super.disconnectedCallback()}initializeVideo(){if(!this.loadeddata&&this.video&&this.video.readyState>=1&&(setTimeout(()=>{this.blurhash&&(this._blurhashShouldBeVisible=!1)},500),this.loadeddata=!0),!this.canPlay){let e=()=>{this._iframeReady||(this.sendMessage("mave:video_canplay"),setTimeout(e.bind(this),25),this.canPlay=!0)};e()}}videoHandler(e){if(this.video)switch(e.type){case"loadeddata":case"canplay":this.initializeVideo();break;case"progress":(!this.canPlay||!this.loadeddata)&&this.initializeVideo();try{let i=this.video.buffered.length-1,t=Math.round(this.video.buffered.end(i)/this.video.duration*100);this.sendMessage("mave:video_progress",{buffer:t})}catch{}break;case"play":if(this._iframeReady){this.timeUpdate();let i=this.autoplay&&!this._initialPlayEventTriggered||this.video.currentTime<1e-4?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:i}),this._initialPlayEventTriggered=!0}break;case"timeupdate":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime});break;case"pause":case"ended":this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0),setTimeout(()=>{this.sendMessage(e.type=="ended"?"mave:video_ended":"mave:video_pause")},25);break}}messageHandler(e){var i;let{data:t}=e,{message:d}=t;if(!(!this.isConnected||!t||t.hash!=this.embed))switch(d){case"mave:player_ready":if(this._iframeReady=!0,!this._initialPlayEventTriggered&&this.video&&!this.video.paused){let l=this.autoplay?0:this.video.currentTime;this.sendMessage("mave:video_play",{currentTime:l}),this._initialPlayEventTriggered=!0}break;case"mave:player_event":if(!this.video)return;let n=t.event;switch(Object.keys(n)[0]){case"play":n.play?this.video.play():this.video.pause();break;case"muted":this.video.muted=n.muted;break;case"volume":this.video.volume=n.volume;break;case"currentTime":this.video.currentTime=n.currentTime;break}break;case"mave:open_popup_overlay":this._overlayActive=!0,this.dialog.showModal(),this._globalStyle=document.documentElement.getAttribute("style")||"",document.documentElement.setAttribute("style",`${this._globalStyle}; overflow: hidden;`);break;case"mave:close_popup_overlay":this.dialog.close(),this._overlayActive=!1,document.documentElement.setAttribute("style",this._globalStyle||"");break;case"mave:toggle_fullscreen":document.fullscreenElement?this.closeFullscreen():this.openFullscreen();break;case"mave:open_fullscreen":this.openFullscreen();break;case"mave:close_fullscreen":this.closeFullscreen();break;case"mave:open_settings":if(this._settingsActive=!this._settingsActive,this._settingsActive){let l=document.createElement("mave-settings");l.setAttribute("embed",this.embed),document.body.appendChild(l)}else{let l=document.querySelector("mave-settings");l&&l.remove()}break;case"mave:close_settings":this._settingsActive=!1;let h=document.querySelector("mave-settings");h&&h.remove();break;case"mave:update_embed_settings":this.aspectRatio=t.aspect_ratio_enabled?t.aspect_ratio:void 0,this.width=t.aspect_ratio_enabled?void 0:t.width,this.height=t.aspect_ratio_enabled?void 0:t.height,this.loop=t.loop,this.autoplay=t.autoplay_enabled,this.autoplay&&((i=this.video)==null?void 0:i.paused)&&this.video.play(),this.visibilityHandler();break;case"mave:request_in_viewport":setTimeout(()=>{this.visibilityHandler()},20);break;case"mave:render_video":this._hlsLoaded=!1,this.src=t.video_src,this.autoplay=t.autoplay,t.blurhash&&(this.blurhash=t.blurhash);break}}generateStyle(){let e=document.createElement("style");if(this._overlayActive&&(e.textContent=":host { overflow: hidden; width: 100%; height: 100%; }"),this.width&&this.height)e.textContent=`:host { display: block; overflow: hidden; width: ${this.width}; height: ${this.height}; min-width: 320px; min-height: 180px; }`;else if(this.aspectRatio){let[i,t]=this.aspectRatio.split(":");e.textContent=`:host { display: block; overflow: hidden; aspect-ratio: ${i} / ${t}; width: 100%; min-width: 320px; min-height: 180px; }`}else e.textContent=":host { display: block; overflow: hidden; aspect-ratio: 16 / 9; width: 100%; min-width: 320px; min-height: 180px; }";return e}closeDialog(){this._overlayActive=!1,this.sendMessage("mave:closing_overlay")}render(){return b.html`
      ${this.generateStyle()}
      <dialog
        id="dialog"
        @close=${this.closeDialog}
        class=${this._overlayActive?"active_overlay":""}
      >
        ${this.renderCanvas()}
        ${this.src?b.html`
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
        ${this.embed?b.html`
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
    `}generateUrl(){return this.jwt?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.jwt}`:this.reference_id&&this.display_name?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}&display_name=${this.display_name}`:this.reference_id?`https://${this.baseUrl}/e/${this.embed}?reference_id=${this.reference_id}`:this.display_name?`https://${this.baseUrl}/e/${this.embed}?display_name=${this.display_name}`:`https://${this.baseUrl}/e/${this.embed}`}sendMessage(e,i={}){if(!this.iframe.contentWindow||!this.video)return;let t=T({message:e},i);this.iframe.contentWindow.postMessage(t,"*")}openFullscreen(){document.fullscreenElement||(this.requestFullscreen?this.requestFullscreen():this.dialog.webkitRequestFullScreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!1}))}closeFullscreen(){document.fullscreenElement&&(document.exitFullscreen(),this.sendMessage("mave:video_fullscreen",{fullscreen:!0}))}renderCanvas(){if(!this.blurhash||!this._blurhashShouldBeVisible)return;let e=document.createElement("canvas"),i=(0,P.decode)(this.blurhash,320,180),t=e.getContext("2d"),d=t==null?void 0:t.createImageData(320,180);return d==null||d.data.set(i),d&&(t==null||t.putImageData(d,0,0)),e}timeUpdate(){this._animationFrame=requestAnimationFrame(()=>{!this.video||(this.sendMessage("mave:video_timeupdate",{currentTime:this.video.currentTime}),this.timeUpdate())})}initiateScript(){let e=document.createElement("script");return e.onload=this.scriptHandler.bind(this),e.src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5/hls.min.js",e}scriptHandler(){if(!(!this.video||!this.src||this._hlsLoaded)){if(this.video.canPlayType("application/vnd.apple.mpegurl"))this.video.src=this.src;else if(Hls.isSupported()){let e=new Hls;e.loadSource(this.src),e.attachMedia(this.video),e.subtitleTrack=0,e.subtitleDisplay=!0}this._hlsLoaded=!0}}visibilityHandler(){if(!this.iframe||!this.iframe.contentWindow)return;let{top:e,bottom:i}=this.iframe.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,d=(e>0||i>0)&&e<t;this.sendMessage(d?"mave:video_in_viewport":"mave:video_out_viewport")}};r.styles=M,s([(0,o.property)({type:String})],r.prototype,"embed",2),s([(0,o.property)({type:String})],r.prototype,"reference_id",2),s([(0,o.property)({type:String})],r.prototype,"display_name",2),s([(0,o.property)({type:String})],r.prototype,"jwt",2),s([(0,o.property)({type:String})],r.prototype,"classname",2),s([(0,o.property)({type:Boolean})],r.prototype,"muted",2),s([(0,o.property)({type:Boolean})],r.prototype,"autoplay",2),s([(0,o.property)({type:Boolean})],r.prototype,"loop",2),s([(0,o.property)({type:String})],r.prototype,"src",2),s([(0,o.property)({type:String})],r.prototype,"blurhash",2),s([(0,o.property)({type:String,attribute:"aspect-ratio"})],r.prototype,"aspectRatio",2),s([(0,o.property)({type:String})],r.prototype,"width",2),s([(0,o.property)({type:String})],r.prototype,"height",2),s([(0,o.query)("#dialog")],r.prototype,"dialog",2),s([(0,o.query)("#iframe")],r.prototype,"iframe",2),s([(0,o.query)("#video")],r.prototype,"video",2),s([(0,o.query)("#canvas")],r.prototype,"canvas",2),s([(0,o.query)("#script")],r.prototype,"script",2),s([(0,o.state)()],r.prototype,"_settingsActive",2),s([(0,o.state)()],r.prototype,"_blurhashShouldBeVisible",2),s([(0,o.state)()],r.prototype,"_overlayActive",2),customElements.get("mave-component")||customElements.define("mave-component",r);const q=["src","blurhash","loop","autoplay","muted","width","height","aspectRatio"],C=a.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},async setup(e){let i,t;const d=e,n=`https://${u.getInstance().baseUrl}/${d.embed}/json`,h=async()=>{try{return await(await fetch(n)).json()}catch(g){return console.log("error",g),null}},l=([i,t]=a.withAsyncContext(()=>h()),i=await i,t(),i),B=l.settingsAspectRatio||l.videoAspectRatio;return(g,R)=>(a.openBlock(),a.createElementBlock("mave-component",a.mergeProps(g.$props,{src:a.unref(l).videoSource,blurhash:a.unref(l).videoBlurHash,loop:a.unref(l).loop,autoplay:a.unref(l).autoPlay,muted:a.unref(l).autoPlay,width:a.unref(l).width,height:a.unref(l).height,aspectRatio:a.unref(B)}),null,16,q))}}),L=a.defineComponent({props:{embed:null,reference_id:null,display_name:null,jwt:null,muted:{type:Boolean},autoplay:{type:Boolean},loop:{type:Boolean},float:null,src:null,blurhash:null,aspectRatio:null,width:null,height:null,className:null,style:null},setup(e){return(i,t)=>(a.openBlock(),a.createBlock(a.Suspense,null,{default:a.withCtx(()=>[a.createVNode(C,a.normalizeProps(a.guardReactiveProps(i.$props)),null,16)]),_:1}))}});c.Mave=L,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

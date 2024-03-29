import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement, nothing } from 'lit';

declare class Config {
    private _baseUrl;
    private static _inst;
    private constructor();
    static getInstance(): Config;
    get baseUrl(): string;
    set baseUrl(val: string);
}

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
declare class MaveComponent extends LitElement {
    static styles: lit.CSSResult;
    embed: string;
    reference_id?: string;
    display_name?: string;
    jwt?: string;
    classname?: string;
    muted?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    src?: string;
    blurhash?: string;
    aspectRatio?: string;
    width?: string;
    height?: string;
    posterImage?: string;
    posterVideoSource?: string;
    fileType?: string;
    dialog: HTMLDialogElement;
    iframe: HTMLIFrameElement;
    video?: HTMLVideoElement;
    canvas?: HTMLCanvasElement;
    script?: HTMLScriptElement;
    endElement?: HTMLElement;
    private _settingsActive;
    private _blurhashShouldBeVisible;
    private _overlayActive;
    private _isFullscreen;
    private _uploadActive;
    private _posterShouldBeVisible;
    private _hlsLoaded;
    private _iframeReady;
    private _initialPlayEventTriggered;
    private _animationFrame?;
    private _bitrate?;
    private baseUrl;
    private _globalStyle?;
    private canPlay;
    private loadeddata;
    private debouncedAppHeight;
    connectedCallback(): void;
    disconnectedCallback(): void;
    listEvents(): string[];
    play(): void;
    pause(): void;
    setVolume(volume: number): void;
    setMuted(muted: boolean): void;
    setCurrentTime(time: number): void;
    getCurrentTime(): number | undefined;
    toggleEndScreen(): void;
    initializeVideo(): void;
    videoHandler(event: Event): void;
    messageHandler(event: IEvent): void;
    fullscreenChangeHandler(): void;
    generateStyle(): HTMLStyleElement;
    closeDialog(): void;
    clickDialog(e: Event): void;
    poster(): string | typeof nothing;
    videoPoster(): string | typeof nothing;
    videoStyle(): typeof nothing | "opacity: 0;";
    videoRendered(video?: Element): void;
    render(): lit_html.TemplateResult<1>;
    firstUpdated(changedProperties: any): void;
    private generateUrl;
    private sendMessage;
    private openFullscreen;
    private closeFullscreen;
    private renderCanvas;
    private timeUpdate;
    private initiateScript;
    private needsHls;
    private scriptHandler;
    private appHeight;
    private visibilityHandler;
    private isFullscreen;
    private openOverlay;
    private closeOverlay;
    private triggerEvent;
    private debounce;
}

export { Config, MaveComponent };

import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement } from 'lit';

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
    dialog: HTMLDialogElement;
    iframe: HTMLIFrameElement;
    video?: HTMLVideoElement;
    canvas?: HTMLCanvasElement;
    script?: HTMLScriptElement;
    private _settingsActive;
    private _blurhashShouldBeVisible;
    private _overlayActive;
    private _hlsLoaded;
    private _iframeReady;
    private _initialPlayEventTriggered;
    private _animationFrame?;
    private _bitrate?;
    private baseUrl;
    private _globalStyle?;
    private canPlay;
    private loadeddata;
    connectedCallback(): void;
    disconnectedCallback(): void;
    initializeVideo(): void;
    videoHandler(event: Event): void;
    messageHandler(event: IEvent): void;
    generateStyle(): HTMLStyleElement;
    closeDialog(): void;
    poster(): string;
    render(): lit_html.TemplateResult<1>;
    private generateUrl;
    private sendMessage;
    private openFullscreen;
    private closeFullscreen;
    private renderCanvas;
    private timeUpdate;
    private initiateScript;
    private scriptHandler;
    private visibilityHandler;
}

export { Config, MaveComponent };

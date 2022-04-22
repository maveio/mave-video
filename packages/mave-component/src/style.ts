import { css } from "lit";

export const style = css`
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
`;

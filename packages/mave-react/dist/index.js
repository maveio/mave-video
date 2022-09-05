var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/Mave.tsx
import React, { useEffect, useState } from "react";

// ../config/config.ts
var Config = class {
  constructor() {
    this._baseUrl = "mave.io";
  }
  static getInstance() {
    if (!Config._inst) {
      Config._inst = new Config();
    }
    return Config._inst;
  }
  get baseUrl() {
    return this._baseUrl;
  }
  set baseUrl(val) {
    this._baseUrl = val;
  }
};

// src/Mave.tsx
import "@maveio/mave-component";
var Mave = (props) => {
  const [autoplay, setAutoplay] = useState(void 0);
  const [loop, setLoop] = useState(void 0);
  const [settingsAspectRatio, setSettingsAspectRatio] = useState(void 0);
  const [settingsFloat, setSettingsFloat] = useState(void 0);
  const [videoBlurHash, setVideoBlurHash] = useState(void 0);
  const [videoSource, setVideoSource] = useState(void 0);
  const [videoAspectRatio, setVideoAspectRatio] = useState(void 0);
  const [height, setHeight] = useState(void 0);
  const [width, setWidth] = useState(void 0);
  const [posterImage, setPosterImage] = useState(void 0);
  const [posterVideoSource, setPosterVideoSource] = useState(void 0);
  useEffect(() => {
    const url = `https://${Config.getInstance().baseUrl}/${props.embed}/json`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAutoplay(json.autoPlay);
        setLoop(json.loop);
        setSettingsAspectRatio(json.settingsAspectRatio);
        setSettingsFloat(json.settingsFloat);
        setVideoBlurHash(json.videoBlurHash);
        setVideoSource(json.videoSource);
        setVideoAspectRatio(json.videoAspectRatio);
        setHeight(json.height);
        setWidth(json.width);
        setPosterImage(json.posterImage);
        setPosterVideoSource(json.posterVideoSource);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const attributes = {
    embed: props.embed,
    reference_id: props.reference_id,
    display_name: props.display_name,
    jwt: props.jwt,
    float: settingsFloat,
    src: videoSource,
    blurhash: videoBlurHash,
    className: props.className,
    style: props.style,
    posterImage: props.posterImage,
    posterVideoSource: props.posterVideoSource
  };
  if (loop) {
    attributes.loop = loop;
  }
  if (autoplay) {
    attributes.autoplay = autoplay;
    attributes.muted = autoplay;
  }
  if (width && height) {
    attributes.width = width;
    attributes.height = height;
  }
  if (settingsAspectRatio || videoAspectRatio) {
    attributes.aspectRatio = settingsAspectRatio || videoAspectRatio;
  }
  return /* @__PURE__ */ React.createElement("mave-component", __spreadValues({
    class: attributes.className
  }, attributes));
};
export {
  Mave
};

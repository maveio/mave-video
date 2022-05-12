var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Mave: () => Mave
});
module.exports = __toCommonJS(src_exports);

// src/Mave.tsx
var import_react = __toESM(require("react"));

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
var import_mave_component = require("@maveio/mave-component");
var Mave = (props) => {
  const [autoplay, setAutoplay] = (0, import_react.useState)(void 0);
  const [loop, setLoop] = (0, import_react.useState)(void 0);
  const [settingsAspectRatio, setSettingsAspectRatio] = (0, import_react.useState)(void 0);
  const [settingsFloat, setSettingsFloat] = (0, import_react.useState)(void 0);
  const [videoBlurHash, setVideoBlurHash] = (0, import_react.useState)(void 0);
  const [videoSource, setVideoSource] = (0, import_react.useState)(void 0);
  const [videoAspectRatio, setVideoAspectRatio] = (0, import_react.useState)(void 0);
  const [height, setHeight] = (0, import_react.useState)(void 0);
  const [width, setWidth] = (0, import_react.useState)(void 0);
  (0, import_react.useEffect)(() => {
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
    style: props.style
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
  return /* @__PURE__ */ import_react.default.createElement("mave-component", __spreadValues({
    class: attributes.className
  }, attributes));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Mave
});

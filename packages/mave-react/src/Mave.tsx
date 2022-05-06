import React, { useEffect, useState } from "react";
import { Config } from "../../config/config";
import "@maveio/mave-component";

export interface MaveProps {
  embed: string;
  reference_id?: string;
  display_name?: string;
  jwt?: string;
  muted?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  float?: string;
  src?: string;
  blurhash?: string;
  aspectRatio?: string;
  width?: string;
  height?: string;
  className?: string;
  style?: string;
}

export const Mave = (props: MaveProps) => {
  const [autoplay, setAutoplay] = useState(undefined);
  const [loop, setLoop] = useState(undefined);
  const [settingsAspectRatio, setSettingsAspectRatio] = useState(undefined);
  const [settingsFloat, setSettingsFloat] = useState(undefined);
  const [videoBlurHash, setVideoBlurHash] = useState(undefined);
  const [videoSource, setVideoSource] = useState(undefined);
  const [videoAspectRatio, setVideoAspectRatio] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    const url = `https://${Config.getInstance().baseUrl}/${props.embed}/json`;

    const fetchData = async () => {
      try {
        // @ts-ignore
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
        // @ts-ignore
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const attributes: MaveProps = {
    embed: props.embed,
    reference_id: props.reference_id,
    display_name: props.display_name,
    jwt: props.jwt,
    float: settingsFloat,
    src: videoSource,
    blurhash: videoBlurHash,
    className: props.className,
    style: props.style,
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

  return (
    // @ts-ignore
    <mave-component
      class={attributes.className}
      {...attributes}
      // @ts-ignore
    ></mave-component>
  );
};

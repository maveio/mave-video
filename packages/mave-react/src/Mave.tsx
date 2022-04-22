import React, { useEffect, useState } from "react";
import "@maveio/mave-component";

export interface MaveProps {
  embed: string;
  reference_id?: string;
  display_name?: string;
  jwt?: string;
}

export const Mave = (props: MaveProps) => {
  const [autoplay, setAutoplay] = useState(null);
  const [loop, setLoop] = useState(null);
  const [settingsAspectRatio, setSettingsAspectRatio] = useState(null);
  const [settingsFloat, setSettingsFloat] = useState(null);
  const [videoBlurHash, setVideoBlurHash] = useState(null);
  const [videoSource, setVideoSource] = useState(null);
  const [videoAspectRatio, setVideoAspectRatio] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const url = `https://mave.io/${props.embed}/json`;

    const fetchData = async () => {
      try {
        // @ts-ignore
        const response = await fetch(url);
        const json = await response.json();
        setAutoplay(json.autoplay);
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

  return (
    // @ts-ignore
    <mave-component
      embed={props.embed}
      reference_id={props.reference_id}
      display_name={props.display_name}
      jwt={props.jwt}
      muted={autoplay}
      autoplay={autoplay}
      loop={loop}
      float={settingsFloat}
      src={videoSource}
      blurhash={videoBlurHash}
      aspectRatio={settingsAspectRatio || videoAspectRatio}
      width={width}
      height={height}
      // @ts-ignore
    ></mave-component>
  );
};

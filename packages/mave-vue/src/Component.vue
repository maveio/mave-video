<script setup lang="ts">
  import { defineProps } from "vue"
  import { Config } from "../../config/config";
  import "@maveio/mave-component";
  
  // not supported by vue
  // import type { MaveProps } from "../../props/Mave"

  interface MaveProps {
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

  const props = defineProps<MaveProps>()

  const url = `https://${Config.getInstance().baseUrl}/${props.embed}/json`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      // @ts-ignore
      console.log("error", error);
      return null;
    }
  };

  const data = await fetchData();
  const aspectRatio = data.settingsAspectRatio || data.videoAspectRatio;
</script>
<template>
  <mave-component 
    v-bind="$props" 
    v-bind:src="data.videoSource" 
    v-bind:blurhash="data.videoBlurHash"
    v-bind:loop="data.loop"
    v-bind:autoplay="data.autoPlay"
    v-bind:muted="data.autoPlay"
    v-bind:width="data.width"
    v-bind:height="data.height"
    v-bind:aspectRatio="aspectRatio"
  />
</template>

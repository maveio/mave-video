<script setup lang="ts">
  import { defineProps } from "vue"
  import Component from "./Component.vue"
  
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
    posterImage?: string;
    posterVideoSource?: string;
  }

  const props = defineProps<MaveProps>()
</script>
<template>
  <Suspense>
    <Component v-bind="$props" />
  </Suspense>
</template>

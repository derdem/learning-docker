<template>
  <CompleteWidthTemplateVue>
    <div class="fixed">
      <div>Scroll position</div>
      <div>x: {{ xScroll }}</div>
      <div>y: {{ yScroll }}</div>

      <div>Mouse position</div>
      <div>x: {{ xMouse }}</div>
      <div>y: {{ yMouse }}</div>
    </div>
    <div class="h-[2000px] w-32"></div>
    <div class="w-[2000px]"></div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
import { useWindowScroll, useMouse } from "@vueuse/core";

const windowScroll = useWindowScroll();
const xScroll = windowScroll.x;
const yScroll = windowScroll.y;

const mouse = useMouse();
const xMouse = mouse.x;
const yMouse = mouse.y;
</script>

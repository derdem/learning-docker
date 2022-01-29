<template>
  <BaseTemplate
    ><div
      class="mr-6 bg-gray-700/60 p-4 md:px-6 prose-indigo sm:rounded-md h-100"
    >
      <div class="flex flex-row flex-wrap justify-between w-full">
        <slot />
      </div></div
  ></BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "./BaseTemplate.vue";
</script>

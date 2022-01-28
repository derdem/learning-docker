<template>
  <BaseTemplate
    ><div
      class="flex-1 mx-auto bg-gray-700/60 p-4 prose prose-invert min-w-96 md:px-6 prose-indigo sm:rounded-md h-100"
    >
      <slot /></div
  ></BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "./BaseTemplate.vue";
</script>

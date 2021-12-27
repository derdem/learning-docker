<template>
  <BaseTemplate title="Vite-TS-Tailwind Starter">
    <div v-for="(item, index) in data" :key="index">
      {{ item }}
    </div>
  </BaseTemplate>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseTemplate from "@/components/BaseTemplate.vue";
import axios from "axios";

const data = ref();

axios.get("/api/randomData").then((res) => {
  data.value = res.data;
});
</script>

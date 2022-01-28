<template>
  <ArticleTemplate title="Vite-TS-Tailwind Starter">
    <div v-for="(item, index) in data" :key="index">
      {{ item }}
    </div>
  </ArticleTemplate>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ArticleTemplate from "@/components/ArticleTemplate.vue";
//import axios from "axios";

const data = ref();

// axios.get("/api/randomData").then((res) => {
//   data.value = res.data;
// });
</script>

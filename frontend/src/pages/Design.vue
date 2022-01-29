<template>
  <CompleteWidthTemplateVue>
    <router-link to="/animations">
      <div class="m-2 p-2 w-32 h-32 bg-slate-700">
        <img src="@/assets/earthAnimation.gif" />
        Animation
      </div>
    </router-link>

    <router-link to="/background-colors">
      <div class="m-2 p-2 w-32 h-32 bg-slate-700">
        <img src="@/assets/earthAnimation.gif" />
        Background Colors
      </div>
    </router-link>

    <div class="m-2 p-2 w-32 h-32 bg-slate-700">
      <img src="@/assets/resources.jpeg" />
      Resources
    </div>

    <!-- <a href="https://pixabay.com">Pixabay</a> -->
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
</script>

<style scoped lang="scss">
.custom {
  background-color: aquamarine;
}
</style>

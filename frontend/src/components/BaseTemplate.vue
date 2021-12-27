<template>
  <header class="px-4 mt-6 prose-sm md:px-6 md:prose">
    <h1 class="!mb-0 font-sans text-4xl font-black pb-4">Nikodem Bienia</h1>
  </header>
  <div class="h-100 flex flex-row">
    <nav class="md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
      <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Blog</a
      >
      <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Portfolio</a
      >
      <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >About</a
      >
      <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Contact</a
      >
    </nav>
    <main class="container mx-auto h-100">
      <div
        class="p-4 mx-auto prose bg-white md:px-6 prose-indigo sm:rounded-md"
      >
        <div />
        <slot />
      </div>
    </main>
  </div>
  <footer class="container py-6 mx-auto text-sm text-center text-gray-700">
    <p>Created by Nikodem Bienia</p>
  </footer>
</template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { ChevronDoubleRightIcon } from "@heroicons/vue/outline";

const props = defineProps<{
  title?: string;
}>();

// Note: these are static. If you need these to be reactive, use ref() or reactive()
useHead({
  bodyAttrs: {
    title: props.title,
  },
  meta: [
    {
      property: "og:title",
      content: props.title,
    },
    {
      name: "twitter:title",
      content: props.title,
    },
  ],
});

const VERSION = import.meta.env.VITE_APP_VERSION;
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
</script>

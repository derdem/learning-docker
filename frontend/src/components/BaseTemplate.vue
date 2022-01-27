<template>
  <header class="px-4 mt-6 text-gray-400">
    <h1 class="!mb-0 font-sans text-4xl pb-4">
      <span>Welcome {{ user.username }}</span>
    </h1>
  </header>
  <div class="flex flex-row">
    <nav class="md:block px-4 pb-4 md:pb-0 md:overflow-y-auto text-gray-400">
      <router-link to="/functional-programming">
        <a
          class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Functional Programming</a
        >
      </router-link>
      <a
        class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Backend</a
      >
      <a
        class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >IT Operations</a
      >
      <a
        class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Design</a
      >
    </nav>
    <main class="container flex flex-col">
      <div
        class="flex-1 mx-auto bg-gray-700/60 p-4 prose prose-invert min-w-96 md:px-6 prose-indigo sm:rounded-md h-100"
      >
        <slot />
      </div>
    </main>
  </div>
  <footer class="container py-6 mx-auto text-sm text-center text-gray-400">
    <p>Created by Nikodem Bienia</p>
  </footer>
</template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { userStore } from "@/store/user";
const user = userStore();

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

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import "./assets/index.postcss";
import "highlight.js/styles/base16/solarized-dark.css";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("javascript", javascript);

const head = createHead();
const app = createApp(App);

app.use(router);
app.use(head);
app.use(createPinia());

app.mount("#app");

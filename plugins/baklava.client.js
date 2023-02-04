import { defineNuxtPlugin } from "#app";
import { BaklavaVuePlugin } from "@baklavajs/plugin-renderer-vue3";
import "@baklavajs/plugin-renderer-vue3/dist/styles.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BaklavaVuePlugin);
});
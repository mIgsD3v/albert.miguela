import { createApp } from "vue";
import { createPinia } from "pinia";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  offset: 60,
  once: true,
  disable: reduceMotion,
});

router.afterEach(() => AOS.refresh());

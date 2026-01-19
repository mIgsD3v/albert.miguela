import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router"; // ✅ imported router
import { createPinia } from "pinia";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: false,      // <-- animate every time element enters viewport
  mirror: true,     // <-- animate when scrolling back
});

// Optional: refresh AOS after route change (for SPA)
router.afterEach(() => {
  AOS.refresh();
});

// Optional: refresh AOS on window resize
window.addEventListener('resize', () => {
  AOS.refresh();
});

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const app = createApp(App);

app.use(createPinia());
app.use(router); // ✅ make sure to use the router

app.mount("#app");

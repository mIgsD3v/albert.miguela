<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  to: { type: Number, required: true },
  suffix: { type: String, default: "" },
  duration: { type: Number, default: 1600 },
});

const el = ref(null);
const display = ref(0);
let observer;

const run = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    display.value = props.to;
    return;
  }
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / props.duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    display.value = Math.round(props.to * eased);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <span ref="el" class="tabular-nums">{{ display }}{{ suffix }}</span>
</template>

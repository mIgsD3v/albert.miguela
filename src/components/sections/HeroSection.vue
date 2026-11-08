<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ArrowDownTrayIcon, ArrowRightIcon, MapPinIcon } from "@heroicons/vue/24/outline";
import SocialIcon from "@/components/icons/SocialIcon.vue";
import CountUp from "@/components/CountUp.vue";
import { profile, socials, stats } from "@/data/portfolio";

/* Typewriter for the rotating role */
const typed = ref("");
let timer;
let roleIdx = 0;
let charIdx = 0;
let deleting = false;

const type = () => {
  const word = profile.roles[roleIdx];
  charIdx += deleting ? -1 : 1;
  typed.value = word.slice(0, charIdx);

  let delay = deleting ? 45 : 90;
  if (!deleting && charIdx === word.length) {
    deleting = true;
    delay = 1800;
  } else if (deleting && charIdx === 0) {
    deleting = false;
    roleIdx = (roleIdx + 1) % profile.roles.length;
    delay = 350;
  }
  timer = setTimeout(type, delay);
};

/* Pointer-follow glow */
const hero = ref(null);
const onMove = (e) => {
  const r = hero.value.getBoundingClientRect();
  hero.value.style.setProperty("--mx", `${e.clientX - r.left}px`);
  hero.value.style.setProperty("--my", `${e.clientY - r.top}px`);
};

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typed.value = profile.roles[0];
  } else {
    timer = setTimeout(type, 600);
  }
});
onBeforeUnmount(() => clearTimeout(timer));

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

const floating = [
  { label: "Laravel", icon: "/techstack-icons/laravel.png", pos: "-left-6 top-10", delay: "0s" },
  { label: "Vue.js", icon: "/techstack-icons/vue.js.png", pos: "-right-8 top-24", delay: "1.5s" },
  { label: "PostgreSQL", icon: "/techstack-icons/postgreSQL.png", pos: "-left-10 bottom-14", delay: "3s" },
];
</script>

<template>
  <section
    id="home"
    ref="hero"
    @pointermove="onMove"
    class="hero relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 lg:pt-28"
  >
    <!-- Background layers -->
    <div class="bg-grid mask-fade-b absolute inset-0 -z-10"></div>
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-400/25 blur-[110px] dark:bg-brand-500/20"></div>
      <div
        class="absolute -right-24 top-1/3 h-[26rem] w-[26rem] animate-blob rounded-full bg-indigo-500/20 blur-[110px] [animation-delay:-6s] dark:bg-indigo-600/25"
      ></div>
      <div
        class="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] animate-blob rounded-full bg-sky-300/20 blur-[100px] [animation-delay:-12s] dark:bg-cyan-500/10"
      ></div>
    </div>
    <div class="hero-glow pointer-events-none absolute inset-0 -z-10"></div>

    <div class="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
      <!-- Copy -->
      <div class="order-2 text-center lg:order-1 lg:text-left">

        <h1
          class="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, I’m <span class="gradient-text animate-gradient-x">Albert</span>
          <br class="hidden sm:block" />
          Miguela.
        </h1>

        <!-- Role as a line of code -->
        <div
          class="mt-6 inline-flex max-w-full items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-3.5 py-2.5 font-mono text-[13px] shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03] sm:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
          aria-live="polite"
        >
          <span class="hidden select-none text-xs text-slate-400 dark:text-slate-600 sm:inline">01</span>
          <code class="whitespace-nowrap">
            <span class="text-violet-600 dark:text-violet-400">const</span>
            <span class="text-sky-600 dark:text-sky-300"> role</span>
            <span class="text-slate-400"> = </span>
            <span class="text-emerald-600 dark:text-emerald-400">"{{ typed }}<span class="ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-blink bg-brand-500"></span>"</span>
            <span class="text-slate-400">;</span>
          </code>
        </div>

        <p
          class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {{ profile.bio }}
        </p>

        <div class="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start" data-aos="fade-up" data-aos-delay="400">
          <a :href="profile.resume" download="Albert_Miguela-Resume.pdf" class="btn-primary group">
            <ArrowDownTrayIcon class="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <a href="#projects" @click.prevent="scrollTo('#projects')" class="btn-ghost group">
            View my work
            <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div class="mt-9 flex items-center justify-center gap-5 lg:justify-start" data-aos="fade-up" data-aos-delay="500">
          <div class="flex gap-2">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.name"
              class="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
              <SocialIcon :name="s.icon" class="h-4 w-4" />
            </a>
          </div>
          <span class="hidden h-6 w-px bg-slate-300 dark:bg-white/10 sm:block"></span>
          <span class="hidden items-center gap-1.5 text-sm text-slate-500 sm:flex">
            <MapPinIcon class="h-4 w-4" /> {{ profile.location }}
          </span>
        </div>
      </div>

      <!-- Portrait -->
      <div class="order-1 flex justify-center lg:order-2" data-aos="zoom-in" data-aos-duration="900">
        <div class="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <!-- spinning gradient ring -->
          <div
            class="absolute -inset-1.5 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#40c6f4,#6366f1,transparent_60%,#40c6f4)] opacity-90 blur-[1px]"
          ></div>
          <div class="absolute -inset-10 rounded-full bg-brand-500/20 blur-3xl"></div>
          <div class="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-50 bg-slate-200 dark:border-ink-900 dark:bg-ink-800">
            <img :src="profile.avatar" :alt="profile.name" class="h-full w-full object-cover" fetchpriority="high" />
          </div>

          <!-- floating tech badges -->
          <div
            v-for="f in floating"
            :key="f.label"
            class="glass absolute hidden animate-float items-center gap-2 rounded-2xl px-3 py-2 shadow-lg sm:flex"
            :class="f.pos"
            :style="{ animationDelay: f.delay }"
          >
            <img :src="f.icon" :alt="f.label" class="h-5 w-5 object-contain" />
            <span class="text-xs font-semibold text-slate-800 dark:text-slate-100">{{ f.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div class="container-x absolute inset-x-0 bottom-6 hidden lg:block">
      <div class="glass grid grid-cols-4 divide-x divide-slate-200 rounded-2xl py-5 dark:divide-white/10" data-aos="fade-up" data-aos-delay="600">
        <div v-for="s in stats" :key="s.label" class="px-6 text-center">
          <div class="text-3xl font-bold text-slate-900 dark:text-white">
            <CountUp :to="s.value" :suffix="s.suffix" />
          </div>
          <div class="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats on small screens -->
  <div class="container-x -mt-4 mb-8 grid grid-cols-2 gap-3 lg:hidden">
    <div v-for="s in stats" :key="s.label" class="card p-5 text-center" data-aos="fade-up">
      <div class="text-2xl font-bold text-slate-900 dark:text-white"><CountUp :to="s.value" :suffix="s.suffix" /></div>
      <div class="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">{{ s.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.hero-glow {
  background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgb(52 186 235 / 0.1), transparent 45%);
}
@media (min-width: 1024px) {
  .hero {
    padding-bottom: 9rem;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ArrowUpIcon } from "@heroicons/vue/24/outline";
import { navItems, profile } from "@/data/portfolio";

const isScrolled = ref(false);
const progress = ref(0);
const activeId = ref("home");
const mobileOpen = ref(false);
const isDark = ref(document.documentElement.classList.contains("dark"));
const router = useRouter();

/* Theme */
const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  try {
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  } catch {}
};

/* Scrolling */
const scrollTo = (href) => {
  mobileOpen.value = false;
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    isScrolled.value = y > 20;
    progress.value = max > 0 ? Math.min(y / max, 1) : 0;
    ticking = false;
  });
};

/* Active section tracking */
let observer;
const observeSections = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activeId.value = e.target.id;
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  navItems.forEach(({ href }) => {
    const el = document.querySelector(href);
    if (el) observer.observe(el);
  });
};

watch(mobileOpen, (open) => document.body.classList.toggle("overflow-hidden", open));

const onKey = (e) => e.key === "Escape" && (mobileOpen.value = false);

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKey);
  onScroll();
  // sections live in <router-view>, which renders once the router resolves
  router.isReady().then(() => nextTick(observeSections));
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKey);
  observer?.disconnect();
});

const RING = 2 * Math.PI * 22;
</script>

<template>
  <div class="site-chrome transition-opacity duration-300">
    <!-- Scroll progress -->
    <div class="fixed inset-x-0 top-0 z-[1001] h-[3px]">
      <div
        class="h-full origin-left bg-gradient-to-r from-brand-400 via-sky-500 to-indigo-500"
        :style="{ transform: `scaleX(${progress})` }"
      ></div>
    </div>

    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-[1000] flex justify-center px-4 transition-all duration-500" :class="isScrolled ? 'pt-3' : 'pt-5'">
      <nav
        class="flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:px-4"
        :class="isScrolled ? 'glass shadow-lg shadow-slate-900/5 dark:shadow-black/30' : 'border border-transparent'"
        aria-label="Primary"
      >
        <!-- Logo -->
        <a href="#home" @click.prevent="scrollTo('#home')" class="group flex items-center gap-2.5 pl-1">
          <span
            class="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 font-mono text-sm font-bold text-white shadow-md shadow-brand-500/30 transition-transform duration-500 group-hover:rotate-[360deg]"
          >
            AM
          </span>
          <span class="font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
            {{ profile.handle }}<span class="text-brand-500">.</span>
          </span>
        </a>

        <!-- Desktop links -->
        <ul class="hidden items-center gap-1 lg:flex">
          <li v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              @click.prevent="scrollTo(item.href)"
              class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
              :class="
                activeId === item.href.slice(1)
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              "
            >
              <span
                v-if="activeId === item.href.slice(1)"
                class="absolute inset-0 -z-10 rounded-full bg-slate-900/5 dark:bg-white/10"
              ></span>
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="grid h-9 w-9 place-items-center rounded-full text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <transition name="spin" mode="out-in">
              <SunIcon v-if="isDark" key="sun" class="h-5 w-5" />
              <MoonIcon v-else key="moon" class="h-5 w-5" />
            </transition>
          </button>

          <button
            @click="mobileOpen = !mobileOpen"
            class="grid h-9 w-9 place-items-center rounded-full text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10 lg:hidden"
            :aria-expanded="mobileOpen"
            aria-label="Toggle menu"
          >
            <XMarkIcon v-if="mobileOpen" class="h-6 w-6" />
            <Bars3Icon v-else class="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile menu -->
    <transition name="drawer">
      <div v-if="mobileOpen" class="fixed inset-0 z-[999] lg:hidden" @click.self="mobileOpen = false">
        <div class="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" @click="mobileOpen = false"></div>
        <div class="glass absolute inset-x-4 top-20 rounded-3xl p-3 shadow-2xl">
          <ul class="flex flex-col">
            <li v-for="(item, i) in navItems" :key="item.name">
              <a
                :href="item.href"
                @click.prevent="scrollTo(item.href)"
                class="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors"
                :class="
                  activeId === item.href.slice(1)
                    ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                    : 'text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/5'
                "
              >
                {{ item.name }}
                <span class="font-mono text-xs opacity-50">0{{ i + 1 }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- Back to top with progress ring -->
    <transition name="pop">
      <button
        v-show="progress > 0.08"
        @click="scrollTop"
        class="fixed bottom-6 right-6 z-[100] grid h-12 w-12 place-items-center rounded-full bg-white text-slate-800 shadow-xl shadow-slate-900/10 transition-transform hover:-translate-y-1 dark:bg-ink-800 dark:text-white dark:shadow-black/40"
        aria-label="Back to top"
      >
        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" stroke-width="2" class="opacity-10" />
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="url(#ringGrad)"
            stroke-width="2"
            stroke-linecap="round"
            :stroke-dasharray="RING"
            :stroke-dashoffset="RING * (1 - progress)"
          />
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#40c6f4" />
              <stop offset="100%" stop-color="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        <ArrowUpIcon class="relative h-5 w-5" />
      </button>
    </transition>
  </div>
</template>

<style scoped>
.spin-enter-active,
.spin-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.spin-enter-from {
  transform: rotate(-90deg) scale(0.5);
  opacity: 0;
}
.spin-leave-to {
  transform: rotate(90deg) scale(0.5);
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}
.drawer-enter-active .glass,
.drawer-leave-active .glass {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-from .glass,
.drawer-leave-to .glass {
  transform: translateY(-12px) scale(0.97);
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
}
.pop-enter-from,
.pop-leave-to {
  transform: scale(0.6);
  opacity: 0;
}
</style>

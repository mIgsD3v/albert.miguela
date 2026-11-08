<script setup>
import SocialIcon from "@/components/icons/SocialIcon.vue";
import { navItems, socials, profile } from "@/data/portfolio";

const year = new Date().getFullYear();
const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-white/5">
    <div class="container-x flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
      <div class="text-center md:text-left">
        <a href="#home" @click.prevent="scrollTo('#home')" class="font-mono text-sm font-semibold text-slate-900 dark:text-white">
          {{ profile.handle }}<span class="text-brand-500">.</span>
        </a>
        <p class="mt-2 text-sm text-slate-500">© {{ year }} {{ profile.name }}. Built with Vue & Tailwind CSS.</p>
      </div>

      <nav aria-label="Footer">
        <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <li v-for="item in navItems" :key="item.name">
            <a
              :href="item.href"
              @click.prevent="scrollTo(item.href)"
              class="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex gap-2">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="s.name"
          class="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-slate-100 hover:text-brand-600 dark:hover:bg-white/5 dark:hover:text-brand-400"
        >
          <SocialIcon :name="s.icon" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
</template>

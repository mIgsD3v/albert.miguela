<script setup>
import { CodeBracketIcon, ServerStackIcon, CircleStackIcon, RocketLaunchIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "@/components/SectionHeading.vue";
import { onSpotlight } from "@/composables/useSpotlight";
import { services } from "@/data/portfolio";

const icons = {
  frontend: CodeBracketIcon,
  backend: ServerStackIcon,
  database: CircleStackIcon,
  deploy: RocketLaunchIcon,
};
</script>

<template>
  <section id="services" class="relative py-24 lg:py-32">
    <div class="container-x">
      <SectionHeading
        eyebrow="What I do"
        title="End-to-end"
        highlight="web development"
        description="From database schema to deployed product — I build the whole stack with a focus on security, performance and clean code."
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          @pointermove="onSpotlight"
          class="card spotlight group overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div
            class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-400/15 to-indigo-500/15 text-brand-600 ring-1 ring-inset ring-brand-500/20 transition-all duration-500 group-hover:scale-110 group-hover:from-brand-400 group-hover:to-indigo-500 group-hover:text-white dark:text-brand-400"
          >
            <component :is="icons[s.icon]" class="h-6 w-6" />
          </div>
          <h3 class="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{{ s.title }}</h3>
          <p class="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ s.text }}</p>
          <span class="mt-6 block font-mono text-xs text-slate-400 dark:text-slate-600">0{{ i + 1 }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

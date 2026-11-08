<script setup>
import { ref } from "vue";
import { ArrowUpRightIcon, PhotoIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "@/components/SectionHeading.vue";
import ProjectModal from "@/components/ProjectModal.vue";
import LiveIcon from "@/components/icons/LiveIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import { onSpotlight } from "@/composables/useSpotlight";
import { projects } from "@/data/portfolio";

const selected = ref(null);
const show = ref(false);
const open = (p) => {
  selected.value = p;
  show.value = true;
};
</script>

<template>
  <section id="projects" class="relative py-24 lg:py-32">
    <div class="container-x">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured"
        highlight="projects"
        description="A few of the systems I’ve designed and built — secure, scalable and made for real users."
      />

      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <article
          v-for="(p, i) in projects"
          :key="p.title"
          @click="open(p)"
          @keydown.enter="open(p)"
          @pointermove="onSpotlight"
          tabindex="0"
          role="button"
          :aria-label="`Open ${p.title} details`"
          class="card spotlight group flex cursor-pointer flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/10"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <!-- Browser-framed thumbnail -->
          <div class="p-3 pb-0">
            <div class="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-ink-800">
              <div class="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-white/10">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
              </div>
              <div class="relative aspect-[16/10] overflow-hidden">
                <img
                  :src="p.thumbnail"
                  :alt="`${p.title} screenshot`"
                  class="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                >
                  <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    View details <ArrowUpRightIcon class="h-4 w-4" />
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    <PhotoIcon class="h-3.5 w-3.5" /> {{ p.slides.length }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-1 flex-col p-6">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="font-mono text-[11px] uppercase tracking-wider text-brand-600 dark:text-brand-400">{{ p.category }}</p>
                <h3 class="mt-1.5 text-xl font-semibold text-slate-900 dark:text-white">{{ p.title }}</h3>
              </div>
              <div class="flex shrink-0 gap-1">
                <template v-for="link in p.links" :key="link.type">
                  <a
                    v-if="link.enabled"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click.stop
                    :aria-label="link.type === 'live' ? 'Live site' : 'Source code'"
                    class="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-600 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-brand-400"
                  >
                    <LiveIcon v-if="link.type === 'live'" class="h-[18px] w-[18px]" />
                    <GithubIcon v-else class="h-[18px] w-[18px]" />
                  </a>
                  <span
                    v-else
                    class="grid h-9 w-9 cursor-not-allowed place-items-center rounded-full text-slate-300 dark:text-slate-700"
                    :title="link.type === 'live' ? 'Internal system — not publicly accessible' : 'Private'"
                  >
                    <LiveIcon v-if="link.type === 'live'" class="h-[18px] w-[18px]" />
                    <GithubIcon v-else class="h-[18px] w-[18px]" />
                  </span>
                </template>
              </div>
            </div>

            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ p.summary }}</p>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="t in p.tech.slice(0, 4)" :key="t" class="chip">{{ t }}</span>
              <span v-if="p.tech.length > 4" class="chip">+{{ p.tech.length - 4 }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <ProjectModal v-if="selected" :show="show" :project="selected" @close="show = false" />
  </section>
</template>

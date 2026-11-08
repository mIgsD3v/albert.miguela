<script setup>
import { AcademicCapIcon, CalendarDaysIcon } from "@heroicons/vue/24/outline";
import SectionHeading from "@/components/SectionHeading.vue";
import { education } from "@/data/portfolio";
</script>

<template>
  <section id="education" class="relative border-y border-slate-200/70 bg-white py-24 dark:border-white/5 dark:bg-ink-850 lg:py-32">
    <div class="container-x">
      <SectionHeading
        eyebrow="Background"
        title="Education"
        description="The academic foundation behind my skills in software development, problem-solving and continuous learning."
      />

      <div class="relative mx-auto max-w-3xl">
        <!-- Timeline rail -->
        <div class="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-brand-500 via-indigo-500/50 to-transparent md:left-1/2"></div>

        <div
          v-for="(e, i) in education"
          :key="e.school"
          class="relative mb-12 last:mb-0 md:grid md:grid-cols-2 md:gap-12"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <!-- Node -->
          <div class="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
            <span class="relative flex h-4 w-4">
              <span v-if="i === 0" class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60"></span>
              <span class="relative inline-flex h-4 w-4 rounded-full border-[3px] border-white bg-brand-500 dark:border-ink-850"></span>
            </span>
          </div>

          <!-- Card (alternates sides on desktop) -->
          <div class="ml-12 md:ml-0" :class="i % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'">
            <div
              class="card group p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5"
            >
              <div class="flex items-center gap-4" :class="i % 2 === 0 ? 'md:flex-row-reverse' : ''">
                <div class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200 dark:ring-white/10">
                  <img :src="e.logo" :alt="e.school" class="h-full w-full object-contain" loading="lazy" />
                </div>
                <div>
                  <span class="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    <AcademicCapIcon class="h-3.5 w-3.5" /> {{ e.level }}
                  </span>
                  <h3 class="mt-1 text-lg font-semibold leading-snug text-slate-900 dark:text-white">{{ e.degree }}</h3>
                </div>
              </div>
              <p class="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">{{ e.school }}</p>
              <p class="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                <CalendarDaysIcon class="h-4 w-4" /> {{ e.period }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

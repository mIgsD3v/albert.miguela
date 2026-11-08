<script setup>
import { ref, computed } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import SkillIcon from "@/components/SkillIcon.vue";
import { skills, skillCategories } from "@/data/portfolio";

const active = ref("All");
const filtered = computed(() => (active.value === "All" ? skills : skills.filter((s) => s.category === active.value)));
const countFor = (c) => (c === "All" ? skills.length : skills.filter((s) => s.category === c).length);

const half = Math.ceil(skills.length / 2);
const rowA = skills.slice(0, half);
const rowB = skills.slice(half);
</script>

<template>
  <section id="skills" class="relative overflow-hidden border-y border-slate-200/70 bg-white py-24 dark:border-white/5 dark:bg-ink-850 lg:py-32">
    <div class="container-x">
      <SectionHeading
        eyebrow="Tech stack"
        title="Skills &"
        highlight="tools"
        description="The technologies I use day to day to build modern, efficient and maintainable web applications."
      />
    </div>

    <!-- Marquee -->
    <div class="mask-fade-x mb-16 space-y-4" data-aos="fade-up">
      <div v-for="(row, r) in [rowA, rowB]" :key="r" class="group flex overflow-hidden">
        <div
          class="flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]"
          :class="r === 0 ? 'animate-marquee' : 'animate-marquee-reverse'"
        >
          <div
            v-for="(s, i) in [...row, ...row]"
            :key="s.name + i"
            class="flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 dark:border-white/10 dark:bg-white/[0.03]"
            :aria-hidden="i >= row.length"
          >
            <SkillIcon :skill="s" class="h-5 w-5" />
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ s.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container-x">
      <!-- Filter tabs -->
      <div class="mb-10 flex flex-wrap justify-center gap-2" data-aos="fade-up" role="tablist">
        <button
          v-for="c in skillCategories"
          :key="c"
          @click="active = c"
          role="tab"
          :aria-selected="active === c"
          class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
          :class="
            active === c
              ? 'bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10'
          "
        >
          {{ c }}
          <span class="ml-1 font-mono text-[11px] opacity-60">{{ countFor(c) }}</span>
        </button>
      </div>

      <!-- Grid -->
      <TransitionGroup tag="div" name="skill" class="relative grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 sm:gap-4">
        <div
          v-for="s in filtered"
          :key="s.name"
          class="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-white hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-brand-400/40 dark:hover:bg-white/[0.06] sm:p-5"
        >
          <SkillIcon
            :skill="s"
            class="h-10 w-10 grayscale-[30%] transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
          />
          <span class="text-center text-xs font-medium text-slate-700 dark:text-slate-300">{{ s.name }}</span>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.skill-move,
.skill-enter-active,
.skill-leave-active {
  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.skill-enter-from,
.skill-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(10px);
}
.skill-leave-active {
  position: absolute;
  visibility: hidden;
}
</style>

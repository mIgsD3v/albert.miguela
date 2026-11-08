<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, A11y } from "swiper/modules";
import { XMarkIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";
import LiveIcon from "@/components/icons/LiveIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";

const props = defineProps({
  show: Boolean,
  project: Object,
});
const emit = defineEmits(["close"]);

const activeIndex = ref(0);
const swiper = ref(null);
const thumbs = ref(null);

const close = () => emit("close");
const onKey = (e) => e.key === "Escape" && close();
const pad = (n) => String(n).padStart(2, "0");

const goTo = (i) => swiper.value?.slideTo(i);
const prev = () => swiper.value?.slidePrev();
const next = () => swiper.value?.slideNext();

const onSlideChange = (s) => {
  activeIndex.value = s.activeIndex;
  nextTick(() => {
    thumbs.value?.children[s.activeIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
};

watch(
  () => props.show,
  (open) => {
    document.body.classList.toggle("modal-open", open);
    if (open) {
      activeIndex.value = 0;
      window.addEventListener("keydown", onKey);
    } else {
      window.removeEventListener("keydown", onKey);
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  document.body.classList.remove("modal-open");
  window.removeEventListener("keydown", onKey);
});
</script>

<template>
  <Teleport to="body">
    <transition name="modal">
      <div
        v-if="show"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-ink-900/75 p-3 backdrop-blur-md sm:p-6"
        @click.self="close"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
      >
        <div
          class="modal-panel grid max-h-[94vh] w-full max-w-7xl grid-cols-1 overflow-y-auto overflow-x-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-ink-850 md:h-[min(860px,90vh)] md:grid-cols-[minmax(0,1fr)_400px] md:overflow-hidden"
        >
          <!-- ============ Gallery ============ -->
          <div class="flex min-w-0 flex-col border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-ink-900 md:border-r">
            <div class="gallery bg-grid group/gal relative h-[42vh] min-h-0 sm:h-[50vh] md:h-auto md:flex-1">
              <Swiper
                :modules="[Keyboard, A11y]"
                :keyboard="{ enabled: true }"
                :space-between="24"
                class="!absolute inset-0"
                @swiper="(s) => (swiper = s)"
                @slideChange="onSlideChange"
              >
                <SwiperSlide v-for="(slide, i) in project.slides" :key="i" class="!flex h-full items-center justify-center p-4 sm:px-20 sm:py-8">
                  <!-- browser frame -->
                  <figure
                    class="flex max-h-full max-w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 dark:border-white/10 dark:bg-ink-800 dark:shadow-black/50"
                  >
                    <div class="flex shrink-0 items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-white/10">
                      <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                      <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                      <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <img
                      :src="slide.image"
                      :alt="`${project.title} — screen ${i + 1}`"
                      class="min-h-0 max-w-full object-contain"
                      :loading="i === 0 ? 'eager' : 'lazy'"
                    />
                  </figure>
                </SwiperSlide>
              </Swiper>

              <!-- Side arrows (sit in the gallery margin, never over the screenshot) -->
              <template v-if="project.slides.length > 1">
                <button
                  @click="prev"
                  :disabled="activeIndex === 0"
                  class="side-arrow left-4"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeftIcon class="h-5 w-5" stroke-width="2" />
                </button>
                <button
                  @click="next"
                  :disabled="activeIndex === project.slides.length - 1"
                  class="side-arrow right-4"
                  aria-label="Next screenshot"
                >
                  <ChevronRightIcon class="h-5 w-5" stroke-width="2" />
                </button>
              </template>
            </div>

            <!-- Control bar -->
            <div class="flex shrink-0 items-center gap-3 border-t border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-ink-850 sm:px-5">
              <div class="flex shrink-0 items-center gap-1.5">
                <button
                  @click="prev"
                  :disabled="activeIndex === 0"
                  class="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 disabled:pointer-events-none disabled:opacity-30 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-400"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeftIcon class="h-4 w-4" />
                </button>
                <span class="w-[4.5rem] text-center font-mono text-xs tabular-nums text-slate-500">
                  <span class="font-semibold text-slate-900 dark:text-white">{{ pad(activeIndex + 1) }}</span>
                  / {{ pad(project.slides.length) }}
                </span>
                <button
                  @click="next"
                  :disabled="activeIndex === project.slides.length - 1"
                  class="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 disabled:pointer-events-none disabled:opacity-30 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-400"
                  aria-label="Next screenshot"
                >
                  <ChevronRightIcon class="h-4 w-4" />
                </button>
              </div>

              <div v-if="project.slides.length > 1" ref="thumbs" class="hide-scrollbar flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 py-1.5">
                <button
                  v-for="(slide, i) in project.slides"
                  :key="'t' + i"
                  @click="goTo(i)"
                  class="h-11 w-[4.5rem] shrink-0 overflow-hidden rounded-md bg-slate-100 p-0 ring-offset-2 ring-offset-white transition-all duration-300 dark:bg-ink-800 dark:ring-offset-ink-850"
                  :class="activeIndex === i ? 'opacity-100 ring-2 ring-brand-500' : 'opacity-50 ring-1 ring-slate-200 hover:opacity-100 dark:ring-white/10'"
                  :aria-label="`Show screenshot ${i + 1}`"
                  :aria-current="activeIndex === i"
                >
                  <img :src="slide.image" alt="" class="h-full w-full object-cover object-top" loading="lazy" />
                </button>
              </div>
            </div>
          </div>

          <!-- ============ Details ============ -->
          <aside class="flex min-h-0 min-w-0 flex-col">
            <header class="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 dark:border-white/10 md:px-7">
              <div>
                <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">{{ project.category }}</p>
                <h3 class="mt-1.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">{{ project.title }}</h3>
              </div>
              <button
                @click="close"
                class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:rotate-90 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
                aria-label="Close"
              >
                <XMarkIcon class="h-4 w-4" />
              </button>
            </header>

            <div class="hide-scrollbar min-h-0 flex-1 space-y-7 overflow-y-auto px-6 py-6 md:px-7">
              <section>
                <h4 class="label">Screen {{ pad(activeIndex + 1) }}</h4>
                <transition name="caption" mode="out-in">
                  <p :key="project.slides[activeIndex]?.caption" class="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {{ project.slides[activeIndex]?.caption }}
                  </p>
                </transition>
              </section>

              <section v-if="project.features?.length">
                <h4 class="label">Highlights</h4>
                <ul class="mt-3 grid gap-2">
                  <li
                    v-for="f in project.features"
                    :key="f"
                    class="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300"
                  >
                    <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <CheckIcon class="h-3 w-3" stroke-width="3" />
                    </span>
                    {{ f }}
                  </li>
                </ul>
              </section>

              <section>
                <h4 class="label">Tech stack</h4>
                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span v-for="t in project.tech" :key="t" class="chip">{{ t }}</span>
                </div>
              </section>
            </div>

            <footer class="space-y-4 border-t border-slate-200 px-6 py-5 dark:border-white/10 md:px-7">
              <p v-if="project.disclaimer" class="flex gap-2 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
                <InformationCircleIcon class="mt-px h-3.5 w-3.5 shrink-0" />
                {{ project.disclaimer }}
              </p>
              <div class="flex gap-2">
                <template v-for="link in project.links" :key="link.type">
                  <a
                    v-if="link.enabled"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 !py-2.5"
                    :class="link.type === 'live' ? 'btn-primary' : 'btn-ghost'"
                  >
                    <LiveIcon v-if="link.type === 'live'" class="h-4 w-4" />
                    <GithubIcon v-else class="h-4 w-4" />
                    {{ link.type === "live" ? "Visit live site" : "View source" }}
                  </a>
                </template>
              </div>
            </footer>
          </aside>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.side-arrow {
  @apply absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full
         border border-slate-200/80 bg-white/90 text-slate-700 opacity-0 shadow-lg shadow-slate-900/10 backdrop-blur
         transition-all duration-300
         hover:scale-105 hover:border-transparent hover:bg-gradient-to-br hover:from-brand-400 hover:to-indigo-500 hover:text-white hover:shadow-brand-500/30
         disabled:pointer-events-none disabled:!opacity-0
         dark:border-white/10 dark:bg-ink-800/90 dark:text-slate-200 sm:grid;
}
.gallery:hover .side-arrow {
  opacity: 1;
}
@media (hover: none) {
  .side-arrow {
    opacity: 1;
  }
}

.label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgb(100 116 139);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(24px) scale(0.97);
  opacity: 0;
}

.caption-enter-active,
.caption-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.caption-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.caption-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.hide-scrollbar {
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

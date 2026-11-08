<script setup>
import { ref } from "vue";
import { EnvelopeIcon, ClipboardDocumentIcon, CheckIcon, ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import SocialIcon from "@/components/icons/SocialIcon.vue";
import { onSpotlight } from "@/composables/useSpotlight";
import { profile, socials } from "@/data/portfolio";

const copied = ref(false);
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    window.location.href = `mailto:${profile.email}`;
  }
};
</script>

<template>
  <section id="contact" class="relative py-24 lg:py-32">
    <div class="container-x">
      <div
        @pointermove="onSpotlight"
        class="spotlight relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-ink-850 sm:p-12 lg:p-16"
        data-aos="fade-up"
      >
        <!-- decoration -->
        <div class="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-70"></div>
        <div class="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div class="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div class="text-center lg:text-left">
            <span class="eyebrow">Get in touch</span>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Let’s
              <span class="gradient-text animate-gradient-x">connect.</span>
            </h2>
            <p class="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
              Questions about my work, feedback, or just want to say hi? Feel free to reach out through any of the channels below.
            </p>

            <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a :href="`mailto:${profile.email}`" class="btn-primary group w-full sm:w-auto">
                <EnvelopeIcon class="h-4 w-4" /> Send an email
              </a>
              <button
                @click="copyEmail"
                class="btn-ghost w-full font-mono !text-xs sm:w-auto"
                :aria-label="copied ? 'Email copied' : 'Copy email address'"
              >
                <transition name="swap" mode="out-in">
                  <CheckIcon v-if="copied" key="ok" class="h-4 w-4 text-emerald-500" />
                  <ClipboardDocumentIcon v-else key="copy" class="h-4 w-4" />
                </transition>
                {{ copied ? "Copied!" : profile.email }}
              </button>
            </div>
          </div>

          <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <li v-for="(s, i) in socials" :key="s.name" data-aos="fade-left" :data-aos-delay="i * 90">
              <a
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40"
              >
                <span
                  class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-400 group-hover:to-indigo-500 group-hover:text-white dark:bg-white/5 dark:text-slate-300"
                >
                  <SocialIcon :name="s.icon" class="h-5 w-5" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-semibold text-slate-900 dark:text-white">{{ s.name }}</span>
                  <span class="block truncate text-sm text-slate-500">{{ s.label }}</span>
                </span>
                <ArrowUpRightIcon
                  class="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swap-enter-active,
.swap-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.swap-enter-from,
.swap-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>

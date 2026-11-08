<script setup>
defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  highlight: String,
  description: String,
});
</script>

<template>
  <div class="mx-auto mb-14 max-w-2xl text-center">
    <span v-if="eyebrow" class="eyebrow" data-aos="fade-up">
      <span class="h-px w-6 bg-current opacity-60"></span>
      {{ eyebrow }}
      <span class="h-px w-6 bg-current opacity-60"></span>
    </span>
    <h2
      class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
      data-aos="fade-up"
      data-aos-delay="80"
    >
      {{ title }}
      <span v-if="highlight" class="gradient-text animate-gradient-x">{{ highlight }}</span>
    </h2>
    <p
      v-if="description"
      class="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="160"
    >
      {{ description }}
    </p>
  </div>
</template>

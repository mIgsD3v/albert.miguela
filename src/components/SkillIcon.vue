<script setup>
import { SparklesIcon, DocumentMagnifyingGlassIcon, CubeTransparentIcon, ChartBarSquareIcon } from "@heroicons/vue/24/outline";

defineProps({ skill: { type: Object, required: true } });

// Line icons for skills without a logo image
const glyphs = {
  sparkles: SparklesIcon,
  rag: DocumentMagnifyingGlassIcon,
  vector: CubeTransparentIcon,
  tracing: ChartBarSquareIcon,
};
</script>

<template>
  <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="object-contain" loading="lazy" />
  <component
    v-else
    :is="glyphs[skill.glyph]"
    :aria-label="skill.name"
    role="img"
    class="text-brand-500 dark:text-brand-400"
    stroke-width="1.5"
  />
</template>

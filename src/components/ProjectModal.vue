<script setup>
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  show: Boolean,
  project: Object,
})

const emit = defineEmits(['close'])
const activeIndex = ref(0)

watch(
  () => props.show,
  (val) => {
    if (val) {
      activeIndex.value = 0
      // Disable body scroll and hide navbar
      document.body.style.overflow = 'hidden'
      const navbar = document.querySelector('header')
      const scrollBar = document.querySelector('header + div') // scroll progress bar
      const toTopBtn = document.querySelectorAll('button[class*="bottom-4"]')[0] // scroll to top button
      
      if (navbar) {
        navbar.style.visibility = 'hidden'
        navbar.style.opacity = '0'
      }
      if (scrollBar) {
        scrollBar.style.visibility = 'hidden'
      }
      if (toTopBtn) {
        toTopBtn.style.visibility = 'hidden'
      }
    } else {
      // Re-enable body scroll and show navbar
      document.body.style.overflow = ''
      const navbar = document.querySelector('header')
      const scrollBar = document.querySelector('header + div')
      const toTopBtn = document.querySelectorAll('button[class*="bottom-4"]')[0]
      
      if (navbar) {
        navbar.style.visibility = 'visible'
        navbar.style.opacity = '1'
      }
      if (scrollBar) {
        scrollBar.style.visibility = 'visible'
      }
      if (toTopBtn) {
        toTopBtn.style.visibility = 'visible'
      }
    }
  }
)

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-[9999] flex items-center justify-center
             bg-black/60 backdrop-blur-sm"
      @click.self="handleClose"
    >
      <!-- Modal Container -->
      <div
        class="relative w-full max-w-6xl mx-3
               bg-white dark:bg-gray-900
               rounded-2xl shadow-xl overflow-hidden max-h-[90vh]"
      >
        <!-- Close -->
        <button
          @click="handleClose"
          class="absolute top-4 right-4 z-20
                 text-black dark:text-white text-xl
                 p-2 bg-transparent border-none outline-none
                 hover:opacity-70 transition-opacity cursor-pointer
                 focus:outline-none active:bg-transparent"
        >
          ✕
        </button>

        <div class="grid grid-cols-1 md:grid-cols-3 h-full">
          <!-- LEFT: IMAGE WIDE (span 2 columns on md+) -->
          <div class="md:col-span-2 relative h-full">
            <Swiper
              :modules="[Pagination]"
              pagination
              class="project-swiper h-full"
              @slideChange="(swiper) => (activeIndex = swiper.activeIndex)"
            >
              <SwiperSlide
                v-for="(slide, index) in project.slides"
                :key="index"
              >
                <img
                  :src="slide.image"
                  alt="Project Screenshot"
                  class="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- RIGHT: CONTENT PANEL -->
          <div
            class="p-5 md:p-8 flex flex-col overflow-y-auto hide-scrollbar max-h-[90vh]"
          >
            <h3 class="text-2xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
              {{ project.slides[activeIndex]?.caption }}
            </p>

            <p class="text-xs text-gray-400 mb-4">
              {{ activeIndex + 1 }} / {{ project.slides.length }}
            </p>

            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm rounded-full
                       bg-blue-100 dark:bg-blue-900
                       text-blue-700 dark:text-blue-300"
              >
                {{ tech }}
              </span>
            </div>

            <p
              v-if="project.disclaimer"
              class="text-[11px] md:text-xs text-gray-400 italic mb-4"
            >
              {{ project.disclaimer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Hide scrollbar but allow scrolling */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
/* Small arrows */
.project-swiper :deep(.swiper-button-next),
.project-swiper :deep(.swiper-button-prev) {
  width: 28px;
  height: 28px;
}

.project-swiper :deep(.swiper-button-next::after),
.project-swiper :deep(.swiper-button-prev::after) {
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

/* Dark mode arrows */
.dark .project-swiper :deep(.swiper-button-next::after),
.dark .project-swiper :deep(.swiper-button-prev::after) {
  color: #fff;
}
</style>
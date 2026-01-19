<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white dark:bg-gray-900 py-2 shadow-md' : 'bg-transparent py-4',
    ]"
  >
    <div class="mx-auto max-w-screen-xl flex items-center justify-between px-6">
      <!-- Logo -->
      <a
        href="#home"
        class="flex items-center text-2xl font-bold tracking-wide
               text-gray-900 dark:text-gray-100
               transition-colors duration-300"
      >
        mIgsD3v
      </a>


    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex justify-center w-full">
      <ul class="flex items-center gap-x-16 pr-16">
        <li v-for="menu in menuItems" :key="menu.name">
          <a
            href="#"
            @click.prevent="scrollToSection(menu.href)"
            class="text-gray-800 dark:text-gray-200 hover:text-[#34baeb] transition-colors duration-300 flex flex-col items-center"
          >
            <component :is="menu.icon" class="w-6 h-6 mb-1" />
            <span class="sr-only">{{ menu.name }}</span> <!-- optional if you want accessibility -->
          </a>
        </li>
      </ul>
    </nav>


      <!-- Theme Toggle (Desktop Only) -->
      <button
        @click="toggleTheme"
        class="hidden lg:flex w-10 h-10 p-2 rounded-full transition
               bg-gray-200 hover:bg-gray-300
               dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        <component
          :is="isDark ? MoonIcon : SunIcon"
          class="w-6 h-6 transition-colors
                 text-gray-800 dark:text-[white]"
        />
      </button>

      <!-- Mobile Menu Toggle -->
      <div class="lg:hidden flex items-center gap-3">
        <button
          @click="toggleMobileMenu"
          class="bg-transparent focus:outline-none transition-colors duration-300"
        >
          <!-- Hamburger icon -->
          <div v-if="!mobileMenuOpen" class="grid grid-cols-3 gap-0.5 w-6 h-6">
            <span
              v-for="n in 9"
              :key="n"
              class="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-gray-200"
            ></span>
          </div>

          <!-- Close (X) icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-900 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed top-0 left-0 w-1/2 h-screen bg-white dark:bg-gray-900 shadow-md z-[999] p-6"
      >
        <ul class="flex flex-col items-start gap-6 mt-6">
          <li
            v-for="menu in menuItems"
            :key="menu.name"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <a
              href="#"
              @click.prevent="scrollToSection(menu.href); closeMobileMenu()"
              class="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-[#800000] transition-colors duration-300"
            >
              <component :is="menu.icon" class="w-6 h-6" />
              <span>{{ menu.name }}</span>
            </a>
          </li>

          <!-- Mobile Theme Toggle -->
          <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
            <button
              @click="toggleTheme"
              class="flex items-center gap-2 w-full px-3 py-2 rounded-md
                     bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
                     text-gray-800 dark:text-gray-100 transition-colors duration-300"
            >
              <component
                :is="isDark ? MoonIcon : SunIcon"
                class="w-6 h-6"
              />
              <span>Theme</span>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </header>
  <!-- 🔹 Scroll Progress Bar -->
<div
  ref="scrollBar"
  class="fixed top-0 right-0 w-1 h-full
         bg-gray-200 dark:bg-gray-700
         z-[1000]"
>
  <div
    ref="scrollProgress"
    class="w-full h-0
           bg-[#34baeb]
           transition-all duration-100 ease-out"
  ></div>
</div>

<!-- 🔹 Scroll to Top Button -->
<button
  ref="toTop"
  @click="scrollToTop"
  class="hidden fixed bottom-4 right-4 z-[100]
         animate-bounce
         text-white dark:text-gray-100
         p-4 rounded-full shadow-lg
         transition-all duration-300
         bg-[#34baeb]"
>
  ↑
</button>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  HomeIcon,
  CodeBracketIcon,
  FolderIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/vue/24/outline'

/* =========================
   Navigation
========================= */
const menuItems = [
  { name: 'Home', href: '#home', icon: HomeIcon },
  { name: 'Skills', href: '#skills', icon: CodeBracketIcon },
  { name: 'Projects', href: '#projects', icon: FolderIcon },
  { name: 'Education', href: '#education', icon: AcademicCapIcon },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon }
]

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
const closeMobileMenu = () => (mobileMenuOpen.value = false)

/* =========================
   Header scroll effect
========================= */
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

/* =========================
   Dark / Light Theme
========================= */
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }

  // Close mobile menu when theme changes
  closeMobileMenu()
}


/* =========================
   Scroll Progress + To Top
========================= */
const scrollBar = ref(null)
const scrollProgress = ref(null)
const toTop = ref(null)

const handleScrollProgress = () => {
  const scrollTop = window.scrollY
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100

  if (scrollProgress.value) {
    scrollProgress.value.style.height = `${scrollPercent}%`
  }

  if (toTop.value) {
    scrollTop > 300
      ? toTop.value.classList.remove('hidden')
      : toTop.value.classList.add('hidden')
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/* =========================
   Smooth Section Scroll
========================= */
const scrollToSection = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* =========================
   Lifecycle
========================= */
onMounted(() => {
  // header effect
  window.addEventListener('scroll', handleScroll)

  // progress bar + button
  window.addEventListener('scroll', handleScrollProgress)

  // restore theme
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
    isDark.value = true
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleScrollProgress)
})
</script>

<script setup>
import { ref } from 'vue'
import ProjectModal from '@/components/ProjectModal.vue'
import LiveIcon from '@/components/icons/LiveIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const showModal = ref(false)
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
}

const projects = [
{
  title: 'HR Management System',
  thumbnail: '/projects/hrms-1.png',
  slides: [
    {
      image: '/projects/hrms-1.png',
      caption: 'Internal HR Management System used by 100+ employees, built with Laravel (Blade), Bootstrap, and PostgreSQL, featuring attendance tracking, multi-level approval workflows for undertime, official business, overtime, leave, work-from-home, and reconsideration requests, finance management, room/vehicle reservation, and notes section, with automated reporting',
    },
    {
      image: '/projects/hrms-1-1.png',
      caption: 'Internal HR Management System used by 100+ employees, built with Laravel (Blade), Bootstrap, and PostgreSQL, featuring attendance tracking, multi-level approval workflows for undertime, official business, overtime, leave, work-from-home, and reconsideration requests, finance management, room/vehicle reservation, and notes section, with automated reporting',
    },
    {
      image: '/projects/hrms-2.png',
      caption: 'Employee attendance calendar integrated with Dahua biometric devices, featuring real-time sign-in/sign-out, HR-admin holiday inputs, calendar-based HR requests, and notification alerts.',
    },
        {
      image: '/projects/hrms-2-1.png',
      caption: 'Employee attendance calendar integrated with Dahua biometric devices, featuring real-time sign-in/sign-out, HR-admin holiday inputs, calendar-based HR requests, and notification alerts.',
    },


    {
      image: '/projects/hrms-3.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests..',
    },
        {
      image: '/projects/hrms-3-1.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests.',
    },
        {
      image: '/projects/hrms-3-2.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests.',
    },
            {
      image: '/projects/hrms-3-3.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests..',
    },
            {
      image: '/projects/hrms-3-4.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests.',
    },
            {
      image: '/projects/hrms-3-5.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests.',
    },
                {
      image: '/projects/hrms-3-6.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests.',
    },
    
                {
      image: '/projects/hrms-3-7.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests.',
    },
    
                {
      image: '/projects/hrms-3-8.png',
      caption: 'Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests..',
    },
    
  
    {
      image: '/projects/hrms-4.png',
      caption: 'Employees can export HR requests as PDF reports, creating printable copies for OT, leave, undertime, WFH, offset, and reconsideration requests, helping the company maintain a paperless workflow.'

    },
        {
      image: '/projects/hrms-4-1.png',
      caption:'Employees can export HR requests as PDF reports, creating printable copies for OT, leave, undertime, WFH, offset, and reconsideration requests, helping the company maintain a paperless workflow.'

    },
        {
      image: '/projects/hrms-4-2.png',
      caption: 'Employees can export HR requests as PDF reports, creating printable copies for OT, leave, undertime, WFH, offset, and reconsideration requests, helping the company maintain a paperless workflow.'
,
    },
           {
      image: '/projects/hrms-5.png',
      caption: 'Employees can export HR requests as Excel reports, selecting specific departments, users, and cut-off dates (start and end), for OT, leave, undertime, WFH, offset, and reconsideration requests, enabling a paperless workflow.'
,
    },
           {
      image: '/projects/hrms-5-1.png',
      caption: 'Employees can export HR requests as Excel reports, selecting specific departments, users, and cut-off dates (start and end), for OT, leave, undertime, WFH, offset, and reconsideration requests, enabling a paperless workflow.'
,
    },

  ],
  description:
   'Internal HR Management System used by 100+ employees, built with Laravel (Blade), Bootstrap, and PostgreSQL, featuring attendance tracking, multi-level approval workflows for undertime, official business, overtime, leave, work-from-home, and reconsideration requests, finance management, room/vehicle reservation, and notes section, with automated reporting',
  features: [
    'Role-based access control',
    'Attendance & timekeeping',
    'OT & leave approval workflow',
    'Excel export reports',
  ],
  disclaimer:
    'Screenshots are shown for portfolio purposes to demonstrate system features. The system is deployed on the company’s internal server and is not for sale, distribution, or commercial use.',
  tech: ['Laravel', 'Blade', 'Bootstrap', 'PostgreSQL'],
  links: [
        { type: 'live', url: 'https://tsi.net.ph', enabled: false },
        { type: 'github', url: 'https://github.com/mIgsD3v', enabled: true }
      ]
  },


{
  title: 'Company Website',
  thumbnail: '/projects/company-website-1.png',
  slides: [
    {
      image: '/projects/company-website-1.png',
      caption: 'Corporate website with 6 core modules (Home, About Us, Services, Solutions, News & Events, Contact Us) plus an admin panel for managing solutions, article posting, and logo storage in the database. Built using Vue.js, Laravel, PostgreSQL, JWT authentication, and Tailwind CSS, and deployed via Laravel Forge on DigitalOcean. The design follows the company’s UI/UX standards, which were created in Figma and implemented in the website.',
    },
    {
      image: '/projects/company-website-1-1.png',
      caption: 'Admin dashboard for managing content and system data, including article posting and management, full CRUD for solutions and brands, contact request handling, company videos and feedback management, user settings (name and password updates), and detailed user activity logs that track who performed each insert, update, or delete action.'
    },
  ],
  description: 'Corporate website with 6 core modules (Home, About Us, Services, Solutions, News & Events, Contact Us) plus an admin panel for managing solutions, article posting, and logo storage in the database. Built using Vue.js, Laravel, PostgreSQL, JWT authentication, and Tailwind CSS, and deployed via Laravel Forge on DigitalOcean. The design follows the company’s UI/UX standards, which were created in Figma and implemented in the website.',
  disclaimer: 'Screenshots are presented for portfolio purposes to demonstrate system features and functionality. The system is not for sale, distribution, or commercial use.',
  tech: ['Laravel', 'Vue.js', 'JWT', 'PostgreSQL', 'Figma','Tailwind CSS', 'DigitalOcean', 'Laravel Forge'],
  links: [
        { type: 'live', url: 'https://tsi.net.ph', enabled: true },
        { type: 'github', url: 'https://github.com/mIgsD3v', enabled: true }
      ]
  },


{
  title: 'Cozy Leaf',
  thumbnail: '/projects/cozy-leaf-1.png',
  slides: [
    {
      image: '/projects/cozy-leaf-1.png',
      caption: 'A responsive food menu interface for Cozy Leaf, designed in Figma and developed using Vue.js and Tailwind CSS. The project features 5 main modules — Home, Menu, Catering, About, and Contact Us — with clean UI/UX standards, smooth category filtering, and a mobile-first layout for an optimal user experience.',
      figmaLink: 'https://www.figma.com/design/M3pv8bRRqV5r5y67bZG8xj/Negi-s?node-id=0-1&p=f&t=UjUrE68HEunHR6jI-0',
    },
  ],
  description:
    'A responsive food menu interface for Cozy Leaf, designed in Figma and developed using Vue.js and Tailwind CSS. The project focuses on clean UI/UX standards, smooth category filtering, and a mobile-first layout for an optimal user experience.',
  features: [
    'Figma-based UI/UX design',
    'Category-based menu filtering',
    'Mobile-first responsive layout',
    'Vue.js component architecture',
    'Tailwind CSS utility-first styling',
  ],
  links: [
    { type: 'live', url: 'https://cozyleaf-v2.vercel.app/', enabled: true },
    { type: 'github', url: 'https://github.com/mIgsD3v/cozy.leaf-v2.git', enabled: true },
  ],
 tech: ['Vue.js', 'Figma','Tailwind CSS','Vercel'],
}

   
   
]
const skills = [
  { name: 'Vue.js', icon: '/techstack-icons/vue.js.png' },
  { name: 'Laravel', icon: '/techstack-icons/laravel.png' },
  { name: 'PostgreSQL', icon: '/techstack-icons/postgreSQL.png' },
  { name: 'Docker', icon: '/techstack-icons/docker.png' },
  { name: 'HTML', icon: '/techstack-icons/html.png' },
  { name: 'CSS', icon: '/techstack-icons/css.png' },
  { name: 'JavaScript', icon: '/techstack-icons/javascript.png' },
  { name: 'DBeaver', icon: '/techstack-icons/dbeaver.png' },
  { name: 'MS SQL', icon: '/techstack-icons/mssql.png' },
  { name: 'Supabase', icon: '/techstack-icons/supabase.png' },
  { name: 'Postman', icon: '/techstack-icons/postman.png' },
  { name: 'VS Code', icon: '/techstack-icons/vscode.png' },
  { name: 'GitHub', icon: '/techstack-icons/github.png' },
  { name: 'Git', icon: '/techstack-icons/git.png' },
  { name: 'Laravel Forge', icon: '/techstack-icons/laravelforge.png' },
  { name: 'Digital Ocean', icon: '/techstack-icons/digitalocean.png' },
  { name: 'Tailwind CSS', icon: '/techstack-icons/tailwind.png' },
  { name: 'MySQL', icon: '/techstack-icons/mysql.png' },
  { name: 'C#', icon: '/techstack-icons/c-sharp.png' },
  { name: 'GoDaddy', icon: '/techstack-icons/godaddy.png' },
  { name: 'cPanel', icon: '/techstack-icons/cpanel.png' },
  { name: 'Mailtrap', icon: '/techstack-icons/mailtrap.png' },
  { name: 'Visual Studio', icon: '/techstack-icons/visualstudio.png' },
  { name: 'Axios', icon: '/techstack-icons/axios.png' },
  { name: 'React', icon: '/techstack-icons/react.png' },
  { name: 'Hostinger', icon: '/techstack-icons/hostinger.png' }
]

</script>

<template>
  <div>


   <section
  id="home"
  class="relative flex flex-col items-center
         bg-white dark:bg-gray-900
         transition-colors duration-500
         min-h-[660px] lg:min-h-[825px]  <!-- smaller on mobile -->
         pt-24 lg:pt-28
         pb-12"
>
  <div
    class="mx-auto max-w-4xl px-4 sm:px-6 mt-6 sm:mt-8
           flex flex-col items-center text-center"
  >
    <!-- Profile Image -->
    <img
      src="/images/home-logo.png"
      alt="Albert Miguela"
      class="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-40 lg:h-40
             rounded-full object-cover
             shadow-lg ring-4 ring-gray-200 dark:ring-gray-700
             transition-all duration-500"
      loading="lazy"
      data-aos="fade-down"
      data-aos-duration="800"
    />

    <!-- Name -->
    <h1
      class="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-5xl font-extrabold
             tracking-tight
             text-gray-900 dark:text-gray-100
             transition-colors duration-500"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
    >
      Hi, I’m
      <span class="text-[#34baeb] dark:text-[#34baeb]">
        Albert Miguela
      </span>
    </h1>

    <!-- Role -->
    <p
      class="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg
             font-medium
             text-gray-700 dark:text-gray-300"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      Junior Full-Stack Developer
    </p>

    <!-- Bio -->
    <p
      class="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl font-thin
             text-xs sm:text-sm md:text-base
             leading-relaxed
             text-gray-600 dark:text-gray-400
             transition-colors duration-500"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="600"
    >
      Junior Full-Stack Developer with 2 years of hands-on experience designing and maintaining secure, scalable web applications using Laravel, Vue.js, and PostgreSQL. Proven experience in building HR systems and device-tracking platforms that support business operations. Focused on clean, maintainable code that drives efficiency and usability.
    </p>

    <!-- Call to Actions -->
    <div
      class="mt-6 sm:mt-8 flex flex-row gap-3 sm:gap-4 justify-center w-full flex-wrap"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="800"
    >
    <a
      href="/pdf/Albert_Miguela-Resume.pdf"
      download="Albert_Miguela-Resume.pdf"
      class="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full 
            bg-[#34baeb] text-white hover:text-white
            transition-all duration-300
            shadow-md text-center text-sm sm:text-base"
    >
      <!-- Download Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 3v12m0 0l-4-4m4 4l4-4"/>
      </svg>
      Resume
    </a>

      <a
        href="#contact"
        class="px-4 py-2 sm:px-6 sm:py-3 rounded-full
               border border-gray-300 dark:border-gray-600
               text-gray-800 dark:text-gray-200 hover:text-black
               hover:bg-gray-100 dark:hover:bg-gray-800
               transition-all duration-300 text-center text-sm sm:text-base"
      >
        Contact Me
      </a>
    </div>

    <!-- Social Icons Below Buttons -->
    <div
      class="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center flex-wrap"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="800"
    >
      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/albert-miguela-019a59240/" target="_blank"
         class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                rounded-full bg-gray-200 dark:bg-gray-800
                hover:bg-gray-300 dark:hover:bg-gray-700
                transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.06 3.75-2.06 4 0 4.73 2.63 4.73 6.05V24h-4V14.44c0-2.29-.04-5.24-3.2-5.24-3.2 0-3.69 2.5-3.69 5.1V24h-4V8z"/>
        </svg>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/mIgsD3v" target="_blank"
         class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                rounded-full bg-gray-200 dark:bg-gray-800
                hover:bg-gray-300 dark:hover:bg-gray-700
                transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.465-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.922.42.36.81 1.096.81 2.21 0 1.596-.015 2.884-.015 3.276 0 .315.21.697.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </a>

      <!-- Facebook -->
      <a href="https://www.facebook.com/albert.miguela" target="_blank"
         class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                rounded-full bg-gray-200 dark:bg-gray-800
                hover:bg-gray-300 dark:hover:bg-gray-700
                transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
        </svg>
      </a>

      <!-- Instagram -->
      <a href="https://www.instagram.com/migs_albert/" target="_blank"
         class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                rounded-full bg-gray-200 dark:bg-gray-800
                hover:bg-gray-300 dark:hover:bg-gray-700
                transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.347 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.347-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.347-2.633 1.322-3.608C4.53 2.51 5.797 2.225 7.163 2.163 8.428 2.105 8.808 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.782.13 4.623.42 3.675 1.368 2.727 2.316 2.437 3.475 2.38 4.745 2.321 6.025 2.308 6.434 2.308 12c0 5.566.013 5.975.072 7.255.058 1.27.348 2.429 1.296 3.377.948.948 2.107 1.238 3.377 1.296 1.28.059 1.689.072 7.255.072s5.975-.013 7.255-.072c1.27-.058 2.429-.348 3.377-1.296.948-.948 1.238-2.107 1.296-3.377.059-1.28.072-1.689.072-7.255s-.013-5.975-.072-7.255c-.058-1.27-.348-2.429-1.296-3.377-.948-.948-2.107-1.238-3.377-1.296C17.259.013 16.85 0 12 0z"/>
          <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z"/>
        </svg>
      </a>
    </div>
  </div>
</section>



    <section
      id="skills"
      class="bg-gray-50 dark:bg-gray-800 transition-colors duration-500 min-h-[650px]  <!-- ensures mobile has enough height -->
            pt-20 lg:pt-28
            pb-12"
    >
      <div class="max-w-6xl mx-auto px-4 text-center">
        <!-- Section Title -->
        <h2
          class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"  data-aos="fade-up"
          data-aos-delay="100"
        
        >
          Skills
        </h2>

        <!-- Section Description -->
        <p
          class="max-w-[90%] lg:max-w-[900px] mx-auto text-center
         text-sm sm:text-base md:text-lg
         font-light leading-relaxed
         text-gray-600 dark:text-gray-400
         mb-12 transition-colors duration-500"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          These are the key skills and technologies I regularly use to build modern, 
            efficient, and maintainable web applications. Tools and technologies employed 
            in project implementation.
        </p>

        <!-- Skills Grid -->
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="flex flex-col items-center justify-center
                  bg-gray-200 dark:bg-gray-700
                  rounded-lg p-4
                  hover:scale-105 transform transition-all duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 40"
          >
            <img :src="skill.icon" class="w-15 h-10 mb-2" />
            <span class="text-sm font-medium text-gray-800 dark:text-gray-200">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </section>


<!-- Projects Section -->
 <!-- Projects Section -->
  <section
    id="projects"
    class="bg-white dark:bg-gray-900 transition-colors duration-500
           min-h-[650px] pt-20 lg:pt-28 pb-12"
  >
    <h2
      class="text-3xl font-bold text-gray-800 dark:text-gray-100
             text-center mb-6"
      data-aos="fade-up"
    >
      Projects
    </h2>

    <p
      class="max-w-[90%] lg:max-w-[900px] mx-auto text-center
             text-sm sm:text-base md:text-lg
             font-light leading-relaxed
             text-gray-600 dark:text-gray-400
             mb-12 transition-colors duration-500"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
    >
      Throughout my professional experience, I have worked on a variety of projects that showcase my skills in full-stack development. Below are some of the notable projects I have developed, highlighting my contributions to building secure, scalable, and user-friendly web applications.
    </p>

    <!-- Projects Grid -->
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- Project Card -->
<div
  v-for="(project, index) in projects"
  :key="project.title"
  @click="openModal(project)"
  class="relative cursor-pointer bg-gray-100 dark:bg-gray-800
         rounded-2xl shadow-md overflow-visible
         hover:shadow-xl transition-all duration-300"
  data-aos="fade-up"
  :data-aos-delay="index * 100"
>
  <img
    :src="project.thumbnail"
    alt="Project Thumbnail"
    class="w-full h-48 object-cover
           transform transition-transform duration-500
           hover:scale-55 hover:-translate-x-6 hover:-translate-y-4 hover:-rotate-3 hover:z-10 rounded-lg"
  />

  <div class="p-6 relative z-20">
    <!-- Title + Icons -->
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {{ project.title }}
      </h3>

      <div class="flex gap-2">
        <a
          v-for="(link, idx) in project.links"
          :key="idx"
          :href="link.enabled ? link.url : null"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          :class="{
            'text-gray-400 hover:text-gray-400 transition-colors': link.enabled,
            'text-gray-400 cursor-not-allowed': !link.enabled
          }"
        >
          <LiveIcon v-if="link.type === 'live'" class="w-5 h-5"/>
          <GithubIcon v-else-if="link.type === 'github'" class="w-5 h-5"/>
        </a>
      </div>
    </div>

    <p class="text-gray-600 dark:text-gray-300 text-sm">
      {{ project.description }}
    </p>
  </div>
</div>


      </div>
    </div>
  </section>

  <!-- Project Modal -->
  <ProjectModal
    v-if="selectedProject"
    :show="showModal"
    :project="selectedProject"
    @close="showModal = false"
  />



<!-- Education Section -->
<section
  id="education"
  class="bg-gray-50 dark:bg-gray-800 transition-colors duration-500 min-h-[650px] pt-20 lg:pt-28 pb-12"
>
  <!-- Section Heading -->
  <h2
    class="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    Education
  </h2>

  <!-- Section Description -->
  <p
    class="max-w-[90%] lg:max-w-[900px] mx-auto text-center
           text-sm sm:text-base md:text-lg
           font-light leading-relaxed
           text-gray-600 dark:text-gray-400
           mb-12 mt-6 transition-colors duration-500"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="200"
  >
    Here is an overview of my educational background and academic attainment,
    which laid the foundation for my skills in software development,
    problem-solving, and continuous learning.
  </p>

  <div class="relative max-w-5xl mx-auto">

    <!-- Desktop Timeline -->
    <div class="hidden md:block">
      <!-- Vertical Line -->
      <div class="absolute left-1/2 -translate-x-1/2 h-full w-[0.5px] bg-gray-300 dark:bg-gray-600"></div>

      <!-- Item 1 -->
      <div
        class="mb-20 flex flex-col-reverse md:flex-row items-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div class="md:w-1/2 md:pr-12 flex items-center justify-end gap-6 text-right flex-col md:flex-row">
          <img src="/education/qcu.png" alt="Quezon City University" class="w-28 h-28 object-contain md:order-2 mb-0 md:mb-0"/>
          <div class="md:order-1">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              College
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 mt-1">
             Bachelor of Science in Information Technology - Quezon City University
            </p>
            <span class="text-base text-gray-500 dark:text-gray-400">
             August 2020 – June 2024
            </span>
          </div>
        </div>

      <div
  class="relative z-10 w-8 h-8 bg-[#34baeb] rounded-full
         border-4 border-white dark:border-gray-800 md:mx-0 mx-auto self-start"
></div>


        <div class="md:w-1/2 md:pl-12"></div>
      </div>

      <!-- Item 2 -->
      <div
        class="mb-20 flex flex-col-reverse md:flex-row items-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div class="md:w-1/2 md:pr-12"></div>

       <div
  class="relative z-10 w-8 h-8 bg-[#34baeb] rounded-full
         border-4 border-white dark:border-gray-800 md:mx-0 mx-auto self-start"
></div>


        <div class="md:w-1/2 md:pl-12 flex items-center gap-6 text-left flex-col md:flex-row">
          <img src="/education/olfu.png" alt="Our Lady of Fatima University" class="w-28 h-28 object-contain mb-0 md:mb-0 md:order-2"/>
          <div class="md:order-1">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Senior High School
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 mt-1">
              IT & STEM Strands – Our Lady of Fatima University
            </p>
            <span class="text-base text-gray-500 dark:text-gray-400">
              June 2018 – March 2020
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Timeline -->
    <div class="block md:hidden relative">
      <!-- Vertical Line always visible -->
      <div class="absolute left-10 top-0 h-full w-[0.5px] bg-gray-300 dark:bg-gray-600"></div>

      <!-- Item 1 -->
      <div
        class="mb-20 flex flex-col items-start relative"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <!-- Dot -->
        <div class="absolute left-10 -translate-x-1/2 z-10 w-8 h-8 bg-[#34baeb] rounded-full border-4 border-white dark:border-gray-800 mt-0"></div>

        <div class="ml-16 flex flex-col items-start gap-4">
          <img src="/education/qcu.png" alt="Quezon City University" class="w-24 h-24 object-contain mb-2"/>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
             College
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-400 mt-1">
              Bachelor of Science in Information Technology - Quezon City University
            </p>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              August 2020 – June 2024
            </span>
          </div>
        </div>
      </div>

      <!-- Item 2 -->
      <div
        class="mb-20 flex flex-col items-start relative"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <!-- Dot -->
        <div class="absolute left-10 -translate-x-1/2 z-10 w-8 h-8 bg-[#34baeb] rounded-full border-4 border-white dark:border-gray-800 mt-0"></div>

        <div class="ml-16 flex flex-col items-start gap-4">
          <img src="/education/olfu.png" alt="Our Lady of Fatima University" class="w-24 h-24 object-contain mb-2"/>
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Senior High School
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-400 mt-1">
              IT & STEM Strands – Our Lady of Fatima University
            </p>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              June 2018 – March 2020
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>





<!-- Contact Section -->
<section
  id="contact"
  class="bg-white dark:bg-gray-900 transition-colors duration-500 min-h-[450px] pt-20 lg:pt-20 pb-12"
>
  <!-- Section Heading -->
  <h2
    class="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    Contact
  </h2>

  <!-- Section Description -->
  <p
    class="max-w-[90%] lg:max-w-[900px] mx-auto text-center
           text-sm sm:text-base md:text-lg
           font-light leading-relaxed
           text-gray-600 dark:text-gray-400
           mb-12 mt-2 transition-colors duration-500"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="100"
  >
    You can reach me through the following social platforms. Click the links to get in touch or follow me.
  </p>

<div class="max-w-6xl mx-auto px-4">
  <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

    <!-- Contact Item 1 -->
    <div
      class="flex items-center gap-3 p-3 rounded-2xl transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-800"
      data-aos="zoom-in-up"
      data-aos-duration="800"
      data-aos-delay="150"
    >
      <img src="/socials/gmail.png" alt="Gmail" class="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-110 transition-transform duration-300"/>
      <div>
        <h3 class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">Gmail</h3>
        <a href="mailto:albertmiguela7@gmail.com" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb] break-all">
          albertmiguela7@gmail.com
        </a>
      </div>
    </div>

    <!-- Contact Item 2 -->
    <div
      class="flex items-center gap-3 p-3 rounded-2xl transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-800"
      data-aos="zoom-in-up"
      data-aos-duration="800"
      data-aos-delay="250"
    >
      <img src="/socials/linkedin.png" alt="LinkedIn" class="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-110 transition-transform duration-300"/>
      <div>
        <h3 class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">LinkedIn</h3>
        <a href="https://www.linkedin.com/in/albert-miguela-019a59240/" target="_blank" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb]">
          Albert Miguela
        </a>
      </div>
    </div>

    <!-- Contact Item 3 -->
    <div
      class="flex items-center gap-3 p-3 rounded-2xl transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-800"
      data-aos="zoom-in-up"
      data-aos-duration="800"
      data-aos-delay="350"
    >
      <img src="/socials/github.png" alt="Github" class="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-110 transition-transform duration-300"/>
      <div>
        <h3 class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">Github</h3>
        <a href="https://github.com/mIgsD3v" target="_blank" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb]">
          mIgsD3v
        </a>
      </div>
    </div>

    <!-- Contact Item 4 -->
    <div
      class="flex items-center gap-3 p-3 rounded-2xl transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-800"
      data-aos="zoom-in-up"
      data-aos-duration="800"
      data-aos-delay="450"
    >
      <img src="/socials/facebook.png" alt="Facebook" class="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-110 transition-transform duration-300"/>
      <div>
        <h3 class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">Facebook</h3>
        <a href="https://www.facebook.com/albert.miguela" target="_blank" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb]">
          Albert Miguela
        </a>
      </div>
    </div>

    <!-- Contact Item 5 -->
    <div
      class="flex items-center gap-3 p-3 rounded-2xl transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-gray-800"
      data-aos="zoom-in-up"
      data-aos-duration="800"
      data-aos-delay="550"
    >
      <img src="/socials/instagram.png" alt="Instagram" class="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-110 transition-transform duration-300"/>
      <div>
        <h3 class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">Instagram</h3>
        <a href="https://www.instagram.com/migs_albert/" target="_blank" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb]">
          @migs_albert
        </a>
      </div>
    </div>

  </div>
<hr class="my-10 border-t border-gray-200 dark:border-gray-700">

  <!-- Sitemap Row -->
  <div class="mt-12 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="650">
   
    <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
      <a href="#home" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb] transition-colors duration-300">Home</a>
      <a href="#skills" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb] transition-colors duration-300">Skills</a>
      <a href="#projects" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb] transition-colors duration-300">Projects</a>
      <a href="#education" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb] transition-colors duration-300">Education</a>
      <a href="#contact" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#34baeb] dark:hover:text-[#34baeb] transition-colors duration-300">Contact</a>
    </div>
  </div>
 <hr class="mt-10 border-t border-gray-200 dark:border-gray-700">

</div>

</section>



  </div>
</template>

<style scoped>
</style>


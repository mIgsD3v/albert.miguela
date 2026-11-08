// Single source of truth for portfolio content.

export const profile = {
  name: "Albert Miguela",
  handle: "mIgsD3v",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Laravel Developer", "Vue.js Developer", "AI Integration Developer"],
  location: "Philippines",
  email: "albertmiguela7@gmail.com",
  avatar: "/images/home-logo.png",
  resume: "/pdf/Albert_Miguela-Resume.pdf",
  bio:
    "Full-Stack Developer with 3 years of hands-on experience in designing and maintaining secure, scalable web applications. Proven experience in developing internal systems and operational platforms that support business processes. Focused on writing clean, maintainable code that improves efficiency, reliability, and user experience.",
};

export const socials = [
  { name: "LinkedIn", label: "Albert Miguela", url: "https://www.linkedin.com/in/albert-miguela-019a59240/", icon: "linkedin" },
  { name: "GitHub", label: "mIgsD3v", url: "https://github.com/mIgsD3v", icon: "github" },
  { name: "Facebook", label: "Albert Miguela", url: "https://www.facebook.com/albert.miguela", icon: "facebook" },
  { name: "Instagram", label: "@migs_albert", url: "https://www.instagram.com/migs_albert/", icon: "instagram" },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Frontend Development",
    icon: "frontend",
    text: "Responsive, accessible interfaces with Vue.js and Tailwind CSS, translated faithfully from Figma designs.",
  },
  {
    title: "Backend & APIs",
    icon: "backend",
    text: "Secure Laravel applications and REST APIs with JWT auth, role-based permissions and approval workflows.",
  },
  {
    title: "Database Design",
    icon: "database",
    text: "Well-structured PostgreSQL, MySQL and MS SQL schemas, with reporting and Excel / PDF exports.",
  },
  {
    title: "Deployment & DevOps",
    icon: "deploy",
    text: "Shipping to DigitalOcean, Laravel Forge, Vercel and cPanel hosts, with Docker for consistent environments.",
  },
];

const icon = (file) => `/techstack-icons/${file}`;

export const skillCategories = ["All", "Frontend", "Backend", "Database", "AI", "DevOps", "Tools"];

export const skills = [
  { name: "Vue.js", icon: icon("vue.js.png"), category: "Frontend" },
  { name: "React", icon: icon("react.png"), category: "Frontend" },
  { name: "JavaScript", icon: icon("javascript.png"), category: "Frontend" },
  { name: "HTML", icon: icon("html.png"), category: "Frontend" },
  { name: "CSS", icon: icon("css.png"), category: "Frontend" },
  { name: "Tailwind CSS", icon: icon("tailwind.png"), category: "Frontend" },
  { name: "Axios", icon: icon("axios.png"), category: "Frontend" },
  { name: "Laravel", icon: icon("laravel.png"), category: "Backend" },
  { name: "C#", icon: icon("c-sharp.png"), category: "Backend" },
  { name: "PostgreSQL", icon: icon("postgreSQL.png"), category: "Database" },
  { name: "MySQL", icon: icon("mysql.png"), category: "Database" },
  { name: "MS SQL", icon: icon("mssql.png"), category: "Database" },
  { name: "Supabase", icon: icon("supabase.png"), category: "Database" },
  { name: "Claude AI", icon: icon("claude.svg"), category: "AI" },
  { name: "RAG", icon: icon("rag.svg"), category: "AI" },
  { name: "Qdrant", icon: icon("qdrant.png"), category: "AI" },
  { name: "Langfuse", icon: icon("langfuse.png"), category: "AI" },
  { name: "DBeaver", icon: icon("dbeaver.png"), category: "AI" },
  { name: "Docker", icon: icon("docker.png"), category: "DevOps" },
  { name: "Laravel Forge", icon: icon("laravelforge.png"), category: "DevOps" },
  { name: "DigitalOcean", icon: icon("digitalocean.png"), category: "DevOps" },
  { name: "Hostinger", icon: icon("hostinger.png"), category: "DevOps" },
  { name: "GoDaddy", icon: icon("godaddy.png"), category: "DevOps" },
  { name: "cPanel", icon: icon("cpanel.png"), category: "DevOps" },
  { name: "Ubuntu", icon: icon("ubuntu.svg"), category: "DevOps" },
  { name: "IIS", icon: icon("iis.svg"), category: "DevOps" },
  { name: "Git", icon: icon("git.png"), category: "Tools" },
  { name: "GitHub", icon: icon("github.png"), category: "Tools" },
  { name: "VS Code", icon: icon("vscode.png"), category: "Tools" },
  { name: "Visual Studio", icon: icon("visualstudio.png"), category: "Tools" },
  { name: "Postman", icon: icon("postman.png"), category: "Tools" },
  { name: "Mailtrap", icon: icon("mailtrap.png"), category: "Tools" },
  { name: "Laragon", icon: icon("laragon.png"), category: "Tools" },
];

// Helper: several screenshots sharing one caption
const shots = (images, caption) => images.map((image) => ({ image, caption }));

const p = (file) => `/projects/${file}`;

const hrmsOverview =
  "Internal HR Management System used by 100+ employees, built with Laravel (Blade), Bootstrap, and PostgreSQL, featuring attendance tracking, multi-level approval workflows for undertime, official business, overtime, leave, work-from-home, and reconsideration requests, finance management, room/vehicle reservation, and notes section, with automated reporting.";

export const projects = [
  {
    title: "MetMemo",
    category: "SaaS · AI",
    thumbnail: p("metmemo-hero.png"),
    summary:
      "Digital business card with an AI assistant that remembers everyone you meet and drafts your follow-ups.",
    description:
      "MetMemo is a digital business card with an AI assistant that remembers everyone you meet and tells you when to follow up. Share a card by link or QR code, capture leads in one tap, scan paper cards into contacts, and ask the assistant what you talked about or who is due for a follow-up.",
    slides: [
      {
        image: p("metmemo-hero.png"),
        caption:
          "“Every meeting, remembered.” A digital business card with an AI assistant that remembers everyone you meet and tells you when to follow up. No app to install: it works on any phone, and nothing is ever sent without the user’s approval.",
      },
      {
        image: p("metmemo-how.png"),
        caption:
          "From first hello to follow-up in four steps: create a card, share it by link or QR code, capture the contact in one tap, and get a follow-up date with an AI-drafted message two days later.",
      },
      {
        image: p("metmemo-features.png"),
        caption:
          "Three AI helpers. Scan reads any paper business card (blurry or rotated) and flags uncertain fields. Remember answers questions like “what did I talk about with Juan?” using only the user’s own notes (retrieval-grounded, so it says when it doesn’t know). Follow up lists who is due this week with draft messages.",
      },
      {
        image: p("metmemo-more.png"),
        caption:
          "Everything around the assistant: per-card QR codes and short links, one-tap card swap between users, lead forms and vCard download, contacts with notes, reminders and alerts, CSV / Excel / vCard export, insights, Google sign-in with optional two-factor authentication, and a mobile-first UI with light and dark themes.",
      },
      {
        image: p("metmemo-use-cases.png"),
        caption:
          "Built for people who meet a lot of people: expos and trade shows, sales and business development, and students at career fairs. Each use case shows how MetMemo turns a stack of paper cards into timely follow-ups.",
      },
      {
        image: p("metmemo-two-sides.png"),
        caption:
          "Designed for both sides of the handshake. Card owners build cards, capture leads and get AI follow-up drafts, while the people they meet need no account: they scan the QR, save the contact in one tap and leave their details.",
      },
    ],
    features: [
      "AI business-card scanning (OCR)",
      "RAG assistant grounded in your notes",
      "AI-drafted follow-up messages",
      "QR / link sharing, card swap & vCard",
      "Google sign-in & two-factor auth",
      "CSV, Excel & vCard export",
    ],
    tech: ["AI Assistant", "RAG", "OCR", "Google OAuth", "2FA", "QR / vCard"],
    links: [
      { type: "live", url: "https://metmemo.app/", enabled: true },
      { type: "github", url: "https://github.com/mIgsD3v", enabled: false },
    ],
  },
  {
    title: "HR Management System",
    category: "Enterprise · Internal",
    thumbnail: p("hrms-1.png"),
    summary:
      "Internal HRMS used by 100+ employees — attendance, multi-level approvals, finance, reservations and automated reporting.",
    description: hrmsOverview,
    slides: [
      ...shots([p("hrms-1.png"), p("hrms-1-1.png")], hrmsOverview),
      ...shots(
        [p("hrms-2.png"), p("hrms-2-1.png")],
        "Employee attendance calendar integrated with Dahua biometric devices, featuring real-time sign-in/sign-out, HR-admin holiday inputs, calendar-based HR requests, and notification alerts."
      ),
      ...shots(
        ["hrms-3.png", "hrms-3-1.png", "hrms-3-2.png", "hrms-3-3.png", "hrms-3-4.png", "hrms-3-5.png", "hrms-3-6.png", "hrms-3-7.png", "hrms-3-8.png"].map(p),
        "Sample multi-level approval workflow involving supervisor and manager roles, implemented using Spatie Laravel permissions middleware. This approval flow is reused across OT, undertime, WFH, official business, and reconsideration requests."
      ),
      ...shots(
        [p("hrms-4.png"), p("hrms-4-1.png"), p("hrms-4-2.png")],
        "Employees can export HR requests as PDF reports, creating printable copies for OT, leave, undertime, WFH, offset, and reconsideration requests, helping the company maintain a paperless workflow."
      ),
      ...shots(
        [p("hrms-5.png"), p("hrms-5-1.png")],
        "Employees can export HR requests as Excel reports, selecting specific departments, users, and cut-off dates (start and end), for OT, leave, undertime, WFH, offset, and reconsideration requests, enabling a paperless workflow."
      ),
    ],
    features: ["Role-based access control", "Attendance & timekeeping", "OT & leave approval workflow", "Excel & PDF reports"],
    disclaimer:
      "Screenshots are shown for portfolio purposes to demonstrate system features. The system is deployed on the company’s internal server and is not for sale, distribution, or commercial use.",
    tech: ["Laravel", "Blade", "Bootstrap", "PostgreSQL"],
    links: [
      { type: "live", url: "https://tsi.net.ph", enabled: false },
      { type: "github", url: "https://github.com/mIgsD3v", enabled: true },
    ],
  },
  {
    title: "Company Website",
    category: "Corporate · CMS",
    thumbnail: p("company-website-1.png"),
    summary:
      "Corporate site with 6 core modules and a full admin panel, built from Figma designs and deployed on DigitalOcean.",
    description:
      "Corporate website with 6 core modules (Home, About Us, Services, Solutions, News & Events, Contact Us) plus an admin panel for managing solutions, article posting, and logo storage in the database. Built using Vue.js, Laravel, PostgreSQL, JWT authentication, and Tailwind CSS, and deployed via Laravel Forge on DigitalOcean. The design follows the company’s UI/UX standards, which were created in Figma and implemented in the website.",
    slides: [
      {
        image: p("company-website-1.png"),
        caption:
          "Corporate website with 6 core modules (Home, About Us, Services, Solutions, News & Events, Contact Us) plus an admin panel for managing solutions, article posting, and logo storage in the database. Built using Vue.js, Laravel, PostgreSQL, JWT authentication, and Tailwind CSS, and deployed via Laravel Forge on DigitalOcean. The design follows the company’s UI/UX standards, which were created in Figma and implemented in the website.",
      },
      {
        image: p("company-website-1-1.png"),
        caption:
          "Admin dashboard for managing content and system data, including article posting and management, full CRUD for solutions and brands, contact request handling, company videos and feedback management, user settings (name and password updates), and detailed user activity logs that track who performed each insert, update, or delete action.",
      },
    ],
    features: ["6 public modules", "Admin CMS with activity logs", "JWT authentication", "Figma-driven UI"],
    disclaimer:
      "Screenshots are presented for portfolio purposes to demonstrate system features and functionality. The system is not for sale, distribution, or commercial use.",
    tech: ["Laravel", "Vue.js", "JWT", "PostgreSQL", "Figma", "Tailwind CSS", "DigitalOcean", "Laravel Forge"],
    links: [
      { type: "live", url: "https://tsi.net.ph", enabled: true },
      { type: "github", url: "https://github.com/mIgsD3v", enabled: true },
    ],
  },
  {
    title: "Cozy Leaf",
    category: "Restaurant · Frontend",
    thumbnail: p("cozy-leaf-1.png"),
    summary:
      "Mobile-first food menu with smooth category filtering, designed in Figma and built with Vue.js and Tailwind CSS.",
    description:
      "A responsive food menu interface for Cozy Leaf, designed in Figma and developed using Vue.js and Tailwind CSS. The project focuses on clean UI/UX standards, smooth category filtering, and a mobile-first layout for an optimal user experience.",
    slides: [
      {
        image: p("cozy-leaf-1.png"),
        caption:
          "A responsive food menu interface for Cozy Leaf, designed in Figma and developed using Vue.js and Tailwind CSS. The project features 5 main modules — Home, Menu, Catering, About, and Contact Us — with clean UI/UX standards, smooth category filtering, and a mobile-first layout for an optimal user experience.",
      },
    ],
    features: ["Figma-based UI/UX design", "Category-based menu filtering", "Mobile-first responsive layout", "Vue component architecture"],
    tech: ["Vue.js", "Figma", "Tailwind CSS", "Vercel"],
    links: [
      { type: "live", url: "https://cozyleaf-v2.vercel.app/", enabled: true },
      { type: "github", url: "https://github.com/mIgsD3v/cozy.leaf-v2.git", enabled: true },
    ],
  },
];

export const education = [
  {
    level: "College",
    degree: "Bachelor of Science in Information Technology",
    school: "Quezon City University",
    period: "Aug 2020 – Jun 2024",
    logo: "/education/qcu.png",
  },
  {
    level: "Senior High School",
    degree: "IT & STEM Strands",
    school: "Our Lady of Fatima University",
    period: "Jun 2018 – Mar 2020",
    logo: "/education/olfu.png",
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 100, suffix: "+", label: "Employees served by HRMS" },
  { value: projects.length, suffix: "", label: "Featured projects" },
  { value: skills.length, suffix: "", label: "Tools & technologies" },
];

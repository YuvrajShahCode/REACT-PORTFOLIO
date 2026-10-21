export const PERSONAL_INFO = {
  name: "Yuvraj Shah",
  initials: "YS",
  role: "Founder & CEO",
  company: "Zuptrix Solutions",
  status: "Building with technology",
  headline: {
    prefix: "BUILDING",
    gradient: "DIGITAL",
    suffix: "EXPERIENCES."
  },
  bio: "Founder of Zuptrix Solutions, building modern digital products, technology solutions, and meaningful web experiences.",
  quote: "Technology is most powerful when it solves real problems.",
  aboutStatement: "I build technology with purpose.",
  aboutDescription: "Yuvraj Shah is a technology-focused Founder & CEO passionate about turning ideas into practical digital products and modern technology solutions.",
  socials: [
    { name: "GitHub", url: "https://github.com/YuvrajShahCode", handle: "github.com" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com" },
    { name: "Email", url: "mailto:yuvrajshaah@gmail.com", handle: "yuvrajshaah@gmail.com" }
  ]
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "What I Build", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tech", href: "#tech" },
  { name: "Contact", href: "#contact" }
];

export const FOCUS_AREAS = [
  "Product Development",
  "Web Development",
  "App Development",
  "Data Analysis",
  "Digital Solutions",
  "Creative Technology"
];

export const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    description: "Building responsive, modern web experiences and application interfaces with clean architecture and performance at the core.",
    icon: "Globe"
  },
  {
    number: "02",
    title: "Mobile & Cross-Platform Apps",
    description: "Crafting intuitive application flows and cross-platform experiences tailored for reliability, speed, and clean usability.",
    icon: "Smartphone"
  },
  {
    number: "03",
    title: "Full-Stack Applications",
    description: "Engineering cohesive end-to-end architectures connecting robust backend business logic with dynamic client interfaces.",
    icon: "Layers"
  },
  {
    number: "04",
    title: "Digital Products",
    description: "Transforming ambitious ideas into practical, scalable digital solutions with product clarity and iterative development.",
    icon: "Box"
  },
  {
    number: "05",
    title: "Data Analysis",
    description: "Working with structured datasets, assessing information quality, validating datasets, and deriving actionable analytical insights.",
    icon: "BarChart3"
  },
  {
    number: "06",
    title: "Creative & UI/UX",
    description: "Designing digital assets, cohesive visual hierarchies, and user-centric interfaces that bring technical products to life.",
    icon: "Sparkles"
  },
  {
    number: "07",
    title: "Content & Editorial",
    description: "Creating structured, search-friendly, and informative content for digital platforms, blogs, and technical publications.",
  }
];

export const EXPERIENCE_AREAS = [
  {
    number: "01",
    title: "Data Analysis and Validation",
    description: "Working with structured information, reviewing datasets, validating data quality, and turning information into useful insights.",
    skills: ["Data Quality", "Dataset Validation", "Structured Information", "Pattern Analysis"]
  },
  {
    number: "02",
    title: "Accessibility Mapping in Rural and Urban Areas",
    description: "Working with location-based information and accessibility mapping to support better understanding of rural and urban environments.",
    skills: ["Geospatial Mapping", "Urban Infrastructure", "Rural Accessibility", "Spatial Data Analysis"]
  },
  {
    number: "03",
    title: "Video Editing",
    description: "Creating and editing visual content with attention to storytelling, pacing, composition, and presentation.",
    skills: ["Visual Storytelling", "Pacing & Motion", "Composition", "Digital Media Production"]
  },
  {
    number: "04",
    title: "Graphics Designing",
    description: "Creating digital graphics and visual assets for websites, social media, and digital products.",
    skills: ["Brand Identity", "Vector Graphics", "UI Assets", "Visual Composition"]
  },
  {
    number: "05",
    title: "Blog Writing",
    description: "Creating structured, informative, and search-friendly written content for digital platforms.",
    skills: ["Structured Writing", "Technical Editorial", "Content Strategy", "Digital Communication"]
  },
  {
    number: "06",
    title: "Web Development and App Development",
    description: "Building responsive web experiences and application interfaces using modern development technologies.",
    skills: ["Modern JavaScript", "React", "Responsive UI", "Full-Stack Concepts", "Component Architecture"]
  }
];

export const PROJECT_CATEGORIES = [
  "All",
  "E-commerce",
  "Learning Platform",
  "Blog Website",
  "Full-Stack"
];

export const PROJECTS = [
  {
    id: "zuptrix-solutions",
    name: "Zuptrix Solutions",
    type: "Full-Stack",
    featured: true,
    description: "Technology solutions and digital products focused on building modern, practical, and scalable web experiences.",
    longDescription: "The flagship digital initiative engineered to build high-performance web platforms, bespoke client digital architecture, and scalable software solutions. Features modular component systems, optimized workflows, and responsive aesthetics.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Architecture", "API Integration"],
    accentGradient: "from-indigo-600/30 via-violet-600/20 to-purple-800/10",
    keyHighlights: [
      "Modern full-stack application structure",
      "Scalable digital product architecture",
      "Tailored for speed, accessibility, and high performance"
    ]
  },
  {
    id: "ecommerce-platform",
    name: "Modern E-Commerce Experience",
    type: "E-commerce",
    featured: false,
    description: "A streamlined digital storefront architecture featuring dynamic catalog filtering, frictionless cart workflows, and responsive checkout flows.",
    longDescription: "Engineered with modern state management, high-performance image optimization, and structured component architecture to deliver seamless e-commerce transactions across mobile and desktop devices.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "State Architecture"],
    accentGradient: "from-blue-600/30 via-indigo-600/20 to-violet-800/10",
    keyHighlights: [
      "Dynamic catalog browsing and instant filtering",
      "Responsive cart management with real-time feedback",
      "Mobile-first checkout UI design"
    ]
  },
  {
    id: "learning-platform",
    name: "Interactive Learning Platform",
    type: "Learning Platform",
    featured: false,
    description: "Modular educational management portal built for structured curriculum delivery, progress tracking, and distraction-free learning environments.",
    longDescription: "Designed to provide students and educators with an intuitive portal for lesson walkthroughs, interactive learning milestones, and clear curriculum organization.",
    technologies: ["React", "JavaScript", "CSS Architecture", "UI/UX Design"],
    accentGradient: "from-violet-600/30 via-purple-600/20 to-indigo-800/10",
    keyHighlights: [
      "Structured module progression and milestone tracking",
      "Accessible typography and high readability layout",
      "Seamless content navigation and quick resource access"
    ]
  },
  {
    id: "tech-editorial-blog",
    name: "Digital Editorial & Blog Portal",
    type: "Blog Website",
    featured: false,
    description: "High-performance editorial blog architecture engineered for technical publishing, structured articles, and search engine discoverability.",
    longDescription: "A content-driven platform integrating headless CMS concepts, clean semantic markup, fast article indexing, and rich editorial typography for in-depth technology reading.",
    technologies: ["React", "Sanity", "JavaScript", "Tailwind CSS", "SEO"],
    accentGradient: "from-cyan-600/20 via-blue-600/20 to-violet-800/10",
    keyHighlights: [
      "Semantic HTML article hierarchy with search-friendly markup",
      "CMS-ready content schemas and dynamic rendering",
      "Distraction-free dark mode reading experience"
    ]
  },
  {
    id: "analytics-cloud-app",
    name: "Full-Stack Data & Product Hub",
    type: "Full-Stack",
    featured: false,
    description: "An integrated full-stack portal combining dataset validation workflows, visual information metrics, and real-time interface controls.",
    longDescription: "Connects Python/Django backend processing with a responsive React frontend to deliver robust data management, dataset exploration, and reliable API endpoints.",
    technologies: ["Python", "Django", "React", "Tailwind CSS", "REST API"],
    accentGradient: "from-purple-600/30 via-indigo-600/20 to-blue-800/10",
    keyHighlights: [
      "Full-stack integration between React frontend and Django backend",
      "Structured validation workflows for complex datasets",
      "Clean API architecture and rapid query response"
    ]
  }
];

export const TECHNOLOGIES = [
  { name: "JavaScript", category: "Core & Frontend", level: "Primary Language", icon: "Code2" },
  { name: "React", category: "Core & Frontend", level: "UI Library", icon: "Component" },
  { name: "Next.js", category: "Core & Frontend", level: "Production Framework", icon: "Globe" },
  { name: "HTML", category: "Core & Frontend", level: "Semantic Markup", icon: "FileCode" },
  { name: "CSS", category: "Core & Frontend", level: "Styling Standards", icon: "Palette" },
  { name: "Tailwind CSS", category: "Core & Frontend", level: "Utility-First CSS", icon: "Wind" },
  { name: "Python", category: "Backend & Data", level: "Backend & Scripting", icon: "Terminal" },
  { name: "Django", category: "Backend & Data", level: "Web Framework", icon: "Server" },
  { name: "Sanity", category: "Backend & Data", level: "Headless CMS", icon: "Database" },
  { name: "Git", category: "DevOps & Workflow", level: "Version Control", icon: "GitBranch" },
  { name: "GitHub", category: "DevOps & Workflow", level: "Collaboration & CI", icon: "Github" },
  { name: "Vercel", category: "DevOps & Workflow", level: "Deployment Platform", icon: "Cloud" },
  { name: "Figma", category: "Design & Prototyping", level: "UI/UX Design", icon: "Figma" },
  { name: "Adobe Photoshop", category: "Design & Prototyping", level: "Image Editing", icon: "Image" },
  { name:"Supabase", category: "Backend & Data", level: "Database & Auth", icon: "Database" }
];

export const CAREERS_URL = "https://careers.bhavishyatech.com";

export const SITE = {
  name: "Bhavishya Tech",
  domain: "https://www.bhavishyatech.com",
  email: "founder@bhavishyatech.com",
  phone: "+91 63970 53122",
  phoneHref: "+916397053122",
  location: "Bareilly, UP, India (Serving Globally)",
  tagline: "We build software that scales.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Careers", href: CAREERS_URL },
];


export const TRUST_CHIPS = ["Healthcare", "Restaurants", "Clinics", "Retail"];

export const PROBLEMS = [
  { icon: "💸", text: "In-house tech talent is expensive to hire and manage." },
  { icon: "👻", text: "Freelancers disappear when your business needs post-launch scaling." },
  { icon: "🏙️", text: "MNC-grade tech agencies charge astronomical rates." },
  { icon: "⏳", text: "Delayed launches mean missing crucial market opportunities." },
];

export const SOLUTIONS = [
  "Clear timelines and fixed-scope delivery",
  "High-performance architectures built to scale",
  "Mentored by engineers from Apple & Fidelity International",
  "Custom ecommerce, web apps, and workflow automation",
  "Post-launch scaling and technical support",
  "Hybrid engagement models suited to your budget",
];

export const STEPS = [
  {
    num: "01",
    icon: "📋",
    title: "Discovery Call",
    body: "You tell us what you need. We ask the right questions. No jargon. 30 minutes is enough to scope most projects.",
  },
  {
    num: "02",
    icon: "🗺️",
    title: "Proposal & Scope",
    body: "We send a clear proposal: what gets built, when it's done, and exactly what it costs. No surprises later.",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "We Build It",
    body: "Our team gets to work. You get progress updates every week. Quality is reviewed by senior engineers throughout.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch & Support",
    body: "We deploy your product and train your team. Then we stay available for 60 days of post-launch support.",
  },
];

export const SERVICES = [
  {
    icon: "🏥",
    name: "Healthcare & Clinic Software",
    desc: "Custom appointment systems, patient records, and billing software for clinics, IVF centres, and diagnostic labs. Already shipped in production.",
    features: [
      "Online appointment booking & reminders",
      "Patient history and record management",
      "Doctor schedule and slot management",
      "Billing and invoice generation",
    ],
    featured: true,
  },
  {
    icon: "📱",
    name: "Mobile App Development",
    desc: "iOS and Android apps built for the real world. Our food ordering app QSkipper is live on the App Store — proof we ship.",
    features: ["iOS & Android (React Native)", "App Store & Play Store deployment"],
  },
  {
    icon: "🌐",
    name: "Web Applications",
    desc: "Dashboards, portals, and business management tools. Fast, responsive, and built to scale with your business.",
    features: ["Admin dashboards & portals", "E-commerce & booking platforms"],
  },
  {
    icon: "🍽️",
    name: "Restaurant & F&B Systems",
    desc: "QR-based ordering, kitchen display, and full restaurant ops management. We've built and deployed a complete system.",
    features: ["QR menu & table ordering", "Kitchen display system", "Order tracking & staff management"],
  },
  {
    icon: "🔧",
    name: "QA & Test Automation",
    desc: "Struggling with bugs and manual testing? We build automation frameworks that catch problems before your customers do.",
    features: ["UI automation (Selenium / Playwright)", "CI/CD pipeline integration"],
  },
  {
    icon: "🧩",
    name: "Custom Business Software",
    desc: "Bespoke internal tools tailored to how your business actually runs — ERPs, CRMs, and inventory systems, built and deployed for real operations.",
    features: ["ERP, CRM & inventory tools", "Workflow & process automation", "Custom dashboards & reporting"],
  },
];

export const PORTFOLIO = [
  {
    icon: "🍔",
    badge: "Live on App Store",
    badgeType: "live" as const,
    name: "QSkipper",
    desc: "Food ordering app for restaurants. Customers scan a QR code, browse the menu, and order from their table. Zero queues, faster service. Available on iOS and Android.",
    gradient: "from-amber-500/30 to-orange-400/20",
  },
  {
    icon: "🏥",
    badge: "Production Ready",
    badgeType: "built" as const,
    name: "Healthcare Appointment System",
    desc: "Full patient booking and clinic management platform. Handles doctor schedules, patient history, appointment reminders, and billing. Built for IVF centres and diagnostic labs.",
    gradient: "from-teal-500/30 to-cyan-400/20",
  },
  {
    icon: "🔍",
    badge: "Production Ready",
    badgeType: "built" as const,
    name: "QA Automation Framework",
    desc: "UI testing tool built to catch regressions before they reach production. Integrates with existing development pipelines. Reduces manual QA time significantly.",
    gradient: "from-emerald-500/30 to-teal-400/20",
  },
  {
    icon: "🍽️",
    badge: "Production Ready",
    badgeType: "built" as const,
    name: "Restaurant Operations System",
    desc: "Beyond just ordering — a complete back-of-house management system. Kitchen display, order routing, table tracking, and staff management in one platform.",
    gradient: "from-cyan-500/30 to-teal-400/20",
  },
];

export const WHY = [
  { icon: "📍", title: "Absolute Accountability", body: "Clear contracts, weekly updates, and milestone tracking. No ghosting, no excuses — we deliver what we promise." },
  { icon: "👨‍💼", title: "Senior-Mentored Teams", body: "Every project is overseen by engineers with experience at companies like Apple Inc. and Fidelity International. Quality is not optional." },
  { icon: "💰", title: "Value-Driven Pricing", body: "Priced for growing brands, not inflated enterprise agency budgets. A dedicated team without the heavy overhead." },
  { icon: "📦", title: "Fixed-Scope Delivery", body: "We define exactly what gets built before we start. No scope creep, no surprise invoices halfway through." },
  { icon: "🛡️", title: "60-Day Post-Launch Support", body: "We don't disappear after launch. 60 days of free support is included in every engagement to handle bugs and edge cases." },
  { icon: "⚡", title: "Fast Turnaround", body: "Small projects in 3–4 weeks. Larger systems in 8–12 weeks. We work in sprints with weekly visibility on progress." },
];

export const TESTIMONIALS = [
  {
    text: "We needed a booking system for our clinic but had no idea where to start. Bhavishya Tech scoped the whole project clearly, built it on time, and actually showed up when we had questions after launch. That last part mattered the most.",
    name: "Dr. Rajiv Sharma",
    role: "Clinic Owner & Founder",
    initial: "R",
  },
  {
    text: "We'd tried two freelancers before and both disappeared. Bhavishya Tech delivered our restaurant ordering app within six weeks. Our staff picked it up in a day. We've been using it ever since — no issues.",
    name: "Mohammad Ashraf",
    role: "F&B Operations Director",
    initial: "M",
  },
];

export const PRICING = [
  {
    name: "Starter",
    desc: "For small businesses that need a web presence or a simple tool built quickly.",
    originalPrice: "₹25K",
    price: "₹15K",
    unit: "onwards",
    note: "One-time project fee · 3–4 week delivery",
    features: [
      "Business website or landing page",
      "Admin panel (basic)",
      "Mobile-responsive design",
      "30-day post-launch support",
      "Source code ownership",
    ],
    cta: "Get a Quote",
    popular: false,
  },
  {
    name: "Business",
    desc: "For growing businesses that need a full product — app, system, or platform — built properly.",
    originalPrice: "₹75K",
    price: "₹45K",
    unit: "onwards",
    note: "One-time project fee · 6–10 week delivery",
    features: [
      "Custom web or mobile application",
      "Database design & backend APIs",
      "User authentication & roles",
      "60-day post-launch support",
      "Senior engineer oversight",
      "Source code ownership",
    ],
    cta: "Get a Quote",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For complex, multi-module systems with integrations, automation, and long-term maintenance needs.",
    originalPrice: "",
    price: "Custom",
    unit: "",
    note: "Scoped after discovery call · 10–16 weeks",
    features: [
      "Multi-module custom system",
      "Third-party API integrations",
      "QA automation & testing suite",
      "Dedicated project manager",
      "90-day post-launch support",
      "Priority response SLA",
    ],
    cta: "Talk to Us",
    popular: false,
  },
];

export const BUSINESS_TYPES = [
  "Clinic / Hospital",
  "Restaurant / Cafe",
  "Retail / E-commerce",
  "Diagnostic Lab",
  "Other",
];

export const STATS = [
  { value: "4+", label: "Products shipped" },
  { value: "60d", label: "Post-launch support" },
  { value: "3–4wk", label: "Starter delivery" },
  { value: "100%", label: "Source code ownership" },
];

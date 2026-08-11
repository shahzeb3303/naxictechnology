/**
 * Placeholder content for the Nexic Technologies marketing site.
 *
 * ASSET SLOTS — every field typed `?: string` is a path into /public that is
 * intentionally left undefined. Each component renders a designed fallback
 * when the field is absent, so the page looks finished today and swapping in
 * real artwork is a one-line change here. See ASSETS.md for the spec.
 */

export const site = {
  name: "Nexic Technologies",
  short: "Nexic",
  tagline: "Software that ships",
  email: "hello@nexic.tech",
  phone: "+1 (415) 555-0184",
  address: "244 Kearny Street, Floor 6, San Francisco, CA",
  founded: 2017,
} as const;

/**
 * Root-relative on purpose. A bare "#services" resolves against whatever page
 * you are on, so these would go nowhere from /contact.
 */
export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Why us", href: "/#why" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * One set of numbers, used everywhere. Keep these consistent — a visitor who
 * reads "350+ projects" here and "68" further down stops trusting both.
 */
export const stats = {
  projects: "350+",
  clients: "200+",
  years: "9",
  engineers: "24",
  retention: "94%",
} as const;

/** The four figures shown in the dark band under Process. */
export const statBlocks = [
  { value: stats.projects, label: "Projects delivered" },
  { value: stats.clients, label: "Clients worldwide" },
  { value: stats.engineers, label: "Engineers on staff" },
  { value: stats.retention, label: "Clients who return" },
] as const;

export type Client = {
  name: string;
  /** SVG logo, monochrome, max 160x40. Falls back to a typeset wordmark. */
  logo?: string;
};

export const clients: Client[] = [
  { name: "Northwind" },
  { name: "Lumen Health" },
  { name: "Cargo & Co." },
  { name: "Meridian Bank" },
  { name: "Fieldstone" },
  { name: "Atlas Robotics" },
  { name: "Vela Energy" },
  { name: "Parcelly" },
];

export type Badge = {
  label: string;
  detail: string;
  /** Partner/award badge SVG. Falls back to a typeset lockup. */
  logo?: string;
};

/** Third-party validation — the substitute for a handshake across borders. */
export const badges: Badge[] = [
  { label: "AWS", detail: "Advanced Consulting Partner" },
  { label: "Google Cloud", detail: "Service Partner" },
  { label: "Clutch", detail: "4.9 / 5 · 47 reviews" },
  { label: "ISO 27001", detail: "Certified since 2021" },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "product-engineering",
    index: "01",
    title: "Product Engineering",
    summary:
      "We take a rough idea and return a running product. Discovery, architecture, and a team that stays through launch — not one that hands you a spec and disappears.",
    deliverables: ["Web platforms", "Design systems", "API architecture", "Migrations"],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile Applications",
    summary:
      "Native-feeling iOS and Android from one codebase, or fully native when the hardware demands it. Shipped through review, instrumented from day one.",
    deliverables: ["React Native", "Swift & Kotlin", "Offline-first sync", "App Store release"],
  },
  {
    id: "ai",
    index: "03",
    title: "AI & Automation",
    summary:
      "Language models wired into real workflows, with evaluation harnesses that tell you when quality drifts — so the feature keeps working after the demo.",
    deliverables: ["RAG pipelines", "Agent workflows", "Eval harnesses", "Model routing"],
  },
  {
    id: "cloud",
    index: "04",
    title: "Cloud & Platform",
    summary:
      "Infrastructure your team can actually operate. We optimise for the 3 a.m. page: readable logs, boring deploys, and cost you can forecast.",
    deliverables: ["AWS & GCP", "Kubernetes", "CI/CD pipelines", "Observability"],
  },
];

export type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  metric: { value: string; label: string };
  stack: string[];
  /** Case-study cover, 1600x1000 (16:10). Falls back to generated geometry. */
  cover?: string;
  /** Palette of the fallback artwork. */
  tone: "ink" | "flare" | "paper";
  /** Composition of the fallback artwork; keep unique per project. */
  art: 1 | 2 | 3 | 4;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "meridian",
    client: "Meridian Bank",
    title: "Rebuilding onboarding for a 90-year-old bank",
    category: "Fintech · Platform",
    year: "2025",
    summary:
      "Eleven days of paperwork compressed into a nine-minute flow. We replaced a mainframe-backed intake process with a document pipeline that verifies identity in real time.",
    metric: { value: "-91%", label: "time to open an account" },
    stack: ["Next.js", "Go", "Postgres", "AWS"],
    tone: "ink",
    art: 1,
    featured: true,
  },
  {
    id: "lumen",
    client: "Lumen Health",
    title: "A triage assistant clinicians actually trust",
    category: "Healthcare · AI",
    year: "2025",
    summary:
      "A retrieval system over 40 years of care protocols, wrapped in an interface that always shows its sources. Every answer is traceable back to a signed-off document.",
    metric: { value: "4.2M", label: "records indexed" },
    stack: ["Python", "pgvector", "React", "GCP"],
    tone: "flare",
    art: 2,
    featured: true,
  },
  {
    id: "cargo",
    client: "Cargo & Co.",
    title: "Live freight visibility across 30 countries",
    category: "Logistics · Mobile",
    year: "2024",
    summary:
      "An offline-first driver app and an operations console sharing one event stream. Drivers keep scanning through dead zones; dispatch sees it the moment signal returns.",
    metric: { value: "1.8s", label: "median sync latency" },
    stack: ["React Native", "Kotlin", "Kafka"],
    tone: "paper",
    art: 3,
  },
  {
    id: "atlas",
    client: "Atlas Robotics",
    title: "Fleet telemetry at 200k events per second",
    category: "Industrial · Cloud",
    year: "2024",
    summary:
      "A time-series backbone for warehouse robots, with a control room that stays responsive while ingesting a firehose of sensor data from six facilities.",
    metric: { value: "99.98%", label: "uptime across 18 months" },
    stack: ["Rust", "ClickHouse", "Kubernetes"],
    tone: "paper",
    art: 4,
  },
];

export type Stage = {
  step: string;
  title: string;
  duration: string;
  body: string;
};

export const process: Stage[] = [
  {
    step: "01",
    title: "Frame the problem",
    duration: "Week 1",
    body:
      "A short, paid discovery. We interview your team, read the existing code, and write down what success actually looks like — in numbers, not adjectives.",
  },
  {
    step: "02",
    title: "Prove the risky part",
    duration: "Weeks 2–3",
    body:
      "Every project has one thing that might not work. We build that first, in isolation, before anyone commits a budget to the parts we already know how to do.",
  },
  {
    step: "03",
    title: "Build in the open",
    duration: "Weeks 4–12",
    body:
      "Two-week cycles against a live staging environment. You get a Slack channel, a demo every second Thursday, and commit access from the first day.",
  },
  {
    step: "04",
    title: "Hand over properly",
    duration: "Ongoing",
    body:
      "Runbooks, architecture notes, and a paired handover with your engineers. We stay on retainer if you want us — but the goal is that you don't need to.",
  },
];

export type Person = {
  id: string;
  name: string;
  role: string;
  /** Portrait, 800x1000 (4:5), neutral background. Falls back to a monogram. */
  photo?: string;
};

/** Faces do real work when the client will never visit the office. */
export const team: Person[] = [
  { id: "amara", name: "Amara Diallo", role: "Founder & Principal Engineer" },
  { id: "tomas", name: "Tomás Rivera", role: "Head of Product Engineering" },
  { id: "sana", name: "Sana Qureshi", role: "Principal Architect" },
  { id: "elias", name: "Elias Brandt", role: "Design Director" },
];

/** Where the studio has working-hours overlap — the timezone question. */
export const coverage = [
  { region: "Americas", city: "San Francisco", hours: "09:00 – 18:00 PT" },
  { region: "Europe", city: "Lisbon", hours: "09:00 – 18:00 WET" },
  { region: "Asia-Pacific", city: "Singapore", hours: "09:00 – 18:00 SGT" },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Portrait, 400x400 (1:1). Falls back to a monogram. */
  photo?: string;
  /** Client logo, monochrome SVG. Falls back to a typeset wordmark. */
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They spent the first week telling us which half of our roadmap to delete. That conversation was worth more than the code — and the code was excellent.",
    name: "Priya Raghunathan",
    role: "VP of Engineering",
    company: "Meridian Bank",
  },
  {
    quote:
      "Nexic is the only vendor we've worked with whose handover documentation our own team still reads two years later.",
    name: "Daniel Osei",
    role: "Chief Technology Officer",
    company: "Cargo & Co.",
  },
];

/**
 * Three square images (1000x1000) for the media tiles in the WhyChoose
 * mosaic — team at work, an office shot, a product close-up. Leave entries
 * undefined and a drawn grid stands in.
 */
export const mosaicMedia: (string | undefined)[] = [undefined, undefined, undefined];

export type Reason = {
  id: string;
  title: string;
  body: string;
};

export const reasons: Reason[] = [
  {
    id: "results",
    title: "Results-Driven Approach",
    body: "Every engagement opens with the numbers we intend to move, and closes by showing whether we moved them.",
  },
  {
    id: "strategy",
    title: "Custom Strategies",
    body: "No template stacks. We choose the architecture your problem needs, then justify it in writing before a line is written.",
  },
  {
    id: "team",
    title: "Expert Team",
    body: "Senior engineers only. The person in your kickoff call is the one committing code eight weeks later.",
  },
  {
    id: "support",
    title: "Ongoing Support",
    body: "From incident response to cost tuning, we stay reachable long after the final invoice clears.",
  },
];

export type Faq = { q: string; a: string };

/** Answers the objections that stall a first cross-border conversation. */
export const faqs: Faq[] = [
  {
    q: "How do you work across time zones?",
    a: "We keep at least four hours of overlap with every client. Teams are staffed from the office closest to you, and every decision that matters is written down so nothing depends on catching someone awake.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Discovery is a fixed fee, usually between $12k and $20k depending on scope. Build phases run as monthly retainers priced by team size. You get a written estimate before anything starts, and we do not bill for work you have not approved.",
  },
  {
    q: "Who owns the code?",
    a: "You do, from the first commit. We work in your repository under your licence, and the handover includes runbooks, architecture notes, and a paired walkthrough with your engineers.",
  },
  {
    q: "How quickly can you start?",
    a: "Discovery usually begins within two to three weeks. We deliberately keep one team unallocated so urgent work does not wait a quarter for a slot.",
  },
  {
    q: "What happens if we want to stop?",
    a: "Retainers run month to month with 30 days' notice. There is no termination fee and no clause that holds your codebase hostage.",
  },
];

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export type Office = {
  id: string;
  city: string;
  country: string;
  address: string[];
  phone: string;
  email: string;
  hours: string;
  /** Office photo, 1200x900 (4:3). Falls back to a drawn placeholder. */
  photo?: string;
};

export const offices: Office[] = [
  {
    id: "sf",
    city: "San Francisco",
    country: "United States",
    address: ["244 Kearny Street, Floor 6", "San Francisco, CA 94108"],
    phone: "+1 (415) 555-0184",
    email: "sf@nexic.tech",
    hours: "09:00 – 18:00 PT",
  },
  {
    id: "lisbon",
    city: "Lisbon",
    country: "Portugal",
    address: ["Rua da Prata 142, 2º", "1100-421 Lisboa"],
    phone: "+351 21 555 0132",
    email: "eu@nexic.tech",
    hours: "09:00 – 18:00 WET",
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    address: ["71 Robinson Road, #14-01", "Singapore 068895"],
    phone: "+65 6555 0177",
    email: "apac@nexic.tech",
    hours: "09:00 – 18:00 SGT",
  },
];

/** Routed inboxes, so enquiries do not all land in one pile. */
export const contactChannels = [
  {
    id: "new-business",
    label: "New business",
    detail: "Scoping a project or asking for an estimate.",
    email: "hello@nexic.tech",
  },
  {
    id: "careers",
    label: "Careers",
    detail: "Engineers and designers — we read every one.",
    email: "jobs@nexic.tech",
  },
  {
    id: "press",
    label: "Press & speaking",
    detail: "Interviews, conference talks, and podcasts.",
    email: "press@nexic.tech",
  },
] as const;

export const projectTypes = [
  "Product engineering",
  "Mobile application",
  "AI & automation",
  "Cloud & platform",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Still working it out",
] as const;

export const timelines = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Just exploring",
] as const;

export const capabilities = [
  "TypeScript",
  "React",
  "Next.js",
  "Go",
  "Rust",
  "Python",
  "Postgres",
  "Kubernetes",
  "AWS",
  "Terraform",
] as const;

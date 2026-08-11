/**
 * Placeholder content for the Nexic Technologies marketing site.
 * Everything the homepage renders is sourced from here — swap these
 * objects for a CMS query and no component needs to change.
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

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
] as const;

/** Logo strip — plain wordmarks keep the strip quiet and on-palette. */
export const clients = [
  "Northwind",
  "Lumen Health",
  "Cargo & Co.",
  "Meridian Bank",
  "Fieldstone",
  "Atlas Robotics",
  "Vela Energy",
  "Parcelly",
] as const;

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
  /** Palette of the placeholder artwork — swap for a real image later. */
  tone: "ink" | "flare" | "paper";
  /** Composition of the placeholder artwork; keep these unique per project. */
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

export const stats = [
  { value: "68", suffix: "", label: "Products shipped" },
  { value: "9", suffix: "", label: "Years building" },
  { value: "24", suffix: "", label: "Engineers on staff" },
  { value: "94", suffix: "%", label: "Clients who return" },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
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

/** Headline scale figures for the banner between the ticker and services. */
export const scale = {
  projects: "350+",
  clients: "200+",
} as const;

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

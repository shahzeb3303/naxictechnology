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
  /** Canonical origin. Drives sitemap, robots, and structured data URLs. */
  url: "https://nexic.tech",
  tagline: "Software that ships",
  email: "hello@nexic.tech",
  phone: "+92 51 555 0142",
  address: "Nawaz Arcade, First Floor, Office #4, National Police Foundation, Block A, Islamabad",
  founded: 2017,
} as const;

/**
 * Root-relative on purpose. A bare "#services" resolves against whatever page
 * you are on, so these would go nowhere from /contact.
 */
export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
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
  /** Four-or-five word positioning line, used on the services page. */
  tagline: string;
  summary: string;
  deliverables: string[];
  /** Expanded copy — services page only. */
  detail?: string;
  /** Concrete things a client walks away with. */
  includes?: string[];
  /** Icon key, resolved in service-art.tsx. */
  icon:
    | "web"
    | "mobile"
    | "ai"
    | "marketing"
    | "social"
    | "ads"
    | "design"
    | "video";
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    title: "Websites & Web Applications",
    tagline: "Marketing sites and product platforms",
    icon: "web",
    summary:
      "Marketing sites that load fast and rank, and web applications that hold up once the traffic is real. Built on frameworks your next developer will already recognise.",
    detail:
      "Most agency websites are handed over as a folder nobody can open. We build on mainstream, documented tooling — so whoever maintains this after us can read it on day one. Performance and accessibility are budgeted at the start, not bolted on when the audit fails.",
    deliverables: ["Next.js & React", "Headless CMS", "E-commerce", "Design systems"],
    includes: [
      "Core Web Vitals in the green at launch",
      "A CMS your marketing team can run without us",
      "WCAG AA accessibility as standard",
      "Analytics and conversion tracking wired in",
    ],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile App Development",
    tagline: "iOS and Android, shipped",
    icon: "mobile",
    summary:
      "Native-feeling iOS and Android from one codebase, or fully native when the hardware demands it. Taken through store review, instrumented from the first build.",
    detail:
      "Getting an app built is the easy half; getting it approved, updated, and observable is where projects stall. We handle store submission, staged rollouts, and crash reporting, and we design for the network you actually have rather than the one in the demo.",
    deliverables: ["React Native", "Swift & Kotlin", "Offline-first sync", "App Store release"],
    includes: [
      "App Store and Play Store submission handled",
      "Offline-first data sync where it matters",
      "Crash reporting and release monitoring",
      "Staged rollouts with a rollback path",
    ],
  },
  {
    id: "ai",
    index: "03",
    title: "Agentic AI Services",
    tagline: "Agents that do the work",
    icon: "ai",
    summary:
      "Autonomous agents wired into real workflows — not a chatbot bolted onto a homepage. Tool use, retrieval, and evaluation harnesses that tell you when quality drifts.",
    detail:
      "An AI feature that impresses in a demo and fails in month three is worse than no feature. We build agents that can call your systems, cite their sources, and hand off to a human when confidence drops — then we ship the evaluation suite that proves it still works after the next model update.",
    deliverables: ["RAG pipelines", "Tool-using agents", "Eval harnesses", "Model routing"],
    includes: [
      "Retrieval grounded in your own documents",
      "An eval suite that runs on every change",
      "Human-in-the-loop escalation paths",
      "Cost and latency budgets you can forecast",
    ],
  },
  {
    id: "marketing",
    index: "04",
    title: "Digital Marketing",
    tagline: "Search, content, and lifecycle",
    icon: "marketing",
    summary:
      "SEO, content, and email run as one system against one dashboard. Every activity ties back to pipeline rather than to impressions.",
    detail:
      "We start by fixing attribution, because a marketing programme you cannot measure is a marketing programme you cannot defend. Once the numbers are trustworthy, we build the content and search work around the queries that actually convert for you.",
    deliverables: ["Technical SEO", "Content strategy", "Email & lifecycle", "Analytics"],
    includes: [
      "A technical SEO audit with fixes applied, not just listed",
      "A content calendar mapped to buying intent",
      "Lifecycle email sequences that are not spam",
      "One dashboard the whole team reads",
    ],
  },
  {
    id: "social",
    index: "05",
    title: "Social Media Marketing",
    tagline: "Channels, calendar, community",
    icon: "social",
    summary:
      "Channel strategy, a publishing calendar your team can actually sustain, and community management that sounds like a person rather than a policy.",
    detail:
      "Consistency beats brilliance on social, so we design a cadence you can hold for a year — not a launch burst that dies in six weeks. We pick the two or three channels where your buyers actually are and let the rest go.",
    deliverables: ["Channel strategy", "Content calendars", "Community management", "Reporting"],
    includes: [
      "A channel plan that says what to ignore",
      "Four to six weeks of content queued at all times",
      "Response guidelines for the awkward comments",
      "Monthly reporting tied to reach and conversion",
    ],
  },
  {
    id: "ads",
    index: "06",
    title: "Paid Advertising",
    tagline: "Search, social, and display",
    icon: "ads",
    summary:
      "Campaigns built around a tracked conversion, with creative tested weekly and budget moved toward whatever is currently working.",
    detail:
      "We do not launch a campaign until the conversion event fires correctly, because everything downstream is guesswork otherwise. From there it is disciplined iteration: fresh creative on a schedule, losing ad sets cut early, and spend consolidated behind proven winners.",
    deliverables: ["Google Ads", "Meta & LinkedIn", "Creative testing", "Conversion tracking"],
    includes: [
      "Conversion tracking verified before spend starts",
      "A creative testing schedule, not one-off ads",
      "Weekly budget reallocation with reasoning",
      "Plain-language reporting on cost per outcome",
    ],
  },
  {
    id: "design",
    index: "07",
    title: "Graphic Design",
    tagline: "Identity and everyday assets",
    icon: "design",
    summary:
      "Brand identity, design systems, and the everyday assets that keep a brand consistent long after the launch deck is closed.",
    detail:
      "A logo is the smallest part of an identity. What keeps a brand coherent is the system underneath it — type scale, colour rules, spacing, and templates your team can use without asking a designer for every social post.",
    deliverables: ["Brand identity", "Design systems", "Print & packaging", "Pitch decks"],
    includes: [
      "Logo suite with clear usage rules",
      "A documented design system, not a mood board",
      "Editable templates for social, decks, and print",
      "Source files handed over, no lock-in",
    ],
  },
  {
    id: "video",
    index: "08",
    title: "Video Production & Editing",
    tagline: "Short form to product film",
    icon: "video",
    summary:
      "Short-form edits, product films, and motion graphics — scripted, cut, graded, and delivered in every aspect ratio your channels need.",
    detail:
      "Video fails on the first three seconds and on the last-mile delivery. We write for the hook, then export the same story in vertical, square, and wide so nothing gets cropped into nonsense on the channel it was not made for.",
    deliverables: ["Short-form social", "Product films", "Motion graphics", "Colour & sound"],
    includes: [
      "Scripting and storyboard before the shoot",
      "Every cut delivered in 9:16, 1:1, and 16:9",
      "Captions and subtitle files included",
      "Motion graphics built from your brand system",
    ],
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

  /* ---- Case-study page (/work/[slug]) ---- */
  /** Display name and href for the live site. Button hides when absent. */
  website?: { label: string; url: string };
  industry: string;
  expertise: string[];
  platform: string;
  /** Section 01 */
  overviewTitle: string;
  overview: string;
  /** Section 02 */
  challenge: string;
  /** Section 03 */
  approach: string;
  /** Section 04 */
  outcome: string;
  results: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
  /**
   * Screenshot slots for the device mockup. 1600x1000 for desktop,
   * 750x1500 for mobile. Both fall back to drawn placeholders.
   */
  shots?: { desktop?: string; mobile?: string };
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
    website: { label: "meridianbank.example", url: "https://example.com" },
    industry: "Banking & Financial Services",
    expertise: ["Product Engineering", "UX Design", "Identity Verification", "Cloud"],
    platform: "Next.js · Go · AWS",
    overviewTitle: "Turning eleven days of paperwork into nine minutes",
    overview:
      "Meridian Bank has been opening accounts since 1934, and the process still ran on a mainframe fronted by three separate paper forms. New customers waited an average of eleven days and roughly four in ten abandoned partway. We were asked to rebuild the intake journey end to end without touching the core banking system underneath.",
    challenge:
      "The mainframe could not be replaced, only wrapped — and every change had to satisfy a regulator who expects an audit trail for each field a customer touches. Identity documents arrived as photographs taken in poor light on old phones, and the compliance team needed a human review step that did not reintroduce the original delay.",
    approach:
      "We built a document pipeline that pre-processes and verifies identity in real time, then queues only genuine edge cases for human review. The customer-facing flow was rewritten as a resumable, mobile-first journey that saves after every step, so a dropped connection no longer means starting over. Behind it sits an event log that gives compliance a complete, replayable record of every submission.",
    outcome:
      "Account opening now completes in nine minutes for the large majority of applicants, and the review queue handles a fraction of its former volume. Because the flow saves continuously, most abandoned applications are now resumed rather than lost — which turned out to matter more to revenue than the headline speed improvement.",
    results: [
      { value: "-91%", label: "Time to open an account" },
      { value: "+38%", label: "Application completion" },
      { value: "9 min", label: "Median journey time" },
      { value: "100%", label: "Audit trail coverage" },
    ],
    quote: {
      text: "They spent the first week telling us which half of our roadmap to delete. That conversation was worth more than the code — and the code was excellent.",
      name: "Priya Raghunathan",
      role: "VP of Engineering, Meridian Bank",
    },
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
    website: { label: "lumenhealth.example", url: "https://example.com" },
    industry: "Healthcare & Clinical Systems",
    expertise: ["Agentic AI", "Retrieval Systems", "Clinical UX", "Evaluation"],
    platform: "Python · pgvector · React · GCP",
    overviewTitle: "A triage assistant clinicians are willing to trust",
    overview:
      "Lumen Health holds forty years of care protocols across scanned PDFs, intranet pages, and a document system three acquisitions old. Nurses were spending the opening minutes of every triage call searching for the right guidance. The brief was to make that knowledge answerable in seconds — without ever putting an unsourced sentence in front of a clinician.",
    challenge:
      "Clinical staff are, correctly, sceptical of generated text. An assistant that is right most of the time is not good enough when the failure mode is patient harm. The system had to cite a signed-off document for every claim, decline to answer when the evidence was thin, and prove — continuously — that its accuracy had not drifted after a model update.",
    approach:
      "We built retrieval over the full corpus with provenance attached to every chunk, so the interface can show the exact paragraph behind each sentence. Confidence thresholds route uncertain cases straight to a human. Most importantly we shipped an evaluation harness of several hundred clinician-reviewed cases that runs on every change, so quality regressions surface in CI rather than in a ward.",
    outcome:
      "Search time during triage fell from minutes to seconds, and adoption held after the initial novelty because clinicians could always check the source. The eval suite has since caught two regressions introduced by upstream model changes before either reached production.",
    results: [
      { value: "4.2M", label: "Records indexed" },
      { value: "-74%", label: "Time to find guidance" },
      { value: "100%", label: "Answers with citations" },
      { value: "340", label: "Cases in the eval suite" },
    ],
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
    website: { label: "cargoandco.example", url: "https://example.com" },
    industry: "Logistics & Freight",
    expertise: ["Mobile Development", "Offline-First Sync", "Event Streaming", "Ops Tooling"],
    platform: "React Native · Kotlin · Kafka",
    overviewTitle: "Freight visibility that survives the dead zones",
    overview:
      "Cargo & Co. moves freight across thirty countries, and their tracking depended on drivers finding signal to submit a scan. Dispatch worked from a picture of the network that was routinely hours stale. We rebuilt the driver app and the operations console around a single event stream so both sides finally saw the same thing.",
    challenge:
      "Drivers spend hours beyond mobile coverage — mountain passes, ports, warehouse interiors. Any design that assumed connectivity was going to fail in the field. Scans also had to stay correctly ordered once a device came back online, even when a phone had been offline longer than a colleague who scanned the same consignment later.",
    approach:
      "The app became offline-first: scans are written locally, queued, and reconciled with server-side conflict rules that respect the original capture time rather than upload order. Dispatch reads from the same Kafka stream, so the console updates the instant an event lands. We also stripped the driver interface back to what can be operated one-handed, in gloves, in the rain.",
    outcome:
      "Median sync latency once signal returns is under two seconds, and the scan-loss problem that had dogged the old app effectively disappeared. Dispatch now runs exception-based — staff are alerted to consignments that need attention rather than watching a board all day.",
    results: [
      { value: "1.8s", label: "Median sync latency" },
      { value: "30", label: "Countries live" },
      { value: "-96%", label: "Lost scans" },
      { value: "12k", label: "Daily driver events" },
    ],
    quote: {
      text: "Nexic is the only vendor we've worked with whose handover documentation our own team still reads two years later.",
      name: "Daniel Osei",
      role: "Chief Technology Officer, Cargo & Co.",
    },
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
    website: { label: "atlasrobotics.example", url: "https://example.com" },
    industry: "Industrial Robotics",
    expertise: ["Platform Engineering", "Time-Series Data", "Control Room UX", "Observability"],
    platform: "Rust · ClickHouse · Kubernetes",
    overviewTitle: "Two hundred thousand events a second, still responsive",
    overview:
      "Atlas Robotics runs autonomous picking robots across six warehouses. Their existing telemetry stack buckled past a few thousand events per second, which meant engineers were debugging fleet incidents from logs that had already been sampled away. We built the backbone that keeps every event and still answers questions in under a second.",
    challenge:
      "The volume was the obvious problem; the harder one was that the control room had to stay usable while ingestion ran at full rate. Operators need to scrub back through an incident, compare two robots, and do it during the incident — not after a batch job finishes overnight.",
    approach:
      "Ingest was rewritten in Rust and fronted by a schema that keeps raw events rather than pre-aggregating them away. ClickHouse handles the query side, with materialised views for the handful of questions operators ask constantly. The control room reads from those views, so the interface stays responsive no matter what ingestion is doing.",
    outcome:
      "The platform has held 99.98% uptime across eighteen months and now carries roughly ten times the original event volume without a hardware increase proportional to it. Incident investigations that used to take a day are typically resolved inside an hour.",
    results: [
      { value: "200k", label: "Events per second" },
      { value: "99.98%", label: "Uptime, 18 months" },
      { value: "<1s", label: "Control room queries" },
      { value: "6", label: "Facilities live" },
    ],
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

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export type Value = {
  id: string;
  title: string;
  body: string;
};

export const values: Value[] = [
  {
    id: "plain",
    title: "Say the hard thing early",
    body: "If a deadline is unrealistic or a feature is a bad idea, you hear it in week one rather than in the retrospective. Uncomfortable early beats expensive later.",
  },
  {
    id: "own",
    title: "You own everything we make",
    body: "Code, design files, infrastructure, documentation — all yours from the first commit. No proprietary platform, no licence that expires, no leverage held over you.",
  },
  {
    id: "measure",
    title: "Numbers over adjectives",
    body: "Every engagement opens by writing down what success looks like in figures. Anyone can call a launch successful; we prefer to be able to prove it.",
  },
  {
    id: "boring",
    title: "Choose boring technology",
    body: "We pick tools your next developer will already know. Novelty is fun for the team that builds it and miserable for the team that inherits it.",
  },
];

export type Milestone = {
  year: string;
  title: string;
  body: string;
};

export const milestones: Milestone[] = [
  {
    year: "2017",
    title: "Two people and a rented desk",
    body: "Founded in Islamabad after one too many projects handed over as an unmaintainable folder. The original rule — leave every client able to run it without us — has not changed.",
  },
  {
    year: "2020",
    title: "First platform at scale",
    body: "A logistics client asked for something their previous three agencies had declined. Shipping it taught us to prove the risky part before quoting the rest.",
  },
  {
    year: "2023",
    title: "Manchester opens",
    body: "European clients wanted working hours that overlapped theirs. Rather than pretend, we opened a second office and staffed it properly.",
  },
  {
    year: "2026",
    title: "Twenty-four people, still no bench",
    body: "We turn down more work than we take. Staying small is what keeps senior people on every project instead of supervising from a distance.",
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
  { region: "Asia & Middle East", city: "Islamabad", hours: "09:00 – 18:00 PKT" },
  { region: "UK & Europe", city: "Manchester", hours: "09:00 – 18:00 GMT" },
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
    id: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    address: [
      "Nawaz Arcade, First Floor, Office #4",
      "National Police Foundation, Block A",
      "Islamabad",
    ],
    phone: "+92 51 555 0142",
    email: "pk@nexic.tech",
    hours: "09:00 – 18:00 PKT",
  },
  {
    id: "manchester",
    city: "Manchester",
    country: "United Kingdom",
    address: ["33 Cheetham Hill Road", "Manchester, M8 0PF"],
    phone: "+44 161 555 0173",
    email: "uk@nexic.tech",
    hours: "09:00 – 18:00 GMT",
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

/** Spans every discipline, not just engineering — the ticker runs on the
 *  services page too, where a dev-only list would read as a gap. */
export const capabilities = [
  "TypeScript",
  "React",
  "Next.js",
  "Swift",
  "Kotlin",
  "Python",
  "Postgres",
  "AWS",
  "Figma",
  "After Effects",
  "Google Ads",
  "Meta Ads",
  "Shopify",
  "HubSpot",
] as const;

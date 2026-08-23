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

/**
 * What kind of work this is. Drives the filter on /work and which showcase
 * block the case study renders.
 */
export type Medium = "web" | "app" | "video" | "design" | "marketing";

export const mediumLabels: Record<Medium, string> = {
  web: "Web",
  app: "Apps",
  video: "Video",
  design: "Design",
  marketing: "Marketing",
};

/** One image in a gallery. Dimensions prevent layout shift. */
export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Let a hero piece span two columns. */
  wide?: boolean;
};

/** One video. Hosted externally — self-hosting a reel portfolio is fatal. */
export type VideoItem = {
  title: string;
  provider: "stream" | "vimeo" | "youtube" | "instagram";
  /** Playback ID, video ID, or full URL for instagram. */
  id: string;
  poster?: string;
  aspect: "9/16" | "1/1" | "16/9";
  duration?: string;
  client?: string;
};

export type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  medium: Medium;
  metric: { value: string; label: string };
  stack: string[];
  /** Credit when one person led the work. */
  lead?: string;
  gallery?: GalleryItem[];
  videos?: VideoItem[];
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
    medium: "web",
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
    medium: "web",
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
    medium: "app",
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
    medium: "web",
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

  {
    id: "restaurant-social",
    client: "TODO — real client name",
    title: "A social campaign that sells the dish before the caption does",
    category: "Food & Beverage · Design",
    year: "2025",
    medium: "design",
    summary:
      "Seven feed posts for a restaurant brand, built so each reads at thumb-speed: one dish, one promise, and typography that carries the mood before a word is read.",
    metric: { value: "7", label: "posts in the launch set" },
    stack: ["Photoshop", "Illustrator", "Instagram"],
    tone: "ink",
    art: 2,
    cover: "/work/restaurant-social/front-resturant.png",
    industry: "Food & Beverage",
    expertise: ["Art Direction", "Social Design", "Typography", "Food Retouch"],
    platform: "Instagram · 1:1 feed",
    overviewTitle: "One dish, one promise, one second to land it",
    overview:
      "A restaurant's feed competes with everything else on the phone, and it loses in the first second or not at all. This set was built around that constraint: a single hero dish per post, a headline that states the offer plainly, and enough dark negative space that the food is the brightest thing on screen.",
    challenge:
      "The brief spanned very different moods — a cocktail launch, a weekend brunch, a spicy wings promo, a new teriyaki menu. Treated separately they would have looked like seven brands. Treated identically they would have flattened the difference between a delicate brunch and a flame-grilled promo.",
    approach:
      "One structural system, two typographic registers. Everything shares the same dark ground, the same generous margin, and the same rule about a single focal dish. Within that, indulgent items get a script-and-serif pairing with warm amber accents, while the high-energy promos switch to heavy condensed sans with a hard red block. The grid stays constant; only the voice changes.",
    outcome:
      "The set holds together as a feed while each post still does its own job. Because the structure is fixed, new posts can be produced from the same template without re-solving the layout every time.",
    results: [
      { value: "7", label: "Posts delivered" },
      { value: "4", label: "Campaign themes" },
      { value: "1:1", label: "Feed-native format" },
    ],
    gallery: [
      {
        src: "/work/restaurant-social/resturant-1.png",
        alt: "Authentic Indian Cuisine \u2014 overhead flat-lay inside a thin amber rule, script set across a torn-edge black panel",
        width: 807,
        height: 802,
        wide: true,
      },
      {
        src: "/work/restaurant-social/resturant-4.png",
        alt: "Morning Brunch \u2014 daylight table setting, high-contrast serif with a swipe affordance for the carousel",
        width: 797,
        height: 800,
      },
      {
        src: "/work/restaurant-social/resturant-2.png",
        alt: "Special Cocktail Party \u2014 single backlit cocktail on black, script above wide-tracked serif caps",
        width: 806,
        height: 807,
      },
      {
        src: "/work/restaurant-social/resturant-3.png",
        alt: "Spicy Chicken \u2014 heavy condensed sans with a red highlight block over flame and smoke",
        width: 800,
        height: 797,
      },
      {
        src: "/work/restaurant-social/resturant-5.png",
        alt: "New Menu, Chicken Teriyaki \u2014 overhead plate above a dark panel carrying the order line",
        width: 802,
        height: 802,
      },
      {
        src: "/work/restaurant-social/resturant-7.png",
        alt: "Sparkling Citrus Delight \u2014 display serif overlapped by script, warm amber mocktail still life",
        width: 801,
        height: 801,
      },
      {
        src: "/work/restaurant-social/resturant-8.png",
        alt: "Grill Chicken \u2014 bold sans over a red today-special banner on a styled tray shot",
        width: 806,
        height: 802,
      },
    ],
  },

  {
    id: "car-hire-australia",
    client: "Car Hire Australia",
    title: "Six posts, six reasons to book — one recognisable feed",
    category: "Travel & Mobility · Design",
    year: "2025",
    medium: "design",
    summary:
      "A social set built around occasions rather than vehicles: the airport pickup, the wedding car, the family that needs eight seats. Each post answers a different reason someone reaches for a hire car.",
    metric: { value: "6", label: "booking occasions covered" },
    stack: ["Photoshop", "Illustrator", "Instagram"],
    tone: "flare",
    art: 3,
    cover: "/work/car-hire-australia/cover.png",
    industry: "Travel & Mobility",
    expertise: ["Art Direction", "Social Design", "Typography", "Campaign Systems"],
    platform: "Instagram · social feed",
    overviewTitle: "Sell the occasion, not the vehicle",
    overview:
      "Car hire is bought at a moment, not browsed at leisure — a flight lands, a wedding is booked, a family works out that five seats will not do. The set is organised around those moments, so each post can be recognised instantly by someone in exactly that situation.",
    challenge:
      "Six posts, six very different jobs. An airport-transfer promo needs urgency; a wedding car needs restraint; a seat-count post is pure information. Left alone they drift into six unrelated visual identities, and the feed stops reading as one brand.",
    approach:
      "A fixed frame does the holding: dark automotive photography, headline weight anchored to one corner, and a single amber accent carried through from the cover mark. Within that, the register shifts to suit the moment — condensed caps and a hard call to action for transfers and availability, a lighter script pairing for the occasion pieces. The testimonial post breaks the pattern deliberately, overlaying real client messages so it reads as proof rather than promotion.",
    outcome:
      "The set covers the brand's main booking triggers while still scanning as one feed, and the frame is reusable — a new occasion becomes a new post without redesigning the layout.",
    results: [
      { value: "6", label: "Posts delivered" },
      { value: "6", label: "Booking occasions covered" },
      { value: "1", label: "Reusable campaign frame" },
    ],
    gallery: [
      {
        src: "/work/car-hire-australia/car-1.png",
        alt: "On Your Special Day \u2014 evening shot of a black sedan, script over caps for wedding and occasion hire",
        width: 840,
        height: 837,
        wide: true,
      },
      {
        src: "/work/car-hire-australia/car-5.png",
        alt: "Airport Transfers \u2014 landing-day urgency in condensed caps over a dark forecourt shot",
        width: 872,
        height: 857,
      },
      {
        src: "/work/car-hire-australia/car-4.png",
        alt: "Six, seven and eight seater SUVs \u2014 capacity headline over a silver SUV on an open road",
        width: 862,
        height: 852,
      },
      {
        src: "/work/car-hire-australia/car-6.png",
        alt: "Car Hire Made Easy \u2014 simplicity message over a maroon hatchback",
        width: 830,
        height: 821,
      },
      {
        src: "/work/car-hire-australia/car-3.png",
        alt: "Client testimonials \u2014 real booking messages overlaid as chat bubbles, breaking the campaign frame on purpose",
        width: 832,
        height: 832,
      },
      {
        src: "/work/car-hire-australia/car-2.png",
        alt: "Customer Satisfaction \u2014 dark SUV on an open highway with the amber brand accent",
        width: 852,
        height: 816,
      },
    ],
  },

  {
    id: "package-delivery",
    client: "1HourShipIt",
    title: "One promise, seven ways to use it",
    category: "Logistics · Design",
    year: "2025",
    medium: "design",
    summary:
      "A courier brand with a single proposition — anything, anywhere in Houston, within the hour. Seven posts that each open a different door to the same promise, and drive the same app install.",
    metric: { value: "7", label: "demand triggers covered" },
    stack: ["Photoshop", "Illustrator", "Instagram"],
    tone: "paper",
    art: 4,
    cover: "/work/package-delivery/cover.png",
    website: { label: "onehourshipit.com", url: "https://onehourshipit.com/" },
    industry: "Courier & Last-Mile Delivery",
    expertise: ["Art Direction", "Social Design", "Typography", "Campaign Systems"],
    platform: "Instagram · social feed",
    overviewTitle: "Say the same thing seven times without repeating yourself",
    overview:
      "1HourShipIt sells one thing: anything you need moved across Houston, delivered inside an hour. That clarity is the brand's strength and the campaign's problem — a single proposition can very easily become seven identical posts that people scroll past after the first.",
    challenge:
      "Every post had to carry three fixed elements — the one-hour promise, Houston, and the app download — while still giving a different person a different reason to stop. Groceries, mall runs, flowers, medical supplies and commercial parcels are the same service to the business and completely different errands to the customer.",
    approach:
      "The service becomes the variable and everything else stays nailed down. Each post opens on one errand, but the brand furniture never moves: logo top-left, and a footer carrying the URL, both app-store badges, and the social icons. Two grounds alternate to keep the feed from flattening — saturated amber for the grocery and gifting posts, a light concrete texture for the logistics ones. The signature move is the highlight block: any phrase that has to survive being scanned at thumb speed gets set into a solid black or amber box.",
    outcome:
      "Seven distinct entry points into one service, each reinforcing the same promise and pointing at the same install. Because the furniture is fixed, a new errand becomes a new post without reopening the layout.",
    results: [
      { value: "7", label: "Posts delivered" },
      { value: "7", label: "Service categories covered" },
      { value: "1hr", label: "Promise repeated in every post" },
    ],
    gallery: [
      {
        src: "/work/package-delivery/04.png",
        alt: "Send and receive all your parcels and packages \u2014 the full service list as a bulleted amber panel beside a courier holding branded boxes",
        width: 672,
        height: 672,
        wide: true,
      },
      {
        src: "/work/package-delivery/03.png",
        alt: "Need shopping mall items \u2014 order online, receive within one hour; circular cut-out of a shopper with floating reaction bubbles",
        width: 802,
        height: 797,
      },
      {
        src: "/work/package-delivery/01.png",
        alt: "Deliver and receive grocery items in Houston at a given time \u2014 amber ground with a basket of fresh produce on a wooden counter",
        width: 802,
        height: 797,
      },
      {
        src: "/work/package-delivery/05.png",
        alt: "Send flowers and gifts through the app \u2014 split layout, white copy panel against amber with a man offering tulips and a wrapped gift",
        width: 691,
        height: 671,
      },
      {
        src: "/work/package-delivery/07.png",
        alt: "Commercial and residential packages in one hour \u2014 outlined Texas map with location pins on a light concrete ground",
        width: 671,
        height: 667,
      },
      {
        src: "/work/package-delivery/06.png",
        alt: "Sending a commercial parcel \u2014 city skyline illustration behind a hand holding the app sign-in screen",
        width: 690,
        height: 677,
      },
      {
        src: "/work/package-delivery/02.png",
        alt: "Grocery pickup and delivery across Houston \u2014 saturated amber ground with a full grocery spread and a stopwatch mark",
        width: 797,
        height: 796,
      },
    ],
  },

  {
    id: "trusting-hands",
    client: "Trusting Hands",
    title: "One app where you can give help or ask for it",
    category: "Non-profit · Mobile App",
    year: "2025",
    medium: "app",
    summary:
      "A charity platform covering blood donation, education sponsorship, Shuhada family support and Islamic giving — where every module lets the same person donate or request, rather than sorting users into donors and recipients.",
    metric: { value: "4", label: "donation streams in one app" },
    stack: ["Mobile app", "REST API", "Push notifications"],
    tone: "ink",
    art: 1,
    cover: "/work/trusting-hands/cover.jpg",
    industry: "Non-profit & Community Welfare",
    expertise: ["Mobile Engineering", "Product Design", "Donation Flows", "Localisation"],
    platform: "iOS · Android",
    overviewTitle: "Nobody is only a donor",
    overview:
      "Trusting Hands brings four kinds of giving into one app: an urgent blood bank, education sponsorship, financial support for Shuhada families, and general Islamic charity. The organising decision was to refuse the usual split between people who give and people who receive — someone who donates blood in March may need school fees in September, and the app should not make them feel like a different class of user in each case.",
    challenge:
      "Four donation streams behave nothing alike. A blood request is an emergency measured in hours and matched on blood group, hospital and city. Education sponsorship is a considered decision made once a term. Zakat, khums and sadaqah are not interchangeable — each has its own rules about who may receive it, so collapsing them into a single donate button would have been religiously wrong as well as unusable. On top of that the audience is not English-first, and many users are not comfortable with long password entry on a phone.",
    approach:
      "Every module was given the same three-action shape — request support, see my requests, see all requests — so the second module a user opens is already familiar. Underneath, each stream keeps its own rules: blood carries urgency, blood group, hospital and location and is colour-coded red throughout; education and Shuhada support run on request-and-review; the Islamic giving categories stay separate all the way down rather than being flattened at the point of donation. A single dashboard plots all streams together, and biometric login plus an in-app language switch keep the entry barrier low.",
    outcome:
      "Four charitable programmes that previously lived in separate processes now sit behind one login, with urgent blood requests surfacing on the home screen the moment they are raised, and the same person able to move between giving and asking without changing accounts.",
    results: [
      { value: "4", label: "Donation streams unified" },
      { value: "2-way", label: "Give or request in every module" },
      { value: "1,500+", label: "Students supported, shown in-app" },
      { value: "Bio", label: "Biometric login and language switching" },
    ],
    gallery: [
      {
        src: "/work/trusting-hands/2.png",
        alt: "Home screen \u2014 Get Involved Today with four programme tiles, a donation progress chart, and a persistent Donate Now action",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/trusting-hands/3.png",
        alt: "Dashboard \u2014 multi-series donation progress across quarters, with an urgent blood request card showing group, hospital and city",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/trusting-hands/4.png",
        alt: "Choose donation type \u2014 zakat, khums and sadaqah kept separate from blood, education and Shuhada family support",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/trusting-hands/7.png",
        alt: "Blood donation \u2014 request blood, track your requests, and a blood type compatibility reference, colour-coded red throughout",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/trusting-hands/5.png",
        alt: "Education support \u2014 request, review and browse sponsorship requests, with a running count of students supported",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/trusting-hands/6.png",
        alt: "Shuhada family support \u2014 the same request-and-review shape applied to financial, education and healthcare assistance",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/trusting-hands/1.png",
        alt: "Login \u2014 biometric entry alongside password, with a language selector in the top corner",
        width: 1024,
        height: 1536,
      },
    ],
  },

  {
    id: "connectgenie",
    client: "ConnectGenie AI",
    title: "Building the audience before building the launch",
    category: "SaaS · LinkedIn Marketing",
    year: "2025",
    medium: "marketing",
    lead: "Itrat Batool",
    summary:
      "Eight months of authority-led content and community work ahead of a Product Hunt launch, so the founder arrived on launch day with an audience already waiting rather than a cold announcement.",
    metric: { value: "320%", label: "follower growth in 8 months" },
    stack: ["LinkedIn", "Content Strategy", "Community Building"],
    tone: "ink",
    art: 1,
    industry: "AI SaaS",
    expertise: ["Content Strategy", "Community Building", "Founder Positioning", "Launch Support"],
    platform: "LinkedIn",
    overviewTitle: "A launch is only as good as the room you launch into",
    overview:
      "Bilal Asif was preparing to launch ConnectGenie AI and had the problem most technical founders have: a product close to ready and almost nobody watching. The work was to spend the months before launch turning his personal profile into a place people followed for the thinking, so the announcement landed in a room rather than an empty feed.",
    challenge:
      "Pre-launch audiences are easy to buy and almost impossible to activate. Follower count on its own would have looked good and done nothing — what the launch needed was a few hundred people who cared enough to show up on the day, which meant earning attention months before there was anything to sell.",
    approach:
      "Authority-first content built around what he was learning while building, not around the product. Posts were shaped to be useful whether or not you ever bought anything, which is what made several of them travel. Alongside that ran deliberate community work: replying, connecting, and pulling the people who engaged most into a named pre-launch group so launch day had somewhere to start.",
    outcome:
      "The following went from roughly two thousand to over eight and a half thousand in eight months, with several posts clearing a hundred thousand impressions and the strongest passing two hundred and fifty thousand. More usefully, four hundred-plus engaged supporters were in place before launch, which turned Product Hunt day into a coordinated push instead of a cold start.",
    results: [
      { value: "320%", label: "Follower growth, 2K to 8.5K+" },
      { value: "250K+", label: "Impressions on top posts" },
      { value: "400+", label: "Pre-launch community" },
      { value: "8", label: "Months to launch" },
    ],
    quote: {
      text: "The audience was there before the product was. That changed what launch day even looked like for us.",
      name: "Bilal Asif",
      role: "Founder, ConnectGenie AI",
    },
  },

  {
    id: "lvl-marketing",
    client: "LVL Marketing",
    title: "An outreach engine that keeps producing after you stop pushing",
    category: "Agency · Lead Generation",
    year: "2025",
    medium: "marketing",
    lead: "Itrat Batool",
    summary:
      "Personal brand and agency presence scaled together, with end-to-end lead generation run across multiple international client accounts through LinkedIn Sales Navigator.",
    metric: { value: "1,500+", label: "qualified leads generated" },
    stack: ["LinkedIn", "Sales Navigator", "Outreach Systems"],
    tone: "flare",
    art: 2,
    industry: "Marketing Agency",
    expertise: ["Lead Generation", "Outreach Systems", "Personal Branding", "Account Management"],
    platform: "LinkedIn · Sales Navigator",
    overviewTitle: "Predictable pipeline beats a good month",
    overview:
      "Laeequa Ahmed was running LVL Marketing and carrying two jobs at once: growing her own authority as the face of the agency, and keeping a pipeline full for a roster of international clients. Both were being done manually, which meant results tracked effort rather than compounding.",
    challenge:
      "Outreach at volume usually costs you either reply rate or reputation. Sending more gets you ignored; personalising everything does not scale past one person. The work had to hold a genuine conversation rate across several niches at once, for clients whose audiences had nothing in common.",
    approach:
      "Sales Navigator did the targeting so the list was narrow before anything was sent, and messaging was written per segment rather than per send — close enough to personal to earn a reply, structured enough to run at volume. Her own content ran alongside it, so a prospect who checked the profile after a connection request found something worth following rather than an empty page.",
    outcome:
      "More than fifteen hundred qualified leads across multiple niches, with connection acceptance holding between twenty-five and thirty-five per cent and a steady reply flow behind it. The combination of inbound from content and outbound from Sales Navigator gave the agency a pipeline it could forecast rather than hope for.",
    results: [
      { value: "1,500+", label: "Qualified leads" },
      { value: "25–35%", label: "Connection acceptance" },
      { value: "Multi", label: "International accounts" },
      { value: "2", label: "Channels, inbound and outbound" },
    ],
  },

  {
    id: "ace-services",
    client: "ACE Services",
    title: "Zero to a working pipeline in ninety days",
    category: "Services · LinkedIn Marketing",
    year: "2024",
    medium: "marketing",
    lead: "Itrat Batool",
    summary:
      "A LinkedIn presence built from nothing for both the founder and a brand-new company page, taken to a warm pipeline inside a single quarter.",
    metric: { value: "90", label: "days to a warm pipeline" },
    stack: ["LinkedIn", "Content Strategy", "Outreach"],
    tone: "paper",
    art: 3,
    industry: "Professional Services",
    expertise: ["Profile Optimisation", "Content Strategy", "Outreach", "Company Page Growth"],
    platform: "LinkedIn",
    overviewTitle: "Starting from an empty profile",
    overview:
      "Abdul Manan was launching ACE Services with no LinkedIn footprint at all — a bare personal profile and a company page that did not yet exist. The brief was the hardest version of this work: not growing an audience, but starting one, and reaching real enquiries fast enough to matter to a new business.",
    challenge:
      "A new page has no signal for the algorithm to work with and no reason for anyone to follow it. Chasing raw follower count would have produced a number and no customers; the audience had to be narrow enough that a few hundred of the right people would outperform thousands of the wrong ones.",
    approach:
      "The personal profile was rebuilt first, since people follow people before they follow companies — clear positioning, a stated offer, and a reason to connect. Content then ran on his profile with the company page amplifying rather than leading, and targeted outreach went only to the specific niche the business actually served.",
    outcome:
      "Five hundred-plus personal followers in three months and a company page past a hundred targeted followers, producing more than fifty qualified leads and a steady flow of early inbound enquiries — a foundation rather than a spike, and one the business could keep building on.",
    results: [
      { value: "500+", label: "Personal followers, from zero" },
      { value: "100+", label: "Company page followers" },
      { value: "50+", label: "Qualified leads" },
      { value: "90", label: "Days" },
    ],
  },

  {
    id: "offshore-minds",
    client: "Offshore Minds",
    title: "Wellbeing support that works with no signal and no therapist",
    category: "Energy · Mobile App",
    year: "2026",
    medium: "app",
    summary:
      "A non-clinical wellbeing companion for offshore oil and gas crews — role-aware, private, and built to work on a rig with no connectivity and no time.",
    metric: { value: "30s", label: "shortest recovery exercise" },
    stack: ["Mobile app", "Offline-first storage", "On-device content"],
    tone: "paper",
    art: 3,
    cover: "/work/offshore-minds/cover.jpg",
    industry: "Energy & Offshore Operations",
    expertise: ["Mobile Engineering", "Offline-First Architecture", "Product Design", "Wellbeing UX"],
    platform: "iOS · Android",
    overviewTitle: "Thirty seconds, no signal, no counsellor",
    overview:
      "Offshore crews work rotations that wreck sleep, in a culture where admitting you are struggling carries a cost, on installations where the connection drops for hours at a time. Most wellbeing apps assume the opposite of all three: a quiet room, a stable connection, and a user comfortable being labelled a patient. Offshore Minds was built for the actual conditions.",
    challenge:
      "Three constraints pulled against each other. Connectivity offshore is intermittent, so anything that needs a server at the moment of use is worthless. The content had to stay explicitly non-clinical — the moment an app claims to treat anything it takes on regulatory weight and, more practically, workers stop opening it. And the time available is not twenty minutes of meditation; it is the gap between two tasks.",
    approach:
      "Everything ships on the device, so the app behaves identically with the radio off. Onboarding asks for the role — drilling, production, maintenance, safety — and tailors what follows, because fatigue reads differently to a driller than to a safety operator. The recovery library is graded by how much time you actually have: five to ten minutes for a full wind-down, but also a 30-second three-breath reset, a 90-second shoulder release, and a one-minute grounding exercise. Language stays deliberately ordinary throughout — check-in, reset, reflection — and the journal counts streaks rather than symptoms.",
    outcome:
      "A wellbeing tool that survives the environment it was built for: usable with no signal, short enough to fit a real shift, and framed so that opening it does not feel like admitting to a diagnosis.",
    results: [
      { value: "4", label: "Worker roles tailored for" },
      { value: "30s", label: "Shortest recovery exercise" },
      { value: "100%", label: "Offline-capable" },
      { value: "0", label: "Clinical claims made" },
    ],
    gallery: [
      {
        src: "/work/offshore-minds/01.jpg",
        alt: "Offshore Minds \u2014 onboarding, where the worker picks their role so the content that follows matches the job",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/02.jpg",
        alt: "Diaphragmatic breathing \u2014 a Ready state with a paced circle, hand-placement instruction, and a 5, 8 or 10 minute selector",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/03.jpg",
        alt: "Quick Check-In \u2014 a short, non-clinical read on how the shift is going",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/04.jpg",
        alt: "Reset & Recovery \u2014 breathing, grounding and wind-down techniques, with 30-second and 90-second quick exercises underneath",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/05.jpg",
        alt: "Fatigue Awareness \u2014 guidance framed around shift patterns rather than clinical language",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/06.jpg",
        alt: "Moments That Matter \u2014 short reflective prompts written for life on a rig",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/07.jpg",
        alt: "Staying Sharp journal \u2014 total entries, entries this week, and a day streak above the reflection composer",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/08.jpg",
        alt: "Your Rewards \u2014 progress recognised without turning wellbeing into a scoreboard",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/offshore-minds/09.jpg",
        alt: "Account and settings, including the offline behaviour the app depends on",
        width: 1024,
        height: 1536,
      },
    ],
  },

  {
    id: "mynavilife",
    client: "MyNaviLife",
    title: "A whole day, shown one step at a time",
    category: "Health & Social Care · Mobile App",
    year: "2026",
    medium: "app",
    summary:
      "A daily-living companion for adults in supported care: a 37-step day reduced to a single next action, every step readable aloud, and help never more than one tap away.",
    metric: { value: "1", label: "next action shown at a time" },
    stack: ["Mobile app", "Text-to-speech", "Location sharing"],
    tone: "flare",
    art: 4,
    cover: "/work/mynavilife/cover.jpg",
    industry: "Health & Social Care",
    expertise: ["Accessible Product Design", "Mobile Engineering", "Safeguarding Flows", "Text-to-Speech"],
    platform: "iOS · Android",
    overviewTitle: "Thirty-seven tasks, one card",
    overview:
      "MyNaviLife supports adults living in supported accommodation through their day. A typical plan runs to nearly forty steps — waking, medication, meals, appointments, routines — and presenting that as a list is the fastest way to make someone stop using it. The organising decision was to show exactly one thing at a time.",
    challenge:
      "The user may not read comfortably, may be overwhelmed by choice, and may at some point be in genuine distress. Each of those pulls the design in a different direction: fewer words, fewer options, but faster access to help. On top of that, the escalation path is not a single number — a care unit, a non-urgent medical line, and emergency services are all appropriate at different moments, and deciding which is exactly what a person in difficulty cannot do.",
    approach:
      "The home screen shows the day as one figure and one card: Do This Next, with the time and a speaker button, because reading is optional rather than required. The full plan is still reachable, just never the first thing you meet. Help is a persistent floating control on every screen — never inside a menu — and the help screen opens with 'You are safe' before presenting contacts in escalation order, from the local care unit through NHS 111 to emergency services, each with both call and message. Share My Location sits at the bottom for when someone cannot say where they are. Progress is handled as stars and unlockable badges, so the day reads as encouragement rather than a compliance checklist.",
    outcome:
      "A day that would overwhelm as a list becomes a sequence of single, spoken steps, with the safeguarding path always one tap away regardless of where the person is in the app.",
    results: [
      { value: "1", label: "Next action shown at a time" },
      { value: "37", label: "Steps in a typical plan" },
      { value: "1 tap", label: "To reach help, from any screen" },
      { value: "4", label: "Escalation levels, care to emergency" },
    ],
    gallery: [
      {
        src: "/work/mynavilife/01.jpg",
        alt: "Home \u2014 a greeting by name, today's plan as a single progress figure, and one Do This Next card with audio playback",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/mynavilife/02.jpg",
        alt: "My Day \u2014 the full plan, kept behind the single next action so the day never arrives all at once",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/mynavilife/03.jpg",
        alt: "My Rewards \u2014 stars earned, task counts, and unlockable badges like First Step and On a Roll",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/mynavilife/04.jpg",
        alt: "I Need Help \u2014 'You are safe', then a ladder of contacts from care unit to NHS 111 to emergency services, each with call and message",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/mynavilife/05.jpg",
        alt: "Share My Location \u2014 for the moments when someone cannot explain where they are",
        width: 1024,
        height: 1536,
      },
      {
        src: "/work/mynavilife/06.jpg",
        alt: "Calm \u2014 grounding content reachable from the persistent bottom bar",
        width: 1024,
        height: 1536,
      },
    ],
  },

  {
    id: "babyfits",
    client: "BabyFits",
    title: "Orders up 256% on a store that already existed",
    category: "E-commerce · Paid Social",
    year: "2026",
    medium: "marketing",
    summary:
      "Paid social and store optimisation for a baby clothing brand — rebuilt around broad-audience testing on Meta, with the winning ad set landing purchases at roughly PKR 636 each.",
    metric: { value: "+256%", label: "orders, period on period" },
    stack: ["Meta Ads", "Shopify", "Creative Testing"],
    tone: "flare",
    art: 2,
    industry: "E-commerce · Baby & Kids",
    expertise: ["Paid Social", "Creative Testing", "Shopify", "Conversion Tracking"],
    platform: "Meta · Shopify",
    overviewTitle: "Find the ad set that works, then feed it",
    overview:
      "BabyFits sells baby clothing through Shopify. The account was already spending on Meta, but spend was spread thinly across a large number of ad sets with no clear read on which audience or creative was actually producing orders. The work was to find the combinations that convert and move budget behind them.",
    challenge:
      "Eighty-nine ad sets were live. At that spread, no single set accumulated enough data to prove itself, cost per purchase varied by a factor of five between them, and creative fatigue was invisible because nothing ran long enough to fatigue. Broad-audience testing on Meta only works if you let a set run — which means being willing to turn most of them off.",
    approach:
      "Structured testing against broad audiences rather than narrow interest stacks, with product-led creative and enough budget per set to reach statistical daylight. Winners were identified on cost per purchase rather than on CTR or reach, since a cheap click that does not convert is just a cheap click. Budget then consolidated behind the sets that held their cost as spend increased, with the Shopify side tracking order volume and average order value so the ad platform was never the only source of truth.",
    outcome:
      "Across Jul 1 to Aug 19, 2026, the store recorded PKR 1.05M in total sales from 770 orders — up 163% and 256% respectively on the preceding period. On the Meta side, the strongest broad ad set delivered 113 website purchases at PKR 635.61 each across the 30 days to Aug 18, against 1.53M impressions and 708,501 people reached.",
    results: [
      { value: "+256%", label: "Orders, period on period" },
      { value: "+163%", label: "Total sales, period on period" },
      { value: "PKR 636", label: "Cost per purchase, best ad set" },
      { value: "708K", label: "People reached in 30 days" },
    ],
    gallery: [
      {
        src: "/work/baby-fits/shopify-babyfits.jpg",
        alt: "Shopify dashboard for BabyFits, 1 July to 19 August 2026 \u2014 PKR 1.05M total sales up 163%, 770 orders up 256%, average order value PKR 1,806",
        width: 1920,
        height: 1080,
        wide: true,
      },
      {
        src: "/work/baby-fits/meta-ads-babyfits.jpg",
        alt: "Meta Ads Manager for BabyFits \u2014 89 ad sets, PKR 437,229 spent, 1.53M impressions and 708,501 reached, with the leading broad ad set at 113 purchases",
        width: 1920,
        height: 1080,
      },
      {
        src: "/work/baby-fits/shopify-babyfits-2.jpg",
        alt: "Shopify and Meta side by side, showing order volume against the ad sets producing it",
        width: 1920,
        height: 1080,
      },
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
  {
    id: "itrat",
    name: "Itrat Batool",
    role: "Business Analyst",
    // NOTE: source is 200x200 — soft in the 4:5 frame. Replace with 800x1000.
    photo: "/team/itrat.jpg",
  },
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

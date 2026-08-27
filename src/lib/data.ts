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
  tagline: "Built to be taken seriously",
  email: "hello@nexic.tech",
  phone: "+92 51 555 0142",
  address: "Nawaz Arcade, First Floor, Office #4, National Police Foundation, Block A, Islamabad",
  founded: 2026,
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
/**
 * VERIFY BEFORE LAUNCH. These were placeholders and have been reduced to what
 * the portfolio actually evidences. Raise them only to numbers you can stand
 * behind — a prospect who counts the case studies will notice.
 */
export const stats = {
  projects: "12+",
  clients: "10+",
  /** Count of services offered — replaces a "years building" figure, which
   *  a studio founded in 2026 cannot honestly claim. */
  disciplines: "8",
  engineers: "6+",
  retention: "High",
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

/**
 * Real client names only. The strip hides itself while this is empty rather
 * than showing an invented roster.
 */
export const clients: Client[] = [];

export type Badge = {
  label: string;
  detail: string;
  /** Partner/award badge SVG. Falls back to a typeset lockup. */
  logo?: string;
};

/**
 * Third-party validation. Add only credentials that actually exist and can be
 * checked — a claimed AWS partnership or ISO certification is verifiable, and
 * being caught inventing one costs more than having none.
 */
export const badges: Badge[] = [];

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
    | "video"
    | "seo";
};

export const services: Service[] = [
  {
    id: "marketing",
    index: "01",
    title: "Digital Marketing",
    tagline: "Measured in pipeline, not impressions",
    icon: "marketing",
    summary:
      "Content, email, and lifecycle run as one system against one dashboard. Every activity ties back to pipeline rather than to impressions.",
    detail:
      "We start by fixing attribution, because a marketing programme you cannot measure is a marketing programme you cannot defend. Once the numbers are trustworthy, we build the content and lifecycle work around the buyers who actually convert for you.",
    deliverables: ["Content strategy", "Email & lifecycle", "Analytics & attribution", "Conversion tracking"],
    includes: [
      "Attribution fixed before spend scales",
      "A content calendar mapped to buying intent",
      "Lifecycle email sequences that are not spam",
      "One dashboard the whole team reads",
    ],
  },
  {
    id: "social",
    index: "02",
    title: "Social Media Marketing",
    tagline: "A presence you can actually sustain",
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
    index: "03",
    title: "Paid Advertising",
    tagline: "Spend that traces back to revenue",
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
    id: "seo",
    index: "04",
    title: "Search Engine Optimisation",
    tagline: "Found by the buyers already searching",
    icon: "seo",
    summary:
      "Technical fixes applied rather than listed, content built around the queries that convert, and local visibility for the places you actually trade in.",
    detail:
      "Most SEO audits are a spreadsheet nobody actions. We apply the technical fixes ourselves — crawlability, site speed, structured data, internal linking — then build content against real search intent rather than vanity keywords. Rankings are reported next to traffic and conversions, because position alone pays nobody.",
    deliverables: ["Technical audits", "Keyword & intent research", "On-page & content", "Local SEO"],
    includes: [
      "A technical audit with the fixes applied, not just listed",
      "Keyword mapping tied to buying intent",
      "Structured data and internal linking sorted",
      "Rankings reported next to traffic and conversions",
    ],
  },
  {
    id: "design",
    index: "05",
    title: "Graphic Design & Video Editing",
    tagline: "One visual system, every channel",
    icon: "design",
    summary:
      "Brand identity and the everyday assets that keep it consistent, plus short-form edits and motion graphics delivered in every ratio your channels need.",
    detail:
      "A logo is the smallest part of an identity. What keeps a brand coherent is the system underneath it — type scale, colour rules, spacing, and templates your team can use without asking a designer for every post. The same system carries into video, where we write for the hook and export the story in vertical, square, and wide so nothing gets cropped into nonsense.",
    deliverables: ["Brand identity", "Social & print assets", "Short-form video", "Motion graphics"],
    includes: [
      "Logo suite with clear usage rules",
      "Editable templates for social, decks, and print",
      "Every cut delivered in 9:16, 1:1, and 16:9",
      "Source files handed over, no lock-in",
    ],
  },
  {
    id: "web",
    index: "06",
    title: "Websites & Web Applications",
    tagline: "Fast to load, built to convert",
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
    index: "07",
    title: "Mobile App Development",
    tagline: "Built, shipped, and through review",
    icon: "mobile",
    summary:
      "Native-feeling iOS and Android from one codebase, or fully native when the hardware demands it. Taken through store review, instrumented from the first build.",
    detail:
      "Getting an app built is the easy half; getting it approved, updated, and observable is where projects stall. We handle store submission, staged rollouts, and crash reporting, and we design for the network you actually have rather than the one in the demo.",
    deliverables: ["Flutter", "Swift & Kotlin", "Offline-first sync", "App Store release"],
    includes: [
      "App Store and Play Store submission handled",
      "Offline-first data sync where it matters",
      "Crash reporting and release monitoring",
      "Staged rollouts with a rollback path",
    ],
  },
  {
    id: "ai",
    index: "08",
    title: "Agentic AI Services",
    tagline: "Agents that do work, not demos",
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
    id: "restaurant-social",
    // Replace with the real restaurant name when you have permission to use it.
    client: "Confidential client",
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
    expertise: ["Social Media Management", "Art Direction", "Content Design", "Typography"],
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
    featured: true,
    client: "Trusting Hands",
    title: "One app where you can give help or ask for it",
    category: "Non-profit · Mobile App",
    year: "2025",
    medium: "app",
    summary:
      "A charity platform covering blood donation, education sponsorship, Shuhada family support and Islamic giving — where every module lets the same person donate or request, rather than sorting users into donors and recipients.",
    metric: { value: "4", label: "donation streams in one app" },
    stack: ["Flutter", "iOS", "Android", "Admin dashboard"],
    tone: "ink",
    art: 1,
    cover: "/work/trusting-hands/cover.jpg",
    industry: "Non-profit & Community Welfare",
    expertise: ["Flutter Development", "Product Design", "Donation Flows", "Admin Tooling"],
    platform: "Flutter · iOS & Android",
    overviewTitle: "Nobody is only a donor",
    overview:
      "Trusting Hands brings four kinds of giving into one app: an urgent blood bank, education sponsorship, financial support for Shuhada families, and general Islamic charity. The organising decision was to refuse the usual split between people who give and people who receive — someone who donates blood in March may need school fees in September, and the app should not make them feel like a different class of user in each case.",
    challenge:
      "Four donation streams behave nothing alike. A blood request is an emergency measured in hours and matched on blood group, hospital and city. Education sponsorship is a considered decision made once a term. Zakat, khums and sadaqah are not interchangeable — each has its own rules about who may receive it, so collapsing them into a single donate button would have been religiously wrong as well as unusable. On top of that the audience is not English-first, and many users are not comfortable with long password entry on a phone.",
    approach:
      "Every module was given the same three-action shape — request support, see my requests, see all requests — so the second module a user opens is already familiar. Underneath, each stream keeps its own rules: blood carries urgency, blood group, hospital and location and is colour-coded red throughout; education and Shuhada support run on request-and-review; the Islamic giving categories stay separate all the way down rather than being flattened at the point of donation. A single dashboard plots all streams together, and biometric login plus an in-app language switch keep the entry barrier low.",
    outcome:
      "Four charitable programmes that previously lived in separate processes now sit behind one login, built in Flutter so a single codebase serves both stores. Behind the app, an admin dashboard gives the organisation a queue of incoming requests to review, approve or decline, so nothing reaches a donor unverified — and the architecture leaves room for new donation streams without reopening the ones already live.",
    results: [
      { value: "4", label: "Donation streams unified" },
      { value: "2-way", label: "Give or request in every module" },
      { value: "1,500+", label: "Students supported, shown in-app" },
      { value: "1", label: "Flutter codebase, both stores" },
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
    featured: true,
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
    title: "The wellbeing platform a company gives its crew",
    category: "Energy · Mobile App",
    year: "2026",
    medium: "app",
    summary:
      "An employer-provided wellbeing platform for offshore workforces, built in Flutter. Companies give it to their crews; it stays non-clinical, private to the individual, and works with no signal.",
    metric: { value: "30s", label: "shortest recovery exercise" },
    stack: ["Flutter", "iOS", "Android", "Offline-first storage"],
    tone: "paper",
    art: 3,
    cover: "/work/offshore-minds/cover.jpg",
    industry: "Energy & Offshore Operations",
    expertise: ["Flutter Development", "Offline-First Architecture", "Product Design", "Wellbeing UX"],
    platform: "Flutter · iOS & Android",
    overviewTitle: "Thirty seconds, no signal, no counsellor",
    overview:
      "Offshore Minds is bought by the employer and used by the worker, which is the tension the whole product has to hold. Companies have a duty of care to crews working rotations that wreck sleep, in a culture where admitting you are struggling carries a cost, on installations where the connection drops for hours. A tool that feels like surveillance gets ignored; one that feels clinical gets avoided. It had to be neither.",
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
      { value: "1", label: "Flutter codebase, both stores" },
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
    title: "A child's whole day, shown one step at a time",
    category: "Family & Education · Mobile App",
    year: "2026",
    medium: "app",
    summary:
      "A routine and activities app for children, built in Flutter. A day of nearly forty steps is reduced to one card at a time, every instruction can be read aloud, and stars and badges keep it feeling like progress rather than a chore list.",
    metric: { value: "1", label: "next action shown at a time" },
    stack: ["Flutter", "iOS", "Android", "Text-to-speech"],
    tone: "flare",
    art: 4,
    cover: "/work/mynavilife/cover.jpg",
    industry: "Family, Education & Care",
    expertise: ["Flutter Development", "Accessible Product Design", "Safeguarding Flows", "Text-to-Speech"],
    platform: "Flutter · iOS & Android",
    overviewTitle: "Thirty-seven steps, one card",
    overview:
      "MyNaviLife walks a child through their day — waking, getting ready, meals, activities, appointments, winding down. A typical plan runs to nearly forty steps, and handing a child a list of forty things is the fastest way to make them close the app. The organising decision was to show exactly one thing at a time, and to make finishing it feel worth doing.",
    challenge:
      "A child may not read fluently, is easily overwhelmed by choice, and at some point may need an adult quickly. Each of those pulls the design in a different direction: fewer words, fewer options, but faster access to help. The escalation path is not one number either — a carer, a care unit, a non-urgent medical line and emergency services are each right at different moments, and choosing between them is exactly what a frightened child cannot do.",
    approach:
      "The home screen shows the day as one figure and one card: Do This Next, with the time and a speaker button, because reading is optional rather than required. The full plan is still reachable, just never the first thing you meet. Help is a persistent floating control on every screen — never inside a menu — and the help screen opens with 'You are safe' before presenting contacts in escalation order, from the carer and care unit through the non-urgent medical line to emergency services, each with both call and message. Share My Location sits at the bottom for when a child cannot say where they are. Progress is handled as stars and unlockable badges, so the day reads as encouragement rather than a chore list.",
    outcome:
      "A day that would overwhelm as a list becomes a sequence of single, spoken steps a child can actually follow, with the safeguarding path always one tap away wherever they are in the app — and one Flutter codebase serving both stores.",
    results: [
      { value: "1", label: "Next action shown at a time" },
      { value: "37", label: "Steps in a typical plan" },
      { value: "1 tap", label: "To reach help, from any screen" },
      { value: "4", label: "Escalation levels, carer to emergency" },
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
    featured: true,
    client: "BabyFits",
    title: "Orders up 256% by finding the ad set that actually worked",
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
  {
    id: "xebayi",
    featured: true,
    client: "Xebayi Dermaceuticals",
    title: "Selling actives to people who have been burned before",
    category: "Skincare · E-commerce",
    year: "2026",
    medium: "web",
    summary:
      "A storefront for a clinical skincare range that leads with concentrations rather than adjectives — five formulas, honest strengths, and bundles that sell the routine instead of the bottle.",
    metric: { value: "5", label: "formulas, one clear routine" },
    stack: ["E-commerce", "Admin dashboard", "Order tracking", "WhatsApp"],
    tone: "ink",
    art: 4,
    cover: "/work/xebayi/cover.jpg",
    industry: "Skincare & Cosmeceuticals",
    expertise: ["E-commerce", "Conversion Design", "Product Merchandising", "Frontend Engineering"],
    platform: "Web · Mobile-first",
    overviewTitle: "Percentages, not promises",
    overview:
      "Xebayi sells medicated skincare — vitamin C, niacinamide, retinol — to a market that has been sold a great deal of scented nothing. The buyer is sceptical for good reason and, with actives, is also right to be cautious: the wrong strength genuinely does damage. The storefront had to earn a purchase from someone who has already been disappointed.",
    challenge:
      "Skincare pages usually hide the one number that matters. Naming a product Radiance Elixir and burying the concentration in the ingredients tab reads as evasion to an informed buyer, and gives an uninformed one nothing to compare. The site also had to work for two very different visitors — someone who knows they want 1% retinol, and someone who only knows their skin is not behaving.",
    approach:
      "Every product leads with its active and its strength: 15% Vitamin C, 10% Niacinamide, 1% Retinol, set in the product name itself rather than the small print. For the visitor who does not know where to start, bundles do the work — a bundle is a routine with an order to it, not a discount bin, and it lifts basket value as a side effect rather than as the pitch. A credibility ticker runs the claims that matter in this category — cruelty free, paraben free, medical-grade formulation — and social proof is specific and local rather than generic. Support routes to WhatsApp, because that is where this market actually asks questions before buying.",
    outcome:
      "A storefront that answers the informed buyer's first question on the product card, and gives the uncertain one a routine to start with instead of a catalogue to guess at. Behind it, the team runs the whole catalogue and every order from one dashboard, and customers follow their own delivery through order tracking rather than messaging to ask where it is.",
    results: [
      { value: "5", label: "Core formulas" },
      { value: "2,000+", label: "Customers cited on site" },
      { value: "PKR 1,000", label: "Saved on the lead bundle" },
      { value: "1", label: "Dashboard for catalogue and orders" },
    ],
    gallery: [
      {
        src: "/work/xebayi/00.jpg",
        alt: "Homepage hero — Medicated skincare for visible results, with the active-strength badges called out beside the model",
        width: 1536,
        height: 1024,
        wide: true,
      },
      {
        src: "/work/xebayi/01.jpg",
        alt: "The Range — five product cards, each naming its active and concentration rather than a marketing name",
        width: 1536,
        height: 1024,
      },
      {
        src: "/work/xebayi/02.jpg",
        alt: "Bright and Protect bundle — the routine broken into numbered steps with the saving stated against the full price",
        width: 1536,
        height: 1024,
      },
      {
        src: "/work/xebayi/03.jpg",
        alt: "Product detail — concentration, volume and the skin concern it addresses above the fold",
        width: 1536,
        height: 1024,
      },
      {
        src: "/work/xebayi/04.jpg",
        alt: "Ingredients and formulation detail, written for a buyer who reads labels",
        width: 1536,
        height: 1024,
      },
      {
        src: "/work/xebayi/05.jpg",
        alt: "Checkout and support — cart flow with WhatsApp reachable throughout",
        width: 1536,
        height: 1024,
      },
    ],
  },
  {
    id: "short-form-video",
    client: "Nexic Technologies",
    title: "Short-form edits built for the first two seconds",
    category: "Social · Video Editing",
    year: "2026",
    medium: "video",
    summary:
      "A reel that is scrolled past has failed regardless of how it ends. A selection of vertical edits cut for the platform they run on — pace set by the hook, captions built for sound-off, and a stop at the first frame.",
    metric: { value: "9:16", label: "cut for the feed, not reframed for it" },
    stack: ["Premiere Pro", "After Effects", "Instagram Reels"],
    tone: "flare",
    art: 2,
    industry: "Social & Content",
    expertise: ["Video Editing", "Motion Graphics", "Sound Design", "Short-Form Strategy"],
    platform: "Instagram Reels · 9:16",
    overviewTitle: "The edit starts before the first cut",
    overview:
      "Short-form is not long-form made shorter. The format has its own grammar: the viewer arrives mid-scroll with the sound off, decides inside two seconds, and never sees a slow build. Every edit here is cut to that reality rather than trimmed down to it.",
    challenge:
      "Most video that fails on social fails for the same three reasons — it opens on a title card instead of the payoff, it assumes audio, and it holds shots at a length that reads as dead air on a phone. Landscape footage reframed to vertical compounds all three, because the composition was never built for the crop.",
    approach:
      "Each edit opens on its strongest frame, not its beginning. Cuts are timed against the beat rather than the sentence, so the rhythm carries a viewer who is not yet listening. Captions are treated as design rather than accessibility afterthought — legible at thumb distance, keyed to the delivery, and written to carry the whole message with the sound off. Grading and motion stay consistent across a set so a feed reads as one hand.",
    outcome:
      "A body of vertical work that holds attention past the point where most reels lose it, and reads as a coherent set rather than a folder of one-offs.",
    results: [
      { value: "2s", label: "To earn the scroll" },
      { value: "9:16", label: "Native vertical, not cropped" },
      { value: "100%", label: "Legible with sound off" },
    ],
    videos: [
      {
        title: "Reel 01",
        provider: "instagram",
        id: "https://www.instagram.com/reel/DbuwrHgNzxI/",
        aspect: "9/16",
      },
      {
        title: "Reel 02",
        provider: "instagram",
        id: "https://www.instagram.com/reel/Dbq9LUwtRDq/",
        aspect: "9/16",
      },
      {
        title: "Reel 03",
        provider: "instagram",
        id: "https://www.instagram.com/reel/DZhFPjTRajo/",
        aspect: "9/16",
      },
      {
        title: "Reel 04",
        provider: "instagram",
        id: "https://www.instagram.com/reel/DOs_XSxDcuv/",
        aspect: "9/16",
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

/**
 * Empty until there is real history to tell. Nexic was founded in 2026, so a
 * dated timeline has nothing true to put in it yet. AboutStory renders nothing
 * while this is empty; add entries as milestones actually happen.
 */
export const milestones: Milestone[] = [];

export type Person = {
  id: string;
  name: string;
  role: string;
  /** Portrait, 800x1000 (4:5), neutral background. Falls back to a monogram. */
  photo?: string;
};

/** Faces do real work when the client will never visit the office. */
export const team: Person[] = [
  {
    id: "umar",
    name: "Umar Nisar",
    role: "Founder · Digital & Social Media Marketing",
    // photo: "/team/umar.jpg" — 800x1000 portrait needed
  },
  {
    id: "itrat",
    name: "Itrat Batool",
    role: "Business Analyst",
    /**
     * Resampled from a 200x200 original to 400x500 (lanczos + unsharp) and the
     * grid is capped so it renders below native size. That removes the visible
     * stretch but adds no detail — a real 800x1000 portrait still wins.
     */
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

/** Real quotes only — add them as clients give permission. */
export const testimonials: Testimonial[] = [];

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
/**
 * The band that runs across /work. This was a list of frameworks — Postgres,
 * AWS, Swift — which sold the wrong thing to a marketing buyer. It now names
 * what we are actually hired for, in the same priority order as the services.
 */
export const capabilities = [
  "Digital Marketing",
  "SEO",
  "Paid Advertising",
  "Social Media",
  "Branding",
  "Graphic Design",
  "Video Editing",
  "Motion Graphics",
  "Web Development",
  "Mobile Apps",
  "Automation",
  "Agentic AI",
] as const;

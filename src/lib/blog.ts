/**
 * Blog content.
 *
 * Posts are authored as typed blocks rather than raw markdown so that every
 * heading carries a stable `id` — which is what makes the table of contents,
 * anchor links, and the `speakable` JSON-LD hints below actually work. If you
 * later want writers working in markdown, swap `body` for MDX and keep the
 * rest of the shape as-is; nothing downstream reads the blocks directly except
 * <ArticleBody />.
 *
 * AEO note: answer engines reward pages that state the answer plainly and
 * early. Every post therefore carries `takeaways` (a short answer block placed
 * above the article) and `faqs` (emitted as FAQPage structured data).
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export type Author = {
  id: string;
  name: string;
  role: string;
  /** Portrait, 400x400. Falls back to a monogram. */
  photo?: string;
};

export const authors: Record<string, Author> = {
  umar: {
    id: "umar",
    name: "Umar Nisar",
    role: "Founder · Digital & Social Media Marketing",
  },
  itrat: { id: "itrat", name: "Itrat Batool", role: "Business Analyst" },
};

export type Post = {
  slug: string;
  title: string;
  /** One sentence. Used as the meta description and the card summary. */
  excerpt: string;
  category: string;
  tags: string[];
  authorId: keyof typeof authors;
  /** ISO date — drives <time>, sorting, and structured data. */
  publishedAt: string;
  updatedAt?: string;
  readMinutes: number;
  /** Cover image, 1600x900 (16:9). Falls back to generated geometry. */
  cover?: string;
  /** Palette for the fallback cover. */
  tone: "ink" | "flare" | "paper";
  /** The short answer, above the fold. Primary AEO surface. */
  takeaways: string[];
  body: Block[];
  /** Emitted as FAQPage structured data. */
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const categories = [
  "Engineering",
  "AI",
  "Marketing",
  "Design",
  "Business",
] as const;

export const posts: Post[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a business website cost in 2026?",
    excerpt:
      "A straight answer with real ranges — what sits behind a $3,000 site, a $30,000 site, and a $150,000 platform, and how to tell which one you actually need.",
    category: "Business",
    tags: ["Pricing", "Web Development", "Budgeting"],
    authorId: "umar",
    publishedAt: "2026-07-28",
    readMinutes: 9,
    tone: "ink",
    featured: true,
    takeaways: [
      "A template-based marketing site typically costs $3,000–$8,000 and takes two to four weeks.",
      "A custom marketing site with a CMS runs $15,000–$45,000 over six to ten weeks.",
      "A web application with accounts, payments, or integrations starts around $60,000 and rises with scope.",
      "The largest cost driver is rarely design — it is the number of systems the site has to talk to.",
    ],
    body: [
      {
        type: "p",
        text: "Nobody likes the phrase 'it depends', so here are numbers first and reasoning second. These are the ranges we quote and see quoted across agencies of comparable quality, and they hold reasonably well across the UK, EU, and North America.",
      },
      { type: "h2", id: "the-ranges", text: "What each budget actually buys" },
      {
        type: "h3",
        id: "template-site",
        text: "$3,000 – $8,000: a template-based site",
      },
      {
        type: "p",
        text: "A well-chosen theme, your branding applied, your copy poured in, and a contact form wired to an inbox. Two to four weeks. This is the right answer far more often than agencies admit — if you need five pages that look professional and load quickly, paying for custom design is spending money on something your customers will not notice.",
      },
      {
        type: "p",
        text: "What you give up: the layout is somebody else's, performance depends on how bloated the theme is, and you will hit a wall the first time you need something the theme did not anticipate.",
      },
      {
        type: "h3",
        id: "custom-site",
        text: "$15,000 – $45,000: a custom marketing site",
      },
      {
        type: "p",
        text: "Original design, a content management system your marketing team can operate without a developer, proper performance and accessibility work, and analytics wired to real conversion events. Six to ten weeks, typically a designer and one or two engineers.",
      },
      {
        type: "p",
        text: "This is where most funded startups and established mid-market businesses land. The site becomes an asset you can iterate on rather than a brochure you replace every three years.",
      },
      {
        type: "h3",
        id: "web-application",
        text: "$60,000+: a web application",
      },
      {
        type: "p",
        text: "The moment your site has user accounts, takes payments, or synchronises with a system of record — a CRM, an ERP, a booking engine — you are no longer buying a website. You are buying software, and software is priced by complexity rather than by page count.",
      },
      {
        type: "callout",
        text: "A useful test: if you can describe your site as a set of pages, it is a website. If you have to describe it as a set of things users can do, it is an application — and the budget changes accordingly.",
      },
      { type: "h2", id: "cost-drivers", text: "What actually drives the price up" },
      {
        type: "p",
        text: "In our experience the cost of a project correlates far more strongly with integration count than with page count. A twelve-page site with no integrations is cheap. A four-page site that has to authenticate against your legacy identity provider, pull inventory from an ERP, and write leads into a CRM is not.",
      },
      { type: "ol", items: [
        "Integrations with systems you do not control — each one is a negotiation with someone else's API and someone else's uptime.",
        "Content migration, especially from a CMS with inconsistent historical data.",
        "Compliance requirements: accessibility conformance, data residency, audit logging.",
        "Approval layers. Every additional stakeholder adds review cycles, and review cycles are billable time.",
      ]},
      { type: "h2", id: "hidden-costs", text: "The costs quotes usually omit" },
      { type: "ul", items: [
        "Hosting and infrastructure, typically $20–$400 per month depending on traffic.",
        "Content — someone has to write it, and 'the client will supply copy' is the single most common reason projects slip.",
        "Photography or illustration, if you do not already have a library.",
        "Ongoing maintenance: dependency updates, security patches, and small fixes. Budget 10–20% of build cost annually.",
      ]},
      { type: "h2", id: "how-to-choose", text: "How to decide which tier you need" },
      {
        type: "p",
        text: "Ask what the site has to accomplish in the next eighteen months. If the honest answer is 'look credible and collect enquiries', buy the cheapest thing that does that well and spend the difference on marketing. If the answer involves a workflow your business runs on, do not buy a website — commission software, and expect to pay accordingly.",
      },
      {
        type: "quote",
        text: "The most expensive website is the one you rebuild in eighteen months because you bought for today's requirements instead of next year's.",
      },
    ],
    faqs: [
      {
        q: "How much does a small business website cost?",
        a: "A small business website typically costs between $3,000 and $8,000 for a template-based build, or $15,000 to $45,000 for a custom design with a content management system. The difference is original design, performance work, and a CMS your team can operate without a developer.",
      },
      {
        q: "Why do website quotes vary so much between agencies?",
        a: "Quotes vary mainly because of scope assumptions rather than hourly rates. A cheap quote often excludes content migration, integrations, accessibility work, and post-launch maintenance. Ask every agency to price the same explicit list of deliverables and the range usually narrows sharply.",
      },
      {
        q: "How long does it take to build a business website?",
        a: "A template-based site takes two to four weeks. A custom marketing site with a CMS takes six to ten weeks. A web application with accounts or integrations takes three months or more, depending on how many external systems it must connect to.",
      },
      {
        q: "Should I pay monthly or a one-off fee for a website?",
        a: "A one-off build fee plus a separate maintenance retainer is the most transparent arrangement. Bundled monthly website plans are convenient but often mean you never own the site outright, so check the contract for who holds the code and the domain.",
      },
    ],
  },

  {
    slug: "what-is-agentic-ai",
    title: "What is agentic AI, and what can it actually do for a business?",
    excerpt:
      "Agents differ from chatbots in one specific way: they take actions. Here is what that changes, where it works today, and where it still fails.",
    category: "AI",
    tags: ["Agentic AI", "Automation", "LLM"],
    authorId: "umar",
    publishedAt: "2026-07-14",
    updatedAt: "2026-08-02",
    readMinutes: 11,
    tone: "flare",
    featured: true,
    takeaways: [
      "An AI agent is a system that can take actions in other software, not just generate text.",
      "The practical difference from a chatbot is tool use: an agent can query a database, file a ticket, or send an email.",
      "Agents work well on high-volume, well-bounded tasks with a clear definition of correct.",
      "They fail on tasks where being wrong is expensive and hard to detect — which is why evaluation matters more than the model.",
    ],
    body: [
      {
        type: "p",
        text: "The word 'agent' has been stretched to cover almost anything with a language model attached. The distinction that actually matters is narrow: an agent can take actions in other systems. A chatbot answers you. An agent goes and does something, then tells you what it did.",
      },
      { type: "h2", id: "how-agents-differ", text: "How an agent differs from a chatbot" },
      {
        type: "p",
        text: "A chatbot receives text and returns text. An agent receives a goal, decides which tools to call, calls them, reads the results, and repeats until it believes the goal is met. Those tools are ordinary software functions — a database query, an API call, a calendar write.",
      },
      {
        type: "p",
        text: "This is why agents can be genuinely useful and genuinely dangerous in the same breath. A chatbot that hallucinates gives you a wrong answer. An agent that hallucinates issues a refund.",
      },
      { type: "h2", id: "what-works", text: "Where agents work today" },
      { type: "ul", items: [
        "Triage and routing: reading an incoming request, classifying it, and putting it in the right queue with the right context attached.",
        "Research and summarisation across your own documents, with citations back to the source.",
        "First-draft generation for repetitive artefacts — job descriptions, release notes, RFP responses.",
        "Data entry between systems that have no integration and are unlikely to get one.",
      ]},
      {
        type: "p",
        text: "The common thread is that all four are high-volume, well-bounded, and easy to check. A human reviewing an agent's classification takes seconds. A human verifying an agent's financial reconciliation takes as long as doing it themselves, which removes the point.",
      },
      { type: "h2", id: "what-fails", text: "Where they still fail" },
      {
        type: "callout",
        text: "The failure mode to design around is not the agent being wrong. It is the agent being wrong in a way that looks right.",
      },
      {
        type: "p",
        text: "Agents degrade badly on long task chains, because a small error at step two compounds by step nine. They struggle when the definition of success is subjective. And they are poor at recognising the boundary of their own competence, which is why confidence thresholds and human escalation paths are not optional extras.",
      },
      { type: "h2", id: "evaluation", text: "Why evaluation matters more than model choice" },
      {
        type: "p",
        text: "Teams spend weeks choosing between models and no time at all building the harness that tells them whether quality has changed. This is backwards. Models get swapped and updated constantly, often without your involvement if you are using a hosted API. The only durable asset is a suite of test cases, reviewed by someone who knows the domain, that runs on every change.",
      },
      {
        type: "p",
        text: "On one clinical project we shipped a 340-case evaluation suite alongside the feature. It has since caught two quality regressions introduced by upstream model updates — neither of which would have been visible until users complained.",
      },
      { type: "h2", id: "getting-started", text: "A sensible way to start" },
      { type: "ol", items: [
        "Pick one task that happens at least fifty times a week and has an obvious right answer.",
        "Write down how you will measure success before building anything.",
        "Build the evaluation set first, from real historical examples.",
        "Ship to a small internal group with a human review step still in place.",
        "Remove the review step only when the numbers say you can.",
      ]},
    ],
    faqs: [
      {
        q: "What is agentic AI?",
        a: "Agentic AI describes systems that can take actions in other software rather than only generating text. An agent receives a goal, decides which tools to call, executes them, reads the results, and repeats until the goal is met. The defining capability is tool use.",
      },
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot receives text and returns text. An agent can act — querying a database, filing a ticket, or sending an email. The practical consequence is that a chatbot's mistakes produce wrong answers, while an agent's mistakes produce wrong actions.",
      },
      {
        q: "Is agentic AI safe to use in production?",
        a: "It is safe for tasks that are high-volume, well-bounded, and cheap to verify. It is not yet safe for tasks where an error is expensive and hard to detect. Production deployments should include confidence thresholds, human escalation paths, and an evaluation suite that runs on every change.",
      },
      {
        q: "How much does it cost to build an AI agent?",
        a: "A focused agent handling one well-defined workflow typically costs $30,000 to $80,000 to build, including the evaluation harness. Ongoing costs are model inference plus monitoring, which for most business workloads runs in the hundreds rather than thousands of dollars per month.",
      },
    ],
  },

  {
    slug: "seo-or-paid-ads-first",
    title: "SEO or paid ads: where should a limited budget go first?",
    excerpt:
      "They solve different problems on different timelines. A practical framework for deciding which to fund when you cannot fund both.",
    category: "Marketing",
    tags: ["SEO", "Paid Ads", "Strategy"],
    authorId: "itrat",
    publishedAt: "2026-06-30",
    readMinutes: 7,
    tone: "paper",
    takeaways: [
      "Paid ads buy traffic immediately and stop the moment you stop paying.",
      "SEO compounds but rarely produces meaningful volume inside six months.",
      "If you have not yet validated that people want the thing, start with ads — they answer that question fastest.",
      "If demand is proven and margins are thin, SEO is usually the better long-term allocation.",
    ],
    body: [
      {
        type: "p",
        text: "This question is usually framed as a strategy debate when it is really a cash-flow question. The two channels do not compete on quality; they compete on when the money comes back.",
      },
      { type: "h2", id: "different-jobs", text: "They do different jobs" },
      {
        type: "p",
        text: "Paid advertising is a tap. Turn it on and traffic arrives within hours; turn it off and it stops the same day. It is rented attention, and the rent is due monthly.",
      },
      {
        type: "p",
        text: "Search optimisation is closer to construction. Nothing much happens for months, then a page starts ranking and continues delivering traffic with no marginal cost. The asset persists — until a competitor outbuilds it or an algorithm update reshuffles the deck.",
      },
      { type: "h2", id: "start-with-ads", text: "Start with ads when demand is unproven" },
      {
        type: "p",
        text: "If you are not yet certain people want what you sell, ads are the cheapest way to find out. A few thousand dollars across two weeks will tell you which message resonates, which audience converts, and what a customer actually costs to acquire. That is market research that happens to also generate revenue.",
      },
      {
        type: "callout",
        text: "Spending six months on SEO for a proposition nobody wants is the most expensive way to learn that nobody wants it.",
      },
      { type: "h2", id: "start-with-seo", text: "Start with SEO when demand is proven and margins are thin" },
      {
        type: "p",
        text: "Once you know the offer converts, the calculation changes. If your customer acquisition cost through paid channels is uncomfortably close to your margin, every additional month of ad spend is a month you are not building the thing that lowers that cost permanently.",
      },
      {
        type: "p",
        text: "This is also the right call in expensive keyword categories. In some legal and insurance niches a single click costs more than a small business earns per customer, and no amount of campaign optimisation fixes that arithmetic.",
      },
      { type: "h2", id: "the-honest-answer", text: "The honest answer for most businesses" },
      {
        type: "p",
        text: "Run a small, disciplined paid programme to keep the pipeline alive, and put the remainder into content and technical SEO. The ads pay this quarter's bills; the SEO work reduces what you need from ads in the quarters after. Treat the paid budget as a floor to be lowered over time rather than a permanent line item.",
      },
      { type: "h2", id: "measuring", text: "Measure the thing that matters" },
      {
        type: "p",
        text: "Whichever you choose, fix attribution before you spend. A programme you cannot measure is a programme you cannot defend at budget time, and 'we think it is working' has lost more marketing budgets than poor performance ever has.",
      },
    ],
    faqs: [
      {
        q: "Should I invest in SEO or paid ads first?",
        a: "Start with paid ads if you have not yet proven that customers want your offer, because ads answer that question within weeks. Start with SEO if demand is already proven and your paid acquisition cost is close to your margin, because SEO lowers acquisition cost permanently.",
      },
      {
        q: "How long does SEO take to work?",
        a: "Meaningful organic traffic usually takes six to twelve months for a new site, and three to six months for an established domain. Technical fixes can show results faster, but content-driven rankings compound slowly by nature.",
      },
      {
        q: "Can you do SEO and paid ads at the same time?",
        a: "Yes, and it is the most common approach. A disciplined paid programme keeps the pipeline alive while content and technical SEO work compounds underneath it. The paid budget should be treated as a floor to lower over time rather than a permanent fixed cost.",
      },
      {
        q: "Is SEO still worth it with AI answer engines?",
        a: "Yes, but the target has shifted. Answer engines cite sources, so pages that state answers plainly, use question-shaped headings, and carry structured data are more likely to be quoted. The work now optimises for being the cited source rather than only for the blue link.",
      },
    ],
  },
];

/* ---------------------------------------------------------------- */

export const sortedPosts = [...posts].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const relatedPosts = (slug: string, count = 3) =>
  sortedPosts.filter((p) => p.slug !== slug).slice(0, count);

/** "28 July 2026" — explicit locale so server and client agree. */
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

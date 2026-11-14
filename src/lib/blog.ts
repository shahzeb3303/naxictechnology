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
  | { type: "callout"; text: string }
  /** A real screenshot. Evidence inside the article, not decoration. */
  | {
      type: "figure";
      src: string;
      alt: string;
      caption?: string;
      width: number;
      height: number;
    };

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

/**
 * Order matters — these render as chips on /blog and put the primary services
 * first, matching the services list. Every post's category must appear here,
 * otherwise a post shows a chip the topic list does not offer.
 */
export const categories = [
  "Marketing",
  "Design",
  "SEO",
  "Engineering",
  "AI",
] as const;

export const posts: Post[] = [
  {
    slug: "ranking-in-ai-search",
    title: "What Google actually says about ranking in AI search",
    excerpt:
      "Most advice about AI Overviews is invented. Google publishes its own guidance, and it contradicts a lot of what agencies are selling.",
    category: "AI",
    tags: ["AI Search", "AI Overviews", "SEO", "GEO"],
    authorId: "itrat",
    publishedAt: "2026-11-14",
    readMinutes: 8,
    tone: "ink",
    cover: "/blog/ai-search/mythbusting.jpg",
    takeaways: [
      "Google states there are no additional technical requirements for appearing in AI Overviews beyond being indexed and eligible for a snippet.",
      "Google says structured data is not required for generative AI search, and that you do not need llms.txt or any other AI specific file.",
      "Publishing large volumes of pages to influence AI answers is covered by Google's scaled content abuse policy.",
      "ChatGPT uses a different crawler from the one that trains models, so blocking the wrong one removes you from ChatGPT search results.",
      "Search Console has a Generative AI performance report, which is the only first party measurement available.",
    ],
    body: [
      {
        type: "p",
        text: "If you search for how to rank in AI Overviews you will find a great deal of confident advice and very little agreement. One guide says 81% of cited sources come from the top 10 organic results. Another says 36.7% of cited URLs do not rank in the top 100 at all. Recommended answer length ranges from 40 words to 167 words depending on who is writing. These numbers come from vendor studies with methodologies you cannot inspect.",
      },
      {
        type: "p",
        text: "Google publishes its own guidance on this. It is shorter and less exciting than the agency version, and worth reading before you pay anyone for AI search optimisation.",
      },
      {
        type: "h2",
        id: "what-google-says",
        text: "What the documentation actually says",
      },
      {
        type: "p",
        text: "Google's [guide to optimising for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) puts the position plainly. In its own words, \u201coptimizing for generative AI search is optimizing for the search experience, and thus still SEO\u201d. There is no separate discipline being described here.",
      },
      {
        type: "p",
        text: "The eligibility rule is equally direct. To appear as a supporting link in AI Overviews or AI Mode, [a page must be indexed](https://developers.google.com/search/docs/appearance/ai-features) and eligible to be shown in Google Search with a snippet. Google adds that there are no additional technical requirements.",
      },
      {
        type: "figure",
        src: "/blog/ai-search/ai-features.jpg",
        alt: "Google Search Central documentation stating that a page must be indexed and eligible to be shown with a snippet, with no additional technical requirements for AI features",
        caption:
          "Google's AI features documentation. The technical bar is the same bar as ordinary Search, and meeting it still guarantees nothing.",
        width: 1440,
        height: 900,
      },
      {
        type: "h2",
        id: "what-you-do-not-need",
        text: "The things you have probably been sold",
      },
      {
        type: "p",
        text: "Google runs a section of that guide titled Mythbusting generative AI search, listing what you do not need to do. Three of its entries are worth quoting because they contradict common paid advice.",
      },
      {
        type: "p",
        text: "On AI specific files: \u201cYou don\u2019t need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search\u201d. It names llms.txt directly and says Google Search does not use it.",
      },
      {
        type: "p",
        text: "On structured data: \u201cStructured data isn\u2019t required for generative AI search\u201d. Schema markup remains useful for rich results in ordinary Search, which is a separate reason to have it, but it is not an AI search lever.",
      },
      {
        type: "p",
        text: "On rewriting for machines: there is no requirement to chop content into small chunks, and no need to write in a particular style for AI systems. Google states there is no ideal page length for generative AI search.",
      },
      {
        type: "figure",
        src: "/blog/ai-search/mythbusting.jpg",
        alt: "Google Search Central Mythbusting generative AI search section, covering llms.txt files, content chunking, and rewriting content specifically for AI systems",
        caption:
          "The Mythbusting section. Google does say keeping an llms.txt file is fine and will neither harm nor help your rankings, which is a reasonable summary of its current value.",
        width: 1440,
        height: 900,
      },
      {
        type: "callout",
        text: "This site publishes an llms.txt file. We keep it because Perplexity and several smaller crawlers read it, not because Google does. That distinction is the whole point: a file can be worth having for one engine and irrelevant to another.",
      },
      {
        type: "h2",
        id: "volume-warning",
        text: "The warning most people skip",
      },
      {
        type: "p",
        text: "The same guide addresses publishing volume. Creating many pages primarily to influence rankings or AI responses \u201cviolates Google\u2019s scaled content abuse spam policy\u201d, and it adds that \u201ca high quantity of pages doesn\u2019t make a website higher quality or more relevant to users\u201d.",
      },
      {
        type: "p",
        text: "This matters because the standard response to AI search anxiety is to publish more. If an agency proposes forty articles a month to capture AI citations, they are proposing the exact pattern that policy describes.",
      },
      {
        type: "h2",
        id: "other-engines",
        text: "ChatGPT and Perplexity work differently",
      },
      {
        type: "p",
        text: "Google is one engine. The others have their own crawlers and their own rules, and this is where real technical mistakes happen.",
      },
      {
        type: "p",
        text: "OpenAI [documents three separate bots](https://developers.openai.com/api/docs/bots). GPTBot crawls content that may train foundation models. OAI-SearchBot surfaces sites in ChatGPT search. ChatGPT-User handles user initiated fetches, such as when someone asks ChatGPT to open a specific page.",
      },
      {
        type: "p",
        text: "The practical consequence is that these are different decisions. A publisher who blocks GPTBot to keep their writing out of model training has not removed themselves from ChatGPT search. A site that blocks OAI-SearchBot has, and OpenAI states those sites will not appear in ChatGPT search answers.",
      },
      {
        type: "ul",
        items: [
          "GPTBot: training. Block it if you object to your content training models.",
          "OAI-SearchBot: ChatGPT search results. Blocking it removes you from ChatGPT answers.",
          "ChatGPT-User: fetches a page because a user asked for it.",
          "Google-Extended: governs Gemini training and grounding, separate from Google Search indexing.",
        ],
      },
      {
        type: "p",
        text: "We have seen sites block all AI user agents in one sweep, usually added by a developer acting on a general instruction to keep AI out. If you sell to people who research through ChatGPT, that setting quietly removes you from the shortlist.",
      },
      {
        type: "h2",
        id: "measuring",
        text: "How to measure any of this",
      },
      {
        type: "p",
        text: "Search Console carries a Generative AI performance report covering generative AI features in Search and Discover. It is the only first party data on this that exists. Analytics will not separate an AI Overview click from an ordinary organic click, and third party AI visibility trackers are sampling prompts rather than observing your traffic.",
      },
      {
        type: "p",
        text: "Google also added a generative AI control in Search Console. The default includes your site. If you want out of AI features specifically, that is the switch, and it is worth knowing it exists before someone flips it without telling you.",
      },
      {
        type: "h2",
        id: "what-we-do",
        text: "What we do instead",
      },
      {
        type: "p",
        text: "Nothing here argues that AI search is unimportant. It argues that the work is ordinary technical and content work, and that most AI specific optimisation being sold is either unnecessary or unverifiable.",
      },
      {
        type: "ol",
        items: [
          "Make sure pages are crawlable and indexable, including through any CDN or firewall sitting in front of the site.",
          "Check which AI user agents robots.txt allows, and confirm the decision was deliberate rather than inherited.",
          "Answer the actual question early on the page, in text, because text is what gets quoted.",
          "Keep schema for rich results and for non Google engines, without expecting it to buy AI citations.",
          "Publish less and make it worth citing. One page with original data outperforms twenty summarising other people.",
          "Watch the Generative AI report in Search Console rather than a vendor dashboard.",
        ],
      },
      {
        type: "p",
        text: "That last point is the one that actually separates sites in AI answers. An engine quoting a page needs something on it worth quoting. If a page restates what twenty others already say, there is no reason to cite it over any of them.",
      },
      {
        type: "p",
        text: "If you want help with the technical side of this, it sits inside our [SEO work](/services#seo). If you are weighing it against paid channels, we wrote about [that trade off separately](/blog/seo-or-paid-ads-first).",
      },
    ],
    faqs: [
      {
        q: "Do I need an llms.txt file to rank in AI search?",
        a: "Not for Google. Google's documentation states you do not need to create machine readable files, AI text files, markup or Markdown to appear in Google Search, and names llms.txt specifically as something Google Search does not use. Google does say keeping one is fine and will neither harm nor help your rankings. Some other services, including Perplexity, do read it, so the file has value outside Google.",
      },
      {
        q: "Does schema markup help you appear in AI Overviews?",
        a: "Google states that structured data is not required for generative AI search. Schema is still worth having, because it drives rich results in ordinary Search and is used by engines other than Google, but it should not be sold to you as an AI Overviews lever.",
      },
      {
        q: "Will blocking GPTBot remove me from ChatGPT search?",
        a: "No. OpenAI uses separate crawlers. GPTBot crawls content that may train foundation models, while OAI-SearchBot is what surfaces sites in ChatGPT search. Blocking GPTBot keeps your content out of training. Blocking OAI-SearchBot is what removes you from ChatGPT search answers.",
      },
      {
        q: "How do I track traffic from AI Overviews?",
        a: "Use the Generative AI performance report in Google Search Console, which covers generative AI features in Search and Discover. It is the only first party measurement available. Analytics cannot reliably separate an AI Overview click from an ordinary organic click.",
      },
      {
        q: "Should I publish more articles to get cited by AI?",
        a: "Volume alone works against you. Google's guidance says creating many pages mainly to influence rankings or AI responses violates its scaled content abuse spam policy, and that a high quantity of pages does not make a site higher quality or more relevant. A smaller number of pages carrying original information is the better strategy.",
      },
    ],
  },
  {
    slug: "too-many-meta-ad-sets",
    title: "What happens when you run 89 Meta ad sets at once",
    excerpt:
      "An account spending across 89 ad sets, what the numbers looked like after we cut it back, and how we decided which ones were worth keeping.",
    category: "Marketing",
    tags: ["Meta Ads", "Paid Social", "E-commerce"],
    authorId: "umar",
    publishedAt: "2026-11-12",
    readMinutes: 6,
    tone: "flare",
    cover: "/work/baby-fits/meta-ads-babyfits.jpg",
    takeaways: [
      "Spreading a budget across 89 ad sets meant no single set collected enough purchases to prove anything.",
      "Cost per purchase varied by roughly five times between sets, and almost none of that gap was real signal.",
      "After consolidating onto broad audiences, the strongest ad set produced 113 purchases at PKR 635.61 each over 30 days.",
      "On the store side, orders rose 256% and total sales rose 163% against the previous period.",
    ],
    body: [
      {
        type: "p",
        text: "BabyFits sells baby clothing in Pakistan through Shopify. When we opened their Meta account, Ads Manager listed 89 ad sets. Spend across the account had reached PKR 437,229. The campaigns were not broken in any obvious way. Ads were running, impressions were piling up, and the reporting looked busy. It just was not possible to say which part of it was producing orders.",
      },
      {
        type: "p",
        text: "This is a common way for an account to end up stuck, and it rarely looks like a problem from the inside. Every ad set was created for a sensible reason. Someone wanted to test a new interest, or separate men from women, or try a different placement. None of those decisions is wrong on its own. Together they split one budget into 89 pieces.",
      },
      { type: "h2", id: "why-it-stalls", text: "Why a split budget stalls" },
      {
        type: "p",
        text: "Meta needs conversions inside an ad set before it can optimise delivery for that ad set. Not clicks, not reach, conversions. Meta documents this as [the learning phase](https://www.facebook.com/business/help/112167992830700) in its own help centre, and an ad set that never gathers enough events stays in a limited state where delivery does not improve.",
      },
      {
        type: "p",
        text: "The arithmetic is unforgiving. If a store is doing a few hundred orders in a period and those orders are distributed across 89 ad sets, the average set is sitting on a handful of purchases. A handful is not a sample. It is noise.",
      },
      {
        type: "callout",
        text: "In the BabyFits account, cost per purchase differed by about five times between the cheapest and most expensive ad sets. That looks like a dramatic finding until you notice most sets had too few purchases for the number to mean anything.",
      },
      {
        type: "p",
        text: "There is a second cost that is easier to miss. Creative fatigue never showed up in the reporting, because no single ad ran long enough or wide enough to fatigue. The account had no way of learning which creative held up over time, because nothing was given the chance to.",
      },
      { type: "h2", id: "what-we-changed", text: "What we actually changed" },
      {
        type: "p",
        text: "We moved to broad audiences instead of stacked interest targeting, with fewer ad sets and enough daily budget in each one to reach a usable number of purchases. Broad targeting gets argued about a lot, and it is not automatically right. It happened to suit this account, because the product has wide appeal, the creative was strong, and the catalogue was not so niche that Meta needed help finding buyers.",
      },
      {
        type: "p",
        text: "The harder part was not the setup. It was turning things off. Switching off an ad set that has been running for weeks feels like throwing away work, particularly when it has some orders attached to it. Most of those orders would have happened anyway.",
      },
      {
        type: "p",
        text: "We judged winners on cost per purchase, and only on cost per purchase. Click-through rate and reach are useful for diagnosing why something is not working, but they are not the thing you are buying. A cheap click that does not convert is just a cheap click.",
      },
      {
        type: "figure",
        src: "/work/baby-fits/meta-ads-babyfits.jpg",
        alt: "Meta Ads Manager for BabyFits showing 89 ad sets, PKR 437,229 spent, 1.53 million impressions and 708,501 people reached, with the leading broad ad set at 113 purchases",
        caption:
          "The account view: 89 ad sets, 1.53M impressions and 708,501 people reached. The leading broad ad set delivered 113 purchases at PKR 635.61 each over the 30 days to 18 August 2026.",
        width: 1920,
        height: 1080,
      },
      { type: "h2", id: "the-numbers", text: "The numbers" },
      {
        type: "p",
        text: "Over the 30 days to 18 August 2026, the strongest broad ad set delivered 113 website purchases at PKR 635.61 each. Across the account in that window, the ads reached 708,501 people against 1.53 million impressions.",
      },
      {
        type: "p",
        text: "The platform figures only matter if the store agrees with them, so we read both. Between 1 July and 19 August 2026, Shopify recorded PKR 1.05 million in total sales from 770 orders, which was 163% and 256% above the preceding period respectively. Average order value sat at PKR 1,806.",
      },
      {
        type: "figure",
        src: "/work/baby-fits/shopify-babyfits.jpg",
        alt: "Shopify dashboard for BabyFits covering 1 July to 19 August 2026, showing PKR 1.05M total sales up 163%, 770 orders up 256% and average order value of PKR 1,806",
        caption:
          "The Shopify side for the same window. We check the store rather than trusting Ads Manager alone, because attribution and actual revenue rarely agree exactly.",
        width: 1920,
        height: 1080,
      },
      {
        type: "p",
        text: "Worth being straight about what these numbers are. They cover one store, one category and one market, over about seven weeks. The restructure was not the only thing that changed in that period, and a growing account tends to improve for several reasons at once. We would not claim the ad set count explains all of it.",
      },
      { type: "h2", id: "how-many", text: "So how many ad sets should you run?" },
      {
        type: "p",
        text: "There is no universal number, and anyone giving you one without asking about your conversion volume is guessing. The question to ask is the other way round. Start from how many purchases you get in a week, then work out how many ad sets that volume can support while leaving each one with enough events to be read.",
      },
      {
        type: "ul",
        items: [
          "If the store does 50 orders a week, a handful of ad sets is already stretching it.",
          "If it does 500, you have room to test properly.",
          "If you cannot say how many orders came from each ad set, fix conversion tracking before touching the structure.",
        ],
      },
      {
        type: "p",
        text: "That last point is the one people skip. We do not launch anything until the purchase event fires correctly, because every decision after that is guesswork otherwise. It is the first thing we check on any [paid advertising](/services#ads) engagement. Restructuring an account on top of broken tracking just produces confident conclusions from bad data.",
      },
      { type: "h2", id: "doing-this-yourself", text: "If you want to try this on your own account" },
      {
        type: "ol",
        items: [
          "Check the purchase event actually fires, and that the number in Ads Manager is close to the number in your store.",
          "Count your weekly purchases, then count your active ad sets. If the first number divided by the second is in single digits, that is your problem.",
          "Pick the sets with the lowest cost per purchase and genuine volume behind them, not just a flattering rate on four orders.",
          "Turn the rest off, move the budget, and leave it alone long enough to gather data. The temptation to intervene on day two is strong and usually wrong.",
          "Read the store, not only the ad platform.",
        ],
      },
      {
        type: "p",
        text: "The full [BabyFits case study](/work/babyfits), with the dashboards and a longer write up of the approach, sits alongside the rest of [our work](/work).",
      },
    ],
    faqs: [
      {
        q: "How many Meta ad sets should I run?",
        a: "There is no fixed number. Work back from your weekly purchase volume: each ad set needs enough conversions for Meta to optimise delivery, so a store doing 50 orders a week can support far fewer ad sets than one doing 500. If your weekly purchases divided by your active ad sets lands in single digits, you have too many.",
      },
      {
        q: "Why do my Meta ad sets stay in the learning phase?",
        a: "Usually because the ad set is not gathering enough optimisation events, which most often comes down to budget being spread too thinly or the audience being too narrow. Meta describes the learning phase in its Business Help Centre. Consolidating budget into fewer ad sets is the most direct fix.",
      },
      {
        q: "Is broad targeting better than interest targeting on Meta?",
        a: "Not automatically. Broad targeting suited BabyFits because the product has wide appeal and the creative was strong enough to do the selecting. A niche product with a specific buyer can still do better with defined audiences. The deciding factor is whether you have enough conversion volume for Meta to learn from.",
      },
      {
        q: "Should I trust Ads Manager or my store for revenue numbers?",
        a: "Read both and expect them to disagree. Ads Manager reports attributed conversions using its own window; your store reports money actually received. We treat the store as the source of truth for revenue and use Ads Manager to compare ad sets against each other.",
      },
    ],
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a business website cost in 2026?",
    excerpt:
      "Real ranges for what sits behind a $3,000 site, a $30,000 site and a $150,000 platform, and how to tell which one you need.",
    category: "Marketing",
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
      "The largest cost driver is rarely design. It is the number of systems the site has to talk to.",
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
        text: "A well-chosen theme, your branding applied, your copy poured in, and a contact form wired to an inbox. Two to four weeks. This is the right answer far more often than agencies admit. If you need five pages that look professional and load quickly, paying for custom design is spending money on something your customers will not notice.",
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
        text: "The moment your site has user accounts, takes payments, or synchronises with a system of record (a CRM, an ERP, a booking engine) you are no longer buying a website. You are buying software, and software is priced by complexity rather than by page count.",
      },
      {
        type: "callout",
        text: "A useful test: if you can describe your site as a set of pages, it is a website. If you have to describe it as a set of things users can do, it is an application, and the budget changes accordingly.",
      },
      { type: "h2", id: "cost-drivers", text: "What actually drives the price up" },
      {
        type: "p",
        text: "In our experience the cost of a project correlates far more strongly with integration count than with page count. A twelve-page site with no integrations is cheap. A four-page site that has to authenticate against your legacy identity provider, pull inventory from an ERP, and write leads into a CRM is not.",
      },
      { type: "ol", items: [
        "Integrations with systems you do not control. Each one is a negotiation with someone else's API and someone else's uptime.",
        "Content migration, especially from a CMS with inconsistent historical data.",
        "Compliance requirements: accessibility conformance, data residency, audit logging.",
        "Approval layers. Every additional stakeholder adds review cycles, and review cycles are billable time.",
      ]},
      { type: "h2", id: "hidden-costs", text: "The costs quotes usually omit" },
      { type: "ul", items: [
        "Hosting and infrastructure, typically $20–$400 per month depending on traffic.",
        "Content, because someone has to write it, and 'the client will supply copy' is the single most common reason projects slip.",
        "Photography or illustration, if you do not already have a library.",
        "Ongoing maintenance: dependency updates, security patches, and small fixes. Budget 10–20% of build cost annually.",
      ]},
      { type: "h2", id: "how-to-choose", text: "How to decide which tier you need" },
      {
        type: "p",
        text: "Ask what the site has to accomplish in the next eighteen months. If the honest answer is 'look credible and collect enquiries', buy the cheapest thing that does that well and spend the difference on marketing. If the answer involves a workflow your business runs on, do not buy a website. Commission software, and expect to pay accordingly.",
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
    title: "What is agentic AI, and what can it do for a business?",
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
      "They fail on tasks where being wrong is expensive and hard to detect, which is why evaluation matters more than the model.",
    ],
    body: [
      {
        type: "p",
        text: "The word 'agent' has been stretched to cover almost anything with a language model attached. The distinction that actually matters is narrow: an agent can take actions in other systems. A chatbot answers you. An agent goes and does something, then tells you what it did.",
      },
      { type: "h2", id: "how-agents-differ", text: "How an agent differs from a chatbot" },
      {
        type: "p",
        text: "A chatbot receives text and returns text. An agent receives a goal, decides which tools to call, calls them, reads the results, and repeats until it believes the goal is met. Those tools are ordinary software functions, a database query, an API call, a calendar write.",
      },
      {
        type: "p",
        text: "This is why agents can be genuinely useful and genuinely dangerous in the same breath. A chatbot that hallucinates gives you a wrong answer. An agent that hallucinates issues a refund.",
      },
      { type: "h2", id: "what-works", text: "Where agents work today" },
      { type: "ul", items: [
        "Triage and routing: reading an incoming request, classifying it, and putting it in the right queue with the right context attached.",
        "Research and summarisation across your own documents, with citations back to the source.",
        "First-draft generation for repetitive artefacts: job descriptions, release notes, RFP responses.",
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
        text: "On one clinical project we shipped a 340-case evaluation suite alongside the feature. It has since caught two quality regressions introduced by upstream model updates, neither of which would have been visible until users complained.",
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
        a: "A chatbot receives text and returns text. An agent can act: querying a database, filing a ticket, or sending an email. The practical consequence is that a chatbot's mistakes produce wrong answers, while an agent's mistakes produce wrong actions.",
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
    category: "SEO",
    tags: ["SEO", "Paid Ads", "Strategy"],
    authorId: "itrat",
    publishedAt: "2026-06-30",
    readMinutes: 7,
    tone: "paper",
    takeaways: [
      "Paid ads buy traffic immediately and stop the moment you stop paying.",
      "SEO compounds but rarely produces meaningful volume inside six months.",
      "If you have not yet validated that people want the thing, start with ads, because they answer that question fastest.",
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
        text: "Search optimisation is closer to construction. Nothing much happens for months, then a page starts ranking and continues delivering traffic with no marginal cost. The asset persists until a competitor outbuilds it or an algorithm update reshuffles the deck.",
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

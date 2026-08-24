/**
 * Scripted chat knowledge base.
 *
 * Phase 1 answers entirely from this file — no model, no API route, no cost.
 * Free text is matched against `keywords`; anything unmatched falls through to
 * `FALLBACK`, which hands off to a human rather than guessing.
 *
 * THE LLM SEAM: `resolveAnswer()` at the bottom is the only place that decides
 * what to say. When we add the model, that function becomes async and calls
 * /api/chat when the keyword match misses. Nothing in the UI changes.
 *
 * Editing rule: every figure here must match src/lib/data.ts and the blog.
 * A bot quoting numbers the site contradicts is worse than no bot.
 */

import { offices, site, stats } from "@/lib/data";

export type ChatAnswer = {
  /** Paragraphs, rendered in order. */
  text: string[];
  bullets?: string[];
  /** Optional link out — usually to the page that answers in full. */
  cta?: { label: string; href: string };
};

export type ChatNode = {
  id: string;
  /** Short label used on the quick-reply chip. */
  chip: string;
  /** Lower-case tokens matched against free-text input. */
  keywords: string[];
  answer: ChatAnswer;
  /** Chips offered after this answer. */
  followUps?: string[];
};

/** Chips shown when the conversation opens. */
export const ROOT_CHIPS = ["services", "pricing", "timeline", "human"];

export const GREETING: ChatAnswer = {
  text: [
    `Hi — I'm the ${site.short} assistant. Ask me about what we build, what it costs, or how we work.`,
  ],
};

export const NODES: ChatNode[] = [
  {
    id: "services",
    chip: "What do you build?",
    keywords: [
      "service", "services", "build", "do", "offer", "offering", "capabilities",
      "web", "website", "app", "mobile", "ai", "marketing", "seo", "design",
      "video", "ads", "development",
    ],
    answer: {
      text: ["Eight disciplines, all in-house — no handoffs between agencies:"],
      bullets: [
        "Websites & web applications",
        "Mobile app development (iOS and Android)",
        "Agentic AI & automation",
        "Digital marketing and SEO",
        "Social media marketing",
        "Paid advertising",
        "Graphic design and brand identity",
        "Video production and editing",
      ],
      cta: { label: "See all services", href: "/services" },
    },
    followUps: ["pricing", "process", "work"],
  },

  {
    id: "pricing",
    chip: "What does it cost?",
    keywords: [
      "cost", "price", "pricing", "budget", "quote", "expensive", "cheap",
      "how much", "rate", "rates", "fee", "charge", "afford",
    ],
    answer: {
      text: [
        "It depends on scope, but here are the real ranges rather than a dodge:",
      ],
      bullets: [
        "Template-based marketing site — $3,000 to $8,000, two to four weeks",
        "Custom site with a CMS — $15,000 to $45,000, six to ten weeks",
        "Web application with accounts or integrations — from $60,000",
        "A focused AI agent, including its evaluation suite — $30,000 to $80,000",
      ],
      cta: {
        label: "Read the full pricing breakdown",
        href: "/blog/how-much-does-a-website-cost",
      },
    },
    followUps: ["timeline", "process", "human"],
  },

  {
    id: "timeline",
    chip: "How fast can you start?",
    keywords: [
      "fast", "quick", "when", "start", "timeline", "how long", "duration",
      "available", "availability", "capacity", "lead time", "deadline", "urgent",
    ],
    answer: {
      text: [
        "Discovery usually begins within two to three weeks. We deliberately keep one team unallocated so urgent work does not wait a quarter for a slot.",
        "Build timelines run from two weeks for a template site to three months or more for an application with several integrations.",
      ],
      cta: { label: "Start a project", href: "/contact" },
    },
    followUps: ["process", "pricing", "human"],
  },

  {
    id: "process",
    chip: "How do you work?",
    keywords: [
      "process", "how do you work", "method", "approach", "workflow", "stages",
      "steps", "engagement", "discovery", "sprint",
    ],
    answer: {
      text: ["Four stages, designed so expensive surprises surface early:"],
      bullets: [
        "Frame the problem — a short paid discovery, week one",
        "Prove the risky part — build the thing that might not work first",
        "Build in the open — two-week cycles, you get commit access day one",
        "Hand over properly — runbooks, architecture notes, a paired handover",
      ],
      cta: { label: "See the full process", href: "/about" },
    },
    followUps: ["ownership", "work", "human"],
  },

  {
    id: "ownership",
    chip: "Who owns the code?",
    keywords: [
      "own", "owns", "ownership", "ip", "intellectual property", "license",
      "licence", "rights", "source code", "handover", "lock in", "lock-in",
    ],
    answer: {
      text: [
        "You do, from the first commit. We work in your repository under your licence.",
        "The handover includes runbooks, architecture notes, and a paired walkthrough with your engineers. There is no proprietary platform and no licence that expires.",
      ],
    },
    followUps: ["process", "human"],
  },

  {
    id: "work",
    chip: "Show me your work",
    keywords: [
      "work", "portfolio", "case study", "case studies", "projects", "examples",
      "clients", "shipped", "built", "proof",
    ],
    answer: {
      text: [
        `We've delivered ${stats.projects} projects for ${stats.clients} clients. A few with numbers attached:`,
      ],
      bullets: [
        "BabyFits — orders up 256% and sales up 163% through paid social",
        "Trusting Hands — Flutter donation platform on iOS and Android, with an admin dashboard behind it",
        "Xebayi — skincare storefront with order tracking and a full catalogue dashboard",
        "MyNaviLife and Offshore Minds — Flutter apps, both live on the stores",
      ],
      cta: { label: "Read the case studies", href: "/work" },
    },
    followUps: ["services", "pricing", "human"],
  },

  {
    id: "location",
    chip: "Where are you based?",
    keywords: [
      "where", "based", "location", "office", "offices", "address", "country",
      "timezone", "time zone", "remote", "islamabad", "manchester", "pakistan", "uk",
    ],
    answer: {
      text: [
        `Two offices — ${offices.map((o) => `${o.city}, ${o.country}`).join(" and ")}.`,
        "Projects are staffed from whichever office overlaps most with your working hours, never fewer than four shared hours a day.",
      ],
      cta: { label: "Full contact details", href: "/contact" },
    },
    followUps: ["human", "timeline"],
  },

  {
    id: "team",
    chip: "How big is the team?",
    keywords: [
      "team", "size", "how many", "people", "staff", "employees", "engineers",
      "who", "juniors", "seniors",
    ],
    answer: {
      text: [
        "A small senior team, deliberately. There is no bench, no juniors learning on your budget, and no account manager between you and the people doing the work.",
        "Most of our clients come back with a second project.",
      ],
      cta: { label: "Meet the studio", href: "/about" },
    },
    followUps: ["process", "work"],
  },

  {
    id: "ai",
    chip: "Tell me about AI work",
    keywords: [
      "ai", "agent", "agents", "agentic", "llm", "gpt", "claude", "chatbot",
      "automation", "rag", "machine learning", "ml",
    ],
    answer: {
      text: [
        "We build agents that do work, not chatbots bolted onto a homepage — tool use, retrieval grounded in your own documents, and human escalation when confidence drops.",
        "Every build ships with an evaluation suite that runs on each change, so quality regressions surface in CI rather than in front of a customer.",
      ],
      cta: { label: "What is agentic AI?", href: "/blog/what-is-agentic-ai" },
    },
    followUps: ["pricing", "work", "human"],
  },

  {
    id: "human",
    chip: "Talk to a human",
    keywords: [
      "human", "person", "call", "speak", "talk", "contact", "email", "phone",
      "sales", "meeting", "book", "someone",
    ],
    answer: {
      text: [
        "Happy to hand you over. You'll get a reply from an engineer, not a sales rep, within one business day.",
      ],
      bullets: [`Email: ${site.email}`, `Phone: ${site.phone}`],
      cta: { label: "Send a brief", href: "/contact" },
    },
    followUps: ["timeline", "pricing"],
  },
];

/** Shown when free text matches nothing — never guesses. */
export const FALLBACK: ChatAnswer = {
  text: [
    "I don't have a scripted answer for that one yet — I'd rather send you to someone who can answer properly than guess.",
  ],
  bullets: [`Email: ${site.email}`, `Phone: ${site.phone}`],
  cta: { label: "Send a brief", href: "/contact" },
};

/* ------------------------------------------------------------------ */

const byId = new Map(NODES.map((n) => [n.id, n]));

export const getNode = (id: string) => byId.get(id);

/** Strip punctuation so "how much?" and "how much" score the same. */
const normalise = (s: string) =>
  s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

/**
 * Score a node against the input. Multi-word keywords are worth more than
 * single words, because "how much" is a far stronger signal than "how".
 */
function score(node: ChatNode, input: string): number {
  let total = 0;
  for (const keyword of node.keywords) {
    if (!input.includes(keyword)) continue;
    total += keyword.includes(" ") ? 3 : 1;
  }
  return total;
}

export type Resolution =
  | { kind: "node"; node: ChatNode }
  | { kind: "fallback"; answer: ChatAnswer };

/**
 * THE LLM SEAM.
 *
 * Phase 1: keyword match, else fall back to a human handoff.
 * Phase 2: make this async — keep the keyword hit as a free fast path, and
 * POST to /api/chat only when it misses. Callers already handle both shapes.
 */
export function resolveAnswer(raw: string): Resolution {
  const input = normalise(raw);
  if (!input) return { kind: "fallback", answer: FALLBACK };

  let best: ChatNode | null = null;
  let bestScore = 0;

  for (const node of NODES) {
    const s = score(node, input);
    if (s > bestScore) {
      best = node;
      bestScore = s;
    }
  }

  // One weak single-word hit is usually a coincidence, not an intent
  if (!best || bestScore < 2) return { kind: "fallback", answer: FALLBACK };
  return { kind: "node", node: best };
}

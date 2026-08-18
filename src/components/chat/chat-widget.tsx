"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Send, X } from "lucide-react";
import {
  GREETING,
  NODES,
  ROOT_CHIPS,
  getNode,
  resolveAnswer,
  type ChatAnswer,
} from "@/lib/chat/script";
import { site } from "@/lib/data";
import { Wordmark } from "../wordmark";

type Message =
  | { id: number; from: "bot"; answer: ChatAnswer }
  | { id: number; from: "user"; text: string };

/** How long the typing indicator shows before the answer lands. */
const THINKING_MS = 420;

let nextId = 0;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId++, from: "bot", answer: GREETING },
  ]);
  const [chips, setChips] = useState<string[]>(ROOT_CHIPS);
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Focus the input on open; hand focus back to the bubble on close, so
  // keyboard users are never dropped at the top of the document.
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else bubbleRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages, thinking]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function reply(input: string) {
    setMessages((prev) => [...prev, { id: nextId++, from: "user", text: input }]);
    setChips([]);
    setThinking(true);

    // A beat before answering — an instant reply reads as a canned dump.
    // Phase 2 replaces this timer with the streamed model response.
    timer.current = setTimeout(() => {
      const result = resolveAnswer(input);
      const answer = result.kind === "node" ? result.node.answer : result.answer;
      const next = result.kind === "node" ? result.node.followUps : ["human"];

      setMessages((prev) => [...prev, { id: nextId++, from: "bot", answer }]);
      setChips(next ?? ROOT_CHIPS);
      setThinking(false);
    }, THINKING_MS);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = draft.trim();
    if (!value || thinking) return;
    setDraft("");
    reply(value);
  }

  return (
    <>
      {/* Launcher */}
      <button
        ref={bubbleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-flare text-ink shadow-[0_12px_32px_-8px_rgba(255,90,31,0.6)] transition-transform duration-200 hover:scale-105 md:bottom-6 md:right-6"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageSquare className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Panel — full-screen sheet on mobile, docked card on desktop */}
      {open && (
        <div
          ref={panelRef}
          id="chat-panel"
          role="dialog"
          aria-label={`Chat with ${site.short}`}
          className="fixed inset-x-0 bottom-0 top-0 z-[59] flex flex-col bg-paper sm:inset-auto sm:bottom-24 sm:right-6 sm:top-auto sm:h-[min(34rem,calc(100dvh-8rem))] sm:w-[23.5rem] sm:rounded-3xl sm:border sm:border-line sm:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.35)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-line-dark bg-ink px-5 py-4 sm:rounded-t-3xl">
            <Wordmark className="h-8 w-8 shrink-0" inverted />
            <div className="min-w-0">
              <p className="font-display text-[0.9375rem] leading-tight tracking-tight text-paper">
                {site.name}
              </p>
              <p className="flex items-center gap-1.5 text-[0.75rem] text-paper/60">
                <span className="h-1.5 w-1.5 rounded-full bg-flare" aria-hidden="true" />
                Replies in under 1 business day
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-paper/70 transition-colors duration-200 hover:bg-white/10 hover:text-paper"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Thread */}
          <div
            className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((m) =>
              m.from === "user" ? (
                <p
                  key={m.id}
                  className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-[0.875rem] leading-relaxed text-paper"
                >
                  {m.text}
                </p>
              ) : (
                <Bubble key={m.id} answer={m.answer} onNavigate={() => setOpen(false)} />
              )
            )}

            {thinking && (
              <p className="flex w-fit gap-1 rounded-2xl rounded-bl-md border border-line bg-paper-pure px-4 py-3">
                <span className="sr-only">Typing</span>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-muted"
                    style={{ animationDelay: `${i * 120}ms` }}
                  />
                ))}
              </p>
            )}

            <div ref={endRef} />
          </div>

          {/* Quick replies */}
          {chips.length > 0 && !thinking && (
            <div className="flex flex-wrap gap-2 border-t border-line px-5 py-3">
              {chips.map((id) => {
                const node = getNode(id);
                if (!node) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => reply(node.chip)}
                    className="cursor-pointer rounded-full border border-line bg-paper-pure px-3.5 py-2 text-[0.8125rem] text-ink transition-colors duration-200 hover:border-flare hover:bg-flare-wash"
                  >
                    {node.chip}
                  </button>
                );
              })}
            </div>
          )}

          {/* Composer */}
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-line px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:rounded-b-3xl"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type your question
            </label>
            <input
              ref={inputRef}
              id="chat-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask a question…"
              autoComplete="off"
              className="min-h-[44px] flex-1 rounded-full border border-line bg-paper-pure px-4 text-[0.9375rem] text-ink transition-colors duration-200 placeholder:text-ink-muted/70 focus:outline-none focus-visible:border-flare"
            />
            <button
              type="submit"
              disabled={!draft.trim() || thinking}
              aria-label="Send message"
              className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-ink text-paper transition-colors duration-200 hover:bg-flare hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({
  answer,
  onNavigate,
}: {
  answer: ChatAnswer;
  onNavigate: () => void;
}) {
  return (
    <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-line bg-paper-pure px-4 py-3.5">
      {answer.text.map((paragraph) => (
        <p
          key={paragraph}
          className="text-[0.875rem] leading-relaxed text-ink [&+p]:mt-3"
        >
          {paragraph}
        </p>
      ))}

      {answer.bullets && (
        <ul className="mt-3 space-y-2">
          {answer.bullets.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span
                className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-flare"
                aria-hidden="true"
              />
              <span className="text-[0.875rem] leading-snug text-ink-muted">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}

      {answer.cta && (
        <Link
          href={answer.cta.href}
          onClick={onNavigate}
          className="btn-label mt-4 inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full bg-ink px-4 text-paper transition-colors duration-200 hover:bg-flare hover:text-ink"
        >
          {answer.cta.label}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

/** Referenced so the tree stays reachable if chips are ever emptied. */
export const CHAT_NODE_COUNT = NODES.length;

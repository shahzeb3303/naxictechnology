"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { budgetRanges, projectTypes, timelines } from "@/lib/data";

type Fields = {
  name: string;
  email: string;
  company: string;
  type: string;
  budget: string;
  timeline: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  type: "",
  budget: "",
  timeline: "",
  message: "",
};

/** Deliberately loose — strict email regexes reject valid addresses. */
const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(values: Fields): Errors {
  const e: Errors = {};
  if (!values.name.trim()) e.name = "Please tell us who you are.";
  if (!values.email.trim()) e.email = "We need an address to reply to.";
  else if (!looksLikeEmail(values.email))
    e.email = "That does not look like a complete email address.";
  if (!values.message.trim()) e.message = "A sentence or two is plenty to start.";
  else if (values.message.trim().length < 20)
    e.message = "A little more detail helps us route this to the right person.";
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const set = (key: keyof Fields) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    // Clear an existing error as soon as the field becomes valid again
    if (errors[key]) {
      setErrors((prev) => {
        const next = validate({ ...values, [key]: v });
        return { ...prev, [key]: next[key] };
      });
    }
  };

  // Validate on blur, not on keystroke — errors that appear mid-word are hostile
  const blur = (key: keyof Fields) => () => {
    setTouched((p) => ({ ...p, [key]: true }));
    setErrors((p) => ({ ...p, [key]: validate(values)[key] }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(found).some(Boolean)) {
      // Send focus to the first invalid control so keyboard users are not stranded
      const first = (Object.keys(found) as (keyof Fields)[]).find((k) => found[k]);
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    // No endpoint yet — see the note under the form.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-start rounded-3xl border border-line bg-paper-pure p-8 md:p-12"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flare">
          <Check className="h-6 w-6 text-ink" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h3 className="mt-7 font-display text-[1.75rem] leading-tight tracking-tight">
          Thanks, that came through.
        </h3>
        <p className="mt-4 max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink-muted">
          An engineer will read it and reply to{" "}
          <span className="text-ink">{values.email}</span> within one business
          day. If it is urgent, call the studio directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setTouched({});
            setErrors({});
            setStatus("idle");
          }}
          className="btn-label mt-8 inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-full border border-ink/15 px-6 transition-colors duration-200 hover:border-ink"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-paper-pure p-6 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="name"
          label="Full name"
          required
          value={values.name}
          error={touched.name ? errors.name : undefined}
          onChange={set("name")}
          onBlur={blur("name")}
          autoComplete="name"
        />
        <Field
          name="email"
          label="Work email"
          type="email"
          required
          value={values.email}
          error={touched.email ? errors.email : undefined}
          onChange={set("email")}
          onBlur={blur("email")}
          autoComplete="email"
          inputMode="email"
        />
        <Field
          name="company"
          label="Company"
          hint="Optional"
          value={values.company}
          onChange={set("company")}
          onBlur={blur("company")}
          autoComplete="organization"
        />
        <Select
          name="type"
          label="What do you need?"
          hint="Optional"
          value={values.type}
          options={projectTypes}
          onChange={set("type")}
        />
        <Select
          name="budget"
          label="Budget range"
          hint="Optional"
          value={values.budget}
          options={budgetRanges}
          onChange={set("budget")}
        />
        <Select
          name="timeline"
          label="Timeline"
          hint="Optional"
          value={values.timeline}
          options={timelines}
          onChange={set("timeline")}
        />
      </div>

      <div className="mt-6">
        <Field
          name="message"
          label="Project details"
          required
          multiline
          value={values.message}
          error={touched.message ? errors.message : undefined}
          onChange={set("message")}
          onBlur={blur("message")}
          hint="What is broken, what you have tried, and what done looks like."
        />
      </div>

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[42ch] text-[0.75rem] leading-relaxed text-ink-muted">
          We use what you send only to reply. No lists, no sharing, no
          follow-up sequence.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-label group inline-flex min-h-[54px] cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-8 text-paper transition-colors duration-200 hover:bg-flare hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ---------------------------------------------------------------- */

type FieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  hint?: string;
  required?: boolean;
  multiline?: boolean;
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "text" | "tel";
};

function Field({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  hint,
  required,
  multiline,
  type = "text",
  autoComplete,
  inputMode,
}: FieldProps) {
  const describedBy = [error ? `${name}-error` : null, hint ? `${name}-hint` : null]
    .filter(Boolean)
    .join(" ");

  const base = `w-full rounded-xl border bg-paper px-4 py-3.5 text-[0.9375rem] text-ink transition-colors duration-200 placeholder:text-ink-muted/60 focus:outline-none focus-visible:border-flare ${
    error ? "border-destructive" : "border-line"
  }`;

  return (
    <div className={multiline ? "" : "min-w-0"}>
      <label htmlFor={name} className="mb-2 block text-[0.8125rem] font-medium text-ink">
        {label}
        {required && (
          <span className="text-flare-ink" aria-hidden="true">
            {" "}
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={6}
          value={value}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${base} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${base} min-h-[52px]`}
        />
      )}

      {hint && !error && (
        <p id={`${name}-hint`} className="mt-2 text-[0.75rem] text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 text-[0.75rem] font-medium text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  name,
  label,
  value,
  options,
  onChange,
  hint,
}: {
  name: string;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="mb-2 block text-[0.8125rem] font-medium text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={hint ? `${name}-hint` : undefined}
        className="min-h-[52px] w-full cursor-pointer rounded-xl border border-line bg-paper px-4 py-3.5 text-[0.9375rem] text-ink transition-colors duration-200 focus:outline-none focus-visible:border-flare"
      >
        <option value="">Select one</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {hint && (
        <p id={`${name}-hint`} className="mt-2 text-[0.75rem] text-ink-muted">
          {hint}
        </p>
      )}
    </div>
  );
}

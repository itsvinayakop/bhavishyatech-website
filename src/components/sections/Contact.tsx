"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Globe, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { SITE, BUSINESS_TYPES } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const details = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: MapPin, label: SITE.location, href: null },
  { icon: Globe, label: "www.bhavishyatech.com", href: SITE.domain },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-b">
            Contact
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Let&apos;s Build <span className="text-grad-v">Something</span> Together.
          </h2>
          <div className="mt-5 h-px w-20 bg-gradient-to-r from-violet to-transparent" />
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Tell us what you need. We&apos;ll get back within 24 hours with a plan and a rough estimate. No commitment
            required.
          </p>
          <ul className="mt-8 space-y-4">
            {details.map((d) => {
              const Icon = d.icon;
              const inner = (
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet-b">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm text-ink/85">{d.label}</span>
                </span>
              );
              return (
                <li key={d.label}>
                  {d.href ? (
                    <a href={d.href} className="transition-opacity hover:opacity-80">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="glass rounded-3xl p-7 sm:p-9">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
            >
              <CheckCircle2 className="text-violet-b" size={56} />
              <h3 className="mt-5 font-display text-2xl font-bold">Message sent!</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours with a plan and rough estimate.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-violet-b hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h3 className="font-display text-xl font-bold">Send Us a Message</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" name="name" placeholder="Ramesh Kumar" required />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
                <Field label="Email Address" name="email" type="email" placeholder="you@company.com" required />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-muted">Business Type</label>
                  <select
                    name="businessType"
                    defaultValue=""
                    className="rounded-xl border border-line bg-bg2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet"
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    {BUSINESS_TYPES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">What do you need built?</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your project briefly — what problem does it solve, who uses it, and any features you have in mind."
                  className="resize-none rounded-xl border border-line bg-bg2/60 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet"
                />
              </div>

              {status === "error" && <p className="text-sm text-rose-b">{error}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet py-3.5 text-sm font-bold text-white transition-all hover:bg-violet-b hover:shadow-[0_0_30px_-4px_rgba(245,158,11,0.7)] disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-line bg-bg2/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-violet"
      />
    </div>
  );
}

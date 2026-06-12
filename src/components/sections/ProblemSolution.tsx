import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PROBLEMS, SOLUTIONS } from "@/lib/content";

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {/* Problem */}
        <Reveal className="glass rounded-3xl p-8 sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-rose-b">
            The Problem
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:flex lg:min-h-[5em] lg:items-start">
            <span>
              Growing Brands <span className="text-grad-r">Can&apos;t Find</span> the Right Tech Partner.
            </span>
          </h2>
          <div className="mt-5 h-px w-16 bg-gradient-to-r from-rose to-transparent" />
          <p className="mt-5 text-sm leading-relaxed text-muted">
            You want to expand your business and launch new online sales channels. But hiring full-time engineers is
            expensive, and agency pricing is hyper-inflated.
          </p>
          <ul className="mt-7 space-y-3">
            {PROBLEMS.map((p) => (
              <li key={p.text} className="flex items-start gap-3 text-sm text-ink/85">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-rose/10 text-base">{p.icon}</span>
                <span className="pt-1">{p.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Solution */}
        <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl border border-violet/30 bg-gradient-to-br from-violet/15 via-bg2 to-bg2 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet/20 blur-3xl" />
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-b">
            The Bhavishya Fix
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:flex lg:min-h-[5em] lg:items-start">
            <span>
              A <span className="text-grad-v">Dedicated Team</span> Built for Growth.
            </span>
          </h2>
          <div className="mt-5 h-px w-16 bg-gradient-to-r from-violet to-transparent" />
          <p className="mt-5 text-sm leading-relaxed text-muted">
            We provide a dedicated development team — supervised by senior architects — to build and scale your custom
            applications and ecommerce channels.
          </p>
          <ul className="mt-7 space-y-3">
            {SOLUTIONS.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet text-white">
                  <Check size={13} strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

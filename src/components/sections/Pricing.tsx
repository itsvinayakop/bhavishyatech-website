import { Check } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PRICING } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          tag="Pricing"
          title={
            <>
              Transparent. <span className="text-grad-v">Affordable.</span> No Surprises.
            </>
          }
          lead="All engagements are fixed-scope. You know the cost before we write a single line of code."
        />

        <Reveal className="mt-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-violet-b px-5 py-2 text-sm font-extrabold text-bg shadow-[0_0_34px_-6px_rgba(245,158,11,0.7)]">
            <span className="animate-pulse">✦</span> Launch Offer — Flat 40% Off · Limited time
          </span>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8",
                  p.popular
                    ? "border-violet/50 bg-gradient-to-b from-violet/15 to-bg2 shadow-[0_0_50px_-16px_rgba(245,158,11,0.6)] lg:-translate-y-3"
                    : "border-line bg-bg2/50"
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  {p.originalPrice && (
                    <span className="pb-1.5 font-display text-2xl font-bold text-muted/70 line-through decoration-rose/70">
                      {p.originalPrice}
                    </span>
                  )}
                  <span className="font-display text-4xl font-extrabold text-grad-v">{p.price}</span>
                  {p.unit && <span className="pb-1.5 text-sm text-muted">{p.unit}</span>}
                </div>
                {p.originalPrice ? (
                  <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-md bg-rose/15 px-2 py-0.5 text-xs font-bold text-rose-b">
                    40% OFF · Launch price
                  </span>
                ) : null}
                <p className="mt-2 text-xs text-muted">{p.note}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/85">
                      <Check size={15} className="mt-0.5 shrink-0 text-violet-b" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={cn(
                    "mt-7 block rounded-xl py-3 text-center text-sm font-bold transition-all",
                    p.popular
                      ? "bg-violet text-white hover:bg-violet-b hover:shadow-[0_0_24px_-4px_rgba(245,158,11,0.7)]"
                      : "glass text-ink hover:border-violet/60"
                  )}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

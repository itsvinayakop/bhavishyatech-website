import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="What We Build"
          title={
            <>
              Software Solutions Built to <span className="text-grad-v">Expand Your Reach</span>
            </>
          }
          lead="We build production-grade software and online sales channels that help businesses scale operations and capture new markets."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.name}
              delay={(i % 3) * 0.08}
              className={cn(s.featured && "md:col-span-2 lg:col-span-1 lg:row-span-1")}
            >
              <TiltCard className="h-full rounded-2xl">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300",
                    s.featured
                      ? "border-violet/40 bg-gradient-to-br from-violet/15 to-bg2"
                      : "border-line bg-bg2/50 hover:border-violet/40"
                  )}
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-violet/10 text-2xl">{s.icon}</div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-ink/80">
                        <Check size={14} className="shrink-0 text-violet-b" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

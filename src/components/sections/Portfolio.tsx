import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { PORTFOLIO } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Portfolio"
          title={
            <>
              Built. Shipped. <span className="text-grad-v">Proven.</span>
            </>
          }
          lead="Every product below is live or production-ready. We don't show mockups — we show receipts."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <TiltCard className="h-full rounded-3xl" max={6}>
                <article className="group h-full overflow-hidden rounded-3xl border border-line bg-bg2/50 transition-colors duration-300 hover:border-violet/40">
                  <div className={cn("relative grid h-44 place-items-center bg-gradient-to-br text-6xl", p.gradient)}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
                    <span className="transition-transform duration-500 group-hover:scale-110">{p.icon}</span>
                  </div>
                  <div className="p-7">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold",
                        p.badgeType === "live"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-violet/15 text-violet-b"
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", p.badgeType === "live" ? "bg-emerald-400" : "bg-violet-b")} />
                      {p.badge}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

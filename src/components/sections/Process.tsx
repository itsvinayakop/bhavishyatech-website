import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section id="how" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          tag="Process"
          title={
            <>
              From <span className="text-grad-v">Brief</span> to <span className="text-grad-r">Live</span> in 4 Steps
            </>
          }
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent lg:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative grid h-[72px] w-[72px] place-items-center rounded-2xl border border-line bg-bg2 text-2xl shadow-[0_0_30px_-12px_rgba(245,158,11,0.6)]">
                  {s.icon}
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-violet font-display text-xs font-extrabold text-white">
                    {s.num.slice(1)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { WHY } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Why Bhavishya Tech"
          title={
            <>
              Why Businesses Choose <span className="text-grad-v">Us</span>
            </>
          }
          lead="We're a modern tech partner operating with global standards and absolute accountability. Senior oversight on every project. Clear deliverables. No disappearing acts."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-bg2/50 p-7 transition-colors duration-300 hover:border-violet/40">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-xl">{w.icon}</div>
                <h3 className="mt-5 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

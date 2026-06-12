import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import { TESTIMONIALS, TRUST_CHIPS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          tag="Client Feedback"
          title={
            <>
              What Our <span className="text-grad-v">Clients</span> Say
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative h-full rounded-3xl border border-line bg-bg2/50 p-8">
                <Quote className="absolute right-6 top-6 text-violet/20" size={40} />
                <blockquote className="text-[0.95rem] leading-relaxed text-ink/90">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-d font-display font-bold text-white">
                    {t.initial}
                  </span>
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Marquee items={[...TRUST_CHIPS, "Diagnostic Labs", "IVF Centres", "Cafes", "Startups"]} duration={28} />
      </div>
    </section>
  );
}

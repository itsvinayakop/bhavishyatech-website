"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import HeroBg from "./HeroBg";
import HeroActions from "./HeroActions";
import HeroEyebrow from "./HeroEyebrow";
import { useSpotlight } from "./useSpotlight";
import { EASE } from "@/lib/utils";

const DEVA = ["भ", "वि", "ष्य"];
const HEAD_WORDS = ["software", "automation", "technology"];

const glyphContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const glyph: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

export default function HeroDevanagari() {
  const { spotlight, onMove } = useSpotlight();
  const [wi, setWi] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWi((v) => (v + 1) % HEAD_WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center lg:px-10"
    >
      <HeroBg spotlight={spotlight} />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center">
        <HeroEyebrow>Global IT &amp; Software Studio</HeroEyebrow>

        <motion.h1
          variants={glyphContainer}
          initial="hidden"
          animate="show"
          aria-label="Bhavishya — the future"
          className="font-deva mt-6 flex select-none items-baseline justify-center gap-[0.06em] font-extrabold leading-[1.15] tracking-normal text-[clamp(2.6rem,8vw,6.25rem)] sm:mt-7"
          style={{ perspective: 900 }}
        >
          {DEVA.map((c, i) => (
            <motion.span
              key={i}
              variants={glyph}
              className="inline-block bg-gradient-to-br from-violet-b via-violet to-rose bg-clip-text pt-[0.4em] leading-[1] text-transparent opacity-90 drop-shadow-[0_8px_46px_rgba(245,158,11,0.2)]"
            >
              {c}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p variants={fade} initial="hidden" animate="show" custom={0.95} className="mt-4 text-sm text-muted">
          <span className="mr-2 font-semibold text-violet-b">/ bhə·vish·ya /</span>
          Sanskrit for <span className="text-ink">“the future.”</span> Our name — and what we build toward.
        </motion.p>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1.05}
          className="mt-5 font-display font-extrabold leading-[1.08] tracking-tight text-[clamp(1.85rem,4.9vw,3.9rem)]"
        >
          <span className="block sm:whitespace-nowrap">
            We build{" "}
            <motion.span
              key={HEAD_WORDS[wi]}
              initial={{ y: "0.4em" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="inline-block text-grad-v"
            >
              {HEAD_WORDS[wi]}
            </motion.span>
          </span>
          <span className="block">
            that <span className="text-grad-r">scales.</span>
          </span>
        </motion.p>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1.15}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted"
        >
          Custom apps, high-performance web systems, and automation — engineered for ambitious brands scaling online and
          expanding globally. Delivered by senior-mentored, dedicated teams.
        </motion.p>

        <HeroActions delay={1.25} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center lg:flex">
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
          <span className="h-1.5 w-1.5 animate-scrollcue rounded-full bg-violet-b" />
        </span>
      </div>
    </section>
  );
}

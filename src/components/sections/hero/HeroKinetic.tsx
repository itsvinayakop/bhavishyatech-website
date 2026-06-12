"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import HeroBg from "./HeroBg";
import HeroActions from "./HeroActions";
import HeroEyebrow from "./HeroEyebrow";
import { useSpotlight } from "./useSpotlight";
import { EASE } from "@/lib/utils";

const WORDS = [
  "healthcare apps",
  "restaurant systems",
  "mobile apps",
  "web platforms",
  "automation tools",
  "QA pipelines",
];

const PROOF = [
  { label: "QSkipper", note: "Live on App Store", dot: "bg-emerald-400" },
  { label: "Healthcare Suite", note: "In production", dot: "bg-violet-b" },
  { label: "4+ products", note: "Shipped & proven", dot: "bg-rose-b" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

export default function HeroKinetic() {
  const { spotlight, onMove } = useSpotlight();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center lg:px-10"
    >
      <HeroBg spotlight={spotlight} />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        <HeroEyebrow>Global IT &amp; Software Studio</HeroEyebrow>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="mt-7 font-display font-extrabold leading-[1.0] tracking-tight text-[clamp(2.4rem,6.5vw,4.6rem)]"
        >
          We build
          <span className="relative mt-3 flex h-[1.25em] items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[i]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-grad-anim"
              >
                {WORDS[i]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="text-muted">for ambitious brands.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.9}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted"
        >
          One dedicated, senior-mentored team. Fixed-scope delivery. From discovery call to launch — and 60 days of
          support after.
        </motion.p>

        <HeroActions delay={1.0} />

        {/* proof bento */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1.2}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {PROOF.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-start gap-1 rounded-2xl border border-line bg-bg2/50 px-5 py-4 text-left"
            >
              <span className="flex items-center gap-2 text-xs font-semibold text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                {p.note}
              </span>
              <span className="font-display text-lg font-bold">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

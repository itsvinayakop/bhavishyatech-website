"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import HeroBg from "./HeroBg";
import HeroActions from "./HeroActions";
import HeroEyebrow from "./HeroEyebrow";
import { useSpotlight } from "./useSpotlight";
import { LogoMark } from "@/components/ui/Logo";
import { EASE } from "@/lib/utils";

const NODES = ["Healthcare", "Mobile Apps", "Web Platforms", "QA Automation", "Restaurants", "Automation"];

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

export default function HeroRadial() {
  const { spotlight, onMove } = useSpotlight();

  return (
    <section
      id="hero"
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center lg:px-10"
    >
      <HeroBg spotlight={spotlight} />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        <HeroEyebrow>One Team · Every Build</HeroEyebrow>

        {/* ── Radial constellation ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="relative my-8 grid aspect-square w-full max-w-[520px] place-items-center"
          style={{ ["--r" as string]: "clamp(118px, 34vw, 232px)" }}
        >
          {/* rotating rings */}
          <div className="absolute inset-[8%] animate-spin-slower rounded-full border border-dashed border-line" />
          <div className="absolute inset-[20%] rounded-full border border-line/60" />
          <div className="absolute inset-0 animate-spin-slower rounded-full opacity-60 [background:conic-gradient(from_90deg,transparent_60%,rgba(45,212,191,0.5),transparent)] [mask:radial-gradient(farthest-side,transparent_calc(100%-1.5px),black_calc(100%-1.5px))]" />

          {/* center logo */}
          <div className="relative z-10 h-28 w-28 drop-shadow-[0_0_44px_rgba(45,212,191,0.45)] sm:h-32 sm:w-32">
            <LogoMark />
          </div>

          {/* nodes around the circle */}
          {NODES.map((n, i) => {
            const a = (i / NODES.length) * 360;
            return (
              <motion.span
                key={n}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: EASE }}
                className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-line bg-bg2/70 px-3 py-1.5 text-xs font-semibold text-ink/80 backdrop-blur-sm"
                style={{
                  transform: `translate(-50%, -50%) rotate(${a}deg) translateY(calc(var(--r) * -1)) rotate(${-a}deg)`,
                }}
              >
                {n}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.9}
          className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(2.2rem,6vw,4.2rem)]"
        >
          We build <span className="text-grad-v">software</span> that <span className="text-grad-r">scales.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1.0}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted"
        >
          One dedicated team at the core — every kind of product radiating out. Healthcare, F&amp;B, mobile, web, and
          automation, all under one roof.
        </motion.p>

        <HeroActions delay={1.1} />
      </div>
    </section>
  );
}

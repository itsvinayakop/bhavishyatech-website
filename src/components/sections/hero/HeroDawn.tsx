"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import HeroActions from "./HeroActions";
import HeroEyebrow from "./HeroEyebrow";
import { useSpotlight } from "./useSpotlight";
import { LogoMark } from "@/components/ui/Logo";
import { EASE } from "@/lib/utils";

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: d } }),
};

export default function HeroDawn() {
  const { spotlight, onMove } = useSpotlight();

  return (
    <section
      id="hero"
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center lg:px-10"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_50%,black,transparent_72%)]" />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        <HeroEyebrow>Building the Future of Software</HeroEyebrow>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="mt-6 font-display font-extrabold leading-[0.98] tracking-tight text-[clamp(2.6rem,7vw,5rem)]"
        >
          We build <span className="text-grad-v">software</span>
          <br />
          that <span className="text-grad-r">scales.</span>
        </motion.h1>

        {/* ── Sunrise scene ── */}
        <div className="relative my-9 h-[280px] w-full max-w-3xl sm:h-[320px]">
          {/* dawn glow */}
          <div className="absolute inset-x-0 bottom-0 h-[210px] [background:radial-gradient(120%_100%_at_50%_100%,rgba(245,158,11,0.45),rgba(245,158,11,0.08)_42%,transparent_70%)]" />
          {/* rising group */}
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.35, ease: EASE }}
            className="absolute inset-0"
          >
            {/* rays */}
            <div className="absolute bottom-[58px] left-1/2 h-[440px] w-[440px] -translate-x-1/2 animate-spin-slower rounded-full opacity-50 [background:repeating-conic-gradient(from_0deg,rgba(245,158,11,0.22)_0deg_5deg,transparent_5deg_16deg)] [mask-image:radial-gradient(closest-side,transparent_28%,black_38%,transparent_72%)]" />
            {/* sun disk = logo */}
            <div className="absolute bottom-[58px] left-1/2 h-32 w-32 -translate-x-1/2 translate-y-[28%] drop-shadow-[0_0_60px_rgba(45,212,191,0.45)] sm:h-36 sm:w-36">
              <LogoMark />
            </div>
          </motion.div>
          {/* horizon line */}
          <div className="absolute inset-x-4 bottom-[58px] h-px bg-gradient-to-r from-transparent via-violet/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[58px] bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        </div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.9}
          className="-mt-2 max-w-xl text-base leading-relaxed text-muted"
        >
          Custom apps, web systems, and automation — engineered for ambitious brands scaling online and expanding
          globally. Delivered by senior-mentored teams.
        </motion.p>

        <HeroActions delay={1.05} />
      </div>
    </section>
  );
}

"use client";

import { motion, type MotionValue } from "motion/react";

export default function HeroBg({ spotlight }: { spotlight: MotionValue<string> }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_110%_80%_at_50%_45%,black,transparent_72%)]" />
      <div className="absolute left-1/2 top-1/4 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-violet/20 blur-[150px]" />
      <div className="absolute -bottom-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-rose/12 blur-[150px]" />
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}

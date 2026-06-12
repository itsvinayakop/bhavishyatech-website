"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/utils";

export default function HeroEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="flex items-center justify-center gap-4 text-[0.7rem] font-bold uppercase tracking-[0.42em] text-muted"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet/60" />
      <span className="text-ink/75">{children}</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet/60" />
    </motion.div>
  );
}

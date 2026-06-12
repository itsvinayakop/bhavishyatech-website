"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { TRUST_CHIPS } from "@/lib/content";
import { EASE } from "@/lib/utils";

export default function HeroActions({ delay = 1 }: { delay?: number }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <Button href="#contact">
          Get a Free Quote <ArrowRight size={16} />
        </Button>
        <Button href="#portfolio" variant="ghost">
          See Our Work <ArrowUpRight size={16} />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: delay + 0.1 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Trusted by</span>
        <div className="flex flex-wrap justify-center gap-2">
          {TRUST_CHIPS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-xs font-semibold text-ink/70"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
}

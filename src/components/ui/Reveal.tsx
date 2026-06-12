"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
};

export default function Reveal({ children, delay = 0, y = 28, className, as = "div" }: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

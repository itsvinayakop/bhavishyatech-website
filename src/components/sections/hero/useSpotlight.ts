"use client";

import { useMotionTemplate, useMotionValue } from "motion/react";

export function useSpotlight() {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${mx}% ${my}%, rgba(245,158,11,0.12), transparent 65%)`;

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return { spotlight, onMove };
}

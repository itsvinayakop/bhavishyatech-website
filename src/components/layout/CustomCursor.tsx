"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, input, textarea, select, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-violet-b"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-violet/60"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          backgroundColor: hovering ? "rgba(245,158,11,0.12)" : "rgba(245,158,11,0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
    </>
  );
}

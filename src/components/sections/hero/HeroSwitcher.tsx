"use client";

import { useEffect, useState } from "react";
import HeroDevanagari from "./HeroDevanagari";
import HeroDawn from "./HeroDawn";
import HeroKinetic from "./HeroKinetic";
import HeroRadial from "./HeroRadial";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "deva", label: "भविष्य", Comp: HeroDevanagari },
  { id: "dawn", label: "Dawn", Comp: HeroDawn },
  { id: "kinetic", label: "Kinetic", Comp: HeroKinetic },
  { id: "radial", label: "Radial", Comp: HeroRadial },
] as const;

const STORAGE_KEY = "bt-hero-variant";

export default function HeroSwitcher() {
  const [id, setId] = useState<(typeof OPTIONS)[number]["id"]>("deva");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && OPTIONS.some((o) => o.id === saved)) setId(saved as typeof id);
  }, []);

  const select = (v: typeof id) => {
    setId(v);
    localStorage.setItem(STORAGE_KEY, v);
  };

  const Active = OPTIONS.find((o) => o.id === id)?.Comp ?? HeroDevanagari;

  return (
    <>
      <Active />

      {/* Floating preview picker — temporary, for choosing a hero */}
      <div className="fixed bottom-4 left-1/2 z-[90] -translate-x-1/2">
        <div className="glass flex items-center gap-1 rounded-full border border-line p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <span className="px-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted">Hero style</span>
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              onClick={() => select(o.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
                id === o.id ? "bg-violet text-white" : "text-ink/70 hover:bg-white/5 hover:text-ink"
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

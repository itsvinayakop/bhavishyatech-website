"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { LogoLockup } from "@/components/ui/Logo";
import { cn, EASE } from "@/lib/utils";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        stuck
          ? "border-b border-line bg-bg/80 py-3 backdrop-blur-2xl"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="#hero" aria-label="Bhavishya Tech home">
          <LogoLockup />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-semibold tracking-wide text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="rounded-lg bg-violet px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-violet-b hover:shadow-[0_0_24px_-4px_rgba(245,158,11,0.7)]"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {[...NAV_LINKS, { label: "Get a Quote", href: "#contact" }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-muted transition-colors hover:bg-violet/10 hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

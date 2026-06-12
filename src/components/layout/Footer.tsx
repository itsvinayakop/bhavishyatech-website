import Link from "next/link";
import { LogoLockup } from "@/components/ui/Logo";
import { SITE } from "@/lib/content";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Healthcare Software", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Web Applications", href: "#services" },
      { label: "Restaurant Systems", href: "#services" },
      { label: "QA Automation", href: "#services" },
      { label: "Custom Business Software", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Why Us", href: "#why" },
      { label: "Pricing", href: "#pricing" },
      { label: "Process", href: "#how" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: SITE.phone, href: `tel:${SITE.phoneHref}` },
      { label: "www.bhavishyatech.com", href: SITE.domain },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg2/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <LogoLockup />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Custom software and high-performance digital systems built to expand sales channels and scale operations globally.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-violet-b">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Bhavishya Tech. All rights reserved.</span>
          <span>{SITE.location}</span>
        </div>
      </div>
    </footer>
  );
}

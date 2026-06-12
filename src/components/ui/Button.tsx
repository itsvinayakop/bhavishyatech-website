import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

type Variant = "primary" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-violet text-white hover:bg-violet-b hover:shadow-[0_0_30px_-4px_rgba(245,158,11,0.7)]",
  ghost:
    "glass text-ink hover:border-violet/60 hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  magnetic = true,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
} & React.ComponentProps<typeof Link>) {
  const link = (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
  return magnetic ? <Magnetic strength={0.25}>{link}</Magnetic> : link;
}

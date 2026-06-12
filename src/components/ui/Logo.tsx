import { cn } from "@/lib/utils";

const MASK_STYLE: React.CSSProperties = {
  WebkitMaskImage: "url(/bhavishya-logo.png)",
  maskImage: "url(/bhavishya-logo.png)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
};

export function LogoMark({ className, glow = false }: { className?: string; glow?: boolean }) {
  return (
    <span
      role="img"
      aria-label="Bhavishya Tech logo"
      style={MASK_STYLE}
      className={cn(
        "block h-full w-full bg-gradient-to-br from-violet-b via-violet to-rose",
        glow && "drop-shadow-[0_0_22px_rgba(245,158,11,0.45)]",
        className
      )}
    />
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="h-9 w-9 shrink-0">
        <LogoMark />
      </span>
      <span className="font-display text-[1.05rem] font-extrabold tracking-[0.04em]">
        BHAVISHYA<span className="text-violet-b">TECH</span>
      </span>
    </span>
  );
}

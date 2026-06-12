import { cn } from "@/lib/utils";

export default function Marquee({
  items,
  duration = 30,
  className,
}: {
  items: string[];
  duration?: number;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-semibold text-muted/60">
            {item}
            <span className="text-violet/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

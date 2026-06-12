import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeading({
  tag,
  title,
  lead,
  center = false,
  tagColor = "violet",
}: {
  tag: string;
  title: React.ReactNode;
  lead?: string;
  center?: boolean;
  tagColor?: "violet" | "rose";
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]",
            tagColor === "violet"
              ? "border-violet/30 bg-violet/10 text-violet-b"
              : "border-rose/30 bg-rose/10 text-rose-b"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", tagColor === "violet" ? "bg-violet-b" : "bg-rose-b")} />
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h2>
      </Reveal>
      <div className={cn("mt-5 h-px w-20 bg-gradient-to-r from-violet to-transparent", center && "mx-auto")} />
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

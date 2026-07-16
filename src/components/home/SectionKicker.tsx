type Tone = "muted" | "primary" | "accent" | "on-dark";

export function SectionKicker({
  n,
  label,
  tone = "muted",
  className = "",
}: {
  n?: string;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "primary"
      ? "text-primary"
      : tone === "accent"
        ? "text-accent"
        : tone === "on-dark"
          ? "text-background/70"
          : "text-foreground/50";
  return (
    <div
      className={`font-mono text-[10px] uppercase leading-none tracking-[0.22em] ${toneClass} ${className}`}
    >
      {n ? (
        <>
          <span aria-hidden="true">§</span>
          <span className="tabular-nums">{n}</span>
          <span aria-hidden="true" className="mx-2 opacity-60">·</span>
        </>
      ) : null}
      <span>{label}</span>
    </div>
  );
}

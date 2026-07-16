type Status = "ACTIVE" | "PENDING" | "VERIFIED";
type Variant = "light" | "dark";

const dot: Record<Status, string> = {
  ACTIVE: "bg-accent",
  PENDING: "bg-foreground/40",
  VERIFIED: "bg-primary",
};

export function TraceBadge({
  id,
  status = "ACTIVE",
  variant = "light",
  className = "",
}: {
  id: string;
  status?: Status;
  variant?: Variant;
  className?: string;
}) {
  const skin =
    variant === "dark"
      ? "border-background/25 text-background/85"
      : "border-foreground/25 text-foreground/75";
  return (
    <span
      className={`inline-flex items-center gap-2 border ${skin} px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${className}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 ${dot[status]}`} />
      <span className="tabular-nums">{id}</span>
      <span aria-hidden="true" className="opacity-40">·</span>
      <span>STATUS: {status}</span>
    </span>
  );
}

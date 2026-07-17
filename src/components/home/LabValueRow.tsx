import type { LucideIcon } from "lucide-react";

type Row = { label: string; value: string; note?: string; icon?: LucideIcon };

export function LabValueTable({
  rows,
  variant = "light",
  className = "",
}: {
  rows: Row[];
  variant?: "light" | "dark";
  className?: string;
}) {
  const border = variant === "dark" ? "border-background/20" : "border-foreground/15";
  const label = variant === "dark" ? "text-background/60" : "text-foreground/55";
  const value = variant === "dark" ? "text-background" : "text-foreground";
  const note = variant === "dark" ? "text-background/60" : "text-foreground/60";
  return (
    <dl className={`border-t ${border} ${className}`}>
      {rows.map((r) => {
        const Icon = r.icon;
        return (
          <div
            key={r.label}
            className={`grid grid-cols-[140px_1fr] items-baseline gap-4 border-b ${border} py-3`}
          >
            <dt
              className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${label}`}
            >
              {Icon ? (
                <Icon aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5 shrink-0" />
              ) : null}
              {r.label}
            </dt>
            <dd className={`text-sm font-medium tabular-nums ${value}`}>
              {r.value}
              {r.note ? (
                <span className={`ml-2 font-normal ${note}`}>— {r.note}</span>
              ) : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}


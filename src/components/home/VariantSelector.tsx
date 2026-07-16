export type HomeVariant = "v1" | "v2" | "v3";

const labels: Record<HomeVariant, string> = {
  v1: "V1 · Sober institutional",
  v2: "V2 · Dense operational",
  v3: "V3 · Quiet authority",
};

export function VariantSelector({
  value,
  onChange,
}: {
  value: HomeVariant;
  onChange: (v: HomeVariant) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Home design variant"
      className="fixed right-4 top-4 z-50 flex items-center gap-1 border border-foreground/15 bg-background/95 p-1 shadow-[0_1px_0_0_rgba(0,0,0,0.08)] backdrop-blur"
    >
      <span className="hidden md:inline px-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
        Design
      </span>
      {(Object.keys(labels) as HomeVariant[]).map((key) => {
        const active = value === key;
        return (
          <button
            key={key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(key)}
            title={labels[key]}
            className={`btn-gov px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
            }`}
          >
            {key.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

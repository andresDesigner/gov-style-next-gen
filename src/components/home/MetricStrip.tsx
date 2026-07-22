import { SectionKicker } from "./SectionKicker";

type Metric = { value: string; label: string; note?: string };

export function MetricStrip({
  tone = "navy",
  kicker,
  metrics,
  ariaLabel,
  topLabel,
}: {
  tone?: "navy" | "cobalt";
  kicker?: { n?: string; label: string };
  metrics: Metric[];
  ariaLabel?: string;
  topLabel?: string;
}) {
  const surface = tone === "navy" ? "surface-navy" : "surface-cobalt";
  const noteColor = tone === "navy" ? "text-background/70" : "text-primary-foreground/80";
  const topAccent = tone === "navy" ? "text-accent" : "text-primary-foreground";
  const dot = tone === "navy" ? "bg-accent" : "bg-primary-foreground";
  return (
    <section aria-label={ariaLabel ?? "Key metrics"} className={surface}>
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        {topLabel ? (
          <div
            className={`mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${topAccent}`}
          >
            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            {topLabel}
          </div>
        ) : null}
        {kicker ? (
          <SectionKicker
            n={kicker.n}
            label={kicker.label}
            tone="on-dark"
            className="mb-8 text-background/80"
          />
        ) : null}
        <dl className="grid grid-cols-1 md:grid-cols-3" style={{ columnGap: 0 }}>
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-6 py-4 md:py-2 ${
                i > 0 ? "md:border-l md:border-accent/70" : ""
              }`}
            >
              <div className="num-display-md tabular-nums leading-none">{m.value}</div>
              <div
                className={`mt-3 font-mono text-[10px] uppercase tracking-[0.22em] ${noteColor}`}
              >
                {m.label}
              </div>
              {m.note ? (
                <div className={`mt-1 text-sm ${noteColor}`}>{m.note}</div>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

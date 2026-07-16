import { SectionKicker } from "./SectionKicker";

type Metric = { value: string; label: string; note?: string };

export function MetricStrip({
  tone = "navy",
  kicker,
  metrics,
  ariaLabel,
}: {
  tone?: "navy" | "cobalt";
  kicker?: { n?: string; label: string };
  metrics: Metric[];
  ariaLabel?: string;
}) {
  const surface = tone === "navy" ? "surface-navy" : "surface-cobalt";
  const noteColor = tone === "navy" ? "text-background/60" : "text-primary-foreground/70";
  return (
    <section aria-label={ariaLabel ?? "Key metrics"} className={surface}>
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        {kicker ? (
          <SectionKicker
            n={kicker.n}
            label={kicker.label}
            tone="on-dark"
            className="mb-8 text-background/70"
          />
        ) : null}
        <dl
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ columnGap: 0 }}
        >
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

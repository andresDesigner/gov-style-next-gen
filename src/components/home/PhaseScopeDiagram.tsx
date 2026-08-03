import { primaryServices, secondaryServices } from "./shared";
import { serviceIconMap } from "./ServiceIcon";
import { useInView } from "@/hooks/use-in-view";

type Phase = "mvp" | "p1" | "p2";

const scope: Record<string, Phase> = {
  "S-01": "mvp",
  "S-02": "mvp",
  "S-03": "p1",
  "S-04": "p1",
  "S-05": "p2",
  "S-06": "p2",
};

const phases: { key: Phase; label: string; sub: string }[] = [
  { key: "mvp", label: "Hard MVP", sub: "Available now" },
  { key: "p1", label: "Phase 1", sub: "Q4 2026 · pre-deadline" },
  { key: "p2", label: "Phase 2", sub: "Post-April 2027" },
];

function isIncluded(phase: Phase, active: Phase) {
  if (phase === "p2") return true;
  if (phase === "p1") return active === "mvp" || active === "p1";
  return active === "mvp";
}

function Dot({ filled }: { filled: boolean }) {
  return filled ? (
    <span
      aria-label="Included"
      className="inline-block h-2.5 w-2.5 rounded-full bg-accent"
    />
  ) : (
    <span
      aria-label="Not included"
      className="inline-block h-2.5 w-2.5 rounded-full border border-foreground/25"
    />
  );
}

export function PhaseScopeDiagram() {
  const services = [...primaryServices, ...secondaryServices];
  const { ref, inView } = useInView<HTMLElement>();
  const state = inView ? "true" : "false";

  return (
    <figure ref={ref} aria-labelledby="phase-scope-title" className="mt-12">
      <figcaption
        id="phase-scope-title"
        className="flex flex-wrap items-baseline justify-between gap-4 border border-foreground/15 bg-card px-6 py-4"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            Phase Scope · Availability by service
          </div>
          <div className="mt-1 text-sm font-semibold text-foreground">
            When each capability comes online.
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
          6 services · 3 phases
        </div>
      </figcaption>

      {/* Column headers (desktop) */}
      <div className="mt-2 hidden grid-cols-[minmax(0,1fr)_repeat(3,7.5rem)] items-end gap-4 px-6 py-3 md:grid">
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          Service
        </div>
        {phases.map((p) => (
          <div key={p.key} className="text-center font-mono text-[10px] uppercase tracking-widest">
            <div className="text-foreground">{p.label}</div>
            <div className="mt-1 normal-case tracking-normal text-foreground/50">{p.sub}</div>
          </div>
        ))}
      </div>

      {/* Rows as independent containers */}
      <ul className="space-y-2 overflow-x-hidden">
        {services.map((s, ri) => {
          const active = scope[s.id];
          const Icon = serviceIconMap[s.id];
          const fromRight = ri % 2 === 1;
          return (
            <li
              key={s.id}
              data-inview={state}
              style={{ ["--stagger" as string]: ri }}
              className={`reveal-x ${
                fromRight ? "reveal-x-right" : ""
              } group grid grid-cols-1 items-center gap-4 rounded-xl border border-foreground/15 bg-card px-5 py-4 shadow-sm motion-safe:transition-shadow motion-safe:duration-300 hover:shadow-md md:grid-cols-[minmax(0,1fr)_repeat(3,7.5rem)] md:px-6`}
            >
              <div className="flex items-center gap-4">
                {Icon ? (
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center text-signal motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5"
                  >
                    <Icon strokeWidth={1.75} className="h-7 w-7" />
                  </span>
                ) : null}
                <div className="min-w-0">
                  <div className="font-mono text-[10px] tracking-widest text-primary">{s.id}</div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{s.title}</div>
                </div>
              </div>

              {/* Mobile phase strip */}
              <dl className="grid grid-cols-3 gap-2 md:hidden">
                {phases.map((p) => (
                  <div
                    key={p.key}
                    className="flex flex-col items-center gap-1 border border-foreground/10 py-2"
                  >
                    <dt className="font-mono text-[9px] uppercase tracking-widest text-foreground/60">
                      {p.label}
                    </dt>
                    <dd className="flex flex-col items-center gap-1">
                      <Dot filled={isIncluded(p.key, active)} />
                      {p.key === active ? (
                        <span className="font-mono text-[8px] uppercase tracking-widest text-accent">
                          Launches
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Desktop phase cells */}
              {phases.map((p) => (
                <div key={p.key} className="hidden text-center md:block">
                  <div className="inline-flex flex-col items-center gap-1">
                    <Dot filled={isIncluded(p.key, active)} />
                    {p.key === active ? (
                      <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                        Launches
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </li>
          );
        })}
      </ul>

      <div className="mt-2 flex flex-wrap items-center gap-4 border border-foreground/15 bg-secondary/30 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
        <span className="inline-flex items-center gap-2">
          <Dot filled />
          Included
        </span>
        <span className="inline-flex items-center gap-2">
          <Dot filled={false} />
          Not yet
        </span>
      </div>
    </figure>
  );
}

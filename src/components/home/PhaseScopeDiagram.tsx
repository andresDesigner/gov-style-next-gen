import { primaryServices, secondaryServices } from "./shared";
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

function inViewAnim(state?: "true" | "false") {
  return state === "true" ? "reveal reveal-stagger " : "";
}

function Dot({
  filled,
  state,
  stagger = 0,
}: {
  filled: boolean;
  state?: "true" | "false";
  stagger?: number;
}) {
  const anim = inViewAnim(state);
  const style = { ["--stagger" as string]: stagger };
  return filled ? (
    <span
      aria-label="Included"
      data-inview={state}
      style={style}
      className={anim + "inline-block h-2.5 w-2.5 rounded-full bg-accent"}
    />
  ) : (
    <span
      aria-label="Not included"
      data-inview={state}
      style={style}
      className={anim + "inline-block h-2.5 w-2.5 rounded-full border border-foreground/25"}
    />
  );
}

export function PhaseScopeDiagram() {
  const services = [...primaryServices, ...secondaryServices];
  const { ref, inView } = useInView<HTMLElement>();
  const state = inView ? "true" : "false";
  return (
    <figure
      ref={ref}
      aria-labelledby="phase-scope-title"
      className="mt-12 border border-foreground/15 bg-card"
    >
      <figcaption
        id="phase-scope-title"
        className="flex flex-wrap items-baseline justify-between gap-4 border-b border-foreground/15 px-6 py-4"
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

      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-foreground/15 bg-secondary/40">
              <th
                scope="col"
                className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/60"
              >
                Service
              </th>
              {phases.map((p) => (
                <th
                  key={p.key}
                  scope="col"
                  className="px-6 py-3 text-center font-mono text-[10px] uppercase tracking-widest text-foreground/60"
                >
                  <div className="text-foreground">{p.label}</div>
                  <div className="mt-1 normal-case tracking-normal text-foreground/50">
                    {p.sub}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((s, ri) => {
              const activePhase = scope[s.id];
              return (
                <tr key={s.id} className="border-b border-foreground/10 last:border-b-0">
                  <th
                    scope="row"
                    className="px-6 py-4 align-middle"
                  >
                    <div className="font-mono text-[10px] tracking-widest text-primary">
                      {s.id}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                      {s.title}
                    </div>
                  </th>
                  {phases.map((p, pi) => {
                    const included =
                      (p.key === "mvp" && activePhase === "mvp") ||
                      (p.key === "p1" && (activePhase === "mvp" || activePhase === "p1")) ||
                      (p.key === "p2");
                    const first = p.key === activePhase;
                    return (
                      <td
                        key={p.key}
                        className="px-6 py-4 text-center align-middle"
                      >
                        <div className="inline-flex flex-col items-center gap-1">
                          <Dot filled={included} state={state} stagger={pi * 3 + ri} />
                          {first ? (
                            <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                              Launches
                            </span>
                          ) : null}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked */}
      <ul className="divide-y divide-foreground/10 md:hidden">
        {services.map((s) => {
          const activePhase = scope[s.id];
          return (
            <li key={s.id} className="px-6 py-4">
              <div className="font-mono text-[10px] tracking-widest text-primary">
                {s.id}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                {s.title}
              </div>
              <dl className="mt-3 grid grid-cols-3 gap-2">
                {phases.map((p, pi) => {
                  const included =
                    (p.key === "mvp" && activePhase === "mvp") ||
                    (p.key === "p1" && (activePhase === "mvp" || activePhase === "p1")) ||
                    (p.key === "p2");
                  return (
                    <div key={p.key} className="flex flex-col items-center gap-1 border border-foreground/10 py-2">
                      <dt className="font-mono text-[9px] uppercase tracking-widest text-foreground/60">
                        {p.label}
                      </dt>
                      <dd>
                        <Dot filled={included} state={state} stagger={pi} />
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center gap-4 border-t border-foreground/15 bg-secondary/30 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
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

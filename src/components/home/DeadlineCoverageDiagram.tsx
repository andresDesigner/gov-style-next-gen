import { useMemo } from "react";

const NAVY = "var(--color-foreground)";
const COBALT = "var(--color-primary)";

function monthsUntil(target: Date, now: Date = new Date()) {
  const months =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());
  return Math.max(0, months);
}

export function DeadlineCoverageDiagram() {
  const monthsRemaining = useMemo(
    () => monthsUntil(new Date(2027, 3, 26)),
    [],
  );

  // Rule effective April 24, 2024 → 36 months of runway to the first deadline.
  const totalWindow = 36;
  const runwayUsed = Math.min(
    100,
    Math.max(0, Math.round(((totalWindow - monthsRemaining) / totalWindow) * 100)),
  );

  const desc =
    `Timeline showing two ADA Title II compliance deadlines. ` +
    `First: April 26, 2027 for entities serving 50,000 or more residents. ` +
    `Second: April 26, 2028 for smaller entities and special districts. ` +
    `Approximately ${monthsRemaining} months remain until the first deadline.`;

  return (
    <figure
      aria-label="ADA Title II deadline coverage"
      className="mt-6 border border-foreground/15 bg-card p-6 shadow-[0_2px_0_0_rgba(15,23,42,0.06)]"
    >
      {/* Header — mirrors Engagement Status card */}
      <div className="inline-flex items-center gap-2 bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
        Ref-T2 · Scope: Federal
      </div>
      <div className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        ADA Title II Deadline Coverage
      </div>
      <p className="mt-1 text-sm leading-relaxed text-foreground/70">
        Two statutory deadlines governing Web and App accessibility for public entities.
      </p>

      {/* Desktop / tablet: horizontal SVG timeline */}
      <svg
        role="img"
        aria-labelledby="dcd-title"
        viewBox="0 0 600 130"
        className="mt-5 hidden h-auto w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="dcd-title">Title II deadline coverage timeline</title>
        <desc>{desc}</desc>

        {/* Baseline (future portion) */}
        <line
          x1="40"
          y1="70"
          x2="560"
          y2="70"
          stroke={NAVY}
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Runway used (now → 2027) filled with cobalt */}
        <line
          x1="40"
          y1="70"
          x2="220"
          y2="70"
          stroke={COBALT}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* NOW marker — passed/anchor: solid navy */}
        <g>
          <circle cx="40" cy="70" r="6" fill={NAVY} />
          <text
            x="40"
            y="96"
            textAnchor="start"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            letterSpacing="1.5"
            fill={NAVY}
          >
            NOW · ≈{monthsRemaining} MO
          </text>
        </g>

        {/* 2027 marker — active milestone: cobalt ring + inner dot */}
        <g>
          <line
            x1="220"
            y1="38"
            x2="220"
            y2="62"
            stroke={COBALT}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="220" cy="70" r="8" fill="none" stroke={COBALT} strokeWidth="2" />
          <circle cx="220" cy="70" r="3" fill={COBALT} />
          <text
            x="220"
            y="30"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="13"
            fontWeight="600"
            fill={NAVY}
          >
            April 26, 2027
          </text>
          <text
            x="220"
            y="96"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            letterSpacing="1.5"
            fill={NAVY}
          >
            50,000+ RESIDENTS
          </text>
        </g>

        {/* 2028 marker — future: hollow navy + dashed connector */}
        <g>
          <line
            x1="500"
            y1="38"
            x2="500"
            y2="62"
            stroke={NAVY}
            strokeOpacity="0.55"
            strokeWidth="1.25"
            strokeDasharray="3 3"
          />
          <circle
            cx="500"
            cy="70"
            r="7"
            fill="var(--color-card)"
            stroke={NAVY}
            strokeWidth="1.5"
          />
          <text
            x="500"
            y="30"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="13"
            fontWeight="600"
            fill={NAVY}
          >
            April 26, 2028
          </text>
          <text
            x="500"
            y="96"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            letterSpacing="1.5"
            fill={NAVY}
          >
            SMALLER ENTITIES · SPECIAL DISTRICTS
          </text>
        </g>

        {/* End cap */}
        <line
          x1="560"
          y1="63"
          x2="560"
          y2="77"
          stroke={NAVY}
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Mobile: vertical stack, semantic list */}
      <ol className="mt-5 flex flex-col gap-4 sm:hidden" aria-label={desc}>
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full bg-foreground"
          />
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              Now · ≈{monthsRemaining} mo remaining
            </div>
            <div className="text-sm font-medium text-foreground">Today</div>
          </div>
        </li>
        <li aria-hidden="true" className="ml-[5px] h-6 w-[3px] bg-primary" />
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full border-2 border-primary"
          >
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-foreground">April 26, 2027</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              50,000+ residents
            </div>
          </div>
        </li>
        <li
          aria-hidden="true"
          className="ml-[6px] h-6 w-px border-l border-dashed border-foreground/50"
        />
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full border border-foreground bg-card"
          />
          <div className="min-w-0">
            <div className="text-sm font-semibold text-foreground">April 26, 2028</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              Smaller entities · Special districts
            </div>
          </div>
        </li>
      </ol>

      {/* Footer strip — mirrors "Progress · 38%" on the Engagement card */}
      <div
        className="mt-5 h-1.5 w-full overflow-hidden bg-foreground/10"
        role="progressbar"
        aria-valuenow={runwayUsed}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Regulatory runway used"
      >
        <div className="h-full bg-primary" style={{ width: `${runwayUsed}%` }} />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/55">
        <span>Runway used</span>
        <span className="tabular-nums">{runwayUsed}%</span>
      </div>
      <div className="mt-4 border-t border-foreground/10 pt-3 text-xs text-foreground/55">
        Ref · 28 CFR Part 35 — statutory deadlines as published in the Federal Register.
      </div>

      <figcaption className="sr-only">{desc}</figcaption>
    </figure>
  );
}

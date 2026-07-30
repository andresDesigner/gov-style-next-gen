import { useMemo } from "react";
import { useInView } from "@/hooks/use-in-view";

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

  const desc =
    `Timeline showing two ADA Title II compliance deadlines. ` +
    `First: April 26, 2027 for entities serving 50,000 or more residents. ` +
    `Second: April 26, 2028 for smaller entities and special districts. ` +
    `Approximately ${monthsRemaining} months remain until the first deadline.`;

  const { ref, inView } = useInView<HTMLElement>();
  const state = inView ? "true" : "false";

  return (
    <figure
      ref={ref}
      aria-label="ADA Title II deadline coverage"
      className="mt-6 border border-foreground/15 bg-card/60 p-5"
    >
      <figcaption className="mb-4 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
        Regulatory map · ADA Title II compliance deadlines
      </figcaption>
      {/* Desktop / tablet: horizontal SVG timeline */}
      <svg
        role="img"
        aria-labelledby="dcd-title"
        viewBox="0 0 600 120"
        className="mx-auto hidden h-auto w-full max-w-[860px] sm:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="dcd-title">Title II deadline coverage timeline</title>
        <desc>{desc}</desc>

        {/* Baseline */}
        <line
          x1="40"
          y1="70"
          x2="560"
          y2="70"
          stroke="#031436"
          strokeWidth="1.5"
        />
        {/* Runway (now → 2027) filled with cobalt */}
        <line
          className="draw"
          data-inview={state}
          style={{ ["--dash" as string]: 180 }}
          x1="40"
          y1="70"
          x2="220"
          y2="70"
          stroke="#033EAD"
          strokeWidth="3"
        />

        {/* NOW marker */}
        <g>
          <circle cx="40" cy="70" r="4" fill="#031436" />
          <text
            x="40"
            y="92"
            textAnchor="start"
            fontFamily="ui-monospace, monospace"
            fontSize="9"
            letterSpacing="1"
            fill="#031436"
          >
            NOW · ≈{monthsRemaining} MO
          </text>
        </g>

        {/* 2027 marker */}
        <g>
          <line
            x1="220"
            y1="40"
            x2="220"
            y2="70"
            stroke="#033EAD"
            strokeWidth="1.5"
          />
          <circle cx="220" cy="70" r="6" fill="#033EAD" />
          <text
            x="220"
            y="32"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="13"
            fontWeight="700"
            fill="#031436"
          >
            April 26, 2027
          </text>
          <text
            x="220"
            y="92"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="9"
            letterSpacing="1"
            fill="#031436"
          >
            50,000+ RESIDENTS
          </text>
        </g>

        {/* 2028 marker */}
        <g>
          <line
            x1="500"
            y1="40"
            x2="500"
            y2="70"
            stroke="#031436"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
          <circle
            cx="500"
            cy="70"
            r="6"
            fill="none"
            stroke="#031436"
            strokeWidth="1.5"
          />
          <text
            x="500"
            y="32"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="13"
            fontWeight="700"
            fill="#031436"
          >
            April 26, 2028
          </text>
          <text
            x="560"
            y="92"
            textAnchor="end"
            fontFamily="ui-monospace, monospace"
            fontSize="9"
            letterSpacing="1"
            fill="#031436"
          >
            SMALLER ENTITIES · SPECIAL DISTRICTS
          </text>
        </g>

        {/* End cap */}
        <line
          x1="560"
          y1="64"
          x2="560"
          y2="76"
          stroke="#031436"
          strokeWidth="1.5"
        />
      </svg>

      {/* Mobile: vertical stack, semantic list */}
      <ol className="flex flex-col gap-4 sm:hidden" aria-label={desc}>
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-2.5 w-2.5 shrink-0 bg-foreground"
          />
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              Now · ≈{monthsRemaining} mo remaining
            </div>
            <div className="text-sm font-medium text-foreground">Today</div>
          </div>
        </li>
        <li
          aria-hidden="true"
          className="ml-1 h-6 w-[3px] bg-accent"
        />
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-3 w-3 shrink-0 bg-accent"
          />
          <div className="min-w-0">
            <div className="text-sm font-bold text-foreground">
              April 26, 2027
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              50,000+ residents
            </div>
          </div>
        </li>
        <li
          aria-hidden="true"
          className="ml-1 h-6 w-[1px] border-l border-dashed border-foreground/50"
        />
        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-3 w-3 shrink-0 border border-foreground"
          />
          <div className="min-w-0">
            <div className="text-sm font-bold text-foreground">
              April 26, 2028
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              Smaller entities · Special districts
            </div>
          </div>
        </li>
      </ol>

      <figcaption className="sr-only">{desc}</figcaption>
    </figure>
  );
}

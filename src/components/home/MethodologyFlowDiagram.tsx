import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const STAGES = [
  { short: "Intake", full: "Intake & Scoping" },
  { short: "Extract", full: "Static Extraction" },
  { short: "Rules", full: "Rule Analysis" },
  { short: "NVDA", full: "NVDA Capture" },
  { short: "Normalize", full: "Event Normalization" },
  { short: "Reconcile", full: "Reconciliation" },
  { short: "Conflicts", full: "Conflict Resolution" },
  { short: "Sufficiency", full: "Evidence Sufficiency" },
  { short: "Finding", full: "Finding & Trace" },
];

const EMPHASIZED = new Set([3, 7]); // NVDA Capture, Evidence Sufficiency

const DESC =
  "Nine-stage verification flow: Intake & Scoping, Static Extraction, Rule Analysis, " +
  "NVDA Capture (behavioral emphasis), Event Normalization, Reconciliation, Conflict Resolution, " +
  "Evidence Sufficiency (evidence emphasis), Finding & Trace. Each stage feeds the next, with " +
  "NVDA Capture and Evidence Sufficiency highlighted as the two moments where behavioral truth is committed.";

const RAIL_START = 70;
const RAIL_STEP = 132;
const RAIL_END = RAIL_START + RAIL_STEP * (STAGES.length - 1);

export function MethodologyFlowDiagram() {
  const { ref, inView } = useInView<HTMLElement>();
  const [hovered, setHovered] = useState<number | null>(null);
  const state = inView ? "true" : "false";

  return (
    <figure
      ref={ref}
      role="group"
      aria-label="Nine-stage verification methodology"
      className="mt-8 border border-foreground/15 bg-card/60 p-5"
    >
      {/* Desktop / tablet — horizontal rail */}
      <svg
        role="img"
        aria-labelledby="mfd-title"
        viewBox="0 0 1200 170"
        className="hidden h-auto w-full md:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="mfd-title">Verification methodology — 9 stages</title>
        <desc>{DESC}</desc>

        {/* Rail base */}
        <line
          x1={RAIL_START}
          y1="62"
          x2={RAIL_END}
          y2="62"
          stroke="#cbd2dd"
          strokeWidth="2"
        />
        {/* Rail progress — drawn on scroll, then flows continuously */}
        <line
          className="loop-dash"
          style={{
            ["--dash-a" as string]: 10,
            ["--dash-b" as string]: 8,
            ["--dash-cycle" as string]: 18,
            ["--loop-speed" as string]: "1.4s",
          }}
          data-inview={state}
          x1={RAIL_START}
          y1="62"
          x2={RAIL_END}
          y2="62"
          stroke="#033EAD"
          strokeWidth="2"
        />
        <circle
          className="loop-travel"
          data-inview={state}
          style={{ ["--travel" as string]: `${RAIL_END - RAIL_START}px`, ["--loop-speed" as string]: "3.6s" }}
          cx={RAIL_START}
          cy="62"
          r="4"
          fill="var(--illus-coral)"
        />
        <line
          className="draw"
          data-inview={state}
          style={{ ["--dash" as string]: RAIL_END - RAIL_START }}
          x1={RAIL_START}
          y1="62"
          x2={RAIL_END}
          y2="62"
          stroke="#033EAD"
          strokeWidth="2"
        />

        {STAGES.map((stage, i) => {
          const cx = RAIL_START + i * RAIL_STEP;
          const emphasized = EMPHASIZED.has(i);
          const isHovered = hovered === i;
          const r = emphasized ? 16 : 12;
          return (
            <g
              key={stage.full}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "default" }}
            >
              <circle cx={cx} cy="62" r={r + 12} fill="transparent" />
              {emphasized ? (
                <circle
                  className="loop-halo"
                  data-inview={state}
                  style={{ ["--stagger" as string]: i, ["--loop-speed" as string]: "2.8s" }}
                  cx={cx}
                  cy="62"
                  r={r}
                  fill="none"
                  stroke="#033EAD"
                  strokeWidth="1.5"
                />
              ) : null}
              <circle
                cx={cx}
                cy="62"
                r={r}
                fill={emphasized || isHovered ? "#033EAD" : "#ffffff"}
                stroke={emphasized || isHovered ? "#033EAD" : "#9aa5b6"}
                strokeWidth="2"
                className="reveal reveal-stagger"
                data-inview={state}
                {...{ style: { ["--stagger" as string]: i } }}
              />
              <text
                x={cx}
                y="67"
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize={emphasized ? 11 : 10}
                fontWeight="700"
                fill={emphasized || isHovered ? "#ffffff" : "#4a566b"}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              <text
                x={cx}
                y="102"
                textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui"
                fontSize="11"
                fontWeight={emphasized ? 700 : 500}
                fill={emphasized || isHovered ? "#033EAD" : "#031436"}
              >
                {stage.short}
              </text>
            </g>
          );
        })}

        {/* Single detail line — only the hovered / emphasized stage speaks */}
        <text
          x="600"
          y="146"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          letterSpacing="1.2"
          fill="#033EAD"
        >
          {(hovered !== null
            ? STAGES[hovered].full
            : "HOVER A STAGE — BEHAVIORAL TRUTH COMMITS AT 04 AND 08"
          ).toUpperCase()}
        </text>
      </svg>

      {/* Mobile — vertical semantic list */}
      <ol className="flex flex-col gap-2 md:hidden" aria-label={DESC}>
        {STAGES.map((stage, i) => {
          const emphasized = EMPHASIZED.has(i);
          return (
            <li
              key={stage.full}
              data-inview={state}
              style={{ ["--stagger" as string]: i }}
              className={
                "reveal reveal-stagger flex items-start gap-3 border p-3 " +
                (emphasized
                  ? "border-accent bg-accent/5"
                  : "border-foreground/20 bg-card")
              }
            >
              <span
                className={
                  "font-mono text-[10px] tracking-widest " +
                  (emphasized ? "text-accent" : "text-foreground/60")
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={
                  "text-sm " +
                  (emphasized ? "font-bold text-foreground" : "text-foreground")
                }
              >
                {stage.full}
              </span>
            </li>
          );
        })}
      </ol>
      <figcaption className="sr-only">{DESC}</figcaption>
    </figure>
  );
}

import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { verificationStages } from "@/components/site/content";

const STAGES = verificationStages;

/** Nodes highlighted in coral — the "Reconcile & Verify" commitment points. */
const CORAL = new Set([3, 5]);

const GROUPS = [
  { label: "Intake & Capture", from: 0, to: 2 },
  { label: "Reconcile & Verify", from: 3, to: 5 },
  { label: "Evidence & Finding", from: 6, to: 8 },
];

const DESC =
  "Nine-stage verification flow grouped in three phases: Intake and Capture (Intake & Scoping, " +
  "Static Extraction, Rule Analysis), Reconcile and Verify (NVDA Behavioral Capture, Event " +
  "Normalization, Reconciliation), Evidence and Finding (Conflict Resolution, Evidence " +
  "Sufficiency, Finding & Trace). Each finding ends as a verifiable trace record.";

const COBALT = "#033EAD";
const CORAL_HEX = "#fd7239";

const START = 34;
const STEP = 61;
const END = START + STEP * (STAGES.length - 1);
const RAIL_Y = 40;

export function NineStageFlowHero() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-[520px] border border-foreground/12 bg-card p-5 shadow-sm"
    >
      <div className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
        Nine-stage verification flow
      </div>

      {/* Desktop / tablet rail */}
      <svg
        role="img"
        aria-labelledby="nsf-title"
        viewBox="0 0 520 106"
        className="mt-4 hidden h-auto w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="nsf-title">Nine-stage verification flow</title>
        <desc>{DESC}</desc>

        <line x1={START} y1={RAIL_Y} x2={END} y2={RAIL_Y} stroke="#cbd6e6" strokeWidth="2" />
        <line
          className="loop-dash"
          data-inview={state}
          style={{
            ["--dash-a" as string]: 8,
            ["--dash-b" as string]: 7,
            ["--dash-cycle" as string]: 15,
            ["--loop-speed" as string]: "1.3s",
          }}
          x1={START}
          y1={RAIL_Y}
          x2={END}
          y2={RAIL_Y}
          stroke={COBALT}
          strokeWidth="2"
        />
        <circle
          className="loop-travel"
          data-inview={state}
          style={{
            ["--travel" as string]: `${END - START}px`,
            ["--loop-speed" as string]: "3.6s",
          }}
          cx={START}
          cy={RAIL_Y}
          r="3.5"
          fill={CORAL_HEX}
        />

        {STAGES.map((stage, i) => {
          const cx = START + i * STEP;
          const coral = CORAL.has(i);
          const fill = coral ? CORAL_HEX : COBALT;
          return (
            <g key={stage.full}>
              {coral ? (
                <circle
                  className="loop-halo"
                  data-inview={state}
                  style={{ ["--stagger" as string]: i, ["--loop-speed" as string]: "2.8s" }}
                  cx={cx}
                  cy={RAIL_Y}
                  r="13"
                  fill="none"
                  stroke={CORAL_HEX}
                  strokeWidth="1.5"
                />
              ) : null}
              <circle
                className="reveal reveal-stagger"
                data-inview={state}
                style={{ ["--stagger" as string]: i }}
                cx={cx}
                cy={RAIL_Y}
                r="13"
                fill={fill}
                stroke="#ffffff"
                strokeWidth="2.5"
              >
                <title>{stage.full}</title>
              </circle>
              {/* small glyph inside the node */}
              <rect
                x={cx - 4.5}
                y={RAIL_Y - 5}
                width="9"
                height="7"
                rx="1"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.2"
              />
              <line
                x1={cx - 2.5}
                y1={RAIL_Y + 4.5}
                x2={cx + 2.5}
                y2={RAIL_Y + 4.5}
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <text
                x={cx}
                y={RAIL_Y + 30}
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="9.5"
                fontWeight="600"
                fill={coral ? CORAL_HEX : "#4a566b"}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}

        {/* Group labels + dotted dividers */}
        {GROUPS.map((g, gi) => {
          const mid = START + ((g.from + g.to) / 2) * STEP;
          return (
            <g key={g.label}>
              {gi > 0 ? (
                <line
                  x1={START + (g.from - 0.5) * STEP}
                  y1={RAIL_Y + 18}
                  x2={START + (g.from - 0.5) * STEP}
                  y2={RAIL_Y + 56}
                  stroke="#cbd6e6"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              ) : null}
              <text
                className="reveal reveal-stagger"
                data-inview={state}
                style={{ ["--stagger" as string]: 9 + gi }}
                x={mid}
                y={RAIL_Y + 50}
                textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.9"
                fill="#031436"
              >
                {g.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Mobile — semantic list */}
      <ol className="mt-4 flex flex-col gap-1.5 sm:hidden" aria-label={DESC}>
        {STAGES.map((stage, i) => {
          const coral = CORAL.has(i);
          return (
            <li
              key={stage.full}
              data-inview={state}
              style={{ ["--stagger" as string]: i }}
              className={
                "reveal reveal-stagger flex items-center gap-3 border px-3 py-2 " +
                (coral
                  ? "border-[color:var(--illus-coral,#fd7239)] bg-[color:var(--illus-coral,#fd7239)]/5"
                  : "border-foreground/15 bg-card")
              }
            >
              <span
                className={
                  "font-mono text-[10px] font-semibold tracking-widest " +
                  (coral ? "text-[color:var(--illus-coral,#fd7239)]" : "text-accent")
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] leading-snug">{stage.full}</span>
            </li>
          );
        })}
      </ol>

      {/* TRACE card */}
      <div
        data-inview={state}
        className="reveal reveal-delay-3 mt-4 border border-foreground/12 bg-card p-4 shadow-sm"
      >
        <div className="font-mono text-sm font-bold tracking-wide text-accent">TRACE-001</div>
        <p className="mt-1 text-[13px] text-foreground/70">
          Every finding is a verifiable record.
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-foreground/10 pt-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/55">
            Status
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
            <CheckCircle2
              aria-hidden="true"
              strokeWidth={2}
              className="loop-pulse h-4 w-4"
              data-inview={state}
              style={{ ["--loop-speed" as string]: "2.6s" }}
            />
            Verified
          </span>
        </div>
      </div>
    </div>
  );
}

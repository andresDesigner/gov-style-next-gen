const STAGES = [
  "Intake & Scoping",
  "Static Extraction",
  "Rule Analysis",
  "NVDA Capture",
  "Event Normalization",
  "Reconciliation",
  "Conflict Resolution",
  "Evidence Sufficiency",
  "Finding & Trace",
];

const EMPHASIZED = new Set([3, 7]); // NVDA Capture, Evidence Sufficiency (0-indexed)

const DESC =
  "Nine-stage verification flow: Intake & Scoping, Static Extraction, Rule Analysis, " +
  "NVDA Capture (behavioral emphasis), Event Normalization, Reconciliation, Conflict Resolution, " +
  "Evidence Sufficiency (evidence emphasis), Finding & Trace. Each stage feeds the next, with " +
  "NVDA Capture and Evidence Sufficiency highlighted as the two moments where behavioral truth is committed.";

export function MethodologyFlowDiagram() {
  return (
    <figure
      role="group"
      aria-label="Nine-stage verification methodology"
      className="mt-8 border border-foreground/15 bg-card/60 p-5"
    >
      {/* Desktop / tablet — horizontal SVG */}
      <svg
        role="img"
        aria-labelledby="mfd-title"
        viewBox="0 0 1200 180"
        className="hidden h-auto w-full md:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="mfd-title">Verification methodology — 9 stages</title>
        <desc>{DESC}</desc>
        <defs>
          <marker
            id="mfd-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#031436" />
          </marker>
        </defs>
        {STAGES.map((label, i) => {
          const cellW = 1200 / STAGES.length;
          const cx = cellW * i + cellW / 2;
          const cy = 90;
          const w = cellW - 24;
          const h = 64;
          const emphasized = EMPHASIZED.has(i);
          return (
            <g key={label}>
              {i < STAGES.length - 1 && (
                <line
                  x1={cx + w / 2}
                  y1={cy}
                  x2={cx + w / 2 + 24}
                  y2={cy}
                  stroke="#031436"
                  strokeWidth="1.25"
                  markerEnd="url(#mfd-arrow)"
                />
              )}
              <rect
                x={cx - w / 2}
                y={cy - h / 2}
                width={w}
                height={h}
                fill={emphasized ? "#eef2fb" : "#ffffff"}
                stroke={emphasized ? "#033EAD" : "#cbd2dd"}
                strokeWidth={emphasized ? 1.75 : 1}
              />
              <text
                x={cx}
                y={cy - 20}
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="9"
                letterSpacing="1.2"
                fill={emphasized ? "#033EAD" : "#031436"}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              <text
                x={cx}
                y={cy + 6}
                textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui"
                fontSize="12"
                fontWeight={emphasized ? 700 : 500}
                fill="#031436"
              >
                {label.length > 18 ? label.split(" ")[0] : label}
              </text>
              {label.length > 18 && (
                <text
                  x={cx}
                  y={cy + 22}
                  textAnchor="middle"
                  fontFamily="ui-sans-serif, system-ui"
                  fontSize="12"
                  fontWeight={emphasized ? 700 : 500}
                  fill="#031436"
                >
                  {label.split(" ").slice(1).join(" ")}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Mobile — vertical semantic list */}
      <ol className="flex flex-col gap-2 md:hidden" aria-label={DESC}>
        {STAGES.map((label, i) => {
          const emphasized = EMPHASIZED.has(i);
          return (
            <li
              key={label}
              className={
                "flex items-start gap-3 border p-3 " +
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
                {label}
              </span>
            </li>
          );
        })}
      </ol>
      <figcaption className="sr-only">{DESC}</figcaption>
    </figure>
  );
}

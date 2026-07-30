import { useInView } from "@/hooks/use-in-view";

const DESC =
  "Two-layer diagram contrasting a document's tag structure with what a screen reader actually exposes. " +
  "The top layer shows document tags (H1, P, BUTTON, IMG, DIV). The bottom layer shows the assistive " +
  "technology accessibility tree (Heading, Text, — no name —, Image without alt, and an ignored group). " +
  "A shaded band between the two layers marks the discrepancy — the gap where behavioral verification lives.";

const TAGS = [
  { label: "H1", exposed: "Heading", ok: true },
  { label: "P", exposed: "Text", ok: true },
  { label: "BUTTON", exposed: "no name", ok: false },
  { label: "IMG", exposed: "no alt", ok: false },
  { label: "DIV", exposed: "ignored", ok: false },
];

export function DocumentArchitectureDiagram() {
  const { ref, inView } = useInView<HTMLElement>();
  const state = inView ? "true" : "false";

  return (
    <figure
      ref={ref}
      role="group"
      aria-label="Document structure vs. screen reader exposure"
      className="mt-8 border border-foreground/15 bg-card/60 p-5"
    >
      <svg
        role="img"
        aria-labelledby="dad-title"
        viewBox="0 0 800 330"
        className="hidden h-auto w-full sm:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="dad-title">Document tags vs. accessibility tree</title>
        <desc>{DESC}</desc>

        <defs>
          <filter id="dad-shadow" x="-10%" y="-10%" width="120%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#031436" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Top layer label */}
        <text
          x="20"
          y="22"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#4a566b"
        >
          TAGS
        </text>

        {/* Top row of tag blocks */}
        {TAGS.map((t, i) => {
          const w = 140;
          const gap = 12;
          const x = 20 + i * (w + gap);
          return (
            <g key={"top-" + i} filter="url(#dad-shadow)">
              <rect
                x={x}
                y={34}
                width={w}
                height={56}
                rx={4}
                fill="#ffffff"
                stroke="#cbd2dd"
                strokeWidth="1"
                className="reveal reveal-stagger"
                data-inview={state}
                {...{ style: { ["--stagger" as string]: i } }}
              />
              <text
                x={x + w / 2}
                y={68}
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="12"
                fontWeight="700"
                fill="#031436"
              >
                {t.label}
              </text>
            </g>
          );
        })}

        {/* Connectors — drawn top-down on scroll */}
        {TAGS.map((t, i) => {
          const w = 140;
          const gap = 12;
          const x = 20 + i * (w + gap) + w / 2;
          return (
            <line
              key={"conn-" + i}
              className={"draw draw-delay-" + Math.min(i + 1, 3)}
              data-inview={state}
              style={{ ["--dash" as string]: 148 }}
              x1={x}
              y1={90}
              x2={x}
              y2={238}
              stroke={t.ok ? "#9aa5b6" : "#033EAD"}
              strokeWidth={t.ok ? 1 : 1.75}
            />
          );
        })}

        {/* Discrepancy band — compact badge, no paragraph */}
        <rect x="0" y="128" width="800" height="72" fill="#dbe4f7" />
        <line x1="0" y1="128" x2="800" y2="128" stroke="#033EAD" strokeWidth="1.25" strokeDasharray="4 4" />
        <line x1="0" y1="200" x2="800" y2="200" stroke="#033EAD" strokeWidth="1.25" strokeDasharray="4 4" />
        <g className="reveal reveal-delay-2" data-inview={state}>
          <rect x="20" y="152" width="196" height="24" fill="#033EAD" />
          <text
            x="32"
            y="169"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            letterSpacing="1.4"
            fontWeight="700"
            fill="#ffffff"
          >
            DISCREPANCY ZONE
          </text>
        </g>

        {/* Bottom row */}
        {TAGS.map((t, i) => {
          const w = 140;
          const gap = 12;
          const x = 20 + i * (w + gap);
          return (
            <g key={"bot-" + i} filter="url(#dad-shadow)">
              <rect
                x={x}
                y={238}
                width={w}
                height={56}
                rx={4}
                fill="#031436"
                stroke="#031436"
                className="reveal reveal-stagger"
                data-inview={state}
                {...{ style: { ["--stagger" as string]: i + 2 } }}
              />
              {!t.ok ? (
                <rect
                  x={x}
                  y={238}
                  width={4}
                  height={56}
                  fill="var(--illus-coral)"
                />
              ) : null}
              <text
                x={x + w / 2}
                y={272}
                textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui"
                fontSize="12"
                fontWeight="500"
                fill="#ffffff"
              >
                {t.exposed}
              </text>
            </g>
          );
        })}

        {/* Bottom label */}
        <text
          x="20"
          y="316"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#4a566b"
        >
          EXPOSED TO THE SCREEN READER
        </text>
      </svg>

      {/* Mobile — semantic table-like list */}
      <div className="sm:hidden">
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          Tags
        </div>
        <ul className="mt-2 divide-y divide-foreground/10 border border-foreground/20">
          {TAGS.map((t, i) => (
            <li
              key={i}
              data-inview={state}
              style={{ ["--stagger" as string]: i }}
              className="reveal reveal-stagger grid grid-cols-2"
            >
              <div className="border-r border-foreground/10 bg-card p-3 font-mono text-xs font-bold">
                {t.label}
              </div>
              <div className="bg-primary p-3 text-xs text-primary-foreground">
                {t.exposed}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 inline-flex bg-primary px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
          Discrepancy zone
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          Exposed to the screen reader
        </div>
      </div>

      <figcaption className="sr-only">{DESC}</figcaption>
    </figure>
  );
}

const DESC =
  "Two-layer diagram contrasting a document's tag structure with what a screen reader actually exposes. " +
  "The top layer shows document tags (H1, P, BUTTON, IMG, DIV). The bottom layer shows the assistive " +
  "technology accessibility tree (Heading, Text, — no name —, Image without alt, and an ignored group). " +
  "A shaded band between the two layers marks the discrepancy — the gap where behavioral verification lives.";

const TAGS = [
  { label: "H1", exposed: "Heading" },
  { label: "P", exposed: "Text" },
  { label: "BUTTON", exposed: "— no name —" },
  { label: "IMG", exposed: "Image (no alt)" },
  { label: "DIV role=button", exposed: "Ignored" },
];

export function DocumentArchitectureDiagram() {
  return (
    <figure
      role="group"
      aria-label="Document structure vs. screen reader exposure"
      className="mt-8 border border-foreground/15 bg-card/60 p-5"
    >
      <svg
        role="img"
        aria-labelledby="dad-title"
        viewBox="0 0 800 340"
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
          y="24"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#031436"
        >
          DOCUMENT STRUCTURE / TAGS
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
                y={38}
                width={w}
                height={60}
                rx={4}
                fill="#ffffff"
                stroke="#cbd2dd"
                strokeWidth="1"
              />
              <text
                x={x + w / 2}
                y={74}
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

        {/* Discrepancy band — alert tone */}
        <rect
          x="0"
          y="130"
          width="800"
          height="80"
          fill="#dbe4f7"
        />
        <line x1="0" y1="130" x2="800" y2="130" stroke="#033EAD" strokeWidth="1.25" strokeDasharray="4 4" />
        <line x1="0" y1="210" x2="800" y2="210" stroke="#033EAD" strokeWidth="1.25" strokeDasharray="4 4" />
        <text
          x="400"
          y="176"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="13"
          fontWeight="700"
          fill="#033EAD"
        >
          Discrepancy zone — what behavioral verification measures
        </text>

        {/* Connector lines */}
        {TAGS.map((_, i) => {
          const w = 140;
          const gap = 12;
          const x = 20 + i * (w + gap) + w / 2;
          return (
            <line
              key={"conn-" + i}
              x1={x}
              y1={98}
              x2={x}
              y2={242}
              stroke="#7a8494"
              strokeWidth="1"
            />
          );
        })}

        {/* Bottom row */}
        {TAGS.map((t, i) => {
          const w = 140;
          const gap = 12;
          const x = 20 + i * (w + gap);
          return (
            <g key={"bot-" + i} filter="url(#dad-shadow)">
              <rect
                x={x}
                y={242}
                width={w}
                height={60}
                rx={4}
                fill="#031436"
                stroke="#031436"
              />
              <text
                x={x + w / 2}
                y={278}
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
          y="326"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#031436"
        >
          WHAT THE SCREEN READER EXPOSES
        </text>
      </svg>

      {/* Mobile — semantic table-like list */}
      <div className="sm:hidden">
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          Document structure / tags
        </div>
        <ul className="mt-2 divide-y divide-foreground/10 border border-foreground/20">
          {TAGS.map((t, i) => (
            <li key={i} className="grid grid-cols-2">
              <div className="border-r border-foreground/10 bg-card p-3 font-mono text-xs font-bold">
                {t.label}
              </div>
              <div className="bg-primary p-3 text-xs text-primary-foreground">
                {t.exposed}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 border border-dashed border-accent bg-accent/5 p-3 text-xs font-medium text-accent">
          Discrepancy zone — what behavioral verification measures
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          What the screen reader exposes
        </div>
      </div>

      <figcaption className="sr-only">{DESC}</figcaption>
    </figure>
  );
}

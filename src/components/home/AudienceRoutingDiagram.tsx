import { useInView } from "@/hooks/use-in-view";
import { Illustration } from "./Illustration";
import ilGovAsset from "@/assets/il-04-gov.png.asset.json";
const ilGov = ilGovAsset.url;

const ROUTES = [
  { role: "Procurement Officer", dest: "Capability Statement", href: "#capability" },
  { role: "Accessibility Program Manager", dest: "How We Verify", href: "/verify" },
  { role: "Legal Counsel", dest: "Book a Call", href: "#book" },
];

const DESC =
  "Audience routing diagram. Three government roles — Procurement Officer, Accessibility Program " +
  "Manager, and Legal Counsel — each connected by a line to the primary conversion path best suited " +
  "to their evaluation needs: Capability Statement, How We Verify, and Book a Call respectively.";

export function AudienceRoutingDiagram() {
  const { ref, inView } = useInView<HTMLElement>();
  const state = inView ? "true" : "false";

  return (
    <figure
      ref={ref}
      role="group"
      aria-label="Audience routing to conversion paths"
      className="mt-6 border border-foreground/15 bg-card/60 p-5"
    >
      <div className="relative mb-2 overflow-hidden">
        <Illustration
          src={ilGov}
          alt=""
          width={1200}
          height={912}
          accents={false}
          className="mx-auto max-w-[340px]"
        />
      </div>


      <svg
        role="img"
        aria-labelledby="ard-title"
        viewBox="0 0 900 260"
        className="hidden h-auto w-full md:block [&_g]:transition-opacity [&_g]:duration-200 [&:hover_g]:opacity-40 [&_g:hover]:opacity-100"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="ard-title">Audience routing</title>
        <desc>{DESC}</desc>

        <text
          x="20"
          y="22"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#031436"
        >
          ROLE
        </text>
        <text
          x="880"
          y="22"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="1.5"
          fill="#031436"
        >
          CONVERSION PATH
        </text>

        {ROUTES.map((r, i) => {
          const y = 70 + i * 60;
          return (
            <g key={r.role}>
              {/* role box */}
              <rect
                x="20"
                y={y - 22}
                width="280"
                height="44"
                fill="#ffffff"
                stroke="#031436"
                strokeWidth="1.25"
              />
              <text
                x="34"
                y={y + 5}
                fontFamily="ui-sans-serif, system-ui"
                fontSize="13"
                fontWeight="600"
                fill="#031436"
              >
                {r.role}
              </text>

              {/* connector — drawn on scroll, staggered per route */}
              <line
                className="loop-dash"
                data-inview={state}
                style={{
                  ["--dash-a" as string]: 8,
                  ["--dash-b" as string]: 8,
                  ["--dash-cycle" as string]: 16,
                  ["--loop-speed" as string]: "1.3s",
                  ["--stagger" as string]: i,
                }}
                x1="300"
                y1={y}
                x2="600"
                y2={y}
                stroke="#033EAD"
                strokeWidth="1.5"
              />
              <circle
                className="loop-pulse"
                data-inview={state}
                style={{ ["--stagger" as string]: i }}
                cx="300"
                cy={y}
                r="3.5"
                fill="#033EAD"
              />
              <circle cx="600" cy={y} r="3.5" fill="#033EAD" />
              <circle
                className="loop-travel"
                data-inview={state}
                style={{ ["--travel" as string]: "300px", ["--stagger" as string]: i, ["--loop-speed" as string]: "2.8s" }}
                cx="300"
                cy={y}
                r="4.5"
                fill="var(--illus-coral)"
              />

              {/* destination box */}
              <rect
                x="600"
                y={y - 22}
                width="280"
                height="44"
                fill="#031436"
                stroke="#031436"
              />
              <text
                x="614"
                y={y + 5}
                fontFamily="ui-sans-serif, system-ui"
                fontSize="13"
                fontWeight="600"
                fill="#ffffff"
              >
                {r.dest}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Mobile — semantic list */}
      <ul className="flex flex-col gap-3 md:hidden" aria-label={DESC}>
        {ROUTES.map((r, i) => (
          <li
            key={r.role}
            data-inview={state}
            style={{ ["--stagger" as string]: i }}
            className="reveal reveal-stagger border border-foreground/20"
          >
            <div className="border-b border-foreground/10 bg-card p-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                Role
              </div>
              <div className="text-sm font-semibold">{r.role}</div>
            </div>
            <div className="bg-primary p-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70">
                Conversion path
              </div>
              <a
                href={r.href}
                className="text-sm font-semibold text-primary-foreground underline underline-offset-4"
              >
                {r.dest}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="sr-only">{DESC}</figcaption>
    </figure>
  );
}

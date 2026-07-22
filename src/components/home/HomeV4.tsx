import {
  Accessibility,
  CalendarCheck,
  CalendarClock,
  Download,
  FileEdit,
  Menu,
  MonitorCheck,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Logo } from "./Logo";
import { SectionKicker } from "./SectionKicker";
import { TraceBadge } from "./TraceBadge";
import { MetricStrip } from "./MetricStrip";
import { engagementIcons, operationsIcons } from "./serviceIcons";
import type { LucideIcon } from "lucide-react";
import {
  primaryServices,
  secondaryServices,
  engagement,
  audience,
  operations,
  footerCols,
  evidenceSnippet,
} from "./shared";

const NAV = [
  { label: "Home", href: "#", active: true },
  { label: "Services", href: "#services" },
  { label: "How We Verify", href: "#methodology" },
  { label: "For Government", href: "#audience" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
  { label: "Book a Call", href: "#book" },
];

// V4-scoped icon set (stroke-only, viewBox 24, weight 1.5)
const V4_SERVICE_ICONS: Record<string, LucideIcon> = {
  "S-01": CalendarClock,
  "S-02": SearchCheck,
  "S-03": FileEdit,
  "S-04": ShieldCheck,
  "S-05": Network,
  "S-06": MonitorCheck,
};

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EvidenceUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 20"
      preserveAspectRatio="none"
      className="absolute left-0 -bottom-2 h-3 w-full text-primary"
    >
      <path
        d="M2 12 C 60 2, 130 2, 200 10 S 250 18, 258 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TriStep() {
  const steps = [
    { label: "Capture", state: "idle" as const },
    { label: "Reconcile", state: "active" as const },
    { label: "Verify", state: "done" as const },
  ];
  return (
    <div className="mt-6" aria-label="Verification pipeline">
      <div className="relative mx-auto max-w-[360px]">
        <div className="absolute left-6 right-6 top-3 h-px bg-foreground/25" aria-hidden="true" />
        <ol className="relative flex items-start justify-between">
          {steps.map((s) => (
            <li key={s.label} className="flex flex-col items-center gap-2">
              <span
                aria-hidden="true"
                className={
                  s.state === "done"
                    ? "grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"
                    : s.state === "active"
                    ? "grid h-6 w-6 place-items-center rounded-full border-2 border-primary bg-background"
                    : "grid h-6 w-6 place-items-center rounded-full border border-foreground/30 bg-background"
                }
              >
                {s.state === "done" ? (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : s.state === "active" ? (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                ) : null}
              </span>
              <span className="text-xs font-medium text-foreground/80">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// C — Deadline coverage diagram (SVG). Monochromatic navy/cobalt/gray.
function DeadlineCoverageDiagram() {
  return (
    <figure
      aria-label="Title II compliance deadlines"
      className="mt-8 border-t border-foreground/15 pt-6"
    >
      <svg
        role="img"
        viewBox="0 0 640 96"
        className="w-full"
        preserveAspectRatio="xMinYMid meet"
      >
        <desc>
          Timeline showing two Title II thresholds. Phase 1 April 26, 2027 for
          entities serving 50,000 or more residents. Phase 2 April 26, 2028 for
          smaller entities and special districts. Runway to Phase 1 is
          approximately 9 months.
        </desc>
        {/* base line */}
        <line x1="16" y1="52" x2="624" y2="52" stroke="currentColor" strokeOpacity="0.25" />
        {/* today marker */}
        <line x1="80" y1="40" x2="80" y2="64" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" />
        <text x="80" y="30" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="currentColor" fillOpacity="0.7">
          TODAY
        </text>
        {/* runway fill to phase 1 */}
        <rect x="80" y="49" width="290" height="6" fill="currentColor" fillOpacity="0.15" />
        {/* phase 1 */}
        <circle cx="370" cy="52" r="8" fill="var(--color-primary)" />
        <text x="370" y="30" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="var(--color-primary)">
          PHASE 1 · 04.26.2027
        </text>
        <text x="370" y="82" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="currentColor" fillOpacity="0.7">
          50,000+ residents
        </text>
        {/* phase 2 */}
        <circle cx="600" cy="52" r="7" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7" />
        <text x="600" y="30" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="1.4" fill="currentColor" fillOpacity="0.7">
          PHASE 2 · 04.26.2028
        </text>
        <text x="600" y="82" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="11" fill="currentColor" fillOpacity="0.7">
          Smaller entities · Special districts
        </text>
      </svg>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
        ≈ 9 months to Phase 1
      </figcaption>
    </figure>
  );
}

// D — Document architecture abstract. Two columns, discrepancy zone.
function DocumentArchitectureAbstract() {
  return (
    <figure
      aria-label="Document structure versus screen reader output"
      className="border border-foreground/15 bg-secondary/40 p-6"
    >
      <svg
        role="img"
        viewBox="0 0 320 200"
        className="w-full"
      >
        <desc>
          Two parallel columns. Left column labeled document structure and tags.
          Right column labeled what the screen reader exposes. A central band
          highlights the discrepancy zone that behavioral verification measures.
        </desc>
        <text x="12" y="18" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4" fill="currentColor" fillOpacity="0.7">DOCUMENT · TAGS</text>
        <text x="308" y="18" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4" fill="currentColor" fillOpacity="0.7">SCREEN READER</text>
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 40 + i * 28;
          const offset = i === 2 ? 60 : i === 3 ? 40 : 6;
          return (
            <g key={i}>
              <rect x="12" y={y} width="120" height="16" fill="currentColor" fillOpacity="0.12" />
              <rect x={188 + (offset > 20 ? 0 : 0)} y={y} width={120 - offset} height="16" fill="var(--color-primary)" fillOpacity={offset > 20 ? 0.25 : 0.85} />
              {offset > 20 ? (
                <line x1={132} y1={y + 8} x2={188} y2={y + 8} stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" />
              ) : (
                <line x1={132} y1={y + 8} x2={188} y2={y + 8} stroke="currentColor" strokeOpacity="0.25" />
              )}
            </g>
          );
        })}
        <rect x="140" y="94" width="40" height="46" fill="var(--color-primary)" fillOpacity="0.1" stroke="var(--color-primary)" strokeDasharray="2 2" />
        <text x="160" y="120" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.2" fill="var(--color-primary)">GAP</text>
      </svg>
      <figcaption className="mt-4 text-xs leading-relaxed text-foreground/80">
        The gap between what the document contains and what assistive technology
        exposes is where behavioral verification lives.
      </figcaption>
    </figure>
  );
}

// A — Methodology flow diagram (5-node preview for home)
function MethodologyFlowDiagram() {
  const nodes = [
    { n: "01", label: "Intake" },
    { n: "02", label: "Static extraction" },
    { n: "03", label: "NVDA capture", emphasis: true },
    { n: "04", label: "Reconciliation" },
    { n: "05", label: "Evidence sufficiency", emphasis: true },
  ];
  return (
    <figure
      aria-label="Behavioral verification methodology, five key stages"
      className="mt-10 border border-foreground/15 bg-card p-6"
    >
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
        <span>Methodology · 9-stage pipeline</span>
        <span className="text-primary">5 key stages shown</span>
      </div>
      <ol className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-2">
        {nodes.map((n, i) => (
          <li
            key={n.n}
            className={`relative border p-4 ${
              n.emphasis
                ? "border-primary bg-primary/[0.06]"
                : "border-foreground/20 bg-background"
            }`}
          >
            <div
              className={`font-mono text-[10px] tracking-[0.22em] ${
                n.emphasis ? "text-primary" : "text-foreground/60"
              }`}
            >
              §{n.n}
            </div>
            <div className="mt-2 text-sm font-semibold leading-tight text-foreground">
              {n.label}
            </div>
            {i < nodes.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute right-[-9px] top-1/2 hidden -translate-y-1/2 md:block"
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3 text-foreground/40">
                  <path
                    d="M2 6h8m-3-3 3 3-3 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function HomeV4() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Nav */}
      <nav aria-label="Primary" className="border-b border-foreground/10 bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
          <a href="/" aria-label="ACT Verified home" className="inline-flex shrink-0">
            <Logo className="h-12 w-auto" />
          </a>
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={
                    item.active
                      ? "text-primary underline decoration-primary decoration-2 underline-offset-[10px]"
                      : "text-foreground/85 hover:text-primary transition-colors"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <a
              href="#book"
              className="btn-gov inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <PhoneIcon />
              Book a Readiness Call
            </a>
          </div>

          {/* Mobile disclosure — <details> is a native, accessible collapse */}
          <details className="lg:hidden">
            <summary
              className="btn-gov inline-flex cursor-pointer list-none items-center gap-2 border border-foreground/25 px-3 py-2 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <Menu strokeWidth={1.75} className="h-4 w-4" aria-hidden="true" />
              Menu
            </summary>
            <div className="absolute inset-x-0 z-40 mt-2 border-y border-foreground/10 bg-white shadow-md">
              <ul className="mx-auto flex max-w-[1240px] flex-col gap-1 px-6 py-4 text-[15px] font-medium">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-2 text-foreground/85 hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="#book"
                    className="btn-gov inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    <PhoneIcon />
                    Book a Readiness Call
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </nav>

      <main id="main">
        {/* Hero */}
        <header style={{ backgroundColor: "#e6ecf5" }}>
          <div className="mx-auto grid max-w-[1240px] grid-cols-12 items-start gap-10 px-6 py-14 lg:py-20">
            <div className="col-span-12 lg:col-span-7">
              {/* Alternate H1 (approved for A/B in client review):
                  <h1>Evidence, not assertions.</h1>
                  <p>Accessibility verification and compliance readiness for Title II.</p> */}
              <h1 className="text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-foreground md:text-[60px] lg:text-[64px]">
                Accessibility verification and compliance readiness for{" "}
                <span className="relative inline-block whitespace-nowrap">
                  Title II
                  <EvidenceUnderline />
                </span>
                .
              </h1>
              <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-foreground/85 md:text-lg">
                Independent audits and remediation from a governmental web accessibility
                consultancy — scoped for Title II readiness, defensible under audit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="btn-gov inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <CalendarCheck strokeWidth={1.75} className="h-4 w-4" aria-hidden="true" />
                  Book a Readiness Call
                </a>
                <a
                  href="#capability"
                  className="btn-gov inline-flex items-center gap-2 border border-foreground/25 bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground/[0.03]"
                >
                  <Download strokeWidth={1.75} className="h-4 w-4" aria-hidden="true" />
                  Download capability statement
                </a>
              </div>

              <DeadlineCoverageDiagram />
            </div>

            <aside
              aria-label="Title II compliance trace"
              className="col-span-12 lg:col-span-5"
            >
              <div className="border border-foreground/15 bg-card p-6 shadow-[0_2px_0_0_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between gap-3">
                  <TraceBadge id="TRACE-001" status="ACTIVE" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
                    Published · 2026-07-16
                  </span>
                </div>
                <div className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  ADA Title II Deadline
                </div>
                <div className="mt-1 font-bold tabular-nums leading-none text-primary text-[clamp(2.25rem,5vw,3.75rem)]">
                  04.26.2027
                </div>
                <div
                  className="mt-5 h-2 w-full overflow-hidden bg-foreground/10"
                  role="progressbar"
                  aria-valuenow={38}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Readiness runway"
                >
                  <div className="h-full bg-primary" style={{ width: "38%" }} />
                </div>
                <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
                  <span>Runway used</span>
                  <span className="tabular-nums">38%</span>
                </div>
              </div>
              <TriStep />
            </aside>
          </div>

          {/* Dark trust strip */}
          <div className="surface-navy">
            <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-5">
              <p className="max-w-[68ch] text-sm leading-relaxed text-background/90">
                A Section 508 <strong className="font-semibold text-background">Trusted Tester-led practice with 10 years</strong> in accessibility compliance across federal, state, and local government.
              </p>
              <div className="flex items-center gap-3">
                <TraceBadge id="TRACE-002" status="VERIFIED" variant="dark" />
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-background/40 px-4 py-1.5 text-xs font-medium text-background">
                  <Sparkles aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5 text-accent" />
                  AI-assisted <span aria-hidden="true" className="text-background/40">|</span> Human-verified.
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Cobalt urgency band — replaces the old grey stats strip (fix 1.4 + G runway visual) */}
        <MetricStrip
          tone="cobalt"
          topLabel="Urgent · Runway to Phase 1 shrinks daily"
          ariaLabel="Practice at a glance — runway metrics"
          metrics={[
            { value: "≈9 mo", label: "Runway", note: "To April 26, 2027 · Phase 1" },
            { value: "AA", label: "Standard", note: "WCAG 2.1 conformance baseline" },
            { value: "6", label: "Phases", note: "Scoped engagement model" },
          ]}
        />

        <section aria-labelledby="engagement-v4" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 pt-16">
            <div className="mb-8">
              <SectionKicker n="02" label="Engagement model · 6 phases" tone="primary" />
              <h2 id="engagement-v4" className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
                How a Title II readiness engagement runs.
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px]">
            <ol className="grid grid-cols-2 border-l border-foreground/20 md:grid-cols-3 lg:grid-cols-6">
              {engagement.map((step, i) => {
                const Icon = engagementIcons[step.n];
                return (
                  <li key={step.n} className={`border-r border-b border-foreground/20 p-6 ${i === 0 ? "bg-card" : ""}`}>
                    <div className="mb-4 flex items-start justify-between">
                      <div className={`num-display-sm tabular-nums ${i === 0 ? "text-primary" : "text-foreground/35"}`}>{step.n}</div>
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className={`h-5 w-5 ${i === 0 ? "text-primary" : "text-foreground/35"}`}
                        />
                      ) : null}
                    </div>
                    <h3 className="text-sm font-semibold">{step.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/80">{step.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="deadline-reality-v4"
          id="deadline"
          className="border-b border-foreground/10"
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-24">
            <div className="col-span-12 lg:col-span-5">
              <SectionKicker n="03" label="Deadline reality" tone="primary" />
              <h2 id="deadline-reality-v4" className="mt-3 text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                The deadline is not optional, and the backlog is bigger than it looks.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-foreground/85">
                Most public entities are sitting on backlogs of public-facing PDFs that often run into the thousands, plus web content and mobile apps that were never audited against WCAG 2.1 AA. The runway to April 2027 is shorter than it reads on the calendar.
              </p>
              <div className="mt-6 border-l-2 border-primary bg-secondary/60 px-6 py-3 font-mono text-[11px] leading-relaxed text-foreground/80">
                Last reviewed: 2026-07-16 · Informational, not legal advice.<br />
                Source: ADA.gov / DOJ (per brief §6A)
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              {/* Stacked on mobile (single column), 2×2 on md+ */}
              <dl className="grid grid-cols-1 gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2">
                {[
                  { label: "Standard", value: "AA", note: "WCAG 2.1 · mandatory baseline for all digital assets.", big: true },
                  { label: "Runway", value: "9 mo", note: "From today to the Phase 1 deadline of April 26, 2027.", big: true },
                  { label: "Coverage", value: "Web · App · PDF", note: "Third-party content and vendor platforms included." },
                  { label: "Evidence", value: "Behavioral", note: "Native screen-reader verification, not scanner-only." },
                ].map((cell) => (
                  <div key={cell.label} className="bg-card p-6">
                    <dt className="eyebrow text-foreground/70">{cell.label}</dt>
                    {cell.big ? (
                      <dd className="mt-3 num-display-md text-foreground tabular-nums">{cell.value}</dd>
                    ) : (
                      <dd className="mt-2 text-2xl font-medium tracking-tight tabular-nums">{cell.value}</dd>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{cell.note}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section
          id="services"
          aria-labelledby="services-v4"
          className="border-b border-foreground/10 bg-secondary/30"
        >
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
              <div>
                <SectionKicker n="04" label="Services · 4 primary + 2 Phase 2" tone="primary" />
                <h2 id="services-v4" className="mt-2 max-w-[24ch] text-balance text-3xl font-medium tracking-tight md:text-4xl">
                  Six services scoped for public-sector accessibility work.
                </h2>
              </div>
              <a href="#" className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline underline-offset-4 decoration-2">All services →</a>
            </div>

            {/* Primary services — real cards with border, TRACE ID + icon */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {primaryServices.map((s, i) => {
                const Icon = V4_SERVICE_ICONS[s.id];
                return (
                  <article
                    key={s.id}
                    className="flex flex-col border border-foreground/20 bg-card p-6 transition-colors hover:border-primary/60"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="font-mono text-[10px] tracking-[0.22em] text-primary">{s.id}</div>
                      {Icon ? (
                        <Icon aria-hidden="true" strokeWidth={1.5} className="h-5 w-5 text-primary" />
                      ) : null}
                    </div>
                    <TraceBadge
                      id={`TRACE-1${String(i + 1).padStart(2, "0")}`}
                      status="ACTIVE"
                      className="mb-4 self-start"
                    />
                    <h3 className="text-lg font-semibold leading-tight text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{s.desc}</p>
                  </article>
                );
              })}
            </div>

            {/* Phase 2 separator */}
            <div className="mt-14 mb-6 flex items-center gap-4">
              <span className="rule-heavy flex-1" />
              <span className="inline-flex items-center gap-2 bg-foreground px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-background">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                Phase 2 · Roadmap
              </span>
              <span className="rule-heavy flex-1" />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {secondaryServices.map((s, i) => {
                const Icon = V4_SERVICE_ICONS[s.id];
                return (
                  <article
                    key={s.id}
                    className="relative border border-dashed border-foreground/30 bg-background/70 p-6"
                  >
                    <span className="absolute right-4 top-4 bg-primary px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground">
                      Phase 2
                    </span>
                    <div className="flex items-start gap-3">
                      {Icon ? (
                        <Icon aria-hidden="true" strokeWidth={1.5} className="mt-0.5 h-6 w-6 text-foreground/70" />
                      ) : null}
                      <div>
                        <div className="mb-2 font-mono text-[10px] tracking-[0.22em] text-foreground/70">{s.id}</div>
                        <h3 className="text-lg font-semibold text-foreground/90">{s.title}</h3>
                      </div>
                    </div>
                    <TraceBadge
                      id={`TRACE-2${String(i + 1).padStart(2, "0")}`}
                      status="PENDING"
                      className="mt-4"
                    />
                    <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-foreground/80">{s.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="methodology"
          className="border-b border-foreground/10"
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-24">
            <div className="col-span-12 lg:col-span-7">
              <SectionKicker n="05" label="Methodology preview" tone="primary" />
              <h2 className="mt-2 flex items-center gap-3 text-3xl font-medium tracking-tight md:text-4xl">
                <Accessibility aria-hidden="true" strokeWidth={1.5} className="h-8 w-8 text-primary" />
                Behavioral verification.
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/85">
                Scanners passed. The user still couldn't use it. That gap is what we document — with reproducible finding IDs and native screen-reader evidence.
              </p>

              <MethodologyFlowDiagram />

              <figure aria-label="Excerpt from a verification finding record" className="mt-8 border border-foreground/15 bg-foreground text-background">
                <figcaption className="flex items-center justify-between border-b border-background/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-background/70">
                  <span className="flex items-center gap-2">
                    <Terminal aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5" />
                    Finding · F-2027-0142
                  </span>
                  <span>NVDA · Firefox · Win 11</span>
                </figcaption>
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed text-background/90">{evidenceSnippet}</pre>
              </figure>
            </div>

            <aside
              id="audience"
              aria-labelledby="audience-v4"
              className="col-span-12 lg:col-span-5 lg:border-l lg:border-foreground/10 lg:pl-8"
            >
              <SectionKicker n="06" label="Who we help" tone="primary" />
              <h3 id="audience-v4" className="mt-2 text-2xl font-medium tracking-tight">
                Built for procurement-driven buyers.
              </h3>
              <dl className="mt-8 divide-y divide-foreground/15">
                {audience.map((item) => (
                  <div key={item.role} className="grid grid-cols-[140px_1fr] gap-4 py-4">
                    <dt className="text-sm font-semibold text-foreground">{item.role}</dt>
                    <dd className="text-sm text-foreground/85">{item.desc}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <DocumentArchitectureAbstract />
              </div>
            </aside>
          </div>
        </section>

        <section aria-labelledby="operations-v4" className="surface-navy">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10">
              <SectionKicker n="07" label="Operations · Capability Statement" tone="on-dark" className="text-accent" />
              <h2 id="operations-v4" className="mt-3 type-h2">Practice-level operating facts.</h2>
            </div>
            <dl className="grid grid-cols-1 gap-px bg-background/15 border border-background/15 md:grid-cols-3">
              {operations.map((cell) => {
                const Icon = operationsIcons[cell.label];
                return (
                  <div key={cell.label} className="surface-navy p-8">
                    <dt className="flex items-center gap-2 eyebrow text-background/80">
                      {Icon ? (
                        <Icon aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-accent" />
                      ) : null}
                      {cell.label}
                    </dt>
                    <dd className="mt-3 text-xl font-medium tracking-tight break-words">{cell.value}</dd>
                    <p className="mt-3 text-sm leading-relaxed text-background/90">{cell.desc}</p>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>

        <section id="book" aria-labelledby="cta-v4" className="surface-navy dot-grid">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-20">
            <div className="col-span-12 lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Book a Readiness Call</div>
              <h2 id="cta-v4" className="mt-3 max-w-[24ch] text-balance text-3xl font-semibold leading-tight tracking-tight text-background md:text-4xl">
                Get a defensible Title II readiness roadmap.
              </h2>
              <p className="mt-4 max-w-[52ch] text-base font-medium text-background/90">
                No silent passes. No hidden uncertainty. A scoped read of what's exposed today and what has to change before April 2027.
              </p>
            </div>
            <div className="col-span-12 flex flex-col justify-end gap-3 lg:col-span-4 lg:items-end">
              <a
                href="#"
                className="btn-gov inline-flex items-center justify-center gap-2 bg-background px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <CalendarCheck aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Book a Readiness Call
              </a>
              <a
                id="capability"
                href="#"
                className="btn-gov inline-flex items-center justify-center gap-2 border border-background/40 px-6 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Download Capability Statement
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/50 border-t border-foreground/10">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            {footerCols.map((col) => (
              <div key={col.head}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">{col.head}</h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-foreground/85 decoration-primary decoration-1 underline-offset-4 transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
            <span>ACT Verified — a Zenzo LLC consulting practice</span>
            <span>WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

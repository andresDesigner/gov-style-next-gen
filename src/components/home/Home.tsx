import { Accessibility, Download, Phone, Sparkles, Terminal } from "lucide-react";
import { Logo } from "./Logo";
import { SectionKicker } from "./SectionKicker";
import { TraceBadge } from "./TraceBadge";
import { serviceIcons, engagementIcons, operationsIcons } from "./serviceIcons";
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
  { label: "Home", active: true },
  { label: "Services" },
  { label: "How We Verify" },
  { label: "For Government" },
  { label: "Resources" },
  { label: "About" },
];

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
              <span className="text-xs font-medium text-foreground/70">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Home() {
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
        <div className="mx-auto grid max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4">
          <a href="/" aria-label="ACT Verified home" className="inline-flex shrink-0">
            <Logo className="h-12 w-auto" />
          </a>
          <ul className="hidden lg:flex items-center justify-center gap-9 text-[15px] font-medium">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
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
          <a
            href="#book"
            className="btn-gov inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
            Book a Readiness Call
          </a>
        </div>
      </nav>

      <main id="main">
        {/* Hero */}
        <header style={{ backgroundColor: "#e6ecf5" }}>
          <div className="mx-auto grid max-w-[1240px] grid-cols-12 items-center gap-10 px-6 py-16 lg:py-20">
            <div className="col-span-12 lg:col-span-7">
              <h1
                className="text-balance font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                Accessibility verification and compliance readiness for Title II.
              </h1>
              <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-foreground/70">
                Independent audits and remediation from a governmental web accessibility
                consultancy — scoped for Title II readiness, defensible under audit.
              </p>
              <DeadlineCoverageDiagram />
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="btn-gov inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
                  Book a Readiness Call
                </a>
                <a
                  href="#capability"
                  className="btn-gov inline-flex items-center gap-2 border-[1.5px] border-foreground/80 bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04]"
                >
                  <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                  Download capability statement
                </a>
              </div>
            </div>

            <aside
              aria-label="Title II compliance trace"
              className="col-span-12 lg:col-span-5"
            >
              <div className="border border-foreground/15 bg-card p-6 shadow-[0_2px_0_0_rgba(15,23,42,0.06)]">
                <div className="inline-flex items-center gap-2 bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Trace-001 · Status: Active
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
                <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/55">
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
              <p className="max-w-[68ch] text-sm leading-relaxed text-background/85">
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

        {/* Overview transition strip — soften navy → paper */}
        <section aria-label="Overview" className="border-b border-foreground/10 bg-secondary/50">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-4">
            <SectionKicker n="01" label="Overview · What follows" tone="primary" />
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Scale → Engagement → Reality → Services → Methodology
            </div>
          </div>
        </section>

        {/* ---- Body reused from V2 ---- */}

        <section aria-label="Scale of the deadline" className="surface-cobalt">
          <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8 px-6 py-10">
            {[
              { k: "Residents served", v: "50k+", n: "Phase 1 threshold" },
              { k: "Deadline", v: "2027", n: "Phase 1 · April 26" },
              { k: "Standard", v: "AA", n: "WCAG 2.1 conformance" },
            ].map((m) => (
              <div key={m.k}>
                <div className="eyebrow text-primary-foreground/70">{m.k}</div>
                <div className="mt-2 num-display-sm tabular-nums">{m.v}</div>
                <div className="mt-1 eyebrow text-primary-foreground/60">{m.n}</div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="engagement-v4" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 pt-16">
            <div className="mb-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Engagement Model · 6 phases</div>
              <h2 id="engagement-v4" className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">How a Title II readiness engagement runs.</h2>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px]">
            <ol className="grid grid-cols-2 border-l border-foreground/20 md:grid-cols-3 lg:grid-cols-6">
              {engagement.map((step, i) => {
                const Icon = engagementIcons[step.n];
                return (
                  <li key={step.n} className={`border-r border-b border-foreground/20 p-6 ${i === 0 ? "bg-card" : ""}`}>
                    <div className="mb-4 flex items-start justify-between">
                      <div className={`num-display-sm tabular-nums ${i === 0 ? "text-primary" : "text-foreground/25"}`}>{step.n}</div>
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className={`h-5 w-5 ${i === 0 ? "text-primary" : "text-foreground/25"}`}
                        />
                      ) : null}
                    </div>
                    <h3 className="text-sm font-semibold">{step.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/65">{step.desc}</p>
                  </li>
                );
              })}
            </ol>

          </div>
        </section>

        <section aria-labelledby="deadline-reality-v4" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-24">
            <div className="col-span-12 lg:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Deadline Reality</div>
              <h2 id="deadline-reality-v4" className="mt-3 text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                The deadline is not optional, and the backlog is bigger than it looks.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-foreground/75">
                Most public entities are sitting on backlogs of public-facing PDFs that often run into the thousands, plus web content and mobile apps that were never audited against WCAG 2.1 AA. The runway to April 2027 is shorter than it reads on the calendar.
              </p>
              <div className="mt-6 border-l-2 border-primary bg-secondary/60 px-6 py-3 font-mono text-[11px] leading-relaxed text-foreground/70">
                Last reviewed: 2026-07-16 · Informational, not legal advice.<br />
                Source: ADA.gov / DOJ (per brief §6A)
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-foreground/20 border border-foreground/20">
                {[
                  { label: "Standard", value: "AA", note: "WCAG 2.1 · mandatory baseline for all digital assets.", big: true },
                  { label: "Runway", value: "9 mo", note: "From today to the Phase 1 deadline of April 26, 2027.", big: true },
                  { label: "Coverage", value: "Web · App · PDF", note: "Third-party content and vendor platforms included." },
                  { label: "Evidence", value: "Behavioral", note: "Native screen-reader verification, not scanner-only." },
                ].map((cell) => (
                  <div key={cell.label} className="bg-card p-6">
                    <div className="eyebrow text-foreground/50">{cell.label}</div>
                    {cell.big ? (
                      <div className="mt-3 num-display-md text-foreground tabular-nums">{cell.value}</div>
                    ) : (
                      <div className="mt-2 text-2xl font-medium tracking-tight tabular-nums">{cell.value}</div>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{cell.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-v4" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Services · 4 primary + 2 Phase 2</div>
                <h2 id="services-v4" className="mt-2 max-w-[24ch] text-balance text-3xl font-medium tracking-tight md:text-4xl">Six services scoped for public-sector accessibility work.</h2>
              </div>
              <a href="#" className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline underline-offset-4 decoration-2">All services →</a>
            </div>
            {/* Node connector (sutil, decorativo) — iconos por servicio */}
            <div aria-hidden="true" className="relative mb-4 hidden h-8 lg:block">
              <div className="absolute left-16 right-16 top-1/2 h-px bg-foreground/20" />
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-8">
                {primaryServices.map((s) => {
                  const Icon = serviceIcons[s.id];
                  return (
                    <span
                      key={s.id}
                      className="grid h-7 w-7 place-items-center rounded-full border border-primary/40 bg-background"
                    >
                      {Icon ? (
                        <Icon strokeWidth={1.5} className="h-3.5 w-3.5 text-primary" />
                      ) : null}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-4">
              {primaryServices.map((s, i) => {
                const Icon = serviceIcons[s.id];
                return (
                  <article key={s.id} className="bg-card p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="font-mono text-[10px] tracking-widest text-primary">{s.id}</div>
                      {Icon ? (
                        <Icon aria-hidden="true" strokeWidth={1.5} className="h-5 w-5 text-primary" />
                      ) : null}
                    </div>
                    <TraceBadge
                      id={`TRACE-1${String(i + 1).padStart(2, "0")}`}
                      status={i === 0 ? "ACTIVE" : i === 1 ? "PENDING" : "VERIFIED"}
                      className="mb-4"
                    />
                    <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {secondaryServices.map((s, i) => {
                const Icon = serviceIcons[s.id];
                return (
                  <article key={s.id} className="border border-dashed border-foreground/25 bg-background p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        {Icon ? (
                          <Icon aria-hidden="true" strokeWidth={1.5} className="mt-0.5 h-6 w-6 text-foreground/60" />
                        ) : null}
                        <div>
                          <div className="mb-2 font-mono text-[10px] tracking-widest text-foreground/50">{s.id}</div>
                          <h3 className="text-lg font-semibold">{s.title}</h3>
                        </div>
                      </div>
                      <TraceBadge
                        id={`TRACE-2${String(i + 1).padStart(2, "0")}`}
                        status="PENDING"
                      />
                    </div>
                    <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        <section className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-24">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Methodology Preview</div>
              <h2 className="mt-2 flex items-center gap-3 text-3xl font-medium tracking-tight md:text-4xl">
                <Accessibility aria-hidden="true" strokeWidth={1.5} className="h-8 w-8 text-primary" />
                Behavioral Verification.
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/80">
                We tell you what's exposed to assistive technology — not just what's inside the document. Static analysis and automated scanners are valuable first steps; behavioral verification covers what they are not designed to detect.
              </p>
              <figure aria-label="Excerpt from a verification finding record" className="mt-8 border border-foreground/15 bg-foreground text-background">
                <figcaption className="flex items-center justify-between border-b border-background/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-background/60">
                  <span className="flex items-center gap-2">
                    <Terminal aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5" />
                    Finding · F-2027-0142
                  </span>
                  <span>NVDA · Firefox · Win 11</span>
                </figcaption>
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed text-background/90">{evidenceSnippet}</pre>
              </figure>
            </div>

            <aside aria-labelledby="audience-v4" className="col-span-12 lg:col-span-5 lg:border-l lg:border-foreground/10 lg:pl-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Who We Help</div>
              <h3 id="audience-v4" className="mt-2 text-2xl font-medium tracking-tight">Built for procurement-driven buyers.</h3>
              <dl className="mt-8 divide-y divide-foreground/10">
                {audience.map((item) => (
                  <div key={item.role} className="grid grid-cols-[140px_1fr] gap-4 py-4">
                    <dt className="text-sm font-semibold">{item.role}</dt>
                    <dd className="text-sm text-foreground/70">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section aria-labelledby="operations-v4" className="surface-navy">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10">
              <div className="eyebrow text-accent">Operations · Capability Statement</div>
              <h2 id="operations-v4" className="mt-3 type-h2">Practice-level operating facts.</h2>
            </div>
            <dl className="grid grid-cols-1 gap-px bg-background/15 border border-background/15 md:grid-cols-3">
              {operations.map((cell) => {
                const Icon = operationsIcons[cell.label];
                return (
                  <div key={cell.label} className="surface-navy p-8">
                    <dt className="flex items-center gap-2 eyebrow text-background/75">
                      {Icon ? (
                        <Icon aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-accent" />
                      ) : null}
                      {cell.label}
                    </dt>
                    <dd className="mt-3 text-xl font-medium tracking-tight break-words">{cell.value}</dd>
                    <p className="mt-3 text-sm leading-relaxed text-background/85">{cell.desc}</p>
                  </div>
                );
              })}
            </dl>

          </div>
        </section>

        <section id="book" aria-labelledby="cta-v4" className="bg-foreground text-background">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-20">
            <div className="col-span-12 lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Book a Readiness Call</div>
              <h2 id="cta-v4" className="mt-3 max-w-[24ch] text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">Get a defensible Title II readiness roadmap.</h2>
              <p className="mt-4 max-w-[52ch] text-base text-background/70">No silent passes. No hidden uncertainty. A scoped read of what's exposed today and what has to change before April 2027.</p>
            </div>
            <div className="col-span-12 flex flex-col justify-end gap-3 lg:col-span-4 lg:items-end">
              <a href="#" className="btn-gov inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
                Book a Readiness Call
              </a>
              <a id="capability" href="#" className="btn-gov inline-flex items-center justify-center gap-2 border-[1.5px] border-background/70 px-6 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-background/10">
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
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{col.head}</h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-foreground/75 decoration-primary decoration-1 underline-offset-4 transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            <span>ACT Verified — a Zenzo LLC consulting practice</span>
            <span>WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

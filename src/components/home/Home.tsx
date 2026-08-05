import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, CalendarClock, Download, Layers, Phone, ScanEye, Sparkles } from "lucide-react";
import { DeadlineSection } from "./DeadlineSection";
import { Illustration } from "./Illustration";
import { useInView } from "@/hooks/use-in-view";
import ilHero from "@/assets/il-01-hero.png";
import ilVerify from "@/assets/il-02-verify.png";
import ilDeadline from "@/assets/il-05-deadline.png";
import { EvidenceArtifactCard } from "./EvidenceArtifactCard";
import { DocumentArchitectureDiagram } from "./DocumentArchitectureDiagram";
import { SectionKicker } from "./SectionKicker";
import { TraceBadge } from "./TraceBadge";
import { engagementIcons, operationsIcons } from "./serviceIcons";
import { serviceIconMap, IconAccessibilityTraditional } from "./ServiceIcon";
import { PhaseScopeDiagram } from "./PhaseScopeDiagram";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  primaryServices,
  secondaryServices,
  engagement,
  audience,
  operations,
  footerCols,
  evidenceFindingF20270142,
} from "./shared";


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

function TriStep({ compact = false }: { compact?: boolean }) {
  const steps = [
    { label: "Capture", state: "idle" as const },
    { label: "Reconcile", state: "active" as const },
    { label: "Verify", state: "done" as const },
  ];
  return (
    <div className={compact ? "" : "mt-5"} aria-label="Verification pipeline">
      <div className="relative mx-auto w-full">
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

function RevealGrid({
  className,
  children,
}: {
  className?: string;
  children: (state: "true" | "false") => ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {children(inView ? "true" : "false")}
    </div>
  );
}

function ProgressMeter({ value, compact = false }: { value: number; compact?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={compact ? "" : "mt-5"}>
      <div
        className="h-1.5 w-full overflow-hidden bg-foreground/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Engagement progress"
      >
        <div
          className="grow-x h-full bg-primary"
          data-inview={inView ? "true" : "false"}
          style={{ ["--target-w" as string]: `${value}%` }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/55">
        <span>Progress</span>
        <span className="tabular-nums">{value}%</span>
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

      <SiteHeader />


      <main id="main">
        {/* Hero */}
        <header style={{ backgroundColor: "#e6ecf5" }}>
          <div className="mx-auto grid max-w-[1240px] grid-cols-12 items-center gap-10 px-6 py-16 lg:py-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-foreground/60">
                Published · 2026-07-16
              </div>
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

            <div className="relative col-span-12 lg:col-span-5">
              <Illustration
                src={ilHero}
                alt="Two accessibility specialists reviewing an audit dashboard together."
                width={1200}
                height={1008}
                eager
                blob={false}
                className="mx-auto max-w-[420px] lg:max-w-none"
              />

              <aside
                aria-label="Engagement status preview"
                className="relative z-10 mx-auto -mt-12 max-w-[340px] lg:absolute lg:bottom-[-1.5rem] lg:left-[-1.5rem] lg:mt-0 lg:max-w-[460px]"
              >
                <div className="border border-foreground/15 bg-card p-5 shadow-[0_10px_30px_-12px_rgba(3,20,54,0.35)]">
                  <div className="inline-flex items-center gap-2 bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Trace-001 · Active
                  </div>
                  <div className="mt-4 text-base font-semibold tracking-tight text-foreground">
                    Engagement Status Preview
                  </div>
                  <TriStep />
                  <ProgressMeter value={38} />
                </div>
              </aside>
            </div>

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

        <DeadlineSection />


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


        <section aria-labelledby="engagement-v4" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 pt-16">
            <div className="mb-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Engagement Model · 6 phases</div>
              <h2 id="engagement-v4" className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">How a Title II readiness engagement runs.</h2>
            </div>
          </div>
          <div className="mx-auto max-w-[1200px]">
            <RevealGrid className="block">
              {(state) => (
                <ol className="grid grid-cols-2 border-l border-foreground/20 md:grid-cols-3 lg:grid-cols-6">
                  {engagement.map((step, i) => {
                    const Icon = engagementIcons[step.n];
                    return (
                      <li
                        key={step.n}
                        data-inview={state}
                        style={{ ["--stagger" as string]: i }}
                        className={`reveal reveal-stagger group border-r border-b border-foreground/20 p-6 motion-safe:transition-colors motion-safe:duration-300 hover:bg-card ${i === 0 ? "bg-card" : ""}`}
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div className={`num-display-sm tabular-nums transition-colors duration-300 ${i === 0 ? "text-primary" : "text-foreground/25 group-hover:text-primary"}`}>{step.n}</div>
                          {Icon ? (
                            <span
                              aria-hidden="true"
                              data-inview={state}
                              style={{ ["--stagger" as string]: i }}
                              className={`reveal-icon grid h-12 w-12 shrink-0 place-items-center transition-colors duration-300 ${
                                i === 0 ? "text-signal" : "text-foreground/35 group-hover:text-signal"
                              }`}
                            >
                              <Icon strokeWidth={1.75} className="h-7 w-7" />
                            </span>
                          ) : null}
                        </div>

                        <h3 className="text-sm font-semibold">{step.label}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-foreground/65">{step.desc}</p>
                      </li>
                    );
                  })}
                </ol>
              )}
            </RevealGrid>


          </div>
        </section>

        <section aria-labelledby="deadline-reality-v4" className="overflow-x-hidden border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              {/* Left column: narrative */}
              <div className="lg:col-span-5">
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

              {/* Right column: data card + illustration, side by side */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto]">
                  <div className="border border-foreground/20 bg-card">
                    {[
                      { label: "Standard", icon: BadgeCheck, value: "AA", note: "WCAG 2.1 · mandatory baseline for all digital assets." },
                      { label: "Runway", icon: CalendarClock, value: "9 mo", note: "From today to the Phase 1 deadline of April 26, 2027." },
                      { label: "Coverage", icon: Layers, value: "Web · App · PDF", note: "Third-party content and vendor platforms included." },
                      { label: "Evidence", icon: ScanEye, value: "Behavioral", note: "Native screen-reader verification, not scanner-only." },
                    ].map((cell, idx, arr) => (
                      <div
                        key={cell.label}
                        className={`flex items-start gap-4 px-4 py-3 ${idx !== arr.length - 1 ? "border-b border-foreground/20" : ""}`}
                      >
                        <div className="w-20 shrink-0 pt-1">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                            {cell.label}
                          </div>
                          <cell.icon
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="mt-2 h-7 w-7 text-accent"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-lg font-bold tracking-tight text-foreground tabular-nums sm:text-xl">
                            {cell.value}
                          </div>
                          <p className="mt-0.5 max-w-[36ch] text-sm leading-snug text-foreground/70">{cell.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-center md:justify-end">
                    <Illustration
                      src={ilDeadline}
                      alt=""
                      width={1008}
                      height={1008}
                      accents={false}
                      blob={false}
                      className="max-w-[200px] md:max-w-[240px]"
                    />
                  </div>
                </div>
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
              <Link to="/services" className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline underline-offset-4 decoration-2">All services →</Link>
            </div>
            {/* Node connector (sutil, decorativo) — iconos por servicio */}
            <RevealGrid className="relative mb-6 hidden h-12 lg:block">
              {(state) => (
                <div aria-hidden="true">
                  <div className="absolute left-16 right-16 top-1/2 h-px overflow-hidden">
                    <span data-inview={state} className="rail-grow block h-px w-full origin-left bg-foreground/20" />
                  </div>
                  <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-8">
                    {primaryServices.map((s, i) => {
                      const Icon = serviceIconMap[s.id];
                      return (
                        <span
                          key={s.id}
                          data-inview={state}
                          style={{ ["--stagger" as string]: i }}
                          className="reveal-icon grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-signal/45 bg-background shadow-[0_0_0_5px_color-mix(in_oklab,var(--signal)_9%,transparent)]"
                        >
                          {Icon ? (
                            <Icon strokeWidth={1.75} className="h-[22px] w-[22px] text-signal" />
                          ) : null}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </RevealGrid>
            <RevealGrid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {(state) =>
                primaryServices.map((s, i) => {
                  const Icon = serviceIconMap[s.id];
                  const status = i === 0 ? "ACTIVE" : i === 1 ? "PENDING" : "VERIFIED";
                  const statusColor =
                    status === "PENDING" ? "text-foreground/45" : "text-accent";
                  return (
                    <article
                      key={s.id}
                      data-inview={state}
                      style={{ ["--stagger" as string]: i }}
                      className="reveal reveal-stagger group relative flex flex-col overflow-hidden rounded-xl border border-foreground/15 bg-card p-6 shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-bold leading-none tracking-tighter text-foreground/[0.045] transition-colors duration-300 group-hover:text-primary/10"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {Icon ? (
                        <span
                          aria-hidden="true"
                          data-inview={state}
                          style={{ ["--stagger" as string]: i }}
                          className="reveal-icon relative mb-4 grid h-14 w-14 place-items-center text-signal motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5"
                        >
                          <Icon strokeWidth={1.75} className="h-8 w-8" />
                        </span>
                      ) : null}

                      <div className="relative mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-foreground/60">
                        <span>
                          TRACE-1{String(i + 1).padStart(2, "0")}
                          <span aria-hidden="true" className="mx-1.5 text-foreground/30">·</span>
                          <span className={statusColor}>STATUS: {status}</span>
                        </span>
                      </div>


                      <div className="relative font-mono text-[10px] tracking-widest text-primary">{s.id}</div>
                      <h3 className="relative mt-2 text-lg font-semibold leading-tight">{s.title}</h3>
                      <p className="relative mt-3 text-sm leading-relaxed text-foreground/75">{s.desc}</p>
                    </article>
                  );
                })
              }
            </RevealGrid>


            {/* Divider between primary & Phase 2 */}
            <div className="mt-10 border-t border-foreground/15 pt-8">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-foreground/60">
                Phase 2 — Upcoming
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {secondaryServices.map((s, i) => {
                  const Icon = serviceIconMap[s.id];
                  return (
                    <article
                      key={s.id}
                      className="relative flex flex-col rounded-xl border border-dashed border-foreground/30 bg-card p-6 shadow-sm motion-safe:transition-shadow motion-safe:hover:shadow-md"
                    >
                      <span className="absolute right-4 top-4 inline-flex items-center bg-primary px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                        Phase 2
                      </span>
                      <div className="mb-3 flex items-start gap-4 pr-24">
                        {Icon ? (
                          <span
                            aria-hidden="true"
                            className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-foreground/[0.06] text-foreground/60"
                          >
                            <Icon strokeWidth={1.75} className="h-8 w-8" />
                          </span>
                        ) : null}
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] tracking-widest text-foreground/50">{s.id}</div>
                          <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                        </div>
                      </div>

                      <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-foreground/75">{s.desc}</p>
                      <div className="mt-4 font-mono text-xs tracking-widest text-foreground/55">
                        TRACE-2{String(i + 1).padStart(2, "0")}
                        <span aria-hidden="true" className="mx-1.5 text-foreground/30">·</span>
                        <span className="text-foreground/45">STATUS: PENDING</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <PhaseScopeDiagram />

          </div>

        </section>

        <section className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-24">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Methodology Preview</div>
              <h2 className="mt-2 flex items-center gap-3 text-3xl font-medium tracking-tight md:text-4xl">
                <IconAccessibilityTraditional className="h-8 w-8 text-primary" />
                Behavioral Verification.
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/80">
                We tell you what's exposed to assistive technology — not just what's inside the document. Static analysis and automated scanners are valuable first steps; behavioral verification covers what they are not designed to detect.
              </p>
              <DocumentArchitectureDiagram />
              <EvidenceArtifactCard
                className="mt-8"
                caption="Excerpt from a verification finding record"
                {...evidenceFindingF20270142}
                fields={evidenceFindingF20270142.fields.map((f) => ({ ...f }))}
              />

            </div>

            <aside aria-labelledby="audience-v4" className="relative isolate col-span-12 lg:col-span-5 lg:border-l lg:border-foreground/10 lg:pl-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">Who We Help</div>
              <h3 id="audience-v4" className="mt-2 text-2xl font-medium tracking-tight">Built for procurement-driven buyers.</h3>
              <div className="relative mt-6 overflow-hidden">
                <Illustration
                  src={ilVerify}
                  alt=""
                  width={1008}
                  height={1008}
                  blob={false}
                  className="max-w-[320px]"
                />
              </div>

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
                    <dt className="flex items-center gap-2 eyebrow text-background/90">
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

        <section id="book" aria-labelledby="cta-v4" className="dot-grid-dark bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-20">
            <div className="col-span-12 lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Book a Readiness Call</div>
              <h2 id="cta-v4" className="mt-3 max-w-[24ch] text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">Get a defensible Title II readiness roadmap.</h2>
              <p className="mt-4 max-w-[52ch] text-base font-medium text-primary-foreground/95">No silent passes. No hidden uncertainty. A scoped read of what's exposed today and what has to change before April 2027.</p>
            </div>
            <div className="col-span-12 flex flex-col justify-end gap-3 lg:col-span-4 lg:items-end">
              <a href="#" className="btn-gov inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
                Book a Readiness Call
              </a>
              <a id="capability" href="#" className="btn-gov inline-flex items-center justify-center gap-2 border-[1.5px] border-primary-foreground/90 px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Download Capability Statement
              </a>
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />

    </div>
  );
}

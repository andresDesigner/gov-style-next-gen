import {
  BadgeCheck,
  Calendar,
  CalendarCheck,
  Clock,
  Download,
  Eye,
  Layers,
  Ruler,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
  Accessibility,
} from "lucide-react";
import { Logo } from "./Logo";
import { SectionKicker } from "./SectionKicker";
import { MetricStrip } from "./MetricStrip";
import { LabValueTable } from "./LabValueRow";
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


export function HomeV2() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      <div className="border-b border-foreground/10 bg-secondary/60">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
          <span>A Zenzo LLC consulting practice</span>
          <div className="flex items-center gap-4">
            <span aria-current="true" className="text-foreground">EN</span>
            <span aria-hidden="true" className="text-foreground/20">/</span>
            <a href="#" className="hover:text-foreground hover:underline underline-offset-4">ES</a>
          </div>
        </div>
      </div>

      <nav aria-label="Primary" className="border-b border-foreground/10 bg-background">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:h-16 sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-between">
          <div className="flex min-w-0 items-center gap-8">
            <a href="/" className="flex items-center shrink-0">
              <Logo className="h-9 w-auto" />
            </a>
            <ul className="hidden lg:flex gap-6 text-sm font-medium">
              {["Services", "How We Verify", "For Government", "Resources", "About"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/80 decoration-primary decoration-1 underline-offset-[6px] transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#book" className="btn-gov shrink-0 bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary">
            Book a Readiness Call
          </a>
        </div>
      </nav>

      <main id="main">
        <header className="border-b border-foreground/10 bg-secondary/40">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-16 lg:py-24">
            <div className="col-span-12 lg:col-span-8">
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Accessibility Verification · Compliance Readiness
              </div>
              <h1 className="max-w-[20ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                Accessibility verification and compliance readiness for ADA Title II deadlines.
              </h1>
              <p className="mt-6 max-w-[56ch] text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
                ACT Verified prepares public-sector and regulated organizations for the Title II deadlines of April 26, 2027 and April 26, 2028 — with findings you can defend to auditors, legal counsel, and procurement reviewers.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#book" className="btn-gov inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary">
                  <CalendarCheck aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                  Book a Readiness Call
                </a>
                <a href="#capability" className="btn-gov inline-flex items-center gap-2 border border-foreground/25 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground/[0.03]">
                  <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                  Download Capability Statement
                </a>
              </div>

            </div>

            <aside aria-label="Title II compliance deadlines" className="col-span-12 lg:col-span-4">
              <div className="border border-foreground/10 bg-card p-6">
                <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  <ShieldCheck aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5" />
                  Compliance Deadlines · ADA.gov
                </div>
                <dl className="divide-y divide-foreground/10">
                  <div className="pb-4">
                    <div className="flex items-baseline justify-between">
                      <dt className="flex items-center gap-2 font-mono text-sm font-medium tabular-nums text-foreground">
                        <Calendar aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-primary" />
                        April 26, 2027
                      </dt>
                      <span className="bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-primary">PHASE 1</span>
                    </div>
                    <dd className="mt-1 pl-6 text-xs uppercase tracking-wide text-foreground/60">Entities serving 50,000+ residents</dd>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-baseline justify-between">
                      <dt className="flex items-center gap-2 font-mono text-sm font-medium tabular-nums text-foreground">
                        <Calendar aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-foreground/40" />
                        April 26, 2028
                      </dt>
                      <span className="bg-foreground/5 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-foreground/60">PHASE 2</span>
                    </div>
                    <dd className="mt-1 pl-6 text-xs uppercase tracking-wide text-foreground/60">Smaller entities · special districts</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </header>

        <section aria-label="Firm credentials" className="surface-navy">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-4">
            {[
              { label: "Section 508 Trusted Tester-led practice", Icon: BadgeCheck },
              { label: "10+ years in accessibility compliance", Icon: Clock },
              { label: "AI-assisted · human-verified", Icon: Sparkles },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-accent" />
                <span className="eyebrow text-background/85">{label}</span>
              </div>

            ))}
          </div>
        </section>

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


        <section aria-labelledby="engagement-v2" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 pt-16">
            <div className="mb-8">
              <SectionKicker n="01" label="Engagement Model · 6 Phases" />
              <h2 id="engagement-v2" className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">How a Title II readiness engagement runs.</h2>
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

        <section aria-labelledby="deadline-reality-v2" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-24">
            <div className="col-span-12 lg:col-span-5">
              <SectionKicker n="02" label="Deadline Reality" />
              <h2 id="deadline-reality-v2" className="mt-3 text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
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
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="eyebrow text-foreground/50">Standard</div>
                  <div className="mt-3 num-display-md text-foreground tabular-nums">AA</div>
                </div>
                <div>
                  <div className="eyebrow text-foreground/50">Runway</div>
                  <div className="mt-3 num-display-md text-foreground tabular-nums">9 mo</div>
                </div>
              </div>
              <LabValueTable
                rows={[
                  { label: "Standard", value: "WCAG 2.1 AA", note: "mandatory baseline for all digital assets", icon: Ruler },
                  { label: "Coverage", value: "Web · App · PDF", note: "third-party content and vendor platforms", icon: Layers },
                  { label: "Evidence", value: "Behavioral", note: "native screen-reader verification, not scanner-only", icon: Eye },
                  { label: "Runway", value: "≈ 9 months", note: "to April 26, 2027 Phase 1 deadline", icon: Timer },
                ]}
              />

            </div>

          </div>
        </section>

        <section aria-labelledby="services-v2" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6">
              <div>
                <SectionKicker n="03" label="Services · 4 Primary + 2 Phase 2" />
                <h2 id="services-v2" className="mt-2 max-w-[24ch] text-balance text-3xl font-medium tracking-tight md:text-4xl">Six services scoped for public-sector accessibility work.</h2>
              </div>
              <a href="#" className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline underline-offset-4 decoration-2">All services →</a>
            </div>
            <div className="grid grid-cols-1 gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-4">
              {primaryServices.map((s) => {
                const Icon = serviceIcons[s.id];
                return (
                  <article key={s.id} className="bg-card p-6">
                    {Icon ? (
                      <Icon aria-hidden="true" strokeWidth={1.5} className="mb-4 h-6 w-6 text-primary" />
                    ) : null}
                    <div className="mb-2 font-mono text-[10px] tracking-widest text-primary">{s.id}</div>
                    <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {secondaryServices.map((s) => {
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
                      <span className="shrink-0 border border-foreground/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/50">Phase 2</span>
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
              <SectionKicker n="04" label="Methodology Preview" />
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

            <aside aria-labelledby="audience-v2" className="col-span-12 lg:col-span-5 lg:border-l lg:border-foreground/10 lg:pl-8">
              <SectionKicker n="05" label="Who We Help" />
              <h3 id="audience-v2" className="mt-2 text-2xl font-medium tracking-tight">Built for procurement-driven buyers.</h3>
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

        <section aria-labelledby="operations-v2" className="surface-navy">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10">
              <SectionKicker n="06" label="Operations · Capability Statement" tone="accent" />
              <h2 id="operations-v2" className="mt-3 type-h2">Practice-level operating facts.</h2>
            </div>
            <dl className="grid grid-cols-1 gap-px bg-background/15 border border-background/15 md:grid-cols-3">
              {operations.map((cell) => {
                const Icon = operationsIcons[cell.label];
                return (
                  <div key={cell.label} className="surface-navy p-8">
                    <dt className="flex items-center gap-2 eyebrow text-background/60">
                      {Icon ? (
                        <Icon aria-hidden="true" strokeWidth={1.5} className="h-4 w-4 text-accent" />
                      ) : null}
                      {cell.label}
                    </dt>
                    <dd className="mt-3 text-xl font-medium tracking-tight break-words">{cell.value}</dd>
                    <p className="mt-3 text-sm leading-relaxed text-background/70">{cell.desc}</p>
                  </div>
                );
              })}
            </dl>

          </div>
        </section>

        {/* Process guarantees strip */}
        <MetricStrip
          tone="cobalt"
          ariaLabel="Process guarantees"
          kicker={{ n: "07", label: "Process Guarantees" }}
          metrics={[
            { value: "9 mo", label: "Runway", note: "to Phase 1 · April 26, 2027" },
            { value: "AA", label: "Conformance", note: "WCAG 2.1 baseline" },
            { value: "6", label: "Phases", note: "scope → govern" },
          ]}
        />

        <section id="book" aria-labelledby="cta-v2" className="bg-foreground text-background">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-20">
            <div className="col-span-12 lg:col-span-8">
              <SectionKicker n="08" label="Book a Readiness Call" tone="accent" />
              <h2 id="cta-v2" className="mt-3 max-w-[24ch] text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">Get a defensible Title II readiness roadmap.</h2>
              <p className="mt-4 max-w-[52ch] text-base text-background/70">No silent passes. No hidden uncertainty. A scoped read of what's exposed today and what has to change before April 2027.</p>
            </div>
            <div className="col-span-12 flex flex-col justify-end gap-3 lg:col-span-4 lg:items-end">
              <a href="#" className="btn-gov inline-flex items-center justify-center gap-2 bg-background px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                <CalendarCheck aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Book a Readiness Call
              </a>
              <a id="capability" href="#" className="btn-gov inline-flex items-center justify-center gap-2 border border-background/30 px-6 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-background/10">
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

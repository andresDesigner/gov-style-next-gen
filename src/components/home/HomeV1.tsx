import {
  primaryServices,
  secondaryServices,
  engagement,
  audience,
  operations,
  footerCols,
  evidenceSnippet,
} from "./shared";

/**
 * V1 — Sober institutional.
 * Editorial newspaper feel: centered dateline, big left-aligned H1, rule lines,
 * services as annotated list rows, deadlines as inline dateline (not sidebar).
 */
export function HomeV1() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Masthead */}
      <header className="rule-heavy-b bg-background">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 eyebrow text-foreground/60">
          <span>Vol. 1 · Zenzo LLC consulting practice</span>
          <span className="tabular-nums">Est. 2026 · Bilingual EN / ES</span>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-6 pb-8 pt-4 text-center rule-medium">
          <a href="/" className="h-2 font-medium tracking-[0.28em] uppercase">
            ACT Verified
          </a>
          <span className="eyebrow text-foreground/60">
            Accessibility Verification · Compliance Readiness
          </span>
        </div>
        <nav aria-label="Primary" className="rule-medium">
          <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3 text-sm font-medium">
            {["Services", "How We Verify", "For Government", "Resources", "About", "Book a Call"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/80 decoration-primary decoration-1 underline-offset-[6px] transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>


      <main id="main">
        {/* Hero */}
        <section className="rule-medium-b">
          <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
            <div className="mb-8 flex items-center gap-x-4 eyebrow text-foreground/60">
              <span className="border border-foreground/25 px-2 py-0.5">Filed · 2026-07-16</span>
              <span className="h-px flex-1 bg-foreground/20" aria-hidden="true" />
              <span>Deadlines Ahead</span>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <h1 className="col-span-12 h-1 max-w-[22ch] text-balance lg:col-span-8">
                Accessibility verification and compliance readiness for ADA Title II deadlines.
              </h1>
              <aside
                aria-label="ADA Title II deadlines"
                className="col-span-12 lg:col-span-4 lg:border-l lg:border-foreground/25 lg:pl-8"
              >
                <div className="num-display-md text-foreground tabular-nums">04.26.27</div>
                <div className="mt-1 eyebrow text-primary">Phase 1 · 50k+ residents</div>
                <div className="mt-8 num-display-md text-foreground/40 tabular-nums">04.26.28</div>
                <div className="mt-1 eyebrow text-foreground/50">Phase 2 · Smaller entities</div>
              </aside>
            </div>
            <div className="mt-12 grid grid-cols-12 gap-8">
              <p className="col-span-12 max-w-[62ch] text-lg leading-relaxed text-foreground/80 md:col-span-8 md:text-xl">
                ACT Verified prepares public-sector and regulated organizations for the Title II
                deadlines of April 26, 2027 and April 26, 2028 — with findings you can defend to
                auditors, legal counsel, and procurement reviewers.
              </p>
              <div className="col-span-12 md:col-span-4">
                <div className="border-l border-foreground/25 pl-4 font-mono text-[11px] leading-relaxed text-foreground/70">
                  <span className="uppercase tracking-widest text-foreground/50">Editor's note</span>
                  <p className="mt-2 text-foreground/75">
                    Independent, evidence-backed verification. No silent passes. No AI-only reports.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="btn-gov bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
              >
                Book a Readiness Call
              </a>
              <a
                href="#capability"
                className="btn-gov border border-foreground/25 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground/[0.03]"
              >
                Download Capability Statement
              </a>
            </div>
          </div>
        </section>


        {/* Trust dateline strip */}
        <section aria-label="Firm credentials" className="border-b border-foreground/15 bg-secondary/40">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
            <span>Section 508 Trusted Tester-led</span>
            <span aria-hidden="true">·</span>
            <span>10+ yrs accessibility compliance</span>
            <span aria-hidden="true">·</span>
            <span>AI-assisted · human-verified</span>
          </div>
        </section>

        {/* Deadline reality */}
        <section aria-labelledby="deadline-v1" className="rule-medium-b">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-5">
                <div className="eyebrow text-foreground/50">§01 · Deadline Reality</div>
                <div className="mt-6 num-display text-foreground tabular-nums">≈9 mo</div>
                <div className="mt-3 eyebrow text-primary">Runway to Phase 1</div>
              </div>
              <h2
                id="deadline-v1"
                className="col-span-12 h-2 max-w-[28ch] text-balance md:col-span-7"
              >
                The deadline is not optional, and the backlog is bigger than it looks.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-12 gap-8">
              <p className="col-span-12 max-w-[62ch] text-base leading-relaxed text-foreground/80 md:col-span-7">
                Most public entities are sitting on backlogs of public-facing PDFs that often run
                into the thousands, plus web content and mobile apps that were never audited against
                WCAG 2.1 AA. The runway to April 2027 is shorter than it reads on the calendar.
              </p>
              <aside className="col-span-12 md:col-span-5">
                <dl className="border-t border-foreground/20">
                  {[
                    { k: "Standard", v: "WCAG 2.1 AA" },
                    { k: "Coverage", v: "Web · App · PDF" },
                    { k: "Evidence", v: "Behavioral, not scanner-only" },
                    { k: "Runway to Phase 1", v: "≈ 9 months" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="grid grid-cols-[130px_1fr] gap-4 border-b border-foreground/15 py-3"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-foreground/55">
                        {row.k}
                      </dt>
                      <dd className="text-sm font-medium tabular-nums text-foreground">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 font-mono text-[11px] leading-relaxed text-foreground/55">
                  Source: ADA.gov / DOJ. Informational, not legal advice.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Services as annotated entries */}
        <section aria-labelledby="services-v1" className="border-b border-foreground/15 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  §02 · Services
                </div>
                <h2
                  id="services-v1"
                  className="mt-2 max-w-[26ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
                >
                  Six services scoped for public-sector accessibility work.
                </h2>
              </div>
              <a
                href="#"
                className="font-mono text-[11px] uppercase tracking-widest text-primary decoration-2 underline-offset-4 hover:underline"
              >
                All services →
              </a>
            </div>

            <ol className="border-t border-foreground/25">
              {primaryServices.map((s, i) => (
                <li key={s.id} className="grid grid-cols-12 gap-6 border-b border-foreground/15 py-8">
                  <div className="col-span-12 md:col-span-2">
                    <div className="num-display-sm text-foreground/25 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 eyebrow text-primary">{s.id}</div>
                  </div>

                  <div className="col-span-12 md:col-span-7">
                    <h3 className="text-xl font-medium leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-foreground/75">
                      {s.desc}
                    </p>
                  </div>
                  <div className="col-span-12 flex items-start justify-end md:col-span-3">
                    <a
                      href="#"
                      className="font-mono text-[11px] uppercase tracking-widest text-primary decoration-2 underline-offset-4 hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                </li>
              ))}
              {secondaryServices.map((s, i) => (
                <li
                  key={s.id}
                  className="grid grid-cols-12 gap-6 border-b border-foreground/15 py-8"
                >
                  <div className="col-span-12 md:col-span-2">
                    <div className="num-display-sm text-foreground/15 tabular-nums">
                      {String(primaryServices.length + i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 eyebrow text-foreground/50">{s.id} · Phase 2</div>
                  </div>

                  <div className="col-span-12 md:col-span-10">
                    <h3 className="text-xl font-medium leading-tight tracking-tight text-foreground/85">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-foreground/70">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Engagement — stepper as ordered list of columns */}
        <section aria-labelledby="engagement-v1" className="border-b border-foreground/15">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              §03 · Engagement Model
            </div>
            <h2
              id="engagement-v1"
              className="mt-2 max-w-[28ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
            >
              How a Title II readiness engagement runs.
            </h2>
            <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {engagement.map((step) => (
                <li key={step.n} className="border-t-2 border-foreground pt-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-sm font-medium tabular-nums text-primary">
                      Step {step.n}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                      Phase
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">{step.label}</h3>
                  <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-foreground/70">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Statement band — surface-navy break */}
        <aside aria-label="Practice statement" className="surface-navy">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-8 px-6 py-20">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow text-accent">Position</div>
              <div className="mt-3 num-display-sm tabular-nums">01</div>
            </div>
            <blockquote className="col-span-12 md:col-span-9">
              <p className="h-2 max-w-[26ch] text-balance">
                Evidence you can defend. Not scanner passes. Not AI reports.
              </p>
              <footer className="mt-6 eyebrow text-background/60">
                ACT Verified · Practice statement
              </footer>
            </blockquote>
          </div>
        </aside>



        {/* Methodology + Who we help */}
        <section className="border-b border-foreground/15 bg-secondary/30">
          <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-10 px-6 py-20">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                §04 · Methodology Preview
              </div>
              <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
                Behavioral Verification.
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/80">
                We tell you what's exposed to assistive technology — not just what's inside the
                document. Static analysis and automated scanners are valuable first steps; behavioral
                verification covers what they are not designed to detect.
              </p>
              <figure
                aria-label="Excerpt from a verification finding record"
                className="mt-8 border border-foreground/15 bg-foreground text-background"
              >
                <figcaption className="flex items-center justify-between border-b border-background/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-background/60">
                  <span>Finding · F-2027-0142</span>
                  <span>NVDA · Firefox · Win 11</span>
                </figcaption>
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed text-background/90">
{evidenceSnippet}
                </pre>
              </figure>
            </div>
            <aside className="col-span-12 lg:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                §05 · Who We Help
              </div>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">
                Built for procurement-driven buyers.
              </h3>
              <dl className="mt-8 border-t border-foreground/25">
                {audience.map((item) => (
                  <div
                    key={item.role}
                    className="grid grid-cols-[160px_1fr] gap-4 border-b border-foreground/15 py-4"
                  >
                    <dt className="text-sm font-semibold">{item.role}</dt>
                    <dd className="text-sm text-foreground/70">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* Operations */}
        <section className="border-b border-foreground/15">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              §06 · Operations · Capability Statement
            </div>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">
              Practice-level operating facts.
            </h2>
            <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
              {operations.map((cell) => (
                <div key={cell.label} className="border-t-2 border-foreground pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-foreground/45">
                    {cell.label}
                  </dt>
                  <dd className="mt-3 text-xl font-medium tracking-tight break-words">
                    {cell.value}
                  </dd>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{cell.desc}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section id="book" className="bg-foreground text-background">
          <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Book a Readiness Call
            </div>
            <h2 className="mx-auto mt-3 max-w-[28ch] text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Get a defensible Title II readiness roadmap.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-base text-background/70">
              No silent passes. No hidden uncertainty. A scoped read of what's exposed today and
              what has to change before April 2027.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="btn-gov bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Book a Readiness Call
              </a>
              <a
                id="capability"
                href="#"
                className="btn-gov border border-background/30 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                Download Capability Statement
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/50 border-t border-foreground/15">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            {footerCols.map((col) => (
              <div key={col.head}>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {col.head}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-foreground/75 decoration-primary decoration-1 underline-offset-4 transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-6 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            <span>ACT Verified — a Zenzo LLC consulting practice</span>
            <span>WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

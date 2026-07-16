import { Logo } from "./Logo";
import { MetricStrip } from "./MetricStrip";
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
 * V3 — Quiet authority.
 * Generous whitespace, single-column reading rhythm, real artifacts as the only
 * visuals. Minimal chrome; the words and evidence carry the page.
 */
export function HomeV3() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Slim nav */}
      <nav aria-label="Primary" className="border-b border-foreground/10 bg-background">
        <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center">
            <Logo className="h-9 w-auto" />
          </a>
          <ul className="hidden lg:flex gap-8 text-sm font-medium">
            {["Services", "How We Verify", "For Government", "Resources", "About"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-foreground/70 decoration-primary decoration-1 underline-offset-[6px] transition-[text-decoration-thickness] hover:text-foreground hover:underline hover:decoration-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="btn-gov bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            Book a Call
          </a>
        </div>
      </nav>

      <main id="main">
        {/* Hero — big prose, single column */}
        <section className="rule-medium-b">
          <div className="mx-auto max-w-[960px] px-6 pb-24 pt-24 lg:pt-36">
            <div className="mb-10 eyebrow text-foreground/55">
              A memorandum on ADA Title II readiness
            </div>
            <h1 className="type-display max-w-[14ch] text-balance">
              Evidence, not assertions.
            </h1>
            <div className="mt-14 grid grid-cols-12 items-end gap-8 rule-medium pt-8">
              <div className="col-span-12 md:col-span-5">
                <div className="eyebrow text-primary">Phase 1 deadline</div>
                <div className="mt-3 num-display-md text-foreground tabular-nums">04.26.2027</div>
              </div>
              <p className="col-span-12 max-w-[52ch] text-lg leading-[1.65] text-foreground/80 md:col-span-7 md:text-xl">
                ACT Verified prepares public-sector and regulated organizations for the Title II
                deadlines of April 26, 2027 and April 26, 2028 — with findings you can defend to
                auditors, legal counsel, and procurement reviewers.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="btn-gov bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
              >
                Book a Readiness Call
              </a>
              <a
                href="#capability"
                className="text-sm font-medium text-foreground decoration-primary decoration-1 underline-offset-[6px] transition-[text-decoration-thickness] hover:underline hover:decoration-2"
              >
                Download Capability Statement →
              </a>
            </div>
          </div>
        </section>


        {/* Trust — inline mono line */}
        <section aria-label="Firm credentials" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[960px] px-6 py-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
            Section 508 Trusted Tester-led · 10+ yrs accessibility · AI-assisted · human-verified
          </div>
        </section>

        {/* Deadline reality — prose with pull metrics */}
        <section aria-labelledby="deadline-v3" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              I. Deadline reality
            </div>
            <h2
              id="deadline-v3"
              className="max-w-[24ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl"
            >
              The deadline is not optional, and the backlog is bigger than it looks.
            </h2>
            <p className="mt-10 max-w-[68ch] text-lg leading-[1.7] text-foreground/80">
              Most public entities are sitting on backlogs of public-facing PDFs that often run
              into the thousands, plus web content and mobile apps that were never audited against
              WCAG 2.1 AA. The runway to April 2027 is shorter than it reads on the calendar — and
              scanner-only reports systematically under-report what an actual assistive-technology
              user encounters.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-2">
              {[
                { k: "Standard", v: "WCAG 2.1 AA" },
                { k: "Coverage", v: "Web · App · PDF" },
                { k: "Evidence", v: "Behavioral" },
                { k: "Runway", v: "≈9 mo" },
              ].map((cell) => (
                <div key={cell.k} className="rule-medium pt-5">
                  <div className="eyebrow text-foreground/50">{cell.k}</div>
                  <div className="mt-4 num-display-sm text-foreground tabular-nums">{cell.v}</div>
                </div>
              ))}
            </div>


            <p className="mt-12 max-w-[68ch] border-l-2 border-primary pl-6 font-mono text-[11px] leading-relaxed text-foreground/60">
              Last reviewed 2026-07-16. Source: ADA.gov / DOJ. Informational, not legal advice.
            </p>
          </div>
        </section>

        {/* Methodology — the artifact IS the visual */}
        <section className="border-b border-foreground/10 bg-secondary/40">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              II. Methodology
            </div>
            <h2 className="max-w-[22ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              Behavioral verification.
            </h2>
            <p className="mt-8 max-w-[68ch] text-lg leading-[1.7] text-foreground/80">
              We tell you what's exposed to assistive technology — not just what's inside the
              document. Static analysis and automated scanners are valuable first steps; behavioral
              verification covers what they are not designed to detect.
            </p>

            <figure
              aria-label="Excerpt from a verification finding record"
              className="mt-12 border border-foreground/15 bg-foreground text-background"
            >
              <figcaption className="flex items-center justify-between border-b border-background/10 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-background/60">
                <span>Finding · F-2027-0142</span>
                <span>NVDA · Firefox · Win 11</span>
              </figcaption>
              <pre className="overflow-x-auto p-6 font-mono text-[15px] leading-[1.85] text-background/90">
{evidenceSnippet}
              </pre>

            </figure>

            <p className="mt-8 max-w-[68ch] font-mono text-[11px] leading-relaxed text-foreground/60">
              Scanners passed. The user still couldn't use it. That gap is what we document.
            </p>
          </div>
        </section>

        {/* Cobalt pull-quote band — the only cobalt on the page */}
        <aside aria-label="Practice thesis" className="surface-cobalt">
          <div className="mx-auto max-w-[960px] px-6 py-20">
            <div className="eyebrow text-primary-foreground/70">Thesis</div>
            <blockquote className="mt-4">
              <p className="max-w-[24ch] text-balance type-h2">
                Scanners passed. The user still couldn't use it.
              </p>
              <footer className="mt-6 eyebrow text-primary-foreground/70">
                — What behavioral verification documents
              </footer>
            </blockquote>
          </div>
        </aside>



        {/* Services — quiet list */}
        <section aria-labelledby="services-v3" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              III. Services
            </div>
            <h2
              id="services-v3"
              className="max-w-[24ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl"
            >
              Six services scoped for public-sector accessibility work.
            </h2>

            <ol className="mt-16 space-y-14">
              {primaryServices.map((s, i) => (
                <li key={s.id} className="grid grid-cols-12 gap-6 md:gap-10">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      {s.id}
                    </div>
                    <div className="mt-3 num-display-sm text-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                      of 06
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-2xl font-medium leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-3 max-w-[62ch] text-base leading-[1.7] text-foreground/75">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
              {secondaryServices.map((s, i) => (
                <li key={s.id} className="grid grid-cols-12 gap-6 md:gap-10">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                      {s.id} · Phase 2
                    </div>
                    <div className="mt-1 font-mono text-lg font-medium tabular-nums text-foreground/30">
                      {String(primaryServices.length + i + 1).padStart(2, "0")} / 06
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-2xl font-medium leading-tight tracking-tight text-foreground/85">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[62ch] text-base leading-[1.7] text-foreground/70">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Engagement — minimal list */}
        <section className="border-b border-foreground/10 bg-secondary/40">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              IV. Engagement model
            </div>
            <h2 className="max-w-[24ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              How an engagement runs, in six phases.
            </h2>
            <ol className="mt-14 divide-y divide-foreground/15 border-y border-foreground/15">
              {engagement.map((step) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[80px_1fr] gap-6 py-6 md:grid-cols-[120px_200px_1fr]"
                >
                  <div className="font-mono text-sm font-medium tabular-nums text-primary">
                    {step.n}
                  </div>
                  <div className="text-lg font-medium tracking-tight">{step.label}</div>
                  <div className="col-span-2 md:col-span-1 text-sm leading-relaxed text-foreground/70">
                    {step.desc}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who we help */}
        <section className="border-b border-foreground/10">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              V. Who we help
            </div>
            <h2 className="max-w-[24ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              Built for procurement-driven buyers.
            </h2>
            <dl className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
              {audience.map((item) => (
                <div key={item.role} className="border-t border-foreground/20 pt-4">
                  <dt className="text-lg font-medium tracking-tight">{item.role}</dt>
                  <dd className="mt-2 max-w-[42ch] text-sm leading-relaxed text-foreground/70">
                    {item.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Operations */}
        <section className="border-b border-foreground/10 bg-secondary/40">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              VI. Operations
            </div>
            <h2 className="max-w-[24ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              Practice-level operating facts.
            </h2>
            <dl className="mt-14 space-y-10">
              {operations.map((cell) => (
                <div
                  key={cell.label}
                  className="grid grid-cols-12 gap-6 border-t border-foreground/20 pt-6"
                >
                  <dt className="col-span-12 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50 md:col-span-3">
                    {cell.label}
                  </dt>
                  <dd className="col-span-12 md:col-span-9">
                    <div className="text-2xl font-medium tracking-tight break-words">
                      {cell.value}
                    </div>
                    <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-foreground/70">
                      {cell.desc}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section id="book" className="bg-foreground text-background">
          <div className="mx-auto max-w-[960px] px-6 py-28">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Book a Readiness Call
            </div>
            <h2 className="mt-4 max-w-[22ch] text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
              A defensible Title II readiness roadmap.
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg leading-[1.65] text-background/75">
              No silent passes. No hidden uncertainty. A scoped read of what's exposed today and
              what has to change before April 2027.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
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

      <footer className="border-t border-foreground/10">
        <div className="mx-auto max-w-[960px] px-6 py-16">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            {footerCols.map((col) => (
              <div key={col.head}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
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
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
            <span>ACT Verified — a Zenzo LLC consulting practice</span>
            <span>WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

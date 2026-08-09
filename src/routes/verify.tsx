import { createFileRoute } from "@tanstack/react-router";
import { Download, Phone, AlertTriangle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { MethodologyFlowDiagram } from "@/components/home/MethodologyFlowDiagram";
import { DocumentArchitectureDiagram } from "@/components/home/DocumentArchitectureDiagram";
import { EvidenceArtifactCard } from "@/components/home/EvidenceArtifactCard";
import { evidenceFindingF20270142 } from "@/components/home/shared";
import { staticVsBehavioral, verifyAudience } from "@/components/site/content";
import { useInView } from "@/hooks/use-in-view";

const TITLE = "How We Verify — Behavioral verification methodology";
const DESC =
  "Behavioral verification methodology: 9-stage flow, screen reader exposure vs. document tags, and evidence artifacts that hold up under procurement and legal review.";
const URL = "https://actweb.blitzagencia.online/verify";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: VerifyPage,
});

function AudienceRows() {
  const { ref, inView } = useInView<HTMLUListElement>();
  const state = inView ? "true" : "false";
  return (
    <ul ref={ref} className="mt-8 border-t border-foreground/15">
      {verifyAudience.map((a, i) => (
        <li
          key={a.role}
          data-inview={state}
          style={{ ["--stagger" as string]: i }}
          className="reveal reveal-stagger group grid grid-cols-1 items-baseline gap-2 border-b border-foreground/15 py-5 transition-colors hover:bg-secondary/50 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-8"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/60">
            {a.role}
          </span>
          <span className="text-lg leading-snug tracking-tight">{a.line}</span>
        </li>
      ))}
    </ul>
  );
}

function VerifyPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-background"
      >
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main">
        <PageHero
          kicker="How We Verify · Methodology"
          title="A nine-stage verification flow — not a scanner report."
          lead="Every finding travels through the same nine stages, from intake to trace. Two stages — NVDA behavioral capture and evidence sufficiency — are where we commit to what assistive technology actually exposes."
          actions={
            <>
              <a
                href="/#book"
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
                Download Capability Statement
              </a>
            </>
          }
        />

        <section aria-labelledby="flow" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Verification Flow
            </div>
            <h2 id="flow" className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Nine stages, one trace.
            </h2>
            <MethodologyFlowDiagram />
          </div>
        </section>

        <section aria-labelledby="structure" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Structure vs. Exposure
            </div>
            <h2 id="structure" className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              What's in the document is not what the user hears.
            </h2>
            <p className="mt-4 max-w-[65ch] text-foreground/80">
              Static analysis tells you the document's tag structure. Behavioral verification tells
              you what the accessibility tree actually exposes to a screen reader. The gap between
              the two layers is where compliance risk lives.
            </p>
            <DocumentArchitectureDiagram />
          </div>
        </section>

        <section aria-labelledby="static-vs" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Approach Comparison
              </div>
              <h2
                id="static-vs"
                className="mt-2 text-balance text-3xl font-medium tracking-tight md:text-4xl"
              >
                Static-only vs. behavioral.
              </h2>
              <p className="mt-4 text-foreground/75">
                Scanners are a valid first pass. They are not a verification record.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] border border-foreground/20">
                <div className="border-b-2 border-foreground bg-card px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                  Dimension
                </div>
                <div className="border-b-2 border-foreground bg-card px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                  Static only
                </div>
                <div className="border-b-2 border-foreground bg-foreground px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-background/80">
                  Behavioral verification
                </div>

                {staticVsBehavioral.map((r) => (
                  <div key={r.capability} className="contents">
                    <div className="border-b border-foreground/12 bg-card px-4 py-4 text-sm font-semibold">
                      {r.capability}
                    </div>
                    <div className="border-b border-foreground/12 bg-card px-4 py-4 text-sm text-foreground/70">
                      {r.staticOnly}
                    </div>
                    <div className="border-b border-foreground/12 bg-foreground/[0.04] px-4 py-4 text-sm font-medium text-foreground">
                      {r.behavioral}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 border-l-2 border-[color:var(--illus-coral,#FF8C42)] bg-secondary/60 px-6 py-5">
                <AlertTriangle
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70"
                />
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                    Scoped non-conclusions
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-foreground/85">
                    Where evidence is insufficient to support a conclusion, we say so and record the
                    limitation in the finding. We do not convert an untestable case into a silent
                    pass, and we do not certify coverage we did not observe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="artifact" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Evidence Artifact
              </div>
              <h2
                id="artifact"
                className="mt-2 text-balance text-3xl font-medium tracking-tight md:text-4xl"
              >
                Every finding ships as a record — not a screenshot.
              </h2>
              <p className="mt-4 max-w-[48ch] text-foreground/75">
                Trace ID, WCAG mapping, the assistive-technology behavior observed, and the raw log
                it came from. Reproducible by anyone who reads it.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <EvidenceArtifactCard
                caption="Excerpt from a verification finding record"
                {...evidenceFindingF20270142}
                fields={evidenceFindingF20270142.fields.map((f) => ({ ...f }))}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="who" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Who This Is For
            </div>
            <h2 id="who" className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              What each reader gets from the record.
            </h2>
            <AudienceRows />
          </div>
        </section>

        <CtaBand
          title="Ask us to verify one page before you commit."
          lead="A single behavioral verification tells you more about your exposure than a full scanner export."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

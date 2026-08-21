import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Phone,
  AlertTriangle,
  ScanEye,
  ListChecks,
  FileCheck2,
  Search,
  ShieldQuestion,
  FileSearch,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { TrustBand } from "@/components/site/TrustBand";
import { MethodologyFlowDiagram } from "@/components/home/MethodologyFlowDiagram";
import { DocumentArchitectureDiagram } from "@/components/home/DocumentArchitectureDiagram";
import { EvidenceArtifactCard } from "@/components/home/EvidenceArtifactCard";
import { Illustration } from "@/components/home/Illustration";
import { evidenceFindingF20270142 } from "@/components/home/shared";
import { staticVsBehavioral, verifyAudience } from "@/components/site/content";
import { useInView } from "@/hooks/use-in-view";
import ilVerifyAsset from "@/assets/il-02-verify-v3.png.asset.json";
const ilVerify = ilVerifyAsset.url;
import ilDocsAsset from "@/assets/il-03-docs.png.asset.json";

const COMPARISON_ICONS = [Search, ShieldQuestion, FileSearch];

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
          illustration={{ src: ilVerify, alt: "", width: 896, height: 768 }}
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

        <TrustBand
          kicker="Verification Standard"
          statement="Every conclusion is tied to captured assistive-technology behavior — reproducible from its trace, not from a scanner's rule name."
          items={[
            { icon: ScanEye, label: "Capture", value: "NVDA behavioral session" },
            { icon: ListChecks, label: "Mapping", value: "WCAG 2.1 AA success criteria" },
            { icon: FileCheck2, label: "Output", value: "Finding record with trace ID" },
          ]}
        />

        <section aria-labelledby="flow" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Verification Flow
              </div>
              <h2
                id="flow"
                className="mt-2 max-w-[18ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
              >
                Nine stages, one trace.
              </h2>
              <p className="mt-4 max-w-[44ch] text-foreground/75">
                Intake, static extraction, behavioral capture, reconciliation, evidence sufficiency
                — the same order on every engagement, so findings stay comparable over time.
              </p>
            </div>
            <div className="lg:col-span-8">
              <MethodologyFlowDiagram />
            </div>
          </div>
        </section>

        <section aria-labelledby="structure" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Structure vs. Exposure
              </div>
              <h2
                id="structure"
                className="mt-2 max-w-[20ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
              >
                What's in the document is not what the user hears.
              </h2>
              <p className="mt-4 max-w-[46ch] text-foreground/80">
                Static analysis tells you the document's tag structure. Behavioral verification
                tells you what the accessibility tree actually exposes to a screen reader. The gap
                between the two layers is where compliance risk lives.
              </p>
              <Illustration
                src={ilDocsAsset.url}
                alt=""
                width={848}
                height={916}
                blob={false}
                accents={false}
                className="mt-8 hidden max-w-[280px] lg:block"
              />
            </div>
            <div className="lg:col-span-8">
              <DocumentArchitectureDiagram />
            </div>
          </div>
        </section>

        <section aria-labelledby="static-vs" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
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

            <div className="lg:col-span-8">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] overflow-hidden rounded-t-lg border border-foreground/20">
                <div className="bg-brand-header px-4 py-4 text-sm font-bold text-primary-foreground">
                  Dimension
                </div>
                <div className="bg-brand-header px-4 py-4 font-mono text-[11px] uppercase tracking-widest text-primary-foreground/85">
                  Static only
                </div>
                <div className="bg-brand-header px-4 py-4 font-mono text-[11px] uppercase tracking-widest text-primary-foreground">
                  Behavioral verification
                </div>

                {staticVsBehavioral.map((r, i) => {
                  const Icon = COMPARISON_ICONS[i % COMPARISON_ICONS.length];
                  return (
                    <div key={r.capability} className="contents">
                      <div className="flex items-start gap-3 border-b border-foreground/12 bg-card px-4 py-4 text-sm font-semibold">
                        <Icon
                          aria-hidden="true"
                          strokeWidth={1.75}
                          className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                        />
                        <span className="min-w-0">{r.capability}</span>
                      </div>
                      <div className="border-b border-foreground/12 bg-card px-4 py-4 text-sm text-foreground/70">
                        {r.staticOnly}
                      </div>
                      <div className="border-b border-foreground/12 bg-foreground/[0.04] px-4 py-4 text-sm font-medium text-foreground">
                        {r.behavioral}
                      </div>
                    </div>
                  );
                })}
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
            <div className="lg:col-span-5">
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
            <div className="lg:col-span-7">
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

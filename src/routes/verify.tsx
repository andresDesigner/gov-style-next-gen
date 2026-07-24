import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Logo } from "@/components/home/Logo";

import { MethodologyFlowDiagram } from "@/components/home/MethodologyFlowDiagram";
import { DocumentArchitectureDiagram } from "@/components/home/DocumentArchitectureDiagram";
import { EvidenceArtifactCard } from "@/components/home/EvidenceArtifactCard";
import { evidenceFindingF20270142 } from "@/components/home/shared";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "How We Verify — ACT Verified" },
      {
        name: "description",
        content:
          "Behavioral verification methodology: 9-stage flow, screen reader exposure vs. document tags, and evidence artifacts that hold up under procurement and legal review.",
      },
      { property: "og:title", content: "How We Verify — ACT Verified" },
      {
        property: "og:description",
        content:
          "9-stage verification, NVDA behavioral capture, and evidence records aligned to WCAG 2.1 AA, Section 508, and PDF/UA-1.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VerifyPage,
});

function VerifyPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <header className="border-b border-foreground/10 bg-background">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <Link to="/" aria-label="ACT Verified home">
            <Logo className="h-11 w-auto" />
          </Link>
          <Link to="/" className="font-mono text-[11px] uppercase tracking-widest text-foreground/70 hover:text-foreground">
            ← Home
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              How We Verify · Methodology
            </div>
            <h1
              className="mt-3 font-medium tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              A nine-stage verification flow — not a scanner report.
            </h1>
            <p className="mt-6 max-w-[65ch] text-lg text-foreground/80">
              Every finding travels through the same nine stages, from intake to trace. Two stages —
              NVDA behavioral capture and evidence sufficiency — are where we commit to what
              assistive technology actually exposes.
            </p>
            <MethodologyFlowDiagram />
          </div>
        </section>

        <section className="border-b border-foreground/10 bg-paper-100/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              Structure vs. Exposure
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
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

        <section className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              Approach Comparison
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              Automated scanners vs. behavioral verification.
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-foreground text-left font-mono text-[11px] uppercase tracking-widest">
                    <th className="py-3 pr-4">Dimension</th>
                    <th className="py-3 pr-4">Automated scanner</th>
                    <th className="py-3">Behavioral verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/10">
                  {[
                    ["Coverage", "Rule-based static checks", "AT-observed behavior + rule reconciliation"],
                    ["Screen reader truth", "Inferred from markup", "Captured live (NVDA / Firefox / Win 11)"],
                    ["Trace ID per finding", "No", "Yes — every finding is traceable"],
                    ["Evidence artifact", "Log line", "Structured record with WCAG mapping"],
                    ["Procurement-ready", "Rarely", "Yes — signed capability record"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="py-3 pr-4 font-semibold">{row[0]}</td>
                      <td className="py-3 pr-4 text-foreground/80">{row[1]}</td>
                      <td className="py-3 text-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-foreground/10 bg-paper-100/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              Evidence Artifact
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              Every finding ships as a record — not a screenshot.
            </h2>
            <EvidenceArtifactCard
              className="mt-8"
              caption="Excerpt from a verification finding record"
              {...evidenceFindingF20270142}
              fields={evidenceFindingF20270142.fields.map((f) => ({ ...f }))}
            />
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-10 font-mono text-[11px] uppercase tracking-widest">
          <div>ACT Verified — a Zenzo LLC consulting practice</div>
          <div className="text-primary-foreground/70">WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned</div>
        </div>
      </footer>
    </div>
  );
}

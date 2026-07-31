import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Logo } from "@/components/home/Logo";
import { AudienceRoutingDiagram } from "@/components/home/AudienceRoutingDiagram";


export const Route = createFileRoute("/government")({
  head: () => ({
    meta: [
      { title: "For Government — ACT Verified" },
      {
        name: "description",
        content:
          "A hub for procurement officers, accessibility program managers, and legal counsel evaluating ADA Title II readiness partners.",
      },
      { property: "og:title", content: "For Government — ACT Verified" },
      {
        property: "og:description",
        content:
          "Audience-routed paths for public-sector buyers preparing for the April 26, 2027 and 2028 ADA Title II deadlines.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GovernmentPage,
});

const PATHS = [
  {
    role: "Procurement Officer",
    headline: "Evaluate the practice, not the pitch.",
    body: "Download the capability statement: scope, standards, staffing, and evidence formats — the record you need on file before an award.",
    cta: "Capability Statement",
    href: "#capability",
  },
  {
    role: "Accessibility Program Manager",
    headline: "See exactly how findings are produced.",
    body: "Walk the nine-stage flow: intake, static extraction, NVDA capture, reconciliation, and the evidence sufficiency gate that guards every trace.",
    cta: "How We Verify",
    href: "/verify",
  },
  {
    role: "Legal Counsel",
    headline: "Talk to a Section 508 Trusted Tester-led practice.",
    body: "A 30-minute readiness call: deadline coverage, exposure areas, and what a defensible evidence trail looks like under Title II.",
    cta: "Book a Call",
    href: "#book",
  },
];

function GovernmentPage() {
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
          kicker="For Government · Hub"
          title="Three roles. Three paths to a Title II decision."
          lead="Different roles need different evidence at different moments. Route yourself to the record that matches the decision on your desk today."
        />

        <section className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <AudienceRoutingDiagram />
          </div>
        </section>


        <section className="border-b border-foreground/10 bg-paper-100/40">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              Audience Paths
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              Pick your path.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {PATHS.map((p) => (
                <article
                  key={p.role}
                  className="flex flex-col border border-foreground/15 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {p.role}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.headline}</h3>
                  <p className="mt-3 flex-1 text-sm text-foreground/80">{p.body}</p>
                  <a
                    href={p.href}
                    className="mt-6 inline-flex items-center justify-center bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    {p.cta} →
                  </a>
                </article>
              ))}
            </div>
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

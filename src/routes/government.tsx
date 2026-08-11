import { createFileRoute } from "@tanstack/react-router";
import { FileText, Workflow, Scale, ShieldCheck, Timer, Landmark, ArrowRight } from "lucide-react";
import { AudienceRoutingDiagram } from "@/components/home/AudienceRoutingDiagram";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { TrustBand } from "@/components/site/TrustBand";
import { Illustration } from "@/components/home/Illustration";
import { useInView } from "@/hooks/use-in-view";
import ilGov from "@/assets/il-04-gov.png";




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
    icon: FileText,
    headline: "Evaluate the practice, not the pitch.",
    body: "Download the capability statement: scope, standards, staffing, and evidence formats — the record you need on file before an award.",
    cta: "Capability Statement",
    href: "#capability",
  },
  {
    role: "Accessibility Program Manager",
    icon: Workflow,
    headline: "See exactly how findings are produced.",
    body: "Walk the nine-stage flow: intake, static extraction, NVDA capture, reconciliation, and the evidence sufficiency gate that guards every trace.",
    cta: "How We Verify",
    href: "/verify",
  },
  {
    role: "Legal Counsel",
    icon: Scale,
    headline: "Talk to a Section 508 Trusted Tester-led practice.",
    body: "A 30-minute readiness call: deadline coverage, exposure areas, and what a defensible evidence trail looks like under Title II.",
    cta: "Book a Call",
    href: "#book",
  },
];

function PathCards() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";
  return (
    <div ref={ref} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {PATHS.map((p, i) => {
        const Icon = p.icon;
        return (
          <article
            key={p.role}
            data-inview={state}
            style={{ ["--stagger" as string]: i }}
            className="reveal reveal-stagger group flex flex-col rounded-xl border border-foreground/15 bg-card p-7 shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
          >
            <Icon aria-hidden="true" strokeWidth={1.75} className="h-8 w-8 text-signal" />
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">
              {p.role}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.headline}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{p.body}</p>
            <a
              href={p.href}
              className="btn-gov mt-6 inline-flex items-center justify-center gap-2 bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {p.cta}
              <ArrowRight
                aria-hidden="true"
                strokeWidth={2}
                className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1"
              />
            </a>
          </article>
        );
      })}
    </div>
  );
}

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
          illustration={{ src: ilGov, alt: "", width: 1024, height: 1024 }}
        />

        <TrustBand
          kicker="Public-Sector Practice"
          statement="Built for the way public entities buy: documented scope, standards on the record, and evidence a reviewer outside your team can follow."
          items={[
            { icon: Landmark, label: "Entities served", value: "Federal · State · Local" },
            { icon: ShieldCheck, label: "Standards", value: "WCAG 2.1 AA · Section 508" },
            { icon: Timer, label: "Deadline", value: "April 26, 2027 / 2028" },
          ]}
        />

        <section aria-labelledby="routing" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Audience Routing
              </div>
              <h2
                id="routing"
                className="mt-2 max-w-[20ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
              >
                Where each role enters the record.
              </h2>
              <p className="mt-4 max-w-[44ch] text-foreground/75">
                One evidence trail, three entry points. Procurement reads scope, program managers
                read method, counsel reads exposure.
              </p>
              <Illustration
                src={ilGov}
                alt=""
                width={1024}
                height={1024}
                blob={false}
                accents={false}
                className="mt-8 hidden max-w-[260px] lg:block"
              />
            </div>
            <div className="lg:col-span-8">
              <AudienceRoutingDiagram />
            </div>
          </div>
        </section>

        <section aria-labelledby="paths" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              Audience Paths
            </div>
            <h2
              id="paths"
              className="mt-3 max-w-[24ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
            >
              Pick your path.
            </h2>
            <PathCards />
          </div>
        </section>


        <CtaBand
          title="Bring us the decision you have to defend."
          lead="We scope the shortest path to a record your legal, procurement, and technical reviewers can all read."
        />
      </main>

      <SiteFooter />
    </div>
  );

}

import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Phone,
  ShieldCheck,
  FileCheck2,
  Timer,
  Layers,
  CalendarClock,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { TrustBand } from "@/components/site/TrustBand";
import { EngagementRail } from "@/components/site/EngagementRail";
import { ServiceCardGrid } from "@/components/site/ServiceCardGrid";
import { PhaseScopeDiagram } from "@/components/home/PhaseScopeDiagram";
import { Illustration } from "@/components/home/Illustration";
import ilServices from "@/assets/il-06-services.png";
import ilDocs from "@/assets/il-03-docs.png";
import ilVerify from "@/assets/il-02-verify.png";
import ilDeadline from "@/assets/il-05-deadline.png";

const TITLE = "Services — Accessibility consulting built around evidence";
const DESC =
  "Six accessibility services for public-sector organizations: readiness sprints, WCAG audits, PDF remediation, post-remediation verification, governance, and user validation.";
const URL = "https://actweb.blitzagencia.online/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
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
          kicker="What you can contract today"
          title="Accessibility consulting built around evidence."
          lead="Six services, one operating model: scope, test, prioritize, remediate, verify, govern. Each engagement produces findings you can defend — not a checklist you have to take on faith."
          illustration={{
            src: ilServices,
            alt: "",
            width: 1024,
            height: 1024,
            maxWidthClass: "lg:max-w-[480px]",
          }}
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
          kicker="Why this scope"
          statement="A Trusted Tester–certified practice, testing to WCAG 2.1 AA and Section 508 standards, with 10 years of accessibility compliance work across federal, state, and local government."
          closer="Findings carry a trace ID, a WCAG criterion, and a behavior log. Not just a score."
          items={[
            { icon: ShieldCheck, label: "Standards", value: "WCAG 2.1 AA · Section 508" },
            { icon: FileCheck2, label: "Deliverable", value: "Trace-backed finding records" },
            { icon: Timer, label: "Deadline", value: "April 26, 2027 coverage" },
          ]}
        />

        <section aria-labelledby="engagement-model" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  Engagement Model
                </div>
                <h2
                  id="engagement-model"
                  className="mt-2 max-w-[26ch] text-balance font-medium tracking-tight"
                  style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)" }}
                >
                  One operating model runs under every service.
                </h2>
                <p className="mt-4 max-w-[62ch] text-lg text-foreground/75">
                  Whichever service you start with, the work moves through the same six stages.
                  That's what makes a finding from week two comparable to a finding from month six.
                </p>
              </div>
              <div className="lg:col-span-5">
                <Illustration
                  src={ilVerify}
                  alt=""
                  width={1024}
                  height={1024}
                  blob
                  accents
                  className="mx-auto w-full max-w-[320px] lg:max-w-[380px]"
                />
              </div>
            </div>
            <EngagementRail />
          </div>
        </section>

        <section aria-labelledby="service-catalog" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-24">
            <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <Layers aria-hidden="true" strokeWidth={1.75} className="h-8 w-8 text-signal" />
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    Service Catalog
                  </div>
                </div>
                <h2
                  id="service-catalog"
                  className="mt-3 max-w-[26ch] text-balance font-medium tracking-tight"
                  style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)" }}
                >
                  Four services available now. Two in Phase 2.
                </h2>
                <p className="mt-4 max-w-[58ch] text-lg text-foreground/75">
                  Every card carries its own trace ID and status, so scope conversations start from
                  the record rather than from a brochure.
                </p>
              </div>
              <div className="lg:col-span-4">
                <Illustration
                  src={ilDeadline}
                  alt=""
                  width={1008}
                  height={1008}
                  blob={false}
                  accents={false}
                  className="mx-auto hidden w-full max-w-[260px] lg:block"
                />
              </div>
            </div>
            <ServiceCardGrid />
          </div>
        </section>


        <section aria-labelledby="phase-scope" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <CalendarClock aria-hidden="true" strokeWidth={1.75} className="h-8 w-8 text-signal" />
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  Availability
                </div>
              </div>
              <h2
                id="phase-scope"
                className="mt-3 max-w-[20ch] text-balance font-medium tracking-tight"
                style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)" }}
              >
                What you can contract today.
              </h2>
              <p className="mt-4 max-w-[44ch] text-lg text-foreground/75">
                Hard MVP and Phase 1 services are contractable now. Phase 2 services are scoped and
                scheduled, not sold ahead of delivery.
              </p>
              <Illustration
                src={ilDocs}
                alt=""
                width={1024}
                height={1024}
                blob
                accents={false}
                className="mt-8 hidden max-w-[280px] lg:block"
              />

            </div>
            <div className="lg:col-span-8">
              <PhaseScopeDiagram />
            </div>
          </div>
        </section>


        <CtaBand
          title="Start with the service that matches your deadline."
          lead="Tell us where your Title II exposure sits today and we'll scope the shortest defensible path to coverage."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

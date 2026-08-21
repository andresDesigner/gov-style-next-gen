import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2, AlertOctagon, Fingerprint, BadgeCheck, Clock, Landmark } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { TrustBand } from "@/components/site/TrustBand";
import { Illustration } from "@/components/home/Illustration";
import { operatingPrinciples, founderBio } from "@/components/site/content";
import { useInView } from "@/hooks/use-in-view";
import ilAboutAsset from "@/assets/il-07-about.png.asset.json";

const ilAbout = ilAboutAsset.url;

const PRINCIPLE_ICONS = [FileCheck2, AlertOctagon, Fingerprint];

const TITLE = "About — Why ACT Verified exists";
const DESC =
  "ACT Verified is a consulting-led accessibility assurance practice under Zenzo LLC, bringing evidence-grade rigor to ADA Title II verification for public-sector organizations.";
const URL = "https://actweb.blitzagencia.online/about";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function PrinciplesGrid() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";
  return (
    <div ref={ref} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {operatingPrinciples.map((p, i) => {
        const Icon = PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length];
        return (
          <article
            key={p.n}
            data-inview={state}
            style={{ ["--stagger" as string]: i }}
            className="reveal reveal-stagger group relative overflow-hidden rounded-xl border border-foreground/15 bg-card p-8 shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-8 select-none text-[8rem] font-bold leading-none tracking-tighter text-foreground/[0.05] transition-colors duration-300 group-hover:text-primary/10"
            >
              {String(i + 1)}
            </span>
            <Icon aria-hidden="true" strokeWidth={1.75} className="relative h-9 w-9 text-signal" />
            <div className="relative mt-4 font-mono text-[10px] uppercase tracking-widest text-primary">
              Principle {p.n}
            </div>
            <h3 className="relative mt-2 text-lg font-semibold leading-tight tracking-tight">
              {p.title}
            </h3>
            <p className="relative mt-3 max-w-[34ch] text-sm leading-relaxed text-foreground/75">
              {p.body}
            </p>
          </article>
        );
      })}
    </div>

  );
}

function AboutPage() {
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
          kicker="About · Practice"
          title="Why ACT Verified exists."
          lead="ACT Verified is a consulting-led accessibility assurance practice operated under Zenzo LLC, built to bring evidence-grade rigor to accessibility verification for public-sector and regulated organizations facing legal exposure under ADA Title II."
          illustration={{ src: ilAbout, alt: "", width: 695, height: 904, maxWidthClass: "lg:max-w-[380px]", blob: false, accents: false }}
        />

        <TrustBand
          kicker="Credentials"
          statement="A Trusted Tester–certified practice, testing to WCAG 2.1 AA and Section 508 standards, with 10 years of accessibility compliance work across federal, state, and local government."
          items={[
            { icon: BadgeCheck, label: "Certification", value: "Section 508 Trusted Tester" },
            { icon: Clock, label: "Experience", value: "10+ years" },
            { icon: Landmark, label: "Levels served", value: "Federal · State · Local" },
          ]}
        />

        <section aria-labelledby="founder" className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Practice Lead
              </div>
              <Illustration
                src={ilAbout}
                alt=""
                width={1024}
                height={1024}
                blob
                accents={false}
                className="mt-4 max-w-[240px]"
              />
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-foreground/10 lg:pl-10">
              <h2
                id="founder"
                className="text-3xl font-medium tracking-tight md:text-4xl"
              >
                A Trusted Tester–led practice.
              </h2>
              <blockquote className="mt-6 border-l-2 border-signal pl-6 text-lg leading-relaxed text-foreground/85">
                {founderBio}
              </blockquote>

            </div>
          </div>
        </section>

        <section aria-labelledby="principles" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Operating Principles
            </div>
            <h2
              id="principles"
              className="mt-2 max-w-[26ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
            >
              Three rules the work never bends.
            </h2>
            <PrinciplesGrid />
          </div>
        </section>

        <section aria-labelledby="entity" className="border-b border-foreground/10">
          <div className="mx-auto max-w-[1200px] px-6 py-16">
            <div className="max-w-[70ch] border-l-2 border-primary bg-secondary/60 px-6 py-5">
              <h2
                id="entity"
                className="font-mono text-[10px] uppercase tracking-widest text-foreground/60"
              >
                Parent Entity Disclosure
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                ACT Verified is a consulting practice operated under Zenzo LLC, the legal entity
                behind the brand. The same disclosure appears in the site footer and on every
                contracting document.
              </p>
            </div>
          </div>
        </section>

        <CtaBand
          title="Talk to the people who will do the work."
          lead="No account layer, no handoff to a junior queue. The practice lead scopes the engagement."
        />
      </main>

      <SiteFooter />
    </div>
  );
}

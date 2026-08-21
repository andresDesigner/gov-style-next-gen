import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Lock,
  Send,
  PhoneCall,
  ClipboardList,
  FileSearch,
} from "lucide-react";
import { z } from "zod";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Illustration } from "@/components/home/Illustration";
import {
  contactServices,
  contactEntityTypes,
  contactTimelines,
} from "@/components/site/content";
import ilContactAsset from "@/assets/il-06-contact.png.asset.json";
const ilContact = ilContactAsset.url;

const NEXT_STEPS = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "You send the intake",
    body: "Service, entity type, timeline and a short description of the surface at risk.",
  },
  {
    icon: PhoneCall,
    step: "Step 2",
    title: "30-minute readiness call",
    body: "We map your deadline exposure and name the shortest defensible path to coverage.",
  },
  {
    icon: FileSearch,
    step: "Step 3",
    title: "Scoped proposal",
    body: "Written scope, standards, evidence formats and delivery dates — reviewable by procurement.",
  },
];


const TITLE = "Contact — Let's talk about your Title II timeline";
const DESC =
  "Tell us where your organization stands on ADA Title II accessibility and we'll route you to the right next step: readiness sprint, audit, remediation, or verification.";
const URL = "https://actweb.blitzagencia.online/contact";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(100, "Keep this under 100 characters"),
  organization: z
    .string()
    .trim()
    .min(1, "Enter your organization")
    .max(150, "Keep this under 150 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email")
    .email("Enter a valid email address")
    .max(255, "Keep this under 255 characters"),
  phone: z.string().trim().max(40, "Keep this under 40 characters").optional().or(z.literal("")),
  service: z.string().trim().min(1, "Select a service"),
  entity: z.string().trim().min(1, "Select an entity type"),
  timeline: z.string().trim().min(1, "Select a timeline"),
  population: z.string().trim().max(80, "Keep this under 80 characters").optional().or(z.literal("")),
  description: z
    .string()
    .trim()
    .min(1, "Add a short description")
    .max(1000, "Keep this under 1000 characters"),
});

type FieldName = keyof z.infer<typeof schema>;

const fieldClass =
  "mt-2 h-11 w-full border border-foreground/25 bg-card px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-widest text-foreground/60"
      >
        {label}
        {optional ? <span className="ml-1 text-foreground/40">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactPage() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = document.getElementById(String(parsed.error.issues[0]?.path[0] ?? ""));
      first?.focus();
      return;
    }
    setErrors({});
    setSent(true);
  }

  const describedBy = (name: FieldName) => (errors[name] ? `${name}-error` : undefined);

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
          kicker="Contact · Intake"
          title="Let's talk about your Title II timeline."
          lead="Tell us where you are and we'll route you to the right next step — readiness sprint, audit, remediation, or independent verification."
          illustration={{ src: ilContact, alt: "", width: 916, height: 786, maxWidthClass: "lg:max-w-[380px]" }}
        />

        <section aria-labelledby="next-steps" className="border-b border-foreground/10 bg-secondary/30">
          <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16">
            <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/55">
              What happens next
            </div>
            <h2
              id="next-steps"
              className="mt-2 max-w-[24ch] text-balance text-3xl font-medium tracking-tight md:text-4xl"
            >
              Three steps from intake to scoped proposal.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {NEXT_STEPS.map((s) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.step}
                    className="group rounded-xl border border-foreground/15 bg-card p-7 shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
                  >
                    <Icon aria-hidden="true" strokeWidth={1.75} className="h-9 w-9 text-signal" />
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {s.step}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{s.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>



        <section className="border-b border-foreground/10">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-12 sm:py-16 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {sent ? (
                <div
                  role="status"
                  className="border border-foreground/15 bg-card p-8"
                >
                  <div className="flex items-center gap-3 text-accent">
                    <CheckCircle2 aria-hidden="true" strokeWidth={2} className="h-6 w-6" />
                    <span className="font-mono text-[11px] uppercase tracking-widest">
                      Request received
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight">
                    Thanks — your details are captured.
                  </h2>
                  <p className="mt-3 max-w-[56ch] text-foreground/75">
                    We reply within one business day with a scoped next step. If your matter is
                    time-critical, book a readiness call directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-gov mt-6 inline-flex items-center gap-2 border-[1.5px] border-foreground/80 px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground/[0.04]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit} className="border border-foreground/15 bg-card p-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    Intake Form
                  </div>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight">
                    Tell us about the engagement.
                  </h2>

                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field id="name" label="Name" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={describedBy("name")}
                        className={fieldClass}
                      />
                    </Field>
                    <Field id="organization" label="Organization" error={errors.organization}>
                      <input
                        id="organization"
                        name="organization"
                        autoComplete="organization"
                        aria-invalid={!!errors.organization}
                        aria-describedby={describedBy("organization")}
                        className={fieldClass}
                      />
                    </Field>
                    <Field id="email" label="Email" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={describedBy("email")}
                        className={fieldClass}
                      />
                    </Field>
                    <Field id="phone" label="Phone" optional error={errors.phone}>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-describedby={describedBy("phone")}
                        className={fieldClass}
                      />
                    </Field>
                    <Field id="service" label="Service of interest" error={errors.service}>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        aria-invalid={!!errors.service}
                        aria-describedby={describedBy("service")}
                        className={fieldClass}
                      >
                        <option value="">Select a service</option>
                        {contactServices.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field id="entity" label="Entity type" error={errors.entity}>
                      <select
                        id="entity"
                        name="entity"
                        defaultValue=""
                        aria-invalid={!!errors.entity}
                        aria-describedby={describedBy("entity")}
                        className={fieldClass}
                      >
                        <option value="">Select an entity type</option>
                        {contactEntityTypes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field id="timeline" label="Approximate timeline" error={errors.timeline}>
                      <select
                        id="timeline"
                        name="timeline"
                        defaultValue=""
                        aria-invalid={!!errors.timeline}
                        aria-describedby={describedBy("timeline")}
                        className={fieldClass}
                      >
                        <option value="">Select a timeline</option>
                        {contactTimelines.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      id="population"
                      label="Population served / size"
                      optional
                      error={errors.population}
                    >
                      <input
                        id="population"
                        name="population"
                        aria-describedby={describedBy("population")}
                        className={fieldClass}
                      />
                    </Field>
                  </div>

                  <div className="mt-6">
                    <Field id="description" label="Brief description" error={errors.description}>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        aria-invalid={!!errors.description}
                        aria-describedby={describedBy("description")}
                        className={fieldClass.replace("h-11", "h-auto") + " py-3 leading-relaxed"}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="btn-gov mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    <Send aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
                    Send
                  </button>
                </form>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="surface-navy p-6">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-background/70">
                    <Lock aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                    Secure Intake
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-background/85">
                    For active engagements, send documents through{" "}
                    <span className="font-semibold text-background">Client Upload</span> at
                    upload.actverified.com — not through this form.
                  </p>
                </div>

                <dl className="mt-6 divide-y divide-foreground/10 border border-foreground/15 bg-card">
                  {[
                    { k: "Response time", v: "One business day" },
                    { k: "Scope call", v: "30 minutes, no charge" },
                    { k: "Coverage", v: "Web · App · PDF · Documents" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-4 p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-foreground/55">
                        {row.k}
                      </dt>
                      <dd className="text-sm font-semibold tracking-tight">{row.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 text-xs leading-relaxed text-foreground/60">
                  Informational only — submitting this form does not create a consulting
                  relationship and is not legal advice.
                </p>
                <Illustration
                  src={ilContact}
                  alt=""
                  width={916}
                  height={786}
                  blob={false}
                  accents={false}
                  className="mt-8 hidden max-w-[240px] lg:block"
                />

              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

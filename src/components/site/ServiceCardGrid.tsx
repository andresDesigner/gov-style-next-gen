import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { primaryServices, secondaryServices } from "@/components/home/shared";
import { serviceIconMap } from "@/components/home/ServiceIcon";
import { serviceDetails, serviceStatus } from "@/components/site/content";


/**
 * Accent role per service inside the approved navy / cobalt / coral bichromy.
 * No new hues — only a different role for each stage of the problem.
 */
const ACCENT: Record<string, { bar: string; icon: string; code: string }> = {
  "S-01": { bar: "bg-signal", icon: "text-signal", code: "text-signal-strong" },
  "S-02": { bar: "bg-accent", icon: "text-accent", code: "text-accent" },
  "S-03": { bar: "bg-primary", icon: "text-primary", code: "text-primary" },
  "S-04": { bar: "bg-primary/70", icon: "text-primary", code: "text-primary" },
};

function ServiceCard({
  id,
  title,
  desc,
  index,
  state,
}: {
  id: string;
  title: string;
  desc: string;
  index: number;
  state: string;
}) {
  const [open, setOpen] = useState(false);
  const detail = serviceDetails[id];
  const Icon = serviceIconMap[id];
  const accent = ACCENT[id] ?? ACCENT["S-02"];
  const panelId = `${id}-detail`;

  return (
    <article
      id={id.toLowerCase()}
      data-inview={state}
      style={{ ["--stagger" as string]: index }}
      className="reveal reveal-stagger group relative flex scroll-mt-28 flex-col overflow-hidden rounded-xl border border-foreground/15 bg-card shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
    >
      <span aria-hidden="true" className={`block h-1.5 w-full ${accent.bar}`} />

      <div className="relative flex flex-1 flex-col p-6 sm:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-3 -top-6 select-none text-[7rem] font-bold leading-none tracking-tighter text-foreground/[0.045]"
        >
          {String(index + 1)}
        </span>

        <div className="relative flex items-start justify-between gap-4">
          <div className="font-mono text-sm font-bold tracking-widest text-foreground">
            <span>{id}</span>
            <span aria-hidden="true" className="mx-1.5 text-foreground/30">
              ·
            </span>
            <span className="text-accent">STATUS: {serviceStatus[id] ?? "AVAILABLE"}</span>
          </div>
          {Icon ? (
            <span aria-hidden="true" className={`shrink-0 ${accent.icon}`}>
              <Icon className="h-10 w-10" strokeWidth={1.75} />
            </span>
          ) : null}
        </div>

        <div className={`relative mt-4 font-mono text-[11px] tracking-widest ${accent.code}`}>
          TRACE-1{String(index + 1)}
        </div>
        <h3 className="relative mt-1 text-xl font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h3>

        {detail ? (
          <p className="relative mt-3 max-w-[46ch] border-l-2 border-foreground/15 pl-3 text-[15px] font-medium leading-relaxed text-foreground/90">
            {detail.impact}
          </p>
        ) : null}

        <p className="relative mt-3 max-w-[46ch] text-sm leading-relaxed text-foreground/70">
          {desc}
        </p>

        {detail ? (
          <p className="relative mt-4 text-sm leading-relaxed text-foreground/85">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              Deliverable —{" "}
            </span>
            <span className="font-medium text-foreground">{detail.deliverable}</span>
          </p>
        ) : null}


        {detail ? (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="relative mt-6 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary hover:underline"
            >
              {open ? "Close details" : "Learn more"}
              <ChevronDown
                aria-hidden="true"
                strokeWidth={2}
                className={`h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open ? (
              <div
                id={panelId}
                className="relative mt-5 border-t border-foreground/15 pt-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  The problem
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{detail.problem}</p>

                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  What it includes
                </div>
                <ul className="mt-2 space-y-2">
                  {detail.includes.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span
                        aria-hidden="true"
                        className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${accent.bar}`}
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#book"
                  className="btn-gov mt-6 inline-flex min-h-11 items-center gap-2 bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
                  Book a Readiness Call
                </a>

              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Services hub card grid: four primary services with per-service accent role,
 * business-impact line and an in-card expandable detail, plus the two Phase 2
 * services behind a dashed treatment.
 */
export function ServiceCardGrid() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {primaryServices.map((s, i) => (
          <ServiceCard key={s.id} id={s.id} title={s.title} desc={s.desc} index={i} state={state} />
        ))}
      </div>

      <p className="mt-6 border-l-2 border-signal pl-4 font-mono text-[11px] uppercase tracking-widest text-foreground/70">
        Every engagement gets a TRACE ID. Every finding links back to it.
      </p>

      <div className="mt-12 border-t border-foreground/15 pt-8">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-foreground/60">
          Phase 2 — Upcoming
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {secondaryServices.map((s, i) => {
            const detail = serviceDetails[s.id];
            const Icon = serviceIconMap[s.id];
            return (
              <article
                key={s.id}
                id={s.id.toLowerCase()}
                aria-disabled="true"
                className="relative flex scroll-mt-28 flex-col rounded-xl border border-dashed border-foreground/30 bg-card p-6 shadow-sm motion-safe:transition-shadow motion-safe:hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="font-mono text-sm font-bold tracking-widest text-foreground">
                    <span>{s.id}</span>
                    <span aria-hidden="true" className="mx-1.5 text-foreground/30">
                      ·
                    </span>
                    <span className="text-foreground/70">STATUS: PENDING</span>
                  </div>
                  <span className="inline-flex items-center bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    Phase 2 — not yet contractable
                  </span>
                </div>

                <span className="mt-4 inline-flex w-fit items-center gap-2 border border-signal/50 bg-signal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-signal-strong">
                  Most requested after verification
                </span>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-foreground/70">
                      TRACE-2{String(i + 1)}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  </div>
                  {Icon ? (
                    <span aria-hidden="true" className="shrink-0 text-foreground/45">
                      <Icon className="h-9 w-9" strokeWidth={1.75} />
                    </span>
                  ) : null}
                </div>

                {detail ? (
                  <p className="mt-3 max-w-[52ch] border-l-2 border-foreground/15 pl-3 text-[15px] font-medium leading-relaxed text-foreground/90">
                    {detail.impact}
                  </p>
                ) : null}

                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-foreground/70">
                  {s.desc}
                </p>

                {detail ? (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    <span className="font-semibold text-foreground">Deliverable — </span>
                    {detail.deliverable}
                  </p>
                ) : null}

                <span
                  aria-hidden="true"
                  className="btn-gov mt-6 inline-flex min-h-11 w-fit cursor-not-allowed items-center gap-2 border-[1.5px] border-foreground/25 px-4 py-2.5 text-sm font-medium text-foreground/45"
                >
                  Not available yet
                </span>
                <p className="mt-2 text-xs text-foreground/70">
                  Ask about it on a readiness call — we will tell you when it opens.
                </p>

              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { primaryServices, secondaryServices } from "@/components/home/shared";

const STATUS = ["ACTIVE", "ACTIVE", "VERIFIED", "VERIFIED"] as const;

/**
 * Services hub card grid: four primary services at a larger scale than the
 * home teaser, plus the two Phase 2 services behind a dashed treatment.
 */
export function ServiceCardGrid() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {primaryServices.map((s, i) => {
          return (
            <article
              key={s.id}
              data-inview={state}
              style={{ ["--stagger" as string]: i }}
              className="reveal reveal-stagger group relative flex flex-col overflow-hidden rounded-xl border border-foreground/15 bg-card p-8 shadow-sm motion-safe:transition-[box-shadow,transform] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-8 select-none text-[8rem] font-bold leading-none tracking-tighter text-foreground/[0.045] transition-colors duration-300 group-hover:text-primary/10"
              >
                {String(i + 1)}
              </span>

              <div className="relative mb-3 font-mono text-sm font-bold tracking-widest text-foreground">
                <span>TRACE-1{String(i + 1)}</span>
                <span aria-hidden="true" className="mx-1.5 text-foreground/30">
                  ·
                </span>
                <span className="text-accent">STATUS: {STATUS[i]}</span>
              </div>

              <div className="relative font-mono text-[10px] tracking-widest text-primary">
                {s.id}
              </div>
              <h3 className="relative mt-1 text-base font-semibold leading-tight tracking-tight text-foreground/90">
                {s.title}
              </h3>
              <p className="relative mt-3 max-w-[46ch] text-sm leading-relaxed text-foreground/75">
                {s.desc}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                Learn more
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={2}
                  className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1"
                />
              </span>
            </article>
          );
        })}
      </div>

      <div className="mt-12 border-t border-foreground/15 pt-8">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-foreground/60">
          Phase 2 — Upcoming
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {secondaryServices.map((s, i) => {
            return (
              <article
                key={s.id}
                className="relative flex flex-col rounded-xl border border-dashed border-foreground/30 bg-card p-6 shadow-sm motion-safe:transition-shadow motion-safe:hover:shadow-md"
              >
                <span className="absolute right-4 top-4 inline-flex items-center bg-primary px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Phase 2
                </span>

                <div className="relative mb-3 pr-24 font-mono text-sm font-bold tracking-widest text-foreground">
                  <span>TRACE-2{String(i + 1)}</span>
                  <span aria-hidden="true" className="mx-1.5 text-foreground/30">
                    ·
                  </span>
                  <span className="text-foreground/45">STATUS: PENDING</span>
                </div>

                <div className="font-mono text-[10px] tracking-widest text-foreground/50">
                  {s.id}
                </div>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>

                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-foreground/75">
                  {s.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

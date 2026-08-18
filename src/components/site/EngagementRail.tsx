import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { engagement } from "@/components/home/shared";
import { engagementIcons } from "@/components/home/serviceIcons";
import { engagementOutputs } from "@/components/site/content";

/**
 * Six-step engagement model as a horizontal rail.
 * The connecting rule draws itself on scroll and the numbered nodes light up
 * in cascade. On small screens it becomes a snap-scrolling track.
 */
export function EngagementRail() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <div ref={ref} className="mt-12">
      <div className="relative">
        {/* connecting rule */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[40px] hidden h-px overflow-hidden md:block"
        >
          <span
            data-inview={state}
            className="rail-grow block h-px w-full origin-left bg-foreground/20"
          />
          <span
            data-inview={state}
            className="loop-sweep absolute left-0 top-0 h-px w-24 bg-signal"
            style={{ ["--travel" as string]: "100vw", ["--loop-speed" as string]: "5s" }}
          />
        </div>

        <ol className="grid snap-x snap-mandatory auto-cols-[minmax(230px,1fr)] grid-flow-col gap-5 overflow-x-auto pb-4 md:grid-flow-row md:grid-cols-6 md:overflow-visible md:pb-0">
          {engagement.map((step, i) => {
            const Icon = engagementIcons[step.n];
            const isLast = i === engagement.length - 1;
            return (
              <li
                key={step.n}
                data-inview={state}
                style={{ ["--stagger" as string]: i }}
                className="reveal reveal-stagger relative snap-start"
              >
                <span
                  aria-hidden="true"
                  data-inview={state}
                  className="reveal-icon relative z-10 grid h-20 w-20 place-items-center bg-background text-signal"
                >
                  {Icon ? <Icon strokeWidth={1.75} className="h-14 w-14" /> : null}
                </span>

                <div className="mt-4 flex items-baseline gap-2.5">
                  <span
                    className="font-mono font-bold leading-none tabular-nums text-signal-strong"
                    style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)" }}
                  >
                    {step.n}
                  </span>
                  <span className="text-lg font-semibold tracking-tight">{step.label}</span>
                </div>

                <p className="mt-2 max-w-[26ch] text-[15px] leading-relaxed text-foreground/75">
                  {step.desc}
                </p>

                <p className="mt-3 inline-flex max-w-[26ch] border-l-2 border-signal pl-2.5 font-mono text-[11px] uppercase tracking-widest text-foreground/70">
                  {engagementOutputs[step.n]}
                </p>

                {!isLast ? (
                  <ArrowRight
                    aria-hidden="true"
                    strokeWidth={2}
                    className="absolute right-1 top-[26px] hidden h-5 w-5 text-signal md:block"
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

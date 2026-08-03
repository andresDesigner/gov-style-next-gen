import { useInView } from "@/hooks/use-in-view";
import { engagement } from "@/components/home/shared";
import { engagementIcons } from "@/components/home/serviceIcons";

/**
 * Six-step engagement model as a horizontal rail.
 * The connecting rule draws itself on scroll and the numbered nodes light up
 * in cascade. On small screens it becomes a snap-scrolling track.
 */
export function EngagementRail() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <div ref={ref} className="mt-10">
      <div className="relative">
        {/* connecting rule */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[32px] hidden h-px overflow-hidden md:block"
        >
          <span
            data-inview={state}
            className="rail-grow block h-px w-full origin-left bg-foreground/20"
          />
        </div>

        <ol className="grid snap-x snap-mandatory auto-cols-[minmax(190px,1fr)] grid-flow-col gap-4 overflow-x-auto pb-4 md:grid-flow-row md:grid-cols-6 md:overflow-visible md:pb-0">
          {engagement.map((step, i) => {
            const Icon = engagementIcons[step.n];
            return (
              <li
                key={step.n}
                data-inview={state}
                style={{ ["--stagger" as string]: i }}
                className="reveal reveal-stagger snap-start"
              >
                <span
                  aria-hidden="true"
                  data-inview={state}
                  className="reveal-icon relative z-10 grid h-16 w-16 place-items-center border-[1.5px] border-signal/45 bg-background text-primary shadow-[0_0_0_5px_color-mix(in_oklab,var(--signal)_9%,transparent)] transition-colors"
                >
                  {Icon ? <Icon strokeWidth={1.75} className="h-7 w-7" /> : null}
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-[10px] tabular-nums text-signal-strong">{step.n}</span>
                  <span className="text-sm font-semibold tracking-tight">{step.label}</span>
                </div>

                <p className="mt-1 max-w-[24ch] text-sm text-foreground/70">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

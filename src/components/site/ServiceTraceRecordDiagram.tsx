import { ShieldCheck, ArrowRight, ArrowDown, Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const TRACE_STEPS = ["Scope", "Test", "Finding", "Evidence", "Verification"];

/**
 * Service → Trace → Record flow diagram.
 * Shows how a service (S-01) generates a TRACE record that accumulates
 * verified stages (Scope, Test, Finding, Evidence, Verification) before
 * becoming a verified record. Animated stages light up in sequence.
 *
 * Horizontal (3 squarish boxes) on sm+; stacked vertically on mobile.
 */
export function ServiceTraceRecordDiagram() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Diagram: a service generates a trace record that passes through Scope, Test, Finding, Evidence and Verification, ending as a verified record."
      className="mx-auto w-full max-w-[640px]"
    >
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
        {/* SERVICE */}
        <div className="flex flex-[0.9] flex-row items-center justify-between gap-3 rounded-lg border border-foreground/15 bg-background px-4 py-5 shadow-sm sm:flex-col sm:justify-center sm:gap-0 sm:px-4 sm:py-6 sm:text-center">
          <div className="sm:mt-0">
            <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              Service
            </div>
            <div className="font-mono text-lg font-semibold text-accent">S-01</div>
          </div>
          <span
            className="inline-block h-1.5 w-10 rounded-full bg-accent/70 sm:mt-2 sm:w-8"
            aria-hidden="true"
          />
        </div>

        <FlowArrow delay={0} active={inView} />

        {/* TRACE */}
        <div className="flex-[1.5] rounded-lg border border-foreground/15 bg-background px-4 py-5 shadow-sm sm:px-5 sm:py-6">
          <div className="sm:text-center">
            <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              Trace
            </div>
            <div className="font-mono text-lg font-semibold text-foreground">TRACE-11</div>
          </div>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:gap-2.5 sm:space-y-0">
            {TRACE_STEPS.map((step, i) => (
              <li
                key={step}
                data-inview={inView ? "true" : "false"}
                style={{ transitionDelay: `${300 + i * 220}ms` }}
                className="flex translate-x-2 items-center gap-2 font-mono text-[11px] text-foreground/60 opacity-0 transition-all duration-500 data-[inview=true]:translate-x-0 data-[inview=true]:opacity-100"
              >
                <span
                  data-inview={inView ? "true" : "false"}
                  style={{ transitionDelay: `${300 + i * 220}ms` }}
                  className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-emerald-600/40 bg-emerald-50 text-emerald-600 opacity-0 transition-opacity duration-500 data-[inview=true]:opacity-100 dark:bg-emerald-950/40"
                >
                  <Check aria-hidden="true" strokeWidth={3} className="h-2.5 w-2.5" />
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <FlowArrow delay={1400} active={inView} />

        {/* RECORD */}
        <div className="flex flex-[0.9] flex-row items-center justify-between gap-3 rounded-lg border border-emerald-600/30 bg-background px-4 py-5 shadow-sm sm:flex-col sm:justify-center sm:gap-0 sm:px-4 sm:py-6 sm:text-center">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              Record
            </div>
            <div className="font-mono text-[13px] font-semibold uppercase tracking-wider text-foreground">
              Verified
            </div>
          </div>
          <span
            data-inview={inView ? "true" : "false"}
            style={{ transitionDelay: "1600ms" }}
            className="flex h-9 w-9 shrink-0 scale-50 items-center justify-center rounded-full bg-emerald-600 text-white opacity-0 transition-all duration-500 data-[inview=true]:scale-100 data-[inview=true]:opacity-100 sm:mt-2"
          >
            <ShieldCheck aria-hidden="true" strokeWidth={2} className="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function FlowArrow({ delay, active }: { delay: number; active: boolean }) {
  return (
    <div
      className="flex items-center justify-center sm:h-6"
      aria-hidden="true"
    >
      <span
        data-inview={active ? "true" : "false"}
        style={{ transitionDelay: `${delay}ms` }}
        className="flex items-center text-accent opacity-0 transition-opacity duration-500 data-[inview=true]:opacity-100 sm:flex-col"
      >
        {/* Horizontal connector (desktop) */}
        <span className="hidden items-center sm:flex">
          <span className="h-px w-4 bg-accent/60" />
          <ArrowRight strokeWidth={2} className="-ml-1 h-3.5 w-3.5 motion-safe:animate-pulse" />
        </span>
        {/* Vertical connector (mobile, stacked) */}
        <span className="flex flex-col items-center sm:hidden">
          <span className="h-3 w-px bg-accent/60" />
          <ArrowDown strokeWidth={2} className="-mt-1 h-3.5 w-3.5 motion-safe:animate-pulse" />
        </span>
      </span>
    </div>
  );
}

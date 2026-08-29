import { ShieldCheck, ArrowRight, Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const TRACE_STEPS = ["Scope", "Test", "Finding", "Evidence", "Verification"];

/**
 * Service → Trace → Record flow diagram.
 * Shows how a service (S-01) generates a TRACE record that accumulates
 * verified stages (Scope, Test, Finding, Evidence, Verification) before
 * becoming a verified record. Animated stages light up in sequence.
 */
export function ServiceTraceRecordDiagram() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Diagram: a service generates a trace record that passes through Scope, Test, Finding, Evidence and Verification, ending as a verified record."
      className="mx-auto w-full max-w-[560px]"
    >
      <div className="flex items-stretch gap-2 sm:gap-3">
        {/* SERVICE */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-foreground/15 bg-background px-2 py-4 text-center shadow-sm">
          <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
            Service
          </div>
          <div className="mt-1 font-mono text-base font-semibold text-accent">S-01</div>
          <span className="mt-2 inline-block h-1.5 w-8 rounded-full bg-accent/70" aria-hidden="true" />
        </div>

        <FlowArrow delay={0} active={inView} />

        {/* TRACE */}
        <div className="flex-[1.4] rounded-lg border border-foreground/15 bg-background px-3 py-4 shadow-sm">
          <div className="text-center">
            <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              Trace
            </div>
            <div className="font-mono text-base font-semibold text-foreground">TRACE-11</div>
          </div>
          <ul className="mt-3 space-y-1.5">
            {TRACE_STEPS.map((step, i) => (
              <li
                key={step}
                data-inview={inView ? "true" : "false"}
                style={{ transitionDelay: `${300 + i * 220}ms` }}
                className="flex translate-x-2 items-center gap-1.5 font-mono text-[10px] text-foreground/60 opacity-0 transition-all duration-500 data-[inview=true]:translate-x-0 data-[inview=true]:opacity-100"
              >
                <span
                  data-inview={inView ? "true" : "false"}
                  style={{ transitionDelay: `${300 + i * 220}ms` }}
                  className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-emerald-600/40 bg-emerald-50 text-emerald-600 opacity-0 transition-opacity duration-500 data-[inview=true]:opacity-100 dark:bg-emerald-950/40"
                >
                  <Check aria-hidden="true" strokeWidth={3} className="h-2 w-2" />
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <FlowArrow delay={1400} active={inView} />

        {/* RECORD */}
        <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-emerald-600/30 bg-background px-2 py-4 text-center shadow-sm">
          <div className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
            Record
          </div>
          <div className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
            Verified
          </div>
          <span
            data-inview={inView ? "true" : "false"}
            style={{ transitionDelay: "1600ms" }}
            className="mt-2 flex h-8 w-8 scale-50 items-center justify-center rounded-full bg-emerald-600 text-white opacity-0 transition-all duration-500 data-[inview=true]:scale-100 data-[inview=true]:opacity-100"
          >
            <ShieldCheck aria-hidden="true" strokeWidth={2} className="h-4.5 w-4.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function FlowArrow({ delay, active }: { delay: number; active: boolean }) {
  return (
    <div className="flex items-center" aria-hidden="true">
      <span
        data-inview={active ? "true" : "false"}
        style={{ transitionDelay: `${delay}ms` }}
        className="flex items-center text-accent opacity-0 transition-opacity duration-500 data-[inview=true]:opacity-100"
      >
        <span className="h-px w-2 bg-accent/60 sm:w-3" />
        <ArrowRight strokeWidth={2} className="-ml-1 h-3.5 w-3.5 motion-safe:animate-pulse" />
      </span>
    </div>
  );
}

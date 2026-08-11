import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export type TrustBandItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type TrustBandProps = {
  kicker?: string;
  statement: string;
  items?: TrustBandItem[];
};

/**
 * Navy statement band with coral signal icons — the same rhythm break used on
 * the home page so no interior page reads as a flat wall of text.
 */
export function TrustBand({ kicker = "Practice Facts", statement, items = [] }: TrustBandProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <section className="dot-grid-dark border-b border-foreground/10 bg-primary text-primary-foreground">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12"
      >
        <div className="lg:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-widest text-signal">
            {kicker}
          </div>
          <p className="mt-4 max-w-[52ch] text-balance text-xl font-medium leading-snug tracking-tight md:text-2xl">
            {statement}
          </p>
        </div>

        {items.length ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:gap-5">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  data-inview={state}
                  style={{ ["--stagger" as string]: i }}
                  className="reveal reveal-stagger flex items-start gap-4"
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="mt-0.5 h-8 w-8 shrink-0 text-signal"
                  />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60">
                      {item.label}
                    </div>
                    <div className="mt-1 text-base font-semibold tracking-tight">{item.value}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

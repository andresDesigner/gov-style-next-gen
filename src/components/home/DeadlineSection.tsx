import { useMemo } from "react";
import { useInView } from "@/hooks/use-in-view";

function monthsUntil(target: Date, now: Date = new Date()) {
  const months =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());
  return Math.max(0, months);
}

type DeadlineCard = {
  urgent: boolean;
  months: number;
  headline: string;
  desc: string;
  date: string;
};

/**
 * Standalone regulatory-deadline section (previously inside the hero).
 * Two comparison cards + a quiet timeline bar underneath.
 */
export function DeadlineSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  const cards = useMemo<DeadlineCard[]>(() => {
    const now = new Date();
    return [
      {
        urgent: true,
        months: monthsUntil(new Date(2027, 3, 26), now),
        headline: "50,000+ residents",
        desc: "Larger public entities",
        date: "April 26, 2027",
      },
      {
        urgent: false,
        months: monthsUntil(new Date(2028, 3, 26), now),
        headline: "Under 50,000 residents",
        desc: "Smaller entities · Special districts",
        date: "April 26, 2028",
      },
    ];
  }, []);

  return (
    <section
      aria-labelledby="deadlines-title"
      style={{ backgroundColor: "#e6ecf5" }}
      className="border-b border-foreground/10"
    >
      <div ref={ref} className="mx-auto max-w-[1240px] px-6 py-20 lg:py-24">
        <div className="font-mono text-[11px] uppercase tracking-widest text-foreground/60">
          Regulatory map · ADA Title II compliance deadlines
        </div>
        <h2
          id="deadlines-title"
          className="mt-3 max-w-[22ch] text-balance font-bold leading-[1.1] tracking-[-0.02em] text-foreground"
          style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}
        >
          When does this apply to your entity?
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-foreground/70">
          Compliance dates differ by population served — find your entity&apos;s date below.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <li
              key={card.date}
              data-inview={state}
              className={
                "reveal reveal-stagger relative flex flex-col rounded-xl bg-card p-6 shadow-sm motion-safe:transition-shadow motion-safe:hover:shadow-md " +
                (card.urgent
                  ? "border border-foreground/15"
                  : "border border-dashed border-foreground/25")
              }
              style={{ ["--stagger" as string]: `${i * 90}ms` }}
            >
              {card.urgent ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] rounded-l-xl"
                  style={{ backgroundColor: "var(--illus-coral)" }}
                />
              ) : null}

              <span
                className={
                  "inline-flex w-fit items-center gap-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest " +
                  (card.urgent
                    ? "text-[color:var(--illus-coral)]"
                    : "bg-secondary text-foreground/60")
                }
                style={
                  card.urgent
                    ? { backgroundColor: "color-mix(in oklab, var(--illus-coral) 14%, transparent)" }
                    : undefined
                }
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: card.urgent
                      ? "var(--illus-coral)"
                      : "currentColor",
                  }}
                />
                Due in ~{card.months} months
              </span>

              <div className="mt-5 text-2xl font-bold tracking-[-0.02em] text-foreground md:text-3xl">
                {card.headline}
              </div>
              <p
                className={
                  "mt-2 text-base " +
                  (card.urgent ? "text-foreground/70" : "text-foreground/60")
                }
              >
                {card.desc}
              </p>

              <div className="mt-5 border-t border-foreground/10 pt-4 font-mono text-[11px] uppercase tracking-widest text-primary">
                {card.date}
              </div>
            </li>
          ))}
        </ol>

        {/* Quiet timeline bar */}
        <div aria-hidden="true" className="mt-10">
          <div className="relative h-1.5 w-full bg-foreground/10">
            <div
              className="grow-x h-full bg-primary"
              data-inview={state}
              style={{ ["--target-w" as string]: "34%" }}
            />
            <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            <span className="absolute left-[34%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground/50 bg-card" />
            <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground/30 bg-card" />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/55">
            <span>Now</span>
            <span>2027</span>
            <span>2028</span>
          </div>
        </div>
      </div>
    </section>
  );
}

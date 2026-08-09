import type { ReactNode } from "react";

export type PageHeroProps = {
  kicker: string;
  title: string;
  lead?: string;
  /** Buttons rendered under the lead. */
  actions?: ReactNode;
  /** Optional visual rendered in the right column on large screens. */
  aside?: ReactNode;
  children?: ReactNode;
};

/**
 * Shared page hero: light-blue institutional surface with dot grid,
 * mono kicker, fluid H1 and an optional asymmetric right column.
 */
export function PageHero({ kicker, title, lead, actions, aside, children }: PageHeroProps) {
  return (
    <header
      className="dot-grid border-b border-foreground/10"
      style={{ backgroundColor: "#e6ecf5" }}
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-12 lg:py-20">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
            {kicker}
          </div>
          <h1
            className="mt-3 text-balance font-medium leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.6vw, 3.5rem)" }}
          >
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-[62ch] text-lg text-foreground/80">{lead}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
          {children}
        </div>
        {aside ? <div className="lg:col-span-5">{aside}</div> : null}
      </div>
    </header>
  );
}

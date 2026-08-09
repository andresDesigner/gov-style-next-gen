import { Download, Phone } from "lucide-react";

export type CtaBandProps = {
  kicker?: string;
  title: string;
  lead?: string;
  /** Secondary action label; defaults to the capability statement download. */
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
};

/** Navy closing band with the cobalt primary CTA. Used at the end of every page. */
export function CtaBand({
  kicker = "Book a Readiness Call",
  title,
  lead,
  secondaryLabel = "Download Capability Statement",
  secondaryHref = "#capability",
  id = "book",
}: CtaBandProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="dot-grid-dark bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-14 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {kicker}
          </div>
          <h2
            id={`${id}-title`}
            className="mt-3 max-w-[24ch] text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl"
          >
            {title}
          </h2>
          {lead ? (
            <p className="mt-4 max-w-[54ch] text-base font-medium text-primary-foreground/95">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col justify-end gap-3 lg:col-span-4 lg:items-end">
          <a
            href="/#book"
            className="btn-gov inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3 sm:w-auto text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Phone aria-hidden="true" strokeWidth={2} className="h-4 w-4" />
            Book a Readiness Call
          </a>
          <a
            href={secondaryHref}
            className="btn-gov inline-flex w-full items-center justify-center gap-2 border-[1.5px] border-primary-foreground/90 px-6 py-3 sm:w-auto text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

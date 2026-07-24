import { CheckCircle2, Terminal } from "lucide-react";

export type EvidenceArtifactField = {
  label: string;
  value: string;
  /** When true, render the value in cobalt to mark confirmed/defensible facts. */
  confirmed?: boolean;
};

export type EvidenceArtifactCardProps = {
  traceId: string;
  status?: string;
  browser?: string;
  os?: string;
  screenReader?: string;
  fields: EvidenceArtifactField[];
  caption?: string;
  className?: string;
};

/**
 * Terminal-style evidence card used to render structured verification findings.
 * Design tokens: navy-900 surface, monospace, gray-500 labels, cobalt confirmed values.
 * Reused across the site to keep artifact semantics visually consistent.
 */
export function EvidenceArtifactCard({
  traceId,
  status,
  browser,
  os,
  screenReader,
  fields,
  caption = "Verification finding record",
  className,
}: EvidenceArtifactCardProps) {
  const meta = [screenReader, browser, os].filter(Boolean).join(" · ");

  return (
    <figure
      aria-label={caption}
      className={
        "border border-foreground/15 bg-foreground text-background " + (className ?? "")
      }
    >
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-background/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
        <span className="flex items-center gap-2 text-background/60">
          <Terminal aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5" />
          <span>Finding · <span className="text-background/85 font-medium">{traceId}</span></span>
          {status ? (
            <span className="ml-2 inline-flex items-center gap-1 text-[color:var(--color-accent)]">
              <CheckCircle2 aria-hidden="true" strokeWidth={2} className="h-3.5 w-3.5" />
              <span className="font-semibold">{status}</span>
            </span>
          ) : null}
        </span>
        {meta ? <span className="text-background/50">{meta}</span> : null}
      </figcaption>

      <dl className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-1.5 p-5 font-mono text-[12px] leading-relaxed">
        {fields.map((f) => (
          <div key={f.label} className="contents">
            <dt className="text-background/45 uppercase tracking-wider text-[10px] pt-0.5">
              {f.label}
            </dt>
            <dd
              className={
                f.confirmed
                  ? "text-[color:var(--color-accent)] break-words"
                  : "text-background/90 break-words"
              }
            >
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

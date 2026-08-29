import { BadgeCheck } from "lucide-react";

export type EvidenceArtifactField = {
  label: string;
  value: string;
  /** When true, render the value in confirmation green to mark verified facts. */
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
 * Design tokens: navy-900 surface, monospace, gray-500 labels, confirmation-green
 * status. The CONFIRMED status is the visual protagonist (header badge), matching
 * the client's reference design.
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
      {/* Header: trace ID + protagonist status badge */}
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-background/15 bg-background/[0.04] px-5 py-3.5">
        <span className="flex min-w-0 items-center gap-2.5 font-mono">
          <span className="sr-only">{caption} — </span>
          <span className="truncate text-base font-semibold tracking-wide text-background">
            {traceId}
          </span>
        </span>
        {status ? (
          <span
            className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-[#10b981]/40 bg-[#10b981]/15 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#10b981]"
            aria-label={`Status: ${status}`}
          >
            <BadgeCheck aria-hidden="true" strokeWidth={2.25} className="h-4 w-4" />
            <span>{status}</span>
          </span>
        ) : null}
      </figcaption>

      {/* Body: key-value record */}
      <dl className="grid grid-cols-[7rem_1fr] gap-x-5 gap-y-2.5 px-5 py-5 font-mono text-[12px] leading-relaxed sm:grid-cols-[8rem_1fr]">
        {meta ? (
          <div className="col-span-2 flex flex-wrap items-center gap-1.5 pb-1 text-[11px] text-background/55">
            {meta.split(" · ").map((m) => (
              <span
                key={m}
                className="rounded-sm border border-background/15 bg-background/5 px-1.5 py-0.5 uppercase tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>
        ) : null}
        {fields.map((f) => (
          <div key={f.label} className="contents">
            <dt className="pt-0.5 text-[10px] uppercase tracking-wider text-background/55">
              {f.label}
            </dt>
            <dd
              className={
                f.confirmed
                  ? "break-words font-medium text-[#10b981]"
                  : "break-words text-background/95"
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

import { useInView } from "@/hooks/use-in-view";

export type IllustrationProps = {
  src: string;
  /** Empty string marks the illustration as purely decorative. */
  alt: string;
  width: number;
  height: number;
  /** Skip lazy-loading for the hero/LCP illustration. */
  eager?: boolean;
  /** Soft pastel blob behind the figure. */
  blob?: boolean;
  /** Small floating flat accents (spark / cross / motion lines). */
  accents?: boolean;
  className?: string;
  imgClassName?: string;
  /**
   * Shared sizing scale.
   * hero: high-impact page hero art. section: subordinate in-page art.
   */
  scale?: "hero" | "section" | "none";
};

const SCALE_CLASS: Record<"hero" | "section" | "none", string> = {
  hero: "mx-auto w-full max-w-[400px] lg:max-w-[520px]",
  section: "mx-auto w-full max-w-[260px] lg:max-w-[320px]",
  none: "",
};

/**
 * Shared wrapper for the flat-design illustration system.
 * Handles the pastel backdrop, the decorative accents and the staggered
 * layer reveal (backdrop → figure → accents) once scrolled into view.
 */
export function Illustration({
  src,
  alt,
  width,
  height,
  eager = false,
  blob = false,
  accents = true,
  className,
  imgClassName,
  scale = "none",
}: IllustrationProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const state = inView ? "true" : "false";

  return (
    <div
      ref={ref}
      className={["relative isolate", SCALE_CLASS[scale], className ?? ""]
        .filter(Boolean)
        .join(" ")}
      data-inview={state}
    >
      {blob ? (
        <span
          aria-hidden="true"
          data-inview={state}
          className="illus-blob reveal reveal-scale absolute left-1/2 top-1/2 -z-10 block h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      ) : null}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        data-inview={state}
        aria-hidden={alt === "" ? true : undefined}
        className={
          "reveal reveal-delay-1 relative h-auto w-full select-none " +
          (imgClassName ?? "")
        }
      />

      {accents ? (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
          <svg
            data-inview={state}
            className="reveal reveal-delay-2 absolute left-[4%] top-[10%] h-6 w-6 text-[color:var(--illus-coral)] motion-safe:animate-[illus-float_5s_ease-in-out_infinite]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
          </svg>
          <svg
            data-inview={state}
            className="reveal reveal-delay-3 absolute right-[6%] top-[6%] h-5 w-5 text-[color:var(--illus-mustard)] motion-safe:animate-[illus-float_6.5s_ease-in-out_infinite]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          <svg
            data-inview={state}
            className="reveal reveal-delay-3 absolute bottom-[12%] right-[3%] h-8 w-8 text-primary/45 motion-safe:animate-[illus-float_7.5s_ease-in-out_infinite]"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 10h14M8 16h14M4 22h10" />
          </svg>
        </span>
      ) : null}
    </div>
  );
}

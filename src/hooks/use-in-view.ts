import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element scrolls into view.
 * Returns a ref to attach and a boolean to drive `data-inview`.
 * SSR-safe: starts false, observes only after hydration.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options?: { rootMargin?: string; threshold?: number },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: options?.rootMargin ?? "0px 0px -12% 0px",
        threshold: options?.threshold ?? 0.15,
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return { ref, inView } as const;
}

import type React from "react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// Traditional International Symbol of Access (ISA) — solid wheelchair figure
export function IconAccessibilityTraditional(props: IconProps) {
  return (
    <svg
      viewBox="0 0 315.86 391.01"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M128.78,391h-17.38c-35.98-2.32-68.65-21.22-88.72-49.13C-.05,310.27-5.86,271,5.99,234.89c12.13-36.97,41.42-65.39,78.84-76.94l.04,36.13c-37.03,16.65-57.24,55.83-49.1,95.34,7.82,37.93,40.99,66.37,80.34,67.84s73.87-23.52,84.94-61.54l12.9-.2,13.42,26.42c-18.2,39.19-55.81,65.43-98.58,69.06Z" />
      <path d="M175.46,227.42l66.61.08c7.89,0,15.66,4.44,19.3,11.58l51.81,101.67c6.01,11.79,1.55,25.49-9.86,31.13-11.84,5.85-24.84.69-30.86-11.14l-44.69-87.99-85.79-.1c-19.26-.02-33.83-15.29-34.47-34.27l.02-110.72c0-13.23,7.31-24.67,17.99-30.27,11.88-6.24,26.45-5.52,36.75,2.81,8.31,6.72,13.13,16.68,13.15,27.36l.08,50.82,57.02.03c5.62,0,10.51,2.92,13.48,6.86,3.4,4.49,4.37,10.49,2.22,15.64-3.03,7.24-9.11,11.51-16.87,11.5l-55.85-.03-.05,15.06Z" />
      <circle cx="141.51" cy="38.48" r="38.48" />
    </svg>
  );
}


// S-01 — Title II Readiness Sprint: clock + urgency notch
export function IconReadinessSprint(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="13" r="7.5" />
      <path d="M11 8.5V13l3 2" />
      <path d="M11 3.5V2M8.5 2h5" />
      <path d="M19 5l2 -2" />
    </svg>
  );
}

// S-02 — Section 508 / WCAG Audits: magnifier over document
export function IconWcagAudit(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h9l4 4v6" />
      <path d="M14 3v4h4" />
      <path d="M5 3v14a2 2 0 0 0 2 2h4" />
      <circle cx="16" cy="17" r="3.5" />
      <path d="M18.6 19.6L21 22" />
    </svg>
  );
}

// S-03 — PDF & Document Remediation: document with strikethrough correction
export function IconPdfRemediation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <path d="M14 2v4h4" />
      <path d="M8 12h8" />
      <path d="M9 10.5l6 3" />
      <path d="M8 16h5" />
    </svg>
  );
}

// S-04 — Post-Remediation Verification: checkmark + traceability chain
export function IconVerification(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="5.5" />
      <path d="M6.5 9l2 2 3.5-4" />
      <path d="M13.5 13l2.5 2.5" />
      <rect x="15" y="15" width="5" height="5" rx="1.2" />
      <path d="M17.5 15v-2.2M12.5 17.5h2.2" />
    </svg>
  );
}

// S-05 — Governance & Operations: simple org chart
export function IconGovernance(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="3" width="6" height="4" rx="0.5" />
      <rect x="3" y="16" width="6" height="4" rx="0.5" />
      <rect x="9" y="16" width="6" height="4" rx="0.5" />
      <rect x="15" y="16" width="6" height="4" rx="0.5" />
      <path d="M12 7v5" />
      <path d="M6 16v-2h12v2" />
    </svg>
  );
}

// S-06 — User Validation: screen with cursor + AT signal
export function IconUserValidation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="15" height="11" rx="1" />
      <path d="M7 19h6M10 15v4" />
      <path d="M9 8l3.5 5 1-2 2-1z" />
      <path d="M18 4c1 1 1.5 2.2 1.5 3.5S19 10 18 11" />
      <path d="M20 2c1.6 1.5 2.5 3.4 2.5 5.5S21.6 12 20 13.5" />
    </svg>
  );
}

export const serviceIconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  "S-01": IconReadinessSprint,
  "S-02": IconWcagAudit,
  "S-03": IconPdfRemediation,
  "S-04": IconVerification,
  "S-05": IconGovernance,
  "S-06": IconUserValidation,
};

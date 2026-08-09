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

// Traditional International Symbol of Access (ISA) — filled wheelchair figure
export function IconAccessibilityTraditional(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
      {...props}
    >
      {/* Head */}
      <circle cx="10.6" cy="4.9" r="2.2" />
      {/* Body, arm, seat and leg as one solid shape */}
      <path d="M8.8 7.4h3.6v4.6h6.4v2.2H10v5.2H8.8v-5.2H6.4v-2.2h2.4V7.4z" />
      <path d="M12.4 10.6l4.4-0.1 3.4 5.2-1.8 1.2-2.8-4.3H12.4z" />
      {/* Large wheel */}
      <path
        d="M5.5 12.5a5.3 5.3 0 1 1 9.8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Small rear wheel */}
      <circle cx="18.6" cy="18.6" r="2.1" />
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
